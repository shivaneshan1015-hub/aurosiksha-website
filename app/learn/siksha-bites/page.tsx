'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Zap, Search, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { SIKSHA_BITES } from '@/lib/data';

export default function SikshaBitesListingPage() {
  const [selectedRole, setSelectedRole] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const roles = ['All', 'Refractionist', 'Optometrist', 'Operating Theatre Assistant'];

  const filteredBites = SIKSHA_BITES.filter(bite => {
    const matchesRole = selectedRole === 'All' || bite.role === selectedRole;
    const matchesSearch = bite.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          bite.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <div className="py-12 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
          <Zap className="w-4 h-4 text-amber-500" /> Micro-Learning Products
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Siksha Bites</h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Concise clinical tips, technique pearls, and procedure refiners designed to be read in under 5 minutes.
        </p>
      </div>

      {/* Filter & Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search Siksha Bites..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Role Pills */}
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {roles.map(role => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedRole === role
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Bites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBites.map(bite => (
          <div key={bite.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-44 bg-slate-100 overflow-hidden">
                <img src={bite.thumbnail} alt={bite.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                  {bite.role}
                </span>
                <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded">
                  {bite.duration}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  <Link href={`/learn/siksha-bites/${bite.slug}`}>{bite.title}</Link>
                </h2>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{bite.summary}</p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-500">By {bite.author.name}</span>
              <Link
                href={`/learn/siksha-bites/${bite.slug}`}
                className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1"
              >
                Read Bite <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
