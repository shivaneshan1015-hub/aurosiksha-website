import React from 'react';
import Link from 'next/link';
import { FileText, Clock, ArrowRight } from 'lucide-react';
import { ARTICLES } from '@/lib/data';

export const metadata = {
  title: 'Insights & Articles — Aurosiksha',
  description: 'Clinical education insights, competency framework transformation articles, and eye hospital training strategies.',
};

export default function ArticlesPage() {
  return (
    <div className="py-12 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          Pedagogical & Hospital Insights
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Articles & Insights</h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Read research notes on competency-based training, hospital LMS scaling, and allied ophthalmic workforce development.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ARTICLES.map(article => (
          <div key={article.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-56 bg-slate-900 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90" />
                <span className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                  <span>{article.publishedDate}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{article.excerpt}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">By {article.author.name}</span>
              <Link href={`/articles/${article.slug}`} className="text-xs font-bold text-teal-600 hover:underline flex items-center gap-1">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
