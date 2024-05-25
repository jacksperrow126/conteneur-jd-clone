import { useTranslations } from 'next-intl';
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Breadcrumb from '@/app/components/common/breadcrumb';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Home() {
  const t = useTranslations('LandingPage');

  return (
    <div >
      <div className="bg-[url('https://conteneurjd.com/wp-content/uploads/2023/06/slider111-2.jpg')] 
      bg-no-repeat bg-cover bg-center w-full sm:h-[60vw] h-[60vh] max-h-[800px] flex justify-center items-center">
        <div className='w-[60%] h-[60%] min-w-[240px] max-w-[800px] bg-black bg-opacity-60 text-center text-white flex justify-center items-center'>
          <div className='leading-[6vw]  xl:leading-[60px]'>
            <h3 className='text-[4vw] font-bold xl:text-[48px]' data-aos="fade-right">{t('Subtitle')}</h3>
            <h1 className='text-[7vw] font-bold  xl:text-[80px]' data-aos="fade-up" data-aos-delay="100">{t('Title')}</h1>
            <p data-aos="zoom-out" data-aos-delay="200" className='text-[12px] md:text-[20px]' >{t('Description')}</p>
            <button className='bg-primary rounded-md px-8 font-bold text-[12px] md:text-[20px]' data-aos="zoom-in-up" data-aos-delay="300">Button</button>
          </div>
        </div>
      </div>
      <h1 className='text-[50px] text-center font-bold m-6'>{t('Key_1')}</h1>
      <div className='flex justify-center'>
        <div className='max-w-[1400px]'>

          {/* Section 1 */}

          <section className='flex p-4 m-20 md:flex-row flex-col'>
            <div className='text-left m-2'>
              <h1 data-aos="fade-up" data-aos-delay="100" className='text-[40px] font-bold'>{t('Key_2')}</h1>
              <p data-aos="fade-up" data-aos-delay="200" className='text-[20px] font-bold text-primary my-2 uppercase'>{t('Key_3')}</p>
              <p data-aos="fade-up" data-aos-delay="300" className='text-[20px] font-bold text-gray-100 my-2'>{t('Key_4')}</p>
            </div>
            <div className='flex '>
              <div data-aos="fade-up" data-aos-delay="100" className='md:text-[160px] text-[20vw] p-4 bg-primary mr-2 font-bold text-white flex items-center'>
                10
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className='md:text-[160px] text-[20vw] p-4 bg-primary mr-2 font-bold text-white flex items-center'>
                20
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className='md:text-[160px] text-[20vw] p-4 bg-primary mr-2 font-bold text-white flex items-center'>
                40
              </div>
            </div>
          </section>

          {/* Section 2 */}

          <section data-aos="fade-up" data-aos-duration="1000" className='text-center m-20 '>
            <p className='text-primary text-[20px] uppercase'>{t('Key_5')}</p>
            <p className='text-black text-[40px] font-bold'>{t('Key_6')}</p>
            <p className='text-gray-100 text-[20px]'>{t('Key_7')}</p>
            <div className='m-20 grid md:grid-cols-3 grid-cols-1'>
              <div className='text-[20px] uppercase bg-primary p-2 border-dashed border-2 border-[white] text-white'>{t('Service_1')}</div>
              <div className='text-[20px] uppercase bg-primary p-2 border-dashed border-2 border-[white] text-white'>{t('Service_2')}</div>
              <div className='text-[20px] uppercase bg-primary p-2 border-dashed border-2 border-[white] text-white'>{t('Service_3')}</div>
              <div className='text-[20px] uppercase bg-primary p-2 border-dashed border-2 border-[white] text-white'>{t('Service_4')}</div>
              <div className='text-[20px] uppercase bg-primary p-2 border-dashed border-2 border-[white] text-white'>{t('Service_5')}</div>
              <div className='text-[20px] uppercase bg-primary p-2 border-dashed border-2 border-[white] text-white'>{t('Service_6')}</div>
            </div>
          </section>

          {/* Section 3 */}

          <section className='m-20'>
            <div className='flex md:flex-row flex-col'>
              <div className="bg-[url('https://conteneurjd.com/wp-content/uploads/2023/06/tout-cote-boite-conteneur-rouge-vide-au-cargo1.jpg')] bg-no-repeat bg-contain bg-center 
              md:flex-1 h-[500px] w-full" data-aos="fade-right" />
              <div className='md:flex-1 p-12' data-aos="fade-right">
                <p className='text-primary text-[20px] uppercase'>{t('Key_5')}</p>
                <p className='text-black text-[40px] font-bold'>{t('Key_6')}</p>
                <p className='text-gray-100 text-[20px]'>{t('Key_7')}</p>
                <div className='mt-6'>
                  <p className='text-[20px] mt-4'><FontAwesomeIcon icon={faCheck} /><span className='ml-2'> {t('Key_8')}</span></p>
                  <p className='text-[20px] mt-4'><FontAwesomeIcon icon={faCheck} /><span className='ml-2'> {t('Key_8')}</span></p>
                  <p className='text-[20px] mt-4'><FontAwesomeIcon icon={faCheck} /><span className='ml-2'> {t('Key_8')}</span></p>
                  <p className='text-[20px] mt-4'><FontAwesomeIcon icon={faCheck} /><span className='ml-2'> {t('Key_8')}</span></p>
                  <p className='text-[20px] mt-4'><FontAwesomeIcon icon={faCheck} /><span className='ml-2'> {t('Key_8')}</span></p>
                </div>
              </div>
            </div>
          </section>

          <Breadcrumb title={t('Key_9')} />

          {/* Section 4 */}

          <section className='m-20'>
            <div className='text-center'>
              <p className='text-primary text-[20px] uppercase'>{t('Key_5')}</p>
              <p className='text-black text-[40px] font-bold'>{t('Key_6')}</p>
              <p className='text-gray-100 text-[20px]'>{t('Key_7')}</p>
            </div>
          </section>

          {/* Section 5 */}

          <section className='m-20'>
            <div className='flex md:flex-row flex-col'>
              <div className="bg-[url('https://conteneurjd.com/wp-content/uploads/2023/06/homme-soudeur.jpg')] bg-no-repeat bg-contain bg-center 
              md:flex-1 h-[500px] w-full" data-aos="fade-right" />
              <div className='md:flex-1 p-12' data-aos="fade-left">
                <p className='text-primary text-[20px] uppercase'>{t('Key_5')}</p>
                <p className='text-black text-[40px] font-bold'>{t('Key_6')}</p>
                <p className='text-gray-100 text-[20px]'>{t('Key_7')}</p>
                <p className='text-gray-100 text-[18px]'>{t('Key_7')}</p>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}