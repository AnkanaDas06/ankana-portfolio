import React from 'react';
import { Trophy, Award, Medal, Sparkles, PartyPopper, CheckCircle, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { TiltCard } from '../utils/tiltEffect';

export default function Achievements() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const iconMap = {
    Trophy: <Trophy className="w-8 h-8 text-amber-400" />,
    Award: <Award className="w-8 h-8 text-cyan-400" />,
    Medal: <Medal className="w-8 h-8 text-purple-400" />,
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300 mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>HONORS & COMPETITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key Milestones & <span className="text-gradient-gold">Achievements</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl">
            Recognitions earned through competitive programming speed, algorithmic rigor, and scholastic dedication.
          </p>
        </div>

        {/* Featured Spotlight: Coding Premier League (4th Position) */}
        <div className="mb-12">
          <TiltCard maxTilt={6} className="rounded-3xl">
            <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-950/30 via-slate-900/90 to-slate-950 border-2 border-amber-500/40 shadow-2xl shadow-amber-950/40 backdrop-blur-xl overflow-hidden group">
              {/* Background ambient light */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Badge & Trophy */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/40 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20 animate-float">
                    <Trophy className="w-10 h-10 text-amber-400" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono text-xs font-bold tracking-wider uppercase mb-2">
                    Official Recognition
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
                    4th Position
                  </div>
                  <span className="text-sm font-mono text-slate-400 mt-1">
                    Coding Premier League
                  </span>
                </div>

                {/* Right Description & Action */}
                <div className="lg:col-span-8 flex flex-col space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Coding Premier League — Algorithmic Championship
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Clinched the outstanding <span className="text-amber-300 font-semibold">4th position</span> in the Coding Premier League. Demonstrated rapid algorithmic problem formulation, efficient data structure implementation, dynamic programming problem-solving, and edge-case mastery against hundreds of competitive collegiate programmers.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Competitive Coding", "Data Structures", "Algorithm Optimization", "C++ / Python"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <button
                      onClick={triggerConfetti}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 shadow-lg shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all"
                    >
                      <PartyPopper className="w-4 h-4" />
                      <span>Celebrate 4th Rank 🎉</span>
                    </button>
                    <span className="text-xs text-slate-400 font-mono">
                      Click to shoot celebration confetti!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Other Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.achievements.slice(1).map((ach) => (
            <TiltCard key={ach.title} maxTilt={8} className="rounded-2xl h-full">
              <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-md h-full flex flex-col justify-between transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {iconMap[ach.icon]}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {ach.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-3">
                    {ach.organization} • {ach.period}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {ach.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  {ach.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
