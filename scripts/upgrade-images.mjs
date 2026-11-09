/**
 * Replaces low-definition photos in images.json and gallery.json.
 *
 * A photo counts as HD when its original is at least MIN_WIDTH pixels wide. Replacements
 * come from the taxon's Wikidata image, its Wikimedia Commons category, then a Commons
 * search on the scientific name.
 *
 * Idempotent: only low-definition or blocklisted entries change. Run it after
 * `npm run fetch-images`. To reject a photo, add its file name (spaces, no "File:")
 * to scripts/image-blocklist.json and run this again.
 *
 * Usage: npm run upgrade-images [-- --report=path.json]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesFile = path.join(root, 'src/data/images.json');
const galleryFile = path.join(root, 'src/data/generated/gallery.json');
const indexFile = path.join(root, 'src/data/generated/species-index.json');
const blocklistFile = path.join(root, 'scripts/image-blocklist.json');
const reportArg = process.argv.find((a) => a.startsWith('--report='))?.slice(9);

const MIN_WIDTH = 1280;
const GALLERY_SIZE = 5;
const UA = { 'User-Agent': 'NatureIndexBuild/1.0 (educational biodiversity project)' };
const EN = 'https://en.wikipedia.org/w/api.php';
const COMMONS = 'https://commons.wikimedia.org/w/api.php';
const WIKIDATA = 'https://www.wikidata.org/w/api.php';

/** File names that are almost never a good photo of the living organism. */
const NOT_A_PHOTO =
  /(^|[\s_\-(,.])(maps?|range|distribution|locator|skeletons?|skulls?|bones?|dissect\w*|diagram|chart|graph|logo|icon|stamps?|coin|drawing|illustration|painting|plate|tafel|engraving|sketch|herbarium|specimens?|holotype|paratype|lectotype|syntype|museum|naturalis|nhm|bhl|taxidermy|mounted|stuffed|preserved|dead|roadkill|carcass|fossil|eggs?|x-ray|microscop\w*|sonogram|spectrogram|book|poster|sign)([\s_\-).,]|$)/i;
const MAP_LIKE = /(^|[\s_-])(distribution|maps?)([\s_.-]|$)/i;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const readJson = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));

const images = readJson(imagesFile);
const gallery = readJson(galleryFile);
const blocked = new Set(fs.existsSync(blocklistFile) ? readJson(blocklistFile) : []);
const sciByTitle = new Map(readJson(indexFile).map((s) => [s.wikiTitle, s.scientificName]));

async function api(base, params) {
  for (let attempt = 0; attempt < 7; attempt++) {
    const res = await fetch(`${base}?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`, { headers: UA });
    if (res.status !== 429 && res.status < 500) return res.json();
    await sleep(Number(res.headers.get('retry-after')) * 1000 || 1500 * 2 ** attempt);
  }
  throw new Error(`API kept failing: ${base}`);
}

function fileNameOf(url) {
  const parts = url.split('?')[0].split('/');
  const i = parts.indexOf('thumb');
  return decodeURIComponent(i >= 0 ? parts[i + 3] : parts[parts.length - 1]).replace(/_/g, ' ');
}

async function measure(names) {
  const info = new Map();
  for (let i = 0; i < names.length; i += 50) {
    const batch = names.slice(i, i + 50);
    const j = await api(EN, { action: 'query', prop: 'imageinfo', iiprop: 'size|mime', titles: batch.map((n) => `File:${n}`).join('|') });
    const back = new Map(batch.map((n) => [`File:${n}`, n]));
    for (const n of j.query?.normalized ?? []) back.set(n.to, back.get(n.from) ?? n.from);
    for (const p of j.query?.pages ?? []) {
      if (p.imageinfo?.[0]) info.set(back.get(p.title) ?? p.title.slice(5), p.imageinfo[0]);
    }
    await sleep(250);
  }
  return info;
}

/** Lead image and Commons category recorded on Wikidata for each title. */
async function wikidataFor(titles) {
  const qidByTitle = new Map();
  for (let i = 0; i < titles.length; i += 50) {
    const batch = titles.slice(i, i + 50);
    const j = await api(EN, { action: 'query', prop: 'pageprops', ppprop: 'wikibase_item', redirects: '1', titles: batch.join('|') });
    const back = new Map(batch.map((t) => [t, t]));
    for (const n of j.query?.normalized ?? []) back.set(n.to, back.get(n.from) ?? n.from);
    for (const r of j.query?.redirects ?? []) back.set(r.to, back.get(r.from) ?? r.from);
    for (const p of j.query?.pages ?? []) {
      if (p.pageprops?.wikibase_item) qidByTitle.set(back.get(p.title) ?? p.title, p.pageprops.wikibase_item);
    }
    await sleep(250);
  }
  const claims = new Map();
  const qids = [...new Set(qidByTitle.values())];
  for (let i = 0; i < qids.length; i += 50) {
    const j = await api(WIKIDATA, { action: 'wbgetentities', props: 'claims', ids: qids.slice(i, i + 50).join('|') });
    for (const [q, e] of Object.entries(j.entities ?? {})) claims.set(q, e.claims ?? {});
    await sleep(250);
  }
  const first = (c, prop) => c?.[prop]?.[0]?.mainsnak?.datavalue?.value;
  return new Map(titles.map((t) => {
    const c = claims.get(qidByTitle.get(t));
    return [t, { image: first(c, 'P18'), category: first(c, 'P373') }];
  }));
}

