import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CornerDownLeft, Search, SearchX } from 'lucide-react';
import { create } from 'zustand';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { species } from '@/data/species';
import { searchSpecies } from '@/utils/search';
import { useLang } from '@/hooks/useLang';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { ConservationBadge } from '@/components/species/ConservationBadge';
import { cn } from '@/utils/cn';

export const useSearchDialog = create<{ open: boolean; setOpen: (o: boolean) => void }>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

const POPULAR = {
  en: ['Tiger', 'Hilsa', 'Dolphin', 'Lotus', 'Mushroom', 'Panthera tigris'],
  bn: ['বাঘ', 'ইলিশ', 'শুশুক', 'শাপলা', 'ছত্রাক', 'পাখি'],
};

/** Hook for the inline hero/explorer search suggestion lists. */
export function useSearchResults(query: string, limit = 6) {
  return useMemo(() => (query.trim() ? searchSpecies(species, query) : []), [query]).slice(0, limit);
}

export function GlobalSearch() {
  const { open, setOpen } = useSearchDialog();
  const { t } = useTranslation('common');
  const { l, lang, n } = useLang();
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const all = useMemo(() => (q.trim() ? searchSpecies(species, q) : []), [q]);
  const results = all.slice(0, 7);

  useEffect(() => setActive(0), [q]);
  useEffect(() => {
    if (!open) setQ('');
  }, [open]);

  // Global "/" and Ctrl/Cmd+K shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable;
      if ((e.key === '/' && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setOpen]);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[active]) go(`/species/${results[active].id}`);
      else if (q.trim()) go(`/explore?q=${encodeURIComponent(q.trim())}`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl overflow-hidden p-0" hideClose>
        <DialogTitle className="sr-only">{t('search.label')}</DialogTitle>
        <DialogDescription className="sr-only">{t('search.placeholder')}</DialogDescription>
        <div className="flex items-center gap-3 border-b px-4">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={t('search.placeholder')}
            aria-label={t('search.label')}
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls="global-search-list"
            aria-activedescendant={results[active] ? `gs-${results[active].id}` : undefined}
            className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden rounded-md border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">ESC</kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {!q.trim() && (
            <div className="p-3">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t('search.popular')}</p>
              <div className="flex flex-wrap gap-2">
                {POPULAR[lang].map((p) => (
                  <button key={p} onClick={() => setQ(p)} className="rounded-full border bg-card px-3 py-1.5 text-sm transition hover:border-primary hover:text-primary">
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {q.trim() && results.length === 0 && (
            <div className="flex flex-col items-center px-6 py-10 text-center">
              <SearchX className="mb-3 h-8 w-8 text-muted-foreground" />
              <p className="font-semibold">{t('search.noResults', { query: q })}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t('search.noResultsHint')}</p>
            </div>
          )}

          {results.length > 0 && (
            <ul id="global-search-list" ref={listRef} role="listbox" aria-label={t('search.suggestions')}>
              {results.map((s, i) => (
                <li key={s.id} id={`gs-${s.id}`} role="option" aria-selected={i === active}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(`/species/${s.id}`)}
                    className={cn('flex w-full items-center gap-3 rounded-xl p-2 text-left transition', i === active ? 'bg-secondary' : 'hover:bg-secondary/60')}
                  >
                    <SpeciesImage wikiTitle={s.wikiTitle} alt="" category={s.category} className="h-12 w-12 shrink-0 rounded-lg" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">{l(s.commonName)}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        <span className="sci">{s.scientificName}</span> · {lang === 'bn' ? s.commonName.en : s.commonName.bn}
                      </p>
                    </div>
                    <ConservationBadge status={s.conservation.status} compact />
                    {i === active && <CornerDownLeft className="hidden h-4 w-4 text-muted-foreground sm:block" />}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {all.length > results.length && (
            <button
              onClick={() => go(`/explore?q=${encodeURIComponent(q.trim())}`)}
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl p-3 text-sm font-semibold text-primary hover:bg-secondary"
            >
              {t('search.seeAll', { count: all.length, num: n(all.length) }).replace(String(all.length), n(all.length))}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
