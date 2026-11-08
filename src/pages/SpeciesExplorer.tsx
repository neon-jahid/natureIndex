import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, LayoutGrid, List, SearchX, SlidersHorizontal, X } from 'lucide-react';
import type { SpeciesSummary } from '@/types';
import { species as allSpecies } from '@/data/species';
import { categories } from '@/data/categories';
import { habitats } from '@/data/habitats';
import { regions } from '@/data/regions';
import { searchSpecies } from '@/utils/search';
import { STATUS_ORDER, statusRank } from '@/utils/status';
import { useLang } from '@/hooks/useLang';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHeader, EmptyState } from '@/components/common/Section';
import { SearchBox } from '@/components/common/SearchBox';
import { SpeciesCard } from '@/components/cards/SpeciesCard';
import { Button } from '@/components/ui/button';
import { Chip, Select } from '@/components/ui/primitives';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { cn } from '@/utils/cn';

const PAGE_SIZE = 24;

/** Page numbers with ellipses: 1 … 4 5 6 … 20 */
function pageWindow(current: number, total: number): (number | null)[] {
  const set = new Set([1, total, current - 2, current - 1, current, current + 1, current + 2].filter((p) => p >= 1 && p <= total));
  const sorted = [...set].sort((a, b) => a - b);
  const out: (number | null)[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) out.push(null);
    out.push(p);
  });
  return out;
}
type SortKey = 'relevance' | 'nameAsc' | 'nameDesc' | 'sciAsc' | 'sciDesc' | 'threat';
const SORTS: SortKey[] = ['relevance', 'nameAsc', 'nameDesc', 'sciAsc', 'sciDesc', 'threat'];
const MULTI_KEYS = ['cat', 'hab', 'status', 'region'] as const;
type MultiKey = (typeof MULTI_KEYS)[number];

const kingdoms = [...new Set(allSpecies.map((s) => s.taxonomy.kingdom))].sort();
const classesByKingdom = (k?: string) => [...new Set(allSpecies.filter((s) => !k || s.taxonomy.kingdom === k).map((s) => s.taxonomy.class))].sort();
const statusesPresent = STATUS_ORDER.filter((st) => allSpecies.some((s) => s.conservation.status === st));

function useExplorerParams() {
  const [params, setParams] = useSearchParams();
  const getList = (k: MultiKey) => (params.get(k) ? params.get(k)!.split(',').filter(Boolean) : []);
  const update = (patch: Record<string, string | string[] | null>, resetPage = true) => {
    const next = new URLSearchParams(params);
    for (const [k, v] of Object.entries(patch)) {
      const val = Array.isArray(v) ? v.join(',') : v;
      if (!val) next.delete(k);
      else next.set(k, val);
    }
    if (resetPage) next.delete('page');
    setParams(next, { replace: true });
  };
  return { params, getList, update };
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-b pb-5 last:border-0">
      <legend className="mb-3 text-sm font-semibold">{title}</legend>
      {children}
    </fieldset>
  );
}

