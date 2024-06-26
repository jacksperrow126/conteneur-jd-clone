import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Footer = () => {
  const t = useTranslations('LandingPage');
  return (
    <footer>
      <div className="w-full bg-gray-200">
        <div></div>
        <div className="rotate-180 -scale-x-100">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 2000 120"
            preserveAspectRatio="none"
          >
            <polygon fill="#FFF" points="-11,2 693,112 2019,6 2019,135 -11,135 "></polygon>
          </svg>
        </div>
        <div className="md:p-12 p-2 leading-10">
          <div className=" mt-4 flex md:flex-row flex-col">
            <div className="flex-1 m-4 leading-10">
              <Image
                width={140}
                height={90}
                src="https://conteneurjd.com/wp-content/uploads/2023/06/LOGOMODIFIE-05.svg"
                alt=""
              />
              <p className="text-white">{t('Footer_1')}</p>
              <p className="text-gray-80">abc@mail.com</p>
              <p className="text-gray-80">(514) 269-7537</p>
              <p className="text-gray-80">{t('Footer_2')}</p>
            </div>
            <div className="flex-1 m-4">
              <p className="text-white my-4">{t('Footer_3')}</p>
              <p className="text-gray-80 my-2">{t('Footer_4')}</p>
              <p className="text-gray-80 my-2 py-2 border-t-[2px] border-gray-80">{t('Footer_5')}</p>
            </div>
            <div className="flex-1 m-4 md:mx-8">
              <p className="text-white my-4">{t('Footer_6')}</p>
              <p className="text-gray-80 my-2">{t('Service_1')}</p>
              <p className="text-gray-80 my-2">{t('Service_2')}</p>
              <p className="text-gray-80 my-2">{t('Service_3')}</p>
              <p className="text-gray-80 my-2">{t('Service_4')}</p>
              <p className="text-gray-80 my-2">{t('Service_5')}</p>
            </div>
          </div>
          <div className="text-center p-4 border-t-[2px] border-gray-100">
            <p className="text-gray-80">{t('Footer_7')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
