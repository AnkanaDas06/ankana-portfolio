import React from 'react';
import { cvData } from '../data/cvData';
import { TiltCard } from '../utils/tiltEffect';

export default function AchievementsAndLeadership() {
  return (
    <section className="relative py-20 border-b border-stone-800 bg-[#05070c]">
      <div className="max-w-5xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Sub-Section 1: Achievements & Competition Honors */}
        <div>
          <div className="mb-10">
            <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase block mb-2">
              06 / ACHIEVEMENTS & COMPETITIVE MILESTONES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
              Honors & National Competitions
            </h2>
            <p className="mt-2 text-stone-300 text-sm max-w-2xl">
              Competitive hackathon finals, algorithmic finishes, and peer recognitions listed strictly per curriculum vitae record.
            </p>
          </div>

          {/* Timeline Table with 3D Tilt */}
          <div className="space-y-3">
            {cvData.achievements.map((item) => (
              <TiltCard key={item.title} maxTilt={3} className="rounded-sm">
                <div className="p-4 bg-dark-900/80 border border-stone-800 hover:border-cyan-500/30 rounded-sm grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline text-sm transition-colors">
                  <div className="sm:col-span-3 font-mono text-xs text-cyan-400">
                    {item.year}
                  </div>
                  <div className="sm:col-span-9 space-y-0.5">
                    <h3 className="font-sans font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {item.recognition}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Coding Problem-Solving Profiles */}
          <div className="mt-8 pt-4 border-t border-stone-800 flex flex-wrap items-center gap-6 text-xs font-mono">
            <span className="text-stone-500 uppercase tracking-wider">
              Algorithmic Profiles:
            </span>
            {cvData.codingProfiles.map((cp) => (
              <div key={cp.platform} className="text-stone-300 bg-dark-900 px-3 py-1.5 rounded border border-stone-800">
                <strong className="text-cyan-400 font-medium">{cp.platform}</strong>: {cp.metric} <span className="text-stone-500">({cp.focus})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-Section 2: Leadership & University Service */}
        <div className="pt-8 border-t border-stone-800">
          <div className="mb-10">
            <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase block mb-2">
              07 / LEADERSHIP & SERVICE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
              Academic & Departmental Leadership
            </h2>
            <p className="mt-2 text-stone-300 text-sm max-w-2xl">
              Fostering student technical culture, organizing competitive coding circles, and liaising between faculty and undergraduate cohorts.
            </p>
          </div>

          <div className="space-y-4">
            {cvData.leadership.map((lead) => (
              <TiltCard key={lead.organization} maxTilt={3} className="rounded-sm">
                <div className="p-5 bg-dark-900/80 border border-stone-800 hover:border-cyan-500/30 rounded-sm shadow-xl space-y-1.5 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-sans font-medium text-base text-white">
                      {lead.role} <span className="text-cyan-400 font-normal">· {lead.organization}</span>
                    </h3>
                    <span className="font-mono text-xs text-stone-400">
                      {lead.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {lead.description}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Sub-Section 3: Academic Exposure & Certifications */}
        <div className="pt-8 border-t border-stone-800 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Academic Exposure */}
          <div className="space-y-4">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block">
              Academic & Industrial Exposure
            </span>
            <div className="space-y-3">
              {cvData.academicExposure.map((exp) => (
                <div key={exp.institution} className="p-4 bg-dark-900/70 border border-stone-800 rounded-sm text-xs space-y-1">
                  <div className="flex items-baseline justify-between font-mono text-stone-400">
                    <span className="text-cyan-400">{exp.type}</span>
                    <span>{exp.year}</span>
                  </div>
                  <h4 className="font-medium text-white font-sans text-sm">
                    {exp.institution}
                  </h4>
                  <p className="text-stone-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block">
                Technical Certifications
              </span>
              <div className="space-y-2">
                {cvData.certifications.map((cert) => (
                  <div key={cert.title} className="text-xs flex items-baseline justify-between py-1 border-b border-stone-800">
                    <span className="text-stone-200 font-medium">{cert.title}</span>
                    <span className="font-mono text-cyan-400 pl-2 text-right">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block">
                Languages
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-stone-300">
                {cvData.languages.map((lang) => (
                  <span key={lang.name} className="px-2 py-0.5 bg-dark-900 border border-stone-800 rounded-sm">
                    {lang.name} ({lang.level})
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
