'use client';

import React from 'react';
import AboutHero from '@/components/about_page/AboutHero';
import AboutNav from '@/components/about_page/AboutNav';
import CompaniesEmpowered from '@/components/service_page/CompaniesEmpowered';
import AboutIntro from '@/components/about_page/AboutIntro';
import FootprintOfExcellence from '@/components/about_page/FootprintOfExcellence';
import MissionVision from '@/components/about_page/MissionVision';
import TechnologyExcellence from '@/components/about_page/TechnologyExcellence';
import OurTeam from '@/components/about_page/OurTeam';
import BuildTogetherCTA from '@/components/service_page/BuildTogetherCTA';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutNav />
      <CompaniesEmpowered />
      <AboutIntro />
      <FootprintOfExcellence />
      <MissionVision />
      <TechnologyExcellence />
      <OurTeam />
      <BuildTogetherCTA />
    </div>
  );
};

export default AboutPage;
