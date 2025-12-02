
const fetch = require('node-fetch'); // Try require, if fails, rely on global fetch
//sadasd
async function debugApi() {
    const POPULATE = 'populate[cover][populate]=*&populate[author][populate]=*&populate[blocks][populate]=*';
    const URL = `http://localhost:1337/api/articles?${POPULATE}`;

    console.log(`Fetching from: ${URL}`);

    try {
        const res = await fetch(URL);
        if (!res.ok) {
            console.error(`Error: ${res.status}`);
            return;
        }
        const json = await res.json();
        if (json.data && json.data.length > 0) {
            console.log('First post category:', JSON.stringify(json.data[0].attributes.category, null, 2));
        } else {
            console.log('No posts found');
        }
    } catch (e) {
        console.error('Fetch failed:', e.message);
    }
}

async function debugApiWithCategory() {
    const POPULATE = 'populate[cover][populate]=*&populate[author][populate]=*&populate[blocks][populate]=*&populate[category][populate]=*';
    const URL = `http://localhost:1337/api/articles?${POPULATE}`;

    console.log(`Fetching with category populate from: ${URL}`);

    try {
        const res = await fetch(URL);
        if (!res.ok) {
            console.error(`Error: ${res.status}`);
            return;
        }
        const json = await res.json();
        if (json.data && json.data.length > 0) {
            console.log('First post category (populated):', JSON.stringify(json.data[0].attributes.category, null, 2));
        } else {
            console.log('No posts found');
        }
    } catch (e) {
        console.error('Fetch failed:', e.message);
    }
}

// Check if global fetch exists, otherwise try to require node-fetch
if (!globalThis.fetch) {
    try {
        globalThis.fetch = require('node-fetch');
    } catch (e) {
        console.log("node-fetch not found and global fetch not available. Please install node-fetch or use Node 18+");
    }
}

if (globalThis.fetch) {
    debugApi().then(() => debugApiWithCategory());
}
