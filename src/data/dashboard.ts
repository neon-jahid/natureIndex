/**
 * Reference statistics for the conservation dashboard.
 * Each series names its source so the UI can display it.
 */

/** IUCN Red List of Threatened Species, version 2025-1 (approximate headline figures). */
export const redListHeadline = {
  assessed: 169420,
  threatened: 47187,
  source: 'IUCN Red List 2025-1',
};

/** WWF Living Planet Report 2024: average decline in monitored wildlife populations since 1970. */
export const livingPlanetDecline = { percent: 73, source: 'WWF Living Planet Report 2024' };

/** Tiger population estimates from official national surveys. */
export const tigerTrend = {
  source: 'NTCA (India) All-India Tiger Estimation; Bangladesh Forest Department camera-trap surveys',
  points: [
    { year: 2006, india: 1411 },
    { year: 2010, india: 1706 },
    { year: 2014, india: 2226 },
    { year: 2015, bangladesh: 106 },
    { year: 2018, india: 2967, bangladesh: 114 },
    { year: 2022, india: 3682 },
    { year: 2024, bangladesh: 125 },
  ],
};

/** Giant panda national survey results (State Forestry Administration of China). */
export const pandaTrend = {
  source: 'China National Giant Panda Surveys',
  points: [
    { year: 1977, panda: 2459 },
    { year: 1988, panda: 1114 },
    { year: 2003, panda: 1596 },
    { year: 2014, panda: 1864 },
  ],
};

/**
 * Relative importance of major drivers of biodiversity loss.
 * DEMONSTRATION DATA — an illustrative ranking inspired by IPBES (2019),
 * which identifies land/sea-use change as the largest driver followed by direct
 * exploitation, climate change, pollution and invasive species. Values are indicative only.
 */
export const threatDrivers = [
  { id: 'landUse', value: 30 },
  { id: 'exploitation', value: 23 },
  { id: 'climate', value: 14 },
  { id: 'pollution', value: 14 },
  { id: 'invasive', value: 11 },
  { id: 'other', value: 8 },
] as const;
