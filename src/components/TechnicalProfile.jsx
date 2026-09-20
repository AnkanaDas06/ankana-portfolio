import React from 'react';
import { cvData } from '../data/cvData';
import { TiltCard } from '../utils/tiltEffect';

export default function TechnicalProfile() {
  const tp = cvData.technicalProfile;

  const categories = [
    { title: "Programming Languages", items: tp.programming, color: "text-cyan-300" },
    { title: "Machine Learning & AI", items: tp.machineLearning, color: "text-emerald-300" },
    { title: "Systems & Computer Science", items: tp.systemsAndCS, color: "text-sky-300" },
    { title: "DevOps, Build & Tooling", items: tp.devOpsAndTools, color: "text-amber-300" },
  ];

  return (
    <section className="relative py-20 border-b border-stone-800 bg-[#06080f]/90">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase block mb-2">
            08 / TECHNICAL PROFILE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Technical Inventory
          </h2>
          <p className="mt-2 text-stone-300 text-sm max-w-2xl">
            A compact, structured inventory of core programming languages, scientific computing frameworks, and systems engineering tooling.
          </p>
        </div>

        {/* Structured Inventory Table with 3D Tilt */}
        <TiltCard maxTilt={3} className="rounded-sm">
          <div className="border border-stone-800 bg-dark-900/90 rounded-sm divide-y divide-stone-800 shadow-2xl">
            {categories.map((cat) => (
              <div key={cat.title} className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline">
                <div className="sm:col-span-4 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {cat.title}
                </div>
                <div className="sm:col-span-8 font-mono text-xs text-stone-300 leading-relaxed flex flex-wrap gap-x-2 gap-y-1">
                  {cat.items.map((item, i) => (
                    <span key={item} className="hover:text-white transition-colors">
                      {item}{i < cat.items.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TiltCard>

      </div>
    </section>
  );
}
