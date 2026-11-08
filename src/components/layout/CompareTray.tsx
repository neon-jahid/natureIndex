import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { GitCompareArrows, X } from 'lucide-react';
import { useAppStore, MAX_COMPARE } from '@/store/useAppStore';
import { getSpecies } from '@/data/species';
import { useLang } from '@/hooks/useLang';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { Button } from '@/components/ui/button';

/** Floating tray showing species queued for comparison. */
export function CompareTray() {
  const { t } = useTranslation('common');
  const { l, n } = useLang();
  const ids = useAppStore((s) => s.compare);
  const remove = useAppStore((s) => s.removeCompare);
  const clear = useAppStore((s) => s.clearCompare);
  const { pathname } = useLocation();
  const items = ids.map(getSpecies).filter(Boolean);
  const show = items.length > 0 && pathname !== '/compare';

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          aria-label={t('compare.tray')}
          className="no-print fixed inset-x-4 bottom-4 z-[950] mx-auto flex max-w-xl items-center gap-3 rounded-2xl border bg-popover/95 p-2.5 pl-4 shadow-2xl backdrop-blur-xl"
        >
          <GitCompareArrows className="hidden h-5 w-5 shrink-0 text-primary sm:block" />
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto">
            {items.map((s) => (
              <span key={s!.id} className="flex shrink-0 items-center gap-1.5 rounded-full bg-secondary py-1 pl-1 pr-2 text-xs font-medium">
                <SpeciesImage wikiTitle={s!.wikiTitle} alt="" category={s!.category} className="h-6 w-6 rounded-full" />
                <span className="max-w-[7rem] truncate">{l(s!.commonName)}</span>
                <button onClick={() => remove(s!.id)} aria-label={`${t('actions.remove')}: ${l(s!.commonName)}`} className="rounded-full p-0.5 hover:bg-background">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            <span className="shrink-0 text-xs text-muted-foreground">{t('compare.trayCount', { num: n(items.length), max: n(MAX_COMPARE) })}</span>
          </div>
          <button onClick={clear} className="hidden rounded-full p-2 text-muted-foreground hover:bg-secondary sm:block" aria-label={t('actions.clearAll')}>
            <X className="h-4 w-4" />
          </button>
          <Button asChild size="sm">
            <Link to="/compare">{t('compare.open')}</Link>
          </Button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
