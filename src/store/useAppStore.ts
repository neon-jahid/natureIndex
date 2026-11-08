import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'system';

export interface CollectionNote {
  note: string;
  /** User marked this species as "seen in the wild". */
  seen: boolean;
  updatedAt: number;
}

interface AppState {
  theme: Theme;
  favorites: string[];
  recent: string[];
  compare: string[];
  notes: Record<string, CollectionNote>;
  setTheme: (t: Theme) => void;
  toggleFavorite: (id: string) => void;
  addRecent: (id: string) => void;
  clearRecent: () => void;
  /** Returns false when the compare tray is already full. */
  toggleCompare: (id: string) => boolean;
  removeCompare: (id: string) => void;
  clearCompare: () => void;
  setNote: (id: string, patch: Partial<Omit<CollectionNote, 'updatedAt'>>) => void;
  clearFavorites: () => void;
}

export const MAX_COMPARE = 3;
const MAX_RECENT = 12;

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      favorites: [],
      recent: [],
      compare: [],
      notes: {},
      setTheme: (theme) => set({ theme }),
      toggleFavorite: (id) =>
        set((s) => ({
          favorites: s.favorites.includes(id) ? s.favorites.filter((f) => f !== id) : [id, ...s.favorites],
        })),
      addRecent: (id) => set((s) => ({ recent: [id, ...s.recent.filter((r) => r !== id)].slice(0, MAX_RECENT) })),
      clearRecent: () => set({ recent: [] }),
      toggleCompare: (id) => {
        const { compare } = get();
        if (compare.includes(id)) {
          set({ compare: compare.filter((c) => c !== id) });
          return true;
        }
        if (compare.length >= MAX_COMPARE) return false;
        set({ compare: [...compare, id] });
        return true;
      },
      removeCompare: (id) => set((s) => ({ compare: s.compare.filter((c) => c !== id) })),
      clearCompare: () => set({ compare: [] }),
      setNote: (id, patch) =>
        set((s) => {
          const prev = s.notes[id] ?? { note: '', seen: false, updatedAt: 0 };
          return { notes: { ...s.notes, [id]: { ...prev, ...patch, updatedAt: Date.now() } } };
        }),
      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: 'natureindex-store',
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ theme: s.theme, favorites: s.favorites, recent: s.recent, compare: s.compare, notes: s.notes }),
    },
  ),
);
