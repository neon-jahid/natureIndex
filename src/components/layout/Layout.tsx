import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Header } from '@/components/navigation/Header';
import { GlobalSearch } from '@/components/navigation/GlobalSearch';
import { Footer } from './Footer';
import { CompareTray } from './CompareTray';
import { Toaster } from '@/components/common/Toaster';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useThemeSync } from '@/hooks/useTheme';

function PageFallback() {
  const { t } = useTranslation('common');
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status">
      <div className="flex flex-col items-center gap-3 text-muted-foreground">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-secondary border-t-primary" />
        <span className="text-sm">{t('states.loading')}</span>
      </div>
    </div>
  );
}

export function Layout() {
  useThemeSync();
  const { t } = useTranslation('navigation');
  const location = useLocation();

  // Scroll to top on page change (but keep position on query-string changes like filters).
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  const isHome = location.pathname === '/';

  return (
    <TooltipProvider>
      <a href="#main" className="sr-only z-[2000] rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        {t('skipToContent')}
      </a>
      <Header />
      <GlobalSearch />
      <main id="main" className={isHome ? '' : 'pt-16'}>
        <ErrorBoundary resetKey={location.pathname}>
          <Suspense fallback={<PageFallback />}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.div>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <CompareTray />
      <Toaster />
    </TooltipProvider>
  );
}
