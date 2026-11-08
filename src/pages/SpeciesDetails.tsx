import { lazy, Suspense, useEffect, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  BookOpen,
  ChevronRight,
  Dna,
  Globe2,
  HeartPulse,
  Leaf,
  Lightbulb,
  Ruler,
  Scale,
  ShieldAlert,
  Hourglass,
  SearchX,
  Shuffle,
  Sparkles,
  Images,
  Network,
} from 'lucide-react';
import type { LocalizedText, Species, SpeciesSummary } from '@/types';
import { useFullSpecies } from '@/hooks/useFullSpecies';
import { getSpecies, relatedSpecies, randomSpecies } from '@/data/species';
import { getCategory } from '@/data/categories';
import { useAppStore } from '@/store/useAppStore';
import { useLang } from '@/hooks/useLang';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { Gallery } from '@/components/species/Gallery';
import { ConservationBadge, StatusScale, TrendIndicator } from '@/components/species/ConservationBadge';
import { CompareButton, CopyScientificButton, FavoriteButton, PrintButton, ShareButton } from '@/components/species/SpeciesActions';
import { SpeciesCard } from '@/components/cards/SpeciesCard';
import { EmptyState } from '@/components/common/Section';
import { Icon } from '@/components/common/Icon';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/primitives';
import { useNavigate } from 'react-router-dom';

const DistributionMap = lazy(() => import('@/components/maps/DistributionMap'));

const SECTIONS = [
  { id: 'overview', key: 'overview', icon: BookOpen },
  { id: 'gallery', key: 'gallery', icon: Images },
  { id: 'taxonomy', key: 'taxonomy', icon: Dna },
  { id: 'physical', key: 'physical', icon: Ruler },
  { id: 'ecology', key: 'habitatEcology', icon: Leaf },
  { id: 'distribution', key: 'distribution', icon: Globe2 },
  { id: 'conservation', key: 'conservation', icon: ShieldAlert },
  { id: 'facts', key: 'facts', icon: Lightbulb },
  { id: 'related', key: 'related', icon: Network },
] as const;

function Block({ id, title, icon: I, children }: { id: string; title: string; icon: typeof BookOpen; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-b py-10 last:border-0" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="mb-6 flex items-center gap-3 font-display text-2xl font-bold">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary">
          <I className="h-[18px] w-[18px]" />
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Field({ label, value, icon: I }: { label: string; value: ReactNode; icon?: typeof Ruler }) {
  return (
    <div className="rounded-2xl border bg-card p-4">
      <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground [html.lang-bn_&]:text-sm [html.lang-bn_&]:normal-case [html.lang-bn_&]:tracking-normal">
        {I && <I className="h-3.5 w-3.5" />}
        {label}
      </dt>
      <dd className="mt-1.5 text-foreground/90">{value}</dd>
    </div>
  );
}

function List({ items, icon = 'dot' }: { items: string[]; icon?: 'dot' | 'num' }) {
  const { n } = useLang();
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          {icon === 'num' ? (
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime/60 text-xs font-bold text-forest-800">{n(i + 1)}</span>
          ) : (
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          )}
          <span className="text-foreground/85">{it}</span>
        </li>
      ))}
    </ul>
  );
}

function NotFoundSpecies() {
  const { t } = useTranslation(['species', 'common']);
  useDocumentTitle(t('details.notFoundTitle'));
  return (
    <div className="container py-20">
      <EmptyState
        icon={<SearchX className="h-6 w-6" />}
        title={t('details.notFoundTitle')}
        body={t('details.notFoundBody')}
        action={
          <Button asChild>
            <Link to="/explore">{t('common:notFound.explore')}</Link>
          </Button>
        }
      />
    </div>
  );
}

