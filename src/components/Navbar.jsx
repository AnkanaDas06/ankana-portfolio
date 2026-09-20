import React, { useState, useEffect } from 'react';
import { cvData } from '../data/cvData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'research', 'projects', 'publications', 'open-source', 'about', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Open Source', href: '#open-source' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#05070c]/90 backdrop-blur-md border-b border-stone-800/80 transition-colors">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <a 
          href="#home" 
          className="group flex items-center gap-3 text-white hover:text-cyan-400 transition-colors focus:outline-none"
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
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-mono">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                className={`py-1 transition-colors relative ${
                  isActive 
                    ? 'text-cyan-400 font-semibold' 
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button: View CV */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="#cv-view"
            className="px-3 py-1.5 text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/30 rounded transition-colors"
          >
            Curriculum Vitae
          </a>
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
        <div className="md:hidden bg-dark-950 border-b border-stone-800 px-6 py-4 space-y-3 font-mono">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs text-stone-300 hover:text-cyan-400 py-1"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-800">
            <a
              href="#cv-view"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block text-xs font-mono text-cyan-400 hover:underline"
            >
              View Curriculum Vitae (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
