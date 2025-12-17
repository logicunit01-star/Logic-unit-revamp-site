import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
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
import CTA from '@/components/sections/CTA';
import Allies from '@/components/sections/Allies';
import Technologies from '@/components/sections/Technologies';
import IndustriesGrid from '@/components/industries_page/IndustriesGrid';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industryData = INDUSTRIES_PAGE_DATA.find(i => i.industrySlug === slug);

  if (!industryData) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `${industryData.name} Software Development | Logic-Unit`,
    description: industryData.description,
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industryData = INDUSTRIES_PAGE_DATA.find(i => i.industrySlug === slug);

  if (!industryData) {
    notFound();
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

      {/* <IndustriesGrid
        tagline={industryData.sectorTagline}
        heading={industryData.sectorHeading}
        headingSpan={industryData.sectorHeadingSpan}
        content={industryData.sectorHeadingContent}
        industries={industryData.industries.map(ind => ({
          slug: ind.slug,
          industryName: ind.name,
          industrydesrciption: ind.description,
          subchildindustries: ind.subIndustries.map(sub => ({
            id: sub.id,
            featuresubChild: sub.name,
            subchildSlug: sub.slug
          }))
        }))}
      /> */}

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
        href="/contact"
      />

      <CaseStudies />
      <Allies />
      <Testimonials />
      <Technologies />

      <div id="contact">
        <ContactForm />
      </div>

      {/* <FAQ /> */}
    </div>
  );
}
