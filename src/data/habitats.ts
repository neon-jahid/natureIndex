import type { Habitat, HabitatId } from '@/types';

export const habitats: Habitat[] = [
  { id: 'tropical-forest', icon: 'Trees', wikiTitle: 'Tropical rainforest', center: [-3.4, -62.2], gradient: 'from-emerald-700/80 to-green-950/80' },
  { id: 'temperate-forest', icon: 'TreePine', wikiTitle: 'Temperate forest', center: [48.0, 8.0], gradient: 'from-green-700/80 to-stone-900/80' },
  { id: 'mangrove', icon: 'Sprout', wikiTitle: 'Sundarbans', center: [21.95, 89.18], gradient: 'from-teal-700/80 to-emerald-950/80' },
  { id: 'grassland', icon: 'Wheat', wikiTitle: 'Grassland', center: [-2.3, 34.8], gradient: 'from-yellow-600/80 to-lime-900/80' },
  { id: 'wetland', icon: 'Droplets', wikiTitle: 'Wetland', center: [24.4, 91.3], gradient: 'from-cyan-700/80 to-teal-950/80' },
  { id: 'rivers-lakes', icon: 'Waves', wikiTitle: 'River', center: [24.0, 90.0], gradient: 'from-sky-600/80 to-blue-950/80' },
  { id: 'ocean', icon: 'Ship', wikiTitle: 'Ocean', center: [0, -150], gradient: 'from-blue-700/80 to-indigo-950/80' },
  { id: 'coral-reef', icon: 'Fish', wikiTitle: 'Coral reef', center: [-18.3, 147.7], gradient: 'from-pink-600/80 to-cyan-900/80' },
  { id: 'desert', icon: 'Sun', wikiTitle: 'Desert', center: [23.4, 12.0], gradient: 'from-orange-600/80 to-amber-950/80' },
  { id: 'mountain', icon: 'Mountain', wikiTitle: 'Himalayas', center: [28.6, 84.0], gradient: 'from-slate-600/80 to-slate-950/80' },
  { id: 'polar', icon: 'Snowflake', wikiTitle: 'Polar regions of Earth', center: [75, -40], gradient: 'from-sky-300/70 to-slate-800/80' },
  { id: 'urban-farmland', icon: 'Tractor', wikiTitle: 'Agricultural land', center: [23.8, 90.4], gradient: 'from-lime-600/80 to-stone-900/80' },
];

export const habitatIds = habitats.map((h) => h.id) as HabitatId[];

export function getHabitat(id: string): Habitat | undefined {
  return habitats.find((h) => h.id === id);
}
