'use client';

import React from 'react';
import IndustriesHero from '@/components/industries_page/IndustriesHero';
import IndustriesSliderNav from '@/components/industries_page/IndustriesSliderNav';
import IndustryCapabilities from '@/components/industries_page/IndustryCapabilities';
import BuildTogetherCTA from '@/components/service_page/BuildTogetherCTA';

const IndustriesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <IndustriesHero />
      <IndustriesSliderNav />
      <IndustryCapabilities />
      <BuildTogetherCTA />
    </div>
  );
};

export default IndustriesPage;
