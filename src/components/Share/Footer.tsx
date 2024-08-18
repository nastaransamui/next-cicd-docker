/* eslint-disable @next/next/no-img-element */
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="footer-part relative">
      <div className="container relative z-1">
        <div className="text-center mb-10 md:mb-14 max-w-[590px] mx-auto">
          <h2>{t('signUpLetter')}</h2>
          <p className="mb-5 md:mb-12">{t('saveUp')}</p>
          <form className="flex items-center justify-center bg-white shadow-input rounded-full p-1.5 border border-white hover:border-primary-900">
            <input
              className="text-dark-900 text-md md:text-lg w-full py-3 bg-transparent px-3 outline-none"
              placeholder={t('emailPlaceholder')}
            />
            <button
              type="button"
              className="btn btn-primary w-full max-w-[130px] shrink-0"
            >
              {t('submit')}
            </button>
          </form>
        </div>
        <div className="flex flex-wrap -mx-4 pt-10 border-t border-gray-100">
          <div className="w-full lg:w-1/3 px-3">
            <div className="mb-10 lg:mb-6 text-left lg:max-w-[260px]">
              <div className="mb-3 lg:mb-6">
                <Link href={'/'} className="inline-block">
                  <img src="/assets/images/logo-dark.svg" alt="" />
                </Link>
              </div>
              <p
                data-testid="footer-subtitle"
                className="mb-5 font-normal text-15"
              >
                {t('lorem')}
              </p>
              <ul className="flex items-center justify-start space-x-4 text-md text-primary-900">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-primary-800 hover:bg-primary-900 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.x.com"
                    target="_blank"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-primary-800 hover:bg-primary-900 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-primary-800 hover:bg-primary-900 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-primary-800 hover:bg-primary-900 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-3">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="mb-6">
                <h4 data-testid="quick-links" className="footer-title">
                  {t('quickLinks')}
                </h4>
                <ul className="space-y-2 text-15 text-dark-800">
                  <li>
                    <Link
                      data-testid="footer-about"
                      href={'/about'}
                      className="text-dark-800 hover:text-primary-900"
                    >
                      {t('aboutUs')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-testid="footer-tour"
                      href={'/tour'}
                      className="text-dark-800 hover:text-primary-900"
                    >
                      {t('tour')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-testid="footer-destination"
                      href={'/destination'}
                      className="text-dark-800 hover:text-primary-900"
                    >
                      {t('destination')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-testid="footer-blog"
                      href={'/blog'}
                      className="text-dark-800 hover:text-primary-900"
                    >
                      {t('blog')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-testid="footer-contact"
                      href={'/contact'}
                      className="text-dark-800 hover:text-primary-900"
                    >
                      {t('contact')}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4
                  data-testid="footer-contact-header"
                  className="footer-title"
                >
                  {t('contact')}
                </h4>
                <p
                  data-testid="footer-address"
                  className="pl-7 relative text-15 mb-3"
                >
                  <span className="absolute top-2 left-0">
                    <img src="/assets/images/pin.svg" alt="" />
                  </span>
                  {t('address')}
                </p>
                <p
                  data-testid="footer-tell"
                  className="pl-7 relative text-15 mb-3"
                >
                  <span className="absolute top-2 left-0">
                    <img src="/assets/images/call-sharp.svg" alt="" />
                  </span>
                  <a
                    href="tel:(+66) 870624648"
                    className="hover:text-primary-900"
                  >
                    (+66) 870624648
                  </a>
                </p>
                <p
                  data-testid="footer-email"
                  className="pl-7 relative text-15 mb-3"
                >
                  <span className="absolute top-2 left-0">
                    <img src="/assets/images/mail-unread.svg" alt="" />
                  </span>
                  <a
                    href="mailto:mjcode2020@gmail.com"
                    className="hover:tex-primary-900"
                  >
                    mjcode2020@gmail.com
                  </a>
                </p>
              </div>
              <div className="mb-6">
                <h4
                  data-testid="footer-gallery-header"
                  className="footer-title"
                >
                  {t('gallery')}
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  <div className="overflow-hidden relative group rounded-xl before:block before:pt-full">
                    <Link
                      href={'gallery'}
                      className="absolute top-0 left-0 h-full w-full block"
                    >
                      <img
                        src="/assets/images/footer-gallery-img1.jpg"
                        alt=""
                        className="transition-all group-hover:scale-105 w-full h-full object-cover duration-300"
                      />
                    </Link>
                  </div>
                  <div className="overflow-hidden relative group rounded-xl before:block before:pt-full">
                    <Link
                      href={'gallery'}
                      className="absolute top-0 left-0 h-full w-full block"
                    >
                      <img
                        src="/assets/images/footer-gallery-img2.jpg"
                        alt=""
                        className="transition-all group-hover:scale-105 w-full h-full object-cover duration-300"
                      />
                    </Link>
                  </div>
                  <div className="overflow-hidden relative group rounded-xl before:block before:pt-full">
                    <Link
                      href={'gallery'}
                      className="absolute top-0 left-0 h-full w-full block"
                    >
                      <img
                        src="/assets/images/footer-gallery-img3.jpg"
                        alt=""
                        className="transition-all group-hover:scale-105 w-full h-full object-cover duration-300"
                      />
                    </Link>
                  </div>
                  <div className="overflow-hidden relative group rounded-xl before:block before:pt-full">
                    <Link
                      href={'gallery'}
                      className="absolute top-0 left-0 h-full w-full block"
                    >
                      <img
                        src="/assets/images/footer-gallery-img4.jpg"
                        alt=""
                        className="transition-all group-hover:scale-105 w-full h-full object-cover duration-300"
                      />
                    </Link>
                  </div>
                  <div className="overflow-hidden relative group rounded-xl before:block before:pt-full">
                    <Link
                      href={'gallery'}
                      className="absolute top-0 left-0 h-full w-full block"
                    >
                      <img
                        src="/assets/images/footer-gallery-img5.jpg"
                        alt=""
                        className="transition-all group-hover:scale-105 w-full h-full object-cover duration-300"
                      />
                    </Link>
                  </div>
                  <div className="overflow-hidden relative group rounded-xl before:block before:pt-full">
                    <Link
                      href={'gallery'}
                      className="absolute top-0 left-0 h-full w-full block"
                    >
                      <img
                        src="/assets/images/footer-gallery-img6.jpg"
                        alt=""
                        className="transition-all group-hover:scale-105 w-full h-full object-cover duration-300"
                      />
                    </Link>
                  </div>
                  <div className="overflow-hidden relative group rounded-xl before:block before:pt-full">
                    <Link
                      href={'gallery'}
                      className="absolute top-0 left-0 h-full w-full block"
                    >
                      <img
                        src="/assets/images/footer-gallery-img7.jpg"
                        alt=""
                        className="transition-all group-hover:scale-105 w-full h-full object-cover duration-300"
                      />
                    </Link>
                  </div>
                  <div className="overflow-hidden relative group rounded-xl before:block before:pt-full">
                    <Link
                      href={'gallery'}
                      className="absolute top-0 left-0 h-full w-full block"
                    >
                      <img
                        src="/assets/images/footer-gallery-img8.jpg"
                        alt=""
                        className="transition-all group-hover:scale-105 w-full h-full object-cover duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 py-4 text-center md:text-left md:flex items-center justify-between"></div>
      </div>
      <div className="footer-bg absolute bottom-0 left-0 w-full">
        <img src="/assets/images/footer-bg-img.jpg" alt="" />
      </div>
    </footer>
  );
}
