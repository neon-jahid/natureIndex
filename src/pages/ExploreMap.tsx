import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CircleMarker, Popup, useMap } from 'react-leaflet';
import { latLngBounds } from 'leaflet';
import { Crosshair, RotateCcw } from 'lucide-react';
import type { SpeciesSummary } from '@/types';
import { species as allSpecies } from '@/data/species';
import { categories } from '@/data/categories';
import { habitats } from '@/data/habitats';
import { BaseMap, FitBounds } from '@/components/maps/BaseMap';
import { useLang } from '@/hooks/useLang';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { getBakedImage } from '@/hooks/useSpeciesImage';
import { Chip, Select } from '@/components/ui/primitives';
import { Button } from '@/components/ui/button';
import { ConservationBadge } from '@/components/species/ConservationBadge';
import { STATUS_COLOR, STATUS_ORDER, CATEGORY_COLOR } from '@/utils/status';
import { cn } from '@/utils/cn';

const statusesPresent = STATUS_ORDER.filter((st) => allSpecies.some((s) => s.conservation.status === st));

function FlyTo({ target }: { target: { lat: number; lng: number; key: number } | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo([target.lat, target.lng], 4, { duration: 1.2 });
  }, [map, target]);
  return null;
}

interface Selected {
  s: SpeciesSummary;
  at: [number, number];
  introduced: boolean;
}

/** Memoised marker layer — re-renders only when the data or colouring changes, not when a popup opens. */
const MarkerLayer = memo(function MarkerLayer({
  species,
  colorOf,
  showIntroduced,
  onSelect,
}: {
  species: SpeciesSummary[];
  colorOf: (s: SpeciesSummary) => string;
  showIntroduced: boolean;
  onSelect: (sel: Selected) => void;
}) {
  return (
    <>
      {species.flatMap((s) => {
        const color = colorOf(s);
        const native = s.range.native.map((p, i) => (
          <CircleMarker
            key={`${s.id}-n${i}`}
            center={p}
            radius={7}
            pathOptions={{ color: '#fff', weight: 1.5, fillColor: color, fillOpacity: 0.9 }}
            eventHandlers={{ click: () => onSelect({ s, at: p, introduced: false }) }}
          />
        ));
        const intro = showIntroduced
          ? (s.range.introduced ?? []).map((p, i) => (
              <CircleMarker
                key={`${s.id}-i${i}`}
                center={p}
                radius={5}
                pathOptions={{ color, weight: 2, fillColor: '#fff', fillOpacity: 0.85, dashArray: '2' }}
                eventHandlers={{ click: () => onSelect({ s, at: p, introduced: true }) }}
              />
            ))
          : [];
        return [...native, ...intro];
      })}
    </>
  );
});

