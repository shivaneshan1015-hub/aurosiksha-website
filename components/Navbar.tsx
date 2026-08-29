'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Eye, Search, ChevronDown, BookOpen, Video, Zap, FileText, 
  Book, Building2, UserCheck, Menu, X, Sparkles, LayoutDashboard 
} from 'lucide-react';
import SearchModal from './SearchModal';
import DemoRequestModal from './DemoRequestModal';

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const learnItems = [
    { title: 'Siksha Bites', desc: 'Micro-learning for busy eye-care pros', href: '/learn/siksha-bites', icon: Zap, color: 'text-amber-500 bg-amber-50' },
    { title: 'Webinars', desc: 'Live & recorded expert masterclasses', href: '/learn/webinars', icon: Video, color: 'text-sky-600 bg-sky-50' },
    { title: 'Self-Paced Courses', desc: 'Structured competency-based courses', href: '/learn/courses', icon: BookOpen, color: 'text-emerald-600 bg-emerald-50' },
    { title: 'AOP Learning Hub', desc: 'Role-based competencies (Refractionist, OTA, Optom)', href: '/learn/aop', icon: UserCheck, color: 'text-purple-600 bg-purple-50' },
    { title: 'Learning Resources', desc: 'Teaching slides, log forms & question banks', href: '/learn/resources', icon: FileText, color: 'text-indigo-600 bg-indigo-50' },
    { title: 'E-Books', desc: 'Digital eye-care curriculum standards', href: '/learn/e-books', icon: Book, color: 'text-teal-600 bg-teal-50' }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800">
        {/* Primary Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Eye className="w-5 h-5 text-teal-400" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-teal-300 transition-colors">
                Aurosiksha
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-teal-400 font-semibold -mt-1">
                Eye Care Ecosystem
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            
            {/* LEARN Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsLearnOpen(true)}
              onMouseLeave={() => setIsLearnOpen(false)}
            >
              <button 
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  pathname.startsWith('/learn') ? 'text-teal-400 bg-slate-800' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                Learn <ChevronDown className={`w-4 h-4 transition-transform ${isLearnOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLearnOpen && (
                <div className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 mt-1 grid grid-cols-1 gap-1 text-slate-900 animate-in fade-in duration-150 z-50">
                  <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Explore Learning</span>
                    <Link href="/learn" className="text-xs text-teal-600 font-semibold hover:underline" onClick={() => setIsLearnOpen(false)}>
                      All Formats →
                    </Link>
                  </div>
                  {learnItems.map(item => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsLearnOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className={`p-2 rounded-lg ${item.color} mt-0.5`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-500 line-clamp-1">{item.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/for-institutions"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                pathname === '/for-institutions' ? 'text-teal-400 bg-slate-800' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Building2 className="w-4 h-4 text-teal-400" /> For Institutions
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === '/about' ? 'text-teal-400 bg-slate-800' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              About
            </Link>

            <Link
              href="/articles"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname.startsWith('/articles') ? 'text-teal-400 bg-slate-800' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Insights
            </Link>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5">
            
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700/70 transition-colors"
              title="Search website (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 bg-slate-900 text-slate-400 rounded text-[10px] border border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* My Learning Dashboard */}
            <Link
              href="/dashboard"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700/70 transition-all"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-sky-400" /> My Learning
            </Link>

            {/* Demo Request Button */}
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-xs tracking-tight shadow-md hover:shadow-teal-500/20 transition-all"
            >
              Request LMS Demo
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">Learn Formats</p>
              {learnItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
                >
                  <item.icon className="w-4 h-4 text-teal-400" />
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-1">
              <Link
                href="/for-institutions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
              >
                <Building2 className="w-4 h-4 text-teal-400" /> For Institutions (LMS)
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
              >
                <LayoutDashboard className="w-4 h-4 text-sky-400" /> Learner Dashboard
              </Link>
              <Link
                href="/institution-dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
              >
                <Building2 className="w-4 h-4 text-purple-400" /> Institutional Admin Portal
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
              >
                About Aurosiksha
              </Link>
              <Link
                href="/articles"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
              >
                Insights & Articles
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
}
