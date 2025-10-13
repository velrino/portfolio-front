'use client';

import { useLocale } from './LocaleContext';
import { Locale } from '@/types/locale';
import enUS from './locales/en-US.json';
import ptBR from './locales/pt-BR.json';

const translations: Record<Locale, typeof enUS> = {
  [Locale.EN_US]: enUS,
  [Locale.PT_BR]: ptBR,
};

export function useTranslation() {
  const { locale } = useLocale();

  const t = (key: string): string => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[locale];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t, locale };
}
