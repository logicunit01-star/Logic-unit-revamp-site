'use client';

import React from 'react';
import ClientsHero from '@/components/clients_page/ClientsHero';
import Partners from '@/components/sections/Partners';
import OurClientsGrid from '@/components/clients_page/OurClientsGrid';
import SuccessStoriesSlider from '@/components/clients_page/SuccessStoriesSlider';
import WhyChooseUs from '@/components/clients_page/WhyChooseUs';
import CTA from '@/components/sections/CTA';
import { useRouter } from 'next/navigation';

const ClientsPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="bg-white">
      <ClientsHero />
      <Partners />
      <SuccessStoriesSlider />
      <WhyChooseUs />
      <CTA
        title="Let's Create Something Amazing Together"
        subtitle="Contact Logic-unit, a leading custom software development agency, for bespoke software development solutions today."
        buttonText="Schedule A Free Consultation"
        onButtonClick={() => router.push('/contact')}
      />
    </div>
  );
};

export default ClientsPage;