function Details({ s }: { s: Species }) {
  const { t } = useTranslation(['species', 'categories', 'conservation', 'common', 'navigation']);
  const { l, ll, lang, d, n, date } = useLang();
  const navigate = useNavigate();
  const addRecent = useAppStore((st) => st.addRecent);
  const cat = getCategory(s.category);
  const name = l(s.commonName);
  const otherName = lang === 'bn' ? s.commonName.en : s.commonName.bn;
  useDocumentTitle(`${name} (${s.scientificName})`, l(s.description));

  useEffect(() => {
    addRecent(s.id);
  }, [s.id, addRecent]);

  const related = relatedSpecies(s, 4);
  const tx = s.taxonomy;
  const taxRows: [string, string][] = [
    ['kingdom', tx.kingdom],
    ['phylum', tx.phylum],
    ['class', tx.class],
    ['order', tx.order],
    ['family', tx.family],
    ['genus', tx.genus],
    ['species', tx.species],
  ];
  const alt = s.altNames[lang].filter((a) => a !== name);
  const cats = [s.category, ...(s.secondaryCategories ?? [])];
  const L = (v: LocalizedText) => l(v);

  return (
    <article>
      <div className="print-only mb-4 border-b pb-2 text-sm">
        <strong>NatureIndex</strong> — {t('details.printHeader')} · {t('details.printedFrom', { date: date(new Date()) })}
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden bg-forest-900 text-white">
        <SpeciesImage wikiTitle={s.wikiTitle} alt={t('details.photoOf', { name })} category={s.category} size="large" eager className="absolute inset-0 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-black/20" />
        <div className="container relative flex min-h-[26rem] flex-col justify-end pb-10 pt-24 sm:min-h-[32rem]">
          <nav aria-label={t('navigation:breadcrumb')} className="no-print mb-auto flex flex-wrap items-center gap-1 text-sm text-white/75">
            <Link to="/" className="hover:text-white">
              {t('navigation:home')}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/explore" className="hover:text-white">
              {t('details.breadcrumb')}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to={`/categories/${s.category}`} className="hover:text-white">
              {t(`categories:categories.${s.category}.name`)}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span aria-current="page" className="text-white">
              {name}
            </span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <ConservationBadge status={s.conservation.status} />
              {cats.map((c) => (
                <Link key={c} to={`/categories/${c}`} className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium backdrop-blur-md hover:bg-white/25">
                  <Icon name={getCategory(c)?.icon ?? 'Leaf'} className="h-3 w-3" />
                  {t(`categories:categories.${c}.name`)}
                </Link>
              ))}
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">{name}</h1>
            <p className="mt-2 text-xl text-white/80">{otherName}</p>
            <p className="mt-1 flex items-center gap-1 text-lg text-lime">
              <span className="sci">{s.scientificName}</span>
              <CopyScientificButton name={s.scientificName} className="no-print" />
            </p>
          </motion.div>
          <div className="no-print mt-6 flex flex-wrap gap-2">
            <FavoriteButton id={s.id} variant="full" className="bg-white text-forest-800 hover:bg-white/90 aria-pressed:bg-lime" />
            <CompareButton id={s.id} variant="full" className="border-white/30 bg-white/10 text-white hover:bg-white/20" />
            <ShareButton species={s} className="border-white/30 bg-white/10 text-white hover:bg-white/20" />
            <PrintButton className="border-white/30 bg-white/10 text-white hover:bg-white/20" />
          </div>
        </div>
      </header>

      <div className="container grid gap-10 lg:grid-cols-[220px_1fr]">
        {/* Jump nav */}
        <aside className="no-print hidden lg:block">
          <nav aria-label={t('details.jump')} className="sticky top-24 py-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t('details.jump')}</p>
            <ul className="space-y-1 border-l">
              {SECTIONS.map((sec) => (
                <li key={sec.id}>
                  <a href={`#${sec.id}`} className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition hover:border-primary hover:text-foreground">
                    {t(`details.${sec.key}`)}
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="outline" size="sm" className="mt-6 w-full" onClick={() => navigate(`/species/${randomSpecies(s.id).id}`)}>
              <Shuffle /> {t('common:actions.random')}
            </Button>
          </nav>
        </aside>

        <div className="min-w-0">
          <Block id="overview" title={t('details.overview')} icon={BookOpen}>
            <div className="grid gap-8 md:grid-cols-[1fr_280px]">
              <p className="text-lg leading-relaxed text-foreground/85">{l(s.description)}</p>
              <dl className="space-y-3 rounded-2xl bg-secondary/50 p-5 text-sm">
                <div>
                  <dt className="text-muted-foreground">{t('details.englishName')}</dt>
                  <dd className="font-semibold">{s.commonName.en}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t('details.bengaliName')}</dt>
                  <dd className="font-bengali font-semibold" lang="bn">
                    {s.commonName.bn}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t('details.scientificName')}</dt>
                  <dd className="sci font-semibold">{s.scientificName}</dd>
                </div>
                {alt.length > 0 && (
                  <div>
                    <dt className="text-muted-foreground">{t('details.alsoKnownAs')}</dt>
                    <dd>{alt.join(', ')}</dd>
                  </div>
                )}
                {s.synonyms && s.synonyms.length > 0 && (
                  <div>
                    <dt className="text-muted-foreground">{t('details.synonyms')}</dt>
                    <dd className="sci">{s.synonyms.join(', ')}</dd>
                  </div>
                )}
              </dl>
            </div>
          </Block>

          <Block id="gallery" title={t('details.gallery')} icon={Images}>
            <Gallery wikiTitle={s.wikiTitle} name={name} />
          </Block>

          <Block id="taxonomy" title={t('details.taxonomy')} icon={Dna}>
            <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {taxRows.map(([rank, val], i) => (
                <li key={rank} className="relative rounded-2xl border bg-card p-4" style={{ marginLeft: 0 }}>
                  <span className="text-xs font-semibold text-muted-foreground">{t(`taxonomy.${rank}`)}</span>
                  <p className={`mt-1 font-semibold ${i >= 5 ? 'sci' : ''}`}>{val}</p>
                  <span className="absolute right-3 top-3 font-mono text-[10px] text-muted-foreground/60">{d(i + 1)}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block id="physical" title={t('details.physical')} icon={Ruler}>
            <dl className="grid gap-3 sm:grid-cols-3">
              <Field label={t('details.size')} value={L(s.physical.size)} icon={Ruler} />
              <Field label={t('details.weight')} value={L(s.physical.weight)} icon={Scale} />
              <Field label={t('details.lifespan')} value={L(s.physical.lifespan)} icon={Hourglass} />
            </dl>
            <h3 className="mb-3 mt-8 font-display text-lg font-semibold">{t('details.features')}</h3>
            <List items={ll(s.physical.features)} />
          </Block>

          <Block id="ecology" title={t('details.habitatEcology')} icon={Leaf}>
            <dl className="grid gap-3 sm:grid-cols-2">
              <Field label={t('details.naturalHabitat')} value={L(s.habitat)} />
              <Field label={t('details.geoDistribution')} value={L(s.distribution)} />
              <Field label={t('details.climate')} value={L(s.climate)} />
              <Field label={t('details.diet')} value={L(s.diet)} />
              <Field label={t('details.ecologicalRole')} value={L(s.ecologicalRole)} />
              <Field label={t('details.behavior')} value={L(s.behavior)} />
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="mr-1 self-center text-sm font-semibold">{t('details.habitatTypes')}:</span>
              {s.habitats.map((h) => (
                <Link key={h} to={`/explore?hab=${h}`} className="rounded-full border bg-card px-3 py-1 text-sm transition hover:border-primary hover:text-primary">
                  {t(`categories:habitats.${h}.name`)}
                </Link>
              ))}
            </div>
          </Block>

          <Block id="distribution" title={t('details.distribution')} icon={Globe2}>
            <div className="mb-5 grid gap-3 sm:grid-cols-3">
              <Field label={t('details.nativeRange')} value={s.regions.map((r) => t(`categories:regions.${r}`)).join(', ')} />
              <Field label={t('details.introducedRange')} value={s.range.introduced?.length ? t('map.locations', { num: n(s.range.introduced.length) }) : '—'} />
              <Field label={t('details.endemicTo')} value={s.range.endemicTo ? l(s.range.endemicTo) : t('details.notEndemic')} />
            </div>
            <Suspense fallback={<Skeleton className="h-[360px] sm:h-[420px]" />}>
              <DistributionMap species={s} />
            </Suspense>
          </Block>

          <Block id="conservation" title={t('details.conservation')} icon={ShieldAlert}>
            <div className="rounded-3xl border bg-card p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">{t('details.iucn')}</p>
                  <p className="mt-1 font-display text-2xl font-bold">
                    {t(`conservation:status.${s.conservation.status}.name`)} <span className="font-mono text-base text-muted-foreground">({s.conservation.status})</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{t(`conservation:status.${s.conservation.status}.description`)}</p>
                </div>
                <ConservationBadge status={s.conservation.status} />
              </div>
              <div className="mt-5">
                <StatusScale status={s.conservation.status} />
              </div>
              <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                <Field label={t('details.trend')} value={<TrendIndicator trend={s.conservation.trend} />} icon={HeartPulse} />
                <Field label={t('details.population')} value={s.conservation.population ? l(s.conservation.population) : t('details.notAssessed')} />
                <Field label={t('details.assessed')} value={s.conservation.assessed ? d(s.conservation.assessed) : t('details.notAssessed')} />
              </dl>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-orange-200 bg-orange-50/60 p-5 dark:border-orange-900/50 dark:bg-orange-950/20">
                <h3 className="mb-4 font-display text-lg font-semibold">{t('details.threats')}</h3>
                <List items={ll(s.conservation.threats)} />
              </div>
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                <h3 className="mb-4 font-display text-lg font-semibold">{t('details.initiatives')}</h3>
                <List items={ll(s.conservation.initiatives)} />
              </div>
            </div>
          </Block>

          <Block id="facts" title={t('details.facts')} icon={Lightbulb}>
            <div className="grid gap-4 sm:grid-cols-2">
              {ll(s.facts).map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-3 rounded-2xl bg-gradient-to-br from-lime/25 to-transparent p-5"
                >
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-forest-500 dark:text-lime" />
                  <p className="text-foreground/90">{f}</p>
                </motion.div>
              ))}
            </div>
          </Block>

          <Block id="related" title={t('details.related')} icon={Network}>
            <div className="no-print grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((r, i) => (
                <SpeciesCard key={r.id} species={r} index={i} />
              ))}
            </div>
            <ul className="print-only list-disc pl-5 text-sm">
              {related.map((r) => (
                <li key={r.id}>
                  {l(r.commonName)} (<i>{r.scientificName}</i>)
                </li>
              ))}
            </ul>
          </Block>

          <p className="pb-4 text-xs text-muted-foreground">
            {t('details.category')}: {cat ? t(`categories:categories.${cat.id}.name`) : '—'} · {t('common:footer.dataNote')}
          </p>
        </div>
      </div>
    </article>
  );
}

