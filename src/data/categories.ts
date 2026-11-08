import type { Category, CategoryId } from '@/types';

export const categories: Category[] = [
  { id: 'mammals', icon: 'PawPrint', wikiTitle: 'Mammal', gradient: 'from-amber-700/80 to-orange-900/80' },
  { id: 'birds', icon: 'Bird', wikiTitle: 'Bird', gradient: 'from-sky-700/80 to-indigo-900/80' },
  { id: 'reptiles', icon: 'Turtle', wikiTitle: 'Reptile', gradient: 'from-lime-700/80 to-emerald-900/80' },
  { id: 'amphibians', icon: 'Droplets', wikiTitle: 'Amphibian', gradient: 'from-teal-600/80 to-cyan-900/80' },
  { id: 'fish', icon: 'Fish', wikiTitle: 'Fish', gradient: 'from-blue-600/80 to-blue-900/80' },
  { id: 'insects', icon: 'Bug', wikiTitle: 'Insect', gradient: 'from-yellow-600/80 to-amber-900/80' },
  { id: 'plants', icon: 'Sprout', wikiTitle: 'Plant', gradient: 'from-green-600/80 to-green-900/80' },
  { id: 'trees', icon: 'TreeDeciduous', wikiTitle: 'Tree', gradient: 'from-emerald-700/80 to-forest-900/80' },
  { id: 'flowers', icon: 'Flower2', wikiTitle: 'Flower', gradient: 'from-pink-600/80 to-rose-900/80' },
  { id: 'fungi', icon: 'Shell', wikiTitle: 'Fungus', gradient: 'from-stone-600/80 to-stone-900/80' },
  { id: 'marine', icon: 'Waves', wikiTitle: 'Marine life', gradient: 'from-cyan-600/80 to-blue-950/80' },
  { id: 'freshwater', icon: 'Droplet', wikiTitle: 'Lake', gradient: 'from-teal-500/80 to-sky-900/80' },
];

export const categoryIds = categories.map((c) => c.id) as CategoryId[];

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
