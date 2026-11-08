import type { Region, RegionId } from '@/types';

export const regions: Region[] = [
  { id: 'south-asia', center: [23, 82] },
  { id: 'southeast-asia', center: [5, 110] },
  { id: 'east-asia', center: [35, 110] },
  { id: 'africa', center: [2, 20] },
  { id: 'europe', center: [50, 15] },
  { id: 'north-america', center: [45, -100] },
  { id: 'south-america', center: [-15, -60] },
  { id: 'oceania', center: [-25, 135] },
  { id: 'polar', center: [75, 0] },
  { id: 'oceans', center: [0, -140] },
];

export const regionIds = regions.map((r) => r.id) as RegionId[];
