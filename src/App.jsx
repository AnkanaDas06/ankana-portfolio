import React from 'react';
import Navbar from './components/Navbar';
import ComputerBackground from './components/ComputerBackground';
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
  return (
    <div className="relative min-h-screen bg-black text-stone-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300 overflow-x-hidden">
      {/* Full Black Computer Workstation Background with 3D Particles */}
      <ComputerBackground />

      {/* Persistent Minimal Academic Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 3D Understated Home Hero with Main Profile Photo & 3D Neural Core */}
        <HomeHero />

        {/* 01 / Research & Experience Log */}
        <ResearchSection />

        {/* 02 / Projects Archive */}
        <ProjectsSection />

        {/* 03 / Publications & Manuscripts */}
        <PublicationsSection />

        {/* 04 / Open Source Contribution Narrative */}
        <OpenSourceSection />

        {/* 05 / Academic Background & Coursework */}
        <AcademicBackground />

        {/* 06 & 07 / Achievements, Leadership & Exposure */}
        <AchievementsAndLeadership />

        {/* 08 / Technical Profile Inventory */}
        <TechnicalProfile />

        {/* 09 / Academic Inquiries & Contact */}
        <ContactSection />

        {/* Certified Academic CV View */}
        <CvViewerSection />
      </main>

      {/* Minimal Academic Footer */}
      <Footer />
    </div>
  );
}
