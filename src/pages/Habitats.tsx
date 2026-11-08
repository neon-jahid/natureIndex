import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MapPin } from 'lucide-react';
import { habitats } from '@/data/habitats';
import { speciesInHabitat } from '@/data/species';
import { useLang } from '@/hooks/useLang';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHeader, Reveal } from '@/components/common/Section';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { ConservationBadge } from '@/components/species/ConservationBadge';
import { Icon } from '@/components/common/Icon';
import { Button } from '@/components/ui/button';

export default function Habitats() {
  const { t } = useTranslation(['categories', 'common']);
  const { l, n } = useLang();
  useDocumentTitle(t('habitatsPage.title'), t('habitatsPage.subtitle'));

  return (
    <>
      <PageHeader title={t('habitatsPage.title')} subtitle={t('habitatsPage.subtitle')}>
        <nav className="mt-6 flex flex-wrap gap-2" aria-label={t('habitatsPage.title')}>
          {habitats.map((h) => (
            <a key={h.id} href={`#${h.id}`} className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-sm transition hover:border-primary hover:text-primary">
              <Icon name={h.icon} className="h-3.5 w-3.5" /> {t(`habitats.${h.id}.name`)}
            </a>
          ))}
        </nav>
      </PageHeader>

      <div className="container space-y-16 py-14">
        {habitats.map((h, idx) => {
          const list = speciesInHabitat(h.id);
          const name = t(`habitats.${h.id}.name`);
          return (
            <Reveal key={h.id}>
              <section id={h.id} className="scroll-mt-24 grid gap-6 lg:grid-cols-2 lg:gap-10" aria-labelledby={`${h.id}-t`}>
                <div className={`relative min-h-[18rem] overflow-hidden rounded-[2rem] ${idx % 2 ? 'lg:order-2' : ''}`}>
                  <SpeciesImage wikiTitle={h.wikiTitle} alt={name} className="absolute inset-0" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${h.gradient} opacity-60`} />
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-md">
                    <Icon name={h.icon} className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <h2 id={`${h.id}-t`} className="font-display text-3xl font-bold">
                    {name}
                  </h2>
                  <p className="mt-3 text-lg text-muted-foreground">{t(`habitats.${h.id}.description`)}</p>
                  <h3 className="mb-3 mt-6 text-sm font-semibold">
                    {t('habitatsPage.speciesHere')} · <span className="text-primary">{t('page.speciesCount', { num: n(list.length) })}</span>
                  </h3>
                  {list.length === 0 ? (
                    <p className="text-sm text-muted-foreground">{t('habitatsPage.noSpecies')}</p>
                  ) : (
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {list.slice(0, 6).map((s) => (
                        <li key={s.id}>
                          <Link to={`/species/${s.id}`} className="flex items-center gap-3 rounded-xl border bg-card p-2 transition hover:border-primary hover:shadow-sm">
                            <SpeciesImage wikiTitle={s.wikiTitle} alt="" category={s.category} className="h-11 w-11 shrink-0 rounded-lg" />
                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-sm font-semibold">{l(s.commonName)}</span>
                              <span className="sci block truncate text-xs text-muted-foreground">{s.scientificName}</span>
                            </span>
                            <ConservationBadge status={s.conservation.status} compact />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {list.length > 0 && (
                      <Button asChild size="sm">
                        <Link to={`/explore?hab=${h.id}`}>
                          {t('common:actions.viewAll')} <ArrowRight />
                        </Link>
                      </Button>
                    )}
                    <Button asChild size="sm" variant="outline">
                      <Link to={`/map?hab=${h.id}`}>
                        <MapPin /> {t('habitatsPage.viewOnMap')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
