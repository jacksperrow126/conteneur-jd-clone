import Banner from '@/app/components/common/banner';
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
      <Breadcrumb title={t('Title')} />
      <div className="md:grid  block grid-cols-12 mt-16 gap-10 md:px-32">
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
      <Banner />
      <div className="md:grid  block grid-cols-12 mt-16 gap-10  md:px-32">
        <div data-aos="fade-right" className="m-auto col-span-6 md:col-span-7" data-aos-delay="1000">
          <p className="text-primary">ACHETEZ-LE NEUF OU USAGÉ</p>
          <h1 className="text-[30px] font-bold my-4">Caractéristiques du conteneur 20 pieds</h1>
          {[
            'Ils sont entièrement construits en acier Corten, connu pour sa résistance à la corrosion.',
            'Leur contreplaqué répond aux normes de qualité marine.',
            'Ils sont fabriqués conformément aux spécifications ISO pour garantir leur qualité.',
            'Bien que le lockbox sécurisé ne soit pas inclus, d&apos;autres mesures de sécurité sont prévues.',
            'La plupart des unités sont équipées de poches de chariot élévateur pour faciliter leur manipulation.',
            'Des aérations latérales sont intégrées pour favoriser la circulation de l&apos;air.',
            'Certains modèles bénéficient d&apos;une porte facile à ouvrir, pour plus de praticité.',
          ].map((item, idx) => {
            return (
              <div key={idx} className="flex items-center">
                <svg
                  height="25px"
                  width="25px"
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
                <p className="text-xl border-b my-4 ml-4" key={idx}>
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
      <div className=" md:px-32 mt-10">
        <p className="text-primary">EN RÉSUMÉ</p>
        <h1 className="text-[30px] font-bold my-4">Le conteneur 20 pieds est standard et polyvalent</h1>
        <p>
          En résumé, les conteneurs 20 pieds standards sont des équipements de transport intermodal populaire et
          polyvalent. Sa taille standard, sa commodité et son efficacité en font un choix idéal pour le transport et le
          stockage de marchandises pour les entreprises et les particuliers. Les conteneurs peuvent être utilisés pour
          transporter une grande variété de marchandises et peuvent être équipés pour répondre aux besoins spécifiques
          de chaque entreprise ou individu.
        </p>
        <div className="table w-full mt-10">
          <div className="table-header-group ">
            <div className="table-row bg-[#4D4E50] text-white font-bold text-xl">
              <div className="table-cell text-left ">EXTÉRIEURS</div>
              <div className="table-cell text-left ">INTÉRIEUR</div>
              <div className="table-cell text-left ">PORTE</div>
              <div className="table-cell text-left ">CAPACITÉ</div>
            </div>
          </div>
          <div className="table-row-group ">
            <div className="table-row  hover:bg-gray-100">
              <div className="table-cell py-4">Longueur : 20 pi</div>
              <div className="table-cell py-4"> Longueur : 19 pi, 9 po</div>
              <div className="table-cell py-4"> Largeur : 7 pi, 8 po</div>
              <div className="table-cell py-4"> 4900 lbs</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row bg-[#f9f9f9] hover:bg-gray-100">
              <div className="table-cell py-4 ">Longueur : 20 pi</div>
              <div className="table-cell py-4 "> Longueur : 19 pi, 9 po</div>
              <div className="table-cell py-4 "> Largeur : 7 pi, 8 po</div>
              <div className="table-cell py-4 "> </div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row  hover:bg-gray-100">
              <div className="table-cell py-4 ">Longueur : 20 pi</div>
              <div className="table-cell py-4 "> Longueur : 19 pi, 9 po</div>
              <div className="table-cell py-4 "></div>
              <div className="table-cell py-4 "> </div>
            </div>
          </div>
        </div>
      </div>
      <section className="flex  md:flex-row flex-col my-8  md:px-32">
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
