/* eslint-disable @next/next/no-img-element */
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faMagnifyingGlass,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Fragment, useEffect, useRef, useTransition } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import useOutsideClick from '../hooks/useOutsideClick';
import 'magnific-popup/dist/magnific-popup.css';
import { getCookie, setCookie } from 'cookies-next';

const Header = () => {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const { width } = useWindowSize();
  const [, startTransition] = useTransition();
  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      router.push(pathname.replace(locale, newLocale));
    });
  };

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef);
  useEffect(() => {
    if (width < 500) {
      var enButton = document.getElementById('en-button');
      var cnButton = document.getElementById('cn-button');
      var thButton = document.getElementById('th-button');
      if (enButton) {
        enButton.classList.remove('en-button-active');
      }
      if (cnButton) {
        cnButton.classList.remove('cn-button-active');
      }
      if (thButton) {
        thButton.classList.remove('th-button-active');
      }
    }
  }, [width]);

  useEffect(() => {
    // Load Jquery
    if (typeof document !== 'undefined') {
      window.jQuery = window.$ = require('jquery');
      require('magnific-popup/dist/jquery.magnific-popup');
      if (typeof getCookie('acceptCookies') == 'undefined') {
        // window.$('body').find('.cookei-popup-link').trigger('click');
        var bg = document.getElementById('mfp-bg');
        var wrapper = document.getElementById('mfp-wrap');
        wrapper !== null ? (wrapper.style.display = 'unset') : null;
        bg !== null ? (bg.style.display = 'unset') : null;
        window.$('.cookei-popup-link').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#name',
        });
      }
      if (
        typeof getCookie('acceptCookies') !== 'undefined' &&
        typeof getCookie('acceptNewsletter') == 'undefined'
      ) {
        // window.$('body').find('.newsletter-popup-link').trigger('click');
        var bgNewsletter = document.getElementById('mfp-bg-newletter');
        var wrapperNewsletter = document.getElementById('mfp-wrap-newletter');
        wrapperNewsletter !== null
          ? ((wrapperNewsletter.style.display = 'flex'),
            (wrapperNewsletter.style.alignItems = 'center'))
          : null;
        bgNewsletter !== null ? (bgNewsletter.style.display = 'unset') : null;
        window.$('.newsletter-popup-link').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#name',
        });
      }
    }
  }, []);
  return (
    <Fragment>
      <div
        id="mfp-bg"
        className="mfp-bg mfp-ready"
        style={{ display: 'none' }}
      ></div>
      <div
        id="mfp-wrap"
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: 'hidden auto', display: 'none' }}
      >
        <div className="mfp-container mfp-inline-holder">
          <div className="mfp-content">
            <div
              id="cookei-popup"
              className="cookei-popup mx-auto max-w-[550px] relative"
            >
              <div className="bg-primary-900 rounded-4xl py-6 px-5 md:px-8">
                <div className="text-center text-white">
                  <div className="-mt-6 -ml-8">
                    <img
                      src="/assets/images/cookie-img.png"
                      alt=""
                      className="block"
                    />
                  </div>

                  <h2 className="text-2x1 md:text-3x1 text-white mb-5">
                    {t('ourCookiePolicy')}
                  </h2>
                  <p className="mb-8">{t('lorem')}</p>
                  <Link
                    id="close-cookies"
                    data-testid="close-cookies"
                    href={''}
                    onClick={() => {
                      window.$.magnificPopup.close();
                      var bg = document.getElementById('mfp-bg');
                      var wrapper = document.getElementById('mfp-wrap');
                      wrapper !== null
                        ? (wrapper.style.display = 'none')
                        : null;
                      bg !== null ? (bg.style.display = 'none') : null;
                      setCookie('acceptCookies', true);
                    }}
                    className="max-w-full btn bg-white text-dark-900 mb-5 hover:bg-dark-900 hover:text-white"
                  >
                    {t('agree')}
                  </Link>
                  <p className="text-md mb-0">{t('notSeeAnymore')}</p>
                </div>
              </div>
              <button
                title="Close (Esc)"
                type="button"
                name="x"
                className="mfp-close"
                onClick={() => {
                  window.$.magnificPopup.close();
                  var bg = document.getElementById('mfp-bg');
                  var wrapper = document.getElementById('mfp-wrap');
                  wrapper !== null ? (wrapper.style.display = 'none') : null;
                  bg !== null ? (bg.style.display = 'none') : null;
                  setCookie('acceptCookies', true);
                }}
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="mfp-bg-newletter"
        className="mfp-bg mfp-ready"
        style={{ display: 'none' }}
      ></div>
      <div
        id="mfp-wrap-newletter"
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: 'hidden auto', display: 'none' }}
      >
        <div id="newsletter-popup" className="mx-auto max-w-[850px] relative ">
          <div className="bg-white rounded-2xl relative overflow-hidden">
            <img
              src="/assets/images/newsletter-shape.svg"
              alt=""
              className="block absolute top-0 left-0 max-w-[200px] md:max-w-full"
            />
            <div className="flex flex-wrap items-center">
              <div className="pt-10 md:py-6 px-10 sm:px-16 w-full sm:w-1/2 relative z-1 text-center sm:text-left">
                <h2 className="text-2xl md:text-3xl mb-2">
                  {t('ourNewsLetter')}
                </h2>
                <p className="mb-6 text-dark-800">{t('newsLetterParagraph')}</p>
                <form className="relative">
                  <input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    className="form-control bg-gray-400 border border-primary-800 w-full rounded-5xl py-3 pl-6 pr-10"
                  />
                  <button
                    data-testid="submit-newsletter"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      window.$.magnificPopup.close();
                      var bgNewsletter =
                        document.getElementById('mfp-bg-newletter');
                      var wrapperNewsletter =
                        document.getElementById('mfp-wrap-newletter');
                      wrapperNewsletter !== null
                        ? (wrapperNewsletter.style.display = 'none')
                        : null;
                      bgNewsletter !== null
                        ? (bgNewsletter.style.display = 'none')
                        : null;
                      setCookie('acceptNewsletter', true);
                    }}
                    className="btn btn-primary absolute top-2 right-2 w-[35px] h-[35px] p-0 max-w-full min-w-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M13.4095 1.3375C13.4095 0.923287 13.0737 0.587501 12.6595 0.5875L5.90948 0.587501C5.49526 0.587501 5.15948 0.923287 5.15948 1.3375C5.15948 1.75171 5.49526 2.0875 5.90948 2.0875H11.9095V8.0875C11.9095 8.50171 12.2453 8.8375 12.6595 8.8375C13.0737 8.8375 13.4095 8.50171 13.4095 8.0875L13.4095 1.3375ZM1.67877 13.3789L13.1898 1.86783L12.1291 0.807171L0.618107 12.3182L1.67877 13.3789Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
              <div className="w-full sm:w-1/2">
                <img
                  src="/assets/images/newsletter-romantic-getaway-bro.svg"
                  alt=""
                  className="block"
                />
              </div>
            </div>
          </div>
          <button
            title="Close (Esc)"
            type="button"
            name="x"
            className="mfp-close"
            onClick={(e) => {
              e.preventDefault();
              window.$.magnificPopup.close();
              var bgNewsletter = document.getElementById('mfp-bg-newletter');
              var wrapperNewsletter =
                document.getElementById('mfp-wrap-newletter');
              wrapperNewsletter !== null
                ? (wrapperNewsletter.style.display = 'none')
                : null;
              bgNewsletter !== null
                ? (bgNewsletter.style.display = 'none')
                : null;
              setCookie('acceptNewsletter', true);
            }}
          >
            x
          </button>
        </div>
      </div>
      <div
        className="search-popup transition-all fixed -top-full left-0 w-full h-full bg-black/80 z-50 flex items-center"
        id="search-overlay"
      >
        <Link
          href={''}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center"
          onClick={() => {
            document.body.classList.toggle('search-active');
            var searchOverlay = document.getElementById('search-overlay');
            searchOverlay ? searchOverlay.classList.remove('open') : null;
          }}
        >
          <img alt="" src="/assets/images/close.svg" />
        </Link>
        <div className="container text-center">
          <form>
            <div className="border-b border-white relative pr-[80px]">
              <input
                type="text"
                placeholder={t('searchHere')}
                className="bg-transparent px-0 py-3 md:py-5 text-white text-left w-full text-md md:text-25"
              />
              <button className="bg-primary-900 absolute top-0 right-0 w-12 h-10 md:w-[75px] md:h-[60px] rounded-sm text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <header className="header relative z-20" id="header">
        <div className="overlay lg:hidden"></div>
        <div className="bg-primary-800 text-dark-900 text-sm font-medium py-2 header-first">
          <div className="container flex justify-between items-center">
            <div className="flex items-center gap-5 md:gap-12 header-left">
              <div className="flex items-center gap-5 md:gap-4">
                <label className="block sm: block" id="followUs">
                  {t('followUs')}
                </label>
                <ul className="flex items-center gap-4">
                  <li>
                    <a href="#" className="hover:text-primary-900">
                      <FontAwesomeIcon id="facebook" icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-900">
                      <FontAwesomeIcon id="instagram" icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-900">
                      <FontAwesomeIcon id="youtube" icon={faYoutube} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <a
                  href="tel: +123456789895"
                  className="flex items-center gap-4 hover:text-primary-900"
                >
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="hidden md:block">+66 870 62 4648</span>
                </a>
              </div>
            </div>
            <div>
              <ul className="flex items-center justify-between header-right">
                <div className="dropdown">
                  <button
                    ref={wrapperRef}
                    className="language"
                    id="language"
                    onClick={() => {
                      var enButton = document.getElementById('en-button');
                      var cnButton = document.getElementById('cn-button');
                      var thButton = document.getElementById('th-button');
                      if (enButton) {
                        enButton.classList.toggle('en-button-active');
                      }
                      if (cnButton) {
                        cnButton.classList.toggle('cn-button-active');
                      }
                      if (thButton) {
                        thButton.classList.toggle('th-button-active');
                      }
                    }}
                  >
                    <span className="lang-icon">
                      <img
                        src="/assets/images/language.png"
                        width="24"
                        height="24"
                        className="bg-slate-950"
                        alt=""
                      />
                    </span>
                    <span className="lang-name" id="dropdown-item">
                      {t(locale)}
                    </span>
                    <span className="lang-carrot">
                      <img
                        src="/assets/images/carrot.png"
                        width="16"
                        height="16"
                        alt=""
                      />
                    </span>
                  </button>
                  <div className="dropdown-content" id="dropdown-content">
                    <button
                      onClick={() => switchLocale('en')}
                      type="button"
                      id="en-button"
                      className="en-button"
                    >
                      {t('en')}
                    </button>
                    <button
                      onClick={() => switchLocale('cn')}
                      type="button"
                      id="cn-button"
                      className="cn-button"
                    >
                      {t('cn')}
                    </button>
                    <button
                      onClick={() => switchLocale('th')}
                      type="button"
                      id="th-button"
                      className="th-button"
                    >
                      {t('th')}
                    </button>
                  </div>
                </div>
                <li>
                  <a
                    href="/login"
                    className="hover:text-primary-900 font-semibold"
                  >
                    {t('login')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex items-center justify-between">
          <div className="logo">
            <Link href={'/'} className="max-w-[150px] sm: max-w-auto block">
              <img src="/assets/images/logo-dark.svg" alt="" />
            </Link>
          </div>
          <div className="flex items-center justify-end gap-5 lg:gap-10">
            <div className="main-menu lg:block">
              <button
                type="button"
                className="absolute top-0 right-0 lg:hidden p1"
                onClick={() => {
                  var header = document.getElementById('header');
                  header ? header.classList.remove('header-open') : null;
                }}
                aria-expanded="false"
              >
                <img src="/assets/images/close-dark.svg" alt="" />
              </button>
              <ul className="lg:flex items-center lg:gap-1 text-sm lg:text-md text-dark-900 font-semibold">
                <li className="menu-item-has-children relative group">
                  <Link href={'/'} className="hover:text-primary-900">
                    {t('home')}
                  </Link>
                  <ul className="sub-menu-list hidden lg:block text-lg text-dark-800 lg:absolute lg:top-[calc(100%+7px)] lg:left-0 lg:border lg:border-gray-100 lg:w-[200px] lg:bg-white lg:p-5 lg:rounded-xl lg:shadow-box lg:transition-all lg:translate-y-4 lg:invisible lg:opacity-0 lg:group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                    <li className="active">
                      <Link href={'/'}>{t('homeV1')}</Link>
                    </li>
                    <li>
                      <Link href={'/'}>{t('homeV2')}</Link>
                    </li>
                    <li>
                      <Link href={'/'}>{t('homeV3')}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href={'/about'} className="hover:text-primary-900">
                    {t('about')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/destination'}
                    className="hover:text-primary-900"
                  >
                    {t('destination')}
                  </Link>
                </li>
                <li>
                  <Link
                    data-testid="headerTourLink"
                    href={'/tour'}
                    className="hover:text-primary-900"
                  >
                    {t('tour')}
                  </Link>
                </li>
                <li>
                  <Link href={'/blog'} className="hover:text-primary-900">
                    {t('blog')}
                  </Link>
                </li>
                <li>
                  <Link href={'/hotel'} className="hover:text-primary-900">
                    {t('hotel')}
                  </Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href={''} className="hover:text-primary-900">
                    {t('pages')}
                  </Link>
                  <div className="mega-menu hidden lg:absolute lg:top[110px] lg:left-0 bg-white w-full pt-3">
                    <div className="container">
                      <div className="lg:flex lg:border-t lg:border-primary-800 lg:py-8">
                        <div className="w-full lg:2-2/3 lg:grid lg:grid-cols-3">
                          <div>
                            <h4 className="text-lg font-bold mb-3">
                              {t('tourPage')}
                            </h4>
                            <ul className="text-lg text-dark-800">
                              <li>
                                <Link href={''}>{t('tourList')}</Link>
                              </li>
                              <li>
                                <Link href={''}>{t('tourGrid')}</Link>
                              </li>
                              <li>
                                <Link href={''}>{t('tourDetails')}</Link>
                              </li>
                              <li>
                                <Link href={''}>{t('tourDetails2')}</Link>
                              </li>
                              <li>
                                <Link href={''}>{t('tourDetails3')}</Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold mb-3">
                              {t('bookingPage')}
                            </h4>
                            <ul className="text-lg text-dark-800">
                              <li>
                                <Link href={''}>{t('hotel')}</Link>
                              </li>
                              <li>
                                <Link href={''}>{t('portfolio')}</Link>
                              </li>
                              <li>
                                <Link href={''}>{t('tours')}</Link>
                              </li>
                              <li>
                                <Link href={''}>{t('gallery')}</Link>
                              </li>
                              <li>
                                <Link href={''}>{t('testimonial')}</Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold mb-3">
                              {t('otherPages')}
                            </h4>
                            <ul className="text-lg text-dark-800">
                              <li>
                                <Link href={''}>{t('login')}</Link>
                              </li>
                              <li>
                                <Link href={''}>{t('signIn')}</Link>
                              </li>
                              <li>
                                <Link href={''}>{t('404Error')}</Link>
                              </li>
                              <li>
                                <Link href={''}>{t('faqs')}</Link>
                              </li>
                              <li>
                                <Link href={''}>{t('siteMap')}</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full hidden lg:block max-w-[300px] xl:max-w-[400px] shrink-0">
                          <div className="py-10 px-5 lg:px-8 relative rounded-5xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full">
                              <img
                                src="/assets/images/summer-escaps-img.png"
                                alt=""
                                className="block w-full h-full object-cover"
                              />
                            </div>
                            <div className="relative max-w-[200px]">
                              <h4 className="mb-3 text-2x1 leading-[30px] lg:text-[28px]">
                                {t('summerEscaps')}
                              </h4>
                              <p className="text-dark-900 text-md mb-5">
                                {t('planNext')}
                              </p>
                              <Link
                                href={''}
                                className="btn btn-light btn-md shadow-btn mx-0"
                              >
                                {t('viewDeals')}
                                <FontAwesomeIcon
                                  icon={faArrowRight}
                                  className="ml-3"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href={'/contact'} className="hover:text-primary-900">
                    {t('contact')}
                  </Link>
                </li>
                <li className="mobile-language">
                  <div className="mobile-dropdown">
                    <button
                      className="mobile-language"
                      id="mobile-language"
                      ref={wrapperRef}
                      onClick={() => {
                        var enButton =
                          document.getElementById('mobile-en-button');
                        var cnButton =
                          document.getElementById('mobile-cn-button');
                        var thButton =
                          document.getElementById('mobile-th-button');
                        if (enButton) {
                          enButton.classList.toggle('en-button-active');
                        }
                        if (cnButton) {
                          cnButton.classList.toggle('cn-button-active');
                        }
                        if (thButton) {
                          thButton.classList.toggle('th-button-active');
                        }
                      }}
                    >
                      <span className="lang-icon">
                        <img
                          src="/assets/images/language.png"
                          width="24"
                          height="24"
                          className="bg-slate-950"
                          alt=""
                        />
                      </span>
                      <span className="lang-name" id="dropdown-item">
                        {t(locale)}
                      </span>
                      <span className="lang-carrot">
                        <img
                          src="/assets/images/carrot.png"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </span>
                    </button>
                    <div className="dropdown-content" id="dropdown-content">
                      <button
                        onClick={() => switchLocale('en')}
                        type="button"
                        id="mobile-en-button"
                        className="en-button"
                      >
                        {t('en')}
                      </button>
                      <button
                        onClick={() => switchLocale('cn')}
                        type="button"
                        id="mobile-cn-button"
                        className="cn-button"
                      >
                        {t('cn')}
                      </button>
                      <button
                        onClick={() => switchLocale('th')}
                        type="button"
                        id="mobile-th-button"
                        className="th-button"
                      >
                        {t('th')}
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <div className="block lg:hidden">
                <button
                  type="button"
                  onClick={() => {
                    var header = document.getElementById('header');
                    header ? header.classList.toggle('header-open') : null;
                  }}
                >
                  <img src="/assets/images/menu-toggle-icon.svg" alt="" />
                </button>
              </div>
              <div className="search-icon">
                <Link
                  href={''}
                  className="bg-primary-900 rounded-full w-[40px] h-[40px] flex items-center justify-center text-white text-sm hover:bg-dark-900"
                  onClick={() => {
                    document.body.classList.toggle('search-active');
                    var searchOverlay =
                      document.getElementById('search-overlay');
                    searchOverlay ? searchOverlay.classList.add('open') : null;
                  }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
