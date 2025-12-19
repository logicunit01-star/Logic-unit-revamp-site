import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Logic-Unit',
    description: 'Review the terms and conditions governing the use of Logic-Unit services and website.',
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-secondary/5 via-white to-brand-primary/5">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6 leading-tight">
                            Terms of
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Please read these terms carefully before using our services. By accessing our website or services, you agree to be bound by these terms.
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

                        {/* Acceptance of Terms */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Welcome to Logic-Unit. These Terms of Service ("Terms") govern your access to and use of our website, services, and products (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                If you do not agree to these Terms, you may not access or use our Services. We reserve the right to modify these Terms at any time, and your continued use of the Services constitutes acceptance of any changes.
                            </p>
                        </div>

                        {/* Services Description */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">2. Services Description</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Logic-Unit provides custom software development, AI development, enterprise systems, cloud infrastructure, mobile applications, and related technology consulting services. Our Services include but are not limited to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Custom software development and engineering</li>
                                <li>AI and machine learning solutions</li>
                                <li>ERP and enterprise system implementation</li>
                                <li>Cloud architecture and DevOps services</li>
                                <li>Mobile application development</li>
                                <li>Web development and SaaS platforms</li>
                                <li>Technology consulting and support</li>
                            </ul>
                        </div>

                        {/* User Obligations */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">3. User Obligations</h2>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">3.1 Acceptable Use</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Violate any applicable laws, regulations, or third-party rights</li>
                                <li>Use the Services to transmit harmful, offensive, or illegal content</li>
                                <li>Attempt to gain unauthorized access to our systems or networks</li>
                                <li>Interfere with or disrupt the Services or servers</li>
                                <li>Reverse engineer, decompile, or disassemble any software or technology</li>
                                <li>Use automated systems to access the Services without permission</li>
                            </ul>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">3.2 Account Security</h3>
                            <p className="text-gray-700 leading-relaxed">
                                If you create an account with us, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
                            </p>
                        </div>

                        {/* Intellectual Property */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">4. Intellectual Property Rights</h2>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">4.1 Our Intellectual Property</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, software, and design, are owned by Logic-Unit or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                            </p>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">4.2 Client-Developed Work</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For custom development projects, intellectual property rights will be governed by the specific project agreement or statement of work. Unless otherwise agreed in writing:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Upon full payment, you will own the custom code developed specifically for your project</li>
                                <li>Logic-Unit retains rights to any pre-existing code, frameworks, or tools used in development</li>
                                <li>Logic-Unit may use generalized knowledge and experience gained from projects in future work</li>
                            </ul>
                        </div>

                        {/* Payment Terms */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">5. Payment Terms</h2>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">5.1 Fees and Billing</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Fees for our Services will be specified in project proposals, statements of work, or service agreements. Payment terms include:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>All fees are in USD unless otherwise specified</li>
                                <li>Payment is due according to the agreed schedule (e.g., milestone-based, monthly, or upon completion)</li>
                                <li>Late payments may incur interest charges of 1.5% per month or the maximum allowed by law</li>
                                <li>All fees are non-refundable unless otherwise stated in your agreement</li>
                            </ul>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">5.2 Taxes</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Fees do not include applicable taxes, duties, or levies. You are responsible for all taxes associated with your purchase, except for taxes based on Logic-Unit's income.
                            </p>
                        </div>

                        {/* Project Delivery */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">6. Project Delivery and Timelines</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We strive to deliver projects on time and to specification. However:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Timelines are estimates and may be affected by scope changes, client delays, or unforeseen circumstances</li>
                                <li>Client cooperation and timely provision of required materials are essential for meeting deadlines</li>
                                <li>Delays caused by client actions or inactions may result in timeline adjustments and additional fees</li>
                                <li>We will communicate proactively about any potential delays or issues</li>
                            </ul>
                        </div>

                        {/* Warranties and Disclaimers */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">7. Warranties and Disclaimers</h2>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">7.1 Limited Warranty</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We warrant that our Services will be performed in a professional and workmanlike manner consistent with industry standards. For custom software development, we typically provide a warranty period (as specified in your agreement) during which we will fix defects at no additional charge.
                            </p>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">7.2 Disclaimer</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                EXCEPT AS EXPRESSLY PROVIDED IN YOUR SERVICE AGREEMENT, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                            </p>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">8. Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Logic-Unit shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                                <li>Our total liability for any claims arising from or related to the Services shall not exceed the amount paid by you for the Services in the 12 months preceding the claim</li>
                                <li>We are not liable for delays or failures due to circumstances beyond our reasonable control</li>
                            </ul>
                        </div>

                        {/* Confidentiality */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">9. Confidentiality</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We respect the confidentiality of your business information. Both parties agree to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Maintain confidentiality of proprietary information disclosed during the engagement</li>
                                <li>Use confidential information only for the purpose of providing or receiving Services</li>
                                <li>Not disclose confidential information to third parties without consent</li>
                                <li>Return or destroy confidential information upon request or termination of services</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                For sensitive projects, we are happy to execute a separate Non-Disclosure Agreement (NDA).
                            </p>
                        </div>

                        {/* Termination */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">10. Termination</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Either party may terminate a service agreement according to the terms specified in that agreement. Generally:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Termination for convenience may require written notice (typically 30 days)</li>
                                <li>Either party may terminate immediately for material breach that remains uncured after written notice</li>
                                <li>Upon termination, you must pay for all services rendered up to the termination date</li>
                                <li>Certain provisions (e.g., confidentiality, intellectual property, payment obligations) survive termination</li>
                            </ul>
                        </div>

                        {/* Indemnification */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">11. Indemnification</h2>
                            <p className="text-gray-700 leading-relaxed">
                                You agree to indemnify and hold harmless Logic-Unit, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
                            </p>
                        </div>

                        {/* Dispute Resolution */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">12. Dispute Resolution</h2>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">12.1 Governing Law</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.
                            </p>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">12.2 Arbitration</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Any disputes arising from these Terms or the Services shall be resolved through binding arbitration in Houston, Texas, in accordance with the rules of the American Arbitration Association, except where prohibited by law.
                            </p>
                        </div>

                        {/* General Provisions */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">13. General Provisions</h2>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">13.1 Entire Agreement</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                These Terms, together with any service agreements and our Privacy Policy, constitute the entire agreement between you and Logic-Unit regarding the Services.
                            </p>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">13.2 Severability</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                            </p>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">13.3 Waiver</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.
                            </p>

                            <h3 className="text-2xl font-semibold text-brand-dark mb-3 mt-6">13.4 Assignment</h3>
                            <p className="text-gray-700 leading-relaxed">
                                You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4">14. Contact Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <p className="text-gray-700 mb-2"><strong>Logic-Unit</strong></p>
                                <p className="text-gray-700 mb-2">Email: <a href="mailto:legal@logic-unit.com" className="text-brand-primary hover:underline">legal@logic-unit.com</a></p>
                                <p className="text-gray-700">Address: Houston, Texas, USA</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </main>
    );
}
