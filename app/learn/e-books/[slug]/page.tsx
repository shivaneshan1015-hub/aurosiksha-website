import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Book, ArrowLeft, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { EBOOKS } from '@/lib/data';
import StructuredData from '@/components/StructuredData';
import { generateBookSchema } from '@/lib/seo';
import ReadOnlineButton from '@/components/ReadOnlineButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const ebook = EBOOKS.find(b => b.slug === slug);
  if (!ebook) return { title: 'E-Book Not Found' };
  return {
    title: `${ebook.title} — Digital E-Book | Aurosiksha`,
    description: ebook.description,
  };
}

export default async function EBookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const ebook = EBOOKS.find(b => b.slug === slug);

  if (!ebook) {
    notFound();
  }

  const bookSchema = generateBookSchema(ebook);

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <StructuredData data={bookSchema} />

      <Link href="/learn/e-books" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-teal-600 transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to E-Books Hub
      </Link>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-8 sm:p-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cover */}
          <div className={`lg:col-span-4 rounded-2xl bg-gradient-to-br ${ebook.coverBg} text-white p-8 text-center space-y-6 shadow-xl`}>
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto text-teal-300">
              <Book className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{ebook.title}</h2>
              <p className="text-xs text-teal-200 mt-1">{ebook.subtitle}</p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs text-slate-300 space-y-1">
              <p>Author: {ebook.author}</p>
              <p>Pages: {ebook.pagesCount}</p>
              <p>Published: {ebook.publishedYear}</p>
            </div>
          </div>

          {/* Right Info */}
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              National Curriculum E-Book
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">{ebook.title}</h1>
            <p className="text-sm text-slate-600 leading-relaxed">{ebook.description}</p>

            {/* Target Roles */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase">Recommended For:</span>
              <div className="flex flex-wrap gap-1.5">
                {ebook.targetRoles.map(role => (
                  <span key={role} className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Table of Contents</h3>
              <ul className="space-y-2">
                {ebook.tableOfContents.map((ch, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Read Online Button */}
            <ReadOnlineButton title={ebook.title} />

          </div>

        </div>
      </div>

    </div>
  );
}
