/* eslint-disable @next/next/no-img-element */
'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  const t = useTranslations('NotFoundPage');
  return (
    <>
      <div className="main-wrapper">
        <section className="hero-section man-h-[220px] md:min-h-[340px] relative grid content-center py-14 md:py-20 lg:py-28">
          <div className="absolute top-0 left-0 w-full h-full before:absolute before:top-0 before:top-0 before:left-0 before:h-full before:w-full before:bg-dark-900/50">
            <img
              src="/assets/images/inner-banner-img.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hero-content-slider relative z-1">
            <div className="container text-center">
              <h1 className="text-white text-30 md:text-4xl leading-normal mb-2 md:mb-0">
                {t('error404')}
              </h1>
              <nav className="w-full rounded-md">
                <ol className="list-reset flex justify-center text-white text-md md:text-lg font-normal">
                  <li>
                    <Link href={'/'} className="text-gray-300 hover:text-white">
                      {t('home')}
                    </Link>
                  </li>
                  <li>
                    <span className="mx-2 text-gray-300">&gt;</span>
                  </li>
                  <li>{t('error404')}</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="flex items-center flex-wrap -mx-3">
              <div className="w-full md:w-3/5 px-3 text-center">
                <img
                  src="/assets/images/404-Journey-img.svg"
                  alt=""
                  className="mx-auto -mt-14 lg:-my-14"
                />
              </div>
              <div className="w-full md:w-2/5 px-3">
                <div className="text-center md:text-left">
                  <h2 className="text-5xl lg:text-[150px] mb-5 lg:leading-[150px]">
                    404
                  </h2>
                  <h3 className="text-xl md:text-25 mb-4">{t('oops')}</h3>
                  <p className="mb-8">{t('pageLooking')}</p>
                  <Link href={'/'} className="btn btn-primary mx-auto md:mx-0">
                    {t('goBackHome')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
