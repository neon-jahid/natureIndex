import {
  Bird,
  Bug,
  Droplet,
  Droplets,
  Fish,
  Flower2,
  Leaf,
  Mountain,
  PawPrint,
  Shell,
  Ship,
  Snowflake,
  Sprout,
  Sun,
  Tractor,
  TreeDeciduous,
  TreePine,
  Trees,
  Turtle,
  Waves,
  Wheat,
  type LucideProps,
} from 'lucide-react';

const ICONS = {
  Bird,
  Bug,
  Droplet,
  Droplets,
  Fish,
  Flower2,
  Leaf,
  Mountain,
  PawPrint,
  Shell,
  Ship,
  Snowflake,
  Sprout,
  Sun,
  Tractor,
  TreeDeciduous,
  TreePine,
  Trees,
  Turtle,
  Waves,
  Wheat,
};

/** Renders a lucide icon by name (used for data-driven icons). */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = ICONS[name as keyof typeof ICONS] ?? Leaf;
  return <C aria-hidden="true" {...props} />;
}
