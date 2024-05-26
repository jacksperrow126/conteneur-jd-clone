import Breadcrumb from '@/app/components/common/breadcrumb';
import ContactInfo from '@/app/components/contact/contact-info';
import Form from '@/app/components/contact/form';

const Contact = () => {
  return (
    <div className="px-32">
      <Breadcrumb title="Contact" />
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
