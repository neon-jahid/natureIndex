import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { Lang, LocalizedList, LocalizedText } from '@/types';
import { formatNumber, localizeDigits, formatDate } from '@/utils/format';

/** Current language plus helpers to read bilingual data and format numbers/dates. */
export function useLang() {
  const { i18n } = useTranslation();
  const lang: Lang = i18n.language === 'bn' ? 'bn' : 'en';

  const l = useCallback((v: LocalizedText | undefined | null) => (v ? v[lang] || v.en : ''), [lang]);
  const ll = useCallback((v: LocalizedList | undefined | null) => (v ? (v[lang]?.length ? v[lang] : v.en) : []), [lang]);
  const n = useCallback((v: number, o?: Intl.NumberFormatOptions) => formatNumber(v, lang, o), [lang]);
  const d = useCallback((v: string | number) => localizeDigits(v, lang), [lang]);
  const date = useCallback((v: Date | string | number, o?: Intl.DateTimeFormatOptions) => formatDate(v, lang, o), [lang]);
  const setLang = useCallback((next: Lang) => i18n.changeLanguage(next), [i18n]);

  return { lang, l, ll, n, d, date, setLang };
}
