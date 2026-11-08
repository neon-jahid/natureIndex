import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, Database, Globe2, TrendingDown, FlaskConical } from 'lucide-react';
import { species } from '@/data/species';
import { categories } from '@/data/categories';
import { livingPlanetDecline, pandaTrend, redListHeadline, threatDrivers, tigerTrend } from '@/data/dashboard';
import { useLang } from '@/hooks/useLang';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHeader, Reveal } from '@/components/common/Section';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { ChartCard, HBarChart, LegendItem, StackedHBarChart, YearLineChart, useChartColors } from '@/components/charts/Charts';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { ConservationBadge, TrendIndicator } from '@/components/species/ConservationBadge';
import { Badge } from '@/components/ui/primitives';
import { STATUS_COLOR, STATUS_ORDER, TREND_COLOR, TREND_ORDER, isThreatened, statusRank } from '@/utils/status';

function StatCard({ icon: I, value, suffix, label, sub }: { icon: typeof Globe2; value: number; suffix?: string; label: string; sub?: string }) {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      <I className="h-5 w-5 text-primary" />
      <p className="mt-3 font-display text-3xl font-extrabold tabular-nums">
        <AnimatedCounter value={value} suffix={suffix} />
      </p>
      <p className="mt-1 text-sm font-medium">{label}</p>
      {sub && <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>}
    </div>
  );
}

