'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import IndustriesPageHero from '@/components/industries_page/IndustriesPageHero';
import IndustriesGrid from '@/components/industries_page/IndustriesGrid';
import Stats from '@/components/sections/Stats';
import Partners from '@/components/sections/Partners';
import WhyUs from '@/components/sections/WhyUs';
import CTA from '@/components/sections/CTA';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import ContactForm from '@/components/sections/ContactForm';

const IndustriesPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <IndustriesPageHero />
      <Stats />
      <Partners />
      <IndustriesGrid />
      <WhyUs />
      <CTA
        imageSrc="https://logic-unit.com/wp-content/uploads/2019/07/about-us-1024x512.jpg"
        title="Ready to Transform Your Industry?"
        subtitle="Our team of experts is ready to listen. Schedule a consultation to discuss how we can turn your vision into reality."
        buttonText="Schedule A Free Consultation"
        onButtonClick={() => router.push('/contact')}
      />
      <CaseStudies />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <CTA
        title="Let's Create Something Amazing Together"
        subtitle="Contact Logic-unit, a leading custom software development agency, for bespoke software development solutions today."
        buttonText="Schedule A Free Consultation"
        onButtonClick={() => router.push('/contact')}
      />
    </>
  );
};

export default IndustriesPage;
