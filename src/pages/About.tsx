import { useTranslation } from 'react-i18next';
import { BookOpenText, Database, Languages, Lock, Target, TriangleAlert } from 'lucide-react';
import { species } from '@/data/species';
import { categories } from '@/data/categories';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHeader, Reveal } from '@/components/common/Section';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';

export default function About() {
  const { t } = useTranslation('common');
  useDocumentTitle(t('about.title'), t('about.mission'));

  const blocks = [
    { icon: Languages, title: t('about.bilingualTitle'), body: t('about.bilingual') },
    { icon: Database, title: t('about.dataTitle'), body: t('about.data') },
    { icon: Lock, title: t('about.privacyTitle'), body: t('about.privacy') },
    { icon: TriangleAlert, title: t('about.disclaimerTitle'), body: t('about.disclaimer') },
  ];

  return (
    <>
      <PageHeader title={t('about.title')} subtitle={t('about.subtitle')} />
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
              <Target className="h-6 w-6 text-primary" /> {t('about.missionTitle')}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/85">{t('about.mission')}</p>
            <h2 className="mt-10 flex items-center gap-2 font-display text-2xl font-bold">
              <BookOpenText className="h-6 w-6 text-primary" /> {t('about.whatTitle')}
            </h2>
            <ul className="mt-4 space-y-3">
              {(t('about.what', { returnObjects: true }) as string[]).map((w) => (
                <li key={w} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground/85">{w}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-3 gap-3 rounded-3xl bg-forest p-6 text-white lg:grid-cols-1">
              {[
                { v: species.length, l: t('about.statsSpecies') },
                { v: categories.length, l: t('about.statsCategories') },
                { v: 2, l: t('about.statsLanguages') },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-white/10 p-4">
                  <dd className="font-display text-3xl font-extrabold text-lime sm:text-4xl">
                    <AnimatedCounter value={s.v} />
                  </dd>
                  <dt className="text-sm text-white/75">{s.l}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="h-full rounded-3xl border bg-card p-6">
                <b.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-display text-xl font-bold">{b.title}</h3>
                <p className="mt-2 text-foreground/80">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
