import React from 'react';
import Link from 'next/link';
import { 
  Zap, Video, BookOpen, UserCheck, FileText, Book, ArrowRight, ShieldCheck 
} from 'lucide-react';

export const metadata = {
  title: 'Explore Eye-Care Learning Formats — Aurosiksha',
  description: 'Discover micro-learning Siksha Bites, live webinars, self-paced courses, AOP role-based competencies, learning resources, and e-books.',
};

export default function LearnHubPage() {
  const formats = [
    {
      id: 'siksha-bites',
      title: 'Siksha Bites',
      tagline: 'Micro-learning for busy eye-care professionals',
      description: '3 to 5-minute practical clinical tips, technique videos, and quick refresher bites designed to read between patient appointments.',
      count: '40+ Bites Available',
      href: '/learn/siksha-bites',
      icon: Zap,
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      id: 'webinars',
      title: 'Webinars & Live Events',
      tagline: 'Learn from experienced eye-care experts',
      description: 'Interactive live sessions and recorded masterclasses on pediatric refraction, infection control, glaucoma, and retina diagnostics.',
      count: '15+ Masterclasses',
      href: '/learn/webinars',
      icon: Video,
      color: 'bg-sky-50 text-sky-600 border-sky-200'
    },
    {
      id: 'courses',
      title: 'Self-Paced Courses',
      tagline: 'Structured learning completed at your own pace',
      description: 'Comprehensive curriculum modules, instructional videos, self-assessment quizzes, and verified completion certificates.',
      count: '12+ Structured Courses',
      href: '/learn/courses',
      icon: BookOpen,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    {
      id: 'aop',
      title: 'AOP Learning Hub',
      tagline: 'Role-based competency frameworks',
      description: 'Standardized knowledge domains and OSCE skill rubrics tailored for Refractionists, Optometrists, OT Assistants, Counsellors, and Vision Technicians.',
      count: '9 Specialty Roles',
      href: '/learn/aop',
      icon: UserCheck,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      id: 'resources',
      title: 'Learning Resource Library',
      tagline: 'Teaching slides, handouts & question banks',
      description: 'Open-access educational materials for trainers and students, including PowerPoint slides, OT sterilization audit forms, and case question banks.',
      count: '120+ Downloadable Files',
      href: '/learn/resources',
      icon: FileText,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      id: 'e-books',
      title: 'E-Books & Manuals',
      tagline: 'Structured digital eye-care knowledge',
      description: 'Complete digital textbooks, clinical field guides, and national curriculum guidelines available for online reading or PDF download.',
      count: '8 Reference Manuals',
      href: '/learn/e-books',
      icon: Book,
      color: 'bg-teal-50 text-teal-600 border-teal-200'
    }
  ];

  return (
    <div className="py-12 lg:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          Learning Ecosystem Hub
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Choose How You Want to Learn
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From 5-minute micro-learning bites to structured multi-week competency courses, find the learning format that fits your clinical workflow.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formats.map(item => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {item.count}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs font-semibold text-teal-700 mt-1">{item.tagline}</p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-teal-600">
                <span>Explore {item.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* GEO Summary */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 text-xs space-y-2">
          <p className="text-teal-400 font-bold uppercase tracking-wider">Aurosiksha Learning Guarantee</p>
          <p className="text-slate-300 leading-relaxed">
            All educational content on Aurosiksha is authored and peer-reviewed by experienced ophthalmologists, senior optometrists, and accredited eye-care educators adhering to clinical practice guidelines.
          </p>
        </div>
      </div>

    </div>
  );
}
