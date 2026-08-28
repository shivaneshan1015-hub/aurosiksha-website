'use client';

import React from 'react';
import { Download, ShieldCheck } from 'lucide-react';

interface DownloadButtonProps {
  title: string;
  format: string;
}

export default function DownloadButton({ title, format }: DownloadButtonProps) {
  return (
    <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
      <button
        type="button"
        onClick={() => {
          alert(`Simulated direct download of file: ${title} (${format})`);
        }}
        className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl inline-flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
      >
        <Download className="w-4 h-4" /> Download File ({format})
      </button>
      <span className="text-xs text-slate-500 flex items-center gap-1">
        <ShieldCheck className="w-4 h-4 text-emerald-600" /> Free Open Educational Resource
      </span>
    </div>
  );
}
