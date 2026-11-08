import type { SpeciesSummary } from '@/types';
import i18n from '@/i18n';
import { asciiDigits } from './format';

/** Lower-case, strip diacritics (Latin only) and collapse whitespace. Bengali is preserved. */
export function normalize(s: string): string {
  return asciiDigits(s)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .normalize('NFC')
    .toLowerCase()
    .replace(/[’'`"]/g, '')
    .replace(/[\s\-_.,]+/g, ' ')
    .trim();
}

interface IndexEntry {
  species: SpeciesSummary;
  /** Primary fields (names) — weighted higher. */
  primary: string[];
  /** Secondary fields (categories, taxonomy, habitats). */
  secondary: string[];
}

let index: IndexEntry[] | null = null;
let indexedFor: SpeciesSummary[] | null = null;

function categoryNames(id: string): string[] {
  return (['en', 'bn'] as const).map((l) => i18n.getFixedT(l, 'categories')(`categories.${id}.name`) as string);
}
function habitatNames(id: string): string[] {
  return (['en', 'bn'] as const).map((l) => i18n.getFixedT(l, 'categories')(`habitats.${id}.name`) as string);
}

function build(list: SpeciesSummary[]): IndexEntry[] {
  return list.map((s) => {
    const cats = [s.category, ...(s.secondaryCategories ?? [])];
    return {
      species: s,
      primary: [
        s.commonName.en,
        s.commonName.bn,
        s.scientificName,
        ...s.altNames.en,
        ...s.altNames.bn,
        ...(s.synonyms ?? []),
      ].map(normalize),
      secondary: [
        ...cats.flatMap(categoryNames),
        ...cats,
        ...s.habitats.flatMap(habitatNames),
        s.taxonomy.family,
        s.taxonomy.order,
        s.taxonomy.class,
        s.taxonomy.genus,
      ].map(normalize),
    };
  });
}

/**
 * Score a species against a query. Higher is better; 0 = no match.
 * Every query token must match somewhere (AND semantics).
 */
function score(entry: IndexEntry, q: string, tokens: string[]): number {
  let total = 0;
  for (const p of entry.primary) {
    if (p === q) total = Math.max(total, 100);
    else if (p.startsWith(q)) total = Math.max(total, 80);
    else if (p.split(' ').some((w) => w.startsWith(q))) total = Math.max(total, 65);
    else if (p.includes(q)) total = Math.max(total, 50);
  }
  if (total > 0) return total;

  // Multi-token / secondary-field matching
  const hay = [...entry.primary, ...entry.secondary];
  const allTokensMatch = tokens.every((tk) => hay.some((h) => h.includes(tk)));
  if (!allTokensMatch) return 0;
  const inPrimary = tokens.every((tk) => entry.primary.some((h) => h.includes(tk)));
  return inPrimary ? 40 : 20;
}

export function searchSpecies(list: SpeciesSummary[], query: string): SpeciesSummary[] {
  const q = normalize(query);
  if (!q) return list;
  if (indexedFor !== list || !index) {
    index = build(list);
    indexedFor = list;
  }
  const tokens = q.split(' ').filter(Boolean);
  return index
    .map((e) => ({ s: e.species, sc: score(e, q, tokens) }))
    .filter((r) => r.sc > 0)
    .sort((a, b) => b.sc - a.sc)
    .map((r) => r.s);
}
