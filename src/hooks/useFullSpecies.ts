import { useEffect, useState } from 'react';
import type { Species } from '@/types';
import { loadSpecies } from '@/data/species';

/** Lazy-load complete species records for one or more ids. */
export function useFullSpecies(ids: string[]) {
  const key = ids.join('|');
  const [state, setState] = useState<{ key: string; data: Record<string, Species>; error: boolean }>({ key: '', data: {}, error: false });

  useEffect(() => {
    let cancelled = false;
    if (!ids.length) {
      setState({ key, data: {}, error: false });
      return;
    }
    Promise.all(ids.map((id) => loadSpecies(id)))
      .then((list) => {
        if (cancelled) return;
        const data: Record<string, Species> = {};
        list.forEach((s) => s && (data[s.id] = s));
        setState({ key, data, error: false });
      })
      .catch(() => !cancelled && setState({ key, data: {}, error: true }));
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return { data: state.data, loading: state.key !== key && !state.error, error: state.error };
}
