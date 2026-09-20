import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ComputerBackground from './components/ComputerBackground';
import PageNavigation, { PageFooterNavigation } from './components/PageNavigation';
import HomeHero from './components/HomeHero';
import ResearchSection from './components/ResearchSection';
import ProjectsSection from './components/ProjectsSection';
import PublicationsSection from './components/PublicationsSection';
import OpenSourceSection from './components/OpenSourceSection';
import AcademicBackground from './components/AcademicBackground';
import AchievementsAndLeadership from './components/AchievementsAndLeadership';
import TechnicalProfile from './components/TechnicalProfile';
import ContactSection from './components/ContactSection';
import CvViewerSection from './components/CvViewerSection';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  // Hash listener to handle bookmarks & back/forward
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('page-1') || hash === '#home') setCurrentPage(1);
      else if (hash.includes('page-2') || hash === '#research' || hash === '#projects') setCurrentPage(2);
      else if (hash.includes('page-3') || hash === '#publications' || hash === '#open-source') setCurrentPage(3);
      else if (hash.includes('page-4') || hash === '#academics' || hash === '#achievements' || hash === '#about') setCurrentPage(4);
      else if (hash.includes('page-5') || hash === '#skills' || hash === '#contact' || hash === '#cv-view') setCurrentPage(5);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Keyboard navigation: Left/Right arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') {
        setCurrentPage((prev) => {
          const next = Math.min(5, prev + 1);
          window.location.hash = `page-${next}`;
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return next;
        });
      } else if (e.key === 'ArrowLeft') {
        setCurrentPage((prev) => {
          const next = Math.max(1, prev - 1);
          window.location.hash = `page-${next}`;
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigatePage = (pageNum) => {
    setCurrentPage(pageNum);
    window.location.hash = `page-${pageNum}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-black text-stone-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300 overflow-x-hidden flex flex-col">
      {/* Full Black Computer Workstation Background with 3D Particles */}
      <ComputerBackground />

      {/* Persistent Academic Navbar with Page Switcher */}
      <Navbar currentPage={currentPage} setCurrentPage={handleNavigatePage} />

      {/* Top Page Selector Strip */}
      <PageNavigation currentPage={currentPage} setCurrentPage={handleNavigatePage} />

      {/* Main Page Container (Shows ONLY the Active Page, Hides All Others) */}
      <main className="relative z-10 flex-grow min-h-[70vh]">
        {/* PAGE 1: Profile, 3D Hologram Portrait & 3D Neural Simulation */}
        {currentPage === 1 && (
          <div key="page-1" className="animate-fadeIn">
            <HomeHero onNavigatePage={handleNavigatePage} />
          </div>
        )}

        {/* PAGE 2: Research Disciplines & Projects Archive */}
        {currentPage === 2 && (
          <div key="page-2" className="animate-fadeIn space-y-12 pt-4">
            <ResearchSection />
            <ProjectsSection />
          </div>
        )}

        {/* PAGE 3: Publications & Open Source Contribution */}
        {currentPage === 3 && (
          <div key="page-3" className="animate-fadeIn space-y-12 pt-4">
            <PublicationsSection />
            <OpenSourceSection />
          </div>
        )}

        {/* PAGE 4: Academic Background & Honors/Leadership */}
        {currentPage === 4 && (
          <div key="page-4" className="animate-fadeIn space-y-12 pt-4">
            <AcademicBackground />
            <AchievementsAndLeadership />
          </div>
        )}

        {/* PAGE 5: Technical Profile & Contact / Curriculum Vitae */}
        {currentPage === 5 && (
          <div key="page-5" className="animate-fadeIn space-y-12 pt-4">
            <TechnicalProfile />
            <ContactSection />
            <CvViewerSection />
          </div>
        )}
      </main>

      {/* Bottom Previous / Next Page Controller */}
      <PageFooterNavigation currentPage={currentPage} setCurrentPage={handleNavigatePage} />

      {/* Minimal Academic Footer */}
      <Footer />
    </div>
  );
}
