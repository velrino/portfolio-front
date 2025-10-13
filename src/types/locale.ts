export enum Locale {
  PT_BR = 'pt-BR',
  EN_US = 'en-US',
}

export type LocaleType = Locale.PT_BR | Locale.EN_US;

export const DEFAULT_LOCALE = Locale.PT_BR;

export const LOCALE_LABELS: Record<Locale, string> = {
  [Locale.PT_BR]: 'Português (BR)',
  [Locale.EN_US]: 'English (US)',
};
