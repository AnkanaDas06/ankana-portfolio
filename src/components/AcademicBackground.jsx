import React from 'react';
import { cvData } from '../data/cvData';
import { TiltCard } from '../utils/tiltEffect';

export default function AcademicBackground() {
  const [btech, higherSec, sec] = cvData.education;

  return (
    <section id="about" className="relative py-20 border-b border-stone-800 bg-[#06080f]/90">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase block mb-2">
            05 / ACADEMIC BACKGROUND
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Scholastic Foundation
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Rigorous undergraduate training in computer science theory, discrete mathematics, and statistical learning at <span className="text-cyan-400 font-semibold">Adamas University</span>, preceded by honors science coursework.
          </p>
        </div>

        <div className="space-y-10">
          {/* Primary: B.Tech University Entry with 3D Tilt */}
          <TiltCard maxTilt={4} className="rounded-sm">
            <div className="bg-dark-900/80 border border-stone-800 rounded-sm p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-800 pb-4 mb-5">
                <div>
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
                    Undergraduate Degree · Adamas University
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal mt-0.5">
                    {btech.degree}
                  </h3>
                  <p className="text-sm font-sans text-stone-300">
                    Specialization in <span className="text-cyan-300 font-medium">{btech.specialization}</span> · {btech.institution}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="font-mono text-xs text-stone-400 block">
                    {btech.period}
                  </span>
                  <span className="font-mono text-sm font-bold text-cyan-400">
                    {btech.gpa}
                  </span>
                </div>
              </div>

              {/* GPA Breakdown & Honors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono mb-6 bg-dark-950 p-4 rounded-sm border border-stone-800">
                <div>
                  <span className="text-stone-500 block mb-0.5">Semester Performance:</span>
                  <span className="text-white font-medium">
                    {btech.semesters}
                  </span>
                </div>
                <div>
                  <span className="text-stone-500 block mb-0.5">Academic Honors:</span>
                  <span className="text-cyan-300 font-medium">
                    {btech.honors}
                  </span>
                </div>
              </div>

              {/* Coursework Index */}
              <div>
                <span className="font-mono text-xs text-stone-400 uppercase tracking-wider block mb-2">
                  Curriculum & Theoretical Coursework:
                </span>
                <div className="flex flex-wrap gap-2">
                  {btech.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 text-xs font-mono text-stone-300 bg-dark-850 border border-stone-800 rounded-sm hover:border-cyan-500/40 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Secondary: School Education (Visually understated) */}
          <div className="pt-4">
            <span className="font-mono text-xs text-stone-500 uppercase tracking-wider block mb-4">
              Secondary & Higher Secondary Education (Prior Record)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Higher Secondary */}
              <TiltCard maxTilt={4} className="rounded-sm">
                <div className="p-4 bg-dark-900/60 border border-stone-800 rounded-sm text-xs space-y-1">
                  <div className="flex items-baseline justify-between text-stone-500 font-mono">
                    <span>WBCHSE (Class XII)</span>
                    <span>{higherSec.period}</span>
                  </div>
                  <h4 className="font-medium text-white font-sans text-sm">
                    {higherSec.degree}
                  </h4>
                  <p className="text-cyan-300 font-mono">
                    {higherSec.score} · {higherSec.stream}
                  </p>
                  <p className="text-stone-400 text-[11px] pt-1">
                    {higherSec.honors}
                  </p>
                </div>
              </TiltCard>

              {/* Secondary */}
              <TiltCard maxTilt={4} className="rounded-sm">
                <div className="p-4 bg-dark-900/60 border border-stone-800 rounded-sm text-xs space-y-1">
                  <div className="flex items-baseline justify-between text-stone-500 font-mono">
                    <span>WBBSE (Class X)</span>
                    <span>{sec.period}</span>
                  </div>
                  <h4 className="font-medium text-white font-sans text-sm">
                    {sec.degree}
                  </h4>
                  <p className="text-cyan-300 font-mono">
                    {sec.score}
                  </p>
                  <p className="text-stone-400 text-[11px] pt-1">
                    {sec.honors}
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