function toCandidate(p) {
  const ii = p.imageinfo?.[0];
  if (!ii || !/jpeg|png|webp/.test(ii.mime)) return null;
  const file = p.title.replace(/^File:/, '');
  const cats = ii.extmetadata?.Categories?.value ?? '';
  return { file, w: ii.width, h: ii.height, url: ii.url, mime: ii.mime, quality: /Featured pictures|Quality images|Valued images/i.test(cats) };
}

async function commonsPages(params, maxRounds = 2) {
  const pages = new Map();
  let cont = {};
  for (let round = 0; round < maxRounds; round++) {
    const j = await api(COMMONS, { action: 'query', prop: 'imageinfo', iiprop: 'size|mime|url|extmetadata', iiextmetadatafilter: 'Categories', ...params, ...cont });
    for (const p of j.query?.pages ?? []) if (p.imageinfo || !pages.has(p.title)) pages.set(p.title, p);
    if (!j.continue) break;
    cont = j.continue;
    await sleep(200);
  }
  return [...pages.values()];
}

async function candidatesFor(title, wd) {
  const sci = sciByTitle.get(title);
  const out = new Map();
  const add = (pages, accept = () => true) => {
    for (const p of pages) {
      const c = toCandidate(p);
      if (c && accept(c)) out.set(c.file, c);
    }
  };
  let wikidataFile;
  if (wd?.image) {
    const pages = await commonsPages({ titles: `File:${wd.image}` }, 1);
    add(pages);
    wikidataFile = pages[0]?.title.replace(/^File:/, '');
  }
  const category = wd?.category ?? sci;
  if (category) add(await commonsPages({ generator: 'categorymembers', gcmtitle: `Category:${category}`, gcmtype: 'file', gcmlimit: '100' }));
  if (sci && [...out.values()].filter(isUsable).length < GALLERY_SIZE + 1) {
    const needle = sci.toLowerCase();
    add(
      await commonsPages({ generator: 'search', gsrsearch: `"${sci}" filetype:bitmap`, gsrnamespace: '6', gsrlimit: '50' }, 1),
      (c) => c.file.toLowerCase().replace(/_/g, ' ').includes(needle),
    );
  }
  await sleep(150);
  return { list: [...out.values()], wikidataFile };
}

function isUsable(c) {
  const ratio = c.w / c.h;
  return !blocked.has(c.file) && !NOT_A_PHOTO.test(c.file) && ratio >= 0.9 && ratio <= 2.2 && Buffer.byteLength(c.file) < 150;
}

function score(c) {
  const ratio = c.w / c.h;
  return (c.quality ? 5000 : 0) + Math.min(c.w, 3000) + (ratio >= 1.25 && ratio <= 1.8 ? 1000 : 0) + (c.mime.includes('jpeg') ? 500 : 0);
}

function thumbUrl(c, width) {
  const encoded = c.url.split('/').pop();
  return `${c.url.replace('upload.wikimedia.org/wikipedia/commons/', 'thumb.wikimedia.org/wikipedia/commons/thumb/')}/${width}px-${encoded}`;
}

/** Commons series ("Foo 1.jpg", "Foo 2.jpg") are near-duplicates; keep one of each. */
const seriesKey = (file) => file.replace(/\.\w+$/, '').replace(/[\d\s_().,-]+/g, '').toLowerCase();

async function urlWorks(url) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { method: 'HEAD', headers: UA });
    if (res.status !== 429 && res.status < 500) return res.ok;
    await sleep(1500 * 2 ** attempt);
  }
  return true; // Throttled rather than broken; the app falls back on load errors anyway.
}

// 1. Measure what is baked today
const allFiles = new Set();
for (const v of Object.values(images)) allFiles.add(fileNameOf(v.l ?? v.t));
for (const list of Object.values(gallery)) for (const u of list) allFiles.add(fileNameOf(u));
console.log(`Measuring ${allFiles.size} files…`);
const sizes = await measure([...allFiles]);

