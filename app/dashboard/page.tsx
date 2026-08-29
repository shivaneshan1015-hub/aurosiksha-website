'use client';

import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, BookOpen, Video, Award, Clock, ArrowRight, 
  CheckCircle2, PlayCircle, ShieldCheck, Sparkles, FileText, Download 
} from 'lucide-react';
import { COURSES, WEBINARS } from '@/lib/data';

import GamifiedBadgesShowcase from '@/components/GamifiedBadgesShowcase';

export default function LearnerDashboardPage() {
  const activeCourse = COURSES[0];
  const upcomingWebinar = WEBINARS[0];

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-sky-950 text-white p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" /> Active Learner Profile
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Welcome back, Rahul Sharma</h1>
          <p className="text-xs text-slate-300">
            Role: <strong>Refractionist Trainee</strong> • Institute: <strong>Aurosiksha Learning Hub</strong>
          </p>
        </div>

        <Link
          href="/dashboard/course-player"
          className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all inline-flex items-center gap-2"
        >
          Resume Active Course <PlayCircle className="w-4 h-4" />
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Enrolled Courses & Progress */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Continue Learning Section */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" /> Enrolled Courses in Progress
              </h2>
              <span className="text-xs font-bold text-slate-500">1 Active Course</span>
            </div>

            {/* Course Progress Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded">
                    Intermediate Level
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">{activeCourse.title}</h3>
                </div>
                <span className="text-lg font-extrabold text-teal-600 font-mono">78% Complete</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2.5 rounded-full w-[78%]" />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <span>Next Lesson: <strong>1.3 Retinoscopy Neutralization Quiz</strong></span>
                <span>Instructor: {activeCourse.instructor.name}</span>
              </div>

              <div className="pt-2">
                <Link
                  href="/dashboard/course-player"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl inline-flex items-center gap-2 transition-all shadow-sm"
                >
                  Open Interactive Course Player <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Certificates Earned */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-600" /> My Verified Certificates
            </h2>

            <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                  OSCE Competency Verified
                </span>
                <h3 className="text-base font-bold text-slate-900">Certificate of Clinical Retinoscopy Proficiency</h3>
                <p className="text-xs text-slate-600">Issued by Aurosiksha Academic Board • Certificate ID: #AUR-2026-8941</p>
              </div>
              <button
                onClick={() => alert('Certificate PDF download simulated.')}
                className="px-4 py-2 bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs rounded-xl inline-flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" /> Download Certificate
              </button>
            </div>
          </div>

          {/* Gamified Competency Badges Section */}
          <GamifiedBadgesShowcase />
        </div>

        {/* Right Col: Webinars & Reminders */}
        <div className="space-y-6">
          
          {/* Upcoming Webinar Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Video className="w-4 h-4 text-sky-600" /> Webinar Reminder
            </h2>

            <div className="space-y-3 p-4 bg-sky-50/70 rounded-2xl border border-sky-100">
              <span className="text-[11px] font-bold bg-sky-600 text-white px-2 py-0.5 rounded">Registered Spot</span>
              <h3 className="text-sm font-bold text-slate-900">{upcomingWebinar.title}</h3>
              <p className="text-xs text-slate-600">{upcomingWebinar.date} • {upcomingWebinar.time}</p>
              <Link
                href={`/learn/webinars/${upcomingWebinar.slug}`}
                className="text-xs font-bold text-sky-600 hover:underline block pt-1"
              >
                View Webinar Access Link →
              </Link>
            </div>
          </div>

          {/* Quick Skill Checklist */}
          <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-3 text-xs">
            <p className="font-bold text-teal-400 uppercase">My Competency Progress Checklist</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>K-REF-01: Geometric Optics Cleared</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>S-REF-01: Streak Retinoscopy OSCE Cleared</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-4 h-4 rounded-full border border-slate-600" />
                <span>S-REF-02: Subjective Fogging (In Progress)</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
