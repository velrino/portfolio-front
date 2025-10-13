'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
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
        <DropdownMenuItem
          onClick={() => setLocale('pt-BR')}
          className={locale === 'pt-BR' ? 'bg-accent' : ''}
        >
          Português (BR)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLocale('en-US')}
          className={locale === 'en-US' ? 'bg-accent' : ''}
        >
          English (US)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
