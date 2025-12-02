'use client';

import React from 'react';
import ContactHeroForm from '@/components/contact_page/ContactHeroForm';
import OurOffices from '@/components/contact_page/OurOffices';
import WhatOurClientsSay from '@/components/contact_page/WhatOurClientsSay';
import SuccessStories from '@/components/contact_page/SuccessStories';
import { TRUSTED_BY_LOGOS } from '@/constants';

const TrustedByBar: React.FC = () => (
  <div className="bg-brand-bg-secondary border-y border-gray-200 py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">Recognized Excellence</span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
        {TRUSTED_BY_LOGOS.map(logo => (
          <div key={logo.name} className="flex justify-center px-4 group">
            <img
              src={logo.url}
              alt={logo.name}
              className="max-h-12 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);


const ContactPage: React.FC = () => {
  return (
    <div className="bg-brand-bg-main">
      <ContactHeroForm />
      <TrustedByBar />
      <OurOffices />
      <WhatOurClientsSay />
      <SuccessStories />
    </div>
  );
};

export default ContactPage;
