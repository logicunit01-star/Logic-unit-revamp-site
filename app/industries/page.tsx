
import React from 'react';
import { Metadata } from 'next';
import IndustriesPageHero from '@/components/industries_page/IndustriesPageHero';
import IndustriesGrid from '@/components/industries_page/IndustriesGrid';
import Stats from '@/components/sections/Stats';
import Partners from '@/components/sections/Partners';
import WhyUs from '@/components/sections/WhyUs';
import CTA from '@/components/sections/CTA';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import ContactForm from '@/components/sections/ContactForm';

// API Constants
const STRAPI_URL = 'https://backend.logic-unit.com';
const INDUSTRY_API_URL = `${STRAPI_URL}/api/industry-pages?populate[industriesGrid][populate][subchildindustries]=*&populate[industryFaq]=*`;
const AUTH_TOKEN = 'db7858d87261d71dd54774e392d95adababf24505e06545f889e7eb340ab8b78e1d62d82f24d64354c635a14ef20451d0fccb2bad707bbf2987b75d811980f1d65e130312d067d751076b08453c3ca09f033546a7f5746b36be728787cf2ebc695ba06fb42499e73d761788c03d6f417afbded4017be8965d98644e76846e331';

const fetchOptions = {
  headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  cache: 'no-store' as RequestCache, // Ensure fresh data on server-side
};

// Types
type IndustryPageData = {
  id: number;
  tagline: string;
  heading: string;
  content: string;
  headingSpan: string;
  btnOne?: string | null;
  btnTwo?: string | null;

  sectorTagline: string;
  sectorHeading: string;
  sectorHeadingSpan: string;
  sectorHeadingContent: string;

  metaTitle: string;
  metaDescription: string;

  industries: {
    id: number;
    slug: string;
    name: string;
    description: string;
    subIndustries: {
      id: number;
      name: string;
      slug: string | null;
    }[];
  }[];

  faqs: {
    id: number;
    question: string;
    answer: string;
  }[];
};

// Map raw Strapi → clean usable object
const mapIndustryPage = (item: any): IndustryPageData => {
  const a = item; // no attributes wrapper in Strapi v5 if flat, checking usage... Step 53 code implied direct access.

  return {
    id: a.id,

    tagline: a.industryheroTagline,
    heading: a.industryheroHeading,
    headingSpan: a.industryheroheadingSpan,
    content: a.industryheroContent,
    btnOne: a.industryherobtnone,
    btnTwo: a.industryherobtnsnd,

    sectorTagline: a.sectorTagline,
    sectorHeading: a.sectorheading,
    sectorHeadingSpan: a.sectorheadingSpan,
    sectorHeadingContent: a.sectorheadingContent,

    metaTitle: a.metaTitle,
    metaDescription: a.metaDescription,

    industries: a.industriesGrid?.map((ind: any) => ({
      id: ind.id,
      slug: ind.slug,
      name: ind.industryName,
      description: ind.industrydesrciption,
      subIndustries: ind.subchildindustries?.map((child: any) => ({
        id: child.id,
        name: child.featuresubChild,
        slug: child.subchildSlug,
      })) || [],
    })) || [],

    faqs: a.industryFaq?.map((f: any) => ({
      id: f.id,
      question: f.question,
      answer: f.answer,
    })) || [],
  };
};

const fetchIndustryPage = async (): Promise<IndustryPageData | null> => {
  try {
    const res = await fetch(INDUSTRY_API_URL, fetchOptions);

    if (!res.ok) {
      console.error(`Failed to fetch industry page: ${res.status}`);
      return null;
    }

    const json = await res.json();

    if (!json.data || json.data.length === 0) return null;

    return mapIndustryPage(json.data[0]);
  } catch (err) {
    console.error("Industry Page Fetch Error:", err);
    return null;
  }
};

// Generate Metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchIndustryPage();

  if (!data) {
    return {
      title: 'Industries | Logic-Unit',
      description: 'Industries we serve.',
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

// Server Component
const IndustriesPage = async () => {
  const industryData = await fetchIndustryPage();

  if (!industryData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-xl text-red-600 mb-4">No data available</div>
        <div className="text-sm text-gray-600 max-w-md text-center">
          <p className="font-semibold mb-2">Could not fetch industry data.</p>
          <p className="mt-4 text-xs">
            Please check the API configuration.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <IndustriesPageHero
        tagline={industryData.tagline}
        heading={industryData.heading}
        headingSpan={industryData.headingSpan}
        content={industryData.content}
        btnOne={industryData.btnOne}
        btnTwo={industryData.btnTwo}
      />

      <Stats />
      <Partners />

      <IndustriesGrid
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
      />

      <WhyUs />

      <CTA
        imageSrc="https://logic-unit.com/wp-content/uploads/2019/07/about-us-1024x512.jpg"
        title="Ready to Transform Your Industry?"
        subtitle="Our team of experts is ready to listen. Schedule a consultation to discuss how we can turn your vision into reality."
        buttonText="Schedule A Free Consultation"
        href="/contact"
      />

      <CaseStudies />
      <Testimonials />
      <ContactForm />
      <FAQ
        faqs={industryData.faqs}
      />

      <CTA
        title="Let's Create Something Amazing Together"
        subtitle="Contact Logic-unit, a leading custom software development agency, for bespoke software development solutions today."
        buttonText="Schedule A Free Consultation"
        href="/contact"
      />
    </>
  );
};

export default IndustriesPage;