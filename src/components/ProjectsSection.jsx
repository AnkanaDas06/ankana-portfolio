import React from 'react';
import { cvData } from '../data/cvData';
import { TiltCard } from '../utils/tiltEffect';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-12 bg-transparent">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase block mb-2">
            SLIDE 03 // PROJECTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Curriculum Vitae (CV) & Engineering Projects
          </h2>
          <p className="mt-2 text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Core intelligent systems, machine learning models, and high-performance engineering archives from Ankana Das's verified CV — featuring AI code analyzers, SIH national finalist biometrics, predictive valuation, high-performance C++20 algorithms, and computer vision.
          </p>
        </div>

        {/* Project Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cvData.projects.map((project, idx) => (
            <TiltCard key={project.id} maxTilt={6} className="rounded-sm h-full">
              <div className="p-6 bg-black/90 border border-stone-800 hover:border-cyan-500/50 transition-all rounded-sm flex flex-col justify-between h-full shadow-xl">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-800 text-[11px] font-mono">
                    <span className="text-cyan-400 font-bold">PROJECT_0{idx + 1}</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 hover:text-white transition-colors flex items-center gap-1"
                    >
                      GitHub Profile / Repo ↗
                    </a>
                  </div>

                  {project.highlight && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-2.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 text-[10.5px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{project.highlight}</span>
                    </div>
                  )}

                  <h3 className="font-serif text-xl text-white font-medium mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-stone-400 mb-2">
                    <span className="text-stone-500">Tech Stack:</span> {project.tech}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/20 text-[10px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
