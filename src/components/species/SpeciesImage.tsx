import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSpeciesImage } from '@/hooks/useSpeciesImage';
import { Icon } from '@/components/common/Icon';
import { getCategory } from '@/data/categories';
import { cn } from '@/utils/cn';

interface Props {
  wikiTitle: string;
  alt: string;
  /** Category id used for the illustrated fallback. */
  category?: string;
  size?: 'thumb' | 'large';
  /** Rendered width hint; when set, sharper versions are offered for high-resolution slots. */
  sizes?: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

/** Baked 960px Wikimedia thumbnails can be re-requested wider; smaller originals have no `/960px-` path. */
function wideSrcSet(url: string) {
  if (!url.includes('/960px-')) return undefined;
  return [960, 1280, 1920].map((w) => `${url.replace('/960px-', `/${w}px-`)} ${w}w`).join(', ');
}

/**
 * Lazy-loaded photograph with a skeleton while loading and an illustrated
 * fallback when no image can be shown (offline, missing or broken).
 */
export function SpeciesImage({ wikiTitle, alt, category, size = 'thumb', sizes, className, imgClassName, eager }: Props) {
  const { images, loading } = useSpeciesImage(wikiTitle);
  const [failed, setFailed] = useState(false);
  const [wideFailed, setWideFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation('common');
  const src = size === 'large' ? images?.large ?? images?.thumb : images?.thumb ?? images?.large;
  const srcSet = sizes && src && !wideFailed ? wideSrcSet(src) : undefined;
  const cat = category ? getCategory(category) : undefined;

  const showFallback = !loading && (!src || failed);

  return (
    <div className={cn('relative overflow-hidden bg-muted', className)}>
      {!loaded && !showFallback && (
        <div className="absolute inset-0 overflow-hidden bg-muted">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>
      )}
      {showFallback ? (
        <div
          role="img"
          aria-label={`${alt} — ${t('states.noImage')}`}
          className={cn('absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br text-white', cat?.gradient ?? 'from-forest-500/80 to-forest-900/80')}
        >
          <Icon name={cat?.icon ?? 'Leaf'} className="h-10 w-10 opacity-80" />
          <span className="px-3 text-center text-xs font-medium opacity-80">{t('states.noImage')}</span>
        </div>
      ) : (
        src && (
          <img
            sizes={srcSet ? sizes : undefined}
            srcSet={srcSet}
            src={src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setLoaded(true)}
            onError={() => (srcSet ? setWideFailed(true) : setFailed(true))}
            className={cn('h-full w-full object-cover transition-all duration-700', loaded ? 'opacity-100' : 'opacity-0', imgClassName)}
          />
        )
      )}
    </div>
  );
}
