'use client';

import React from 'react';
import AboutHero from '@/components/about_page/AboutHero';
import AboutNav from '@/components/about_page/AboutNav';
import Partners from '@/components/sections/Partners';
import AboutIntro from '@/components/about_page/AboutIntro';
import FootprintOfExcellence from '@/components/about_page/FootprintOfExcellence';
import MissionVision from '@/components/about_page/MissionVision';
import TechnologyExcellence from '@/components/about_page/TechnologyExcellence';
import OurTeam from '@/components/about_page/OurTeam';
import CTA from '@/components/sections/CTA';
import Stats from '@/components/sections/Stats';
import { useRouter } from 'next/navigation';

const AboutPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="bg-white">
      <AboutHero />
      {/* <AboutNav /> */}
      <Partners />
      <AboutIntro />
      <Stats />
      <MissionVision />
      <TechnologyExcellence />
      <OurTeam />
      <CTA
        title="Let's Build What's Next, Together"
        subtitle="Whether you're reimagining your ERP, automating workflows, or launching an AI platform — we'll help you bring it to life."
        buttonText="Schedule A Free Consultation"
        onButtonClick={() => router.push('/contact')}
      />
    </div>
  );
};

export default AboutPage;
