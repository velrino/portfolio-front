'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLocale('pt-BR')}
        className={`px-3 py-1 rounded ${
          locale === 'pt-BR'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLocale('en-US')}
        className={`px-3 py-1 rounded ${
          locale === 'en-US'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
    </div>
  );
}
