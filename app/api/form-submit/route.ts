import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const STRAPI_URL = 'https://backend.logic-unit.com';
        const STRAPI_TOKEN =
            '95fa44ee2347128838dbecf04d64661a83587cff79f2adcf9b53b4d5f6674c2763f72e31547f516f117fcb9d3b10285eb54a8224570f3cb23ce973074ab175158d726c7b9fa63278ac6f78eb8454e3e0f91596d838e22205d3f849869d7532d7fc60ca2f94e200471f32281652bea37820e8d54c30d14c356e85802b9f692955';

        // Parse JSON body
        let body;
        try {
            body = await req.json();
            console.log('Received payload:', JSON.stringify(body, null, 2));
        } catch (e: any) {
            console.error('Failed to parse request JSON:', e.message);
            return NextResponse.json(
                { error: { message: 'Invalid request body' } },
                { status: 400 }
            );
        }

        if (!body.data) {
            return NextResponse.json(
                { error: { message: 'Missing data field in payload' } },
                { status: 400 }
            );
        }

        // Send to Strapi
        console.log('Forwarding to Strapi:', `${STRAPI_URL}/api/form-submissions`);
        const strapiResponse = await fetch(
            `${STRAPI_URL}/api/form-submissions`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${STRAPI_TOKEN}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(body),
            }
        );

        const responseText = await strapiResponse.text();

        if (!strapiResponse.ok) {
            console.error(`Strapi error (${strapiResponse.status}):`, responseText);
            return NextResponse.json(
                {
                    error: {
                        message: responseText || 'Unknown error from backend',
                        status: strapiResponse.status
                    }
                },
                { status: strapiResponse.status }
            );
        }

        // Try to parse as JSON, but handle case where it's not
        try {
            const result = JSON.parse(responseText);
            return NextResponse.json(result, { status: 200 });
        } catch (e: any) {
            console.warn('Strapi response was not valid JSON:', responseText);
            return NextResponse.json(
                {
                    message: 'Success, but response was not JSON',
                    rawResponse: responseText
                },
                { status: 200 }
            );
        }

    } catch (error: any) {
        console.error('API Route Error:', error);
        return NextResponse.json(
            { error: { message: error.message || 'Internal server error' } },
            { status: 500 }
        );
    }
}
