
import React from 'react';
import Link from 'next/link';

const Breadcrumb: React.FC = () => {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-brand-dark/60">
                <li>
                    <Link href="/" className="hover:text-brand-primary">Home</Link>
                </li>
                <li>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </li>
                <li className="font-semibold text-brand-dark">
                    Service
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
