'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, LocaleType, DEFAULT_LOCALE } from '@/types/locale';

interface LocaleContextType {
  locale: LocaleType;
  setLocale: (locale: LocaleType) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const isValidLocale = (value: string): value is LocaleType => {
  return Object.values(Locale).includes(value as Locale);
};

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleType>(DEFAULT_LOCALE);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && isValidLocale(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: LocaleType) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}
