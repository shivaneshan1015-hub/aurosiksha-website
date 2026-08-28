import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FileText, ArrowLeft, ShieldCheck, User, Calendar, CheckCircle2 } from 'lucide-react';
import { RESOURCES } from '@/lib/data';
import DownloadButton from '@/components/DownloadButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const res = RESOURCES.find(r => r.slug === slug);
  if (!res) return { title: 'Resource Not Found' };
  return {
    title: `${res.title} — Learning Resource | Aurosiksha`,
    description: res.description,
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = RESOURCES.find(r => r.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <Link href="/learn/resources" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Resource Library
      </Link>

      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-full border border-indigo-100">
            {resource.type}
          </span>
          <span className="text-xs font-mono text-slate-500">{resource.format} • {resource.fileSize}</span>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">{resource.title}</h1>

        <p className="text-sm text-slate-600 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl">
          {resource.description}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-600 border-y border-slate-100 py-4">
          <div><strong>Author:</strong> {resource.author}</div>
          <div><strong>Target Role:</strong> {resource.targetRole}</div>
          <div><strong>Topic:</strong> {resource.topic}</div>
          <div><strong>Downloads:</strong> {resource.downloadCount}</div>
        </div>

        {/* Client Download Button Component */}
        <DownloadButton title={resource.title} format={resource.format} />
      </div>

    </div>
  );
}
