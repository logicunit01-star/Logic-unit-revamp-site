'use client';


import React, { useState } from 'react';
import { CLIENT_LOGOS, ChevronLeftIcon, ChevronRightIcon } from '@/constants';

const testimonials = [
  {
    quote: "Logic Unit rebuilt our CRM from the ground up. Lead tracking, automation, reporting — everything works exactly how sales teams actually operate. Zero bloat, just results.",
    name: "Chris Umeh",
    title: "Chief Technology Officer (CTO)",
    avatar: "/Chris-Umeh.jpg"
  },
  {
    quote: "We worked with Logic Unit on ERP customization and complex API integrations. Their understanding of financial workflows and system security was impressive.",
    name: "Glynis Shulters",
    title: "Chief Information Officer (CIO",
    avatar: "/Glynis-Shulters.png"
  },
  {
    quote: "Logic Unit developed ERP modules that streamlined our logistics and warehouse operations. Performance and data accuracy improved significantly.",
    name: "Silvan Mundorf",
    title: "Head of Engineering",
    avatar: "/Silvan-Mundorf.jpg"
  },
  {
    quote: "From planning to deployment, Logic Unit handled our SaaS platform with professionalism. They communicated clearly and delivered exactly what was promised.",
    name: "Gemma Louise",
    title: "Director of Technology",
    avatar: "/Gemma-Louise.jpeg"
  },
  {
    quote: "Logic Unit built a CRM system tailored to our sales pipeline. Reporting accuracy improved and our sales team adopted it immediately.",
    name: "Troy Tilton",
    title: "VP of Digital Transformation",
    avatar: "/Troy-Tilton.jpg"
  },
  {
    quote: "They replaced several disconnected tools with a unified ERP solution. Logic Unit understands business processes, not just code.",
    name: "Stefanie Clay",
    title: "Head of Operations",
    avatar: "/Stefanie-Clay.jpeg"
  },
  {
    quote: "Logic Unit delivered a secure enterprise application integrating finance, HR, and operations. The system is stable and scalable.",
    name: "Paul Berntsen",
    title: "IT Director",
    avatar: "/Paul-Berntsen.jpg"
  },
  {
    quote: "Logic Unit built and maintains our CRM and automation workflows. They think strategically and execute with discipline.",
    name: "Chelcie Plowright",
    title: "Managing Director",
    avatar: "/Chelcie-Plowright.png"
  },
  {
    quote: "Our cloud-based ERP was delivered with strong performance and security. Logic Unit proved to be a dependable long-term technology partner.",
    name: "Andreas Philip",
    title: "Product Director",
    avatar: "/Andreas-Philip.jpg"
  },
  {
    quote: "Logic Unit modernized our legacy system into a clean, modern web application without any downtime. Their process was structured and efficient.",
    name: "Dakota cummings",
    title: "Head of Enterprise Systems",
    avatar: "/Dakota-Cummings.png"
  }

];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { quote, name, title, avatar } = testimonials[currentIndex];

  return (
    <section className="bg-brand-dark py-24 sm:py-32 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h4 className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Testimonials</h4>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">What Our Partners Say About Us</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Quote Mark */}
            <div className="absolute -top-12 -left-8 text-8xl text-brand-primary/20 font-serif leading-none select-none">"</div>

            <div className="relative z-10">
              <p className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-12 italic">
                {quote}
              </p>

              <div className="flex items-center justify-between border-t border-white/10 pt-8">
                <div className="flex items-center gap-6">
                  <img src={avatar} alt={name} className="w-16 h-16 rounded-full border-2 border-brand-secondary p-0.5 object-cover" />
                  <div>
                    <p className="font-bold text-white text-lg font-heading">{name}</p>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">{title}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-secondary hover:border-brand-secondary transition-all duration-300">
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <button onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-secondary hover:border-brand-secondary transition-all duration-300">
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

