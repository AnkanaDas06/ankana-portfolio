import React from 'react';
import { cvData } from '../data/cvData';
import { TiltCard } from '../utils/tiltEffect';

export default function TechnicalProfile() {
  const skillsData = [
    {
      category: "Programming Languages",
      color: "text-cyan-400",
      border: "border-cyan-500/40",
      items: [
        { name: "C", desc: "Procedural logic, pointers, memory allocation" },
        { name: "C++", desc: "C++20, STL, Object-Oriented design, DSA" },
        { name: "Java", desc: "OOP principles, collections, JVM fundamentals" },
        { name: "Python", desc: "Machine Learning, automation, scripting" }
      ]
    },
    {
      category: "Web & Frontend Technologies",
      color: "text-emerald-400",
      border: "border-emerald-500/40",
      items: [
        { name: "React.js", desc: "Component architecture, hooks, state management" },
        { name: "HTML5", desc: "Semantic layout, accessibility, modern standards" },
        { name: "CSS3", desc: "Flexbox, CSS Grid, keyframes, custom animations" },
        { name: "JavaScript", desc: "ES6+, DOM manipulation, asynchronous promises" },
        { name: "Tailwind CSS", desc: "Utility-first modern styling & responsiveness" }
      ]
    },
    {
      category: "Core CS & AI/ML Fundamentals",
      color: "text-sky-400",
      border: "border-sky-500/40",
      items: [
        { name: "Data Structures & Algorithms", desc: "Arrays, trees, graphs, sorting, searching, DP" },
        { name: "DBMS & SQL", desc: "Relational database schema, normalization, queries" },
        { name: "Machine Learning", desc: "Classification, regression, neural model concepts" },
        { name: "Git & GitHub", desc: "Version control, branching, repository management" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-12 bg-transparent">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase block mb-2">
            SLIDE 02 // TECHNICAL SKILLS & LANGUAGES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Programming Languages & Core Competencies
          </h2>
          <p className="mt-2 text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Core programming toolset and technical domain expertise developed across coursework, competitive coding, and practical software engineering.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((cat, idx) => (
            <TiltCard key={cat.category} maxTilt={6} className="h-full">
              <div className={`p-6 bg-black/90 border ${cat.border} rounded-sm shadow-xl flex flex-col justify-between h-full`}>
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 font-mono text-xs">
                    <span className={`${cat.color} font-bold tracking-wider uppercase`}>
                      SKILL_SET_0{idx + 1}
                    </span>
                    <span className="text-stone-500 text-[10px]">{cat.items.length} TECHNOLOGIES</span>
                  </div>

                  <h3 className="text-lg font-serif text-white font-medium mb-4">
                    {cat.category}
                  </h3>

                  <div className="space-y-3.5">
                    {cat.items.map((item) => (
                      <div key={item.name} className="p-2.5 rounded bg-stone-950/80 border border-stone-850">
                        <div className="font-mono text-xs text-white font-semibold flex items-center justify-between">
                          <span className="text-cyan-300">{item.name}</span>
                        </div>
                        <p className="text-[11px] text-stone-400 font-mono mt-0.5">
                          {item.desc}
                        </p>
                      </div>
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
