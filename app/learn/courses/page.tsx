'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Search, Star, Clock, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { COURSES } from '@/lib/data';

export default function CoursesCatalogPage() {
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const roles = ['All', 'Refractionist', 'Optometrist', 'Operating Theatre Assistant', 'Outpatient Assistant'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = COURSES.filter(course => {
    const matchesRole = selectedRole === 'All' || course.targetRoles.includes(selectedRole);
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesLevel && matchesSearch;
  });

  return (
    <div className="py-12 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <BookOpen className="w-4 h-4 text-emerald-500" /> Self-Paced Courses
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Structured Eye-Care Courses</h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Master clinical skills, retinoscope optics, and surgical OT protocols through verified self-paced learning modules.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search courses by topic, role, keyword..."
              className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs font-bold text-slate-500 uppercase">Level:</span>
            {levels.map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  selectedLevel === lvl ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Role Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 uppercase self-center mr-2">Filter by Role:</span>
          {roles.map(role => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                selectedRole === role ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-48 bg-slate-200 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1 text-amber-500 font-bold"><Star className="w-3.5 h-3.5 fill-amber-500" /> {course.rating}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  <Link href={`/learn/courses/${course.slug}`}>{course.title}</Link>
                </h2>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{course.shortDescription}</p>

                <div className="flex flex-wrap gap-1 pt-2">
                  {course.targetRoles.map(r => (
                    <span key={r} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-600 font-medium">Instructor: {course.instructor.name}</span>
              <Link
                href={`/learn/courses/${course.slug}`}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
              >
                View Course
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
