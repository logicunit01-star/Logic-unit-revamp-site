import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const STRAPI_URL = 'https://backend.logic-unit.com';
        const STRAPI_TOKEN =
            '95fa44ee2347128838dbecf04d64661a83587cff79f2adcf9b53b4d5f6674c2763f72e31547f516f117fcb9d3b10285eb54a8224570f3cb23ce973074ab175158d726c7b9fa63278ac6f78eb8454e3e0f91596d838e22205d3f849869d7532d7fc60ca2f94e200471f32281652bea37820e8d54c30d14c356e85802b9f692955';

        // Parse JSON body
        const body = await req.json();

        console.log('Received payload:', body);

        if (!body.data) {
            return NextResponse.json(
                { error: { message: 'Missing data field' } },
                { status: 400 }
            );
        }

        // Send to Strapi
        const strapiResponse = await fetch(
            `${STRAPI_URL}/api/form-submissions`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${STRAPI_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }
        );

        const responseText = await strapiResponse.text();

        if (!strapiResponse.ok) {
            console.error('Strapi error:', responseText);
            return NextResponse.json(
                { error: { message: responseText } },
                { status: strapiResponse.status }
            );
        }

        return NextResponse.json(JSON.parse(responseText), { status: 200 });

    } catch (error: any) {
        console.error('API Route Error:', error);
        return NextResponse.json(
            { error: { message: error.message || 'Internal server error' } },
            { status: 500 }
        );
    }
}
