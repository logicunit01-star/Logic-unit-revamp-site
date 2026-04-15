import React from 'react';
import { CASE_STUDIES } from '@/constants';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export default async function SingleCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = CASE_STUDIES.find(s => s.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="bg-[#0A0A0A] min-h-screen text-brand-gray selection:bg-brand-primary selection:text-white">
      {/* 
        ====================================================
        HERO SECTION - Immersive Full Bleed
        ====================================================
      */}
      <section className="relative h-[85vh] min-h-[600px] flex items-end pb-20 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img src={study.heroImage} alt={study.title} className="w-full h-full object-cover scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="inline-flex items-center text-white/50 hover:text-brand-primary hover:-translate-x-2 mb-10 text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300">
            <span className="mr-2">←</span> Return to Portfolio
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-4 mb-6">
               <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/10">
                 {study.industry}
               </span>
               {study.duration && (
                 <span className="px-4 py-1.5 bg-brand-primary/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary border border-brand-primary/20">
                   {study.duration}
                 </span>
               )}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading text-white mb-8 leading-[1.1] tracking-tight">
              {study.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light border-l-2 border-brand-primary pl-6">
              {study.description}
            </p>
          </div>
        </div>
        
        {/* Abstract Glow */}
        <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-brand-primary/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      </section>

      {/* 
        ====================================================
        MAIN CONTENT - Sticky Layout 
        ====================================================
      */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* 
              LEFT COLUMN: Deep Narrative 
            */}
            <div className="lg:col-span-8 space-y-24">
              
              {/* Overview */}
              {study.overview && (
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white">Project Overview</h2>
                  <div className="prose prose-lg prose-invert text-white/60 leading-relaxed">
                    {study.overview.map((p, idx) => (
                      <p key={idx} className="mb-6">{p}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-5xl">⚠️</div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-6">The Challenge</h3>
                  <div className="space-y-4 text-white/60 text-lg leading-relaxed relative z-10">
                    {study.challenge?.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
                
                <div className="p-8 md:p-10 rounded-3xl bg-brand-primary/10 border border-brand-primary/20 hover:bg-brand-primary/20 transition-colors duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-5xl">💡</div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-6">Our Solution</h3>
                  <div className="space-y-4 text-white/70 text-lg leading-relaxed relative z-10">
                    {study.solution?.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              </div>

              {/* Development Process Timeline */}
              {study.process && study.process.length > 0 && (
                <div className="space-y-12">
                  <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white">Execution Process</h2>
                  <div className="relative border-l border-white/10 pl-8 ml-4 space-y-12">
                    {study.process.map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#0A0A0A] border-4 border-brand-primary" />
                        <span className="text-brand-primary text-sm font-bold tracking-widest uppercase mb-2 block">Phase 0{idx + 1}</span>
                        <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
                        <p className="text-white/60 text-lg leading-relaxed max-w-2xl">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Client Testimonial (Mocked/Actual) */}
              {study.testimonial && (
                <div className="relative p-12 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-brand-primary blur-[80px] opacity-30 rounded-full" />
                  <div className="relative z-10">
                    <svg className="w-12 h-12 text-brand-primary mb-8 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-2xl md:text-3xl font-heading text-white font-medium leading-relaxed mb-10">
                      "{study.testimonial.quote}"
                    </p>
                    <div>
                      <p className="text-white font-bold text-lg">{study.testimonial.author}</p>
                      <p className="text-white/50 text-sm uppercase tracking-widest mt-1">{study.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 
              RIGHT COLUMN: Sticky Context Sidebar 
            */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-8">
                
                {/* Meta Card */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="mb-8 pb-8 border-b border-white/10">
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Client</p>
                    <p className="text-2xl font-heading text-white">{study.client}</p>
                  </div>
                  
                  {study.keyFeatures && study.keyFeatures.length > 0 && (
                    <div className="mb-8">
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Core Deliverables</p>
                      <ul className="space-y-4">
                        {study.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-white/70">
                            <span className="text-brand-primary mr-3 mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {study.technologies && study.technologies.length > 0 && (
                    <div>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Tech Sandbox</p>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 bg-[#0A0A0A] rounded-lg border border-white/10 text-white/60 text-sm hover:text-white transition-colors cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Call To Action Box */}
                <div className="bg-gradient-to-br from-brand-primary to-brand-dark rounded-3xl p-8 border border-white/10 text-center shadow-[0_0_40px_rgba(var(--color-brand-primary),0.3)]">
                  <h4 className="text-xl font-heading font-bold text-white mb-3">Ready for similar impact?</h4>
                  <p className="text-white/80 text-sm mb-6">Let's blueprint your digital transformation today.</p>
                  <Link href="/contact" className="inline-block w-full py-4 bg-white text-brand-dark rounded-xl font-bold hover:bg-gray-100 transition-colors">
                    Start a Project
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ====================================================
        RESULTS & IMPACT - Sleek Metrics Grid
        ====================================================
      */}
      <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">Quantifiable <span className="text-brand-primary">Impact</span></h2>
              <p className="text-white/50 text-lg leading-relaxed font-light">The strategic difference we delivered in precise, measurable results.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {study.results?.map((res, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col justify-end min-h-[220px] hover:border-brand-primary/40 hover:bg-[#1a1a1a] transition-all duration-300 transform-gpu hover:-translate-y-1 shadow-lg shadow-black/50"
              >
                {/* Internal Glow Effect on Hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Metric value */}
                <h3 className="text-5xl md:text-6xl font-black font-heading text-white mb-3 tracking-tight z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-primary/80 transition-all duration-300 stretch-text">{res.metric}</h3>
                
                {/* Divider Line */}
                <div className="w-10 h-1 bg-white/10 mb-4 group-hover:w-full group-hover:bg-brand-primary/50 transition-all duration-500 z-10" />
                
                {/* Metric Label */}
                <p className="text-sm md:text-base text-white/60 font-medium tracking-wide z-10">{res.label}</p>
                
                {/* Abstract Data Accents */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-60 transition-opacity duration-300 text-white/50 z-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
