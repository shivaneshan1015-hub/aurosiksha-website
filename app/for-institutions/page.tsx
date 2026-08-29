'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, Users, BookOpen, ShieldCheck, ArrowRight, CheckCircle2, 
  BarChart3, Sparkles, UserCheck, Layers, ClipboardCheck, ArrowUpRight,
  Target, CalendarCheck, FileSpreadsheet, KeyRound, Check, X, Award, Eye
} from 'lucide-react';
import DemoRequestModal from '@/components/DemoRequestModal';

export default function ForInstitutionsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [studentCount, setStudentCount] = useState(120);
  const [activeTeaserTab, setActiveTeaserTab] = useState<'roster' | 'osce' | 'audit'>('roster');

  const estimatedSavedHours = Math.round(studentCount * 3.5);
  const estimatedCertificationSpeedup = '40%';

  const lmsFeatures = [
    {
      title: 'Competency-Based Curriculum Support',
      desc: 'Mapped skills and clinical assessments aligned with international eye-care standards.',
      icon: Target,
      color: 'bg-teal-50 text-teal-600 border-teal-200'
    },
    {
      title: 'Tailored Resources for AOPs',
      desc: 'Training and assessment resources specifically designed for Allied Ophthalmic Personnel.',
      icon: UserCheck,
      color: 'bg-cyan-50 text-cyan-600 border-cyan-200'
    },
    {
      title: 'Programme Execution & Monitoring',
      desc: 'Comprehensive tools for planning, executing, and monitoring institutional training programmes.',
      icon: CalendarCheck,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      title: 'Training & Learner Documentation',
      desc: 'Complete documentation of clinical training activities, logbooks, and learner skill progress.',
      icon: FileSpreadsheet,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      title: 'Reporting & Review Analytics',
      desc: 'Reporting and review support for tracking cohort progress and identifying knowledge gaps.',
      icon: BarChart3,
      color: 'bg-sky-50 text-sky-600 border-sky-200'
    },
    {
      title: 'Multi-User Role-Based Access',
      desc: 'Granular multi-user access control with role-based permissions for trainers, supervisors, and learners.',
      icon: KeyRound,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    }
  ];

  return (
    <div className="py-12 space-y-16 lg:space-y-24">
      
      {/* Header / Hero */}
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800 relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-teal-400" /> B2B Institutional LMS Solution
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            An LMS Built Specifically for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Eye-Care Training Institutions
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            Centralize student batch management, deliver standardized ophthalmic curricula across hospital branches, conduct direct observation OSCE skill evaluations, and track clinical competency progress.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-base shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Request a Personalized Demo <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              href="/institution-dashboard"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-semibold text-base border border-slate-700 flex items-center justify-center gap-2 transition-all"
            >
              Preview Admin Portal <ArrowUpRight className="w-4 h-4 text-teal-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* CORE LMS FEATURES SECTION */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Aurosiksha LMS Feature Suite
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Features of Aurosiksha LMS
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Designed specifically for eye hospitals, optometry schools, and allied ophthalmic training centers.
          </p>
        </div>

        {/* 6 Official Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lmsFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${feat.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-teal-700">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>Integrated Feature</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* LIVE INTERACTIVE ADMIN PORTAL TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl text-white space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
                Interactive Admin Teaser
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Hospital Administrative Command Center
              </h2>
            </div>
            <Link 
              href="/institution-dashboard" 
              className="text-xs font-bold text-teal-400 hover:underline flex items-center gap-1"
            >
              Open Full Interactive Admin Dashboard →
            </Link>
          </div>

          {/* Teaser Tabs */}
          <div className="flex gap-2 border-b border-slate-800 pb-2 text-xs font-semibold">
            {[
              { id: 'roster', label: 'Trainees Roster' },
              { id: 'osce', label: 'OSCE Skill Clearance' },
              { id: 'audit', label: 'Accreditation Audit Logs' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTeaserTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTeaserTab === tab.id
                    ? 'bg-teal-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Teaser */}
          {activeTeaserTab === 'roster' && (
            <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 overflow-x-auto text-xs space-y-3">
              <div className="flex items-center justify-between text-slate-400 font-semibold text-[11px] pb-2 border-b border-slate-800">
                <span>Student Name</span>
                <span>Specialty Role</span>
                <span>Branch</span>
                <span>Course Progress</span>
                <span>OSCE Status</span>
              </div>
              {[
                { name: 'Rahul Sharma', role: 'Refractionist', branch: 'Madurai Unit', progress: '78%', status: 'Cleared' },
                { name: 'Priya Sundaram', role: 'Optometrist', branch: 'Chennai Main', progress: '92%', status: 'Cleared' },
                { name: 'Karthik Raja', role: 'OT Assistant', branch: 'Coimbatore Branch', progress: '65%', status: 'Pending Drill' },
              ].map((st, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-900 text-slate-200">
                  <span className="font-bold text-white">{st.name}</span>
                  <span className="text-teal-300">{st.role}</span>
                  <span className="text-slate-400">{st.branch}</span>
                  <span className="text-emerald-400 font-mono">{st.progress}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${st.status === 'Cleared' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'}`}>{st.status}</span>
                </div>
              ))}
            </div>
          )}

          {activeTeaserTab === 'osce' && (
            <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 text-xs space-y-3">
              <h4 className="text-sm font-bold text-teal-400">Direct Observation OSCE Practical Rubric</h4>
              <p className="text-slate-300">Live clinical evaluation rubric scored in clinic/OT by hospital senior faculty:</p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span>1. Retinoscope streak neutralization speed & accuracy (±0.25D)</span>
                  <span className="text-emerald-400 font-bold">Passed (95%)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span>2. Slit Lamp Van Herick angle depth sectioning</span>
                  <span className="text-emerald-400 font-bold">Passed (90%)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span>3. Sterile OT gowning & intracameral antibiotic prep</span>
                  <span className="text-emerald-400 font-bold">Passed (100%)</span>
                </div>
              </div>
            </div>
          )}

          {activeTeaserTab === 'audit' && (
            <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 text-xs space-y-3">
              <h4 className="text-sm font-bold text-sky-400">Verifiable Accreditation Report Card</h4>
              <p className="text-slate-300">Automated audit logs for hospital accreditation boards & state health councils.</p>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="font-bold text-white">Batch 2026-A Compliance Report.pdf</p>
                  <p className="text-[11px] text-slate-400">Generated Aug 29, 2026 • 142 Trainees Verified</p>
                </div>
                <button onClick={() => alert('Audit report PDF downloaded.')} className="px-3 py-1.5 bg-teal-500 text-slate-950 font-bold text-xs rounded-lg">
                  Download Audit PDF
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4 Core Pillars */}
      <section id="workflow" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Institutional Operational Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Manage, Teach, Assess, and Track</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. Manage */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">1. Manage</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Effortlessly enroll batches of Refractionists, Optometrists, and OT Assistants. Assign clinical supervisors, departmental faculty, and regional vision center managers.
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-700 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Batch & Student Enrollment Controls</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Multi-Hospital Branch Permissions</li>
            </ul>
          </div>

          {/* 2. Teach */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">2. Teach</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Standardize learning materials across all locations. Deliver interactive video lessons, micro-learning Siksha Bites, teaching slide decks, and clinical field logbooks.
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-700 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Peer-Reviewed Ophthalmic Curriculum</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600" /> Pre-Reading Webinar Integrations</li>
            </ul>
          </div>

          {/* 3. Assess */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">3. Assess</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Combine online multiple-choice knowledge testing with direct observation OSCE skill rubrics evaluated live in the clinic or operating theatre.
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-700 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Clinical OSCE Practical Rubrics</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Automated Quiz Grading</li>
            </ul>
          </div>

          {/* 4. Track */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">4. Track</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Real-time analytics dashboards for academic directors. Export student progress report cards, clinical competency matrices, and accreditation compliance audit logs.
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-700 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-600" /> Real-time Batch Progress Matrices</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-600" /> Verifiable QR Digital Certificates</li>
            </ul>
          </div>

        </div>
      </section>

      {/* FEATURE COMPARISON MATRIX (INDIVIDUAL VS INSTITUTIONAL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Enterprise Plan Comparison
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">Individual Learner vs Institutional Enterprise LMS</h2>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-900 text-white font-bold">
              <tr>
                <th className="p-4 sm:p-5">Feature Capability</th>
                <th className="p-4 sm:p-5 text-center text-teal-300">Individual Learner (Free)</th>
                <th className="p-4 sm:p-5 text-center text-cyan-300 bg-slate-800">Institutional LMS (Enterprise)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-4 font-semibold text-slate-900">Access to Siksha Bites & Webinars</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-slate-50/50">✓ Included</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Multi-Student Batch Enrollment Controls</td>
                <td className="p-4 text-center text-slate-400">✕ Individual Only</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-slate-50/50">✓ Multi-Batch Admin Controls</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Direct Observation OSCE Practical Rubrics</td>
                <td className="p-4 text-center text-slate-400">✕ Self-Evaluation</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-slate-50/50">✓ Live Senior Faculty Grading</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Hospital Accreditation Audit Reports</td>
                <td className="p-4 text-center text-slate-400">✕ Personal Certs Only</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-slate-50/50">✓ Export PDF Compliance Audits</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Multi-Branch Vision Center Management</td>
                <td className="p-4 text-center text-slate-400">✕ Single Account</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-slate-50/50">✓ Multi-Location Roles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Institutional Impact Calculator */}
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Institutional Efficiency Calculator</span>
            <h2 className="text-3xl font-extrabold">Estimate Your Hospital Training Time Savings</h2>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase text-slate-300">
                Number of Active Students / Staff Learners: <span className="text-teal-400 text-base">{studentCount}</span>
              </label>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={studentCount}
                onChange={e => setStudentCount(Number(e.target.value))}
                className="w-full accent-teal-500 cursor-pointer"
              />
              <p className="text-xs text-slate-400">
                Adjust slider to match your current annual ophthalmic student intake across vision centers.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 text-center">
              <div>
                <p className="text-3xl font-extrabold text-teal-400">{estimatedSavedHours} Hours</p>
                <p className="text-xs text-slate-400 uppercase font-semibold">Faculty Administrative Time Saved / Year</p>
              </div>
              <div className="pt-3 border-t border-slate-800">
                <p className="text-2xl font-bold text-cyan-400">{estimatedCertificationSpeedup} Faster</p>
                <p className="text-xs text-slate-400 uppercase font-semibold">OSCE Skill Clearance Speed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section id="request-demo" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl border border-teal-800">
          <h2 className="text-3xl font-extrabold">Ready to Transform Your Eye-Care Training Program?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule a 20-minute live demonstration with an Aurosiksha institutional specialist.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-4 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold rounded-xl text-base shadow-lg transition-all cursor-pointer"
            >
              Request Institutional Demo
            </button>
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />

    </div>
  );
}
