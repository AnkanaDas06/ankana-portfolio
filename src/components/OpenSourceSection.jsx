import React from 'react';
import { cvData } from '../data/cvData';
import { TiltCard } from '../utils/tiltEffect';

export default function OpenSourceSection() {
  const os = cvData.openSource;

  return (
    <section id="open-source" className="relative py-20 border-b border-stone-800 bg-[#05070c]">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase block mb-2">
            04 / OPEN SOURCE LEADERSHIP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Community Software Engineering
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Contributing to developer infrastructure, automating continuous integration pipelines, and maintaining code quality across public repositories.
          </p>
        </div>

        {/* Contribution Narrative & Timeline with 3D Tilt */}
        <TiltCard maxTilt={4} className="rounded-sm">
          <div className="bg-dark-900/80 border border-stone-800 rounded-sm p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-stone-800 pb-4 mb-6 gap-2">
              <div>
                <h3 className="font-serif text-2xl text-white font-normal">
                  {os.role}
                </h3>
                <p className="text-sm font-sans text-cyan-400">
                  {os.organization}
                </p>
              </div>
              <span className="font-mono text-xs text-stone-400">
                {os.period}
              </span>
            </div>

            {/* Structured Contribution Evidence */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              {os.contributions.map((item, idx) => (
                <div key={item.title} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-cyan-400">
                      §{idx + 1}
                    </span>
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed pl-5">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* GitHub verification line */}
            <div className="mt-8 pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
              <span>Verified commits & code reviews via public Git index</span>
              <a
                href={cvData.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline"
              >
                github.com/AnkanaDas06 ↗
              </a>
            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}
