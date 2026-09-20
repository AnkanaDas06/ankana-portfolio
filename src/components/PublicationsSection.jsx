import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { TiltCard } from '../utils/tiltEffect';

export default function PublicationsSection() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeBibIndex, setActiveBibIndex] = useState(null);

  const copyCitation = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getBibtex = (pub) => {
    const key = pub.title.toLowerCase().includes('urban air') ? 'das2026empirical' : 'das2026deep';
    return `@article{${key},
  author    = {${pub.authors.replace('Ankana Das', 'Das, Ankana')}},
  title     = {${pub.title}},
  year      = {2026},
  note      = {Manuscript in preparation for submission}
}`;
  };

  return (
    <section id="publications" className="relative py-20 border-b border-stone-800 bg-[#06080f]/90">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase block mb-2">
            03 / PUBLICATIONS & MANUSCRIPTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Academic Manuscripts
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Scholarly manuscripts currently under preparation for peer-reviewed journal and indexed conference submission.
          </p>
        </div>

        {/* Papers List */}
        <div className="space-y-6">
          {cvData.publications.map((pub, idx) => {
            const bibtex = getBibtex(pub);
            const isBibOpen = activeBibIndex === idx;

            return (
              <TiltCard key={pub.title} maxTilt={4} className="rounded-sm">
                <div 
                  className="p-6 bg-dark-900/80 border border-stone-800 hover:border-cyan-500/40 rounded-sm shadow-xl space-y-3 transition-colors"
                >
                  {/* Status Badge */}
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 text-[11px] font-mono font-medium text-amber-300 bg-amber-950/40 border border-amber-500/40 rounded-sm">
                      {pub.type}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      Draft Under Active Peer-Review Preparation
                    </span>
                  </div>

                  {/* Paper Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-snug">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-sm font-sans text-stone-300">
                    <strong className="text-cyan-400 font-medium">Ankana Das</strong>, Research Collaborators{pub.authors.includes('Faculty Advisor') ? ', Faculty Advisor' : ''}.
                  </p>

                  {/* Venue status */}
                  <p className="text-xs font-mono text-stone-400 italic">
                    {pub.venue}
                  </p>

                  {/* Abstract Note */}
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
                    {pub.summary}
                  </p>

                  {/* Actions */}
                  <div className="pt-3 border-t border-stone-800 flex flex-wrap items-center gap-3 text-xs font-mono">
                    <button
                      onClick={() => copyCitation(`${pub.authors}. "${pub.title}." ${pub.venue}`, idx)}
                      className="text-stone-300 hover:text-cyan-400 focus:outline-none transition-colors"
                    >
                      {copiedIndex === idx ? '✓ Citation Copied' : 'Copy Citation'}
                    </button>

                    <span className="text-stone-700">·</span>

                    <button
                      onClick={() => setActiveBibIndex(isBibOpen ? null : idx)}
                      className="text-stone-300 hover:text-cyan-400 focus:outline-none transition-colors"
                    >
                      {isBibOpen ? 'Hide BibTeX [-]' : 'BibTeX [+]'}
                    </button>
                  </div>

                  {/* BibTeX Viewer */}
                  {isBibOpen && (
                    <div className="mt-3 p-3 bg-dark-950 border border-stone-800 rounded-sm text-xs font-mono text-cyan-300 overflow-x-auto">
                      <pre className="whitespace-pre">{bibtex}</pre>
                    </div>
                  )}
                </div>
              </TiltCard>
            );
          })}
        </div>

        <div className="mt-8 text-xs font-mono text-stone-500 text-right">
          * Full preprints will be indexed upon formal submission release.
        </div>

      </div>
    </section>
  );
}
