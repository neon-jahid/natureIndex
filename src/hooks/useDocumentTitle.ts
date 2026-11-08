import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/** Sets a localized document title and meta description for SEO. */
export function useDocumentTitle(title?: string, description?: string) {
  const { t } = useTranslation('common');
  useEffect(() => {
    const brand = t('appName');
    document.title = title ? `${title} · ${brand}` : `${brand} – ${t('tagline')}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', (description || t('metaDescription')).slice(0, 160));
  }, [title, description, t]);
}
