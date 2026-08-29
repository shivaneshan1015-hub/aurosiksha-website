'use client';

import React from 'react';
import { X, PlayCircle, Clock, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CourseVideoPreviewModalProps {
  lesson: {
    id: string;
    title: string;
    duration: string;
    type: string;
    content?: string;
    videoUrl?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CourseVideoPreviewModal({ lesson, isOpen, onClose }: CourseVideoPreviewModalProps) {
  if (!isOpen || !lesson) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 relative">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
              <PlayCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950 px-2 py-0.5 rounded border border-teal-800">
                Sample Module Video Preview
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
                {lesson.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="bg-slate-950 aspect-video w-full relative flex items-center justify-center overflow-hidden">
          {lesson.videoUrl ? (
            <iframe
              src={lesson.videoUrl}
              title={lesson.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-8 space-y-3">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/30 animate-pulse">
                <PlayCircle className="w-8 h-8" />
              </div>
              <p className="text-sm font-bold text-white">Interactive Lesson Preview</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {lesson.content || 'Master collar position adjustments, plane vs concave mirror optics, and streak reflex neutralization.'}
              </p>
            </div>
          )}
        </div>

        {/* Lesson Details & CTA */}
        <div className="p-6 space-y-4 bg-white">
          <div className="flex items-center justify-between text-xs text-slate-600 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-1.5 font-semibold text-slate-700">
              <Clock className="w-4 h-4 text-emerald-600" /> Duration: {lesson.duration}
            </span>
            <span className="flex items-center gap-1 font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5" /> Full Module Unlocked
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {lesson.content || 'This lesson covers fundamental retinoscopy concepts, streak alignment, working distance lens deductions, and recognizing With vs Against motion in complex astigmatism.'}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-semibold"
            >
              Close Preview
            </button>

            <Link
              href="/dashboard/course-player"
              className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2"
            >
              Enrol Full Course <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
