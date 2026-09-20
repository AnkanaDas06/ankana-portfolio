import React from 'react';
import { cvData } from '../data/cvData';
import { TiltCard } from '../utils/tiltEffect';

export default function AcademicBackground() {
  const { semesters } = cvData.personal;

  return (
    <section id="academics" className="relative py-12 bg-transparent">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase block mb-2">
            SLIDE 04 // ACADEMICS & ACHIEVEMENTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Academic Standings & Honors
          </h2>
          <p className="mt-2 text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Scholastic performance at <span className="text-cyan-400 font-semibold">Adamas University</span>, state board examination distinctions, and competitive programming achievements.
          </p>
        </div>

        {/* 1. Academic Standings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <TiltCard maxTilt={5}>
            <div className="p-5 rounded bg-black/90 border border-cyan-500/40 shadow-xl font-mono">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-1">CURRENT DEGREE</span>
              <div className="text-base text-white font-bold font-serif mb-1">Adamas University</div>
              <div className="text-xs text-cyan-300">B.Tech CSE (AI & ML)</div>
              <div className="text-[11px] text-stone-400 mt-2 border-t border-stone-800 pt-2 flex items-center justify-between">
                <span>Standing:</span>
                <span className="text-emerald-400 font-bold">{semesters.year}</span>
              </div>
            </div>
          </TiltCard>

          <TiltCard maxTilt={5}>
            <div className="p-5 rounded bg-black/90 border border-emerald-500/40 shadow-xl font-mono">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-1">SEMESTER PERFORMANCE</span>
              <div className="text-xl text-emerald-400 font-bold mb-1">{semesters.cgpa}</div>
              <div className="text-xs text-stone-300">1st Sem: <strong className="text-white">{semesters.sem1}</strong></div>
              <div className="text-xs text-stone-300">2nd Sem: <strong className="text-white">{semesters.sem2}</strong></div>
              <div className="text-[10px] text-stone-500 mt-2 border-t border-stone-800 pt-2">
                Adamas Univ Semester Exams
              </div>
            </div>
          </TiltCard>

          <TiltCard maxTilt={5}>
            <div className="p-5 rounded bg-black/90 border border-sky-500/40 shadow-xl font-mono">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-1">STATE BOARD SCORES</span>
              <div className="text-xs text-stone-300 mb-1">
                WBBSE (10th): <strong className="text-white">{semesters.wbbse}</strong>
              </div>
              <div className="text-xs text-stone-300">
                WBCHSE (12th): <strong className="text-white">{semesters.wbchse}</strong>
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold mt-3 border-t border-stone-800 pt-2">
                ✓ First Division with Distinction
              </div>
            </div>
          </TiltCard>
        </div>

        {/* 2. Key Achievements & Competitions */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold">
            COMPETITIVE HONORS & RECOGNITIONS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cvData.achievements.map((item, idx) => (
              <TiltCard key={item.title} maxTilt={5}>
                <div className="p-5 rounded bg-black/85 border border-stone-800 hover:border-cyan-500/40 transition-all shadow-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 font-mono text-[11px]">
                      <span className="text-stone-500">HONOR_0{idx + 1}</span>
                      <span className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 font-semibold">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg text-white font-medium mb-1.5">
                      {item.title}
                    </h4>

                    <p className="text-xs text-stone-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-900 mt-3 text-[11px] font-mono text-stone-400">
                    Issuer: <span className="text-stone-200">{item.issuer}</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
