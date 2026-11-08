import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Compass, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function NotFound() {
  const { t } = useTranslation('common');
  useDocumentTitle(t('notFound.title'));
  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-8xl font-extrabold text-transparent [-webkit-text-stroke:2px_hsl(var(--primary))] sm:text-9xl">{t('notFound.code')}</p>
      <h1 className="mt-4 font-display text-3xl font-bold">{t('notFound.title')}</h1>
      <p className="mt-3 max-w-md text-muted-foreground">{t('notFound.body')}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link to="/">
            <Home /> {t('actions.goHome')}
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/explore">
            <Compass /> {t('notFound.explore')}
          </Link>
        </Button>
      </div>
    </section>
  );
}
