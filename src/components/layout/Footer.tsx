import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from '@/components/navigation/Header';
import { useLang } from '@/hooks/useLang';
import { categories } from '@/data/categories';

export function Footer() {
  const { t } = useTranslation(['common', 'navigation', 'categories']);
  const { d } = useLang();
  const year = new Date().getFullYear();

  const cols = [
    {
      title: t('common:footer.explore'),
      links: [
        { to: '/explore', label: t('navigation:explore') },
        { to: '/categories', label: t('navigation:categories') },
        { to: '/habitats', label: t('navigation:habitats') },
        { to: '/map', label: t('navigation:map') },
      ],
    },
    {
      title: t('common:footer.learn'),
      links: categories.slice(0, 5).map((c) => ({ to: `/categories/${c.id}`, label: t(`categories:categories.${c.id}.name`) })),
    },
    {
      title: t('common:footer.tools'),
      links: [
        { to: '/conservation', label: t('navigation:conservation') },
        { to: '/identify', label: t('navigation:identify') },
        { to: '/compare', label: t('navigation:compare') },
        { to: '/favorites', label: t('navigation:collection') },
        { to: '/about', label: t('navigation:about') },
      ],
    },
  ];

  return (
    <footer className="mt-24 border-t bg-forest-900 text-white/80 dark:bg-[#0b1611]">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{t('common:footer.about')}</p>
          <p className="mt-4 text-xs text-white/50">{t('common:footer.dataNote')}</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h2 className="mb-3 text-sm font-semibold text-lime">{c.title}</h2>
            <ul className="space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('common:footer.rights', { year: d(year) })}</p>
          <p>{t('common:footer.madeFor')}</p>
        </div>
      </div>
    </footer>
  );
}
