import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle, ChevronRight, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TiltCard } from '../utils/tiltEffect';

export default function Academics() {
  return (
    <section id="academics" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Scholastic Journey</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl">
            A consistent record of academic discipline, mathematical foundation, and engineering rigor.
          </p>
        </div>

        {/* Academic Timeline */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {portfolioData.academics.map((item, index) => {
            const isCurrent = index === 0;
            return (
              <div key={item.degree} className="relative pl-8 md:pl-12 group">
                {/* Glowing Node Point */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-125 ${
                    isCurrent
                      ? 'bg-cyan-950 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/50'
                      : 'bg-slate-900 border-slate-700 text-slate-400 group-hover:border-purple-400'
                  }`}
                >
                  {isCurrent ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                  ) : (
                    <Award className="w-4 h-4" />
                  )}
                </div>

                {/* Card Container */}
                <TiltCard maxTilt={8} className="rounded-2xl">
                  <div
                    className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                      isCurrent
                        ? 'bg-gradient-to-br from-cyan-950/40 via-slate-900/90 to-slate-950 border-cyan-500/40 shadow-xl shadow-cyan-950/50'
                        : 'bg-slate-900/70 border-slate-800/80 hover:border-slate-700'
                    } backdrop-blur-md`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                              isCurrent
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                                : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                            }`}
                          >
                            {item.status}
                          </span>
                          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.degree}
                        </h3>
                        <p className="text-sm font-medium text-slate-400 mt-1">
                          {item.institution}
                        </p>
                      </div>

                      {/* Prominent Score Tag */}
                      <div className="inline-flex flex-col items-start md:items-end justify-center px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 shadow-inner">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          Evaluation Metric
                        </span>
                        <span className="text-base sm:text-lg font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
                          {item.score}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Breakdown Highlights */}
                    {isCurrent ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-cyan-500/20 flex items-center justify-between">
                          <span className="text-xs font-mono text-slate-400">1st Semester SGPA:</span>
                          <span className="text-sm font-bold text-cyan-300 font-mono">8.45 / 10.0</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-cyan-500/20 flex items-center justify-between">
                          <span className="text-xs font-mono text-slate-400">2nd Semester SGPA:</span>
                          <span className="text-sm font-bold text-cyan-300 font-mono">7.81 / 10.0</span>
                        </div>
                      </div>
                    ) : item.badge.includes('81.6%') ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                          <span className="text-xs font-mono text-slate-400">Total Marks Obtained:</span>
                          <span className="text-sm font-bold text-purple-300 font-mono">408 / 500</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                          <span className="text-xs font-mono text-slate-400">Final Percentage:</span>
                          <span className="text-sm font-bold text-purple-300 font-mono">81.6%</span>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                          <span className="text-xs font-mono text-slate-400">Total Marks Obtained:</span>
                          <span className="text-sm font-bold text-emerald-300 font-mono">623 / 700</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                          <span className="text-xs font-mono text-slate-400">Final Percentage:</span>
                          <span className="text-sm font-bold text-emerald-300 font-mono">89.0%</span>
                        </div>
                      </div>
                    )}
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
