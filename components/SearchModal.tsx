'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, BookOpen, Video, Zap, FileText, Book, Award, Users } from 'lucide-react';
import { COURSES, WEBINARS, SIKSHA_BITES, AOP_ROLES, RESOURCES, EBOOKS } from '@/lib/data';
import { SearchResultItem } from '@/lib/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [results, setResults] = useState<SearchResultItem[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const items: SearchResultItem[] = [];

    if (activeCategory === 'all' || activeCategory === 'course') {
      COURSES.forEach(c => {
        if (c.title.toLowerCase().includes(q) || c.shortDescription.toLowerCase().includes(q) || c.topics.some(t => t.toLowerCase().includes(q))) {
          items.push({
            id: c.id,
            type: 'course',
            title: c.title,
            subtitle: `${c.level} • ${c.duration} • ${c.instructor.name}`,
            url: `/learn/courses/${c.slug}`,
            badge: 'Course'
          });
        }
      });
    }

    if (activeCategory === 'all' || activeCategory === 'webinar') {
      WEBINARS.forEach(w => {
        if (w.title.toLowerCase().includes(q) || w.description.toLowerCase().includes(q) || w.speaker.name.toLowerCase().includes(q)) {
          items.push({
            id: w.id,
            type: 'webinar',
            title: w.title,
            subtitle: `${w.date} • ${w.speaker.name}`,
            url: `/learn/webinars/${w.slug}`,
            badge: 'Webinar'
          });
        }
      });
    }

    if (activeCategory === 'all' || activeCategory === 'siksha-bite') {
      SIKSHA_BITES.forEach(b => {
        if (b.title.toLowerCase().includes(q) || b.summary.toLowerCase().includes(q) || b.role.toLowerCase().includes(q)) {
          items.push({
            id: b.id,
            type: 'siksha-bite',
            title: b.title,
            subtitle: `${b.role} • ${b.duration} • ${b.difficulty}`,
            url: `/learn/siksha-bites/${b.slug}`,
            badge: 'Siksha Bite'
          });
        }
      });
    }

    if (activeCategory === 'all' || activeCategory === 'role') {
      AOP_ROLES.forEach(r => {
        if (r.title.toLowerCase().includes(q) || r.overview.toLowerCase().includes(q) || r.tagline.toLowerCase().includes(q)) {
          items.push({
            id: r.id,
            type: 'role',
            title: `${r.title} AOP Competency Hub`,
            subtitle: r.tagline,
            url: `/learn/aop/${r.slug}`,
            badge: 'AOP Role'
          });
        }
      });
    }

    if (activeCategory === 'all' || activeCategory === 'resource') {
      RESOURCES.forEach(res => {
        if (res.title.toLowerCase().includes(q) || res.description.toLowerCase().includes(q) || res.topic.toLowerCase().includes(q)) {
          items.push({
            id: res.id,
            type: 'resource',
            title: res.title,
            subtitle: `${res.type} • ${res.format} • ${res.fileSize}`,
            url: `/learn/resources/${res.slug}`,
            badge: 'Resource'
          });
        }
      });
    }

    if (activeCategory === 'all' || activeCategory === 'e-book') {
      EBOOKS.forEach(eb => {
        if (eb.title.toLowerCase().includes(q) || eb.description.toLowerCase().includes(q)) {
          items.push({
            id: eb.id,
            type: 'e-book',
            title: eb.title,
            subtitle: `${eb.subtitle} • ${eb.pagesCount} Pages`,
            url: `/learn/e-books/${eb.slug}`,
            badge: 'E-Book'
          });
        }
      });
    }

    setResults(items);
  }, [query, activeCategory]);

  if (!isOpen) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="w-4 h-4 text-emerald-600" />;
      case 'webinar': return <Video className="w-4 h-4 text-sky-600" />;
      case 'siksha-bite': return <Zap className="w-4 h-4 text-amber-500" />;
      case 'resource': return <FileText className="w-4 h-4 text-indigo-600" />;
      case 'e-book': return <Book className="w-4 h-4 text-teal-600" />;
      case 'role': return <Users className="w-4 h-4 text-blue-600" />;
      default: return <Award className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 bg-slate-950/70 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="relative border-b border-slate-100 flex items-center px-4 py-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, webinars, bites, resources, competencies..."
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-base focus:outline-none"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600 mr-2">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-slate-500 bg-slate-200/60 rounded-md hover:bg-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Smart Category Filter Pills */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-100/70 border-b border-slate-200/60 overflow-x-auto text-xs font-semibold">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'course', label: 'Courses' },
            { id: 'webinar', label: 'Webinars' },
            { id: 'siksha-bite', label: 'Siksha Bites' },
            { id: 'resource', label: 'Resources' },
            { id: 'role', label: 'AOP Roles' },
            { id: 'e-book', label: 'E-Books' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {!query.trim() ? (
            <div className="text-center py-8">
              <p className="text-sm font-medium text-slate-500 mb-3">Popular Suggestions</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['Refraction', 'Sterilization', 'Retinoscopy', 'Pediatric Optometry', 'Slit Lamp', 'AOP Framework'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 rounded-full transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-slate-700 font-semibold mb-1">No matching resources found</p>
              <p className="text-xs text-slate-500">Try searching for &quot;refraction&quot;, &quot;sterilization&quot;, or &quot;webinar&quot;</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-2">
                Found {results.length} results
              </p>
              {results.map((item) => (
                <Link
                  key={`${item.type}-${item.id}`}
                  href={item.url}
                  onClick={onClose}
                  className="flex items-start p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white border border-slate-200/60 mr-3 mt-0.5">
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 group-hover:bg-teal-100 group-hover:text-teal-800 transition-colors">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 truncate transition-colors">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 truncate mt-0.5">{item.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Search across Courses, Webinars, AOP & Resources</span>
          <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 bg-white border rounded text-[10px] shadow-sm">ESC</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
}
