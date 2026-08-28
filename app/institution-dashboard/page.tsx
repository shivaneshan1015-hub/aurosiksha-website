'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, Users, BookOpen, Award, BarChart3, 
  CheckCircle2, Plus, Download, ArrowUpRight, Search, Filter 
} from 'lucide-react';

export default function InstitutionDashboardPage() {
  const [activeTab, setActiveTab] = useState<'students' | 'courses' | 'assessments' | 'reports'>('students');

  const mockStudents = [
    { id: '1', name: 'Rahul Sharma', role: 'Refractionist', batch: 'Batch 2026-A', progress: 78, osceStatus: 'Cleared' },
    { id: '2', name: 'Priya Sundaram', role: 'Optometrist', batch: 'Batch 2026-A', progress: 92, osceStatus: 'Cleared' },
    { id: '3', name: 'Karthik Raja', role: 'Operating Theatre Assistant', batch: 'Batch 2026-B', progress: 65, osceStatus: 'Pending OSCE' },
    { id: '4', name: 'Anitha V.', role: 'Vision Technician', batch: 'Batch 2026-B', progress: 45, osceStatus: 'In Progress' }
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Aurosiksha LMS Admin Portal</span>
          <h1 className="text-3xl font-extrabold">City Eye Hospital & Institute</h1>
          <p className="text-xs text-slate-300">Centralized Student, Faculty & Competency Management Portal</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => alert('Add Batch modal triggered.')}
            className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="w-4 h-4" /> Enrol New Student Batch
          </button>
          <button
            onClick={() => alert('Report download simulated.')}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-white font-semibold text-xs rounded-xl border border-slate-700 flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" /> Export Compliance PDF
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <p className="text-2xl font-extrabold text-slate-900">142</p>
          <p className="text-xs font-semibold text-slate-500 uppercase">Enrolled Trainees</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <p className="text-2xl font-extrabold text-teal-600">12</p>
          <p className="text-xs font-semibold text-slate-500 uppercase">Faculty Instructors</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <p className="text-2xl font-extrabold text-sky-600">8</p>
          <p className="text-xs font-semibold text-slate-500 uppercase">Active Courses</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <p className="text-2xl font-extrabold text-purple-600">94%</p>
          <p className="text-xs font-semibold text-slate-500 uppercase">OSCE Clearance Rate</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 gap-6 text-sm font-bold text-slate-500">
        {[
          { id: 'students', label: 'Trainees & Students' },
          { id: 'courses', label: 'Assigned Curricula' },
          { id: 'assessments', label: 'OSCE Rubric Scores' },
          { id: 'reports', label: 'Accreditation Reports' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`pb-3 transition-colors border-b-2 -mb-px ${
              activeTab === tab.id
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Trainees List Table */}
      {activeTab === 'students' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">Batch 2026 Trainees Roster</span>
            <span className="text-xs text-slate-500">Showing 4 active students</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase border-b border-slate-200">
                <tr>
                  <th className="p-4">Student Name</th>
                  <th className="p-4">Specialty Role</th>
                  <th className="p-4">Batch</th>
                  <th className="p-4">Course Progress</th>
                  <th className="p-4">OSCE Rubric Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {mockStudents.map(st => (
                  <tr key={st.id} className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">{st.name}</td>
                    <td className="p-4">{st.role}</td>
                    <td className="p-4">{st.batch}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-teal-500 h-2 rounded-full" style={{ width: `${st.progress}%` }} />
                        </div>
                        <span className="font-mono font-bold text-xs">{st.progress}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                        st.osceStatus === 'Cleared' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {st.osceStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Reports view */}
      {activeTab !== 'students' && (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-3">
          <BarChart3 className="w-10 h-10 text-teal-600 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">Institutional Report Generator</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Generate audit report logs for hospital accreditation boards and national health councils.
          </p>
          <button
            onClick={() => alert('Report generated successfully.')}
            className="px-5 py-2.5 bg-teal-600 text-white font-bold text-xs rounded-xl shadow-sm"
          >
            Generate Batch Audit Report
          </button>
        </div>
      )}

    </div>
  );
}
