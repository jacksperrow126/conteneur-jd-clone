import Breadcrumb from '@/app/components/common/breadcrumb';
import ContactInfo from '@/app/components/contact/contact-info';
import Form from '@/app/components/contact/form';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="px-32">
      <Breadcrumb title="Contact" />
      <div className=" grid grid-cols-2 mt-16 gap-10">
        <div>
          <Image
            data-aos="fade-right"
            data-aos-once="true"
            width={1000}
            height={1000}
            loading="lazy"
            src={'https://conteneurjd.com/wp-content/uploads/2023/06/modification-de-conteneur.jpg'}
            alt="sss"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="1000">
          <p className="text-primary">ON FAIT DU SUR MESURE</p>
          <h1 className="text-[30px] font-bold my-4">La modification de conteneur c&apos;est pratique pour vous.</h1>
          <p>
            Découvrez nos services de modification de conteneur de marchandise sur mesure, conçus pour répondre à vos
            besoins spécifiques. Que ce soit l&apos;aménagement intérieur pour optimiser l&apos;espace de stockage,
            l&apos;installation de systèmes de refroidissement pour les produits sensibles ou la création de
            compartiments sécurisés, notre équipe expérimentée est là pour vous fournir des solutions sur mesure. Avec
            notre expertise, vous pouvez améliorer votre efficacité logistique, assurer la sécurité de vos marchandises
            et répondre aux exigences spécifiques de votre activité.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 ">
        <p>ON FAIT DU SUR MESURE</p>
        <button>sdas</button>
      </div>
      <div className=" grid grid-cols-1 my-16 gap-10">
        {[1, 2, 3, 4].map((item, idx) => {
          return (
            <div key={idx} className="text-center bg-[#EBEBEB] p-16 rounded-lg">
              <h1 className="text-[30px] font-bold my-4">
                La modification de conteneur c&apos;est pratique pour vous.
              </h1>
              <p>
                Les conteneurs peuvent être équipés de rayonnages, de crochets ou de supports pour maximiser
                l&apos;utilisation de l&apos;espace disponible. Cela permet d&apos;organiser et de sécuriser les
                marchandises pendant le transport, en évitant les mouvements et les dommages potentiels.
              </p>
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
