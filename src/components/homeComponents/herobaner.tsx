import React from 'react'
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function Herobaner() {

  const t = useTranslations('Hero');
  return (
    <section className='main-wrapper'>
      <div className='absolute top-0 left-0 w-full h-full before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[#190D1F] before:opacity-[0.22]'>
        <img src='/assets/images/hero-bg-img.jpg' alt='' className='w-full h-full object-cover' />
      </div>
      <div className='hero-content-slider relative z-1'>
        <div className='container text-center'>
          <h1 className='text-white'>{t('letTravelExplore')}</h1>
          <p className='m-6 md:mb-9 text-white text-md md:text-2xl md:leading-2xl'>{t('discover')}</p>
          <div className='booking-form bg-white rounded-xl md:rounded-7xl px-6 py-3 md:pr-3 md:pl-10 text-left w-full md:flex gap-0 lg:gap-10 xl:gap-20 items-center'>
            <div className='w-full md:px-3 text-dark-900 font-semibold text-lg border-b md:border-0 border-primary-800 mb-7 md:mb-0'>
              <label className='block'>{t('keyword')}</label>
              <input type='text' placeholder={t('typeYourKey')} className='form-control' />
            </div>
            <div className='w-full md:px-3 text-dark-900 font-semibold text-lg border-b md:border-0 border-primary-800 mb-7 md:mb-0'>
              <label className='block'>{t('destination')}</label>
              <select className='form-control'>
                <option>{t('whereTo')}</option>
                <option>{t('whereTo')}</option>
              </select>
            </div>
            <div className='w-full md:px-3 text-dark-900 font-semibold text-lg mb-7 md:mb-0'>
              <label className='block'>{t('checkInCheckOut')}</label>
              <select className='form-control'>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className='f1'>
              <button type='button' className='bg-primary-900 rounded-7xl w-full md:w-[110px] h-[50px] md:h-[77px] flex items-center justify-center text-white text-xl md:text-3xl hover:bg-dark-900'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
