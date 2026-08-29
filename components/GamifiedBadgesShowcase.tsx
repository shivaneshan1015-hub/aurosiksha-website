'use client';

import React, { useState } from 'react';
import { Award, Lock, Sparkles, CheckCircle2, Shield, Star, Zap, Video, Eye, Info } from 'lucide-react';

export interface BadgeItem {
  id: string;
  name: string;
  category: 'Retinoscopy' | 'Anterior Segment' | 'OT Protocols' | 'Pediatrics' | 'Streak';
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedDate?: string;
  xpPoints: number;
}

export const GAMIFIED_BADGES: BadgeItem[] = [
  {
    id: 'badge-1',
    name: 'Retinoscopy Streak Master',
    category: 'Retinoscopy',
    description: 'Neutralized 20+ astigmatic cylinder reflexes within ±0.25D precision in clinical OSCE.',
    icon: '🎯',
    unlocked: true,
    unlockedDate: 'Aug 14, 2026',
    xpPoints: 500
  },
  {
    id: 'badge-2',
    name: 'Slit Lamp Van Herick Specialist',
    category: 'Anterior Segment',
    description: 'Mastered 6 illumination techniques & anterior chamber optical sectioning on slit lamp.',
    icon: '🔬',
    unlocked: true,
    unlockedDate: 'Aug 22, 2026',
    xpPoints: 450
  },
  {
    id: 'badge-3',
    name: 'Post-Cataract OT Safety Champion',
    category: 'OT Protocols',
    description: 'Cleared emergency drills for sterile field maintenance and intracameral antibiotic protocols.',
    icon: '🛡️',
    unlocked: true,
    unlockedDate: 'Aug 28, 2026',
    xpPoints: 600
  },
  {
    id: 'badge-4',
    name: '5-Bite Micro Learning Streak',
    category: 'Streak',
    description: 'Completed 5 consecutive Siksha Bite clinical pearls during clinic lunch breaks.',
    icon: '⚡',
    unlocked: true,
    unlockedDate: 'Aug 29, 2026',
    xpPoints: 300
  },
  {
    id: 'badge-5',
    name: 'Pediatric Cycloplegic Scholar',
    category: 'Pediatrics',
    description: 'Registered & attended Dr. Meenakshi Swaminathan pediatric masterclass webinar.',
    icon: '🎓',
    unlocked: false,
    xpPoints: 400
  },
  {
    id: 'badge-6',
    name: 'Glaucoma Screening Pioneer',
    category: 'Anterior Segment',
    description: 'Completed Van Herick Grade 1-4 risk assessment & Applanation Tonometer calibration.',
    icon: '👁️',
    unlocked: false,
    xpPoints: 550
  }
];

export default function GamifiedBadgesShowcase() {
  const [selectedBadge, setSelectedBadge] = useState<BadgeItem | null>(null);

  const unlockedCount = GAMIFIED_BADGES.filter(b => b.unlocked).length;
  const totalXp = GAMIFIED_BADGES.filter(b => b.unlocked).reduce((sum, b) => sum + b.xpPoints, 0);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
      
      {/* Header & XP Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            Gamified Clinical Competency Badges
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">My Earned Skill Medals</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold shadow-sm">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>{totalXp} XP Points</span>
          </div>
          <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-2 rounded-2xl text-xs font-extrabold">
            {unlockedCount} / {GAMIFIED_BADGES.length} Badges
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {GAMIFIED_BADGES.map(badge => (
          <button
            key={badge.id}
            onClick={() => setSelectedBadge(badge)}
            className={`p-4 rounded-2xl border text-center transition-all duration-200 relative group flex flex-col items-center justify-between ${
              badge.unlocked
                ? 'bg-gradient-to-b from-amber-50/70 to-amber-100/40 border-amber-200 shadow-sm hover:shadow-md hover:scale-105'
                : 'bg-slate-50 border-slate-200 opacity-60 hover:opacity-80'
            }`}
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
              {badge.icon}
            </div>

            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-900 line-clamp-1">{badge.name}</p>
              <p className="text-[10px] font-semibold text-amber-700">{badge.xpPoints} XP</p>
            </div>

            {badge.unlocked ? (
              <span className="mt-2 inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="w-2.5 h-2.5" /> Earned
              </span>
            ) : (
              <span className="mt-2 inline-flex items-center gap-1 text-[9px] font-semibold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full">
                <Lock className="w-2.5 h-2.5" /> Locked
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Badge Details Modal / Card */}
      {selectedBadge && (
        <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 animate-in fade-in duration-150 relative">
          <button
            onClick={() => setSelectedBadge(null)}
            className="absolute top-3 right-3 text-slate-400 hover:text-white text-xs font-bold px-2 py-1 bg-slate-800 rounded"
          >
            Close
          </button>
          
          <div className="flex items-center gap-3">
            <span className="text-4xl">{selectedBadge.icon}</span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                {selectedBadge.category} Badge
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">{selectedBadge.name}</h3>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {selectedBadge.description}
          </p>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span>XP Value: <strong className="text-amber-400">{selectedBadge.xpPoints} Points</strong></span>
            <span>{selectedBadge.unlocked ? `Unlocked on ${selectedBadge.unlockedDate}` : 'Complete Module to Unlock Badge'}</span>
          </div>
        </div>
      )}

    </div>
  );
}
