import React, { useState, useEffect } from 'react';
import { cvData } from '../data/cvData';

export default function Navbar({ currentPage = 1, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '01 Profile & 3D', page: 1 },
    { label: '02 Research & Projects', page: 2 },
    { label: '03 Publications', page: 3 },
    { label: '04 Academics', page: 4 },
    { label: '05 Skills & CV', page: 5 },
  ];

  const handleNavClick = (pageNum) => {
    if (setCurrentPage) {
      setCurrentPage(pageNum);
      window.location.hash = `page-${pageNum}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#05070c]/90 backdrop-blur-md border-b border-stone-800/80 transition-colors">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <button 
          onClick={() => handleNavClick(1)} 
          className="group flex items-center gap-3 text-left text-white hover:text-cyan-400 transition-colors focus:outline-none"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-500/50 p-0.5">
            <img
              src={cvData.personal.photo || './ankana-photo.jpg'}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = './ankana-photo.jpg'; }}
              alt={cvData.personal.name}
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-medium tracking-tight text-white group-hover:text-cyan-400">
              {cvData.personal.name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 -mt-0.5">
              ankanadas.com · Adamas Univ
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 text-xs font-mono">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`px-3 py-1.5 rounded transition-all relative ${
                  isActive 
                    ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/40 font-bold shadow-sm' 
                    : 'text-stone-400 hover:text-white hover:bg-stone-900 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button: View CV (Page 5) */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => handleNavClick(5)}
            className="px-3 py-1.5 text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/30 rounded transition-colors"
          >
            Curriculum Vitae
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-400 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-950 border-b border-stone-800 px-6 py-4 space-y-2 font-mono">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left text-xs py-2 px-3 rounded transition-colors ${
                  isActive ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-stone-300 hover:text-cyan-400'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-stone-800">
            <button
              onClick={() => handleNavClick(5)}
              className="inline-block text-xs font-mono text-cyan-400 hover:underline"
            >
              View Curriculum Vitae (Page 5)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
