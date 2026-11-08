import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FlaskConical, ImagePlus, Info, Lightbulb, Loader2, RotateCcw, ScanSearch } from 'lucide-react';
import type { CategoryId, SpeciesSummary } from '@/types';
import { species as allSpecies } from '@/data/species';
import { categories } from '@/data/categories';
import { useLang } from '@/hooks/useLang';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHeader } from '@/components/common/Section';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { ConservationBadge } from '@/components/species/ConservationBadge';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/primitives';
import { Tip } from '@/components/ui/tooltip';
import { cn } from '@/utils/cn';

const MAX_BYTES = 10 * 1024 * 1024;
const ACCEPT = ['image/jpeg', 'image/png', 'image/webp'];

interface Match {
  species: SpeciesSummary;
  score: number;
}

/** Average colour + a cheap fingerprint of the image (runs locally on a canvas). */
async function analyseImage(url: string): Promise<{ h: number; s: number; l: number; seed: number }> {
  const img = new Image();
  img.src = url;
  await img.decode();
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, 0, 0, 32, 32);
  const data = ctx.getImageData(0, 0, 32, 32).data;
  let r = 0,
    g = 0,
    b = 0,
    seed = 0;
  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    seed = (seed * 31 + data[i] + data[i + 1] * 3 + data[i + 2] * 7) >>> 0;
  }
  const px = data.length / 4;
  r /= px * 255;
  g /= px * 255;
  b /= px * 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  let h = 0;
  if (d) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  const s = d ? d / (1 - Math.abs(2 * l - 1)) : 0;
  return { h, s, l, seed };
}

/** Rough colour → category affinity used ONLY to make the simulation feel plausible. */
function colourAffinity(h: number, s: number): Partial<Record<CategoryId, number>> {
  if (s < 0.12) return { birds: 1, mammals: 0.8, fungi: 0.8, marine: 0.5 };
  if (h >= 70 && h < 170) return { plants: 1.4, trees: 1.3, amphibians: 1, flowers: 0.6, insects: 0.6, reptiles: 0.6 };
  if (h >= 170 && h < 260) return { marine: 1.4, fish: 1.2, freshwater: 1.1, birds: 0.7 };
  if (h >= 260 && h < 340) return { flowers: 1.5, insects: 0.8, marine: 0.6 };
  return { mammals: 1.2, insects: 1, fungi: 1, flowers: 0.9, reptiles: 0.8, birds: 0.7 };
}

function simulate(features: { h: number; s: number; seed: number }, hint: string): Match[] {
  const aff = colourAffinity(features.h, features.s);
  let seed = features.seed || 1;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 2 ** 32;
  };
  const scored = allSpecies.map((sp) => {
    const cats = [sp.category, ...(sp.secondaryCategories ?? [])];
    let score = Math.max(0.2, ...cats.map((c) => aff[c] ?? 0.2));
    if (hint) score *= cats.includes(hint as CategoryId) ? 3 : 0.15;
    return { species: sp, raw: score * (0.6 + rand() * 0.8) };
  });
  scored.sort((a, b) => b.raw - a.raw);
  const top = scored.slice(0, 3);
  // Simulated percentages: clearly not calibrated, kept in a modest range.
  const base = [0.58 + rand() * 0.2, 0.32 + rand() * 0.15, 0.15 + rand() * 0.12];
  return top.map((m, i) => ({ species: m.species, score: base[i] }));
}

