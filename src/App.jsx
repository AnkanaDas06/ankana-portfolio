import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ComputerBackground from './components/ComputerBackground';
import SlideDeck from './components/SlideDeck';
import Footer from './components/Footer';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Hash listener for slides and bookmarks
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('slide-1') || hash === '#home') setCurrentSlide(1);
      else if (hash.includes('slide-2') || hash === '#research') setCurrentSlide(2);
      else if (hash.includes('slide-3') || hash === '#projects') setCurrentSlide(3);
      else if (hash.includes('slide-4') || hash === '#publications') setCurrentSlide(4);
      else if (hash.includes('slide-5') || hash === '#open-source' || hash === '#academics') setCurrentSlide(5);
      else if (hash.includes('slide-6') || hash === '#achievements' || hash === '#skills' || hash === '#contact' || hash === '#cv-view') setCurrentSlide(6);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-stone-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300 overflow-x-hidden flex flex-col justify-between">
      {/* Full Black Computer Workstation Background with 3D Particles */}
      <ComputerBackground />

      {/* Persistent Academic Navbar with Slide Deck Switcher */}
      <Navbar currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />

      {/* Main Full-Screen Slide Deck (When on Slide 2, Slide 1 completely disappears!) */}
      <main className="relative z-10 flex-grow">
        <SlideDeck currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      </main>

      {/* Minimal Academic Footer */}
      <Footer />
    </div>
  );
}
