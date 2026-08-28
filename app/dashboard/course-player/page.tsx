'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  PlayCircle, HelpCircle, CheckCircle2, ArrowLeft, ArrowRight, 
  Award, ShieldCheck, Download, RefreshCw, X 
} from 'lucide-react';
import { COURSES } from '@/lib/data';

export default function CoursePlayerPage() {
  const course = COURSES[0]; // Clinical Refraction Mastery
  const [activeLessonId, setActiveLessonId] = useState('les-1-3');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

  const activeLesson = course.modules.flatMap(m => m.lessons).find(l => l.id === activeLessonId) || course.modules[0].lessons[0];

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuizSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      
      {/* Course Player Top Navigation Bar */}
      <header className="h-16 bg-slate-900 border-b border-slate-800 px-4 sm:px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">Course Player</span>
            <h1 className="text-sm font-bold text-white line-clamp-1">{course.title}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCertModal(true)}
            className="px-3.5 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-sm transition-all"
          >
            <Award className="w-4 h-4" /> Claim Certificate
          </button>
        </div>
      </header>

      {/* Main Layout: Sidebar + Player */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Sidebar Module Navigator */}
        <aside className="w-full lg:w-80 bg-slate-900 border-r border-slate-800 p-4 overflow-y-auto space-y-4 flex-shrink-0">
          <div className="px-2 py-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Curriculum Modules</p>
          </div>

          <div className="space-y-4">
            {course.modules.map((mod, modIdx) => (
              <div key={mod.id} className="space-y-2">
                <p className="text-xs font-bold text-teal-400 px-2">{mod.title}</p>
                <div className="space-y-1">
                  {mod.lessons.map(les => {
                    const isActive = les.id === activeLessonId;
                    return (
                      <button
                        key={les.id}
                        onClick={() => setActiveLessonId(les.id)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${
                          isActive
                            ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                            : 'hover:bg-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {les.type === 'video' ? <PlayCircle className="w-4 h-4 text-sky-400" /> : <HelpCircle className="w-4 h-4 text-purple-400" />}
                          <span className="line-clamp-1">{les.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">{les.duration}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Right Main Lesson Content Area */}
        <main className="flex-1 bg-slate-950 p-6 sm:p-10 overflow-y-auto space-y-8">
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Current Lesson</span>
                <h2 className="text-2xl font-extrabold text-white mt-1">{activeLesson.title}</h2>
              </div>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded-lg border border-slate-700">
                Duration: {activeLesson.duration}
              </span>
            </div>

            {/* Video Player if lesson type is video */}
            {activeLesson.type === 'video' && activeLesson.videoUrl && (
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                <iframe
                  src={activeLesson.videoUrl}
                  title={activeLesson.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            )}

            {/* Reading text content */}
            {activeLesson.content && (
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-slate-300 text-sm leading-relaxed space-y-4">
                <p>{activeLesson.content}</p>
              </div>
            )}

            {/* Interactive Quiz Assessment Widget */}
            {activeLesson.type === 'quiz' && activeLesson.quiz && (
              <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Module Quiz Assessment</span>
                    <h3 className="text-xl font-bold text-white mt-1">Knowledge Verification Quiz</h3>
                  </div>
                  <span className="text-xs text-slate-400">{activeLesson.quiz.length} Questions</span>
                </div>

                <form onSubmit={handleQuizSubmit} className="space-y-6">
                  {activeLesson.quiz.map((q, qIdx) => {
                    const selectedIdx = quizAnswers[q.id];
                    const isCorrect = selectedIdx === q.correctIndex;
                    return (
                      <div key={q.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                        <p className="text-sm font-bold text-white">
                          Q{qIdx + 1}: {q.question}
                        </p>

                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = selectedIdx === optIdx;
                            let optionStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800';
                            if (quizSubmitted) {
                              if (optIdx === q.correctIndex) optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                              else if (isSelected && !isCorrect) optionStyle = 'bg-rose-950/80 border-rose-500 text-rose-300';
                            } else if (isSelected) {
                              optionStyle = 'bg-teal-500/20 border-teal-500 text-teal-300 font-bold';
                            }

                            return (
                              <button
                                key={optIdx}
                                type="button"
                                onClick={() => handleSelectOption(q.id, optIdx)}
                                className={`w-full text-left p-3 rounded-xl text-xs border transition-all flex items-center justify-between ${optionStyle}`}
                              >
                                <span>{opt}</span>
                                {quizSubmitted && optIdx === q.correctIndex && (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {quizSubmitted && (
                          <div className={`p-3 rounded-xl text-xs border ${isCorrect ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300' : 'bg-rose-950/40 border-rose-800 text-rose-300'}`}>
                            <strong>Explanation:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <div className="flex items-center justify-between pt-2">
                    {quizSubmitted ? (
                      <button
                        type="button"
                        onClick={() => {
                          setQuizSubmitted(false);
                          setQuizAnswers({});
                        }}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl flex items-center gap-1.5"
                      >
                        <RefreshCw className="w-3.5 h-3.5" /> Retry Quiz
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                      >
                        Submit Answers
                      </button>
                    )}

                    {quizSubmitted && (
                      <button
                        type="button"
                        onClick={() => setShowCertModal(true)}
                        className="px-5 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md"
                      >
                        <Award className="w-4 h-4" /> Claim Certificate
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}

          </div>

        </main>
      </div>

      {/* Certificate Modal */}
      {showCertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-teal-500/40 rounded-3xl max-w-lg w-full p-8 text-center space-y-5 shadow-2xl relative">
            <button
              onClick={() => setShowCertModal(false)}
              className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white rounded-full bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mx-auto border border-teal-500/30">
              <Award className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-white">Clinical Competency Certificate</h3>
            <p className="text-xs text-slate-300">
              This certifies that <strong>Rahul Sharma</strong> has cleared all Knowledge & Skill rubrics for <strong>{course.title}</strong>.
            </p>

            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-400 text-left space-y-1">
              <p><strong>Certificate ID:</strong> #AUR-2026-8941</p>
              <p><strong>Issuing Body:</strong> Aurosiksha Academic Board</p>
              <p><strong>Verification QR:</strong> Embedded & Validated</p>
            </div>

            <button
              onClick={() => alert('Downloaded Certificate PDF.')}
              className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Official PDF Certificate
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
