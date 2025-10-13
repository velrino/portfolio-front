'use client';

import { useTranslation } from '@/lib/i18n/useTranslation';
import Link from 'next/link';

export default function CV() {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{t('cv.pageTitle')}</h1>
      <p className="text-gray-600 mb-8">Denis Magalhães - velrino</p>

      <nav className="space-x-4">
        <Link href="/" className="text-blue-600 hover:underline">
          {t('navigation.home')}
        </Link>
        <Link href="/cv" className="text-blue-600 hover:underline">
          {t('navigation.cv')}
        </Link>
      </nav>
    </div>
  );
}
