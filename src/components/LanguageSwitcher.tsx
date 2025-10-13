'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { Locale, LOCALE_LABELS } from '@/types/locale';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.values(Locale).map((localeOption) => (
          <DropdownMenuItem
            key={localeOption}
            onClick={() => setLocale(localeOption)}
            className={locale === localeOption ? 'bg-accent' : ''}
          >
            {LOCALE_LABELS[localeOption]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