export default function ExploreMap() {
  const { t } = useTranslation(['species', 'categories', 'conservation', 'common']);
  const { l, n } = useLang();
  useDocumentTitle(t('map.title'), t('map.subtitle'));
  const [params, setParams] = useSearchParams();
  const cat = params.get('cat') ?? '';
  const hab = params.get('hab') ?? '';
  const status = params.get('status') ? params.get('status')!.split(',') : [];
  const colorBy = params.get('color') === 'category' ? 'category' : 'status';
  const showIntroduced = params.get('intro') === '1';
  const [fitKey, setFitKey] = useState(0);
  const [fly, setFly] = useState<{ lat: number; lng: number; key: number } | null>(null);
  const [selected, setSelected] = useState<Selected | null>(null);

  const set = (patch: Record<string, string | null>) => {
    const next = new URLSearchParams(params);
    Object.entries(patch).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
    setParams(next, { replace: true });
  };

  const filtered = useMemo(
    () =>
      allSpecies.filter(
        (s) =>
          (!cat || s.category === cat || s.secondaryCategories?.includes(cat as never)) &&
          (!hab || s.habitats.includes(hab as never)) &&
          (!status.length || status.includes(s.conservation.status)),
      ),
    [cat, hab, status.join()], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const bounds = useMemo(() => {
    const pts = filtered.flatMap((s) => s.range.native);
    return pts.length ? latLngBounds(pts.map(([a, b]) => [a, b] as [number, number])) : null;
  }, [filtered]);

  const colorOf = useCallback((s: SpeciesSummary) => (colorBy === 'status' ? STATUS_COLOR[s.conservation.status] : CATEGORY_COLOR[s.category]), [colorBy]);
  const locations = filtered.reduce((acc, s) => acc + s.range.native.length + (showIntroduced ? s.range.introduced?.length ?? 0 : 0), 0);

  const legend =
    colorBy === 'status'
      ? statusesPresent.map((s) => ({ key: s, color: STATUS_COLOR[s], label: `${s} · ${t(`conservation:status.${s}.name`)}` }))
      : categories.map((c) => ({ key: c.id, color: CATEGORY_COLOR[c.id], label: t(`categories:categories.${c.id}.name`) }));

  return (
    <div className="flex flex-col lg:h-[calc(100vh-4rem)] lg:flex-row">
      {/* Controls */}
      <aside className="order-2 border-t bg-background lg:order-1 lg:w-[360px] lg:shrink-0 lg:overflow-y-auto lg:border-r lg:border-t-0">
        <div className="space-y-5 p-5">
          <div>
            <h1 className="font-display text-2xl font-extrabold">{t('map.title')}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{t('map.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="text-xs text-muted-foreground">
              {t('explorer.filters.category')}
              <Select className="mt-1" value={cat} onChange={(e) => set({ cat: e.target.value || null })}>
                <option value="">{t('explorer.filters.all')}</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {t(`categories:categories.${c.id}.name`)}
                  </option>
                ))}
              </Select>
            </label>
            <label className="text-xs text-muted-foreground">
              {t('explorer.filters.habitat')}
              <Select className="mt-1" value={hab} onChange={(e) => set({ hab: e.target.value || null })}>
                <option value="">{t('explorer.filters.all')}</option>
                {habitats.map((h) => (
                  <option key={h.id} value={h.id}>
                    {t(`categories:habitats.${h.id}.name`)}
                  </option>
                ))}
              </Select>
            </label>
          </div>

          <div>
            <p className="mb-2 text-xs text-muted-foreground">{t('explorer.filters.status')}</p>
            <div className="flex flex-wrap gap-1.5">
              {statusesPresent.map((s) => (
                <Chip
                  key={s}
                  active={status.includes(s)}
                  onClick={() => {
                    const nextS = status.includes(s) ? status.filter((x) => x !== s) : [...status, s];
                    set({ status: nextS.join(',') || null });
                  }}
                  title={t(`conservation:status.${s}.name`)}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: STATUS_COLOR[s] }} />
                  {t(`conservation:status.${s}.name`)}
                </Chip>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-xs text-muted-foreground">
              {t('map.colorBy')}
              <Select className="h-8 w-auto text-xs" value={colorBy} onChange={(e) => set({ color: e.target.value === 'category' ? 'category' : null })}>
                <option value="status">{t('map.byStatus')}</option>
                <option value="category">{t('map.byCategory')}</option>
              </Select>
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-xs">
              <input type="checkbox" checked={showIntroduced} onChange={(e) => set({ intro: e.target.checked ? '1' : null })} className="accent-[hsl(var(--primary))]" />
              {t('map.showIntroduced')}
            </label>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-secondary/60 px-3 py-2 text-sm">
            <span className="font-semibold">{t('map.speciesShown', { num: n(filtered.length) })}</span>
            <span className="text-muted-foreground">{t('map.locations', { num: n(locations) })}</span>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-semibold">{t('map.list')}</h2>
            {filtered.length === 0 ? (
              <p className="text-sm text-muted-foreground">{t('map.noResults')}</p>
            ) : (
              <ul className="max-h-72 space-y-1 overflow-y-auto pr-1 lg:max-h-none">
                {filtered.map((s) => (
                  <li key={s.id} className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-secondary/60">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: colorOf(s) }} />
                    <Link to={`/species/${s.id}`} className="min-w-0 flex-1 truncate text-sm hover:text-primary">
                      {l(s.commonName)}
                    </Link>
                    <button
                      onClick={() => setFly({ lat: s.range.native[0][0], lng: s.range.native[0][1], key: Date.now() })}
                      className="rounded-full p-1 text-muted-foreground hover:bg-background hover:text-primary"
                      aria-label={`${t('map.focus')}: ${l(s.commonName)}`}
                      title={t('map.focus')}
                    >
                      <Crosshair className="h-3.5 w-3.5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </aside>

      {/* Map */}
      <div className="relative order-1 h-[60vh] lg:order-2 lg:h-auto lg:flex-1">
        <BaseMap preferCanvas>
          <FitBounds bounds={bounds} fitKey={`${cat}|${hab}|${status.join()}|${fitKey}`} maxZoom={4} />
          <FlyTo target={fly} />
          <MarkerLayer species={filtered} colorOf={colorOf} showIntroduced={showIntroduced} onSelect={setSelected} />
          {selected && (
            <Popup position={selected.at} eventHandlers={{ remove: () => setSelected(null) }}>
              <div className="w-52">
                {getBakedImage(selected.s.wikiTitle)?.thumb && (
                  <img src={getBakedImage(selected.s.wikiTitle)!.thumb!} alt="" referrerPolicy="no-referrer" className="mb-2 h-28 w-full rounded-lg object-cover" />
                )}
                <p className="text-sm font-bold">{l(selected.s.commonName)}</p>
                <p className="sci mb-1 text-xs opacity-70">{selected.s.scientificName}</p>
                <p className="mb-2 text-xs opacity-70">{selected.introduced ? t('map.introduced') : t('map.native')}</p>
                <p className="mb-2 flex items-center gap-1.5 text-xs">
                  {t('map.popupStatus')}: <ConservationBadge status={selected.s.conservation.status} compact />
                </p>
                <Link to={`/species/${selected.s.id}`} className="text-xs font-semibold text-primary underline-offset-2 hover:underline">
                  {t('common:actions.viewDetails')} →
                </Link>
              </div>
            </Popup>
          )}
        </BaseMap>

        <div className="absolute bottom-6 left-3 z-[500] max-w-[15rem] rounded-xl bg-card/95 p-3 text-xs shadow-lg backdrop-blur">
          <p className="mb-1.5 font-semibold">{t('map.legend')}</p>
          <ul className="max-h-40 space-y-1 overflow-y-auto">
            {legend.map((x) => (
              <li key={x.key} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full border border-white" style={{ background: x.color }} />
                <span className="truncate">{x.label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center gap-3 border-t pt-2 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/70" /> {t('map.native')}
            </span>
            <span className={cn('flex items-center gap-1', !showIntroduced && 'opacity-50')}>
              <span className="h-2.5 w-2.5 rounded-full border-2 border-dashed border-foreground/70" /> {t('map.introduced')}
            </span>
          </div>
        </div>

        <Button size="sm" variant="outline" className="absolute right-3 top-3 z-[500] bg-card shadow-md" onClick={() => setFitKey((k) => k + 1)}>
          <RotateCcw /> {t('map.reset')}
        </Button>
      </div>
    </div>
  );
}
