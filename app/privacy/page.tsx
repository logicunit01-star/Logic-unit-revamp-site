import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Logic-Unit',
    description: 'Learn how Logic-Unit collects, uses, and protects your personal information. Our commitment to data privacy and security.',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/5">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6 leading-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
                        </p>
                        <p className="text-sm text-gray-500 mt-4">
                            Last Updated: December 19, 2025
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg max-w-none">

                        {/* Introduction */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">1. Introduction</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Logic-Unit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">2. Information We Collect</h2>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">2.1 Personal Information</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may collect personal information that you voluntarily provide to us, including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Name and contact information (email address, phone number, mailing address)</li>
                                <li>Company name and job title</li>
                                <li>Project requirements and business needs</li>
                                <li>Payment and billing information</li>
                                <li>Communication preferences</li>
                            </ul>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">2.2 Automatically Collected Information</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                When you visit our website, we automatically collect certain information about your device and browsing behavior:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>IP address and geolocation data</li>
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </div>

                        {/* How We Use Your Information */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use the information we collect for various purposes, including:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Providing, maintaining, and improving our services</li>
                                <li>Responding to your inquiries and providing customer support</li>
                                <li>Processing transactions and sending related information</li>
                                <li>Sending marketing communications (with your consent)</li>
                                <li>Analyzing usage patterns to enhance user experience</li>
                                <li>Detecting, preventing, and addressing technical issues and security threats</li>
                                <li>Complying with legal obligations and enforcing our terms</li>
                            </ul>
                        </div>

                        {/* Information Sharing */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">4. Information Sharing and Disclosure</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business (e.g., hosting, analytics, payment processing)</li>
                                <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets, your information may be transferred</li>
                                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
                                <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
                            </ul>
                        </div>

                        {/* Data Security */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">5. Data Security</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Encryption of data in transit and at rest</li>
                                <li>Regular security audits and vulnerability assessments</li>
                                <li>Access controls and authentication mechanisms</li>
                                <li>Employee training on data protection practices</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* Cookies and Tracking */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">6. Cookies and Tracking Technologies</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. Note that disabling cookies may affect website functionality.
                            </p>
                        </div>

                        {/* Your Rights */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">7. Your Privacy Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Objection:</strong> Object to the processing of your information</li>
                                <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
                                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                To exercise these rights, please contact us at <a href="mailto:privacy@logic-unit.com" className="text-brand-primary hover:underline">privacy@logic-unit.com</a>.
                            </p>
                        </div>

                        {/* International Transfers */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">8. International Data Transfers</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
                            </p>
                        </div>

                        {/* Children's Privacy */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">9. Children's Privacy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                            </p>
                        </div>

                        {/* Changes to Policy */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">10. Changes to This Privacy Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">11. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <p className="text-gray-700 mb-2"><strong>Logic-Unit</strong></p>
                                <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@logic-unit.com" className="text-brand-primary hover:underline">privacy@logic-unit.com</a></p>
                                <p className="text-gray-700">Address: Houston, Texas, USA</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </main>
    );
}
