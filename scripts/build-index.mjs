/**
 * Generates src/data/generated/species-index.json — a lightweight summary of every
 * species used for search, lists, maps and charts. Full records (descriptions,
 * physical traits, threats, facts…) stay in src/data/species/*.ts and are
 * lazy-loaded per file on the species page.
 *
 * Runs automatically before `dev` and `build`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadFile } from './validate-species.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'src', 'data', 'species');
const outDir = path.join(root, 'src', 'data', 'generated');
fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts')).sort();
const all = [];
const seen = new Set();
for (const f of files) {
  let list;
  try {
    list = await loadFile(path.join(dir, f));
  } catch (err) {
    console.warn(`! skipped ${f}: ${err.message.split('\n')[0]}`);
    continue;
  }
  for (const s of list) {
    if (seen.has(s.id)) {
      console.warn(`! duplicate id skipped: ${s.id} (${f})`);
      continue;
    }
    seen.add(s.id);
    all.push({ ...s, file: f.replace(/\.ts$/, '') });
  }
}

const summaries = all.map((s) => ({
  id: s.id,
  file: s.file,
  commonName: s.commonName,
  scientificName: s.scientificName,
  altNames: s.altNames,
  ...(s.synonyms?.length ? { synonyms: s.synonyms } : {}),
  category: s.category,
  ...(s.secondaryCategories?.length ? { secondaryCategories: s.secondaryCategories } : {}),
  wikiTitle: s.wikiTitle,
  taxonomy: s.taxonomy,
  habitat: s.habitat,
  habitats: s.habitats,
  regions: s.regions,
  range: s.range,
  conservation: {
    status: s.conservation.status,
    trend: s.conservation.trend,
    ...(s.conservation.population ? { population: s.conservation.population } : {}),
    ...(s.conservation.assessed ? { assessed: s.conservation.assessed } : {}),
  },
  related: (s.related ?? []).filter((r) => seen.has(r) && r !== s.id),
}));

fs.writeFileSync(path.join(outDir, 'species-index.json'), JSON.stringify(summaries));
console.log(`✓ species index: ${summaries.length} species from ${files.length} files`);
