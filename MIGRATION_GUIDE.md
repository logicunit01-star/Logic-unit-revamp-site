# Migration Guide: Hybrid Vite to Pure Next.js App Router

## 1. Executive Summary
This project currently operates as a hybrid application, mixing Next.js file structures (`app/`) with a Vite/React Router runtime (`index.html`, `App.tsx`). The goal is to eliminate the unstable hybrid state by fully migrating to the **Next.js App Router**. This will improve performance, enable Server Components, fix SEO (metadata), and provide a stable routing architecture.

**Key Changes:**
- **Removal**: Vite, React Router, `index.html`, `App.tsx`.
- **Adoption**: Next.js App Router (`app/layout.tsx`, `app/page.tsx`), `next/link`, `next/image`.
- **Enhancement**: A scalable Global Theme System using CSS Variables and Tailwind.

---

## 2. Full Migration Plan

### Phase 1: Clean Up & Dependencies
1.  **Remove Vite Artifacts**:
    - Delete `vite.config.ts`
    - Delete `index.html`
    - Delete `index.tsx`
    - Delete `App.tsx` (after extracting logic)
    - Delete `next-shim.tsx` (if present)
2.  **Update `package.json`**:
    - Remove: `vite`, `@vitejs/plugin-react`, `react-router-dom`.
    - Ensure: `next`, `react`, `react-dom` are present.
    - Add Dev: `tailwindcss`, `postcss`, `autoprefixer`.
3.  **Install Dependencies**:
    ```bash
    npm uninstall vite @vitejs/plugin-react react-router-dom
    npm install next@latest react@latest react-dom@latest
    npm install -D tailwindcss postcss autoprefixer
    ```

### Phase 2: Configuration
1.  **Initialize Tailwind**:
    ```bash
    npx tailwindcss init -p
    ```
2.  **Configure `next.config.js`** (Create if missing):
    ```javascript
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      images: {
        domains: ['cdn.yourdomain.com'], // Add any external image domains here
      },
    };
    module.exports = nextConfig;
    ```

### Phase 3: Folder Structure & Routing
1.  **Establish `app/` Structure**: Ensure `app/layout.tsx` and `app/globals.css` exist.
2.  **Migrate Pages**: Move logic from `components/*Page.tsx` to `app/**/page.tsx` (see File Mapping below).
3.  **Migrate Components**: Organize `components/` into `ui`, `layout`, `sections`.

### Phase 4: Code Refactoring
1.  **Routing**: Replace `react-router-dom` hooks (`useParams`, `useLocation`) with `next/navigation` (`useParams`, `usePathname`).
2.  **Links**: Replace `<Link to="...">` with `<Link href="...">` from `next/link`.
3.  **Images**: Replace `<img>` with `<Image />` from `next/image` where appropriate (optional but recommended).
4.  **SEO**: Replace `document.title` or `Helmet` with Next.js `metadata` exports.

---

## 3. Folder Structure Blueprint

```text
.
├── app/
│   ├── layout.tsx             # Root Layout (Html, Body, Providers, Header, Footer)
│   ├── page.tsx               # Home Page
│   ├── globals.css            # Global Styles (imports theme.css)
│   ├── not-found.tsx          # 404 Page
│   ├── (site)/                # Optional route group
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/        # Dynamic Route
│   │   │       └── page.tsx
│   │   ├── insights/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── ... (other routes)
├── components/
│   ├── ui/                    # Reusable UI (Buttons, Cards)
│   ├── layout/                # Header, Footer, Sidebar
│   ├── sections/              # Page-specific sections (Hero, Features)
├── lib/
│   ├── api.ts
│   ├── cms.ts
│   └── utils.ts
├── public/                    # Static assets (images, fonts)
├── styles/
│   └── theme.css              # CSS Variables
├── tailwind.config.js
└── package.json
```

---

## 4. File-by-File Mapping Table

| Current File | New Location | Action Required |
| :--- | :--- | :--- |
| `App.tsx` | `app/layout.tsx` | Extract `Header`, `Footer`, `ScrollToTop` logic. Remove `HashRouter`. |
| `components/HomePage.tsx` | `app/page.tsx` | Convert to default export function `Page()`. |
| `components/ServicesPage.tsx` | `app/services/page.tsx` | Rename to `Page`. |
| `components/ServiceDetailPage.tsx` | `app/services/[slug]/page.tsx` | Use `params.slug` instead of `useParams()`. Fetch data async if possible. |
| `components/AIPage.tsx` | `app/intelligence/page.tsx` | Rename to `Page`. |
| `components/InsightsPage.tsx` | `app/insights/page.tsx` | Rename to `Page`. |
| `components/BlogPost.tsx` | `app/insights/[slug]/page.tsx` | Use `params.slug`. |
| `components/CaseStudiesPage.tsx` | `app/case-studies/page.tsx` | Rename to `Page`. |
| `components/IndustriesPage.tsx` | `app/industries/page.tsx` | Rename to `Page`. |
| `components/IndustryDetailPage.tsx` | `app/industries/[slug]/page.tsx` | Use `params.slug`. |
| `components/AboutPage.tsx` | `app/about/page.tsx` | Rename to `Page`. |
| `components/ClientsPage.tsx` | `app/clients/page.tsx` | Rename to `Page`. |
| `components/ContactPage.tsx` | `app/contact/page.tsx` | Rename to `Page`. |
| `components/Header.tsx` | `components/layout/Header.tsx` | Replace `Link to` with `Link href`. Use `usePathname`. |
| `components/Footer.tsx` | `components/layout/Footer.tsx` | Replace `Link to` with `Link href`. |

