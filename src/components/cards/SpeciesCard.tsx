import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { SpeciesSummary } from '@/types';
import { useLang } from '@/hooks/useLang';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { ConservationBadge } from '@/components/species/ConservationBadge';
import { CompareButton, FavoriteButton } from '@/components/species/SpeciesActions';
import { Icon } from '@/components/common/Icon';
import { getCategory } from '@/data/categories';
import { cn } from '@/utils/cn';

interface Props {
  species: SpeciesSummary;
  layout?: 'grid' | 'list';
  className?: string;
  index?: number;
}

function SpeciesCardBase({ species: s, layout = 'grid', className, index = 0 }: Props) {
  const { t } = useTranslation(['categories', 'species']);
  const { l, lang } = useLang();
  const cat = getCategory(s.category);
  const primaryName = l(s.commonName);
  const secondaryName = lang === 'bn' ? s.commonName.en : s.commonName.bn;

  if (layout === 'list') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.03 }}
        className={cn('group relative flex gap-4 rounded-2xl border bg-card p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-4', className)}
      >
        <Link to={`/species/${s.id}`} className="absolute inset-0 z-[1] rounded-2xl" aria-label={primaryName} />
        <SpeciesImage wikiTitle={s.wikiTitle} alt={primaryName} category={s.category} className="h-24 w-24 shrink-0 rounded-xl sm:h-28 sm:w-36" />
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-display text-lg font-bold leading-snug group-hover:text-primary">{primaryName}</h3>
              <p className="truncate text-sm text-muted-foreground">
                <span className="sci">{s.scientificName}</span> · {secondaryName}
              </p>
            </div>
            <div className="relative z-10 flex shrink-0 gap-1.5">
              <CompareButton id={s.id} />
              <FavoriteButton id={s.id} />
            </div>
          </div>
          <p className="mt-1.5 line-clamp-2 hidden text-sm text-foreground/75 sm:block">{l(s.habitat)}</p>
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
            <ConservationBadge status={s.conservation.status} />
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              <Icon name={cat?.icon ?? 'Leaf'} className="h-3 w-3" />
              {t(`categories:categories.${s.category}.name`)}
            </span>
            <span className="hidden items-center gap-1 text-xs text-muted-foreground md:inline-flex">
              <MapPin className="h-3 w-3" />
              {s.regions.map((r) => t(`categories:regions.${r}`)).join(', ')}
            </span>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index, 8) * 0.04 }}
      className={cn('group relative flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl', className)}
    >
      <Link to={`/species/${s.id}`} className="absolute inset-0 z-[1]" aria-label={primaryName} />
      <div className="relative aspect-[4/3] overflow-hidden">
        <SpeciesImage
          wikiTitle={s.wikiTitle}
          alt={primaryName}
          category={s.category}
          className="h-full w-full"
          imgClassName="group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Sits above the card link so the status tooltip still gets hover; links to the same page. */}
        <Link to={`/species/${s.id}`} tabIndex={-1} className="absolute left-3 top-3 z-10">
          <ConservationBadge status={s.conservation.status} compact />
        </Link>
        <div className="absolute right-3 top-3 z-10 flex gap-1.5">
          <CompareButton id={s.id} variant="overlay" />
          <FavoriteButton id={s.id} variant="overlay" />
        </div>
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/35 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md">
          <Icon name={cat?.icon ?? 'Leaf'} className="h-3 w-3" />
          {t(`categories:categories.${s.category}.name`)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-primary">{primaryName}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{secondaryName}</p>
        <p className="sci mt-1 text-sm text-forest-500 dark:text-sage">{s.scientificName}</p>
      </div>
    </motion.article>
  );
}

export const SpeciesCard = memo(SpeciesCardBase);
