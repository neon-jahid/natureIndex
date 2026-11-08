/**
 * Cross-checks species data against Wikipedia + Wikidata:
 *  - wikiTitle resolves to a real (non-disambiguation) article
 *  - IUCN status (Wikidata P141) matches `conservation.status`
 *  - taxon name (Wikidata P225) matches `scientificName` (or a listed synonym)
 *
 * Usage:
 *   node scripts/verify-wikidata.mjs                 report only
 *   node scripts/verify-wikidata.mjs --apply-status  also rewrite mismatched statuses in the source files
 * Writes a JSON report to scripts/.verify-report.json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadFile } from './validate-species.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'src', 'data', 'species');
const UA = { 'User-Agent': 'NatureIndexBuild/1.0 (educational biodiversity project)' };
const APPLY = process.argv.includes('--apply-status');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJson(url) {
  for (let a = 0; a < 7; a++) {
    const res = await fetch(url, { headers: UA });
    if (res.ok) return res.json();
    if (res.status !== 429 && res.status < 500) throw new Error(`${res.status} ${url}`);
    await sleep(Number(res.headers.get('retry-after')) * 1000 || 1500 * 2 ** a);
  }
  throw new Error(`gave up ${url}`);
}

const LABEL_TO_CODE = {
  'least concern': 'LC',
  'near threatened': 'NT',
  vulnerable: 'VU',
  endangered: 'EN',
  'critically endangered': 'CR',
  'extinct in the wild': 'EW',
  extinct: 'EX',
  'data deficient': 'DD',
  'not evaluated': 'NE',
  'conservation dependent': 'NT',
  'lower risk/conservation dependent': 'NT',
  'lower risk/near threatened': 'NT',
  'lower risk/least concern': 'LC',
};

// Load all species with their file
const records = [];
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.ts'))) {
  try {
    for (const s of await loadFile(path.join(dir, f))) records.push({ s, file: f });
  } catch (e) {
    console.warn(`! could not load ${f}: ${e.message.split('\n')[0]}`);
  }
}
console.log(`Checking ${records.length} species…`);

// 1. Titles → Wikidata ids
const titleInfo = new Map();
const titles = [...new Set(records.map((r) => r.s.wikiTitle))];
for (let i = 0; i < titles.length; i += 50) {
  const batch = titles.slice(i, i + 50);
  const j = await getJson(
    'https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&redirects=1&prop=pageprops&ppprop=wikibase_item|disambiguation&titles=' +
      encodeURIComponent(batch.join('|')),
  );
  const back = new Map(batch.map((t) => [t, t]));
  for (const n of j.query?.normalized ?? []) back.set(n.to, back.get(n.from) ?? n.from);
  for (const r of j.query?.redirects ?? []) back.set(r.to, back.get(r.from) ?? r.from);
  for (const p of j.query?.pages ?? []) {
    const req = back.get(p.title) ?? p.title;
    titleInfo.set(req, {
      missing: !!p.missing || !!p.invalid,
      disambig: p.pageprops && 'disambiguation' in p.pageprops,
      qid: p.pageprops?.wikibase_item,
      resolved: p.title,
    });
  }
  await sleep(300);
}

// 2. Wikidata claims
const qids = [...new Set([...titleInfo.values()].map((v) => v.qid).filter(Boolean))];
const claims = new Map();
for (let i = 0; i < qids.length; i += 50) {
  const j = await getJson(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=claims&ids=${qids.slice(i, i + 50).join('|')}`);
  for (const [id, ent] of Object.entries(j.entities ?? {})) {
    const pick = (prop) => {
      const cs = ent.claims?.[prop] ?? [];
      const pref = cs.find((c) => c.rank === 'preferred') ?? cs.filter((c) => c.rank !== 'deprecated').at(-1);
      return pref?.mainsnak?.datavalue?.value;
    };
    const iucn = pick('P141');
    claims.set(id, { iucnQ: iucn?.id, taxon: pick('P225') });
  }
  await sleep(300);
}

// 3. Labels for IUCN status items
const statusQ = [...new Set([...claims.values()].map((c) => c.iucnQ).filter(Boolean))];
const statusCode = new Map();
for (let i = 0; i < statusQ.length; i += 50) {
  const j = await getJson(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=labels&languages=en&ids=${statusQ.slice(i, i + 50).join('|')}`);
  for (const [id, ent] of Object.entries(j.entities ?? {})) {
    const label = ent.labels?.en?.value?.toLowerCase() ?? '';
    statusCode.set(id, LABEL_TO_CODE[label] ?? `?${label}`);
  }
}

// 4. Compare
const report = { titleProblems: [], statusMismatch: [], taxonMismatch: [], noStatusOnWikidata: [] };
for (const { s, file } of records) {
  const info = titleInfo.get(s.wikiTitle);
  if (!info || info.missing) {
    report.titleProblems.push({ id: s.id, file, wikiTitle: s.wikiTitle, problem: 'missing article' });
    continue;
  }
  if (info.disambig) report.titleProblems.push({ id: s.id, file, wikiTitle: s.wikiTitle, problem: 'disambiguation page' });
  const c = info.qid && claims.get(info.qid);
  if (!c) continue;
  const wd = c.iucnQ ? statusCode.get(c.iucnQ) : undefined;
  if (wd && !wd.startsWith('?') && wd !== s.conservation.status) {
    report.statusMismatch.push({ id: s.id, file, ours: s.conservation.status, wikidata: wd });
  } else if (!wd && s.conservation.status !== 'NE') {
    report.noStatusOnWikidata.push({ id: s.id, ours: s.conservation.status });
  }
  const names = [s.scientificName, ...(s.synonyms ?? [])].map((x) => x.toLowerCase());
  if (c.taxon && !names.includes(c.taxon.toLowerCase())) {
    // A trinomial whose binomial matches the article is fine (e.g. tiger subspecies on a species page)
    const bin = s.scientificName.split(' ').slice(0, 2).join(' ').toLowerCase();
    if (bin !== c.taxon.toLowerCase()) report.taxonMismatch.push({ id: s.id, file, ours: s.scientificName, wikidata: c.taxon, resolvedTitle: info.resolved });
  }
}

fs.writeFileSync(path.join(root, 'scripts', '.verify-report.json'), JSON.stringify(report, null, 2));
console.log(`\nTitle problems (${report.titleProblems.length}):`);
report.titleProblems.forEach((r) => console.log(`  ${r.id}: "${r.wikiTitle}" — ${r.problem}`));
console.log(`\nIUCN status mismatches (${report.statusMismatch.length}):`);
report.statusMismatch.forEach((r) => console.log(`  ${r.id}: ours ${r.ours} → Wikidata ${r.wikidata}`));
console.log(`\nTaxon name mismatches (${report.taxonMismatch.length}):`);
report.taxonMismatch.forEach((r) => console.log(`  ${r.id}: ours "${r.ours}" vs Wikidata "${r.wikidata}" (${r.resolvedTitle})`));
console.log(`\nNo IUCN status on Wikidata but ours is not NE: ${report.noStatusOnWikidata.length}`);

if (APPLY && report.statusMismatch.length) {
  let changed = 0;
  for (const m of report.statusMismatch) {
    const fp = path.join(dir, m.file);
    let src = fs.readFileSync(fp, 'utf8');
    const at = src.search(new RegExp(`id:\\s*['"]${m.id}['"]`));
    if (at < 0) continue;
    const rel = src.slice(at).search(/status:\s*['"][A-Z]{2}['"]/);
    if (rel < 0) continue;
    const pos = at + rel;
    src = src.slice(0, pos) + src.slice(pos).replace(/status:\s*['"][A-Z]{2}['"]/, `status: '${m.wikidata}'`);
    fs.writeFileSync(fp, src);
    changed++;
  }
  console.log(`\nApplied ${changed} status corrections.`);
}
