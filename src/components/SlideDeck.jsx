import React, { useState, useEffect, useRef } from 'react';
import HomeHero from './HomeHero';
import ResearchSection from './ResearchSection';
import ProjectsSection from './ProjectsSection';
import PublicationsSection from './PublicationsSection';
import OpenSourceSection from './OpenSourceSection';
import AcademicBackground from './AcademicBackground';
import AchievementsAndLeadership from './AchievementsAndLeadership';
import TechnicalProfile from './TechnicalProfile';
import ContactSection from './ContactSection';
import CvViewerSection from './CvViewerSection';

export const SLIDES = [
  { id: 1, title: 'Profile & 3D Core', tag: 'OVERVIEW', desc: 'Identity, 3D Photo Hologram & Neural Simulation' },
  { id: 2, title: 'Research Disciplines', tag: 'INVESTIGATION', desc: '4 Core Pillars & CAAQMS Lab Notebook' },
  { id: 3, title: 'Projects Archive', tag: 'SYSTEMS', desc: 'Code Quality Engine, SANDHAN SIH Finalist & AlgoVault' },
  { id: 4, title: 'Scholarly Publications', tag: 'MANUSCRIPTS', desc: '2026 Manuscripts in Preparation & BibTeX' },
  { id: 5, title: 'Open Source & Education', tag: 'ENGINEERING', desc: 'GSSoC 2026 Maintainer & Adamas University Coursework' },
  { id: 6, title: 'Honors, Skills & CV', tag: 'ACHIEVEMENTS', desc: 'National Awards, Technical Matrix & Printable CV' },
];

