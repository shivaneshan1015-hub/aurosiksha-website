import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Zap, Clock, User, CheckCircle2, ArrowRight, BookOpen, Share2, ArrowLeft } from 'lucide-react';
import { SIKSHA_BITES, COURSES } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const bite = SIKSHA_BITES.find(b => b.slug === slug);
  if (!bite) return { title: 'Siksha Bite Not Found' };
  return {
    title: `${bite.title} — Siksha Bite | Aurosiksha`,
    description: bite.summary,
  };
}

export default async function SikshaBiteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const bite = SIKSHA_BITES.find(b => b.slug === slug);

  if (!bite) {
    notFound();
  }

  const relatedCourse = bite.relatedCourseId ? COURSES.find(c => c.id === bite.relatedCourseId) : null;

  return (
    <article className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Back link */}
      <Link href="/learn/siksha-bites" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-teal-600 transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Siksha Bites
      </Link>

      {/* Title & Metadata */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">{bite.role}</span>
          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">{bite.difficulty}</span>
          <span className="text-slate-400">• {bite.duration} • Published {bite.publishedDate}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {bite.title}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-medium bg-amber-50/60 p-4 rounded-xl border border-amber-100">
          {bite.summary}
        </p>

        {/* Author info */}
        <div className="flex items-center gap-3 pt-2 border-b border-slate-200 pb-6">
          <img src={bite.author.avatar} alt={bite.author.name} className="w-12 h-12 rounded-full object-cover border border-slate-200" />
          <div>
            <p className="text-sm font-bold text-slate-900">{bite.author.name}</p>
            <p className="text-xs text-slate-500">{bite.author.role} • {bite.author.institution}</p>
          </div>
        </div>
      </div>

      {/* Video player if present */}
      {bite.videoUrl && (
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-slate-800">
          <iframe
            src={bite.videoUrl}
            title={bite.title}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      )}

      {/* Key Takeaways Box */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider">
          <Zap className="w-4 h-4" /> Key Clinical Takeaways
        </div>
        <ul className="space-y-2 text-sm text-slate-200">
          {bite.keyTakeaways.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 text-slate-700 leading-relaxed space-y-4">
        <div dangerouslySetInnerHTML={{ __html: bite.content.replace(/\n/g, '<br/>') }} />
      </div>

      {/* Continue Learning Path */}
      {relatedCourse && (
        <div className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl border border-emerald-800">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4" /> Continue Your Structured Learning Path
          </div>
          <h3 className="text-xl font-bold">{relatedCourse.title}</h3>
          <p className="text-sm text-slate-300">{relatedCourse.shortDescription}</p>
          <div className="pt-2">
            <Link
              href={`/learn/courses/${relatedCourse.slug}`}
              className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-md transition-all"
            >
              Enrol in Full Course <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

    </article>
  );
}
