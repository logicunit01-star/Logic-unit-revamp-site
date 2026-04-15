/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
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
      borderRadius: {
        base: 'var(--radius-base)',
      },
      keyframes: {
        'slow-pan': {
          '0%': { objectPosition: 'center top', transform: 'scale(1.05)' },
          '100%': { objectPosition: 'center bottom', transform: 'scale(1.1)' }
        }
      },
      animation: {
        'slow-pan': 'slow-pan 30s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
};