---

## 5. Global Theme System

### A. `styles/theme.css`
Create this file to define your design tokens as CSS variables.

```css
:root {
  /* Brand Colors */
  --color-brand-primary: #005EB8;
  --color-brand-secondary: #00A950;
  --color-brand-dark: #0A1929;
  --color-brand-accent: #0085CA;
  --color-brand-gray: #4B5563;
  --color-brand-metallic: #94A3B8;

  /* Backgrounds */
  --color-bg-main: #FFFFFF;
  --color-bg-secondary: #F5F7FA;

  /* Typography */
  --font-sans: 'Satoshi', sans-serif;
  --font-heading: 'Clash Display', sans-serif;
}

/* Dark Mode Overrides (Optional) */
.dark {
  --color-bg-main: #0A1929;
  --color-bg-secondary: #112540;
  --color-brand-dark: #FFFFFF;
  --color-brand-gray: #9CA3AF;
}
```

### B. `app/globals.css`
Update your global CSS to import the theme and Tailwind.

```css
@import '../styles/theme.css';
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-brand-bg-main text-brand-dark font-sans antialiased;
  }
}
```

### C. `tailwind.config.js`
Map the CSS variables to Tailwind classes.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          dark: 'var(--color-brand-dark)',
          accent: 'var(--color-brand-accent)',
          gray: 'var(--color-brand-gray)',
          metallic: 'var(--color-brand-metallic)',
          'bg-main': 'var(--color-bg-main)',
          'bg-secondary': 'var(--color-bg-secondary)',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### D. Theme Toggle Component
`components/ui/ThemeToggle.tsx`

```tsx
'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

---

## 6. Routing Conversions

### React Router to Next.js App Router

**1. Links**
```tsx
// Old (React Router)
import { Link } from 'react-router-dom';
<Link to="/about">About</Link>

// New (Next.js)
import Link from 'next/link';
<Link href="/about">About</Link>
```

**2. Navigation Hooks**
```tsx
// Old
import { useLocation, useNavigate } from 'react-router-dom';
const location = useLocation();
const navigate = useNavigate();
// location.pathname
// navigate('/contact')

// New
import { usePathname, useRouter } from 'next/navigation';
const pathname = usePathname();
const router = useRouter();
// pathname
// router.push('/contact')
```

**3. Dynamic Parameters**
In Next.js App Router, params are passed as props to the page component.

```tsx
// app/services/[slug]/page.tsx

// Server Component (Recommended)
export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // Await params in Next.js 15+
  const data = await fetchService(slug);
  return <ServiceDetail data={data} />;
}

// Client Component (If needed)
'use client';
import { useParams } from 'next/navigation';
export default function ServicePageClient() {
  const params = useParams();
  // params.slug
}
```

---

## 7. Metadata & SEO Setup

In `app/layout.tsx` (Global):
```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Logic-Unit',
    default: 'Logic-Unit | Architecting the Digital Future',
  },
  description: 'Expert full-stack architecture and digital solutions.',
};
```

In individual pages (e.g., `app/about/page.tsx`):
```tsx
export const metadata = {
  title: 'About Us',
  description: 'Learn more about Logic-Unit.',
};
```

For dynamic pages (`app/services/[slug]/page.tsx`):
```tsx
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = await fetchService(slug);
  return {
    title: service.title,
    description: service.summary,
  };
}
```

---

## 8. Final Checklist

- [ ] **Backup**: Commit current state to Git.
- [ ] **Clean**: Remove `vite.config.ts`, `index.html`, `App.tsx`.
- [ ] **Install**: Run `npm install` with new dependencies.
- [ ] **Config**: Verify `tailwind.config.js` and `postcss.config.js`.
- [ ] **Move**: Execute file moves according to the mapping table.
- [ ] **Refactor**: Update all `Link` and `useRouter` usages.
- [ ] **Theme**: Ensure `globals.css` imports `theme.css`.
- [ ] **Test**: Run `npm run dev` and verify all routes work.
- [ ] **Build**: Run `npm run build` to check for type errors and build issues.
