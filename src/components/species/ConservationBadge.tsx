import { useTranslation } from 'react-i18next';
import { TrendingDown, TrendingUp, Minus, HelpCircle } from 'lucide-react';
import type { IUCNStatus, PopulationTrend } from '@/types';
import { STATUS_BADGE, STATUS_ORDER, STATUS_COLOR } from '@/utils/status';
import { Tip } from '@/components/ui/tooltip';
import { cn } from '@/utils/cn';

export function ConservationBadge({ status, compact, className }: { status: IUCNStatus; compact?: boolean; className?: string }) {
  const { t } = useTranslation('conservation');
  return (
    <Tip label={`${t(`status.${status}.name`)} — ${t(`status.${status}.description`)}`}>
      <span
        tabIndex={0}
        className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold shadow-sm', STATUS_BADGE[status], className)}
      >
        <span className="font-mono tracking-wide">{status}</span>
        {!compact && <span className="font-semibold">{t(`status.${status}.name`)}</span>}
      </span>
    </Tip>
  );
}

const TREND_ICON = { increasing: TrendingUp, decreasing: TrendingDown, stable: Minus, unknown: HelpCircle };
const TREND_CLASS = {
  increasing: 'text-emerald-600 dark:text-emerald-400',
  decreasing: 'text-orange-600 dark:text-orange-400',
  stable: 'text-sky-600 dark:text-sky-400',
  unknown: 'text-muted-foreground',
};

export function TrendIndicator({ trend }: { trend: PopulationTrend }) {
  const { t } = useTranslation('conservation');
  const I = TREND_ICON[trend];
  return (
    <span className={cn('inline-flex items-center gap-1.5 font-semibold', TREND_CLASS[trend])}>
      <I className="h-4 w-4" />
      {t(`trend.${trend}`)}
    </span>
  );
}

/** The classic IUCN scale with the current category highlighted. */
export function StatusScale({ status }: { status: IUCNStatus }) {
  const { t } = useTranslation('conservation');
  const scale: IUCNStatus[] = ['LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'EX'];
  const outside = !scale.includes(status);
  return (
    <div>
      <div className="flex items-center gap-1" role="img" aria-label={t(`status.${status}.name`)}>
        {scale.map((s) => {
          const active = s === status;
          return (
            <Tip key={s} label={t(`status.${s}.name`)}>
              <div
                className={cn(
                  'flex h-9 flex-1 items-center justify-center rounded-lg text-[11px] font-bold transition-all',
                  active ? 'scale-110 shadow-lg ring-2 ring-foreground/70' : 'opacity-35',
                )}
                style={{ background: STATUS_COLOR[s], color: ['VU', 'NT', 'EN'].includes(s) ? '#000' : '#fff' }}
              >
                {s}
              </div>
            </Tip>
          );
        })}
      </div>
      {outside && (
        <p className="mt-2 text-xs text-muted-foreground">
          {status} — {t(`status.${status}.description`)}
        </p>
      )}
    </div>
  );
}

export { STATUS_ORDER };
