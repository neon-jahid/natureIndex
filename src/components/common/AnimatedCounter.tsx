import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { useLang } from '@/hooks/useLang';

/** Counts up to `value` when scrolled into view; formatted for the active locale. */
export function AnimatedCounter({ value, suffix = '', className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);
  const { n } = useLang();

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setCurrent(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {n(current)}
      {suffix}
    </span>
  );
}
