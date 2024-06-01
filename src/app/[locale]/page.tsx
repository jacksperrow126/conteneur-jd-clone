import { useTranslations } from 'next-intl';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '@/app/components/common/breadcrumb';
import '@fortawesome/fontawesome-svg-core/styles.css';
import ContactInfo from '../components/contact/contact-info';
import Form from '../components/contact/form';
config.autoAddCss = false;

export default function Home() {
  const t = useTranslations('LandingPage');

  return (
    <div>
      <div
        className="bg-[url('https://conteneurjd.com/wp-content/uploads/2023/06/slider111-2.jpg')] 
      bg-no-repeat bg-cover bg-center w-full sm:h-[60vw] h-[60vh] max-h-[800px] flex justify-center items-center"
      >
        <div className="w-[60%] h-[60%] min-w-[320px] max-w-[800px] bg-black bg-opacity-60 text-center text-white flex justify-center items-center">
          <div className="md:leading-[60px] xl:leading-[80px] leading-[40px] flex flex-col items-center">
            <p className="md:text-[45px] font-bold text-[27px]" data-aos="fade-right">
              {t('Subtitle')}
            </p>
            <p className="md:text-[89px] font-extrabold text-[50px]" data-aos="fade-up" data-aos-delay="100">
              {t('Title')}
            </p>
            <p
              data-aos="zoom-out"
              data-aos-delay="200"
              className="text-[12px] md:text-[20px] w-[80%] leading-[28px] p-4"
            >
              {t('Description')}
            </p>
            <button
              className="bg-primary rounded-md px-8 font-bold text-[12px] md:text-[20px] h-[57px] flex items-center m-auto"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              {t('Button')}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-[50px] font-bold m-6">{t('Key_1')}</h1>
      </div>

      <div className="flex justify-center w-full">
        <div className="">
          {/* Section 1 */}

          <section className="md:px-24 xl:px-32 py-12 px-2 flex md:flex-row flex-col">
            <div className="text-left m-2 min-w-[300px]">
              <h1 data-aos="fade-up" data-aos-delay="100" className="text-[40px] font-bold">
                {t('Key_2')}
              </h1>
              <p data-aos="fade-up" data-aos-delay="200" className="text-[20px] font-bold text-primary my-2 uppercase">
                {t('Key_3')}
              </p>
              <p data-aos="fade-up" data-aos-delay="300" className="text-[20px] text-gray-100 my-2">
                {t('Key_4')}
              </p>
            </div>
            <div className="flex justify-center">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="md:text-[160px] text-[18vw] p-4 bg-primary mr-2 font-bold text-white flex items-center"
              >
                10
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="md:text-[160px] text-[18vw] p-4 bg-primary mr-2 font-bold text-white flex items-center"
              >
                20
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="md:text-[160px] text-[18vw] p-4 bg-primary font-bold text-white flex items-center"
              >
                40
              </div>
            </div>
          </section>

          {/* Section 2 */}

          <section className="md:px-24 xl:px-32 py-12 bg-space text-center" data-aos="fade-up">
            <p className="text-primary text-[20px] uppercase">{t('Key_5')}</p>
            <p className="text-black text-[40px] font-bold">{t('Key_6')}</p>
            <p className="text-gray-100 text-[20px]">{t('Key_7')}</p>
          </section>

          <section data-aos="fade-up" data-aos-duration="1000" className="md:px-24 xl:px-32 py-12 px-2 text-center">
            <div className=" grid md:grid-cols-3 grid-cols-1">
              <div className="text-[20px] uppercase bg-primary p-2 border-dashed border-2 border-[white] text-white">
                {t('Service_1')}
              </div>
              <div className="text-[20px] uppercase bg-primary p-2 border-dashed border-2 border-[white] text-white">
                {t('Service_2')}
              </div>
              <div className="text-[20px] uppercase bg-primary p-2 border-dashed border-2 border-[white] text-white">
                {t('Service_3')}
              </div>
              <div className="text-[20px] uppercase bg-primary p-2 border-dashed border-2 border-[white] text-white">
                {t('Service_4')}
              </div>
              <div className="text-[20px] uppercase bg-primary p-2 border-dashed border-2 border-[white] text-white">
                {t('Service_5')}
              </div>
              <div className="text-[20px] uppercase bg-primary p-2 border-dashed border-2 border-[white] text-white">
                {t('Service_6')}
              </div>
            </div>
          </section>

          {/* Section 3 */}

          <section className="md:px-24 xl:px-32 py-12 px-2">
            <div className="flex md:flex-row flex-col">
              <div
                className="bg-[url('https://conteneurjd.com/wp-content/uploads/2023/06/tout-cote-boite-conteneur-rouge-vide-au-cargo1.jpg')] bg-no-repeat bg-contain bg-center 
              md:flex-1 h-[500px] w-full"
                data-aos="fade-right"
              />
              <div className="md:flex-1 md:p-12 p-4" data-aos="fade-right">
                <p className="text-primary text-[20px] uppercase">{t('Key_5')}</p>
                <p className="text-black text-[40px] font-bold">{t('Key_6')}</p>
                <p className="text-gray-100 text-[20px]">{t('Key_7')}</p>
                <div className="mt-6">
                  <p className="text-[14px] mt-4">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="ml-2"> {t('Key_10')}</span>
                  </p>
                  <p className="text-[14px] mt-4">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="ml-2"> {t('Key_10')}</span>
                  </p>
                  <p className="text-[14px] mt-4">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="ml-2"> {t('Key_10')}</span>
                  </p>
                  <p className="text-[14px] mt-4">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="ml-2"> {t('Key_10')}</span>
                  </p>
                  <p className="text-[14px] mt-4">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="ml-2"> {t('Key_10')}</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Breadcrumb title={t('Key_9')} isShowContactButton={true} />

          {/* Section 4 */}

          <section className="md:px-24 xl:px-32 py-12 px-2 my-10">
            <div className="text-center">
              <p className="text-primary text-[20px] uppercase" data-aos="fade-up">
                {t('Key_5')}
              </p>
              <p className="text-black text-[40px] font-bold" data-aos="fade-down">
                {t('Key_6')}
              </p>
              <p className="text-gray-100 text-[20px]" data-aos="zoom-in">
                {t('Key_7')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 mt-8">
              <div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <p
                      className="text-primary text-[40px] uppercase rounded-[50%] w-[100px] h-[100px] p-4 border-2 border-gray-100"
                      data-aos="fade-up"
                    >
                      1
                    </p>
                  </div>

                  <p className="text-black text-[20px] font-bold my-4 uppercase" data-aos="fade-down">
                    {t('Key_6')}
                  </p>
                  <p className="text-gray-100 text-[20px]" data-aos="zoom-in">
                    {t('Key_7')}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <p
                    className="text-primary text-[40px] uppercase rounded-[50%] w-[100px] h-[100px] p-4 border-2 border-gray-100"
                    data-aos="fade-up"
                  >
                    2
                  </p>
                </div>

                <p className="text-black text-[20px] font-bold my-4 uppercase" data-aos="fade-down">
                  {t('Key_6')}
                </p>
                <p className="text-gray-100 text-[20px]" data-aos="zoom-in">
                  {t('Key_7')}
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <p
                    className="text-primary text-[40px] uppercase rounded-[50%] w-[100px] h-[100px] p-4 border-2 border-gray-100"
                    data-aos="fade-up"
                  >
                    3
                  </p>
                </div>

                <p className="text-black text-[20px] font-bold my-4 uppercase" data-aos="fade-down">
                  {t('Key_6')}
                </p>
                <p className="text-gray-100 text-[20px]" data-aos="zoom-in">
                  {t('Key_7')}
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}

          <section className="md:px-24 xl:px-32 py-12 p-2">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div
                className="bg-[url('https://conteneurjd.com/wp-content/uploads/2023/06/homme-soudeur.jpg')] bg-no-repeat bg-contain bg-center 
              h-[400px]"
                data-aos="fade-right"
              />
              <div className="p-8" data-aos="fade-right">
                <p className="text-primary text-[20px] uppercase">{t('Key_5')}</p>
                <p className="text-black text-[40px] font-bold">{t('Key_6')}</p>
                <p className="text-gray-100 text-[20px]">{t('Key_7')}</p>
                <p className="text-gray-100 text-[18px]">{t('Key_7')}</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}

          <section className="md:px-24 xl:px-32 py-12 px-2 grid md:grid-cols-2 grid-cols-1">
            <div className="px-2">
              <ContactInfo />
            </div>
            <div className="px-2">
              <Form />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
