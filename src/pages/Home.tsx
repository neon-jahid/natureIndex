import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Globe2, HeartHandshake, Leaf, ScanSearch, Shuffle, Sparkles } from 'lucide-react';
import { species, getSpecies, dailySpecies, randomSpecies, speciesInCategory, speciesInHabitat } from '@/data/species';
import { categories } from '@/data/categories';
import { habitats } from '@/data/habitats';
import { regions } from '@/data/regions';
import { livingPlanetDecline, redListHeadline } from '@/data/dashboard';
import { useAppStore } from '@/store/useAppStore';
import { useLang } from '@/hooks/useLang';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Button } from '@/components/ui/button';
import { SearchBox } from '@/components/common/SearchBox';
import { SectionHeading, Reveal } from '@/components/common/Section';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { SpeciesCard } from '@/components/cards/SpeciesCard';
import { CategoryCard, HabitatCard } from '@/components/cards/CategoryCard';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { ConservationBadge } from '@/components/species/ConservationBadge';
import { FavoriteButton } from '@/components/species/SpeciesActions';
import { isThreatened, statusRank } from '@/utils/status';
import { useFullSpecies } from '@/hooks/useFullSpecies';
import { Skeleton } from '@/components/ui/primitives';

const FEATURED = ['royal-bengal-tiger', 'oriental-magpie-robin', 'hilsa', 'white-water-lily', 'ganges-river-dolphin', 'sundari', 'blue-whale', 'monarch-butterfly'];

function Hero() {
  const { t } = useTranslation('homepage');
  const threatened = species.filter((s) => isThreatened(s.conservation.status)).length;
  const stats = [
    { value: species.length, label: t('hero.stats.species') },
    { value: categories.length, label: t('hero.stats.categories') },
    { value: habitats.length, label: t('hero.stats.habitats') },
    { value: threatened, label: t('hero.stats.threatened') },
  ];

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-900 pb-10 pt-28 text-white sm:items-center sm:pb-16">
      <motion.div className="absolute inset-0" initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}>
        <SpeciesImage wikiTitle="Sundarbans" alt={t('hero.photoCaption')} size="large" eager className="h-full w-full bg-forest-900" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/55 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-lime" />
            {t('hero.eyebrow')}
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">{t('hero.title')}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 sm:text-xl">{t('hero.subtitle')}</p>

          <SearchBox size="lg" className="mt-8 max-w-2xl text-foreground" />

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="accent">
              <Link to="/explore">
                <Compass /> {t('hero.exploreBtn')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass">
              <Link to="/categories">
                <Leaf /> {t('hero.discoverBtn')}
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 backdrop-blur-md sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-black/25 px-4 py-4">
              <dd className="font-display text-3xl font-extrabold text-lime">
                <AnimatedCounter value={s.value} />
              </dd>
              <dt className="mt-0.5 text-xs text-white/75 sm:text-sm">{s.label}</dt>
            </div>
          ))}
        </motion.dl>
        <p className="mt-4 text-[11px] text-white/50">
          {t('hero.photoCaption')}
        </p>
      </div>
    </section>
  );
}

