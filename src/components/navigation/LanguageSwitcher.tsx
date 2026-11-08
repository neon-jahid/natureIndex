import { useTranslation } from 'react-i18next';
import { useLang } from '@/hooks/useLang';
import { cn } from '@/utils/cn';
import type { Lang } from '@/types';

/**
 * EN | বাংলা segmented switch. Changing language only swaps translations —
 * the route, query string (search & filters) and scroll position are untouched.
 */
export function LanguageSwitcher({ className, onDark }: { className?: string; onDark?: boolean }) {
  const { t } = useTranslation('common');
  const { lang, setLang } = useLang();
  const options: { id: Lang; label: string }[] = [
    { id: 'en', label: 'EN' },
    { id: 'bn', label: 'বাংলা' },
  ];
  return (
    <div
      role="group"
      aria-label={t('language.label')}
      className={cn(
        'relative inline-flex items-center rounded-full border p-0.5 text-xs font-semibold',
        onDark ? 'border-white/30 bg-white/10 backdrop-blur-md' : 'bg-card',
        className,
      )}
    >
      {options.map((o) => {
        const active = lang === o.id;
        return (
          <button
            key={o.id}
            type="button"
            lang={o.id}
            aria-pressed={active}
            aria-label={t('language.switchTo', { lang: t(`language.${o.id}`) })}
            onClick={() => setLang(o.id)}
            className={cn(
              'relative rounded-full px-2.5 py-1 transition-all',
              o.id === 'bn' && 'font-bengali',
              active
                ? 'bg-primary text-primary-foreground shadow-sm'
                : onDark
                  ? 'text-white/85 hover:text-white'
                  : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
