'use client';

import { useLocale } from './LocaleContext';
import enUS from './locales/en-US.json';
import ptBR from './locales/pt-BR.json';

const translations = {
  'en-US': enUS,
  'pt-BR': ptBR,
};

export function useTranslation() {
  const { locale } = useLocale();

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[locale];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t, locale };
}
