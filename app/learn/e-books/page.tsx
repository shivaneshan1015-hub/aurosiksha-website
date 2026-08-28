import React from 'react';
import Link from 'next/link';
import { Book, ArrowRight, Download, BookOpen } from 'lucide-react';
import { EBOOKS } from '@/lib/data';
import StructuredData from '@/components/StructuredData';
import { generateBookSchema } from '@/lib/seo';

export const metadata = {
  title: 'Digital Eye-Care E-Books & Reference Manuals — Aurosiksha',
  description: 'Read online or download complete national curriculum manuals and practical retinoscopy field handbooks.',
};

export default function EBooksPage() {
  return (
    <div className="py-12 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold border border-teal-200">
          <Book className="w-4 h-4 text-teal-600" /> Digital Knowledge Base
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Eye-Care E-Books & Curriculum Manuals</h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Comprehensive digital textbooks, OSCE scoring guidelines, and optical lens dispensing reference handbooks.
        </p>
      </div>

      {/* Ebooks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EBOOKS.map(ebook => (
          <div key={ebook.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row group">
            
            {/* Book Cover Visual */}
            <div className={`sm:w-48 bg-gradient-to-br ${ebook.coverBg} text-white p-6 flex flex-col justify-between items-center text-center relative`}>
              <div className="w-full text-[10px] uppercase font-bold tracking-widest text-teal-300">Aurosiksha Publication</div>
              <div className="my-6">
                <Book className="w-12 h-12 text-teal-400 mx-auto mb-3 opacity-90" />
                <p className="text-sm font-extrabold leading-tight">{ebook.title}</p>
              </div>
              <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-slate-200 font-mono">
                {ebook.pagesCount} Pages
              </span>
            </div>

            {/* Book Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                  {ebook.publishedYear} Edition
                </span>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  <Link href={`/learn/e-books/${ebook.slug}`}>{ebook.title}</Link>
                </h2>
                <p className="text-xs font-semibold text-slate-500">{ebook.subtitle}</p>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mt-2">{ebook.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">{ebook.downloadCount} readers</span>
                <Link
                  href={`/learn/e-books/${ebook.slug}`}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold rounded-xl transition-colors shadow-sm inline-flex items-center gap-1.5"
                >
                  Read Online <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
