import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchIndustryChild } from '@/lib/api-industry-child';
import IndustryDetailHero from '@/components/industries_page/IndustryDetailHero';
import ContactForm from '@/components/sections/ContactForm';
import CTA from '@/components/sections/CTA';
import Allies from '@/components/sections/Allies';
import FAQ from '@/components/sections/FAQ';

interface PageProps {
    params: Promise<{
        slug: string;
        solutionSlug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug, solutionSlug } = await params;
    const industryData = await fetchIndustryChild(slug);

    if (!industryData) {
        return { title: 'Solution Not Found' };
    }

    // Find the relevant sub-industry name
    let solutionName = '';
    for (const gridItem of industryData.industryGrid) {
        const sub = gridItem.subIndustries.find(s => s.slug === solutionSlug);
        if (sub) {
            solutionName = sub.name;
            break;
        }
    }

    return {
        title: solutionName ? `${solutionName} | Logic-Unit` : industryData.metaTitle,
        description: `Learn more about our ${solutionName} solutions.`,
    };
}

export default async function IndustrySolutionPage({ params }: PageProps) {
    const { slug, solutionSlug } = await params;
    const industryData = await fetchIndustryChild(slug);

    if (!industryData) {
        notFound();
    }

    // Find the specific solution (sub-industry)
    let solutionItem = null;
    let parentCategory = null;

    for (const gridItem of industryData.industryGrid) {
        const sub = gridItem.subIndustries.find(s => s.slug === solutionSlug);
        if (sub) {
            solutionItem = sub;
            parentCategory = gridItem;
            break;
        }
    }

    // If strictly not found, we could 404, but to be safe for "fixing 404", 
    // we might just render the industry page or a generic fallback.
    // For now, if no match, 404 is technically correct, but let's check if the user wanted that.
    if (!solutionItem) {
        // Fallback: Check if it matches a grid category slug?
        const gridMatch = industryData.industryGrid.find(g => g.slug === solutionSlug);
        if (gridMatch) {
            // It matches a category, we can show category details
            // This logic handles /industries/healthcare/telemedicine-platforms logic if it was a category
            // But the url structure is /industries/[slug]/[subslug]
        } else {
            notFound();
        }
    }

    // If we have a solution item, we construct a page for it.
    // Since we lack specific detailed content like "challenges" specific to this sub-item,
    // We will reuse the parent's generic sections but customize the Hero.

    const solutionName = solutionItem?.name || 'Specialized Solution';
    const solutionDescription = parentCategory ? `Part of our ${parentCategory.industryName} services.` : '';

    return (
        <div className="bg-brand-bg-main text-brand-dark font-sans">
            <IndustryDetailHero
                headingTagline={industryData.heroTagline} // Keep parent tagline or "Our Solution"
                heading={solutionName}
                headingSpan=""
                description={solutionDescription + " " + industryData.heroContent.substring(0, 100) + "..."}
            />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Comprehensive {solutionName} Services</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Logic-Unit provides cutting-edge {solutionName} solutions tailored to your business needs.
                        We combine our deep expertise in {industryData.heroHeading} with advanced technology to drive growth and efficiency.
                    </p>
                </div>
            </div>

            <CTA
                title={`Ready to build your ${solutionName}?`}
                subtitle="Let's discuss how we can help you achieve your goals."
                buttonText="Get a Quote"
                href="/contact"
            />

            <Allies />

            <div id="contact">
                <ContactForm />
            </div>

            <FAQ faqs={industryData.faqs} />
        </div>
    );
}
