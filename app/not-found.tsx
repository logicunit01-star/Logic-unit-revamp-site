import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-bg-main text-brand-dark">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-8 text-lg text-brand-gray">Could not find requested resource</p>
      <Link href="/" className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors">
        Return Home
      </Link>
    </div>
  );
}
