import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import ResearchCore3D from './ResearchCore3D';
import Photo3D from './Photo3D';
import { TiltCard } from '../utils/tiltEffect';

export default function HomeHero({ onNavigatePage }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cvData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative pt-10 pb-20 border-b border-stone-800 bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Computer Workstation Terminal Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 py-2 px-3.5 mb-10 bg-black/90 border border-cyan-500/30 rounded font-mono text-[11px] shadow-lg shadow-cyan-950/40">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-cyan-400 font-bold tracking-wide">ADAMAS_WORKSTATION://CLUSTER_01</span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-300">USER: ANKANA DAS</span>
            <span className="text-stone-600">|</span>
            <span className="text-cyan-300">ankanadas.com</span>
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>B.TECH CSE (AI/ML)</span>
            <span className="text-emerald-400">STATUS: ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Academic Identity & Research Statement */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header: DP Avatar & Name */}
            <div className="flex items-center gap-5">
              {/* Circular DP Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2.5px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-emerald-400 shadow-xl shadow-cyan-500/30">
                  <img
                    src={cvData.personal.photo || './ankana-photo.jpg'}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = './ankana-photo.jpg'; }}
                    alt={cvData.personal.name}
                    className="w-full h-full object-cover object-top rounded-full filter contrast-[1.04]"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-black flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </span>
              </div>

              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold block mb-0.5">
                  Computer Science & AI/ML Researcher
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl text-white tracking-tight font-normal">
                  {cvData.personal.name}
                </h1>
                <p className="font-mono text-xs text-stone-400 pt-0.5">
                  Adamas University · Kolkata, India
                </p>
              </div>
            </div>

            {/* Research Statement */}
            <p className="font-serif text-lg sm:text-xl text-stone-200 leading-snug italic max-w-2xl font-normal border-l-2 border-cyan-400 pl-4 py-0.5">
              "{cvData.personal.statement}"
            </p>

            {/* Academic Credentials Box */}
            <div className="text-xs font-mono text-stone-300 space-y-1.5 bg-black/85 p-4 rounded border border-stone-800 shadow-inner">
              <div className="flex items-center justify-between border-b border-stone-800/80 pb-1">
                <span className="text-stone-400">Institutional Affiliation:</span>
                <span className="text-cyan-300 font-semibold">{cvData.personal.institution}, Kolkata</span>
              </div>
              <div className="flex items-center justify-between border-b border-stone-800/80 pb-1">
                <span className="text-stone-400">Degree & Specialization:</span>
                <span className="text-white">B.Tech CSE (Artificial Intelligence & ML)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Academic Standing:</span>
                <span className="text-emerald-400 font-bold">CGPA: 8.13 / 10.00 (Sem 1: 8.45 · Sem 2: 7.81)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onNavigatePage ? onNavigatePage(2) : (window.location.hash = '#page-2')}
                className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-mono font-bold rounded shadow-lg shadow-cyan-400/20 transition-all hover:-translate-y-0.5"
              >
                Explore Research Areas (Page 2) →
              </button>
              <button
                onClick={() => onNavigatePage ? onNavigatePage(5) : (window.location.hash = '#page-5')}
                className="px-4 py-2.5 bg-black hover:bg-stone-900 text-stone-200 border border-stone-700 hover:border-cyan-400 text-xs font-mono font-medium rounded transition-colors"
              >
                Curriculum Vitae (Page 5)
              </button>
            </div>

            {/* Currently Area - Exact from CV */}
            <div className="pt-3 border-t border-stone-800/80">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                CURRENT INVESTIGATION
              </span>
              <div className="text-sm">
                <span className="font-medium text-white">
                  {cvData.currently.role}
                </span>
                <span className="text-stone-400"> — {cvData.currently.group}</span>
              </div>
              <div className="text-xs text-stone-400 font-mono mt-0.5">
                {cvData.currently.institution} · {cvData.currently.period}
              </div>
            </div>

            {/* Direct Connect Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-stone-400">
              <span className="text-stone-500 uppercase text-[10px]">Contact:</span>
              <button
                onClick={handleCopyEmail}
                className="hover:text-cyan-400 transition-colors"
              >
                Email [{copied ? 'Copied!' : 'Copy'}]
              </button>
              <span>·</span>
              <a href={cvData.personal.githubUrl} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                GitHub ↗
              </a>
              <span>·</span>
              <a href={cvData.personal.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                LinkedIn ↗
              </a>
              <span>·</span>
              <a href={cvData.personal.scholarUrl} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                Google Scholar ↗
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Photo Hologram & Neural Core */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* 1. Interactive 3D WebGL Photo Hologram */}
            <Photo3D />

            {/* 2. Secondary 3D Neural Core Widget */}
            <div className="p-3 bg-black/90 border border-stone-800 rounded-sm shadow-xl relative">
              <div className="flex items-center justify-between pb-1.5 mb-1 border-b border-stone-800/80 text-[10px] font-mono text-stone-400">
                <span className="text-cyan-400 font-semibold">3D NEURAL CORE SIMULATION</span>
                <span className="text-stone-500">CAAQMS_LAYER: ONLINE</span>
              </div>
              <ResearchCore3D />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
