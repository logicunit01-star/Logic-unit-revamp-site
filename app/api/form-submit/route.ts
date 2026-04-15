import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const STRAPI_URL = 'http://139.59.8.119:1337';
        const STRAPI_TOKEN =
            '692fdfb5f72911e1cb3bc069cc4aa63ec56f076fbcb8b042b094b7013752553878af499631473d9e0c0e63383c702c766f2870640848d5886aa64ae00b04fe5b4e16290f37dc24ad4cf0b64a13d47d41f31af9de3974e01fca47f3659107232e1ae2817dd88fd2e0f5db7b100fdd52de3064d35a25083a820e30f9120a4721e2';

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
