'use client';

import React from 'react';
import ContactForm from '@/components/sections/ContactForm';
import Partners from '@/components/sections/Partners';
import Testimonials from '@/components/sections/Testimonials';
import CaseStudies from '@/components/sections/CaseStudies';
import OurOffices from '@/components/contact_page/OurOffices';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* 
        ContactForm acts as the Hero here. 
        It has its own padding (py-24) which serves well.
        We wrap it or just place it. 
        Since ContactForm has bg-white, and the header might be transparent or white, 
        we might want to ensure spacing is correct. 
        Homepage Hero has pt-28. ContactForm has py-24. 
        We'll just add a spacer div if needed or rely on the form.
      */}
      <div className="pt-20 lg:pt-28">
        <ContactForm />
      </div>

      <Partners />

      {/* Our Offices - we can keep this unique component but it might need style checks. 
          For now, we include it as it provides specific value. */}
      <OurOffices />

      <Testimonials />
    </>
  );
};

export default ContactPage;
