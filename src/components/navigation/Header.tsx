import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Menu, Search, X, ScanSearch, GitCompareArrows } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { useSearchDialog } from './GlobalSearch';
import { useAppStore } from '@/store/useAppStore';
import { Tip } from '@/components/ui/tooltip';
import { useLang } from '@/hooks/useLang';
import { cn } from '@/utils/cn';

export const NAV_ITEMS = [
  { to: '/', key: 'home', end: true },
  { to: '/explore', key: 'explore' },
  { to: '/categories', key: 'categories' },
  { to: '/habitats', key: 'habitats' },
  { to: '/map', key: 'map' },
  { to: '/conservation', key: 'conservation' },
  { to: '/about', key: 'about' },
] as const;

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  const { t } = useTranslation('common');
  return (
    <Link to="/" className={cn('group flex items-center gap-2.5', className)} aria-label={t('appName')}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest shadow-sm transition-transform group-hover:rotate-[-6deg]">
        <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden>
          <path d="M44 12c-16 0-27 9-27 25 0 3.4.7 6.8 2 9.6C24 33 33 25 42 21.6c-8 4.6-16 12.5-20.4 25.7 2.3 1.5 5 2.2 8 2.2C45 49.5 49.5 33 44 12z" fill="#C4D96B" />
        </svg>
      </span>
      <span className={cn('font-display text-lg font-extrabold tracking-tight', light ? 'text-white' : 'text-foreground')}>
        Nature<span className={light ? 'text-lime' : 'text-forest-500 dark:text-lime'}>Index</span>
      </span>
    </Link>
  );
}

export function Header() {
  const { t } = useTranslation(['navigation', 'common']);
  const { n } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const setSearchOpen = useSearchDialog((s) => s.setOpen);
  const favCount = useAppStore((s) => s.favorites.length);
  const transparent = location.pathname === '/' && !scrolled && !open;

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const iconBtn = cn(
    'relative inline-flex h-9 w-9 items-center justify-center rounded-full transition',
    transparent ? 'text-white hover:bg-white/15' : 'hover:bg-secondary',
  );

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 transition-all duration-300',
        open ? 'z-[990]' : 'z-[900]',
        transparent ? 'bg-gradient-to-b from-black/50 to-transparent' : 'border-b bg-background/85 shadow-sm backdrop-blur-xl',
      )}
    >
      <div className="container flex h-16 items-center gap-3">
        <Logo light={transparent} />

        <nav aria-label={t('navigation:mainNav')} className="ml-6 hidden flex-1 items-center gap-0.5 xl:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={'end' in item ? item.end : undefined}
              className={({ isActive }) =>
                cn(
                  'whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition',
                  transparent
                    ? isActive
                      ? 'bg-white/20 text-white'
                      : 'text-white/85 hover:bg-white/10 hover:text-white'
                    : isActive
                      ? 'bg-secondary text-primary'
                      : 'text-foreground/75 hover:bg-secondary hover:text-foreground',
                )
              }
            >
              {t(`navigation:${item.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-1.5">
          <Tip label={`${t('common:search.open')} ( / )`}>
            <button className={iconBtn} onClick={() => setSearchOpen(true)} aria-label={t('common:search.open')}>
              <Search className="h-[18px] w-[18px]" />
            </button>
          </Tip>
          <LanguageSwitcher onDark={transparent} className="hidden sm:inline-flex" />
          <ThemeToggle className={transparent ? 'text-white hover:bg-white/15' : ''} />
          <Tip label={t('navigation:favorites')}>
            <Link to="/favorites" className={iconBtn} aria-label={t('navigation:favorites')}>
              <Heart className="h-[18px] w-[18px]" />
              {favCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                  {n(favCount)}
                </span>
              )}
            </Link>
          </Tip>
          <button className={cn(iconBtn, 'xl:hidden')} onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t('navigation:closeMenu') : t('navigation:openMenu')}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label={t('navigation:mainNav')}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 4rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-y-auto border-t bg-background xl:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              <div className="mb-3 flex items-center justify-between rounded-2xl bg-secondary/60 p-3 sm:hidden">
                <span className="text-sm font-medium">{t('common:language.label')}</span>
                <LanguageSwitcher />
              </div>
              {NAV_ITEMS.map((item, i) => (
                <motion.div key={item.to} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}>
                  <NavLink
                    to={item.to}
                    end={'end' in item ? item.end : undefined}
                    className={({ isActive }) =>
                      cn('block rounded-xl px-4 py-3 text-lg font-semibold transition', isActive ? 'bg-secondary text-primary' : 'hover:bg-secondary/60')
                    }
                  >
                    {t(`navigation:${item.key}`)}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2 border-t pt-4">
                <Link to="/identify" className="flex items-center gap-2 rounded-xl bg-secondary/60 px-4 py-3 text-sm font-semibold">
                  <ScanSearch className="h-4 w-4" /> {t('navigation:identify')}
                </Link>
                <Link to="/compare" className="flex items-center gap-2 rounded-xl bg-secondary/60 px-4 py-3 text-sm font-semibold">
                  <GitCompareArrows className="h-4 w-4" /> {t('navigation:compare')}
                </Link>
                <Link to="/favorites" className="col-span-2 flex items-center gap-2 rounded-xl bg-secondary/60 px-4 py-3 text-sm font-semibold">
                  <Heart className="h-4 w-4" /> {t('navigation:collection')}
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
