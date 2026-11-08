import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Binoculars, Download, Heart, History, Trash2 } from 'lucide-react';
import { getSpecies } from '@/data/species';
import { useAppStore } from '@/store/useAppStore';
import { useLang } from '@/hooks/useLang';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHeader, EmptyState } from '@/components/common/Section';
import { SpeciesImage } from '@/components/species/SpeciesImage';
import { ConservationBadge } from '@/components/species/ConservationBadge';
import { FavoriteButton } from '@/components/species/SpeciesActions';
import { SpeciesCard } from '@/components/cards/SpeciesCard';
import { Button } from '@/components/ui/button';
import type { SpeciesSummary } from '@/types';

const defined = (s: SpeciesSummary | undefined): s is SpeciesSummary => Boolean(s);

export default function Favorites() {
  const { t } = useTranslation(['common', 'categories', 'conservation']);
  const { l, n, lang } = useLang();
  useDocumentTitle(t('favorites.title'), t('favorites.subtitle'));
  const favorites = useAppStore((s) => s.favorites);
  const recent = useAppStore((s) => s.recent);
  const notes = useAppStore((s) => s.notes);
  const setNote = useAppStore((s) => s.setNote);
  const clearRecent = useAppStore((s) => s.clearRecent);
  const clearFavorites = useAppStore((s) => s.clearFavorites);

  const favs = favorites.map(getSpecies).filter(defined);
  const recents = recent.map(getSpecies).filter(defined);
  const seen = favs.filter((s) => notes[s.id]?.seen).length;

  const exportList = () => {
    const lines = favs.map((s) => {
      const note = notes[s.id];
      return [
        `${l(s.commonName)} — ${s.scientificName}`,
        `  ${t(`conservation:status.${s.conservation.status}.name`)} (${s.conservation.status})`,
        note?.seen ? `  ✓ ${t('favorites.seen')}` : '',
        note?.note ? `  ${note.note}` : '',
      ]
        .filter(Boolean)
        .join('\n');
    });
    const blob = new Blob([`NatureIndex — ${t('favorites.title')}\n\n${lines.join('\n\n')}\n`], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `natureindex-collection-${lang}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageHeader title={t('favorites.title')} subtitle={t('favorites.subtitle')}>
        {favs.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-1.5 text-sm font-semibold shadow-sm">
              <Heart className="h-4 w-4 fill-rose-500 text-rose-500" /> {t('favorites.count', { num: n(favs.length) })}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-1.5 text-sm font-semibold shadow-sm">
              <Binoculars className="h-4 w-4 text-primary" /> {t('favorites.seenCount', { num: n(seen) })}
            </span>
            <Button variant="outline" size="sm" onClick={exportList}>
              <Download /> {t('favorites.export')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (window.confirm(t('favorites.confirmClear'))) clearFavorites();
              }}
            >
              <Trash2 /> {t('favorites.clearFavorites')}
            </Button>
          </div>
        )}
      </PageHeader>

      <div className="container py-12">
        {favs.length === 0 ? (
          <EmptyState
            icon={<Heart className="h-6 w-6" />}
            title={t('favorites.emptyTitle')}
            body={t('favorites.emptyBody')}
            action={
              <Button asChild>
                <Link to="/explore">{t('notFound.explore')}</Link>
              </Button>
            }
          />
        ) : (
          <ul className="grid gap-4 md:grid-cols-2">
            {favs.map((s) => {
              const note = notes[s.id];
              return (
                <li key={s.id} className="flex gap-4 rounded-2xl border bg-card p-4 shadow-sm">
                  <Link to={`/species/${s.id}`} className="shrink-0">
                    <SpeciesImage wikiTitle={s.wikiTitle} alt={l(s.commonName)} category={s.category} className="h-24 w-24 rounded-xl sm:h-28 sm:w-28" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <Link to={`/species/${s.id}`} className="font-display text-lg font-bold hover:text-primary">
                          {l(s.commonName)}
                        </Link>
                        <p className="sci truncate text-sm text-muted-foreground">{s.scientificName}</p>
                      </div>
                      <FavoriteButton id={s.id} />
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <ConservationBadge status={s.conservation.status} compact />
                      <span className="text-xs text-muted-foreground">{t(`categories:categories.${s.category}.name`)}</span>
                    </div>
                    <label className="mt-3 flex cursor-pointer items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={!!note?.seen}
                        onChange={(e) => setNote(s.id, { seen: e.target.checked })}
                        className="h-4 w-4 rounded accent-[hsl(var(--primary))]"
                      />
                      <Binoculars className="h-4 w-4 text-muted-foreground" />
                      {t('favorites.seen')}
                    </label>
                    <textarea
                      value={note?.note ?? ''}
                      onChange={(e) => setNote(s.id, { note: e.target.value })}
                      placeholder={t('favorites.notePlaceholder')}
                      aria-label={t('favorites.notePlaceholder')}
                      rows={2}
                      maxLength={500}
                      className="mt-2 w-full resize-y rounded-xl border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <section className="mt-16" aria-labelledby="recent-h">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 id="recent-h" className="flex items-center gap-2 font-display text-2xl font-bold">
              <History className="h-5 w-5 text-primary" /> {t('favorites.recentTitle')}
            </h2>
            {recents.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearRecent}>
                <Trash2 /> {t('favorites.clearRecent')}
              </Button>
            )}
          </div>
          {recents.length === 0 ? (
            <p className="text-sm text-muted-foreground">{t('favorites.recentEmpty')}</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {recents.map((s, i) => (
                <SpeciesCard key={s.id} species={s} index={i} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
