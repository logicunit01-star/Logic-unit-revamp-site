import React from 'react';

const COMPLIANCE_BADGES = [
    { name: 'GDPR Compliant', icon: '🛡️' },
    { name: 'HIPAA Ready', icon: '⚕️' },
    { name: 'ISO 27001', icon: '🔒' },
    { name: 'SOC 2 Type II', icon: '✅' },
    { name: 'PCI DSS', icon: '💳' },
];

const ComplianceSection: React.FC = () => {
    return (
        <section className="py-12 bg-brand-bg-secondary border-y border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold font-heading text-brand-dark">Enterprise-Grade Compliance</h3>
                        <p className="text-sm text-brand-gray">We adhere to the strictest global security standards.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {COMPLIANCE_BADGES.map((badge, index) => (
                            <div key={index} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                                <span className="text-2xl">{badge.icon}</span>
                                <span className="font-semibold text-brand-dark text-sm">{badge.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceSection;
