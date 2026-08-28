'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Search, Download, ArrowRight, Filter } from 'lucide-react';
import { RESOURCES } from '@/lib/data';

export default function ResourcesPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const types = ['All', 'Teaching Slide', 'Log Form', 'Question Bank', 'Handout'];

  const filteredResources = RESOURCES.filter(res => {
    const matchesType = selectedType === 'All' || res.type === selectedType;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="py-12 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
          <FileText className="w-4 h-4 text-indigo-600" /> Open Educational Resources
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Learning Resource Library</h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Download teaching slides, student handouts, OT audit log forms, and clinical question banks.
        </p>
      </div>

      {/* Filter bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search resource library..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {types.map(t => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
                selectedType === t ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredResources.map(res => (
          <div key={res.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {res.type}
                </span>
                <span className="text-xs font-mono text-slate-400">{res.format} ({res.fileSize})</span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                <Link href={`/learn/resources/${res.slug}`}>{res.title}</Link>
              </h2>

              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{res.description}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">{res.downloadCount} downloads</span>
              <Link href={`/learn/resources/${res.slug}`} className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-lg flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5" /> Direct Download
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
