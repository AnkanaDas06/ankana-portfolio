import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { TiltCard } from '../utils/tiltEffect';

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleProject = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="relative py-20 border-b border-stone-800 bg-[#05070c]">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase block mb-2">
            02 / PROJECTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Research-Project Archive
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Engineered systems and algorithmic implementations spanning neural code semantic parsing, low-latency edge biometric vector retrieval, robust statistical regression pipelines, and deterministic modern C++20 data structures.
          </p>
        </div>

        {/* Project Archive List with 3D Tilt */}
        <div className="space-y-4">
          {cvData.projects.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            return (
              <TiltCard key={project.id} maxTilt={4} className="rounded-sm">
                <div 
                  className="p-5 sm:p-6 bg-dark-900/80 border border-stone-800 hover:border-cyan-500/40 transition-all rounded-sm"
                >
                  <div 
                    onClick={() => toggleProject(project.id)}
                    className="cursor-pointer flex flex-col md:flex-row md:items-baseline justify-between gap-3 select-none"
                  >
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-cyan-400">
                          [{String(idx + 1).padStart(2, '0')}]
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl text-white font-medium hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">
                          {project.domain}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-300 pl-8">
                        {project.shortSummary}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pl-8 pt-1">
                        {project.tech.map((t) => (
                          <span key={t} className="text-xs font-mono text-stone-400 bg-dark-850 px-1.5 py-0.5 rounded border border-stone-800">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pl-8 md:pl-0 flex items-center gap-4 text-xs font-mono">
                      <span className="text-cyan-400">
                        {isExpanded ? 'Inspect [-]' : 'Inspect [+]'}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Breakdown: Problem / Approach / Technology / Results */}
                  {isExpanded && (
                    <div className="mt-6 pt-5 border-t border-stone-800 pl-8 space-y-4 text-sm animate-fadeIn bg-dark-950/80 p-5 rounded-sm border border-stone-800">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-3">
                          <span className="font-mono text-xs font-semibold uppercase text-cyan-400 tracking-wider">
                            Problem
                          </span>
                        </div>
                        <div className="md:col-span-9 text-stone-300 text-xs sm:text-sm leading-relaxed">
                          {project.problem}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2 border-t border-stone-800/80">
                        <div className="md:col-span-3">
                          <span className="font-mono text-xs font-semibold uppercase text-cyan-400 tracking-wider">
                            Approach
                          </span>
                        </div>
                        <div className="md:col-span-9 text-stone-300 text-xs sm:text-sm leading-relaxed">
                          {project.approach}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2 border-t border-stone-800/80">
                        <div className="md:col-span-3">
                          <span className="font-mono text-xs font-semibold uppercase text-cyan-400 tracking-wider">
                            Technology
                          </span>
                        </div>
                        <div className="md:col-span-9 font-mono text-xs text-stone-400">
                          {project.technology}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2 border-t border-stone-800/80">
                        <div className="md:col-span-3">
                          <span className="font-mono text-xs font-semibold uppercase text-emerald-400 tracking-wider">
                            Key Results
                          </span>
                        </div>
                        <div className="md:col-span-9 text-emerald-300 font-medium text-xs sm:text-sm">
                          {project.results}
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <a
                          href={cvData.personal.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono text-cyan-400 hover:underline"
                        >
                          Source Repository on GitHub ↗
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