export default function Identify() {
  const { t } = useTranslation(['species', 'categories', 'common']);
  const { l, n, lang } = useLang();
  useDocumentTitle(t('identify.title'), t('identify.subtitle'));
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hint, setHint] = useState('');
  const [busy, setBusy] = useState(false);
  const [results, setResults] = useState<Match[] | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => () => void (preview && URL.revokeObjectURL(preview)), [preview]);

  const accept = useCallback((file: File | undefined) => {
    setError(null);
    setResults(null);
    if (!file) return;
    if (!ACCEPT.includes(file.type)) return setError('invalidType');
    if (file.size > MAX_BYTES) return setError('tooLarge');
    setPreview(URL.createObjectURL(file));
  }, []);

  const run = async () => {
    if (!preview) return;
    setBusy(true);
    setResults(null);
    try {
      const f = await analyseImage(preview);
      await new Promise((r) => setTimeout(r, 1200)); // let the "analysing" state be visible
      setResults(simulate(f, hint));
    } catch {
      setError('invalidType');
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setPreview(null);
    setResults(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  const level = (s: number) => (s >= 0.55 ? 'high' : s >= 0.3 ? 'medium' : 'low');

  return (
    <>
      <PageHeader title={t('identify.title')} subtitle={t('identify.subtitle')} />
      <div className="container py-10">
        <div role="note" className="mb-8 flex gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-amber-950 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-100">
          <FlaskConical className="mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <p className="font-semibold">{t('identify.prototypeTitle')}</p>
            <p className="mt-1 text-sm opacity-90">{t('identify.prototypeBody')}</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            {!preview ? (
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  accept(e.dataTransfer.files?.[0]);
                }}
                className={cn(
                  'flex aspect-[4/3] flex-col items-center justify-center rounded-3xl border-2 border-dashed bg-card p-8 text-center transition',
                  dragging ? 'border-primary bg-secondary' : 'border-border',
                )}
              >
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <ImagePlus className="h-8 w-8" />
                </span>
                <p className="font-display text-lg font-semibold">{t('identify.dropTitle')}</p>
                <p className="my-2 text-sm text-muted-foreground">{t('identify.dropOr')}</p>
                <Button onClick={() => inputRef.current?.click()}>{t('identify.browse')}</Button>
                <p className="mt-4 text-xs text-muted-foreground">{t('identify.formats')}</p>
              </div>
            ) : (
              <figure className="relative overflow-hidden rounded-3xl border bg-black">
                <img src={preview} alt={t('identify.preview')} className="max-h-[480px] w-full object-contain" />
                {busy && (
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-lime/40 to-transparent"
                      animate={{ top: ['-20%', '100%'] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>
                )}
                <figcaption className="sr-only">{t('identify.preview')}</figcaption>
              </figure>
            )}
            <input ref={inputRef} type="file" accept={ACCEPT.join(',')} className="sr-only" onChange={(e) => accept(e.target.files?.[0])} aria-label={t('identify.browse')} />
            {error && (
              <p role="alert" className="mt-3 text-sm font-medium text-destructive">
                {t(`identify.${error}`)}
              </p>
            )}

            <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">{t('identify.hintLabel')}</span>
                <Select value={hint} onChange={(e) => setHint(e.target.value)}>
                  <option value="">{t('identify.hintAny')}</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {t(`categories:categories.${c.id}.name`)}
                    </option>
                  ))}
                </Select>
              </label>
              <div className="flex gap-2">
                <Button onClick={run} disabled={!preview || busy} className="flex-1">
                  {busy ? <Loader2 className="animate-spin" /> : <ScanSearch />}
                  {busy ? t('identify.analyzing') : t('identify.analyze')}
                </Button>
                {preview && (
                  <Button variant="outline" size="icon" onClick={reset} aria-label={t('identify.reset')} title={t('identify.reset')}>
                    <RotateCcw />
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div>
            {results ? (
              <section aria-live="polite" aria-labelledby="results-h">
                <h2 id="results-h" className="mb-1 font-display text-2xl font-bold">
                  {t('identify.results')}
                </h2>
                <p className="mb-5 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5" /> {t('identify.confidenceHelp')}
                </p>
                <ol className="space-y-4">
                  {results.map((m, i) => {
                    const lv = level(m.score);
                    return (
                      <motion.li key={m.species.id} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }}>
                        <Link to={`/species/${m.species.id}`} className="flex gap-4 rounded-2xl border bg-card p-3 transition hover:border-primary hover:shadow-md">
                          <SpeciesImage wikiTitle={m.species.wikiTitle} alt={l(m.species.commonName)} category={m.species.category} className="h-24 w-24 shrink-0 rounded-xl" />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <div className="min-w-0">
                                <p className="truncate font-display text-lg font-bold">{l(m.species.commonName)}</p>
                                <p className="sci truncate text-sm text-muted-foreground">{m.species.scientificName}</p>
                              </div>
                              <ConservationBadge status={m.species.conservation.status} compact />
                            </div>
                            <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{lang === 'bn' ? m.species.commonName.en : m.species.commonName.bn}</p>
                            <div className="mt-3">
                              <div className="mb-1 flex justify-between text-xs">
                                <Tip label={t('identify.confidenceHelp')}>
                                  <span className="cursor-help underline decoration-dotted underline-offset-2">{t('identify.confidence')}</span>
                                </Tip>
                                <span className="font-semibold">
                                  {n(m.score, { style: 'percent' })} · {t(`identify.${lv}`)}
                                </span>
                              </div>
                              <div className="h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={Math.round(m.score * 100)} aria-valuemin={0} aria-valuemax={100}>
                                <motion.div
                                  className={cn('h-full rounded-full', lv === 'high' ? 'bg-primary' : lv === 'medium' ? 'bg-sage' : 'bg-muted-foreground/50')}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${m.score * 100}%` }}
                                  transition={{ duration: 0.8, delay: 0.2 + i * 0.12 }}
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ol>
                <Button variant="outline" className="mt-6" onClick={reset}>
                  <RotateCcw /> {t('identify.reset')}
                </Button>
              </section>
            ) : (
              <section className="rounded-3xl border bg-card p-6">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold">
                  <Lightbulb className="h-5 w-5 text-primary" /> {t('identify.tipsTitle')}
                </h2>
                <ul className="mt-4 space-y-3">
                  {(t('identify.tips', { returnObjects: true }) as string[]).map((tip, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">{n(i + 1)}</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
