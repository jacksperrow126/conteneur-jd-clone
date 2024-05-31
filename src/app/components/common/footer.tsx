import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Common');
  return (
    <footer>
      <div className="w-full bg-gray-200">
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
        <div className="md:p-12 p-2">
          <div className=" mt-4 flex md:flex-row flex-col">
            <div className="flex-1 m-4">
              <h1 className=" text-[30px]">Company name</h1>
              <p className="text-white">{t('Slogan')}</p>
              <p className="text-gray-100">{t('Slogan')}</p>
              <p className="text-gray-100">{t('Slogan')}</p>
              <p className="text-gray-100">{t('Slogan')}</p>
            </div>
            <div className="flex-1 m-4">
              <p className="text-white my-4">{t('Slogan')}</p>
              <p className="text-gray-100 my-2">{t('Slogan')}</p>
              <p className="text-gray-100 my-2 py-2 border-t-[2px] border-gray-100">{t('Slogan')}</p>
            </div>
            <div className="flex-1 m-4">
              <p className="text-white my-4">{t('Slogan')}</p>
              <p className="text-gray-100 my-2">{t('Slogan')}</p>
              <p className="text-gray-100 my-2">{t('Slogan')}</p>
              <p className="text-gray-100 my-2">{t('Slogan')}</p>
              <p className="text-gray-100 my-2">{t('Slogan')}</p>
              <p className="text-gray-100 my-2">{t('Slogan')}</p>
            </div>
          </div>
          <div className="text-center p-4 border-t-[2px] border-gray-100">
            <p className="text-gray-100">{t('Slogan')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
