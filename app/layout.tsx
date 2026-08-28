import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Aurosiksha — Eye Care Digital Learning Ecosystem & LMS',
  description: 'Digital learning, competency-based training, webinars, self-paced courses, and integrated LMS solutions designed for eye-care professionals and institutions.',
  keywords: [
    'eye care education',
    'optometry courses',
    'refractionist training',
    'allied ophthalmic personnel',
    'eye hospital LMS',
    'ophthalmic OT assistant',
    'eye care webinars',
    'siksha bites'
  ],
  authors: [{ name: 'Aurosiksha Educational Team', url: 'https://aurosiksha.org' }],
  openGraph: {
    title: 'Aurosiksha — Eye Care Digital Learning Ecosystem & LMS',
    description: 'Empowering eye care teams through micro-learning, webinars, self-paced courses, and institutional LMS management.',
    url: 'https://aurosiksha.org',
    siteName: 'Aurosiksha',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurosiksha — Eye Care Digital Learning Ecosystem & LMS',
    description: 'Digital learning ecosystem and integrated LMS for eye-care professionals and institutions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans antialiased selection:bg-teal-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
