'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { INDUSTRIES_PAGE_DATA, toSlug } from '@/constants';
import IndustryDetailHero from '@/components/industries_page/IndustryDetailHero';
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

const IndustrySolutionPage: React.FC = () => {
    const params = useParams();
    const router = useRouter();
    const industrySlug = params?.slug as string;
    const solutionSlug = params?.solutionSlug as string;

    const industryData = INDUSTRIES_PAGE_DATA.find(i => i.industrySlug === industrySlug);
    const solutionData = industryData?.solutions.find(s => toSlug(s.name) === solutionSlug);

    if (!industryData || !solutionData) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-brand-bg-main">
                <h1 className="text-4xl font-bold text-brand-dark mb-4">Solution Not Found</h1>
                <p className="text-brand-gray mb-8">The requested solution could not be found.</p>
                <Link href="/industries" className="text-brand-primary hover:underline">Back to Industries</Link>
            </div>
        );
    }

    // Generate a description if one isn't available (since currently solutions only have names)
    const description = `Advanced ${solutionData.name} solutions tailored for the ${industryData.name} industry. We help organizations leverage cutting-edge technology to improve efficiency, reduce costs, and drive growth.`;

    return (
        <div className="bg-brand-bg-main text-brand-dark font-sans">

            <IndustryDetailHero
                title={solutionData.name}
                description={description}
            />

            <ComplianceSection />
            <Stats />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6">
                                Why Choose Our <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">{solutionData.name}?</span>
                            </h2>
                            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                                In the rapidly evolving landscape of {industryData.name}, staying ahead requires more than just standard software. Our {solutionData.name} is built with a deep understanding of your specific challenges and opportunities.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Custom-built for your specific workflows',
                                    'Seamless integration with existing systems',
                                    'Enterprise-grade security and compliance',
                                    'Scalable architecture for future growth'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-brand-dark font-medium">
                                        <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3 text-brand-primary">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                alt={solutionData.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

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
                title={`Ready to Implement ${solutionData.name}?`}
                subtitle="Let's discuss your requirements and build a solution that drives results."
                buttonText="Get a Quote"
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

export default IndustrySolutionPage;
