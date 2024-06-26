import { useTranslations } from 'next-intl';
import React from 'react';

const Form = () => {
  const t = useTranslations('Contact');
  return (
    <div data-aos="fade-right">
      <h1 className="text-[30px] font-bold mb-8">{t('ContactForm')}</h1>
      <form className="grid md:grid-cols-2 grid-cols-1 md:gap-[20px] gap-[5px] text-gray-100">
        <div className="md:mb-8 mb-2">
          <label className="block">
            {t('Name')}
            <span className="text-primary ml-2">*</span>
          </label>

          <input type="text" required className="border-[1px] p-2 w-full border-gray-50" />
        </div>
        <div className="md:mb-8 mb-2">
          <label className="block">
            {t('Phone')}
            <span className="text-primary ml-2">*</span>
          </label>
          <input type="text" required className="border-[1px] p-2 w-full border-gray-50" />
        </div>
        <div className="md:mb-8 mb-2">
          <label className="block">
            {t('Email')}
            <span className="text-primary ml-2">*</span>
          </label>
          <input type="text" required className="border-[1px] p-2 w-full border-gray-50" />
        </div>
        <div className="md:mb-8 mb-2">
          <label className="block">
            {t('Message')}
            <span className="text-primary ml-2">*</span>
          </label>
          <textarea className="border-[1px] p-2 w-full border-gray-50" />
        </div>
        <div></div>
        <div>
          <button className="bg-primary text-white px-4 py-2">{t('Send')}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
