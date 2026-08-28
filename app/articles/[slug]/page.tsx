import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';
import { ARTICLES } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const art = ARTICLES.find(a => a.slug === slug);
  if (!art) return { title: 'Article Not Found' };
  return {
    title: `${art.title} — Insights | Aurosiksha`,
    description: art.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <Link href="/articles" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-teal-600 transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Insights Directory
      </Link>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs">
          <span className="px-3 py-1 bg-teal-50 text-teal-700 font-bold rounded-full border border-teal-100">{article.category}</span>
          <span className="text-slate-500">{article.publishedDate} • {article.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
          {article.title}
        </h1>

        <p className="text-lg text-slate-600 font-medium leading-relaxed bg-slate-50 p-4 rounded-xl">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-3 border-y border-slate-100 py-4">
          <img src={article.author.avatar} alt={article.author.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-xs font-bold text-slate-900">{article.author.name}</p>
            <p className="text-[11px] text-slate-500">{article.author.role} • {article.author.institution}</p>
          </div>
        </div>
      </div>

      <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-100">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 text-slate-700 leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
      </div>

    </article>
  );
}
