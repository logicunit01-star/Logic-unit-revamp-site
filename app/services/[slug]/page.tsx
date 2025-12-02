'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { ChevronRightIcon, SERVICES_DATA } from '@/constants';
import ContactForm from '@/components/sections/ContactForm';
import Partners from '@/components/sections/Partners';
import StickyNav from '@/components/ui/StickyNav';

// Note: Metadata cannot be exported from client components
// For SEO, consider converting this to a server component or using next/head in a wrapper

const ServiceBreadcrumb: React.FC<{ title: string }> = ({ title }) => (
  <nav aria-label="Breadcrumb" className="mb-6">
    <ol className="flex items-center space-x-2 text-sm text-brand-dark/60">
      <li><Link href="/" className="hover:text-brand-primary">Home</Link></li>
      <li><span className="text-gray-400">/</span></li>
      <li><Link href="/services" className="hover:text-brand-primary">Capabilities</Link></li>
      <li><span className="text-gray-400">/</span></li>
      <li className="font-medium text-brand-dark truncate max-w-[200px] md:max-w-none">{title}</li>
    </ol>
  </nav>
);

const ServiceDetailPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const data = SERVICES_DATA.find(s => s.slug === slug);

  if (!data) {
    return <div className="py-32 text-center text-2xl">Service Not Found</div>;
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const navItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Methodology', href: '#process' },
    { name: 'Technology', href: '#tech' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="bg-brand-bg-main text-brand-dark font-sans">
      <section className="bg-brand-bg-main pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ServiceBreadcrumb title={data.title} />
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                Center of Excellence
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-brand-dark leading-[1.1] mb-6 tracking-tight">
                {data.title}
              </h1>
              <p className="text-lg text-brand-gray mb-8 leading-relaxed max-w-xl font-light">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-brand-dark text-white hover:bg-brand-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-brand-primary/20 inline-block">
                  Schedule Consultation
                </a>
                <a href="#solutions" className="bg-white text-brand-dark border border-gray-200 hover:border-brand-primary hover:text-brand-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 inline-block">
                  View Capabilities
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 aspect-[4/3]">
                <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyNav items={navItems} />

      <section className="bg-brand-dark py-16 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
            {data.stats && data.stats.map((stat, index) => (
              <div key={index} className="text-center px-4 group cursor-default">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 font-heading mb-2 group-hover:scale-105 transition-transform duration-500">{stat.value}</p>
                <p className="text-xs md:text-sm text-brand-metallic uppercase tracking-[0.2em] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 sticky top-32">
              <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Vision</span>
              <h2 className="text-4xl font-bold font-heading text-brand-dark mb-8 leading-tight">
                Engineering the <br /> Future of <span className="text-brand-primary">{data.title.split(' ')[0]}</span>
              </h2>
              <a href="#contact" className="inline-flex items-center text-brand-dark font-bold border-b-2 border-brand-dark hover:border-brand-primary hover:text-brand-primary transition-colors pb-1">
                Speak to an Architect <ChevronRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl text-brand-dark/80 leading-relaxed font-light mb-12 border-l-4 border-brand-secondary pl-8">
                {data.longDescription}
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {data.benefits.slice(0, 2).map((benefit, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-brand-dark mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                      {benefit.title}
                    </h4>
                    <p className="text-brand-gray text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 bg-brand-bg-secondary relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">Capabilities</span>
            <h2 className="text-4xl font-bold font-heading text-brand-dark">Core Competencies</h2>
            <p className="mt-4 text-brand-gray text-lg">Comprehensive services tailored to drive your digital evolution.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.subServices.map((service, index) => {
              const linkedService = SERVICES_DATA.find(s => s.title === service);
              return (
                <div
                  key={index}
                  onClick={() => linkedService && router.push(`/services/${linkedService.slug}`)}
                  className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 group flex flex-col justify-between ${linkedService ? 'cursor-pointer' : ''}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-bg-secondary flex items-center justify-center text-brand-dark font-heading font-bold text-xl group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      0{index + 1}
                    </div>
                    {linkedService && <ChevronRightIcon className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors transform group-hover:translate-x-1" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">{service}</h3>
                    <div className="w-8 h-0.5 bg-gray-200 group-hover:bg-brand-secondary group-hover:w-12 transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-32 bg-brand-dark text-white relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs mb-4 block">The Advantage</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 leading-tight">Why Leaders Choose Logic-Unit</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                We move beyond traditional vendor relationships to become strategic partners. Our approach integrates deep domain knowledge with technical rigor to deliver {data.title} excellence.
              </p>
              <div className="grid gap-8">
                {data.benefits.map((benefit, index) => (
                  <div key={index} className="pl-6 border-l-2 border-brand-primary/30 hover:border-brand-primary transition-colors duration-300 group">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-secondary transition-colors">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img src={data.heroImage} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 grayscale group-hover:grayscale-0" alt="Visual" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-brand-dark">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-white">Enterprise Grade</p>
                    <p className="text-xs text-gray-300">Security & Scalability Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {data.caseStudies && data.caseStudies.length > 0 && (
        <section id="success-stories" className="py-24 bg-brand-bg-secondary scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div>
                <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">Proven Results</span>
                <h2 className="text-4xl font-bold font-heading text-brand-dark">Realized Value</h2>
              </div>
              <Link href="/case-studies" className="hidden md:inline-block text-brand-dark font-bold border-b border-brand-dark hover:text-brand-primary hover:border-brand-primary transition-colors pb-1">View Portfolio</Link>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {data.caseStudies.map((study, index) => (
                <div key={index} className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3 block">Case Study</span>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4 leading-tight">{study.title}</h3>
                    <p className="text-gray-300 text-base line-clamp-2 mb-6">{study.description}</p>
                    <span className="text-white font-bold text-sm flex items-center gap-2 border-b border-white/30 pb-1 w-fit group-hover:border-brand-secondary transition-colors">
                      Explore Story <ChevronRightIcon className="w-4 h-4 text-brand-secondary" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.process && data.process.length > 0 && (
        <section id="process" className="py-24 bg-white scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">Methodology</span>
              <h2 className="text-4xl font-bold font-heading text-brand-dark mb-6">Execution Framework</h2>
              <p className="text-lg text-brand-gray">A rigorous, iterative process designed to mitigate risk and accelerate value delivery.</p>
            </div>
            <div className="max-w-5xl mx-auto space-y-6">
              {data.process.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 md:items-center group bg-brand-bg-main p-8 rounded-xl border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white border border-gray-200 text-xl font-bold text-brand-dark font-heading rounded-full shadow-sm group-hover:border-brand-primary group-hover:text-brand-primary transition-all">0{index + 1}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">{step.title}</h3>
                    <p className="text-brand-gray leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="tech" className="py-24 bg-brand-bg-secondary border-y border-gray-200 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">Technology Ecosystem</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {data.techStack && data.techStack.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm w-full flex items-center justify-center h-32 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-primary/20 group">
                <img src={tech} alt="Tech" className="max-h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.industries && data.industries.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6">Industries We Empower</h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">Tailored applications driving sector-specific growth.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.industries.map((industry, index) => (
                <div key={index} className="bg-brand-bg-secondary p-8 rounded-xl border border-transparent hover:border-brand-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-default">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-brand-dark border border-gray-100 group-hover:border-brand-primary group-hover:text-brand-primary transition-colors shadow-sm">
                    <span className="font-bold text-lg">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{industry.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.testimonials && data.testimonials.length > 0 && (
        <section className="py-32 bg-brand-dark relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-center text-4xl font-bold font-heading text-white mb-20">Partner Perspectives</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {data.testimonials.map((t, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-brand-primary/50 transition-all duration-500 hover:-translate-y-1">
                  <div className="text-brand-primary text-6xl font-serif leading-none mb-6 opacity-50">"</div>
                  <p className="text-xl text-white/90 italic mb-8 font-light leading-relaxed relative z-10">{t.quote}</p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center font-bold text-white text-xl shadow-lg">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white">{t.author}</p>
                      <p className="text-sm text-brand-secondary uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div id="contact">
        <ContactForm />
      </div>
      {data.faqs && data.faqs.length > 0 && (
        <section id="faq" className="py-24 bg-white scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">Inquiries</span>
                <h2 className="text-3xl font-bold font-heading text-brand-dark mb-6">Technical Queries</h2>
                <p className="text-brand-gray leading-relaxed">
                  Common questions regarding {data.title} implementation, security, and scalability.
                </p>
              </div>
              <div className="md:col-span-8">
                <div className="divide-y divide-gray-200">
                  {data.faqs.map((faq, index) => (
                    <div key={index} className="py-6 first:pt-0 last:pb-0">
                      <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center text-left group">
                        <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors pr-8">{faq.question}</h3>
                        <span className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-brand-primary transition-all duration-300 ${openFaqIndex === index ? 'bg-brand-primary text-white rotate-180 border-brand-primary' : 'bg-white'}`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </span>
                      </button>
                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                        <div className="text-brand-gray leading-relaxed text-base pr-12 pt-4">{faq.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceDetailPage;
