import { Roboto_Condensed } from 'next/font/google';
import './globals.css';
import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { config } from '@fortawesome/fontawesome-svg-core';
import Header from '@/components/Share/Header';
config.autoAddCss = false;

const roboto = Roboto_Condensed({ subsets: ['latin'] });

//@ts-ignore
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head></head>
//       <body className={roboto.className}>{children}</body>
//     </html>
//   );
// }
