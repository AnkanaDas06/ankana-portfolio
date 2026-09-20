import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { TiltCard } from '../utils/tiltEffect';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cvData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-12 bg-transparent">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase block mb-2">
            SLIDE 05 // CONTACT & SOCIALS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-2 text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Feel free to connect for collaborative projects, coding discussions, AI/ML opportunities, or tech networking.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Direct Communication */}
          <TiltCard maxTilt={5}>
            <div className="p-6 bg-black/90 border border-cyan-500/40 rounded-sm shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800 font-mono text-xs">
                <span className="text-cyan-400 font-bold uppercase tracking-wider">DIRECT CHANNELS</span>
                <span className="text-emerald-400">STATUS: AVAILABLE</span>
              </div>

              <div>
                <span className="text-xs font-mono text-stone-400 block mb-1">Email Address</span>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${cvData.personal.email}`}
                    className="text-white hover:text-cyan-300 font-mono text-sm font-semibold transition-colors"
                  >
                    {cvData.personal.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2 py-0.5 rounded bg-stone-800 text-cyan-300 hover:bg-stone-700 text-[11px] font-mono transition-colors"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-stone-400 block mb-1">WhatsApp & Mobile</span>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <a
                    href={cvData.personal.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                  >
                    WhatsApp Message ↗
                  </a>
                  <span className="text-stone-600">|</span>
                  <a
                    href={`tel:${cvData.personal.phone}`}
                    className="text-stone-300 hover:text-white transition-colors"
                  >
                    {cvData.personal.phone}
                  </a>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-stone-400 block mb-1">University & Location</span>
                <div className="font-mono text-xs text-stone-300">
                  <span className="text-cyan-300 font-medium">Adamas University</span> · Kolkata, West Bengal, India
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-stone-400 block mb-1">Domain Branding</span>
                <div className="font-mono text-xs text-cyan-400 font-bold">
                  {cvData.personal.customDomain}
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Social Profiles Grid */}
          <TiltCard maxTilt={5}>
            <div className="p-6 bg-black/90 border border-stone-800 rounded-sm shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800 font-mono text-xs">
                <span className="text-stone-400 font-bold uppercase tracking-wider">ONLINE PROFILES</span>
                <span className="text-cyan-400">AUTHENTIC REPOSITORIES</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={cvData.personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded bg-stone-950 border border-stone-800 hover:border-blue-500/50 hover:bg-blue-950/20 transition-all font-mono text-xs flex flex-col justify-between"
                >
                  <div className="text-blue-400 font-bold">LinkedIn ↗</div>
                  <div className="text-[11px] text-stone-400 mt-1 truncate">in/ankana-das2006</div>
                </a>

                <a
                  href={cvData.personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded bg-stone-950 border border-stone-800 hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all font-mono text-xs flex flex-col justify-between"
                >
                  <div className="text-cyan-400 font-bold">GitHub ↗</div>
                  <div className="text-[11px] text-stone-400 mt-1 truncate">AnkanaDas06</div>
                </a>

                <a
                  href={cvData.personal.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded bg-stone-950 border border-stone-800 hover:border-pink-500/50 hover:bg-pink-950/20 transition-all font-mono text-xs flex flex-col justify-between"
                >
                  <div className="text-pink-400 font-bold">Instagram ↗</div>
                  <div className="text-[11px] text-stone-400 mt-1 truncate">@ankana__006</div>
                </a>

                <a
                  href={cvData.personal.xUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded bg-stone-950 border border-stone-800 hover:border-stone-500 hover:bg-stone-900 transition-all font-mono text-xs flex flex-col justify-between"
                >
                  <div className="text-white font-bold">X (Twitter) ↗</div>
                  <div className="text-[11px] text-stone-400 mt-1 truncate">@Ankana100406</div>
                </a>
              </div>

              <div className="p-3 rounded bg-cyan-950/30 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                ⭐ <strong>Adamas University Student</strong> · B.Tech CSE (AI/ML) · Class of 2027
              </div>
            </div>
          </TiltCard>

        </div>

      </div>
    </section>
  );
}
