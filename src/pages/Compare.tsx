import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GitCompareArrows, Plus, X } from 'lucide-react';
import type { Species } from '@/types';
import { species as allSpecies, getSpecies } from '@/data/species';
import { useAppStore, MAX_COMPARE } from '@/store/useAppStore';
import { useLang } from '@/hooks/useLang';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHeader, EmptyState } from '@/components/common/Section';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { ConservationBadge, TrendIndicator } from '@/components/species/ConservationBadge';
import { Select, Skeleton } from '@/components/ui/primitives';
import { useFullSpecies } from '@/hooks/useFullSpecies';

export default function Compare() {
  const { t } = useTranslation(['common', 'species', 'categories', 'conservation']);
  const { l, lang, d } = useLang();
  useDocumentTitle(t('compare.title'), t('compare.subtitle'));
  const ids = useAppStore((s) => s.compare);
  const toggle = useAppStore((s) => s.toggleCompare);
  const remove = useAppStore((s) => s.removeCompare);
  const validIds = ids.filter((id) => getSpecies(id));
  const { data, loading } = useFullSpecies(validIds);
  const items = validIds.map((id) => data[id]).filter((s): s is Species => Boolean(s));

  const options = useMemo(() => {
    const collator = new Intl.Collator(lang === 'bn' ? 'bn' : 'en');
    return allSpecies.filter((s) => !ids.includes(s.id)).sort((a, b) => collator.compare(a.commonName[lang], b.commonName[lang]));
  }, [ids, lang]);

  const rows: { label: string; render: (s: Species) => React.ReactNode }[] = [
    { label: t('species:details.scientificName'), render: (s) => <span className="sci">{s.scientificName}</span> },
    { label: t('species:details.category'), render: (s) => t(`categories:categories.${s.category}.name`) },
    { label: t('species:taxonomy.class'), render: (s) => s.taxonomy.class },
    { label: t('species:taxonomy.family'), render: (s) => s.taxonomy.family },
    { label: t('species:details.iucn'), render: (s) => <ConservationBadge status={s.conservation.status} /> },
    { label: t('species:details.trend'), render: (s) => <TrendIndicator trend={s.conservation.trend} /> },
    { label: t('species:details.population'), render: (s) => (s.conservation.population ? l(s.conservation.population) : '—') },
    { label: t('species:details.size'), render: (s) => l(s.physical.size) },
    { label: t('species:details.weight'), render: (s) => l(s.physical.weight) },
    { label: t('species:details.lifespan'), render: (s) => l(s.physical.lifespan) },
    { label: t('species:details.naturalHabitat'), render: (s) => l(s.habitat) },
    { label: t('species:details.regions'), render: (s) => s.regions.map((r) => t(`categories:regions.${r}`)).join(', ') },
    { label: t('species:details.diet'), render: (s) => l(s.diet) },
    { label: t('species:details.climate'), render: (s) => l(s.climate) },
    { label: t('species:details.assessed'), render: (s) => (s.conservation.assessed ? d(s.conservation.assessed) : '—') },
  ];

  const picker = items.length < MAX_COMPARE && (
    <label className="flex items-center gap-2">
      <Plus className="h-4 w-4 text-primary" />
      <Select value="" onChange={(e) => e.target.value && toggle(e.target.value)} aria-label={t('compare.add')} className="max-w-xs">
        <option value="">{t('compare.choose')}</option>
        {options.map((s) => (
          <option key={s.id} value={s.id}>
            {l(s.commonName)} — {s.scientificName}
          </option>
        ))}
      </Select>
    </label>
  );

  return (
    <>
      <PageHeader title={t('compare.title')} subtitle={t('compare.subtitle')}>
        <div className="mt-6">{picker}</div>
      </PageHeader>
      <div className="container py-10">
        {loading && validIds.length > 0 ? (
          <Skeleton className="h-[480px] w-full" />
        ) : items.length === 0 ? (
          <EmptyState icon={<GitCompareArrows className="h-6 w-6" />} title={t('compare.emptyTitle')} body={t('compare.emptyBody')} />
        ) : (
          <div className="overflow-x-auto rounded-2xl border bg-card">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr>
                  <th scope="col" className="w-44 border-b p-4 text-left align-bottom text-xs font-semibold text-muted-foreground">
                    {t('compare.attribute')}
                  </th>
                  {items.map((s) => (
                    <th key={s.id} scope="col" className="border-b border-l p-4 text-left align-top">
                      <div className="relative">
                        <Link to={`/species/${s.id}`}>
                          <SpeciesImage wikiTitle={s.wikiTitle} alt={l(s.commonName)} category={s.category} className="aspect-[4/3] w-full rounded-xl" />
                        </Link>
                        <button
                          onClick={() => remove(s.id)}
                          className="absolute right-2 top-2 rounded-full bg-black/50 p-1.5 text-white hover:bg-black/70"
                          aria-label={`${t('actions.removeCompare')}: ${l(s.commonName)}`}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <Link to={`/species/${s.id}`} className="mt-3 block font-display text-lg font-bold hover:text-primary">
                        {l(s.commonName)}
                      </Link>
                      <p className="text-xs font-normal text-muted-foreground">{lang === 'bn' ? s.commonName.en : s.commonName.bn}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="even:bg-secondary/30">
                    <th scope="row" className="border-b p-4 text-left align-top text-xs font-semibold text-muted-foreground">
                      {r.label}
                    </th>
                    {items.map((s) => (
                      <td key={s.id} className="border-b border-l p-4 align-top text-foreground/90">
                        {r.render(s)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
