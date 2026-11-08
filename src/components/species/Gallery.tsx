import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useGallery, useSpeciesImage } from '@/hooks/useSpeciesImage';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/primitives';
import { useLang } from '@/hooks/useLang';

/** Responsive photo gallery with a keyboard-navigable lightbox. */
export function Gallery({ wikiTitle, name }: { wikiTitle: string; name: string }) {
  const { t } = useTranslation(['species', 'common']);
  const { n } = useLang();
  const { images, loading: leadLoading } = useSpeciesImage(wikiTitle);
  const extra = useGallery(wikiTitle);
  const loading = leadLoading || extra === null;
  const [index, setIndex] = useState<number | null>(null);
  const [broken, setBroken] = useState<Set<string>>(new Set());

  const photos = [images?.large, ...(extra ?? [])].filter((u): u is string => !!u && !broken.has(u));

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/3]" />
        ))}
      </div>
    );
  }
  if (photos.length === 0) return <p className="text-sm text-muted-foreground">{t('details.galleryEmpty')}</p>;

  const go = (d: number) => setIndex((i) => (i === null ? null : (i + d + photos.length) % photos.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {photos.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            className={`group relative overflow-hidden rounded-xl bg-muted ${i === 0 ? 'col-span-2 row-span-2 aspect-[4/3] sm:col-span-2' : 'aspect-[4/3]'}`}
            aria-label={`${t('details.photoOf', { name })} (${n(i + 1)}/${n(photos.length)})`}
          >
            <img
              src={src}
              alt={t('details.photoOf', { name })}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setBroken((b) => new Set(b).add(src))}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        {t('common:states.photoCredit')} ·{' '}
        <a href={images?.page} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
          {t('common:actions.openOnWikipedia')}
        </a>
      </p>

      <Dialog open={index !== null} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent
          className="top-1/2 max-w-5xl -translate-y-1/2 bg-black p-0 text-white"
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') go(1);
            if (e.key === 'ArrowLeft') go(-1);
          }}
        >
          <DialogTitle className="sr-only">{t('details.gallery')}</DialogTitle>
          <DialogDescription className="sr-only">{name}</DialogDescription>
          {index !== null && (
            <div className="relative">
              <img src={photos[index]} alt={t('details.photoOf', { name })} referrerPolicy="no-referrer" className="max-h-[80vh] w-full rounded-2xl object-contain" />
              {photos.length > 1 && (
                <>
                  <button onClick={() => go(-1)} aria-label={t('common:actions.previous')} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 hover:bg-black/70">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={() => go(1)} aria-label={t('common:actions.next')} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 hover:bg-black/70">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs">
                {n(index + 1)} / {n(photos.length)}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
