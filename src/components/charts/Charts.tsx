import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipProps,
} from 'recharts';
import { useLang } from '@/hooks/useLang';
import { useIsDark } from '@/hooks/useTheme';
import { cn } from '@/utils/cn';

/* Validated chart palette (scripts/validate_palette.js, light & dark). */
export function useChartColors() {
  const dark = useIsDark();
  return dark
    ? { a: '#3a9ad8', b: '#d1792f', single: '#3fa06c', grid: 'rgba(255,255,255,0.08)', axis: '#9aa59d', cursor: 'rgba(255,255,255,0.06)' }
    : { a: '#1f78b0', b: '#d9772b', single: '#2f8a5f', grid: 'rgba(0,0,0,0.07)', axis: '#6b746e', cursor: 'rgba(23,76,56,0.06)' };
}

export function ChartCard({
  title,
  subtitle,
  source,
  badge,
  legend,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  source?: string;
  badge?: ReactNode;
  legend?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const { t } = useTranslation('conservation');
  return (
    <figure className={cn('flex flex-col rounded-2xl border bg-card p-5 shadow-sm sm:p-6', className)}>
      <figcaption className="mb-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold leading-snug">{title}</h3>
          {badge}
        </div>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        {legend && <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">{legend}</div>}
      </figcaption>
      <div className="flex-1">{children}</div>
      {source && (
        <p className="mt-4 border-t pt-3 text-xs text-muted-foreground">
          <span className="font-semibold">{t('dashboard.source')}:</span> {source}
        </p>
      )}
    </figure>
  );
}

export function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-sm" style={{ background: color }} aria-hidden />
      <span className="text-foreground/80">{label}</span>
    </span>
  );
}

/** Localized tooltip used by every chart. */
function ChartTooltip({ active, payload, label, unit, labelFormatter }: TooltipProps<number, string> & { unit?: string; labelFormatter?: (l: string | number) => string }) {
  const { n } = useLang();
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-xl">
      <p className="mb-1 font-semibold">{labelFormatter ? labelFormatter(label as string) : label}</p>
      {payload.map((p) => (
        <p key={p.dataKey as string} className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-sm" style={{ background: (p.payload?.fill as string) || p.color }} />
          <span className="text-muted-foreground">{p.name}</span>
          <span className="ml-auto pl-3 font-semibold tabular-nums">
            {n(p.value as number)}
            {unit}
          </span>
        </p>
      ))}
    </div>
  );
}

/* ---------------- Horizontal bar: one colour per row (status, trend) ---------------- */
export interface Row {
  key: string;
  label: string;
  value: number;
  color?: string;
}

export function HBarChart({ rows, valueName, unit, height }: { rows: Row[]; valueName: string; unit?: string; height?: number }) {
  const c = useChartColors();
  const { n } = useLang();
  const h = height ?? Math.max(180, rows.length * 38 + 30);
  return (
    <div style={{ height: h }} role="img" aria-label={rows.map((r) => `${r.label}: ${n(r.value)}${unit ?? ''}`).join(', ')}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={rows} layout="vertical" margin={{ top: 0, right: 40, bottom: 0, left: 0 }} barCategoryGap={6}>
          <CartesianGrid horizontal={false} stroke={c.grid} />
          <XAxis type="number" allowDecimals={false} tickFormatter={(v) => n(v)} tick={{ fill: c.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis type="category" dataKey="label" width={150} tick={{ fill: c.axis, fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: c.cursor }} content={<ChartTooltip unit={unit} />} />
          <Bar dataKey="value" name={valueName} radius={[0, 4, 4, 0]} maxBarSize={22}>
            {rows.map((r) => (
              <Cell key={r.key} fill={r.color ?? c.single} />
            ))}
            <LabelList dataKey="value" position="right" formatter={(v: number) => `${n(v)}${unit ?? ''}`} style={{ fill: 'currentColor', fontSize: 11, fontWeight: 600 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ---------------- Stacked horizontal bar: two series ---------------- */
export function StackedHBarChart({
  rows,
  aName,
  bName,
  xLabel,
}: {
  rows: { key: string; label: string; a: number; b: number }[];
  aName: string;
  bName: string;
  xLabel: string;
}) {
  const c = useChartColors();
  const { n } = useLang();
  return (
    <div style={{ height: Math.max(220, rows.length * 34 + 50) }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={rows} layout="vertical" margin={{ top: 0, right: 16, bottom: 18, left: 0 }} barCategoryGap={6}>
          <CartesianGrid horizontal={false} stroke={c.grid} />
          <XAxis
            type="number"
            allowDecimals={false}
            tickFormatter={(v) => n(v)}
            tick={{ fill: c.axis, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            label={{ value: xLabel, position: 'insideBottom', offset: -12, fill: c.axis, fontSize: 11 }}
          />
          <YAxis type="category" dataKey="label" width={150} tick={{ fill: c.axis, fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: c.cursor }} content={<ChartTooltip />} />
          <Bar dataKey="a" name={aName} stackId="s" fill={c.b} stroke="hsl(var(--card))" strokeWidth={2} maxBarSize={20} />
          <Bar dataKey="b" name={bName} stackId="s" fill={c.a} stroke="hsl(var(--card))" strokeWidth={2} radius={[0, 4, 4, 0]} maxBarSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ---------------- Single-series line over years ---------------- */
export function YearLineChart({
  data,
  dataKey,
  name,
  yLabel,
  color,
  height = 240,
}: {
  data: { year: number; [k: string]: number | undefined }[];
  dataKey: string;
  name: string;
  yLabel: string;
  color?: string;
  height?: number;
}) {
  const c = useChartColors();
  const { n, d } = useLang();
  const points = data.filter((p) => p[dataKey] !== undefined);
  return (
    <div style={{ height }} role="img" aria-label={`${name}: ${points.map((p) => `${d(p.year)} — ${n(p[dataKey] as number)}`).join(', ')}`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={points} margin={{ top: 16, right: 24, bottom: 4, left: 8 }}>
          <CartesianGrid vertical={false} stroke={c.grid} />
          <XAxis dataKey="year" tickFormatter={(v) => d(v)} tick={{ fill: c.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(v) => n(v)}
            tick={{ fill: c.axis, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={56}
            label={{ value: yLabel, angle: -90, position: 'insideLeft', offset: 0, fill: c.axis, fontSize: 11, style: { textAnchor: 'middle' } }}
          />
          <Tooltip content={<ChartTooltip labelFormatter={(l) => d(l)} />} cursor={{ stroke: c.axis, strokeDasharray: '3 3' }} />
          <Line
            type="monotone"
            dataKey={dataKey}
            name={name}
            stroke={color ?? c.single}
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--card))' }}
            activeDot={{ r: 6 }}
          >
            <LabelList dataKey={dataKey} position="top" formatter={(v: number) => n(v)} style={{ fill: 'currentColor', fontSize: 10, fontWeight: 600 }} />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
