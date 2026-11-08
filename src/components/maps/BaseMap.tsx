import { useEffect, type ReactNode } from 'react';
import { MapContainer, TileLayer, useMap, ZoomControl } from 'react-leaflet';
import type { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/hooks/useTheme';
import 'leaflet/dist/leaflet.css';

/** Keeps map controls' titles (zoom buttons) translated. */
function LocalizeControls() {
  const map = useMap();
  const { t, i18n } = useTranslation('species');
  useEffect(() => {
    const c = map.getContainer();
    const zin = c.querySelector('.leaflet-control-zoom-in');
    const zout = c.querySelector('.leaflet-control-zoom-out');
    zin?.setAttribute('title', t('map.zoomIn'));
    zin?.setAttribute('aria-label', t('map.zoomIn'));
    zout?.setAttribute('title', t('map.zoomOut'));
    zout?.setAttribute('aria-label', t('map.zoomOut'));
  }, [map, t, i18n.language]);
  return null;
}

/** Fits the view to the given bounds whenever the key changes. */
export function FitBounds({ bounds, fitKey, maxZoom = 5 }: { bounds: LatLngBoundsExpression | null; fitKey: string; maxZoom?: number }) {
  const map = useMap();
  useEffect(() => {
    if (bounds) map.fitBounds(bounds, { padding: [40, 40], maxZoom, animate: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fitKey]);
  return null;
}

export function BaseMap({
  center = [20, 20],
  zoom = 2,
  children,
  className,
  scrollWheelZoom = true,
  preferCanvas = false,
}: {
  center?: LatLngExpression;
  zoom?: number;
  children?: ReactNode;
  className?: string;
  scrollWheelZoom?: boolean;
  /** Render vector markers on a canvas — much faster for thousands of points. */
  preferCanvas?: boolean;
}) {
  const dark = useIsDark();
  const { t } = useTranslation('species');
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      minZoom={1}
      maxZoom={10}
      worldCopyJump
      zoomControl={false}
      scrollWheelZoom={scrollWheelZoom}
      preferCanvas={preferCanvas}
      className={className}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution={`<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">${t('map.attribution')}</a>`}
        className={dark ? 'ni-tiles-dark' : 'ni-tiles'}
      />
      <ZoomControl position="bottomright" />
      <LocalizeControls />
      {children}
    </MapContainer>
  );
}
