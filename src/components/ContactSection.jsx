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
    <section id="contact" className="relative py-20 border-b border-stone-800 bg-[#05070c]">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase block mb-2">
            09 / CONTACT & CORRESPONDENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Academic Inquiries & Collaboration
          </h2>
          <p className="mt-2 text-stone-300 text-sm max-w-2xl">
            Open to research collaborations, scholarly discussions, open-source initiatives, and engineering fellowships.
          </p>
        </div>

        {/* Contact Information Card with 3D Tilt */}
        <TiltCard maxTilt={4} className="rounded-sm">
          <div className="bg-dark-900/80 border border-stone-800 rounded-sm p-6 sm:p-8 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-white font-normal">
                Direct Correspondence
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs font-mono text-stone-400 block">Primary Email</span>
                  <div className="flex items-center gap-3 mt-0.5">
                    <a 
                      href={`mailto:${cvData.personal.email}`}
                      className="text-cyan-400 font-mono text-sm hover:underline"
                    >
                      {cvData.personal.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs font-mono text-stone-400 hover:text-white focus:outline-none"
                    >
                      [{copied ? 'Copied' : 'Copy'}]
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-stone-400 block">Telephone</span>
                  <a 
                    href={`tel:${cvData.personal.phone.replace(/\s+/g, '')}`}
                    className="text-stone-300 font-mono text-sm hover:text-cyan-400"
                  >
                    {cvData.personal.phone}
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono text-stone-400 block">Institutional Address</span>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mt-0.5">
                    {cvData.personal.department}<br />
                    {cvData.personal.institution}<br />
                    Home – Kolkata, West Bengal, India {cvData.personal.postalCode}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:border-l md:border-stone-800 md:pl-8">
              <h3 className="font-serif text-xl text-white font-normal">
                Academic Profiles & Repositories
              </h3>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-baseline justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">GitHub Repository</span>
                  <a
                    href={cvData.personal.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    github.com/AnkanaDas06 ↗
                  </a>
                </div>

                <div className="flex items-baseline justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">LinkedIn Profile</span>
                  <a
                    href={cvData.personal.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    in/ankana-das2006 ↗
                  </a>
                </div>

                <div className="flex items-baseline justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Google Scholar</span>
                  <a
                    href={cvData.personal.scholarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    Scholar Index ↗
                  </a>
                </div>

                <div className="flex items-baseline justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Primary Domain</span>
                  <a
                    href={cvData.personal.portfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    ankana-portfolio.vercel.app ↗
                  </a>
                </div>
              </div>
            </div>

          </div>
        </TiltCard>

      </div>
    </section>
  );
}
