import React from 'react';
import Link from 'next/link';
import { UserCheck, Glasses, Eye, ShieldAlert, Activity, HeartHandshake, UserCheck2, ArrowRight, Award } from 'lucide-react';
import { AOP_ROLES } from '@/lib/data';

export const metadata = {
  title: 'AOP Role-Based Competency Learning Hub — Aurosiksha',
  description: 'Explore competency frameworks, knowledge domains, and skill assessment rubrics for Refractionists, Optometrists, OT Assistants, Counsellors, and Vision Technicians.',
};

export default function AopHubPage() {
  const getIcon = (roleId: string) => {
    switch (roleId) {
      case 'refractionist': return Glasses;
      case 'optometrist': return Eye;
      case 'operating-theatre-assistant': return ShieldAlert;
      case 'vision-technician': return Activity;
      case 'counsellor': return HeartHandshake;
      default: return UserCheck2;
    }
  };

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
          <UserCheck className="w-4 h-4 text-purple-600" /> AOP Competency System
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore Learning by Role
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Select your specialty role to view standardized competency frameworks, knowledge domains, clinical skill rubrics, and recommended learning paths.
        </p>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AOP_ROLES.map(role => {
          const Icon = getIcon(role.id);
          return (
            <div key={role.id} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    {role.competenciesCount} Competencies
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    <Link href={`/learn/aop/${role.slug}`}>{role.title}</Link>
                  </h2>
                  <p className="text-xs font-semibold text-purple-700 mt-1">{role.tagline}</p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">{role.overview}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Knowledge & Skill Matrix</span>
                <Link
                  href={`/learn/aop/${role.slug}`}
                  className="text-xs font-bold text-purple-600 hover:underline flex items-center gap-1"
                >
                  Explore Role <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
