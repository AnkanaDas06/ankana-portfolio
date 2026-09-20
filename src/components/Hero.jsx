import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Trophy, Sparkles, Terminal, Code2, GraduationCap, 
  Github, Linkedin, Mail, Twitter, Instagram, MessageCircle, Phone, 
  Box, UserCheck, School, Globe, CheckCircle2 
} from 'lucide-react';
import Hero3D from './Hero3D';
import { portfolioData } from '../data/portfolioData';
import { TiltCard } from '../utils/tiltEffect';

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayMode, setDisplayMode] = useState('photo'); // Set photo as main profile view by default!
  const subtitles = portfolioData.personal.subtitles;

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text & Information */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* University & Domain Status Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 w-fit backdrop-blur-md shadow-sm shadow-cyan-500/20">
                <School className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-mono text-cyan-300 font-bold tracking-wide">
                  Adamas University
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-mono text-slate-300 font-medium">
                  B.Tech CSE (AI & ML)
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-800 text-xs font-mono text-slate-400 backdrop-blur-md">
                <Globe className="w-3 h-3 text-cyan-400" />
                <span className="text-cyan-300 font-semibold">ankanadas.com</span>
              </div>
            </div>

            {/* Name, DP Avatar & Headline */}
            <div>
              <div className="flex items-center gap-4 mb-3">
                {/* DP Avatar next to name */}
                <div className="relative group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2.5px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 shadow-xl shadow-cyan-500/30">
                    <img
                      src={portfolioData.personal.photo}
                      alt={portfolioData.personal.name}
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    Official Portfolio
                  </span>
                  <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 animate-glow">
                      {portfolioData.personal.name}
                    </span>
                  </h1>
                </div>
              </div>

              {/* Dynamic Animated Subtitle */}
              <div className="h-10 mt-1 flex items-center">
                <span className="text-lg sm:text-2xl font-semibold text-slate-300 font-mono flex items-center gap-2">
                  <span className="text-cyan-400">&gt;</span>
                  <span className="transition-all duration-500">
                    {subtitles[subtitleIndex]}
                  </span>
                  <span className="w-2.5 h-6 bg-cyan-400 animate-pulse inline-block ml-1"></span>
                </span>
              </div>
            </div>

            {/* Personalized User Bio */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {portfolioData.personal.bio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#academics"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800/80 text-white border border-slate-700/80 hover:border-cyan-500/50 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Adamas Academics</span>
              </a>

              <a
                href="#achievements"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:border-amber-400/60 backdrop-blur-md transition-all duration-200"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Coding League (4th)</span>
              </a>
            </div>

            {/* Quick Social & Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-3 pt-3 text-slate-400">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-1">Direct Connect:</span>
              
              {/* LinkedIn */}
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>

              {/* GitHub */}
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-105"
                title="GitHub"
              >
                <Github className="w-4 h-4 text-slate-200" />
              </a>

              {/* X / Twitter */}
              <a
                href={portfolioData.personal.x}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-105"
                title="X (Twitter)"
              >
                <Twitter className="w-4 h-4 text-sky-400" />
              </a>

              {/* Instagram */}
              <a
                href={portfolioData.personal.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-pink-400 hover:text-pink-400 transition-all hover:scale-105"
                title="Instagram"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
              </a>

              {/* WhatsApp */}
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-400 hover:text-emerald-400 transition-all hover:scale-105"
                title="WhatsApp Direct (+91 9434987543)"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-400 hover:text-emerald-400 transition-all hover:scale-105"
                title="Call 9434987543"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-105"
                title="Email dasankana410@gmail.com"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Main Profile Display Card with 3D Toggle */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 rounded-full filter blur-3xl -z-10 animate-pulse-slow"></div>

            {/* View Switcher Controls */}
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-800 shadow-xl mb-4 z-20">
              <button
                onClick={() => setDisplayMode('photo')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  displayMode === 'photo'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Main Profile Photo</span>
              </button>

              <button
                onClick={() => setDisplayMode('3d')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  displayMode === '3d'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-md shadow-purple-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D Neural Core</span>
              </button>
            </div>

            {/* Display Area */}
            {displayMode === 'photo' ? (
              <div className="w-full flex justify-center py-2">
                <TiltCard maxTilt={10} className="rounded-3xl max-w-sm w-full">
                  <div className="relative rounded-3xl p-1.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 shadow-2xl shadow-cyan-950/60">
                    <div className="relative rounded-[22px] overflow-hidden bg-slate-950">
                      {/* Photo */}
                      <img
                        src={portfolioData.personal.photo}
                        alt="Ankana Das - Adamas University"
                        className="w-full h-80 sm:h-96 object-cover object-top hover:scale-105 transition-transform duration-500"
                      />

                      {/* Photo Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                      {/* Floating Status Badges */}
                      <div className="absolute bottom-4 left-4 right-4 flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-bold text-white text-lg block">
                              {portfolioData.personal.name}
                            </span>
                            <span className="text-[11px] font-mono text-cyan-400">
                              ankanadas.com
                            </span>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-mono font-semibold">
                            ● Active Undergrad
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-1 border-t border-slate-800/80">
                          <span className="text-cyan-300">Adamas University</span>
                          <span className="text-amber-300 font-bold">4th in Coding League</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center">
                <Hero3D />
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats Banner (3D Tilt Cards) */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioData.stats.map((stat, i) => (
            <TiltCard key={stat.label} maxTilt={8} className="rounded-2xl">
              <div
                className={`p-5 rounded-2xl h-full flex flex-col justify-between border ${
                  stat.highlight
                    ? 'bg-gradient-to-br from-amber-500/15 via-slate-900/80 to-slate-950 border-amber-500/40 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-900/70 border-slate-800/80 hover:border-cyan-500/30'
                } backdrop-blur-md`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  {stat.highlight && (
                    <Trophy className="w-4 h-4 text-amber-400 animate-bounce" />
                  )}
                </div>
                <div>
                  <div
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                      stat.highlight
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500'
                        : 'text-white'
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">
                    {stat.sub}
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
