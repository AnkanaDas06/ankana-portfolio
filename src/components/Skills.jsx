import React, { useState } from 'react';
import { Code, Terminal, Brain, Wrench, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TiltCard } from '../utils/tiltEffect';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'programming', label: 'Languages (C, C++, Java, Python)', icon: Code },
    { id: 'webDevelopment', label: 'Web (React, HTML, CSS)', icon: Terminal },
    { id: 'aiAndData', label: 'AI / ML & Data', icon: Brain },
    { id: 'csFundamentals', label: 'Core CS & Tools', icon: Wrench },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        ...portfolioData.skills.programming.map(s => ({ ...s, category: 'Programming' })),
        ...portfolioData.skills.webDevelopment.map(s => ({ ...s, category: 'Web Development' })),
        ...portfolioData.skills.aiAndData.map(s => ({ ...s, category: 'AI & Data Science' })),
        ...portfolioData.skills.csFundamentals.map(s => ({ ...s, category: 'Core CS & Tools' })),
      ];
    }
    return portfolioData.skills[activeTab].map(s => ({ ...s, category: activeTab }));
  };

  const skillsList = getFilteredSkills();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Languages, Web & <span className="text-gradient-cyan">AI Ecosystem</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl">
            A versatile technical toolkit encompassing high-performance systems programming, full-stack web architecture, and machine learning pipelines.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-lg shadow-cyan-500/30 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill) => (
            <TiltCard key={skill.name} maxTilt={10} className="rounded-2xl">
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-md h-full flex flex-col justify-between transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      <span>{skill.name}</span>
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden p-0.5 border border-slate-700/50">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span>PROFICIENCY</span>
                    <span className="text-slate-400">{skill.category}</span>
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
