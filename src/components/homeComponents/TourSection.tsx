/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function TourSection() {
  const t = useTranslations('TourSection');
  return (
    <section>
      <div className="container">
        <div className="text-center mb-8 md:mb-14">
          <h2>{t('topDestination')}</h2>
          <p id="subtitle" className="max-w-[590px] mx-auto">
            {t('lorem')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          <div
            id="firstTour"
            className="category-box overflow-hidden group rounded-1xl relative"
          >
            <img
              src="/assets/images/categories-img-1.jpg"
              alt=""
              className="transition-all group-hover:scale-105"
            />
            <div className="categories-detail">
              <Link href={`/destination-details`}>
                <h4>{t('southAfrica')}</h4>
                <div className="tours-btn">{t('3Tours')}</div>
              </Link>
            </div>
          </div>
          <div
            id="secondTour"
            className="category-box overflow-hidden group rounded-1xl relative"
          >
            <img
              src="/assets/images/categories-img-2.jpg"
              alt=""
              className="transition-all group-hover:scale-105"
            />
            <div className="categories-detail">
              <Link href={`/destination-details`}>
                <h4>{t('asia')}</h4>
                <div className="tours-btn">{t('5Tours')}</div>
              </Link>
            </div>
          </div>
          <div
            id="thirdTour"
            className="category-box overflow-hidden group rounded-1xl relative"
          >
            <img
              src="/assets/images/categories-img-3.jpg"
              alt=""
              className="transition-all group-hover:scale-105"
            />
            <div className="categories-detail">
              <Link href={`/destination-details`}>
                <h4>{t('italy')}</h4>
                <div className="tours-btn">{t('2Tours')}</div>
              </Link>
            </div>
          </div>
          <div
            id="forthTour"
            className="category-box overflow-hidden group rounded-1xl relative"
          >
            <img
              src="/assets/images/categories-img-4.jpg"
              alt=""
              className="transition-all group-hover:scale-105"
            />
            <div className="categories-detail">
              <Link href={`/destination-details`}>
                <h4>{t('thailand')}</h4>
                <div className="tours-btn">{t('8Tours')}</div>
              </Link>
            </div>
          </div>
          <div
            id="fifthTour"
            className="category-box overflow-hidden group rounded-1xl relative"
          >
            <img
              src="/assets/images/categories-img-5.jpg"
              alt=""
              className="transition-all group-hover:scale-105"
            />
            <div className="categories-detail">
              <Link href={`/destination-details`}>
                <h4>{t('egypt')}</h4>
                <div className="tours-btn">{t('3Tours')}</div>
              </Link>
            </div>
          </div>
          <div
            id="sixthTour"
            className="category-box overflow-hidden group rounded-1xl relative"
          >
            <img
              src="/assets/images/categories-img-6.jpg"
              alt=""
              className="transition-all group-hover:scale-105"
            />
            <div className="categories-detail">
              <Link href={`/destination-details`}>
                <h4>{t('venice&Rome')}</h4>
                <div className="tours-btn">{t('6Tours')}</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Link
            href={'/destination-details'}
            className="btn btn-primary mx-auto"
          >
            {t('exploreAll')}
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