export default function Conservation() {
  const { t } = useTranslation(['conservation', 'categories']);
  const { l, n } = useLang();
  const c = useChartColors();
  useDocumentTitle(t('dashboard.title'), t('dashboard.subtitle'));

  const threatenedCount = species.filter((s) => isThreatened(s.conservation.status)).length;
  const decreasing = species.filter((s) => s.conservation.trend === 'decreasing').length;

  const statusRows = useMemo(
    () =>
      STATUS_ORDER.map((st) => ({
        key: st,
        label: `${t(`status.${st}.name`)} (${st})`,
        value: species.filter((s) => s.conservation.status === st).length,
        color: STATUS_COLOR[st],
      })).filter((r) => r.value > 0),
    [t],
  );

  const categoryRows = useMemo(
    () =>
      categories
        .map((cat) => {
          const inCat = species.filter((s) => s.category === cat.id);
          const thr = inCat.filter((s) => isThreatened(s.conservation.status)).length;
          return { key: cat.id, label: t(`categories:categories.${cat.id}.name`), a: thr, b: inCat.length - thr };
        })
        .sort((x, y) => y.a - x.a || y.b - x.b),
    [t],
  );

  const trendRows = useMemo(
    () =>
      TREND_ORDER.map((tr) => ({
        key: tr,
        label: t(`trend.${tr}`),
        value: species.filter((s) => s.conservation.trend === tr).length,
        color: TREND_COLOR[tr],
      })),
    [t],
  );

  const driverRows = threatDrivers.map((d) => ({ key: d.id, label: t(`dashboard.drivers.${d.id}`), value: d.value }));
  const mostThreatened = species
    .filter((s) => ['CR', 'EN'].includes(s.conservation.status))
    .sort((a, b) => statusRank(a.conservation.status) - statusRank(b.conservation.status));

  return (
    <>
      <PageHeader title={t('dashboard.title')} subtitle={t('dashboard.subtitle')} />
      <div className="container space-y-8 py-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={Database} value={species.length} label={t('dashboard.cards.inDatabase')} sub={t('dashboard.dataFromDb')} />
          <StatCard icon={AlertTriangle} value={threatenedCount} label={t('dashboard.cards.threatenedInDb')} sub={t('threatenedHelp')} />
          <StatCard
            icon={Globe2}
            value={redListHeadline.threatened}
            label={t('dashboard.cards.globalThreatened')}
            sub={`${t('dashboard.cards.globalAssessed', { num: n(redListHeadline.assessed) })} · ${redListHeadline.source}`}
          />
          <StatCard icon={TrendingDown} value={livingPlanetDecline.percent} suffix="%" label={t('dashboard.cards.lpi')} sub={livingPlanetDecline.source} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ChartCard title={t('dashboard.statusChart.title')} subtitle={t('dashboard.statusChart.subtitle')} source={t('dashboard.dataFromDb')} className="h-full">
              <HBarChart rows={statusRows} valueName={t('dashboard.categoryChart.axisSpecies')} />
            </ChartCard>
          </Reveal>
          <Reveal delay={0.05}>
            <ChartCard
              title={t('dashboard.categoryChart.title')}
              subtitle={t('dashboard.categoryChart.subtitle')}
              source={t('dashboard.dataFromDb')}
              className="h-full"
              legend={
                <>
                  <LegendItem color={c.b} label={t('dashboard.categoryChart.threatened')} />
                  <LegendItem color={c.a} label={t('dashboard.categoryChart.notThreatened')} />
                </>
              }
            >
              <StackedHBarChart
                rows={categoryRows}
                aName={t('dashboard.categoryChart.threatened')}
                bName={t('dashboard.categoryChart.notThreatened')}
                xLabel={t('dashboard.categoryChart.axisSpecies')}
              />
            </ChartCard>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <ChartCard
              title={t('dashboard.tigerChart.title')}
              subtitle={t('dashboard.tigerChart.subtitle')}
              source={tigerTrend.source}
              className="h-full"
            >
              {/* Two scales differ ~30×, so they are shown as small multiples rather than a dual axis. */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-1 text-sm font-semibold">{t('dashboard.tigerChart.india')}</p>
                  <YearLineChart data={tigerTrend.points} dataKey="india" name={t('dashboard.tigerChart.india')} yLabel={t('dashboard.tigerChart.axisCount')} />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold">{t('dashboard.tigerChart.bangladesh')}</p>
                  <YearLineChart data={tigerTrend.points} dataKey="bangladesh" name={t('dashboard.tigerChart.bangladesh')} yLabel={t('dashboard.tigerChart.axisCount')} />
                </div>
              </div>
            </ChartCard>
          </Reveal>
          <Reveal delay={0.05}>
            <ChartCard title={t('dashboard.trendChart.title')} subtitle={t('dashboard.trendChart.subtitle')} source={t('dashboard.dataFromDb')} className="h-full">
              <HBarChart rows={trendRows} valueName={t('dashboard.categoryChart.axisSpecies')} />
              <p className="mt-3 text-xs text-muted-foreground">
                {t('dashboard.cards.decreasing')}: <strong>{n(decreasing)}</strong>
              </p>
            </ChartCard>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ChartCard title={t('dashboard.pandaChart.title')} subtitle={t('dashboard.pandaChart.subtitle')} source={pandaTrend.source} className="h-full">
              <YearLineChart data={pandaTrend.points} dataKey="panda" name={t('dashboard.pandaChart.panda')} yLabel={t('dashboard.pandaChart.axisCount')} />
            </ChartCard>
          </Reveal>
          <Reveal delay={0.05}>
            <ChartCard
              title={t('dashboard.threatsChart.title')}
              subtitle={t('dashboard.threatsChart.subtitle')}
              source={t('dashboard.threatsChart.demoNote')}
              className="h-full"
              badge={
                <Badge variant="lime" className="gap-1">
                  <FlaskConical className="h-3 w-3" /> {t('dashboard.threatsChart.demo')}
                </Badge>
              }
            >
              <HBarChart rows={driverRows} valueName={t('dashboard.threatsChart.axisShare')} unit="%" />
            </ChartCard>
          </Reveal>
        </div>

        <Reveal>
          <section className="rounded-2xl border bg-card p-5 sm:p-6" aria-labelledby="most-threatened">
            <h2 id="most-threatened" className="font-display text-lg font-bold">
              {t('dashboard.endangeredList.title')}
            </h2>
            <p className="mb-5 text-sm text-muted-foreground">{t('dashboard.endangeredList.subtitle')}</p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {mostThreatened.map((s) => (
                <li key={s.id}>
                  <Link to={`/species/${s.id}`} className="flex items-center gap-3 rounded-xl border p-2.5 transition hover:border-primary hover:shadow-sm">
                    <SpeciesImage wikiTitle={s.wikiTitle} alt="" category={s.category} className="h-14 w-14 shrink-0 rounded-lg" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">{l(s.commonName)}</p>
                      <p className="text-xs">
                        <TrendIndicator trend={s.conservation.trend} />
                      </p>
                    </div>
                    <ConservationBadge status={s.conservation.status} compact />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border bg-card p-5 sm:p-6" aria-labelledby="iucn-legend">
            <h2 id="iucn-legend" className="mb-4 font-display text-lg font-bold">
              {t('dashboard.legendTitle')}
            </h2>
            <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {STATUS_ORDER.map((st) => (
                <div key={st} className="flex gap-3">
                  <ConservationBadge status={st} compact className="h-6 shrink-0" />
                  <div>
                    <dt className="text-sm font-semibold">{t(`status.${st}.name`)}</dt>
                    <dd className="text-xs text-muted-foreground">{t(`status.${st}.description`)}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </section>
        </Reveal>

        <section aria-labelledby="why">
          <h2 id="why" className="section-title mb-6">
            {t('dashboard.awarenessTitle')}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(t('dashboard.awareness', { returnObjects: true }) as { title: string; body: string }[]).map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-gradient-to-br from-forest to-forest-800 p-5 text-white">
                  <p className="font-display text-3xl font-extrabold text-lime">{n(i + 1)}</p>
                  <h3 className="mt-2 font-display text-lg font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
