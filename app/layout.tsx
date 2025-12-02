import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Logic-Unit',
    default: 'Logic-Unit | Architecting the Digital Future',
  },
  description: 'Expert full-stack architecture and digital solutions for modern enterprises. Specializing in AI, ERP, cloud solutions, and digital transformation.',
  keywords: ['software development', 'AI solutions', 'enterprise systems', 'digital transformation', 'ERP development', 'cloud architecture', 'custom software'],
  authors: [{ name: 'Logic-Unit' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://logic-unit.com',
    siteName: 'Logic-Unit',
    title: 'Logic-Unit | Architecting the Digital Future',
    description: 'Expert full-stack architecture and digital solutions for modern enterprises.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic-Unit | Architecting the Digital Future',
    description: 'Expert full-stack architecture and digital solutions for modern enterprises.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased text-brand-dark bg-brand-bg-main font-sans flex flex-col min-h-screen" suppressHydrationWarning={true}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* GSAP Scripts - loaded after body */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}