import { useId, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, X } from 'lucide-react';
import { species } from '@/data/species';
import { searchSpecies } from '@/utils/search';
import { useLang } from '@/hooks/useLang';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { cn } from '@/utils/cn';

/**
 * Search input with live bilingual suggestions.
 * - `onSubmit` controls what Enter does (default: go to /explore?q=)
 * - `value`/`onChange` make it controlled (used by the explorer page)
 */
export function SearchBox({
  value,
  onChange,
  onSubmit,
  placeholder,
  className,
  size = 'md',
  suggestions = true,
}: {
  value?: string;
  onChange?: (v: string) => void;
  onSubmit?: (v: string) => void;
  placeholder?: string;
  className?: string;
  size?: 'md' | 'lg';
  suggestions?: boolean;
}) {
  const { t } = useTranslation('common');
  const { l, lang } = useLang();
  const navigate = useNavigate();
  const [inner, setInner] = useState('');
  const q = value ?? inner;
  const setQ = (v: string) => (onChange ? onChange(v) : setInner(v));
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(-1);
  const listId = useId();
  const blurTimer = useRef<number>();

  const results = useMemo(() => (suggestions && q.trim() ? searchSpecies(species, q).slice(0, 6) : []), [q, suggestions]);
  const open = focused && results.length > 0;

  const submit = () => {
    if (active >= 0 && results[active]) {
      navigate(`/species/${results[active].id}`);
      return;
    }
    if (onSubmit) onSubmit(q.trim());
    else navigate(q.trim() ? `/explore?q=${encodeURIComponent(q.trim())}` : '/explore');
    setFocused(false);
  };

  return (
    <div className={cn('relative', className)}>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className={cn(
          'flex items-center gap-2 rounded-full border bg-card/95 pl-4 shadow-lg backdrop-blur transition focus-within:ring-2 focus-within:ring-ring',
          size === 'lg' ? 'h-14 pr-1.5' : 'h-11 pr-1',
        )}
      >
        <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
        <input
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setActive(-1);
          }}
          onFocus={() => {
            window.clearTimeout(blurTimer.current);
            setFocused(true);
          }}
          onBlur={() => {
            blurTimer.current = window.setTimeout(() => setFocused(false), 150);
          }}
          onKeyDown={(e) => {
            if (!open) return;
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, results.length - 1));
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, -1));
            } else if (e.key === 'Escape') {
              setFocused(false);
            }
          }}
          placeholder={placeholder ?? t('search.placeholder')}
          aria-label={t('search.label')}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listId}
          className={cn(
            'min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden',
            size === 'lg' ? 'text-base' : 'text-sm',
          )}
        />
        {q && (
          <button type="button" onClick={() => setQ('')} aria-label={t('actions.clear')} className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary">
            <X className="h-4 w-4" />
          </button>
        )}
        <button
          type="submit"
          className={cn('shrink-0 rounded-full bg-primary font-semibold text-primary-foreground transition hover:bg-primary/90', size === 'lg' ? 'h-11 px-6 text-sm' : 'h-9 px-4 text-xs')}
        >
          {t('actions.search')}
        </button>
      </form>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={t('search.suggestions')}
          className="absolute inset-x-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border bg-popover p-1.5 text-left text-popover-foreground shadow-2xl"
        >
          {results.map((s, i) => (
            <li key={s.id} role="option" aria-selected={i === active}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => navigate(`/species/${s.id}`)}
                onMouseEnter={() => setActive(i)}
                className={cn('flex w-full items-center gap-3 rounded-xl p-2 text-left', i === active ? 'bg-secondary' : 'hover:bg-secondary/60')}
              >
                <SpeciesImage wikiTitle={s.wikiTitle} alt="" category={s.category} className="h-10 w-10 shrink-0 rounded-lg" />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{l(s.commonName)}</span>
                  <span className="block truncate text-xs text-muted-foreground">
                    <span className="sci">{s.scientificName}</span> · {lang === 'bn' ? s.commonName.en : s.commonName.bn}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
