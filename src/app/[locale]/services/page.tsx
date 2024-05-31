import Breadcrumb from '@/app/components/common/breadcrumb';
import ContactInfo from '@/app/components/contact/contact-info';
import Form from '@/app/components/contact/form';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  const t = useTranslations('Services');

  return (
    <div className="">
      <Breadcrumb title="Contact" />
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-16 md:px-32 p-2">
        {[
          {
            title: t('Service_1'),
            description: t('Key_1'),
            url: '/service_1',
            img: 'https://conteneurjd.com/wp-content/uploads/2023/06/ct-20pieds-dry-mini.png',
          },
          {
            title: t('Service_2'),
            description: t('Key_2'),
            url: '/service_1',
            img: 'https://conteneurjd.com/wp-content/uploads/2023/06/ct-20pieds-dry-mini.png',
          },
          {
            title: t('Service_3'),
            description: t('Key_3'),
            url: '/service_1',
            img: 'https://conteneurjd.com/wp-content/uploads/2023/06/ct-20pieds-dry-mini.png',
          },
          {
            title: t('Service_4'),
            description: t('Key_4'),
            url: '/service_1',
            img: 'https://conteneurjd.com/wp-content/uploads/2023/06/conteneurs-40-pieds-high-cube-1.png',
          },
          {
            title: t('Service_5'),
            description: t('Key_5'),
            url: '/service_1',
            img: '	https://conteneurjd.com/wp-content/uploads/2023/06/conteneur-avec-porte-laterale-2.png',
          },
          {
            title: t('Service_6'),
            description: t('Key_6'),
            url: '/service_1',
            img: 'https://conteneurjd.com/wp-content/uploads/2023/06/conteneur-frigorifique.png',
          },
        ].map((item, idx) => {
          return (
            <div
              key={idx}
              className="m-auto mb-16 w-full max-w-[600px] p-4 bg-[url('https://conteneurjd.com/wp-content/uploads/2023/06/22-1.png')] 
              h-[452px] bg-cover grid justify-center text-center"
            >
              <div>
                <h1 className="text-3xl">{item.title}</h1>
                <p>{item.description}</p>
              </div>
              <Image
                data-aos="fade-right"
                data-aos-once="true"
                width={434}
                height={254}
                loading="lazy"
                src={item.img}
                alt="sss"
              />
              <Link href={item.url}>
                <button className="h-12 p-2 bg-primary text-white font-bold m-auto">{t('Key_7')}</button>
              </Link>
            </div>
          );
        })}
      </div>
      <section className="flex  md:flex-row flex-col my-8">
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
