import Breadcrumb from '@/app/components/common/breadcrumb';
import ContactInfo from '@/app/components/contact/contact-info';
import Form from '@/app/components/contact/form';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="px-32">
      <Breadcrumb title="Contact" />
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-16">
        {[
          {
            title: '20 PIEDS',
            description: 'Conteneur de 20 pieds standard à vendre',
            url: '/',
            img: 'https://conteneurjd.com/wp-content/uploads/2023/06/ct-20pieds-dry-mini.png',
          },
          {
            title: '40 PIEDS',
            description: 'Conteneur de 40 pieds standard à vendre',
            url: '/',
            img: 'https://conteneurjd.com/wp-content/uploads/2023/06/ct-20pieds-dry-mini.png',
          },
          {
            title: '40 PIEDS HIGH CUBE',
            description: 'Conteneur de 40 pieds High Cube à vendre',
            url: '/',
            img: 'https://conteneurjd.com/wp-content/uploads/2023/06/ct-20pieds-dry-mini.png',
          },
          {
            title: 'PORTE DOUBLE',
            description: 'Conteneur porte double à vendre',
            url: '/',
            img: 'https://conteneurjd.com/wp-content/uploads/2023/06/conteneurs-40-pieds-high-cube-1.png',
          },
          {
            title: 'PORTE LATÉRALE',
            description: 'Conteneur de 40 pieds High Cube à vendre',
            url: '/',
            img: '	https://conteneurjd.com/wp-content/uploads/2023/06/conteneur-avec-porte-laterale-2.png',
          },
          {
            title: 'FRIGORIFIQUE',
            description: 'Conteneur frigorifique à vendre',
            url: '/',
            img: 'https://conteneurjd.com/wp-content/uploads/2023/06/conteneur-frigorifique.png',
          },
        ].map((item, idx) => {
          return (
            <div
              key={idx}
              className="m-auto mb-16 w-full max-w-[600px] p-4 bg-[url('https://conteneurjd.com/wp-content/uploads/2023/06/22-1.png')] h-[452px] bg-cover grid justify-center text-center"
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
                <button className="h-12 w-44 p-2 bg-primary text-white font-bold m-auto">En savoir plus</button>
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
