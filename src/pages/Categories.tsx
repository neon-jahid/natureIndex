import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { categories, getCategory } from '@/data/categories';
import { speciesInCategory } from '@/data/species';
import { useLang } from '@/hooks/useLang';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHeader, Reveal } from '@/components/common/Section';
import { CategoryCard } from '@/components/cards/CategoryCard';
import { SpeciesCard } from '@/components/cards/SpeciesCard';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { Icon } from '@/components/common/Icon';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';

function CategoryDetail({ id }: { id: string }) {
  const { t } = useTranslation(['categories', 'navigation', 'species', 'common']);
  const { n } = useLang();
  const cat = getCategory(id)!;
  const list = speciesInCategory(id);
  const name = t(`categories.${id}.name`);
  useDocumentTitle(name, t(`categories.${id}.description`));

  return (
    <>
      <header className="relative overflow-hidden bg-forest-900 text-white">
        <SpeciesImage wikiTitle={cat.wikiTitle} alt={name} category={id} size="large" eager className="absolute inset-0" />
        <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient}`} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative py-16 sm:py-24">
          <Link to="/categories" className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> {t('navigation:categories')}
          </Link>
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
            <Icon name={cat.icon} className="h-6 w-6" />
          </span>
          <h1 className="font-display text-4xl font-extrabold sm:text-6xl">{name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/85">{t(`categories.${id}.description`)}</p>
          <p className="mt-4 text-sm font-semibold text-lime">{t('page.speciesCount', { num: n(list.length) })}</p>
        </div>
      </header>
      <section className="container py-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-2xl font-bold">{t('page.inCategory')}</h2>
          <Button asChild variant="outline">
            <Link to={`/explore?cat=${id}`}>
              {t('species:explorer.title')} <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {list.map((s, i) => (
            <SpeciesCard key={s.id} species={s} index={i} />
          ))}
        </div>
        <div className="mt-14">
          <h2 className="mb-5 font-display text-xl font-bold">{t('page.title')}</h2>
          <div className="flex flex-wrap gap-2">
            {categories
              .filter((c) => c.id !== id)
              .map((c) => (
                <Link key={c.id} to={`/categories/${c.id}`} className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3.5 py-2 text-sm transition hover:border-primary hover:text-primary">
                  <Icon name={c.icon} className="h-4 w-4" /> {t(`categories.${c.id}.name`)}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function Categories() {
  const { id } = useParams();
  const { t } = useTranslation('categories');
  useDocumentTitle(id ? undefined : t('page.title'), t('page.subtitle'));

  if (id) return getCategory(id) ? <CategoryDetail key={id} id={id} /> : <NotFound />;

  return (
    <>
      <PageHeader title={t('page.title')} subtitle={t('page.subtitle')} />
      <section className="container py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.03}>
              <CategoryCard category={c} count={speciesInCategory(c.id).length} showDescription className="[&>div:last-child]:min-h-[15rem]" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
