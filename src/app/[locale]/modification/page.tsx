import Banner from '@/app/components/common/banner';
import Breadcrumb from '@/app/components/common/breadcrumb';
import Carousel from '@/app/components/common/carousel';
import ContactInfo from '@/app/components/contact/contact-info';
import Form from '@/app/components/contact/form';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  const t = useTranslations('Modification');
  return (
    <div className="">
      <Breadcrumb title={t('Title')} />
      <div className=" grid grid-cols-1 lg:grid-cols-2 mt-16 gap-10 px-10">
        <div>
          <Image
            data-aos="fade-right"
            data-aos-once="true"
            width={1000}
            height={1000}
            loading="lazy"
            src={'https://conteneurjd.com/wp-content/uploads/2023/06/modification-de-conteneur.jpg'}
            alt="sss"
            style={{
              height: '100%',
            }}
          />
        </div>
        <Banner />
      </div>
      <div className="max-[850px]:block flex justify-between items-center  min-h-[232px] bg-primary py-16 px-16 mt-16">
        <p className="text-[30px] font-bold text-white"> {t('Key_1')}</p>
        <button className="max-[850px]:ml-0 ml-10 max-[850px]:mt-10 p-4 max-w-[270px]  bg-white font-bold text-xl">
          {t('Key_2')}
        </button>
      </div>
      <div className=" grid grid-cols-1 my-16 gap-10 px-10">
        {[
          {
            title: t('Key_4'),
            desription: t('Key_3'),
          },
          {
            title: t('Key_5'),
            desription: t('Key_3'),
          },
          {
            title: t('Key_6'),
            desription: t('Key_3'),
          },
          {
            title: t('Key_7'),
            desription: t('Key_3'),
          },
        ].map((item, idx) => {
          return (
            <div key={idx} className="text-center bg-[#EBEBEB] p-16 rounded-lg">
              <h1 className="text-[30px] font-bold my-4">{item.title}</h1>
              <p>{item.desription}</p>
            </div>
          );
        })}
      </div>
      <div className="maxh-[400px]">
        <Carousel
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          data={[
            <img key="1" src="https://conteneurjd.com/wp-content/uploads/2023/06/sa.jpg" className="w-full" />,
            <img key="2" src="https://conteneurjd.com/wp-content/uploads/2023/06/81aFaCIBLmL.jpg" className="w-full" />,
            <img key="3" src="https://conteneurjd.com/wp-content/uploads/2023/06/w1.jpg" className="w-full" />,
            <img key="4" src="https://conteneurjd.com/wp-content/uploads/2023/06/81aFaCIBLmL.jpg" className="w-full" />,
          ]}
        />
      </div>
      <section className="flex  md:flex-row flex-col my-8 px-10">
        <div className="flex-1">
          <ContactInfo />
        </div>
        <div className="flex-1">
          <Form />
        </div>
      </section>
    </div>
  );
};

export default Contact;
