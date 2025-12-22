import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sitemap | Logic-Unit',
    description: 'Navigate through all pages and sections of the Logic-Unit website. Find services, industries, company information, and resources.',
};

export default function SitemapPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6 leading-tight">
                            Sitemap
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore all pages and sections of our website. Find exactly what you're looking for.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sitemap Content */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Main Pages */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold text-brand-primary mb-6 flex items-center">
                                <span className="mr-3">🏠</span>
                                Main Pages
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insights" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Insights
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/clients" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Partners & Clients
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* AI Services */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold text-brand-primary mb-6 flex items-center">
                                <span className="mr-3">🤖</span>
                                AI Services
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/ai-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        LU AI Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ai-development-services" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        AI Development Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/enterprise-ai-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Enterprise AI Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/generative-ai-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Generative AI Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ai-agent-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        AI Agent Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ai-chatbot-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        AI Chatbot Development
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Core Services */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold text-brand-primary mb-6 flex items-center">
                                <span className="mr-3">⚙️</span>
                                Core Services
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        All Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/erp-enterprise-systems" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        ERP & Enterprise Systems
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/web-applications-saas" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Web Applications & SaaS
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/cloud-infrastructure" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Cloud & Infrastructure
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/bespoke-mobile-apps-engineering" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Mobile Apps Engineering
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/crm-customer-platforms" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        CRM & Customer Platforms
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Industries */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold text-brand-primary mb-6 flex items-center">
                                <span className="mr-3">🏭</span>
                                Industries
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/industries" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        All Industries
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/healthcare-software-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Healthcare
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/fintech-software-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        FinTech
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/banking-software-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Banking
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/retail-software-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Retail
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/manufacturing-software-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Manufacturing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/logistics-software-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Logistics
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Development Services */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold text-brand-primary mb-6 flex items-center">
                                <span className="mr-3">💻</span>
                                Development
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services/custom-erp-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Custom ERP Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/saas-mvp-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        SaaS MVP Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/native-ios-engineering" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Native iOS Engineering
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/native-android-engineering" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Native Android Engineering
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/wordpress-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        WordPress Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/e-commerce-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        E-commerce Development
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Consulting & Support */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold text-brand-primary mb-6 flex items-center">
                                <span className="mr-3">🎯</span>
                                Consulting
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services/consultancy-support" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Consultancy & Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/software-consulting" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Software Consulting
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/devops-consulting" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        DevOps Consulting
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/software-modernization" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Software Modernization
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/security-assessment" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Security Assessment
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/delivery-models" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Delivery Models
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal & Resources */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold text-brand-primary mb-6 flex items-center">
                                <span className="mr-3">📄</span>
                                Legal & Info
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/privacy" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Terms of Service
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        {/* Cloud & DevOps */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold text-brand-primary mb-6 flex items-center">
                                <span className="mr-3">☁️</span>
                                Cloud & DevOps
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services/cloud-architecture-deployment" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Cloud Architecture
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/devops-ci-cd-automation" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        DevOps & CI/CD
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/containerization-docker-kubernetes" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Containerization
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/cloud-security-optimization" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Cloud Security
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* CMS & Web */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold text-brand-primary mb-6 flex items-center">
                                <span className="mr-3">🌐</span>
                                CMS & Web
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services/cms-web-rebuilds" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        CMS & Web Rebuilds
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/headless-cms-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Headless CMS
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/shopify-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Shopify Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/webflow-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Webflow Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/custom-website-development" className="text-gray-700 hover:text-brand-primary font-medium transition-colors flex items-center group">
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        Custom Websites
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}

        </main>
    );
}