function DetailsSkeleton({ summary }: { summary: SpeciesSummary }) {
  const { l } = useLang();
  return (
    <div aria-busy="true">
      <header className="relative overflow-hidden bg-forest-900 text-white">
        <SpeciesImage wikiTitle={summary.wikiTitle} alt={l(summary.commonName)} category={summary.category} size="large" eager className="absolute inset-0 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-black/20" />
        <div className="container relative flex min-h-[26rem] flex-col justify-end pb-10 pt-24 sm:min-h-[32rem]">
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">{l(summary.commonName)}</h1>
          <p className="sci mt-2 text-lg text-lime">{summary.scientificName}</p>
        </div>
      </header>
      <div className="container space-y-4 py-10 lg:pl-[260px]">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="mt-8 h-64 w-full" />
      </div>
    </div>
  );
}

function LoadError() {
  const { t } = useTranslation('common');
  return (
    <div className="container py-20">
      <EmptyState
        icon={<SearchX className="h-6 w-6" />}
        title={t('states.errorTitle')}
        body={t('states.errorBody')}
        action={<Button onClick={() => window.location.reload()}>{t('actions.retry')}</Button>}
      />
    </div>
  );
}

export default function SpeciesDetails() {
  const { id } = useParams();
  const summary = getSpecies(id);
  const { data, loading, error } = useFullSpecies(summary ? [summary.id] : []);
  if (!summary) return <NotFoundSpecies />;
  const full = data[summary.id];
  if (error) return <LoadError />;
  if (loading) return <DetailsSkeleton summary={summary} />;
  if (!full) return <NotFoundSpecies />;
  return <Details key={full.id} s={full} />;
}
