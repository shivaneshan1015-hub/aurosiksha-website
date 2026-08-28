'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, Video, Zap, FileText, Book, UserCheck, Building2, 
  ArrowRight, CheckCircle2, Star, Clock, Users, ShieldCheck, Sparkles,
  Download, Play, ChevronRight, Award, GraduationCap, BarChart3
} from 'lucide-react';
import { COURSES, WEBINARS, SIKSHA_BITES, AOP_ROLES, RESOURCES, EBOOKS } from '@/lib/data';
import DemoRequestModal from '@/components/DemoRequestModal';
import WebinarRegisterModal from '@/components/WebinarRegisterModal';

export default function HomePage() {
  const [selectedIntent, setSelectedIntent] = useState<'quick' | 'webinar' | 'course' | 'aop' | 'resources' | 'ebooks'>('quick');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedWebinarForRegister, setSelectedWebinarForRegister] = useState<typeof WEBINARS[0] | null>(null);

  const featuredCourses = COURSES.slice(0, 2);
  const upcomingWebinar = WEBINARS[0];
  const popularBites = SIKSHA_BITES.slice(0, 3);
  const featuredResource = RESOURCES[0];
  const featuredEbook = EBOOKS[0];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* ---------------------------------------------------- */}
      {/* 01. HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Text Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>The Eye-Care Digital Learning Ecosystem</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Learn. Practice. Grow. <br />
                <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  Build Better Eye Care Teams.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Digital learning, training resources and LMS solutions designed specifically for eye-care professionals, allied ophthalmic personnel, and training institutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/learn"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-base shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  Explore Learning <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/for-institutions"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700/80 flex items-center justify-center gap-2 transition-all"
                >
                  <Building2 className="w-5 h-5 text-teal-400" /> For Institutions (LMS)
                </Link>
              </div>

              {/* Value proposition badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800 text-slate-300 text-xs sm:text-sm font-medium max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Micro-Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>AOP Competencies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Integrated LMS</span>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-6 border border-slate-700/80 shadow-2xl space-y-5">
                
                {/* Header card info */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Learner Dashboard Preview</p>
                      <p className="text-xs text-slate-400">Refraction & AOP Competency Progress</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                    Active
                  </span>
                </div>

                {/* Progress Card Sample */}
                <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                    <span>Clinical Refraction & Retinoscopy</span>
                    <span className="text-teal-400 font-bold">78% Mastered</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full w-[78%]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>12 Lessons Completed</span>
                    <span>2 OSCE Rubrics Cleared</span>
                  </div>
                </div>

                {/* Quick Action Preview */}
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/learn/siksha-bites/identifying-scissor-retinoscopy-reflex" className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 block transition-colors group">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-1">
                      <Zap className="w-3.5 h-3.5" /> Siksha Bite
                    </div>
                    <p className="text-xs font-semibold text-white group-hover:text-teal-300 line-clamp-1">Scissor Reflex Neutralization</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">4 min watch</span>
                  </Link>

                  <Link href="/learn/webinars/pediatric-refraction-and-amblyopia-management-2026" className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 block transition-colors group">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 mb-1">
                      <Video className="w-3.5 h-3.5" /> Live Webinar
                    </div>
                    <p className="text-xs font-semibold text-white group-hover:text-teal-300 line-clamp-1">Pediatric Refraction 2026</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">Sept 18 • Free</span>
                  </Link>
                </div>

                {/* Institutional LMS note */}
                <div className="p-3 rounded-xl bg-teal-950/40 border border-teal-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-teal-300">
                    <Building2 className="w-4 h-4 text-teal-400" />
                    <span>LMS Mode: City Eye Hospital Institute</span>
                  </div>
                  <Link href="/institution-dashboard" className="text-teal-400 font-bold hover:underline">
                    Admin Portal →
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* 02. LEARNING ECOSYSTEM (SECTION 07 - 6 CARDS) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Aurosiksha Learning Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Learning Formats Built for Eye Care
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Whether you are an individual practitioner looking for quick clinical tips or an institution delivering structured AOP diploma programs, Aurosiksha provides dedicated learning formats.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Siksha Bites */}
          <Link 
            href="/learn/siksha-bites" 
            className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Siksha Bites
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Micro-learning for busy eye-care professionals. Concise 3 to 5-minute clinical technique guides and video pearls.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-xs font-bold text-amber-600 border-t border-slate-100 mt-6">
              <span>Explore Siksha Bites</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Webinars */}
          <Link 
            href="/learn/webinars" 
            className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  Webinars
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Live interactive masterclasses & recorded sessions led by world-class eye-care clinical experts and faculty.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-xs font-bold text-sky-600 border-t border-slate-100 mt-6">
              <span>Browse Webinars</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Self-Paced Courses */}
          <Link 
            href="/learn/courses" 
            className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Self-Paced Courses
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Structured curriculum modules, video lessons, and interactive quiz assessments with verifiable completion certificates.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-xs font-bold text-emerald-600 border-t border-slate-100 mt-6">
              <span>Explore Self-Paced Courses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: AOP Learning */}
          <Link 
            href="/learn/aop" 
            className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  AOP Learning Hub
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Competency-based training frameworks for Refractionists, Optometrists, OT Assistants, Counsellors, and Vision Technicians.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-xs font-bold text-purple-600 border-t border-slate-100 mt-6">
              <span>Explore Roles & Competencies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 5: Learning Resources */}
          <Link 
            href="/learn/resources" 
            className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Learning Resource Library
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Searchable teaching slides, student handouts, question banks, OSCE skill rubrics, and hospital log forms.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-xs font-bold text-indigo-600 border-t border-slate-100 mt-6">
              <span>Access Resource Library</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 6: E-Books */}
          <Link 
            href="/learn/e-books" 
            className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Book className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  E-Books & Manuals
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Structured digital textbooks, clinical field handbooks, and standard curriculum guidelines available to read online or download.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-xs font-bold text-teal-600 border-t border-slate-100 mt-6">
              <span>Explore E-Books</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* 03. PERSONALIZED DISCOVERY ("What are you looking to learn?") */}
      {/* ---------------------------------------------------- */}
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Personalized Learning Journey</span>
            <h2 className="text-3xl font-extrabold tracking-tight">What are you looking to learn today?</h2>
            <p className="text-sm text-slate-400">Select your intent to reach relevant eye care learning content immediately.</p>
          </div>

          {/* Interactive Intent Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: 'quick', label: 'Learn something quickly', icon: Zap },
              { id: 'webinar', label: 'Attend a webinar', icon: Video },
              { id: 'course', label: 'Take a self-paced course', icon: BookOpen },
              { id: 'aop', label: 'Explore AOP learning', icon: UserCheck },
              { id: 'resources', label: 'Find teaching resources', icon: FileText },
              { id: 'ebooks', label: 'Explore e-books', icon: Book },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedIntent(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                  selectedIntent === tab.id
                    ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Intent Content Box */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 max-w-4xl mx-auto">
            {selectedIntent === 'quick' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Micro-Learning</span>
                  <h3 className="text-2xl font-bold text-white">Siksha Bites for Quick Clinical Tips</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Busy in clinic? Access 3 to 5-minute practical pearls on retinoscope scissor reflex, Van Herick angle grading, or Class 5 autoclave indicators.
                  </p>
                  <Link href="/learn/siksha-bites" className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:underline">
                    Browse 40+ Siksha Bites <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                  <p className="text-xs text-slate-400 font-bold uppercase">Popular Quick Bite</p>
                  <p className="text-sm font-bold text-white">{popularBites[0].title}</p>
                  <p className="text-xs text-slate-400">{popularBites[0].summary}</p>
                  <Link href={`/learn/siksha-bites/${popularBites[0].slug}`} className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg inline-block">
                    Read & Watch Bite (4 min)
                  </Link>
                </div>
              </div>
            )}

            {selectedIntent === 'webinar' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Live & Recorded Masterclasses</span>
                  <h3 className="text-2xl font-bold text-white">Interact with Leading Eye Care Faculty</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Participate in Q&A sessions on pediatric refraction, endophthalmitis prevention, and advanced diagnostic OCT interpretation.
                  </p>
                  <Link href="/learn/webinars" className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:underline">
                    View Webinar Schedule <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">Upcoming Live</span>
                  <p className="text-sm font-bold text-white">{upcomingWebinar.title}</p>
                  <p className="text-xs text-slate-400">{upcomingWebinar.date} • Speaker: {upcomingWebinar.speaker.name}</p>
                  <button 
                    onClick={() => setSelectedWebinarForRegister(upcomingWebinar)}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg"
                  >
                    Register Seat Free
                  </button>
                </div>
              </div>
            )}

            {selectedIntent === 'course' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Comprehensive Training</span>
                  <h3 className="text-2xl font-bold text-white">Self-Paced Competency Courses</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Structured 4 to 6-week online courses complete with module videos, interactive quizzes, and verified digital certificates.
                  </p>
                  <Link href="/learn/courses" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:underline">
                    Explore All Courses <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                  <p className="text-xs text-slate-400 font-bold uppercase">Featured Course</p>
                  <p className="text-sm font-bold text-white">{featuredCourses[0].title}</p>
                  <p className="text-xs text-slate-400">{featuredCourses[0].duration} • {featuredCourses[0].level}</p>
                  <Link href={`/learn/courses/${featuredCourses[0].slug}`} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg inline-block">
                    View Course Details
                  </Link>
                </div>
              </div>
            )}

            {selectedIntent === 'aop' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Role-Based Competencies</span>
                  <h3 className="text-2xl font-bold text-white">Targeted Training for Every Ophthalmic Role</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Select your exact role (Refractionist, OT Assistant, Optometrist, Counsellor) to view mapped knowledge domains and OSCE skill rubrics.
                  </p>
                  <Link href="/learn/aop" className="inline-flex items-center gap-2 text-sm font-bold text-purple-400 hover:underline">
                    View 9 AOP Role Hubs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase">Popular Roles</p>
                  {AOP_ROLES.slice(0, 3).map(role => (
                    <Link key={role.id} href={`/learn/aop/${role.slug}`} className="flex items-center justify-between p-2 rounded bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200">
                      <span>{role.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {selectedIntent === 'resources' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Educator & Student Tools</span>
                  <h3 className="text-2xl font-bold text-white">Teaching Slides, Log Forms & Question Banks</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Download open educational resources, teaching slide decks, OT audit templates, and case question banks for class assessments.
                  </p>
                  <Link href="/learn/resources" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-400 hover:underline">
                    Search Resource Library <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                  <p className="text-xs text-slate-400 font-bold uppercase">Featured Download</p>
                  <p className="text-sm font-bold text-white">{featuredResource.title}</p>
                  <p className="text-xs text-slate-400">{featuredResource.type} • {featuredResource.format} ({featuredResource.fileSize})</p>
                  <Link href={`/learn/resources/${featuredResource.slug}`} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg inline-block">
                    Download Resource
                  </Link>
                </div>
              </div>
            )}

            {selectedIntent === 'ebooks' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Digital Eye Care Knowledge</span>
                  <h3 className="text-2xl font-bold text-white">Comprehensive E-Books & Reference Manuals</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Read online or download complete national curriculum guides and practical retinoscopy handbooks.
                  </p>
                  <Link href="/learn/e-books" className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:underline">
                    Explore E-Books Hub <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                  <p className="text-xs text-slate-400 font-bold uppercase">Featured E-Book</p>
                  <p className="text-sm font-bold text-white">{featuredEbook.title}</p>
                  <p className="text-xs text-slate-400">{featuredEbook.pagesCount} Pages • Author: {featuredEbook.author}</p>
                  <Link href={`/learn/e-books/${featuredEbook.slug}`} className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold rounded-lg inline-block">
                    Read E-Book Online
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* 04. FEATURED CMS CONTENT SECTIONS (SECTION 09) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Featured Courses Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Self-Paced Courses
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Featured Learning Programs</h2>
            </div>
            <Link href="/learn/courses" className="text-sm font-bold text-emerald-600 hover:underline flex items-center gap-1">
              View All Courses <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COURSES.map(course => (
              <div key={course.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                      {course.level}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {course.rating}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                      <span>•</span>
                      <span>{course.enrolledCount} enrolled</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      <Link href={`/learn/courses/${course.slug}`}>{course.title}</Link>
                    </h3>

                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{course.shortDescription}</p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {course.targetRoles.map(r => (
                        <span key={r} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={course.instructor.avatar} alt={course.instructor.name} className="w-7 h-7 rounded-full object-cover" />
                    <span className="text-xs font-medium text-slate-700">{course.instructor.name}</span>
                  </div>
                  <Link 
                    href={`/learn/courses/${course.slug}`}
                    className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-xl transition-colors"
                  >
                    View Curriculum
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Siksha Bites Grid */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Siksha Bites
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Popular Micro-Learning Bites</h2>
            </div>
            <Link href="/learn/siksha-bites" className="text-sm font-bold text-amber-600 hover:underline flex items-center gap-1">
              View All Siksha Bites <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularBites.map(bite => (
              <div key={bite.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">{bite.role}</span>
                    <span className="text-slate-400">{bite.duration}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    <Link href={`/learn/siksha-bites/${bite.slug}`}>{bite.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{bite.summary}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">By {bite.author.name}</span>
                  <Link href={`/learn/siksha-bites/${bite.slug}`} className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1">
                    Read Bite <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>


      {/* ---------------------------------------------------- */}
      {/* 05. FOR INSTITUTIONS SECTION (SECTION 17) */}
      {/* ---------------------------------------------------- */}
      <section id="for-institutions" className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
              Institutional Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              An LMS Built Specifically for Eye-Care Training Institutions
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Standardize learning across regional vision centers, track student clinical competencies in real time, and manage hospital faculty efficiently.
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-white">Manage</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Organize batches of student refractionists, OT assistants, and optometry trainees with central administrative controls.
              </p>
            </div>

            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-white">Teach</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Deploy standardized teaching slides, clinical video demonstrations, pre-reading webinar modules, and field logbooks.
              </p>
            </div>

            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-white">Assess</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Conduct online multiple-choice quizzes alongside direct observation OSCE practical skill rubrics in clinic/OT.
              </p>
            </div>

            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-xl font-bold text-white">Track</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Monitor individual and batch progress, generate accreditation report cards, and issue verifiable digital certificates.
              </p>
            </div>

          </div>

          {/* Institutional Workflow Graphic */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white text-center">Institutional Workflow Lifecycle</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs font-semibold text-slate-300">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                1. Institution Joins & Configures Batches
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                2. Enrol Students & Assign Faculty
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                3. Deliver Lessons & Practice Skill Rubrics
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                4. Assess Competencies & Issue Certificates
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-lg hover:shadow-teal-500/20 transition-all"
              >
                Request a Personalized LMS Demo
              </button>
              <Link
                href="/for-institutions"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 text-white font-semibold text-sm hover:bg-slate-700 transition-all text-center"
              >
                See Full LMS Features
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* 06. TRUST & ECOSYSTEM METRICS */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Authority & Impact</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Trusted by Leading Eye Hospitals & Learning Institutes
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">15,000+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Individual Learners</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-teal-600">250+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Competency Standards</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">40+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Partner Hospitals</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-teal-600">98%</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">OSCE Pass Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Modals */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <WebinarRegisterModal 
        webinar={selectedWebinarForRegister} 
        isOpen={!!selectedWebinarForRegister} 
        onClose={() => setSelectedWebinarForRegister(null)} 
      />

    </div>
  );
}
