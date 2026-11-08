import { useMemo } from 'react';
import { CircleMarker, Tooltip } from 'react-leaflet';
import { latLngBounds } from 'leaflet';
import { useTranslation } from 'react-i18next';
import type { Species } from '@/types';
import { BaseMap, FitBounds } from './BaseMap';
import { useLang } from '@/hooks/useLang';

const NATIVE = '#174C38';
const INTRODUCED = '#d8572a';

/** Range map for a single species: native and introduced points. */
export default function DistributionMap({ species }: { species: Species }) {
  const { t } = useTranslation('species');
  const { l } = useLang();
  const all = useMemo(() => [...species.range.native, ...(species.range.introduced ?? [])], [species]);
  const bounds = useMemo(() => (all.length ? latLngBounds(all.map(([a, b]) => [a, b] as [number, number])) : null), [all]);

  return (
    <div>
      <div className="relative h-[360px] overflow-hidden rounded-2xl border sm:h-[420px]">
        <BaseMap scrollWheelZoom={false}>
          <FitBounds bounds={bounds} fitKey={species.id} maxZoom={5} />
          {species.range.native.map((p, i) => (
            <CircleMarker key={`n${i}`} center={p} radius={11} pathOptions={{ color: '#fff', weight: 2, fillColor: NATIVE, fillOpacity: 0.85 }}>
              <Tooltip>
                <strong>{l(species.commonName)}</strong> · {t('map.native')}
              </Tooltip>
            </CircleMarker>
          ))}
          {species.range.introduced?.map((p, i) => (
            <CircleMarker key={`i${i}`} center={p} radius={9} pathOptions={{ color: '#fff', weight: 2, fillColor: INTRODUCED, fillOpacity: 0.85, dashArray: '3' }}>
              <Tooltip>
                <strong>{l(species.commonName)}</strong> · {t('map.introduced')}
              </Tooltip>
            </CircleMarker>
          ))}
        </BaseMap>
        <div className="pointer-events-none absolute left-3 top-3 z-[500] rounded-xl bg-card/90 px-3 py-2 text-xs shadow-md backdrop-blur">
          <p className="mb-1 font-semibold">{t('map.legend')}</p>
          <p className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border-2 border-white" style={{ background: NATIVE }} /> {t('map.native')}
          </p>
          {species.range.introduced?.length ? (
            <p className="mt-1 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full border-2 border-white" style={{ background: INTRODUCED }} /> {t('map.introduced')}
            </p>
          ) : null}
        </div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{t('details.mapNote')}</p>
    </div>
  );
}
