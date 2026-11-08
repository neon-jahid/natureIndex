/**
 * Build-time image resolver.
 *
 * 1. Collects every `wikiTitle` from the datasets.
 * 2. Resolves lead images in batches of 50 via the MediaWiki action API
 *    (500px thumbnail + 960px large) → src/data/images.json (main bundle, small).
 * 3. Collects up to 5 gallery photos per title via the REST media-list endpoint
 *    → src/data/generated/gallery.json (lazy-loaded on species pages).
 *
 * Incremental: titles already resolved are skipped unless --force is passed.
 * Usage: npm run fetch-images [-- --force] [-- --no-gallery]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = path.join(root, 'src', 'data');
const imagesFile = path.join(dataDir, 'images.json');
const galleryFile = path.join(dataDir, 'generated', 'gallery.json');
const UA = { 'User-Agent': 'NatureIndexBuild/1.0 (educational biodiversity project)' };
const FORCE = process.argv.includes('--force');
const NO_GALLERY = process.argv.includes('--no-gallery');
const EXTRA_TITLES = ['Sundarbans'];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function politeFetch(url) {
  for (let attempt = 0; attempt < 7; attempt++) {
    const res = await fetch(url, { headers: UA });
    if (res.status !== 429 && res.status < 500) return res;
    const wait = Number(res.headers.get('retry-after')) * 1000 || 1500 * 2 ** attempt;
    await sleep(wait);
  }
  return fetch(url, { headers: UA });
}

function collectTitles() {
  const files = [
    ...fs.readdirSync(path.join(dataDir, 'species')).map((f) => path.join(dataDir, 'species', f)),
    path.join(dataDir, 'categories.ts'),
    path.join(dataDir, 'habitats.ts'),
  ];
  const titles = new Set(EXTRA_TITLES);
  for (const f of files) {
    const src = fs.readFileSync(f, 'utf8');
    for (const m of src.matchAll(/wikiTitle:\s*(['"])(.+?)\1/g)) titles.add(m[2]);
  }
  return [...titles];
}

const clean = (u) => (u ? (u.startsWith('//') ? `https:${u}` : u).split('?')[0] : null);

/** Batched lead-image lookup; returns Map(requestedTitle → {t,l}). */
async function leadImages(titles) {
  const out = new Map();
  for (let i = 0; i < titles.length; i += 50) {
    const batch = titles.slice(i, i + 50);
    const results = {};
    for (const size of [500, 960]) {
      const url =
        'https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&redirects=1' +
        `&prop=pageimages&piprop=thumbnail&pithumbsize=${size}&pilimit=50&titles=${encodeURIComponent(batch.join('|'))}`;
      const j = await (await politeFetch(url)).json();
      // Map normalized/redirected titles back to the requested ones
      const back = new Map(batch.map((t) => [t, t]));
      for (const n of j.query?.normalized ?? []) back.set(n.to, back.get(n.from) ?? n.from);
      for (const r of j.query?.redirects ?? []) back.set(r.to, back.get(r.from) ?? r.from);
      for (const p of j.query?.pages ?? []) {
        const req = back.get(p.title) ?? p.title;
        results[req] ??= {};
        if (p.thumbnail?.source) results[req][size] = clean(p.thumbnail.source);
      }
      await sleep(400);
    }
    for (const t of batch) {
      const r = results[t];
      if (r?.[500] || r?.[960]) out.set(t, { t: r[500] ?? r[960], ...(r[960] && r[960] !== r[500] ? { l: r[960] } : {}) });
    }
    console.log(`  lead images ${Math.min(i + 50, titles.length)}/${titles.length}`);
  }
  return out;
}

async function galleryFor(title, lead) {
  const slug = encodeURIComponent(title.replace(/ /g, '_'));
  const res = await politeFetch(`https://en.wikipedia.org/api/rest_v1/page/media-list/${slug}`);
  if (!res.ok) return [];
  const j = await res.json();
  const urls = [];
  for (const item of j.items ?? []) {
    if (urls.length >= 5) break;
    if (item.type !== 'image' || !item.showInGallery) continue;
    const name = item.title ?? '';
    if (/\.(svg|gif|tif|tiff)$/i.test(name)) continue;
    if (/(^|[_:\s-])(map|range|distribution|logo|icon|diagram|status|skeleton|skull|chart|graph)/i.test(name)) continue;
    const src = clean(item.srcset?.[0]?.src);
    if (!src) continue;
    const big = src.replace(/\/(\d+)px-/, '/960px-');
    if (big === lead || src === lead) continue;
    urls.push(big);
  }
  return urls;
}

const titles = collectTitles();
const images = fs.existsSync(imagesFile) ? JSON.parse(fs.readFileSync(imagesFile, 'utf8')) : {};
const gallery = fs.existsSync(galleryFile) ? JSON.parse(fs.readFileSync(galleryFile, 'utf8')) : {};

// Migrate old format {thumb, large, gallery, page}
for (const [k, v] of Object.entries(images)) {
  if (v && 'thumb' in v) {
    images[k] = { t: v.thumb, ...(v.large && v.large !== v.thumb ? { l: v.large } : {}) };
    if (v.gallery?.length && !gallery[k]) gallery[k] = v.gallery;
  }
}

const todo = titles.filter((t) => FORCE || !images[t]);
console.log(`Resolving lead images for ${todo.length} of ${titles.length} titles…`);
const found = await leadImages(todo);
for (const t of todo) {
  if (found.has(t)) images[t] = found.get(t);
  else console.warn(`✗ no image: ${t}`);
}

if (!NO_GALLERY) {
  const gTodo = titles.filter((t) => images[t] && (FORCE || !(t in gallery)));
  console.log(`Collecting galleries for ${gTodo.length} titles…`);
  let n = 0;
  for (const t of gTodo) {
    try {
      gallery[t] = await galleryFor(t, images[t].l ?? images[t].t);
    } catch {
      /* optional */
    }
    if (++n % 25 === 0) {
      console.log(`  galleries ${n}/${gTodo.length}`);
      fs.writeFileSync(galleryFile, JSON.stringify(gallery));
    }
    await sleep(250);
  }
}

// Keep only titles still in use
const keep = new Set(titles);
for (const k of Object.keys(images)) if (!keep.has(k)) delete images[k];
for (const k of Object.keys(gallery)) if (!keep.has(k)) delete gallery[k];

fs.mkdirSync(path.dirname(galleryFile), { recursive: true });
fs.writeFileSync(imagesFile, JSON.stringify(images, null, 0) + '\n');
fs.writeFileSync(galleryFile, JSON.stringify(gallery));
const missing = titles.filter((t) => !images[t]);
console.log(`\n✓ ${Object.keys(images).length} lead images, ${Object.keys(gallery).length} galleries. Missing: ${missing.length ? missing.join(', ') : 'none'}`);
