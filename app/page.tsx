'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Partners from '@/components/sections/Partners';
import IndustryTicker from '@/components/sections/IndustryTicker';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import CTA from '@/components/sections/CTA';
import CaseStudies from '@/components/sections/CaseStudies';
import Allies from '@/components/sections/Allies';
import Testimonials from '@/components/sections/Testimonials';
import Technologies from '@/components/sections/Technologies';
import Insights from '@/components/sections/Insights';
import ContactForm from '@/components/sections/ContactForm';
import FAQ from '@/components/sections/FAQ';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <Hero />
      <IndustryTicker />
      <Stats />
      <Partners />
      <Services />
      <WhyUs />
      <CTA
        imageSrc="https://logic-unit.com/wp-content/uploads/2019/07/about-us-1024x512.jpg"
        title="Ready to Your Software Development for Startups?"
        subtitle="Our team of experts is ready to listen. Schedule a software development consulting to discuss how we can turn your vision into reality."
        buttonText="Schedule A Free Consultation"
        onButtonClick={() => router.push('/contact')}
      />
      <CaseStudies />
      <Allies />
      <Testimonials />
      <Technologies />
      <Insights />
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
}
