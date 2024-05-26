import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const ContactInfo = () => {
  const t = useTranslations('Contact');
  return (
    <div className="w-full">
      <h1 className="text-[30px] font-bold mb-8">{t('ContactInfo')}</h1>
      <div className="m-4 flex mb-8">
        <div className="w-[50px]">
          <FontAwesomeIcon icon={faLocationDot} className="text-primary mr-4" size="xl" />
        </div>
        <div>
          <p className="font-bold text-[20px]">{t('Address')}</p>
          <p className="text-gray-100"> 1234, Street, City, Country</p>
        </div>
      </div>
      <div className="m-4 flex mb-8">
        <div className="w-[50px]">
          <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-4" size="xl" />
        </div>
        <div>
          <p className="font-bold text-[20px]">{t('Email')}</p>
          <p className="text-gray-100">abc@mail.com</p>
        </div>
      </div>
      <div className="m-4 flex mb-8">
        <div className="w-[50px]">
          <FontAwesomeIcon icon={faPhone} className="text-primary mr-4" size="xl" />
        </div>
        <div>
          <p className="font-bold text-[20px]">{t('Phone')}</p>
          <p className="text-gray-100">0000</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
