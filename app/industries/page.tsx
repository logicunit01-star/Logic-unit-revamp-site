'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
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

// Define TypeScript interfaces
interface IndustryData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  industryheroTagline: string;
  industryheroHeading: string;
  industryheroContent: string;
  industryheroheadingSpan: string;
  industryherobtnone: string | null;
  industryherobtnsnd: string | null;
  sectorTagline: string;
  sectorheading: string;
  sectorheadingSpan: string;
  sectorheadingContent: string;
  metaTitle: string;
  metaDescription: string;
  industriesGrid: IndustryGrid[];
  industryFaq: industryFaq[];
}
interface IndustryGrid {
  id: number;
  slug: string;
  industryName: string;
  industrydesrciption: string;
  subchildindustries: subchildindustries[];
}
interface subchildindustries {
  id: number;
  featuresubChild: string;
  subchildSlug: string | null;
}
interface industryFaq {
  id: number;
  question: string;
  answer: string;
}

interface ApiResponse {
  data: IndustryData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const IndustriesPage: React.FC = () => {
  const router = useRouter();
  const [industryData, setIndustryData] = useState<IndustryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from Strapi
    const fetchData = async () => {
      try {
        // Your actual Strapi URL and token
        const STRAPI_URL = 'https://backend.logic-unit.com';
        const STRAPI_TOKEN = 'db7858d87261d71dd54774e392d95adababf24505e06545f889e7eb340ab8b78e1d62d82f24d64354c635a14ef20451d0fccb2bad707bbf2987b75d811980f1d65e130312d067d751076b08453c3ca09f033546a7f5746b36be728787cf2ebc695ba06fb42499e73d761788c03d6f417afbded4017be8965d98644e76846e331';

        const url = `${STRAPI_URL}/api/industry-pages?populate[industriesGrid][populate][subchildindustries]=*&populate[industryFaq]=*`;
        console.log('Fetching from:', url);

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${STRAPI_TOKEN}`,
          },
        });

        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);

        // Get response text first to see what we're getting
        const responseText = await response.text();
        console.log('Response text:', responseText);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText} - ${responseText}`);
        }

        // Parse the response
        const data: ApiResponse = JSON.parse(responseText);
        console.log('Parsed data:', data);

        if (data.data && data.data.length > 0) {
          console.log('Setting industry data:', data.data[0]);
          setIndustryData(data.data[0]);
        } else {
          console.log('No data in response');
          setError('No data returned from API');
        }
      } catch (error) {
        console.error('Error fetching industry data:', error);
        setError(error instanceof Error ? error.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!industryData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-xl text-red-600 mb-4">No data available</div>
        {error && (
          <div className="text-sm text-gray-600 max-w-md text-center">
            <p className="font-semibold mb-2">Error details:</p>
            <p className="bg-gray-100 p-4 rounded">{error}</p>
            <p className="mt-4 text-xs">
              Check the browser console for more information.
              <br />
              Make sure your Strapi URL and token are correct.
            </p>
          </div>
        )}
      </div>
    );
  }
  console.log("industriesfaq", industryData.industryFaq);
  return (
    <>
      <Head>
        <title>{industryData.metaTitle}</title>
        <meta
          name="description"
          content={industryData.metaDescription}
        />
      </Head>
      {/* Pass data to IndustriesPageHero */}
      <IndustriesPageHero
        tagline={industryData.industryheroTagline}
        heading={industryData.industryheroHeading}
        headingSpan={industryData.industryheroheadingSpan}
        content={industryData.industryheroContent}
        btnOne={industryData.industryherobtnone}
        btnTwo={industryData.industryherobtnsnd}
      />

      <Stats />
      <Partners />

      {/* Pass data to IndustriesGrid */}
      <IndustriesGrid
        tagline={industryData.sectorTagline}
        heading={industryData.sectorheading}
        headingSpan={industryData.sectorheadingSpan}
        content={industryData.sectorheadingContent}
        industries={industryData.industriesGrid}
      />

      <WhyUs />

      <CTA
        imageSrc="https://logic-unit.com/wp-content/uploads/2019/07/about-us-1024x512.jpg"
        title="Ready to Transform Your Industry?"
        subtitle="Our team of experts is ready to listen. Schedule a consultation to discuss how we can turn your vision into reality."
        buttonText="Schedule A Free Consultation"
        onButtonClick={() => router.push('/contact')}
      />

      <CaseStudies />
      <Testimonials />
      <ContactForm />
      <FAQ
        faqs={industryData.industryFaq}
      />

      <CTA
        title="Let's Create Something Amazing Together"
        subtitle="Contact Logic-unit, a leading custom software development agency, for bespoke software development solutions today."
        buttonText="Schedule A Free Consultation"
        onButtonClick={() => router.push('/contact')}
      />
    </>
  );
};

export default IndustriesPage;