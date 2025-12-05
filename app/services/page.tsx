'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ServiceHero from '@/components/service_page/ServiceHero';
import CoreCapabilities from '@/components/service_page/CoreCapabilities';
import HowWeBuildIt from '@/components/service_page/HowWeBuildIt';
import DeliveryModels from '@/components/service_page/DeliveryModels';
import DeliveryModelsSection from '@/components/services_page/DeliveryModelsSection';
import Consultancy from '@/components/service_page/Consultancy';
import Partners from '@/components/sections/Partners';
import CTA from '@/components/sections/CTA';
import StickyNav from '@/components/ui/StickyNav';

const ServicesPage: React.FC = () => {
  const router = useRouter();

  const navItems = [
    { name: 'Capabilities', href: '#core-capabilities' },
    { name: 'Methodology', href: '#how-we-build-it' },
    { name: 'Delivery Models', href: '#delivery-models' },
    { name: 'Consultancy', href: '#consultancy' },
  ];

  return (
    <div className="bg-brand-bg-main text-brand-dark font-sans">
      <ServiceHero />
      <StickyNav items={navItems} />
      <Partners />
      <CoreCapabilities />
      <DeliveryModelsSection />
      <HowWeBuildIt />
      <DeliveryModels />
      <Consultancy />
      <Partners />
      <CTA
        title="Ready to Architect Your Future?"
        subtitle="Schedule a strategic consultation to discuss how our engineering capabilities can accelerate your business goals."
        buttonText="Schedule Your Free Consultation"
        onButtonClick={() => router.push('/contact')}
      />
    </div>
  );
};

export default ServicesPage;
