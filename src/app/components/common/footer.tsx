import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Common');
  return (
    <footer>
      <div className="w-full bg-gray-200">
        <div className="p-12">
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
