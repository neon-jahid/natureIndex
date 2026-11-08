import { useEffect, useState } from 'react';
import images from '@/data/images.json';

/** Compact baked entry: t = 500px thumbnail, l = 960px large (optional). */
interface Baked {
  t: string;
  l?: string;
}

export interface ImageSet {
  thumb: string | null;
  large: string | null;
  page: string;
}

const baked = images as Record<string, Baked>;
const memory = new Map<string, ImageSet | null>();
const CACHE_KEY = 'natureindex-img-cache';

export const wikiPage = (title: string) => `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`;

function fromBaked(title: string): ImageSet | undefined {
  const b = baked[title];
  return b ? { thumb: b.t, large: b.l ?? b.t, page: wikiPage(title) } : undefined;
}

function readCache(): Record<string, ImageSet> {
  try {
    return JSON.parse(sessionStorage.getItem(CACHE_KEY) || '{}');
  } catch {
    return {};
  }
}

function writeCache(title: string, set: ImageSet) {
  try {
    const c = readCache();
    c[title] = set;
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(c));
  } catch {
    /* ignore quota errors */
  }
}

async function fetchRuntime(title: string): Promise<ImageSet | null> {
  const slug = encodeURIComponent(title.replace(/ /g, '_'));
  const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${slug}`);
  if (!res.ok) return null;
  const j = await res.json();
  const thumb: string | null = j.thumbnail?.source ?? null;
  return { thumb, large: thumb, page: j.content_urls?.desktop?.page ?? wikiPage(title) };
}

export function getBakedImage(title: string): ImageSet | undefined {
  return fromBaked(title);
}

function known(title: string): ImageSet | null | undefined {
  const b = fromBaked(title);
  if (b) return b;
  if (memory.has(title)) return memory.get(title);
  return readCache()[title];
}

/**
 * Resolve photographs for an English Wikipedia article title.
 * Uses build-time baked URLs first (scripts/fetch-images.mjs), then a cached runtime lookup.
 */
export function useSpeciesImage(title: string | undefined) {
  const [set, setSet] = useState<ImageSet | null>(() => (title ? known(title) ?? null : null));
  const [loading, setLoading] = useState(() => !!title && known(title) === undefined);

  useEffect(() => {
    if (!title) return;
    const k = known(title);
    if (k !== undefined) {
      setSet(k);
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    fetchRuntime(title)
      .then((r) => {
        memory.set(title, r);
        if (r) writeCache(title, r);
        if (!cancelled) setSet(r);
      })
      .catch(() => {
        memory.set(title, null);
        if (!cancelled) setSet(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [title]);

  return { images: set, loading };
}

/* ---------- Lazy gallery ---------- */
let galleryPromise: Promise<Record<string, string[]>> | null = null;
function loadGallery() {
  galleryPromise ??= import('@/data/generated/gallery.json').then((m) => m.default as Record<string, string[]>).catch(() => ({}));
  return galleryPromise;
}

/** Extra gallery photos for a title (lazy-loaded JSON). */
export function useGallery(title: string) {
  const [urls, setUrls] = useState<string[] | null>(null);
  useEffect(() => {
    let cancelled = false;
    loadGallery().then((g) => !cancelled && setUrls(g[title] ?? []));
    return () => {
      cancelled = true;
    };
  }, [title]);
  return urls;
}
