'use client';

import { redirect } from 'next/navigation';
import { getServiceCanonicalPath } from '@/constants';

interface PageProps {
    params: {
        slug: string[];
    };
}

export default function CatchAllServicePage({ params }: PageProps) {
    // Get the last segment (the actual service slug)
    const serviceSlug = params.slug[params.slug.length - 1];

    // Redirect to the canonical single-slug path
    const canonicalPath = getServiceCanonicalPath(serviceSlug);
    redirect(canonicalPath);
}
