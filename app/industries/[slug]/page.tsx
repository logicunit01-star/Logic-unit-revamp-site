'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { INDUSTRIES_PAGE_DATA, toSlug } from '@/constants';
import IndustryDetailHero from '@/components/industries_page/IndustryDetailHero';
import IndustryChallenges from '@/components/industries_page/IndustryChallenges';
import IndustryProcess from '@/components/industries_page/IndustryProcess';
import ComplianceSection from '@/components/industries_page/ComplianceSection';
import ContactForm from '@/components/sections/ContactForm';
import Partners from '@/components/sections/Partners';
import Stats from '@/components/sections/Stats';
import WhyUs from '@/components/sections/WhyUs';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Allies from '@/components/sections/Allies';
import Technologies from '@/components/sections/Technologies';

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
      <IndustryDetailHero
        title={industryData.name}
        description={industryData.description}
      />

      <ComplianceSection />
      <Stats />

      {/* New Unique Section: Industry Challenges */}
      {industryData.challenges && (
        <IndustryChallenges
          industryName={industryData.name}
          challenges={industryData.challenges}
        />
      )}

      {/* Solutions Section */}
      {industryData.solutions && industryData.solutions.length > 0 && (
        <section id="solutions" className="py-24 bg-brand-bg-secondary scroll-mt-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mb-16 text-center mx-auto">
              <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">Solutions</span>
              <h2 className="text-4xl font-bold font-heading text-brand-dark">Tailored for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">{industryData.name}</span></h2>
              <p className="mt-4 text-brand-gray text-lg">Comprehensive solutions designed specifically for your industry.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryData.solutions.map((solution, index) => (
                <div
                  key={index}
                  onClick={() => router.push(`/industries/${slug}/${toSlug(solution.name)}`)}
                  className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 hover:border-brand-primary/30 relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-bg-secondary flex items-center justify-center text-brand-dark font-heading font-bold text-xl group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      0{index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{solution.name}</h3>
                    <div className="w-8 h-0.5 bg-gray-200 group-hover:bg-brand-secondary group-hover:w-12 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* New Unique Section: Process */}
      {industryData.process && (
        <IndustryProcess
          industryName={industryData.name}
          steps={industryData.process}
        />
      )}

      <Partners />

      <WhyUs />

      <CTA
        title={`Ready to Transform Your ${industryData.name} Business?`}
        subtitle="Let's discuss how our expertise can help you achieve your goals."
        buttonText="Schedule a Consultation"
        onButtonClick={() => router.push('/contact')}
      />

      <CaseStudies />
      <Allies />
      <Testimonials />
      <Technologies />

      <div id="contact">
        <ContactForm />
      </div>

      <FAQ />
    </div>
  );
};

export default IndustryDetailPage;
