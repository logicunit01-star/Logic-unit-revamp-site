import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchIndustryChild } from '@/lib/api-industry-child';
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
import FAQ from '@/components/sections/FAQ';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industryData = await fetchIndustryChild(slug);

  if (!industryData) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: industryData.metaTitle || `${industryData.heroHeading} | Logic-Unit`,
    description: industryData.metaDescription || industryData.heroContent,
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industryData = await fetchIndustryChild(slug);

  if (!industryData) {
    notFound();
  }

  return (
    <div className="bg-brand-bg-main text-brand-dark font-sans">
      <IndustryDetailHero
        headingTagline={industryData.heroTagline}
        heading={industryData.heroHeading}
        headingSpan={industryData.heroHeadingSpan}
        description={industryData.heroContent}
      />

      <ComplianceSection />
      <Stats />

      {/* Industry Challenges */}
      {industryData.challenges && (
        <IndustryChallenges
          challengesTagline={industryData.challengesTagline}
          challengesHeading={industryData.challengesHeading}
          challengesHeadingSpan={industryData.challengesHeadingSpan}
          challengesContent={industryData.challengesContent}
          challenges={industryData.challenges}
        />
      )}

      {/* Industries Grid (Sub-solutions) */}
      {industryData.industryGrid && industryData.industryGrid.length > 0 && (
        <IndustriesGrid
          tagline={industryData.sectorTagline || 'Solutions'}
          heading={industryData.sectorHeading || 'Specialized Solutions'}
          headingSpan={industryData.sectorHeadingSpan || ''}
          content={industryData.sectorHeadingContent || ''}
          industries={industryData.industryGrid.map(ind => ({
            slug: ind.slug,
            industryName: ind.industryName,
            industrydesrciption: ind.industryDescription,
            subchildindustries: []
          }))}
        />
      )}

      {/* Industry Process */}
      {industryData.approaches && (
        <IndustryProcess
          approachTagline={industryData.approachTagline}
          approachHeading={industryData.approachHeading}
          approachHeadingSpan={industryData.approachHeadingSpan}
          approachContent={industryData.approachContent}
          approaches={industryData.approaches}
        />
      )}

      <Partners />

      {/* Why Us - Mapped from API "choose" data */}
      <WhyUs
        tagline={industryData.whyChooseTagline}
        heading={industryData.whyChooseHeading}
        headingSpan={industryData.whyChooseHeadingSpan}
        content={industryData.whyChooseContent}
        points={industryData.choose}
      />

      <CTA
        title="Ready to build future-ready healthcare technology?"
        subtitle="Let Logic-Unit develop secure, compliant, and custom healthcare software that transforms patient care."
        buttonText="Start Your Healthcare Project Today"
        href="/contact"
      />

      <CaseStudies />
      <Allies />
      <Testimonials />
      <Technologies />

      <div id="contact">
        <ContactForm />
      </div>

      <FAQ faqs={industryData.faqs} />
    </div>
  );
}
