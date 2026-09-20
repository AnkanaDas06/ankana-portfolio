import React from 'react';
import { cvData } from '../data/cvData';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#030508] text-stone-400 text-xs font-mono border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
        
        {/* Left */}
        <div className="space-y-1">
          <p className="font-serif text-base text-white font-medium">
            {cvData.personal.name}
          </p>
          <p className="text-cyan-400">
            {cvData.personal.title}
          </p>
          <p className="text-stone-500 text-[11px]">
            {cvData.personal.department}, {cvData.personal.institution} · {cvData.personal.city}, India
          </p>
        </div>

        {/* Right Links & Copyright */}
        <div className="flex flex-col sm:items-end space-y-2">
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a 
              href={`mailto:${cvData.personal.email}`}
              className="text-stone-400 hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
            <span className="text-stone-700">·</span>
            <a 
              href={cvData.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-stone-400 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <span className="text-stone-700">·</span>
            <a 
              href={cvData.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-stone-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-stone-700">·</span>
            <a 
              href={cvData.personal.scholarUrl}
              target="_blank"
              rel="noreferrer"
              className="text-stone-400 hover:text-cyan-400 transition-colors"
            >
              Google Scholar
            </a>
          </div>

          <p className="text-stone-500 text-[11px]">
            © 2026 {cvData.personal.name} · Research Workstation · Adamas University
          </p>
        </div>

      </div>
    </footer>
  );
}
