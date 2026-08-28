'use client';

import React from 'react';
import { BookOpen, ShieldCheck } from 'lucide-react';

interface ReadOnlineButtonProps {
  title: string;
}

export default function ReadOnlineButton({ title }: ReadOnlineButtonProps) {
  return (
    <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
      <button
        type="button"
        onClick={() => {
          alert(`Opened interactive web reader for: ${title}`);
        }}
        className="w-full sm:w-auto px-8 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm rounded-xl inline-flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
      >
        <BookOpen className="w-4 h-4" /> Read Online Now
      </button>
      <span className="text-xs text-slate-500 flex items-center gap-1">
        <ShieldCheck className="w-4 h-4 text-teal-600" /> Free Open Educational Access
      </span>
    </div>
  );
}
