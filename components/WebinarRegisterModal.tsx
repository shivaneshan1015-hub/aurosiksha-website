'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, User, Mail, Shield, Download, Sparkles, Video, Award } from 'lucide-react';
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

  const handleGoogleCalendar = () => {
    if (!webinar) return;
    const title = encodeURIComponent(webinar.title);
    const details = encodeURIComponent(`Aurosiksha Masterclass: ${webinar.description}\n\nSpeaker: ${webinar.speaker.name} (${webinar.speaker.institution})\n\nAccess Link: https://aurosiksha.org/learn/webinars/${webinar.slug}`);
    const location = encodeURIComponent('Aurosiksha Live Virtual Room');
    const googleCalendarUrl = `https://calendar.google.com/render?action=TEMPLATE&text=${title}&dates=20260918T130000Z/20260918T143000Z&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  const handleIcsDownload = () => {
    if (!webinar) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Aurosiksha//Eye Care Webinars//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:${webinar.title}
DESCRIPTION:${webinar.description} \\nSpeaker: ${webinar.speaker.name} (${webinar.speaker.institution})
LOCATION:Aurosiksha Live Virtual Room
DTSTART:20260918T130000Z
DTEND:20260918T143000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${webinar.slug}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden animate-in zoom-in-95 duration-200 relative">
        
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-teal-950 text-white p-6 sm:p-7 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors z-10"
            aria-label="Close webinar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
              Featured Masterclass
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
              <Video className="w-3 h-3" /> Live Webinar
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
            {webinar.title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-900/60 p-2 rounded-xl border border-slate-800">
              <Calendar className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span className="font-medium truncate">{webinar.date}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/60 p-2 rounded-xl border border-slate-800">
              <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span className="font-medium truncate">{webinar.time}</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-1.5 bg-slate-900/60 p-2 rounded-xl border border-slate-800">
              <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="font-medium truncate">Free Spot</span>
            </div>
          </div>
        </div>

        {registered ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-extrabold text-slate-900">Seat Reserved Successfully!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{attendee.name}</strong>. Access credentials and calendar notifications have been sent to <strong className="text-slate-900">{attendee.email}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs text-slate-700 space-y-2 max-w-md mx-auto">
              <p><strong>Speaker:</strong> {webinar.speaker.name} ({webinar.speaker.institution})</p>
              <p><strong>Date & Time:</strong> {webinar.date} • {webinar.time}</p>
              <p><strong>Role:</strong> {attendee.role}</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleGoogleCalendar}
                className="px-5 py-3 sm:py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold inline-flex items-center justify-center gap-2 shadow-md transition-all min-h-[44px]"
              >
                <Calendar className="w-4 h-4" /> Add to Google Calendar
              </button>
              <button
                onClick={handleIcsDownload}
                className="px-5 py-3 sm:py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-semibold inline-flex items-center justify-center gap-2 transition-all min-h-[44px]"
              >
                <Download className="w-4 h-4" /> Download .ics File
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-7 space-y-6">
            
            {/* Speaker Info Card */}
            <div className="flex items-center gap-4 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
              <img 
                src={webinar.speaker.avatar} 
                alt={webinar.speaker.name} 
                className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-xs" 
              />
              <div>
                <p className="text-xs font-bold text-teal-700 uppercase tracking-wider">Featured Speaker</p>
                <p className="text-sm font-bold text-slate-900">{webinar.speaker.name}</p>
                <p className="text-xs text-slate-500">{webinar.speaker.role} • {webinar.speaker.institution}</p>
              </div>
            </div>

            {/* Key Objectives Preview */}
            {webinar.learningObjectives && webinar.learningObjectives.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700">What You Will Master:</p>
                <div className="space-y-1.5">
                  {webinar.learningObjectives.slice(0, 2).map((obj, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={attendee.name}
                      onChange={e => setAttendee({ ...attendee, name: e.target.value })}
                      placeholder="e.g. Dr. Ananya Sen"
                      className="w-full pl-9 pr-3 py-2.5 text-sm sm:text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={attendee.email}
                      onChange={e => setAttendee({ ...attendee, email: e.target.value })}
                      placeholder="ananya@eyecare.org"
                      className="w-full pl-9 pr-3 py-2.5 text-sm sm:text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white min-h-[44px]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Eye Care Role</label>
                <select
                  value={attendee.role}
                  onChange={e => setAttendee({ ...attendee, role: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm sm:text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white min-h-[44px]"
                >
                  <option value="Optometrist">Optometrist</option>
                  <option value="Refractionist">Refractionist</option>
                  <option value="Ophthalmologist">Ophthalmologist</option>
                  <option value="Operating Theatre Assistant">Operating Theatre Assistant</option>
                  <option value="Vision Technician">Vision Technician</option>
                  <option value="Educator / Student">Educator / Student</option>
                </select>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <Shield className="w-3.5 h-3.5 text-teal-600" /> Free Registration • Instant Confirmation
                </span>
                
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-3 sm:py-2.5 border border-slate-300 text-slate-600 hover:bg-slate-100 rounded-xl text-xs font-semibold w-1/2 sm:w-auto transition-colors min-h-[44px]"
                  >
                    Maybe Later
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 sm:py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-xs rounded-xl shadow-md hover:shadow-teal-500/20 transition-all w-1/2 sm:w-auto text-center min-h-[44px]"
                  >
                    Register Free Spot →
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