export default function SpeciesExplorer() {
  const { t } = useTranslation(['species', 'categories', 'conservation', 'common']);
  const { lang, n } = useLang();
  const { params, getList, update } = useExplorerParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  useDocumentTitle(t('explorer.title'), t('explorer.subtitle'));

  const q = params.get('q') ?? '';
  const [qInput, setQInput] = useState(q);
  useEffect(() => setQInput(q), [q]);
  // Debounce search typing into the URL
  useEffect(() => {
    if (qInput === q) return;
    const id = window.setTimeout(() => update({ q: qInput.trim() || null }), 250);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qInput]);

  const cat = getList('cat');
  const hab = getList('hab');
  const status = getList('status');
  const region = getList('region');
  const kingdom = params.get('kingdom') ?? '';
  const cls = params.get('class') ?? '';
  const sortParam = params.get('sort') as SortKey | null;
  const sort: SortKey = sortParam && SORTS.includes(sortParam) ? sortParam : q ? 'relevance' : 'nameAsc';
  const view = params.get('view') === 'list' ? 'list' : 'grid';
  const page = Math.max(1, Number(params.get('page')) || 1);

  const results = useMemo(() => {
    let list: SpeciesSummary[] = q ? searchSpecies(allSpecies, q) : [...allSpecies];
    if (cat.length) list = list.filter((s) => cat.includes(s.category) || s.secondaryCategories?.some((c) => cat.includes(c)));
    if (hab.length) list = list.filter((s) => s.habitats.some((h) => hab.includes(h)));
    if (status.length) list = list.filter((s) => status.includes(s.conservation.status));
    if (region.length) list = list.filter((s) => s.regions.some((r) => region.includes(r)));
    if (kingdom) list = list.filter((s) => s.taxonomy.kingdom === kingdom);
    if (cls) list = list.filter((s) => s.taxonomy.class === cls);

    const collator = new Intl.Collator(lang === 'bn' ? 'bn' : 'en');
    switch (sort) {
      case 'nameAsc':
        list.sort((a, b) => collator.compare(a.commonName[lang], b.commonName[lang]));
        break;
      case 'nameDesc':
        list.sort((a, b) => collator.compare(b.commonName[lang], a.commonName[lang]));
        break;
      case 'sciAsc':
        list.sort((a, b) => a.scientificName.localeCompare(b.scientificName));
        break;
      case 'sciDesc':
        list.sort((a, b) => b.scientificName.localeCompare(a.scientificName));
        break;
      case 'threat':
        list.sort((a, b) => statusRank(a.conservation.status) - statusRank(b.conservation.status));
        break;
      default:
        break; // relevance order from search
    }
    return list;
  }, [q, cat.join(), hab.join(), status.join(), region.join(), kingdom, cls, sort, lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = results.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const activeCount = cat.length + hab.length + status.length + region.length + (kingdom ? 1 : 0) + (cls ? 1 : 0);

  const toggle = (key: MultiKey, value: string) => {
    const cur = getList(key);
    update({ [key]: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value] });
  };
  const clearAll = () => {
    setQInput('');
    update({ q: null, cat: null, hab: null, status: null, region: null, kingdom: null, class: null });
  };
  const goPage = (p: number) => {
    update({ page: p > 1 ? String(p) : null }, false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeChips: { key: string; label: string; onRemove: () => void }[] = [
    ...cat.map((c) => ({ key: `cat-${c}`, label: t(`categories:categories.${c}.name`), onRemove: () => toggle('cat', c) })),
    ...hab.map((h) => ({ key: `hab-${h}`, label: t(`categories:habitats.${h}.name`), onRemove: () => toggle('hab', h) })),
    ...status.map((s) => ({ key: `st-${s}`, label: t(`conservation:status.${s}.name`), onRemove: () => toggle('status', s) })),
    ...region.map((r) => ({ key: `rg-${r}`, label: t(`categories:regions.${r}`), onRemove: () => toggle('region', r) })),
    ...(kingdom ? [{ key: 'kg', label: t(`kingdoms.${kingdom}`), onRemove: () => update({ kingdom: null, class: null }) }] : []),
    ...(cls ? [{ key: 'cls', label: cls, onRemove: () => update({ class: null }) }] : []),
  ];

  const filterPanel = (
    <div className="space-y-5">
      <FilterGroup title={t('explorer.filters.category')}>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Chip key={c.id} active={cat.includes(c.id)} onClick={() => toggle('cat', c.id)}>
              {t(`categories:categories.${c.id}.name`)}
            </Chip>
          ))}
        </div>
      </FilterGroup>
      <FilterGroup title={t('explorer.filters.status')}>
        <div className="flex flex-wrap gap-2">
          {statusesPresent.map((s) => (
            <Chip key={s} active={status.includes(s)} onClick={() => toggle('status', s)}>
              <span className="font-mono text-[10px] font-bold opacity-70">{s}</span> {t(`conservation:status.${s}.name`)}
            </Chip>
          ))}
        </div>
      </FilterGroup>
      <FilterGroup title={t('explorer.filters.habitat')}>
        <div className="flex flex-wrap gap-2">
          {habitats.map((h) => (
            <Chip key={h.id} active={hab.includes(h.id)} onClick={() => toggle('hab', h.id)}>
              {t(`categories:habitats.${h.id}.name`)}
            </Chip>
          ))}
        </div>
      </FilterGroup>
      <FilterGroup title={t('explorer.filters.region')}>
        <div className="flex flex-wrap gap-2">
          {regions.map((r) => (
            <Chip key={r.id} active={region.includes(r.id)} onClick={() => toggle('region', r.id)}>
              {t(`categories:regions.${r.id}`)}
            </Chip>
          ))}
        </div>
      </FilterGroup>
      <FilterGroup title={t('explorer.filters.taxonomy')}>
        <div className="grid gap-3">
          <label className="text-xs text-muted-foreground">
            {t('explorer.filters.kingdom')}
            <Select className="mt-1" value={kingdom} onChange={(e) => update({ kingdom: e.target.value || null, class: null })}>
              <option value="">{t('explorer.filters.all')}</option>
              {kingdoms.map((k) => (
                <option key={k} value={k}>
                  {t(`kingdoms.${k}`, { defaultValue: k })}
                </option>
              ))}
            </Select>
          </label>
          <label className="text-xs text-muted-foreground">
            {t('explorer.filters.class')}
            <Select className="mt-1" value={cls} onChange={(e) => update({ class: e.target.value || null })}>
              <option value="">{t('explorer.filters.all')}</option>
              {classesByKingdom(kingdom || undefined).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </label>
        </div>
      </FilterGroup>
    </div>
  );

  return (
    <>
      <PageHeader title={t('explorer.title')} subtitle={t('explorer.subtitle')}>
        <SearchBox value={qInput} onChange={setQInput} onSubmit={(v) => update({ q: v || null })} placeholder={t('explorer.searchPlaceholder')} size="lg" className="mt-6 max-w-2xl" suggestions={false} />
      </PageHeader>

      <div className="container grid gap-8 py-8 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block" aria-label={t('common:actions.filters')}>
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-display font-bold">
                <SlidersHorizontal className="h-4 w-4" /> {t('common:actions.filters')}
              </h2>
              {activeCount > 0 && (
                <button onClick={clearAll} className="text-xs font-semibold text-primary hover:underline">
                  {t('common:actions.clearAll')}
                </button>
              )}
            </div>
            {filterPanel}
          </div>
        </aside>

        <section aria-live="polite">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <p className="mr-auto text-sm font-semibold">
              {t('explorer.resultCount', { num: n(results.length) })}
              {results.length > PAGE_SIZE && (
                <span className="ml-2 font-normal text-muted-foreground">
                  ·{' '}
                  {t('explorer.resultCountOf', {
                    from: n((safePage - 1) * PAGE_SIZE + 1),
                    to: n(Math.min(safePage * PAGE_SIZE, results.length)),
                    total: n(results.length),
                  })}
                </span>
              )}
            </p>
            <Button variant="outline" size="sm" className="lg:hidden" onClick={() => setFiltersOpen(true)}>
              <SlidersHorizontal /> {t('common:actions.filters')}
              {activeCount > 0 && <span className="rounded-full bg-primary px-1.5 text-[10px] text-primary-foreground">{n(activeCount)}</span>}
            </Button>
            <label className="flex items-center gap-2 text-sm">
              <span className="hidden text-muted-foreground sm:inline">{t('explorer.sort.label')}</span>
              <Select value={sort} onChange={(e) => update({ sort: e.target.value }, false)} className="h-9 w-auto" aria-label={t('explorer.sort.label')}>
                {SORTS.filter((s) => s !== 'relevance' || q).map((s) => (
                  <option key={s} value={s}>
                    {t(`explorer.sort.${s}`)}
                  </option>
                ))}
              </Select>
            </label>
            <div className="flex rounded-full border bg-card p-0.5" role="group" aria-label={t('explorer.view.label')}>
              {(['grid', 'list'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => update({ view: v === 'grid' ? null : v }, false)}
                  aria-pressed={view === v}
                  aria-label={t(`explorer.view.${v}`)}
                  title={t(`explorer.view.${v}`)}
                  className={cn('rounded-full p-1.5 transition', view === v ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground')}
                >
                  {v === 'grid' ? <LayoutGrid className="h-4 w-4" /> : <List className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </div>

          {activeChips.length > 0 && (
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground">{t('explorer.activeFilters')}:</span>
              {activeChips.map((c) => (
                <button key={c.key} onClick={c.onRemove} className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium hover:bg-secondary/70">
                  {c.label} <X className="h-3 w-3" aria-label={t('common:actions.remove')} />
                </button>
              ))}
              <button onClick={clearAll} className="text-xs font-semibold text-primary hover:underline">
                {t('common:actions.clearAll')}
              </button>
            </div>
          )}

          {pageItems.length === 0 ? (
            <EmptyState
              icon={<SearchX className="h-6 w-6" />}
              title={t('explorer.emptyTitle')}
              body={q ? `${t('common:search.noResults', { query: q })} ${t('common:search.noResultsHint')}` : t('explorer.emptyBody')}
              action={<Button onClick={clearAll}>{t('common:actions.clearAll')}</Button>}
            />
          ) : view === 'grid' ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
              {pageItems.map((s, i) => (
                <SpeciesCard key={s.id} species={s} index={i} />
              ))}
            </div>
          ) : (
            <div className="grid gap-3">
              {pageItems.map((s, i) => (
                <SpeciesCard key={s.id} species={s} layout="list" index={i} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav aria-label={t('common:pagination.label')} className="mt-10 flex items-center justify-center gap-2">
              <Button variant="outline" size="icon" disabled={safePage <= 1} onClick={() => goPage(safePage - 1)} aria-label={t('common:actions.previous')}>
                <ChevronLeft />
              </Button>
              {pageWindow(safePage, totalPages).map((p, i) =>
                p === null ? (
                  <span key={`gap-${i}`} className="px-1 text-muted-foreground" aria-hidden>
                    …
                  </span>
                ) : (
                  <Button
                    key={p}
                    variant={p === safePage ? 'default' : 'ghost'}
                    size="icon"
                    onClick={() => goPage(p)}
                    aria-current={p === safePage ? 'page' : undefined}
                    className={p !== safePage && Math.abs(p - safePage) > 1 && p !== 1 && p !== totalPages ? 'hidden sm:inline-flex' : ''}
                  >
                    {n(p)}
                  </Button>
                ),
              )}
              <Button variant="outline" size="icon" disabled={safePage >= totalPages} onClick={() => goPage(safePage + 1)} aria-label={t('common:actions.next')}>
                <ChevronRight />
              </Button>
              <span className="sr-only">{t('common:pagination.pageOf', { page: n(safePage), total: n(totalPages) })}</span>
            </nav>
          )}
        </section>
      </div>

      <Dialog open={filtersOpen} onOpenChange={setFiltersOpen}>
        <DialogContent className="top-auto bottom-0 max-h-[85vh] max-w-lg translate-y-0 overflow-y-auto rounded-b-none p-5 sm:bottom-auto sm:top-[8vh] sm:rounded-2xl">
          <DialogTitle className="mb-1 font-display text-lg font-bold">{t('common:actions.filters')}</DialogTitle>
          <DialogDescription className="mb-4 text-sm text-muted-foreground">{t('explorer.resultCount', { num: n(results.length) })}</DialogDescription>
          {filterPanel}
          <div className="sticky bottom-0 -mx-5 mt-4 flex gap-2 border-t bg-popover px-5 pt-4">
            <Button variant="outline" className="flex-1" onClick={clearAll}>
              {t('common:actions.clearAll')}
            </Button>
            <Button className="flex-1" onClick={() => setFiltersOpen(false)}>
              {t('common:actions.applyFilters')} ({n(results.length)})
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
