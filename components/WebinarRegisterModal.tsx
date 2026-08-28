'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, User, Mail, Shield, Download } from 'lucide-react';
import { Webinar } from '@/lib/types';

interface WebinarRegisterModalProps {
  webinar: Webinar | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function WebinarRegisterModal({ webinar, isOpen, onClose }: WebinarRegisterModalProps) {
  const [registered, setRegistered] = useState(false);
  const [attendee, setAttendee] = useState({ name: '', email: '', role: 'Optometrist' });

  if (!isOpen || !webinar) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  const handleClose = () => {
    setRegistered(false);
    setAttendee({ name: '', email: '', role: 'Optometrist' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 uppercase tracking-wider mb-2 inline-block">
            {webinar.status === 'live' ? 'Live Webinar' : 'Live Interactive Event'}
          </span>
          <h3 className="text-xl font-bold tracking-tight">{webinar.title}</h3>
          <div className="flex items-center gap-4 text-xs text-slate-300 mt-3">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-sky-400" /> {webinar.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-sky-400" /> {webinar.time}</span>
          </div>
        </div>

        {registered ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Registration Confirmed!</h4>
            <p className="text-sm text-slate-600">
              We have reserved your seat, <strong className="text-slate-900">{attendee.name}</strong>. Access link and reminder emails have been sent to <strong className="text-slate-900">{attendee.email}</strong>.
            </p>
            <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 text-left text-xs text-sky-900 space-y-1 max-w-sm mx-auto">
              <p><strong>Speaker:</strong> {webinar.speaker.name} ({webinar.speaker.institution})</p>
              <p><strong>Duration:</strong> {webinar.duration}</p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  alert('Calendar invite (.ics) simulated download.');
                }}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold inline-flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Download className="w-3.5 h-3.5" /> Add to Calendar (.ics)
              </button>
              <button
                onClick={handleClose}
                className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-medium transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={attendee.name}
                  onChange={e => setAttendee({ ...attendee, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Email Address *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={attendee.email}
                  onChange={e => setAttendee({ ...attendee, email: e.target.value })}
                  placeholder="rahul@eyecare.org"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Primary Eye Care Role</label>
              <select
                value={attendee.role}
                onChange={e => setAttendee({ ...attendee, role: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white"
              >
                <option value="Refractionist">Refractionist</option>
                <option value="Optometrist">Optometrist</option>
                <option value="Ophthalmologist">Ophthalmologist</option>
                <option value="Operating Theatre Assistant">Operating Theatre Assistant</option>
                <option value="Vision Technician">Vision Technician</option>
                <option value="Educator / Trainer">Educator / Trainer</option>
              </select>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <Shield className="w-3.5 h-3.5 text-sky-600" /> Free registration
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all"
              >
                Confirm Spot
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
