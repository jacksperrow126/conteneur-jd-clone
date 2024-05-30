import Breadcrumb from '@/app/components/common/breadcrumb';
import Carousel from '@/app/components/common/carousel';
import ContactInfo from '@/app/components/contact/contact-info';
import Form from '@/app/components/contact/form';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="px-32">
      <Breadcrumb title="Contact" />
      <div className=" grid grid-cols-1 lg:grid-cols-2 mt-16 gap-10">
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
        <div data-aos="fade-right" className="m-auto" data-aos-delay="1000">
          <p className="text-primary">ON FAIT DU SUR MESURE</p>
          <h1 className="text-[30px] font-bold my-4">La modification de conteneur c&apos;est pratique pour vous.</h1>
          <p className="text-xl">
            Découvrez nos services de modification de conteneur de marchandise sur mesure, conçus pour répondre à vos
            besoins spécifiques. Que ce soit l&apos;aménagement intérieur pour optimiser l&apos;espace de stockage,
            l&apos;installation de systèmes de refroidissement pour les produits sensibles ou la création de
            compartiments sécurisés, notre équipe expérimentée est là pour vous fournir des solutions sur mesure. Avec
            notre expertise, vous pouvez améliorer votre efficacité logistique, assurer la sécurité de vos marchandises
            et répondre aux exigences spécifiques de votre activité.
          </p>
        </div>
      </div>
      <div className="max-[850px]:block flex justify-between items-center  min-h-[232px] bg-primary py-16 px-16 mt-16">
        <p className="text-[30px] font-bold text-white"> FAITES MODIFIER VOTRE CONTENEUR AUJOURD&apos;HUI !</p>
        <button className="max-[850px]:ml-0 ml-10 max-[850px]:mt-10 p-4 max-w-[270px]  bg-white font-bold text-xl">
          OBTENIR UN DEVIS
        </button>
      </div>
      <div className=" grid grid-cols-1 my-16 gap-10">
        {[
          {
            title: 'Porte Roll Up:',
            desription:
              'Nous proposons un service professionnel d&apos;installation de portes roll-up sur les conteneurs de marchandise. Nous offrons une gamme de tailles de porte roll-up, notamment 6&apos;, 7, 8&apos; et 10&apos;, pour répondre aux besoins spécifiques de chacun nos clients.',
          },
          {
            title: 'Porte dhomme :',
            desription:
              'Nous proposons un service professionnel d&apos;installation de portes roll-up sur les conteneurs de marchandise. Nous offrons une gamme de tailles de porte roll-up, notamment 6&apos;, 7, 8&apos; et 10&apos;, pour répondre aux besoins spécifiques de chacun nos clients.',
          },
          {
            title: 'Fenêtre :',
            desription:
              'Nous proposons un service professionnel d&apos;installation de portes roll-up sur les conteneurs de marchandise. Nous offrons une gamme de tailles de porte roll-up, notamment 6&apos;, 7, 8&apos; et 10&apos;, pour répondre aux besoins spécifiques de chacun nos clients.',
          },
          {
            title: 'Cadenas en D:',
            desription:
              'Nous proposons un service professionnel d&apos;installation de portes roll-up sur les conteneurs de marchandise. Nous offrons une gamme de tailles de porte roll-up, notamment 6&apos;, 7, 8&apos; et 10&apos;, pour répondre aux besoins spécifiques de chacun nos clients.',
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
      <Carousel />
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
