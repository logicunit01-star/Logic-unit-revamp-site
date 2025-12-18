
const STRAPI_URL = 'https://backend.logic-unit.com';
const TOKEN = '0f1b55c82d07f1d75be733dd09018748432a536d1e5e1bb235cd7d7e55536bc3c24648e51258ada9ede460e75fcbf84ff1c16b521b691145942fd7971e460f369685bceb9315ded3553bccb9b306633f229fc25fae30229a86f60a9e26ec34793fb09cd50247d8e347f8423cb75a3350c4a40ec2ef1fa018782780365ba540cc';

const FETCH_OPTIONS = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
    cache: 'no-store' as RequestCache,
};

export interface IndustryChildData {
    id: number;
    slug: string;
    heroHeading: string;
    heroTagline: string;
    heroHeadingSpan: string;
    heroContent: string;
    metaTitle: string;
    metaDescription: string;
    ctaHeading: string;
    ctaContent: string;
    ctabtnText: string;

    // Challenges
    challengesTagline: string;
    challengesHeading: string;
    challengesHeadingSpan: string;
    challengesContent: string;
    challenges: {
        title: string;
        description: string;
    }[];

    // Approach / Process
    approachTagline: string;
    approachHeading: string;
    approachHeadingSpan: string;
    approachContent: string;
    approaches: {
        title: string;
        description: string;
    }[];

    // Why Choose / Why Us
    whyChooseTagline: string;
    whyChooseHeading: string;
    whyChooseHeadingSpan: string;
    whyChooseContent: string;
    choose: {
        title: string;
        description: string;
    }[];

    // Engagement / CTA
    engagementTagline: string;
    engagementHeading: string;
    engagementHeadingSpan: string;
    engagementContent: string;

    // Sector / Grid
    sectorTagline: string;
    sectorHeading: string;
    sectorHeadingSpan: string;
    sectorHeadingContent: string;
    industryGrid: {
        slug: string;
        industryName: string;
        industryDescription: string;
        subIndustries: any[]; // Kept for compatibility if needed
    }[];

    // FAQ
    faqs: {
        id: number;
        question: string;
        answer: string;
    }[];
}

export async function fetchIndustryChild(slug: string): Promise<IndustryChildData | null> {
    try {
        // Construct the URL with all populations
        const url = `${STRAPI_URL}/api/industry-children?populate[industryChild][populate]=challenges&populate[industryChild][populate]=approaches&populate[industryChild][populate]=choose&populate[industryChild][populate]=industryFaq&populate[industryChild][populate]=industryGrid`;

        const res = await fetch(url, FETCH_OPTIONS);

        if (!res.ok) {
            console.error('Failed to fetch industry children:', res.status, res.statusText);
            return null;
        }

        const json = await res.json();

        if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
            return null;
        }

        // The API returns a list of "industry-children" entries (likely just one container)
        // containing a list of actual industryChild items.
        // We need to iterate through all data entries and their industryChild arrays to find the matching slug.

        let foundItem: any = null;

        for (const entry of json.data) {
            if (entry.industryChild && Array.isArray(entry.industryChild)) {
                foundItem = entry.industryChild.find((item: any) => item.slug === slug);
                if (foundItem) break;
            }
        }

        if (!foundItem) {
            return null;
        }

        return mapIndustryChild(foundItem);

    } catch (error) {
        console.error('Error fetching industry child:', error);
        return null;
    }
}

function mapIndustryChild(item: any): IndustryChildData {
    return {
        id: item.id,
        slug: item.slug,
        heroHeading: item.heroHeadng || '', // Note tyop in API response "heroHeadng"
        heroTagline: item.heroTagline || '',
        heroHeadingSpan: item.heroheadingSpan || '',
        heroContent: item.heroContent || '',
        metaTitle: item.metaTitle || '',
        metaDescription: item.metaDescription || '',
        ctaHeading: item.ctaHeading || '',
        ctaContent: item.ctaContent || '',
        ctabtnText: item.ctabtnText || '',

        challengesTagline: item.challengesTagline || '',
        challengesHeading: item.challengesHeading || '',
        challengesHeadingSpan: item.challengesheadingSpan || '',
        challengesContent: item.challengesContent || '',
        challenges: item.challenges?.map((c: any) => ({
            title: c.challengesHeading || '',
            description: c.challengesContent || '',
        })) || [],

        approachTagline: item.approachTagline || '',
        approachHeading: item.approachHeading || '',
        approachHeadingSpan: item.approachheadingSpan || '',
        approachContent: item.approachContent || '',
        approaches: item.approaches?.map((a: any) => ({
            title: a.approacesHeading || '', // Note typo in API "approacesHeading"
            description: a.approacesContent || '',
        })) || [],

        whyChooseTagline: item.whychooseTagline || '',
        whyChooseHeading: item.whychooseHeading || '',
        whyChooseHeadingSpan: item.whychooseheadingSpan || '',
        whyChooseContent: item.whychooseContent || '',
        choose: item.choose?.map((c: any) => ({
            title: c.chooseHeading || '',
            description: c.chooseContent || '',
        })) || [],

        engagementTagline: item.engagementTagline || '',
        engagementHeading: item.engagementHeading || '',
        engagementHeadingSpan: item.engagementheadingSpan || '',
        engagementContent: item.engagementContent || '',

        sectorTagline: item.sectorTagline || '',
        sectorHeading: item.sectorHeading || '',
        sectorHeadingSpan: item.sectorHeadingSpan || '',
        sectorHeadingContent: item.sectorHeadingContent || '',
        industryGrid: item.industryGrid?.map((g: any) => ({
            slug: g.slug || '',
            industryName: g.industryName || '',
            industryDescription: g.industrydesrciption || '',
            subIndustries: [], // Flat list in API, mapping to empty sub
        })) || [],

        faqs: item.industryFaq?.map((f: any, index: number) => ({
            id: f.id || index,
            question: f.question || '',
            answer: f.answer || '',
        })) || [],
    };
}

export async function fetchIndustryNavigation(): Promise<{ name: string; slug: string }[]> {
    try {
        const url = `${STRAPI_URL}/api/industry-children?populate[industryChild]=true`;
        const res = await fetch(url, {
            headers: FETCH_OPTIONS.headers,
            next: { revalidate: 3600 }
        });

        if (!res.ok) return [];

        const json = await res.json();
        if (!json.data || !Array.isArray(json.data)) return [];

        const industries: { name: string; slug: string }[] = [];

        for (const entry of json.data) {
            if (entry.industryChild && Array.isArray(entry.industryChild)) {
                entry.industryChild.forEach((item: any) => {
                    if (item.slug && item.heroHeadng) { // Using heroHeadng as the name
                        industries.push({
                            name: item.heroHeadng,
                            slug: item.slug
                        });
                    }
                });
            }
        }

        return industries;
    } catch (error) {
        console.error('Error fetching industry navigation:', error);
        return [];
    }
}
