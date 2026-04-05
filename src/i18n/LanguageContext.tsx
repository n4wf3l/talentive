import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Translations } from './types';
import fr from './translations/fr';
import nl from './translations/nl';
import en from './translations/en';

export type Language = 'fr' | 'nl' | 'en';

const translationsMap: Record<Language, Translations> = { fr, nl, en };

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getNestedValue(obj: unknown, path: string): string {
  const result = path.split('.').reduce<unknown>((current, key) => {
    if (current && typeof current === 'object') {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
  return typeof result === 'string' ? result : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('talentive-lang') as Language | null;
    return saved && translationsMap[saved] ? saved : 'nl';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('talentive-lang', lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(translationsMap[language], key);
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
