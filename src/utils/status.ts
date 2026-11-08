import type { IUCNStatus, PopulationTrend } from '@/types';

/** Ordered from most to least threatened. */
export const STATUS_ORDER: IUCNStatus[] = ['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC', 'DD', 'NE'];
export const THREATENED: IUCNStatus[] = ['CR', 'EN', 'VU'];

export const isThreatened = (s: IUCNStatus) => THREATENED.includes(s);
export const statusRank = (s: IUCNStatus) => STATUS_ORDER.indexOf(s);

/** IUCN-inspired colours (hex for charts/maps). */
export const STATUS_COLOR: Record<IUCNStatus, string> = {
  EX: '#1f1f1f',
  EW: '#542344',
  CR: '#d81e05',
  EN: '#fc7f3f',
  VU: '#e3b505',
  NT: '#a8c43a',
  LC: '#4f9a5f',
  DD: '#8b8f8c',
  NE: '#b5bab6',
};

/** Tailwind classes for badges. */
export const STATUS_BADGE: Record<IUCNStatus, string> = {
  EX: 'bg-neutral-900 text-white',
  EW: 'bg-[#542344] text-white',
  CR: 'bg-[#d81e05] text-white',
  EN: 'bg-[#fc7f3f] text-black',
  VU: 'bg-[#e3b505] text-black',
  NT: 'bg-[#a8c43a] text-black',
  LC: 'bg-[#4f9a5f] text-white',
  DD: 'bg-neutral-400 text-black',
  NE: 'bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-100',
};

export const TREND_ORDER: PopulationTrend[] = ['increasing', 'stable', 'decreasing', 'unknown'];
export const TREND_COLOR: Record<PopulationTrend, string> = {
  increasing: '#4f9a5f',
  stable: '#8FAF91',
  decreasing: '#d8572a',
  unknown: '#b5bab6',
};

export const CATEGORY_COLOR: Record<string, string> = {
  mammals: '#b45309',
  birds: '#0369a1',
  reptiles: '#4d7c0f',
  amphibians: '#0f766e',
  fish: '#1d4ed8',
  insects: '#ca8a04',
  plants: '#15803d',
  trees: '#174C38',
  flowers: '#db2777',
  fungi: '#78716c',
  marine: '#0891b2',
  freshwater: '#14b8a6',
};
