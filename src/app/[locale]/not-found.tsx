'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  const t = useTranslations('NotFoundPage');
  return (
    <div
      className="flex flex-col justify-center min-h-screen item-center"
      style={{ minHeight: '100vh', alignItems: 'center', minWidth: '100vw' }}
    >
      <div className="">
        <h3>{t('description')}</h3>
        <Link className="text-orange-500" href="/">
          {t('gobackHome')}
        </Link>
      </div>
    </div>
  );
}
