/**
 * Schema validator for species data files.
 * Usage: node scripts/validate-species.mjs [file ...]   (defaults to all files in src/data/species)
 * Exits non-zero when errors are found.
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { transform } from 'esbuild';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'src', 'data', 'species');

const CATEGORIES = ['mammals', 'birds', 'reptiles', 'amphibians', 'fish', 'insects', 'plants', 'trees', 'flowers', 'fungi', 'marine', 'freshwater'];
const HABITATS = ['tropical-forest', 'temperate-forest', 'mangrove', 'grassland', 'wetland', 'rivers-lakes', 'ocean', 'coral-reef', 'desert', 'mountain', 'polar', 'urban-farmland'];
const REGIONS = ['south-asia', 'southeast-asia', 'east-asia', 'africa', 'europe', 'north-america', 'south-america', 'oceania', 'polar', 'oceans'];
const STATUS = ['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC', 'DD', 'NE'];
const TRENDS = ['increasing', 'decreasing', 'stable', 'unknown'];
const LATIN_DIGIT = /[0-9]/;

export async function loadFile(file) {
  const src = fs.readFileSync(file, 'utf8').replace(/^import type .*$/gm, '');
  const { code } = await transform(src, { loader: 'ts', format: 'esm' });
  const tmp = path.join(os.tmpdir(), `ni-${path.basename(file, '.ts')}-${process.pid}-${Math.random().toString(36).slice(2)}.mjs`);
  fs.writeFileSync(tmp, code);
  try {
    const mod = await import(pathToFileURL(tmp).href);
    return Object.values(mod).filter(Array.isArray).flat();
  } finally {
    fs.rmSync(tmp, { force: true });
  }
}

function checkSpecies(s, errors) {
  const e = (m) => errors.push(`${s?.id ?? '?'}: ${m}`);
  const lt = (v, name, { digits = false } = {}) => {
    if (!v || typeof v.en !== 'string' || typeof v.bn !== 'string' || !v.en.trim() || !v.bn.trim()) return e(`${name} must be {en,bn} non-empty`);
    if (!digits && LATIN_DIGIT.test(v.bn)) e(`${name}.bn contains Latin digits (use ০-৯)`);
  };
  const ll = (v, name, min = 1) => {
    if (!v || !Array.isArray(v.en) || !Array.isArray(v.bn)) return e(`${name} must be {en:[],bn:[]}`);
    if (v.en.length !== v.bn.length) e(`${name} en/bn length mismatch (${v.en.length}/${v.bn.length})`);
    if (v.en.length < min) e(`${name} needs at least ${min} items`);
    v.bn.forEach((x, i) => LATIN_DIGIT.test(x) && e(`${name}.bn[${i}] contains Latin digits`));
  };
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s.id ?? '')) e('id must be kebab-case');
  lt(s.commonName, 'commonName');
  if (!s.scientificName || !/^[A-Z][a-z]+( [a-z.×-]+){1,3}$/.test(s.scientificName)) e(`scientificName looks wrong: ${s.scientificName}`);
  ll(s.altNames, 'altNames', 0);
  if (!CATEGORIES.includes(s.category)) e(`bad category ${s.category}`);
  (s.secondaryCategories ?? []).forEach((c) => !CATEGORIES.includes(c) && e(`bad secondary category ${c}`));
  if (!s.wikiTitle) e('wikiTitle missing');
  lt(s.description, 'description');
  const tx = s.taxonomy ?? {};
  for (const k of ['kingdom', 'phylum', 'class', 'order', 'family', 'genus', 'species']) if (!tx[k]) e(`taxonomy.${k} missing`);
  if (!['Animalia', 'Plantae', 'Fungi'].includes(tx.kingdom)) e(`taxonomy.kingdom must be Animalia/Plantae/Fungi`);
  lt(s.physical?.size, 'physical.size');
  lt(s.physical?.weight, 'physical.weight');
  lt(s.physical?.lifespan, 'physical.lifespan');
  ll(s.physical?.features, 'physical.features', 2);
  lt(s.habitat, 'habitat');
  if (!s.habitats?.length) e('habitats empty');
  (s.habitats ?? []).forEach((h) => !HABITATS.includes(h) && e(`bad habitat ${h}`));
  if (!s.regions?.length) e('regions empty');
  (s.regions ?? []).forEach((r) => !REGIONS.includes(r) && e(`bad region ${r}`));
  for (const k of ['distribution', 'climate', 'diet', 'ecologicalRole', 'behavior']) lt(s[k], k);
  const pts = s.range?.native ?? [];
  if (pts.length < 3 || pts.length > 8) e(`range.native needs 3–8 points (has ${pts.length})`);
  [...pts, ...(s.range?.introduced ?? [])].forEach((p) => {
    if (!Array.isArray(p) || p.length !== 2 || Math.abs(p[0]) > 90 || Math.abs(p[1]) > 180) e(`bad lat/lng ${JSON.stringify(p)}`);
  });
  if (s.range?.endemicTo) lt(s.range.endemicTo, 'range.endemicTo');
  const c = s.conservation ?? {};
  if (!STATUS.includes(c.status)) e(`bad status ${c.status}`);
  if (!TRENDS.includes(c.trend)) e(`bad trend ${c.trend}`);
  if (c.population) lt(c.population, 'conservation.population');
  ll(c.threats, 'conservation.threats', 1);
  ll(c.initiatives, 'conservation.initiatives', 1);
  if (c.assessed && !/^\d{4}$/.test(c.assessed)) e('conservation.assessed must be YYYY');
  ll(s.facts, 'facts', 2);
  if (!Array.isArray(s.related)) e('related must be an array');
}

async function main() {
  const args = process.argv.slice(2);
  const files = args.length ? args.map((f) => path.resolve(f)) : fs.readdirSync(dir).filter((f) => f.endsWith('.ts')).map((f) => path.join(dir, f));
  const errors = [];
  const ids = new Map();
  const sci = new Map();
  let count = 0;
  for (const f of files) {
    let list;
    try {
      list = await loadFile(f);
    } catch (err) {
      errors.push(`${path.basename(f)}: failed to parse — ${err.message.split('\n')[0]}`);
      continue;
    }
    for (const s of list) {
      count++;
      checkSpecies(s, errors);
      if (ids.has(s.id)) errors.push(`duplicate id ${s.id} (${ids.get(s.id)} & ${path.basename(f)})`);
      ids.set(s.id, path.basename(f));
      const key = (s.scientificName ?? '').toLowerCase();
      if (sci.has(key)) errors.push(`duplicate scientificName ${s.scientificName} (${sci.get(key)} & ${s.id})`);
      sci.set(key, s.id);
    }
  }
  if (errors.length) {
    console.log(errors.join('\n'));
    console.log(`\n✗ ${errors.length} problem(s) in ${count} species`);
    process.exit(1);
  }
  console.log(`✓ ${count} species valid`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
