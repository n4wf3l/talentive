import type { Language } from '../i18n/LanguageContext';

export const SITE_URL = 'https://talentivegroup.com';
export const SITE_NAME = 'Talentive';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.png`;
export const DEFAULT_LOGO = `${SITE_URL}/logo.png`;

export const LOCALES: Record<Language, { htmlLang: string; ogLocale: string }> = {
  nl: { htmlLang: 'nl-BE', ogLocale: 'nl_BE' },
  fr: { htmlLang: 'fr-BE', ogLocale: 'fr_BE' },
  en: { htmlLang: 'en', ogLocale: 'en_US' },
};

export function absoluteUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${clean === '/' ? '/' : clean.replace(/\/$/, '')}`;
}
