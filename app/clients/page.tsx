'use client';

import React from 'react';
import ClientsHero from '@/components/clients_page/ClientsHero';
import ClientsNav from '@/components/clients_page/ClientsNav';
import OurPartnersSlider from '@/components/clients_page/OurPartnersSlider';
import OurClientsGrid from '@/components/clients_page/OurClientsGrid';
import SuccessStoriesSlider from '@/components/clients_page/SuccessStoriesSlider';
import WhyChooseUs from '@/components/clients_page/WhyChooseUs';
import BuildTogetherCTA from '@/components/service_page/BuildTogetherCTA';

const ClientsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <ClientsHero />
      <ClientsNav />
      <OurPartnersSlider />
      <OurClientsGrid />
      <SuccessStoriesSlider />
      <WhyChooseUs />
      <BuildTogetherCTA />
    </div>
  );
};

export default ClientsPage;
