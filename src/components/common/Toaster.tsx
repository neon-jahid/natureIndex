import { create } from 'zustand';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Info } from 'lucide-react';

interface Toast {
  id: number;
  message: string;
  kind: 'success' | 'info';
}

interface ToastState {
  toasts: Toast[];
  push: (message: string, kind?: Toast['kind']) => void;
  dismiss: (id: number) => void;
}

let seq = 0;
export const useToast = create<ToastState>((set) => ({
  toasts: [],
  push: (message, kind = 'success') => {
    const id = ++seq;
    set((s) => ({ toasts: [...s.toasts.slice(-2), { id, message, kind }] }));
    setTimeout(() => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })), 2800);
  },
  dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));

export const toast = (message: string, kind?: Toast['kind']) => useToast.getState().push(message, kind);

export function Toaster() {
  const { toasts, dismiss } = useToast();
  return (
    <div aria-live="polite" role="status" className="pointer-events-none fixed bottom-4 left-1/2 z-[1200] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 flex-col gap-2 sm:bottom-6">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.button
            key={t.id}
            layout
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            onClick={() => dismiss(t.id)}
            className="pointer-events-auto flex items-center gap-2.5 rounded-2xl bg-charcoal px-4 py-3 text-left text-sm font-medium text-paper shadow-xl dark:bg-paper dark:text-charcoal"
          >
            {t.kind === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0 text-lime dark:text-forest" /> : <Info className="h-4 w-4 shrink-0" />}
            {t.message}
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}
