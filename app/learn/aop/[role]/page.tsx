import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  UserCheck, CheckCircle2, ArrowLeft, BookOpen, Zap, Video, 
  FileText, ShieldCheck, Award, ArrowRight, Brain, Target 
} from 'lucide-react';
import { AOP_ROLES, COURSES, SIKSHA_BITES, WEBINARS, RESOURCES } from '@/lib/data';

interface PageProps {
  params: Promise<{ role: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { role: roleSlug } = await params;
  const role = AOP_ROLES.find(r => r.slug === roleSlug);
  if (!role) return { title: 'Role Not Found' };
  return {
    title: `${role.title} AOP Competency Learning Hub — Aurosiksha`,
    description: role.overview,
  };
}

export default async function AopRoleDetailPage({ params }: PageProps) {
  const { role: roleSlug } = await params;
  const role = AOP_ROLES.find(r => r.slug === roleSlug);

  if (!role) {
    notFound();
  }

  const recommendedCourses = COURSES.filter(c => role.recommendedCourseIds.includes(c.id));
  const relatedBites = SIKSHA_BITES.filter(b => role.relatedBiteIds.includes(b.id));

  return (
    <div className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Back link */}
      <Link href="/learn/aop" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-purple-600 transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to AOP Roles Hub
      </Link>

      {/* Hero Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold">
          <UserCheck className="w-4 h-4" /> Specialty Role Framework
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {role.title} Competency & Learning Hub
        </h1>

        <p className="text-lg text-purple-200 font-medium">
          {role.tagline}
        </p>

        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          {role.overview}
        </p>

        {/* Key Responsibilities */}
        <div className="pt-4 border-t border-slate-800 space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Core Clinical Responsibilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
            {role.keyResponsibilities.map((resp, i) => (
              <div key={i} className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMPETENCY MATRIX (KNOWLEDGE vs SKILL) */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Learn → Practice → Assess → Demonstrate
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Competency Standard Framework
          </h2>
          <p className="text-xs text-slate-600">Standardized metrics required for hospital clinical clearance.</p>
        </div>

        {/* 2 Column Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Knowledge Competencies */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Knowledge Competencies</h3>
                <p className="text-xs text-slate-500">Theoretical optics, anatomy & clinical science</p>
              </div>
            </div>

            {role.knowledgeCompetencies.length === 0 ? (
              <p className="text-xs text-slate-500 italic">Competency standards being updated for this role.</p>
            ) : (
              role.knowledgeCompetencies.map(comp => (
                <div key={comp.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold font-mono px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded">
                      {comp.code}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">{comp.assessmentMethod}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{comp.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{comp.description}</p>
                </div>
              ))
            )}
          </div>

          {/* Skill Competencies */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Skill & Practical Competencies</h3>
                <p className="text-xs text-slate-500">OSCE direct observation & hands-on rubrics</p>
              </div>
            </div>

            {role.skillCompetencies.length === 0 ? (
              <p className="text-xs text-slate-500 italic">Practical rubrics being updated for this role.</p>
            ) : (
              role.skillCompetencies.map(comp => (
                <div key={comp.id} className="p-4 bg-purple-50/50 rounded-xl border border-purple-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold font-mono px-2 py-0.5 bg-purple-100 text-purple-800 rounded">
                      {comp.code}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">{comp.assessmentMethod}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{comp.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{comp.description}</p>
                  
                  <div className="pt-2 border-t border-purple-100">
                    <p className="text-[11px] font-bold text-purple-900 uppercase">Evaluation Criteria:</p>
                    <ul className="list-disc list-inside text-[11px] text-purple-800 space-y-0.5">
                      {comp.rubricCriteria.map((crit, idx) => <li key={idx}>{crit}</li>)}
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>

      {/* Recommended Courses for this Role */}
      {recommendedCourses.length > 0 && (
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl font-bold text-slate-900">Recommended Courses for {role.title}s</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedCourses.map(course => (
              <div key={course.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">{course.level}</span>
                  <h3 className="text-lg font-bold text-slate-900">{course.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2">{course.shortDescription}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{course.duration}</span>
                  <Link href={`/learn/courses/${course.slug}`} className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1">
                    Enrol Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
