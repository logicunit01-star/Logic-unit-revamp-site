'use client';

import React from 'react';
import CaseStudiesHero from '@/components/case_studies_page/CaseStudiesHero';
import CaseStudiesNav from '@/components/case_studies_page/CaseStudiesNav';
import FeaturedCaseStudies from '@/components/case_studies_page/FeaturedCaseStudies';
import AllCaseStudies from '@/components/case_studies_page/AllCaseStudies';
import BuildTogetherCTA from '@/components/service_page/BuildTogetherCTA';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="bg-brand-bg-main">
      <CaseStudiesHero />
      <CaseStudiesNav />
      <FeaturedCaseStudies />
      <AllCaseStudies />
      <BuildTogetherCTA />
    </div>
  );
};

export default CaseStudiesPage;
