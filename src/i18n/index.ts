import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import enNavigation from './locales/en/navigation.json';
import enCategories from './locales/en/categories.json';
import enHomepage from './locales/en/homepage.json';
import enSpecies from './locales/en/species.json';
import enConservation from './locales/en/conservation.json';

import bnCommon from './locales/bn/common.json';
import bnNavigation from './locales/bn/navigation.json';
import bnCategories from './locales/bn/categories.json';
import bnHomepage from './locales/bn/homepage.json';
import bnSpecies from './locales/bn/species.json';
import bnConservation from './locales/bn/conservation.json';

import type { Lang } from '@/types';

export const LANG_STORAGE_KEY = 'natureindex-lang';
export const SUPPORTED_LANGS: Lang[] = ['en', 'bn'];
export const LOCALES: Record<Lang, string> = { en: 'en', bn: 'bn-BD' };

export const resources = {
  en: {
    common: enCommon,
    navigation: enNavigation,
    categories: enCategories,
    homepage: enHomepage,
    species: enSpecies,
    conservation: enConservation,
  },
  bn: {
    common: bnCommon,
    navigation: bnNavigation,
    categories: bnCategories,
    homepage: bnHomepage,
    species: bnSpecies,
    conservation: bnConservation,
  },
} as const;

function readStoredLang(): Lang {
  try {
    const v = localStorage.getItem(LANG_STORAGE_KEY);
    if (v === 'en' || v === 'bn') return v;
  } catch {
    /* storage unavailable */
  }
  return 'en';
}

function applyDocumentLang(lng: string) {
  const lang: Lang = lng === 'bn' ? 'bn' : 'en';
  document.documentElement.lang = lang;
  document.documentElement.classList.toggle('lang-bn', lang === 'bn');
}

i18n.use(initReactI18next).init({
  resources,
  lng: readStoredLang(),
  fallbackLng: 'en',
  supportedLngs: SUPPORTED_LANGS,
  defaultNS: 'common',
  ns: ['common', 'navigation', 'categories', 'homepage', 'species', 'conservation'],
  interpolation: { escapeValue: false },
  returnNull: false,
  react: { useSuspense: false },
});

applyDocumentLang(i18n.language);

i18n.on('languageChanged', (lng) => {
  applyDocumentLang(lng);
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lng);
  } catch {
    /* ignore */
  }
});

export default i18n;
