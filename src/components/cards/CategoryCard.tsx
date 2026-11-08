import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import type { Category, Habitat } from '@/types';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { Icon } from '@/components/common/Icon';
import { useLang } from '@/hooks/useLang';
import { cn } from '@/utils/cn';

export function CategoryCard({ category, count, className, showDescription }: { category: Category; count: number; className?: string; showDescription?: boolean }) {
  const { t } = useTranslation('categories');
  const { n } = useLang();
  const name = t(`categories.${category.id}.name`);
  return (
    <Link
      to={`/categories/${category.id}`}
      className={cn('group relative block overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl', className)}
      aria-label={`${name} — ${t('page.speciesCount', { num: n(count) })}`}
    >
      <SpeciesImage wikiTitle={category.wikiTitle} alt={name} category={category.id} className="absolute inset-0" imgClassName="group-hover:scale-110 duration-1000" />
      <div className={cn('absolute inset-0 bg-gradient-to-t opacity-90 transition-opacity group-hover:opacity-80', category.gradient)} />
      <div className="relative flex h-full min-h-[11rem] flex-col justify-between p-4 text-white sm:p-5">
        <div className="flex items-start justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
            <Icon name={category.icon} className="h-5 w-5" />
          </span>
          <ArrowUpRight className="h-5 w-5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold leading-tight sm:text-xl">{name}</h3>
          {showDescription && <p className="mt-1 line-clamp-2 text-sm text-white/85">{t(`categories.${category.id}.description`)}</p>}
          <p className="mt-1 text-xs font-medium text-white/80">{t('page.speciesCount', { num: n(count) })}</p>
        </div>
      </div>
    </Link>
  );
}

export function HabitatCard({ habitat, count, className }: { habitat: Habitat; count: number; className?: string }) {
  const { t } = useTranslation('categories');
  const { n } = useLang();
  const name = t(`habitats.${habitat.id}.name`);
  return (
    <Link
      to={`/habitats#${habitat.id}`}
      className={cn('group relative block overflow-hidden rounded-3xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl', className)}
    >
      <SpeciesImage wikiTitle={habitat.wikiTitle} alt={name} className="absolute inset-0" imgClassName="group-hover:scale-110 duration-1000" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      <div className="relative flex h-full min-h-[14rem] flex-col justify-end p-5 text-white">
        <span className="mb-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
          <Icon name={habitat.icon} className="h-5 w-5" />
        </span>
        <h3 className="font-display text-xl font-bold">{name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/85">{t(`habitats.${habitat.id}.description`)}</p>
        <p className="mt-2 text-xs font-semibold text-lime">{t('page.speciesCount', { num: n(count) })}</p>
      </div>
    </Link>
  );
}
