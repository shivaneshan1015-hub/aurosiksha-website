'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Video, Calendar, Clock, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WEBINARS } from '@/lib/data';
import WebinarRegisterModal from '@/components/WebinarRegisterModal';

export default function WebinarsListingPage() {
  const [filterStatus, setFilterStatus] = useState<'all' | 'upcoming' | 'recorded'>('all');
  const [selectedWebinar, setSelectedWebinar] = useState<typeof WEBINARS[0] | null>(null);

  const filteredWebinars = WEBINARS.filter(w => {
    if (filterStatus === 'all') return true;
    return w.status === filterStatus;
  });

  return (
    <div className="py-12 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200">
          <Video className="w-4 h-4 text-sky-500" /> Interactive Learning Events
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Eye Care Masterclasses & Webinars</h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Learn directly from experienced ophthalmologists, senior optometrists, and allied ophthalmic clinical leaders.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex justify-center gap-2">
        {[
          { id: 'all', label: 'All Webinars' },
          { id: 'upcoming', label: 'Upcoming Live' },
          { id: 'recorded', label: 'Recorded On-Demand' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilterStatus(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterStatus === tab.id
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredWebinars.map(webinar => (
          <div key={webinar.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img src={webinar.image} alt={webinar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90" />
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm ${
                  webinar.status === 'upcoming' ? 'bg-emerald-600' : 'bg-slate-700'
                }`}>
                  {webinar.status === 'upcoming' ? 'Upcoming Live' : 'Recorded Access'}
                </span>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-slate-950/75 backdrop-blur-md p-2 rounded-lg">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-sky-400" /> {webinar.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-sky-400" /> {webinar.time}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  <Link href={`/learn/webinars/${webinar.slug}`}>{webinar.title}</Link>
                </h2>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{webinar.description}</p>

                {/* Speaker info */}
                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <img src={webinar.speaker.avatar} alt={webinar.speaker.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">{webinar.speaker.name}</p>
                    <p className="text-[11px] text-slate-500">{webinar.speaker.institution}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
              <Link href={`/learn/webinars/${webinar.slug}`} className="text-xs font-bold text-slate-700 hover:text-sky-600">
                View Details & Agenda
              </Link>
              {webinar.status === 'upcoming' ? (
                <button
                  onClick={() => setSelectedWebinar(webinar)}
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                >
                  Register Free
                </button>
              ) : (
                <Link
                  href={`/learn/webinars/${webinar.slug}`}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
                >
                  Watch Recording
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <WebinarRegisterModal
        webinar={selectedWebinar}
        isOpen={!!selectedWebinar}
        onClose={() => setSelectedWebinar(null)}
      />

    </div>
  );
}
