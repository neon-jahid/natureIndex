import { useTranslation } from 'react-i18next';
import { Check, Copy, GitCompareArrows, Heart, Printer, Share2 } from 'lucide-react';
import type { Species } from '@/types';
import { useAppStore, MAX_COMPARE } from '@/store/useAppStore';
import { Button } from '@/components/ui/button';
import { Tip } from '@/components/ui/tooltip';
import { toast } from '@/components/common/Toaster';
import { useLang } from '@/hooks/useLang';
import { cn } from '@/utils/cn';
import { useState } from 'react';

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for non-secure contexts
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

export function FavoriteButton({ id, variant = 'icon', className }: { id: string; variant?: 'icon' | 'overlay' | 'full'; className?: string }) {
  const { t } = useTranslation('common');
  const fav = useAppStore((s) => s.favorites.includes(id));
  const toggle = useAppStore((s) => s.toggleFavorite);
  const label = fav ? t('actions.unfavorite') : t('actions.favorite');
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(id);
    toast(fav ? t('toast.removedFavorite') : t('toast.addedFavorite'));
  };
  if (variant === 'full') {
    return (
      <Button variant={fav ? 'default' : 'outline'} onClick={onClick} aria-pressed={fav} className={className}>
        <Heart className={cn(fav && 'fill-current')} />
        {label}
      </Button>
    );
  }
  return (
    <Tip label={label}>
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-pressed={fav}
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95',
          variant === 'overlay' ? 'bg-black/35 text-white backdrop-blur-md hover:bg-black/50' : 'border bg-card hover:bg-secondary',
          fav && 'text-rose-500',
          className,
        )}
      >
        <Heart className={cn('h-4 w-4', fav && 'fill-rose-500 text-rose-500')} />
      </button>
    </Tip>
  );
}

export function CompareButton({ id, variant = 'icon', className }: { id: string; variant?: 'icon' | 'overlay' | 'full'; className?: string }) {
  const { t } = useTranslation('common');
  const active = useAppStore((s) => s.compare.includes(id));
  const toggle = useAppStore((s) => s.toggleCompare);
  const label = active ? t('actions.removeCompare') : t('actions.addCompare');
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const ok = toggle(id);
    if (!ok) toast(t('toast.compareFull', { max: MAX_COMPARE }), 'info');
    else toast(active ? t('toast.removedCompare') : t('toast.addedCompare'));
  };
  if (variant === 'full') {
    return (
      <Button variant={active ? 'secondary' : 'outline'} onClick={onClick} aria-pressed={active} className={className}>
        <GitCompareArrows />
        {label}
      </Button>
    );
  }
  return (
    <Tip label={label}>
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-pressed={active}
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95',
          variant === 'overlay' ? 'bg-black/35 text-white backdrop-blur-md hover:bg-black/50' : 'border bg-card hover:bg-secondary',
          active && (variant === 'overlay' ? 'bg-lime text-forest-800 hover:bg-lime' : 'border-primary bg-primary text-primary-foreground hover:bg-primary'),
          className,
        )}
      >
        <GitCompareArrows className="h-4 w-4" />
      </button>
    </Tip>
  );
}

export function CopyScientificButton({ name, className }: { name: string; className?: string }) {
  const { t } = useTranslation('common');
  const [done, setDone] = useState(false);
  const onClick = async () => {
    const ok = await copyText(name);
    toast(ok ? t('toast.copied') : t('toast.copyFailed'), ok ? 'success' : 'info');
    if (ok) {
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    }
  };
  return (
    <Tip label={t('actions.copyScientific')}>
      <button
        type="button"
        onClick={onClick}
        aria-label={t('actions.copyScientific')}
        className={cn('inline-flex h-7 w-7 items-center justify-center rounded-full text-current opacity-70 transition hover:bg-white/15 hover:opacity-100', className)}
      >
        {done ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </Tip>
  );
}

export function ShareButton({ species, className }: { species: Species; className?: string }) {
  const { t } = useTranslation('common');
  const { l } = useLang();
  const onClick = async () => {
    const url = window.location.href;
    const title = `${l(species.commonName)} (${species.scientificName})`;
    if (navigator.share) {
      try {
        await navigator.share({ title, text: l(species.description).slice(0, 140) + '…', url });
        return;
      } catch (e) {
        if ((e as DOMException)?.name === 'AbortError') return;
      }
    }
    const ok = await copyText(url);
    toast(ok ? t('toast.linkCopied') : t('toast.copyFailed'), ok ? 'success' : 'info');
  };
  return (
    <Button variant="outline" onClick={onClick} className={className}>
      <Share2 />
      {t('actions.share')}
    </Button>
  );
}

export function PrintButton({ className }: { className?: string }) {
  const { t } = useTranslation('common');
  return (
    <Button variant="outline" onClick={() => window.print()} className={className}>
      <Printer />
      {t('actions.print')}
    </Button>
  );
}
