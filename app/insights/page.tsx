import React from 'react';
import { fetchPosts } from '@/lib/api';
import CTA from '@/components/sections/CTA';
import ContactForm from '@/components/sections/ContactForm';
import InsightsList from '@/components/insights_page/InsightsList';

export const dynamic = 'force-dynamic'; // Ensure fresh data on every request

const InsightsPage = async () => {
  const posts = await fetchPosts();

  return (
    <div className="bg-brand-bg-main">
      <section className="bg-white pt-28 pb-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent pb-2">
            Insights & Resources
          </h1>
          <p className="mt-4 text-lg text-brand-dark/80 max-w-3xl mx-auto">
            Your hub for the latest industry trends, expert analysis, and deep dives into the technologies shaping our world.
          </p>
        </div>
      </section>

      <InsightsList initialPosts={posts} />


      <CTA
        title="Have a Project in Mind?"
        subtitle="Let's discuss how our expertise can bring your vision to life. Contact us for a free consultation."
        buttonText="Get in Touch"
        href="/contact"
      />
    </div>
  );
};

export default InsightsPage;