function DailyDiscovery() {
  const { t } = useTranslation(['homepage', 'categories', 'common']);
  const { l, date } = useLang();
  const daily = useMemo(() => dailySpecies(), []);
  const [current, setCurrent] = useState(daily);
  const isDaily = current.id === daily.id;
  const { data } = useFullSpecies([current.id]);
  const full = data[current.id];

  return (
    <section className="container py-16 sm:py-20" aria-labelledby="daily-title">
      <Reveal>
        <div className="grid overflow-hidden rounded-[2rem] border bg-card shadow-sm lg:grid-cols-2">
          <div className="relative min-h-[18rem] lg:min-h-[28rem]">
            <SpeciesImage key={current.id} wikiTitle={current.wikiTitle} alt={l(current.commonName)} category={current.category} size="large" className="absolute inset-0" />
            <div className="absolute left-4 top-4 flex gap-2">
              <ConservationBadge status={current.conservation.status} />
            </div>
            <div className="absolute right-4 top-4">
              <FavoriteButton id={current.id} variant="overlay" />
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="eyebrow">{t('daily.eyebrow')}</p>
            <p className="mt-1 text-sm text-muted-foreground">{isDaily ? t('daily.today', { date: date(new Date()) }) : t('common:random.title')}</p>
            <h2 id="daily-title" className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              {l(current.commonName)}
            </h2>
            <p className="sci mt-1 text-lg text-forest-500 dark:text-sage">{current.scientificName}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t(`categories:categories.${current.category}.name`)}</p>
            {full ? (
              <>
                <p className="mt-5 line-clamp-5 text-foreground/80">{l(full.description)}</p>
                {full.facts.en.length > 0 && (
                  <p className="mt-5 rounded-2xl bg-secondary/70 p-4 text-sm">
                    <Sparkles className="mr-1.5 inline h-4 w-4 text-forest-500 dark:text-lime" />
                    {l({ en: full.facts.en[0], bn: full.facts.bn[0] })}
                  </p>
                )}
              </>
            ) : (
              <div className="mt-5 space-y-2" aria-busy="true">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="mt-5 h-16 w-full" />
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link to={`/species/${current.id}`}>
                  {t('daily.learn')} <ArrowRight />
                </Link>
              </Button>
              <Button variant="outline" onClick={() => setCurrent(randomSpecies(current.id))}>
                <Shuffle /> {t('daily.random')}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function RecentlyExplored() {
  const { t } = useTranslation('homepage');
  const recent = useAppStore((s) => s.recent);
  const items = recent.map(getSpecies).filter((s): s is NonNullable<typeof s> => Boolean(s)).slice(0, 4);
  if (!items.length) return null;
  return (
    <section className="container py-12" aria-labelledby="recent-title">
      <SectionHeading id="recent-title" eyebrow={t('recent.eyebrow')} title={t('recent.title')} subtitle={t('recent.subtitle')} />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map((s, i) => (
          <SpeciesCard key={s.id} species={s} index={i} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useTranslation(['homepage', 'common', 'categories']);
  const { n, l } = useLang();
  useDocumentTitle();

  const featured = FEATURED.map(getSpecies).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const endangered = useMemo(
    () => species.filter((s) => ['CR', 'EN'].includes(s.conservation.status)).sort((a, b) => statusRank(a.conservation.status) - statusRank(b.conservation.status)).slice(0, 4),
    [],
  );
  const regionCounts = regions.map((r) => ({ id: r.id, count: species.filter((s) => s.regions.includes(r.id)).length })).filter((r) => r.count > 0);

  return (
    <>
      <Hero />

      <section className="container py-16 sm:py-24" aria-labelledby="cat-title">
        <Reveal>
          <SectionHeading
            id="cat-title"
            eyebrow={t('categories.eyebrow')}
            title={t('categories.title')}
            subtitle={t('categories.subtitle')}
            action={
              <Button asChild variant="outline">
                <Link to="/categories">
                  {t('common:actions.viewAll')} <ArrowRight />
                </Link>
              </Button>
            }
          />
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.03}>
              <CategoryCard category={c} count={speciesInCategory(c.id).length} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y bg-secondary/40 py-16 sm:py-24" aria-labelledby="featured-title">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="featured-title"
              eyebrow={t('featured.eyebrow')}
              title={t('featured.title')}
              subtitle={t('featured.subtitle')}
              action={
                <Button asChild variant="outline">
                  <Link to="/explore">
                    {t('common:actions.viewAll')} <ArrowRight />
                  </Link>
                </Button>
              }
            />
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {featured.map((s, i) => (
              <SpeciesCard key={s.id} species={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <DailyDiscovery />

      <section className="bg-charcoal py-16 text-paper sm:py-24 dark:bg-[#0c1410]" aria-labelledby="endangered-title">
        <div className="container">
          <Reveal>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime">{t('endangered.eyebrow')}</p>
                <h2 id="endangered-title" className="section-title">
                  {t('endangered.title')}
                </h2>
                <p className="mt-3 text-white/70 sm:text-lg">{t('endangered.subtitle')}</p>
              </div>
              <Button asChild variant="accent">
                <Link to="/conservation">
                  {t('endangered.cta')} <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {endangered.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <Link to={`/species/${s.id}`} className="group relative block aspect-[3/4] overflow-hidden rounded-2xl">
                  <SpeciesImage wikiTitle={s.wikiTitle} alt={l(s.commonName)} category={s.category} className="absolute inset-0" imgClassName="group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <ConservationBadge status={s.conservation.status} />
                    <h3 className="mt-3 font-display text-xl font-bold">{l(s.commonName)}</h3>
                    <p className="sci text-sm text-white/70">{s.scientificName}</p>
                    {s.conservation.population && <p className="mt-2 line-clamp-2 text-xs text-white/70">{l(s.conservation.population)}</p>}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-24" aria-labelledby="habitat-title">
        <Reveal>
          <SectionHeading
            id="habitat-title"
            eyebrow={t('habitats.eyebrow')}
            title={t('habitats.title')}
            subtitle={t('habitats.subtitle')}
            action={
              <Button asChild variant="outline">
                <Link to="/habitats">
                  {t('habitats.cta')} <ArrowRight />
                </Link>
              </Button>
            }
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {habitats.slice(0, 6).map((h, i) => (
            <Reveal key={h.id} delay={i * 0.04}>
              <HabitatCard habitat={h} count={speciesInHabitat(h.id).length} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container pb-16 sm:pb-24" aria-labelledby="world-title">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-forest p-8 text-white sm:p-12">
            <Globe2 aria-hidden className="absolute -right-16 -top-16 h-80 w-80 text-white/5" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime">{t('world.eyebrow')}</p>
                <h2 id="world-title" className="section-title">
                  {t('world.title')}
                </h2>
                <p className="mt-3 max-w-xl text-white/80 sm:text-lg">{t('world.subtitle')}</p>
                <Button asChild variant="accent" size="lg" className="mt-7">
                  <Link to="/map">
                    <Globe2 /> {t('world.cta')}
                  </Link>
                </Button>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-white/70">{t('world.regions')}</p>
                <div className="flex flex-wrap gap-2">
                  {regionCounts.map((r) => (
                    <Link
                      key={r.id}
                      to={`/explore?region=${r.id}`}
                      className="rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-sm backdrop-blur transition hover:bg-white/20"
                    >
                      {t(`categories:regions.${r.id}`)} <span className="ml-1 font-semibold text-lime">{n(r.count)}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <RecentlyExplored />

      <section className="container py-16 sm:py-20" aria-labelledby="aware-title">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="h-full rounded-[2rem] border bg-gradient-to-br from-lime/30 via-card to-card p-8 sm:p-10">
              <HeartHandshake className="h-10 w-10 text-forest-500 dark:text-lime" />
              <p className="eyebrow mt-5">{t('awareness.eyebrow')}</p>
              <h2 id="aware-title" className="section-title mt-2">
                {t('awareness.title')}
              </h2>
              <p className="mt-4 text-lg text-foreground/80">
                {t('awareness.body', {
                  percent: n(livingPlanetDecline.percent / 100, { style: 'percent' }),
                  threatened: n(Math.floor(redListHeadline.threatened / 1000) * 1000),
                })}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                {t('awareness.source', { sources: `${livingPlanetDecline.source}; ${redListHeadline.source}` })}
              </p>
              <Button asChild className="mt-6">
                <Link to="/conservation">
                  {t('awareness.cta')} <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-[2rem] border bg-card p-8">
              <h3 className="font-display text-xl font-bold">{t('awareness.tipsTitle')}</h3>
              <ol className="mt-5 space-y-4">
                {(t('awareness.tips', { returnObjects: true }) as string[]).map((tip, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{n(i + 1)}</span>
                    <span className="text-sm text-foreground/85">{tip}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-6 flex flex-col items-start gap-5 rounded-[2rem] border bg-secondary/50 p-8 sm:flex-row sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <ScanSearch className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <p className="eyebrow">{t('identify.eyebrow')}</p>
              <h3 className="mt-1 font-display text-xl font-bold">{t('identify.title')}</h3>
              <p className="mt-1 text-muted-foreground">{t('identify.body')}</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/identify">
                {t('identify.cta')} <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