const isHd = (file) => {
  const ii = sizes.get(file);
  return !!ii && ii.width >= MIN_WIDTH && /jpeg|png|webp/.test(ii.mime) && !blocked.has(file);
};

// 2. Work out what has to change
const needsLead = new Set(Object.keys(images).filter((t) => {
  const f = fileNameOf(images[t].l ?? images[t].t);
  return !isHd(f) || MAP_LIKE.test(f);
}));
const keptGallery = new Map();
for (const t of Object.keys(images)) {
  const seen = new Set();
  keptGallery.set(t, (gallery[t] ?? []).filter((u) => {
    const f = fileNameOf(u);
    if (!isHd(f) || seen.has(f)) return false;
    seen.add(f);
    return true;
  }));
}
const todo = Object.keys(images).filter((t) => needsLead.has(t) || keptGallery.get(t).length < GALLERY_SIZE);
console.log(`${needsLead.size} covers to replace; ${todo.length} titles need new photos. Looking up Wikidata…`);
const wd = await wikidataFor(todo);

// 3. Choose replacements
const report = { leads: [], kept: [], galleryAdded: [], galleryRemoved: 0, brokenUrls: [] };
let done = 0;
for (const t of todo) {
  let found = { list: [], wikidataFile: undefined };
  try {
    found = await candidatesFor(t, wd.get(t));
  } catch (e) {
    console.warn(`  lookup failed for ${t}: ${e.message}`);
  }
  const usable = found.list.filter(isUsable).sort((a, b) => score(b) - score(a));
  const hd = usable.filter((c) => c.w >= MIN_WIDTH);

  let leadFile = fileNameOf(images[t].l ?? images[t].t);
  if (needsLead.has(t)) {
    const pick = hd.find((c) => c.file === found.wikidataFile && c.file !== leadFile) ?? hd.find((c) => c.file !== leadFile);
    const fallback = usable.find((c) => c.w > (sizes.get(leadFile)?.width ?? 0));
    const lead = pick ?? (MAP_LIKE.test(leadFile) ? usable[0] : fallback);
    if (lead && (await urlWorks(thumbUrl(lead, 960)))) {
      report.leads.push({ title: t, sci: sciByTitle.get(t), oldFile: leadFile, oldW: sizes.get(leadFile)?.width, file: lead.file, w: lead.w, h: lead.h, hd: lead.w >= MIN_WIDTH, thumb: thumbUrl(lead, 500) });
      images[t] = { t: thumbUrl(lead, 500), l: thumbUrl(lead, 960) };
      leadFile = lead.file;
    } else {
      report.kept.push({ title: t, sci: sciByTitle.get(t), file: leadFile, w: sizes.get(leadFile)?.width });
    }
  }

  const kept = keptGallery.get(t).filter((u) => fileNameOf(u) !== leadFile);
  const usedKeys = new Set([leadFile, ...kept.map(fileNameOf)].map(seriesKey));
  for (const c of hd) {
    if (kept.length >= GALLERY_SIZE) break;
    const key = seriesKey(c.file);
    if (c.file === leadFile || usedKeys.has(key)) continue;
    const url = thumbUrl(c, 960);
    if (!(await urlWorks(url))) {
      report.brokenUrls.push(url);
      continue;
    }
    usedKeys.add(key);
    kept.push(url);
    report.galleryAdded.push({ title: t, sci: sciByTitle.get(t), file: c.file, thumb: thumbUrl(c, 500) });
    await sleep(50);
  }
  keptGallery.set(t, kept);
  if (++done % 25 === 0) console.log(`  ${done}/${todo.length}`);
}

// 4. Save
for (const t of Object.keys(gallery)) {
  const before = gallery[t].length;
  const after = keptGallery.get(t);
  if (!after) continue;
  report.galleryRemoved += gallery[t].filter((u) => !after.includes(u)).length;
  gallery[t] = after;
  if (before === 0 && after.length === 0) continue;
}
for (const [t, list] of keptGallery) if (list.length) gallery[t] = list;

fs.writeFileSync(imagesFile, JSON.stringify(images, null, 0) + '\n');
fs.writeFileSync(galleryFile, JSON.stringify(gallery));
if (reportArg) fs.writeFileSync(reportArg, JSON.stringify(report, null, 1));

console.log(`\n✓ covers replaced: ${report.leads.length} (${report.leads.filter((l) => l.hd).length} HD)`);
console.log(`  covers with no better photo: ${report.kept.length}`);
console.log(`  gallery photos removed: ${report.galleryRemoved}, added: ${report.galleryAdded.length}, broken URLs skipped: ${report.brokenUrls.length}`);
