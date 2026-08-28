import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Video, Calendar, Clock, User, CheckCircle2, ArrowLeft, Shield, FileText } from 'lucide-react';
import { WEBINARS } from '@/lib/data';
import StructuredData from '@/components/StructuredData';
import { generateEventSchema, generateBreadcrumbSchema } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const webinar = WEBINARS.find(w => w.slug === slug);
  if (!webinar) return { title: 'Webinar Not Found' };
  return {
    title: `${webinar.title} — Webinar | Aurosiksha`,
    description: webinar.description,
  };
}

export default async function WebinarDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const webinar = WEBINARS.find(w => w.slug === slug);

  if (!webinar) {
    notFound();
  }

  const eventSchema = generateEventSchema(webinar);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Webinars', url: '/learn/webinars' },
    { name: webinar.title, url: `/learn/webinars/${webinar.slug}` }
  ]);

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <StructuredData data={[eventSchema, breadcrumbSchema]} />

      <Link href="/learn/webinars" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-sky-600 transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Webinars Directory
      </Link>

      {/* Hero card */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
          <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 uppercase tracking-wider">
            {webinar.status === 'upcoming' ? 'Live Interactive Webinar' : 'Recorded Masterclass'}
          </span>
          <span className="text-slate-400">{webinar.registeredCount}+ Participants Registered</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {webinar.title}
        </h1>

        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          {webinar.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-sky-400" />
            <span>{webinar.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-sky-400" />
            <span>{webinar.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Certificate of Participation</span>
          </div>
        </div>
      </div>

      {/* Webinar Recording Video Player if recorded */}
      {webinar.recordingUrl && (
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">Webinar Recording</h2>
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl">
            <iframe
              src={webinar.recordingUrl}
              title={webinar.title}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Main Grid: Speaker & Objectives & Agenda */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Learning Objectives & Agenda */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Objectives */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">What Participants Will Learn</h2>
            <ul className="space-y-3">
              {webinar.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Agenda */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Webinar Agenda</h2>
            <div className="space-y-4 divide-y divide-slate-100">
              {webinar.agenda.map((ag, i) => (
                <div key={i} className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-1">
                  <span className="font-bold text-sky-600 font-mono">{ag.time}</span>
                  <span className="text-slate-800 font-medium sm:text-right">{ag.topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Who Should Attend</h3>
            <div className="flex flex-wrap gap-2">
              {webinar.whoShouldAttend.map(aud => (
                <span key={aud} className="px-3 py-1 bg-white border border-slate-300 text-slate-800 text-xs font-semibold rounded-lg">
                  {aud}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Col: Speaker Profile */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Featured Expert Speaker</h2>
            <div className="text-center space-y-3">
              <img src={webinar.speaker.avatar} alt={webinar.speaker.name} className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-sky-500 shadow-md" />
              <div>
                <h3 className="text-lg font-bold text-slate-900">{webinar.speaker.name}</h3>
                <p className="text-xs text-sky-600 font-semibold">{webinar.speaker.credentials}</p>
                <p className="text-xs text-slate-500 mt-1">{webinar.speaker.role}</p>
                <p className="text-xs font-medium text-slate-700 mt-0.5">{webinar.speaker.institution}</p>
              </div>
              <p className="text-xs text-slate-600 text-left leading-relaxed pt-2 border-t border-slate-100">{webinar.speaker.bio}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
