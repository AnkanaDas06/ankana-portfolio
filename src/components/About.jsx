import React from 'react';
import { Cpu, Code2, Rocket, Users, Terminal, Sparkles, Compass, CheckCircle2, MapPin, Mail, Phone, School, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TiltCard } from '../utils/tiltEffect';

export default function About() {
  const iconMap = {
    Cpu: <Cpu className="w-6 h-6 text-cyan-400" />,
    Code2: <Code2 className="w-6 h-6 text-purple-400" />,
    Rocket: <Rocket className="w-6 h-6 text-amber-400" />,
    Users: <Users className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Curiosity, Code & <span className="text-gradient-cyan">Artificial Intelligence</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl">
            Computer Science and Engineering student at <span className="text-cyan-300 font-semibold">Adamas University</span>, blending mathematical logic with machine learning systems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Profile Card & Terminal */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Main Profile / DP Card */}
            <TiltCard maxTilt={8} className="rounded-2xl">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 via-[#0a0e1a] to-slate-950 border border-cyan-500/30 shadow-xl backdrop-blur-md flex items-center gap-5">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 flex-shrink-0 shadow-lg shadow-cyan-500/20">
                  <img
                    src={portfolioData.personal.photo}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover object-top rounded-[14px]"
                  />
                  <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-950" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 font-semibold mb-0.5">
                    <School className="w-3 h-3" />
                    <span>Adamas University</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {portfolioData.personal.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    B.Tech CSE (AI & ML) • 2nd Year
                  </p>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-300/90 mt-1">
                    <Globe className="w-3 h-3 text-cyan-400" />
                    <span>ankanadas.com</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold">
                      🏆 4th Coding League
                    </span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-mono">
                      8.45 SGPA
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Interactive Developer Terminal */}
            <div className="rounded-2xl bg-[#090d16] border border-slate-800 shadow-2xl overflow-hidden flex-1 flex flex-col">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#0d121f] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ankana@ankanadas.com:~</span>
                </div>
                <div className="w-10"></div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3.5 text-slate-300 flex-1 flex flex-col justify-center">
                <div>
                  <span className="text-cyan-400 font-bold">$ cat profile.json</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-900 leading-relaxed text-slate-300 text-xs">
                  <p className="text-purple-300">{"{"}</p>
                  <p className="pl-4"><span className="text-cyan-400">"name"</span>: <span className="text-amber-300">"Ankana Das"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">"university"</span>: <span className="text-amber-300">"Adamas University"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">"major"</span>: <span className="text-amber-300">"B.Tech CSE (AI & ML)"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">"year"</span>: <span className="text-emerald-400">2</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">"website"</span>: <span className="text-cyan-300">"https://ankanadas.com"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">"focus"</span>: [<span className="text-amber-300">"Machine Learning"</span>, <span className="text-amber-300">"Algorithms"</span>, <span className="text-amber-300">"Full-Stack Web"</span>],</p>
                  <p className="pl-4"><span className="text-cyan-400">"mindset"</span>: <span className="text-amber-300">"Turning theoretical ideas into practical software"</span></p>
                  <p className="text-purple-300">{"}"}</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-bold">$ echo $PASSION</span>
                  <p className="mt-1 text-slate-400 text-xs italic font-sans leading-relaxed">
                    "Driven by curiosity and a desire to turn ideas into practical, technology-driven solutions at Adamas University and beyond."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Strategic Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolioData.pillars.map((pillar, i) => (
              <TiltCard key={pillar.title} maxTilt={10} className="rounded-2xl h-full">
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-md h-full flex flex-col justify-between transition-colors group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {iconMap[pillar.icon]}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-xs font-mono text-cyan-400/80">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active Pursuit</span>
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
