'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { INDUSTRIES_PAGE_DATA } from '@/constants';
import ContactForm from '@/components/sections/ContactForm';
import Partners from '@/components/sections/Partners';
import Stats from '@/components/sections/Stats';
import WhyUs from '@/components/sections/WhyUs';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

const IndustryDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const industryData = INDUSTRIES_PAGE_DATA.find(i => i.industrySlug === slug);

  if (!industryData) {
    return <div className="py-32 text-center text-2xl">Industry Not Found</div>;
  }

  return (
    <div className="bg-brand-bg-main text-brand-dark font-sans">
      {/* Hero Section */}
      <section className="bg-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
              Industry Focus
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-brand-dark leading-[1.1] mb-6 tracking-tight">
              {industryData.name}
            </h1>
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              {industryData.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-brand-dark text-white hover:bg-brand-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105">
                Get Started
              </a>
              <a href="#solutions" className="bg-white text-brand-dark border border-gray-200 hover:border-brand-primary hover:text-brand-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Partners />

      {/* Solutions Section */}
      {industryData.solutions && industryData.solutions.length > 0 && (
        <section id="solutions" className="py-24 bg-brand-bg-secondary scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 text-center mx-auto">
              <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">Solutions</span>
              <h2 className="text-4xl font-bold font-heading text-brand-dark">Tailored for {industryData.name}</h2>
              <p className="mt-4 text-brand-gray text-lg">Comprehensive solutions designed specifically for your industry.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryData.solutions.map((solution, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-bg-secondary flex items-center justify-center text-brand-dark font-heading font-bold text-xl group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      0{index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">{solution.name}</h3>
                    <div className="w-8 h-0.5 bg-gray-200 group-hover:bg-brand-secondary group-hover:w-12 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <WhyUs />

      <CTA
        title={`Ready to Transform Your ${industryData.name} Business?`}
        subtitle="Let's discuss how our expertise can help you achieve your goals."
        buttonText="Schedule a Consultation"
        onButtonClick={() => router.push('/contact')}
      />

      <CaseStudies />
      <Testimonials />

      <div id="contact">
        <ContactForm />
      </div>

      <FAQ />
    </div>
  );
};

export default IndustryDetailPage;
