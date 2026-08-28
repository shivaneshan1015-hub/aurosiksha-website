import React from 'react';
import Link from 'next/link';
import { Eye, ShieldCheck, Award, GraduationCap, Users, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { generateOrganizationSchema } from '@/lib/seo';

export const metadata = {
  title: 'About Aurosiksha — Eye Care Digital Learning Ecosystem',
  description: 'Learn about Aurosiksha mission, competency-based pedagogy, clinical faculty, partner hospital networks, and institutional capabilities.',
};

export default function AboutPage() {
  const orgSchema = generateOrganizationSchema();

  return (
    <div className="py-12 space-y-16 lg:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <StructuredData data={orgSchema} />

      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          About Aurosiksha Ecosystem
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Standardizing Eye-Care Education Across the Globe
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Aurosiksha is a digital learning ecosystem and integrated LMS designed specifically for eye-care professionals, allied ophthalmic personnel (AOP), clinical educators, and eye hospitals.
        </p>
      </div>

      {/* Mission & Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Our Learning Philosophy</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Competency-Based Education (CBE) Model</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Traditional eye care training relied heavily on passive lectures and informal apprentice shadowing. Aurosiksha transforms this into a structured 4-step framework:
          </p>
          <div className="space-y-3 text-xs text-slate-700 font-semibold">
            <div className="p-3 bg-teal-50 rounded-xl border border-teal-100 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">1</span>
              <span><strong>Learn:</strong> Interactive video lessons & micro-learning Siksha Bites.</span>
            </div>
            <div className="p-3 bg-cyan-50 rounded-xl border border-cyan-100 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold">2</span>
              <span><strong>Practice:</strong> Clinical field logbooks & practical guidelines.</span>
            </div>
            <div className="p-3 bg-purple-50 rounded-xl border border-purple-100 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">3</span>
              <span><strong>Assess:</strong> Online objective quizzes & OSCE direct observation rubrics.</span>
            </div>
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">4</span>
              <span><strong>Demonstrate Competency:</strong> Verifiable QR digital certificates.</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl space-y-6 shadow-xl border border-slate-800">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Entity Definition for Search & AI Engines</h3>
          <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
            <p>
              <strong className="text-teal-300">Entity Name:</strong> Aurosiksha Eye-Care Learning Ecosystem
            </p>
            <p>
              <strong className="text-teal-300">Primary Purpose:</strong> Providing structured online micro-learning, webinars, self-paced courses, and LMS management for allied ophthalmic personnel.
            </p>
            <p>
              <strong className="text-teal-300">Audience:</strong> Refractionists, Optometrists, OT Assistants, Vision Technicians, Eye Care Counsellors, and Eye Hospitals.
            </p>
            <p>
              <strong className="text-teal-300">Ownership & Standards:</strong> Peer-reviewed by senior ophthalmic clinical educators and academic leadership.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
