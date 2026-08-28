import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  BookOpen, Clock, Star, Users, CheckCircle2, ArrowLeft, ShieldCheck, 
  PlayCircle, FileText, HelpCircle, Award, ArrowRight 
} from 'lucide-react';
import { COURSES, SIKSHA_BITES, WEBINARS, RESOURCES } from '@/lib/data';
import StructuredData from '@/components/StructuredData';
import { generateCourseSchema, generateBreadcrumbSchema } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const course = COURSES.find(c => c.slug === slug);
  if (!course) return { title: 'Course Not Found' };
  return {
    title: `${course.title} — Course | Aurosiksha`,
    description: course.shortDescription,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = COURSES.find(c => c.slug === slug);

  if (!course) {
    notFound();
  }

  const courseSchema = generateCourseSchema(course);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Courses', url: '/learn/courses' },
    { name: course.title, url: `/learn/courses/${course.slug}` }
  ]);

  const relatedBites = SIKSHA_BITES.filter(b => course.relatedBiteIds?.includes(b.id));

  return (
    <div className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <StructuredData data={[courseSchema, breadcrumbSchema]} />

      <Link href="/learn/courses" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Courses Catalog
      </Link>

      {/* Hero Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
            {course.level} Level
          </span>
          <span className="text-amber-400 font-bold flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400" /> {course.rating} Rating
          </span>
          <span className="text-slate-400">• {course.enrolledCount} Active Learners</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {course.title}
        </h1>

        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          {course.fullDescription}
        </p>

        {/* Roles Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Target Roles:</span>
          {course.targetRoles.map(role => (
            <span key={role} className="px-3 py-1 rounded-lg bg-slate-800 text-teal-300 text-xs font-medium border border-slate-700">
              {role}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href={`/dashboard/course-player`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
          >
            Enrol & Start Learning <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Free Open Access for Allied Personnel
          </span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Objectives & Curriculum */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Learning Objectives */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Learning Objectives</h2>
            <ul className="space-y-3">
              {course.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum & Modules */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Course Curriculum</h2>
              <span className="text-xs text-slate-500 font-medium">{course.modules.length} Modules</span>
            </div>

            <div className="space-y-6">
              {course.modules.map((mod, i) => (
                <div key={mod.id} className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900">{mod.title}</h3>
                    <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                      {mod.lessons.length} Lessons
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{mod.description}</p>
                  
                  <div className="space-y-2 pt-2">
                    {mod.lessons.map(les => (
                      <div key={les.id} className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200 text-xs">
                        <div className="flex items-center gap-2.5">
                          {les.type === 'video' ? <PlayCircle className="w-4 h-4 text-emerald-600" /> : <HelpCircle className="w-4 h-4 text-purple-600" />}
                          <span className="font-semibold text-slate-800">{les.title}</span>
                        </div>
                        <span className="text-slate-500 font-mono">{les.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Prerequisites</h3>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
              {course.prerequisites.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>

        </div>

        {/* Right Col: Instructor Profile & Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Course Director</h2>
            <div className="text-center space-y-3">
              <img src={course.instructor.avatar} alt={course.instructor.name} className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-emerald-500 shadow-md" />
              <div>
                <h3 className="text-lg font-bold text-slate-900">{course.instructor.name}</h3>
                <p className="text-xs text-emerald-600 font-semibold">{course.instructor.credentials}</p>
                <p className="text-xs text-slate-500 mt-1">{course.instructor.role}</p>
                <p className="text-xs font-medium text-slate-700 mt-0.5">{course.instructor.institution}</p>
              </div>
              <p className="text-xs text-slate-600 text-left leading-relaxed pt-2 border-t border-slate-100">{course.instructor.bio}</p>
            </div>
          </div>

          {/* Related Siksha Bites */}
          {relatedBites.length > 0 && (
            <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200 space-y-3">
              <h3 className="text-xs font-bold text-amber-800 uppercase tracking-wider">Related Siksha Bite</h3>
              {relatedBites.map(b => (
                <div key={b.id} className="space-y-2">
                  <p className="text-xs font-bold text-slate-900">{b.title}</p>
                  <p className="text-[11px] text-slate-600 line-clamp-2">{b.summary}</p>
                  <Link href={`/learn/siksha-bites/${b.slug}`} className="text-xs font-bold text-amber-700 hover:underline block">
                    Read Micro-Bite →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