export default function SlideDeck({ currentSlide, setCurrentSlide }) {
  const [slideDirection, setSlideDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartRef = useRef(null);
  const totalSlides = SLIDES.length;

  const goToSlide = (slideIndex, dir = null) => {
    if (slideIndex < 1 || slideIndex > totalSlides || slideIndex === currentSlide || isAnimating) return;
    const direction = dir || (slideIndex > currentSlide ? 'next' : 'prev');
    setSlideDirection(direction);
    setIsAnimating(true);
    setCurrentSlide(slideIndex);
    window.location.hash = `slide-${slideIndex}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsAnimating(false), 450);
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      goToSlide(currentSlide + 1, 'next');
    } else {
      goToSlide(1, 'next');
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1, 'prev');
    } else {
      goToSlide(totalSlides, 'prev');
    }
  };

  // Keyboard navigation: Arrow keys & Space
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // Touch Swipe for mobile devices
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) return;
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (diff > 60) nextSlide();
    else if (diff < -60) prevSlide();
    touchStartRef.current = null;
  };

  const currentInfo = SLIDES.find(s => s.id === currentSlide) || SLIDES[0];

  return (
    <div 
      className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between overflow-x-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* 1. Top Cinematic Slide Progress Track */}
      <div className="w-full max-w-5xl mx-auto px-6 pt-4 pb-2 z-20">
        <div className="bg-stone-950/90 border border-cyan-500/30 rounded p-2.5 backdrop-blur-md shadow-xl shadow-cyan-950/40">
          
          {/* Telemetry Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-stone-800 text-[11px] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 font-bold tracking-widest">SLIDE_DECK_SYSTEM</span>
              <span className="text-stone-600">|</span>
              <span className="text-stone-300 uppercase font-semibold">
                SLIDE 0{currentSlide} // {totalSlides} : {currentInfo.title}
              </span>
            </div>
            <div className="flex items-center gap-2 text-stone-400 text-[10px]">
              <span className="text-emerald-400 font-semibold">{currentInfo.tag}</span>
              <span className="text-stone-600">|</span>
              <span className="hidden sm:inline">Use [ ← / → ] or Swipe to advance</span>
            </div>
          </div>

          {/* Segmented Timeline Progress Bar */}
          <div className="grid grid-cols-6 gap-1.5 font-mono">
            {SLIDES.map((slide) => {
              const isActive = slide.id === currentSlide;
              const isPast = slide.id < currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(slide.id)}
                  title={slide.desc}
                  className={`group relative text-left p-1.5 sm:p-2 rounded transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 border border-cyan-400 shadow-lg shadow-cyan-500/30'
                      : isPast
                      ? 'bg-stone-900/80 border border-cyan-900/60 hover:border-cyan-500/50'
                      : 'bg-black/50 border border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px]">
                    <span className={isActive ? 'text-cyan-300 font-bold' : isPast ? 'text-stone-300' : 'text-stone-500'}>
                      0{slide.id}
                    </span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                  </div>
                  <div className="text-[11px] truncate font-medium mt-0.5 hidden sm:block text-stone-200 group-hover:text-cyan-300">
                    {slide.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Floating Edge Slide Arrows (Left & Right) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="fixed left-2 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-r-lg bg-black/80 hover:bg-cyan-950/80 border border-l-0 border-cyan-500/30 hover:border-cyan-400 text-stone-400 hover:text-cyan-300 backdrop-blur-md transition-all shadow-xl hover:translate-x-0.5 group hidden sm:flex items-center justify-center"
      >
        <span className="text-xl font-mono transition-transform group-hover:-translate-x-1">‹</span>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="fixed right-2 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-l-lg bg-black/80 hover:bg-cyan-950/80 border border-r-0 border-cyan-500/30 hover:border-cyan-400 text-stone-400 hover:text-cyan-300 backdrop-blur-md transition-all shadow-xl hover:-translate-x-0.5 group hidden sm:flex items-center justify-center"
      >
        <span className="text-xl font-mono transition-transform group-hover:translate-x-1">›</span>
      </button>

      {/* 3. The Active Slide Stage (ONLY Active Slide is Rendered, Previous Slide Disappears!) */}
      <div className="relative z-10 flex-grow w-full py-4">
        
        {/* SLIDE 1: Profile & 3D Interactive Workstation */}
        {currentSlide === 1 && (
          <div
            key="slide-1"
            className={`w-full transition-all duration-300 ease-out ${
              slideDirection === 'next' ? 'animate-fadeIn' : 'animate-fadeIn'
            }`}
          >
            <HomeHero onNavigatePage={(page) => goToSlide(page === 2 ? 2 : 6)} />
          </div>
        )}

        {/* SLIDE 2: Research Disciplines & CAAQMS Air Quality Notebook */}
        {currentSlide === 2 && (
          <div
            key="slide-2"
            className={`w-full transition-all duration-300 ease-out ${
              slideDirection === 'next' ? 'animate-fadeIn' : 'animate-fadeIn'
            }`}
          >
            <ResearchSection />
          </div>
        )}

        {/* SLIDE 3: Technical Projects Archive (4 Major Systems) */}
        {currentSlide === 3 && (
          <div
            key="slide-3"
            className={`w-full transition-all duration-300 ease-out ${
              slideDirection === 'next' ? 'animate-fadeIn' : 'animate-fadeIn'
            }`}
          >
            <ProjectsSection />
          </div>
        )}

        {/* SLIDE 4: Scholarly Manuscripts & Publications */}
        {currentSlide === 4 && (
          <div
            key="slide-4"
            className={`w-full transition-all duration-300 ease-out ${
              slideDirection === 'next' ? 'animate-fadeIn' : 'animate-fadeIn'
            }`}
          >
            <PublicationsSection />
          </div>
        )}

        {/* SLIDE 5: Open Source & Academic Foundation */}
        {currentSlide === 5 && (
          <div
            key="slide-5"
            className={`w-full space-y-12 transition-all duration-300 ease-out ${
              slideDirection === 'next' ? 'animate-fadeIn' : 'animate-fadeIn'
            }`}
          >
            <OpenSourceSection />
            <AcademicBackground />
          </div>
        )}

        {/* SLIDE 6: Honors, Technical Profile, Contact & Printable CV */}
        {currentSlide === 6 && (
          <div
            key="slide-6"
            className={`w-full space-y-12 transition-all duration-300 ease-out ${
              slideDirection === 'next' ? 'animate-fadeIn' : 'animate-fadeIn'
            }`}
          >
            <AchievementsAndLeadership />
            <TechnicalProfile />
            <ContactSection />
            <CvViewerSection />
          </div>
        )}

      </div>

      {/* 4. Bottom Slide Deck Controller Strip */}
      <div className="w-full max-w-5xl mx-auto px-6 py-6 z-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-stone-950/90 border border-stone-800 font-mono text-xs backdrop-blur-md shadow-2xl">
          
          {/* Previous Slide Button */}
          <button
            onClick={prevSlide}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-black hover:bg-stone-900 text-stone-200 border border-stone-700 hover:border-cyan-400 transition-all group"
          >
            <span className="text-cyan-400 font-bold transition-transform group-hover:-translate-x-1">‹</span>
            <span>Previous Slide</span>
          </button>

          {/* Slide Indicator & Dots */}
          <div className="flex items-center gap-3">
            <span className="text-stone-500 text-[11px] font-semibold uppercase">
              SLIDE {currentSlide} OF {totalSlides}
            </span>
            <div className="flex items-center gap-1.5">
              {SLIDES.map((slide) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(slide.id)}
                  title={slide.title}
                  className={`h-2 rounded-full transition-all ${
                    slide.id === currentSlide
                      ? 'w-7 bg-cyan-400 shadow-lg shadow-cyan-400/60'
                      : 'w-2 bg-stone-700 hover:bg-stone-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Slide Button */}
          <button
            onClick={nextSlide}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-bold shadow-lg shadow-cyan-400/20 transition-all group"
          >
            <span>{currentSlide === totalSlides ? 'Restart from Slide 01' : 'Next Slide'}</span>
            <span className="font-bold transition-transform group-hover:translate-x-1">›</span>
          </button>

        </div>
      </div>

    </div>
  );
}
