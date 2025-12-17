'use client';

import React from 'react';
import AIHero from '@/components/ai_page/AIHero';
import IndustryTicker from '@/components/sections/IndustryTicker';
import Stats from '@/components/sections/Stats';
import AIExpertise from '@/components/ai_page/AIExpertise';
import OurAIServices from '@/components/ai_page/OurAIServices';
import OurApproach from '@/components/ai_page/OurApproach';
import AISuccessStories from '@/components/ai_page/AISuccessStories';
import AITestimonials from '@/components/ai_page/AITestimonials';
import AIFaq from '@/components/ai_page/AIFaq';
import ContactForm from '@/components/sections/ContactForm';
import Partners from '@/components/sections/Partners';
import StickyNav from '@/components/ui/StickyNav';
import WhyUs from '@/components/sections/WhyUs';

const AIPage: React.FC = () => {
  const navItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Methodology', href: '#process' },
    { name: 'Technology', href: '#tech' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="bg-brand-bg-main text-brand-dark font-sans">
      <AIHero />
      <StickyNav items={navItems} />
      <IndustryTicker />
      <Stats />
      <Partners />
      <div id="solutions" className="scroll-mt-24">
        <OurAIServices />
      </div>
      <div id="why-us" className="scroll-mt-24">
        <WhyUs />
      </div>
      <div id="success-stories" className="scroll-mt-24">
        <AISuccessStories />
      </div>
      <div id="process" className="scroll-mt-24">
        <OurApproach />
      </div>
      <div id="tech" className="scroll-mt-24">
        <AIExpertise />
      </div>
      <AITestimonials />
      <div id="faq" className="scroll-mt-24">
        <AIFaq />
      </div>
      <ContactForm />
    </div>
  );
};

export default AIPage;
