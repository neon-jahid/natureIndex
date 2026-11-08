import type { Lang } from '@/types';
import { LOCALES } from '@/i18n';

const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export function formatNumber(n: number, lang: Lang, opts?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(LOCALES[lang], opts).format(n);
}

export function formatPercent(n: number, lang: Lang, digits = 0): string {
  return new Intl.NumberFormat(LOCALES[lang], { style: 'percent', maximumFractionDigits: digits }).format(n);
}

export function formatDate(d: Date | string | number, lang: Lang, opts: Intl.DateTimeFormatOptions = { dateStyle: 'long' }): string {
  return new Intl.DateTimeFormat(LOCALES[lang], opts).format(new Date(d));
}

/** Convert ASCII digits inside a string to Bengali digits when needed (e.g. years like "2022"). */
export function localizeDigits(value: string | number, lang: Lang): string {
  const s = String(value);
  return lang === 'bn' ? s.replace(/[0-9]/g, (d) => BN_DIGITS[Number(d)]) : s;
}

/** Convert Bengali digits back to ASCII (used to make search input digit-agnostic). */
export function asciiDigits(s: string): string {
  return s.replace(/[০-৯]/g, (d) => String(BN_DIGITS.indexOf(d)));
}
