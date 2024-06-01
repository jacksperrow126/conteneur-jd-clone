import { useTranslations } from 'next-intl';
import React from 'react';

const Form = () => {
  const t = useTranslations('Contact');
  return (
    <div data-aos="fade-right">
      <h1 className="text-[30px] font-bold mb-8">{t('ContactForm')}</h1>
      <form className="grid md:grid-cols-2 grid-cols-1 gap-[20px] text-gray-100">
        <div className="mb-8">
          <label className="block">{t('Name')}</label>
          <input type="text" required className="border-[1px] p-2 w-full border-gray-100" />
        </div>
        <div className="mb-8">
          <label className="block">{t('Phone')}</label>
          <input type="text" required className="border-[1px] p-2 w-full border-gray-100" />
        </div>
        <div className="mb-8">
          <label className="block">{t('Email')}</label>
          <input type="text" required className="border-[1px] p-2 w-full border-gray-100" />
        </div>
        <div className="mb-8">
          <label className="block">{t('Message')}</label>
          <textarea className="border-[1px] p-2 w-full border-gray-100" />
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
