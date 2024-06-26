import Banner from '@/app/components/common/banner';
import Breadcrumb from '@/app/components/common/breadcrumb';
import Carousel from '@/app/components/common/carousel';
import ContactInfo from '@/app/components/contact/contact-info';
import Form from '@/app/components/contact/form';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  const t = useTranslations('Services');

  return (
    <div className="">
      <Breadcrumb title={t('Title')} />
      <div className="md:grid  block grid-cols-12 mt-16 gap-10 md:px-32  px-10">
        <div className="col-span-6 md:col-span-5">
          <Image
            data-aos="fade-right"
            data-aos-once="true"
            width={1000}
            height={1000}
            loading="lazy"
            src={'https://conteneurjd.com/wp-content/uploads/2023/06/ct-20pieds-dry-mini.png'}
            alt="sss"
            style={{
              height: '100%',
            }}
          />
        </div>
        <div data-aos="fade-right" className="m-auto col-span-6 md:col-span-7" data-aos-delay="1000">
          <p className="text-primary">{t('Key_1')}</p>
          <h1 className="text-[30px] font-bold my-4">{t('Key_2')}</h1>
          <p className="text-xl">{t('Key_3')}</p>
        </div>
      </div>
      <Banner />
      <div className="md:grid  block grid-cols-12 my-16 gap-10  md:px-32 px-10">
        <div data-aos="fade-right" className="m-auto col-span-6 md:col-span-7" data-aos-delay="1000">
          <p className="text-primary">{t('Key_4')}</p>
          <h1 className="text-[30px] font-bold my-4">{t('Key_5')}</h1>
          {[t('Key_6'), t('Key_7'), t('Key_8'), t('Key_9'), t('Key_10'), t('Key_11'), t('Key_12')].map((item, idx) => {
            return (
              <div key={idx} className="flex items-center">
                <svg
                  height="15px"
                  width="15px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 17.84 17.84"
                  xmlSpace="preserve"
                  fill="#ff0000"
                  stroke="#ff0000"
                  strokeWidth="0.00017837000000000002"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.071348"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        style={{ fill: '#ff0000' }}
                        d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
                      />
                    </g>
                  </g>
                </svg>
                <p className="border-b my-2 ml-4 text-xs" key={idx}>
                  {item}
                </p>
              </div>
            );
          })}
        </div>
        <div className="col-span-6 md:col-span-5">
          <Image
            data-aos="fade-right"
            data-aos-once="true"
            width={1000}
            height={1000}
            loading="lazy"
            src={'https://conteneurjd.com/wp-content/uploads/2023/06/FFHD.jpg'}
            alt="sss"
            style={{
              height: '100%',
            }}
          />
        </div>
      </div>
      <div className=" md:px-32  bg-[#777] h-[288px] flex justify-center flex-col px-10">
        <div>
          <h1 className="text-white text-[30px] text-center mb-6  ">Saviez-vous que ?</h1>
          <div className="h-[110px] bg-white">
            <Carousel
              data={[
                <div key="1">
                  <h1 className="text-[30px] font-bold my-4 text-center px-20">{t('Key_13')}</h1>
                </div>,
                <div key="2">
                  <h1 className="text-[30px] font-bold my-4 text-center px-20">{t('Key_14')}</h1>
                </div>,
                <div key="3">
                  <h1 className="text-[30px] font-bold my-4 text-center px-20">{t('Key_15')}</h1>
                </div>,
              ]}
              slidesPerView={1}
              pagination={false}
              navigation
            />
          </div>
        </div>
      </div>
      <div className=" md:px-32  pb-10 pt-20 bg-[#f7f7f7] px-10">
        <p className="text-primary">{t('Key_16')}</p>
        <h1 className="text-[30px] font-bold my-4">{t('Key_17')}</h1>
        <p>{t('Key_18')}</p>
        <div className="overflow-auto">
          <div className="table w-full min-w-[650px] my-10 ">
            <div className="table-header-group ">
              <div className="table-row bg-[#4D4E50] text-white font-bold text-xl">
                <div className="table-cell text-left p-4">{t('Key_19')}</div>
                <div className="table-cell text-left p-4">{t('Key_20')}</div>
                <div className="table-cell text-left p-4">{t('Key_21')}</div>
                <div className="table-cell text-left p-4">{t('Key_22')}</div>
              </div>
            </div>
            <div className="table-row-group ">
              <div className="table-row  hover:bg-gray-100">
                <div className="table-cell p-4">Longueur : 20 pi</div>
                <div className="table-cell p-4"> Longueur : 19 pi, 9 po</div>
                <div className="table-cell p-4"> Largeur : 7 pi, 8 po</div>
                <div className="table-cell p-4"> 4900 lbs</div>
              </div>
            </div>
            <div className="table-row-group">
              <div className="table-row bg-[#f9f9f9] hover:bg-gray-100">
                <div className="table-cell p-4 ">Longueur : 20 pi</div>
                <div className="table-cell p-4 "> Longueur : 19 pi, 9 po</div>
                <div className="table-cell p-4 "> Largeur : 7 pi, 8 po</div>
                <div className="table-cell p-4 "> </div>
              </div>
            </div>
            <div className="table-row-group">
              <div className="table-row  hover:bg-gray-100">
                <div className="table-cell p-4 ">Longueur : 20 pi</div>
                <div className="table-cell p-4 "> Longueur : 19 pi, 9 po</div>
                <div className="table-cell p-4 "></div>
                <div className="table-cell p-4 "> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
