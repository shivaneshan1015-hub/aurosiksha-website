import React from 'react';
import Link from 'next/link';
import { Eye, ShieldCheck, Heart, Award, ArrowUpRight } from 'lucide-react';
import StructuredData from './StructuredData';
import { generateOrganizationSchema } from '@/lib/seo';

export default function Footer() {
  const orgSchema = generateOrganizationSchema();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <StructuredData data={orgSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center text-slate-950 font-bold">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Aurosiksha
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Aurosiksha is a digital learning ecosystem built specifically for eye-care professionals and institutions — bringing together micro-learning, webinars, self-paced courses, competency-based AOP training, learning resources, and an integrated LMS.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-teal-400">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Competency Standards</span>
              <span className="flex items-center gap-1"><Award className="w-4 h-4" /> Verified Certificates</span>
            </div>
          </div>

          {/* Col 2: LEARN Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Learn Formats</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/learn/siksha-bites" className="hover:text-teal-300 transition-colors">Siksha Bites</Link></li>
              <li><Link href="/learn/webinars" className="hover:text-teal-300 transition-colors">Webinars & Masterclasses</Link></li>
              <li><Link href="/learn/courses" className="hover:text-teal-300 transition-colors">Self-Paced Courses</Link></li>
              <li><Link href="/learn/aop" className="hover:text-teal-300 transition-colors">AOP Role Hubs</Link></li>
              <li><Link href="/learn/resources" className="hover:text-teal-300 transition-colors">Resource Library</Link></li>
              <li><Link href="/learn/e-books" className="hover:text-teal-300 transition-colors">Digital E-Books</Link></li>
            </ul>
          </div>

          {/* Col 3: For Institutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">For Institutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/for-institutions" className="hover:text-teal-300 transition-colors">Aurosiksha LMS</Link></li>
              <li><Link href="/for-institutions#workflow" className="hover:text-teal-300 transition-colors">How It Works</Link></li>
              <li><Link href="/for-institutions#features" className="hover:text-teal-300 transition-colors">LMS Features & Tracking</Link></li>
              <li><Link href="/institution-dashboard" className="hover:text-teal-300 transition-colors flex items-center gap-1">Admin Portal Demo <ArrowUpRight className="w-3 h-3" /></Link></li>
              <li><Link href="/for-institutions#request-demo" className="hover:text-teal-300 transition-colors">Request Institutional Demo</Link></li>
            </ul>
          </div>

          {/* Col 4: Platform & Entity */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">About & Entity</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-teal-300 transition-colors">About Aurosiksha</Link></li>
              <li><Link href="/about#pedagogy" className="hover:text-teal-300 transition-colors">Learning Philosophy</Link></li>
              <li><Link href="/about#partners" className="hover:text-teal-300 transition-colors">Collaborations & Ecosystem</Link></li>
              <li><Link href="/articles" className="hover:text-teal-300 transition-colors">Articles & Insights</Link></li>
              <li><Link href="/dashboard" className="hover:text-teal-300 transition-colors">Learner Dashboard</Link></li>
            </ul>
          </div>

        </div>

        {/* GEO Factual Answer Footer Block */}
        <div className="py-8 border-b border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400">
          <div>
            <strong className="text-slate-200 block mb-1">What is Aurosiksha?</strong>
            Aurosiksha is a specialized digital learning ecosystem and Learning Management System (LMS) designed for eye-care professionals, refractionists, optometrists, OT assistants, and ophthalmic institutions.
          </div>
          <div>
            <strong className="text-slate-200 block mb-1">Who operates Aurosiksha?</strong>
            Aurosiksha is operated by eye-care clinical educators and academic leadership in collaboration with leading eye-care hospital systems across South Asia.
          </div>
          <div>
            <strong className="text-slate-200 block mb-1">How can institutions use Aurosiksha?</strong>
            Eye care hospital networks and colleges deploy Aurosiksha LMS to manage student batches, deliver online lessons, conduct OSCE skill rubrics, and track competency progress.
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Aurosiksha Eye-Care Learning Ecosystem. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400">Terms of Service</Link>
            <Link href="/about" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/about" className="hover:text-slate-400">Accessibility (WCAG 2.2 AA)</Link>
            <span className="flex items-center gap-1 text-slate-400">
              Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Eye Care Teams
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
