import React from 'react';
import { cvData } from '../data/cvData';

export default function CvViewerSection() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="cv-view" className="relative py-20 bg-dark-950 border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Top toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-1">
              CURRICULUM VITAE (STANDARDIZED FORMAT)
            </span>
            <h2 className="font-serif text-2xl text-white font-normal">
              Formal Academic Document
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-bold text-xs font-mono rounded transition-colors shadow-lg shadow-cyan-500/20"
            >
              Print / Save PDF 🖨️
            </button>
            <a
              href="#home"
              className="px-3 py-1.5 bg-dark-900 border border-stone-700 text-stone-300 text-xs font-mono rounded hover:bg-dark-800 hover:text-white transition-colors"
            >
              ↑ Top
            </a>
          </div>
        </div>

        {/* Academic CV Paper Sheet */}
        <div className="bg-[#ffffff] text-stone-900 border border-stone-700 p-8 sm:p-14 shadow-2xl rounded-sm space-y-8 font-sans print:border-0 print:shadow-none print:p-0">
          
          {/* Header of CV Sheet */}
          <div className="border-b-2 border-stone-900 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl font-medium tracking-tight text-stone-900">
                {cvData.personal.name}
              </h1>
              <p className="font-serif italic text-sm text-stone-600">
                Curriculum Vitae
              </p>
              <div className="mt-2 text-xs font-mono text-stone-600 space-y-0.5">
                <p>{cvData.personal.department}, {cvData.personal.institution}</p>
                <p>Home – {cvData.personal.city}, {cvData.personal.state}, India {cvData.personal.postalCode}</p>
                <p>Tel: {cvData.personal.phone} · Email: {cvData.personal.email}</p>
              </div>
            </div>

            <div className="text-right text-xs font-mono text-stone-600 space-y-1">
              <p>Portfolio: {cvData.personal.portfolioUrl.replace('https://', '')}</p>
              <p>GitHub: {cvData.personal.githubUrl.replace('https://', '')}</p>
              <p>LinkedIn: {cvData.personal.linkedinUrl.replace('https://www.linkedin.com', '')}</p>
              <p>Google Scholar: Indexed</p>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div>
            <h3 className="font-serif text-base font-semibold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {cvData.personal.overview}
            </p>
          </div>

          {/* Section: Research Interests */}
          <div>
            <h3 className="font-serif text-base font-semibold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
              Research Interests
            </h3>
            <div className="space-y-2 text-xs sm:text-sm">
              {cvData.researchAreas.map((ra) => (
                <div key={ra.index} className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <div className="sm:col-span-4 font-mono font-medium text-stone-800">
                    {ra.title}
                  </div>
                  <div className="sm:col-span-8 text-stone-600">
                    {ra.topics}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <h3 className="font-serif text-base font-semibold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
              Education
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              {cvData.education.map((edu) => (
                <div key={edu.degree} className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <div className="sm:col-span-3 font-mono text-stone-500 text-xs">
                    {edu.period}
                  </div>
                  <div className="sm:col-span-9 space-y-0.5">
                    <h4 className="font-medium text-stone-900">
                      {edu.degree} {edu.specialization ? `(${edu.specialization})` : ''}
                    </h4>
                    <p className="text-stone-600">
                      {edu.institution}
                    </p>
                    {edu.gpa && (
                      <p className="font-mono text-stone-800 text-xs font-medium">
                        {edu.gpa} ({edu.semesters}) · {edu.honors}
                      </p>
                    )}
                    {edu.score && (
                      <p className="font-mono text-stone-700 text-xs">
                        {edu.score} {edu.stream ? `· ${edu.stream}` : ''} · {edu.honors}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Research Experience */}
          <div>
            <h3 className="font-serif text-base font-semibold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
              Research Experience
            </h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between items-baseline">
                <span className="font-medium text-stone-900">
                  Lead Student Researcher — Applied ML & Environmental Analytics
                </span>
                <span className="font-mono text-stone-500 text-xs">
                  Aug 2025 – Present
                </span>
              </div>
              <p className="text-xs text-stone-600 font-mono">
                Adamas University, Kolkata, India
              </p>
              <ul className="list-disc list-inside space-y-1 text-stone-700 text-xs sm:text-sm pt-1">
                <li><strong>Dataset & Preprocessing:</strong> Curated continuous ambient air quality monitoring (CAAQMS) datasets across multi-station deployments; engineered pipeline with timestamp alignment, KNN imputation, and Hampel / IQR outlier filtering.</li>
                <li><strong>ML Benchmarking:</strong> Evaluated benchmark architectures including Linear Regression, Decision Trees, SVR, Random Forest, XGBoost, and recurrent neural networks (LSTMs); achieved optimal non-linear predictive mapping for criteria pollutants.</li>
                <li><strong>Atmospheric Dynamics & Interpretability:</strong> Analyzed diurnal trends, seasonal photochemical regimes, and ozone-titration dynamics; implemented SHAP (SHapley Additive exPlanations) for transparent feature importance attribution.</li>
                <li><strong>Publication Output:</strong> Co-authored research manuscripts currently under active peer-review and preparation for indexed journal submissions.</li>
              </ul>
            </div>
          </div>

          {/* Section: Publications */}
          <div>
            <h3 className="font-serif text-base font-semibold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
              Publications & Manuscripts
            </h3>
            <div className="space-y-2 text-xs sm:text-sm">
              {cvData.publications.map((p) => (
                <div key={p.title} className="space-y-0.5">
                  <p className="text-stone-800">
                    <strong className="font-medium">Ankana Das</strong>, Research Collaborators. "{p.title}." <em>{p.venue}</em>
                  </p>
                  <span className="inline-block text-[11px] font-mono text-amber-900 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                    {p.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technical Projects */}
          <div>
            <h3 className="font-serif text-base font-semibold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
              Selected Technical Projects
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              {cvData.projects.map((proj) => (
                <div key={proj.title} className="space-y-0.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-stone-900">
                      {proj.title}
                    </span>
                    <span className="font-mono text-xs text-stone-500">
                      {proj.domain}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-stone-600">
                    {proj.technology}
                  </p>
                  <p className="text-stone-700 text-xs">
                    {proj.approach} <strong className="text-stone-900 font-medium">Result:</strong> {proj.results}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Open Source Leadership */}
          <div>
            <h3 className="font-serif text-base font-semibold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
              Open Source Leadership
            </h3>
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex justify-between items-baseline">
                <span className="font-medium text-stone-900">
                  Open Source Contributor & Module Maintainer — GirlScript Summer of Code (GSSoC 2026)
                </span>
                <span className="font-mono text-stone-500 text-xs">
                  Mar 2026 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-stone-700 text-xs">
                <li>Contributed to developer tooling modules; authored 40+ merged PRs resolving UI component rendering bugs, accessibility flaws, and responsive layout refactoring.</li>
                <li>Engineered GitHub Actions automation workflows, reducing pull request validation turnaround by 40%.</li>
                <li>Enforced strict semantic PR audit guidelines and guided 25+ aspiring first-time contributors.</li>
              </ul>
            </div>
          </div>

          {/* Section: Awards & Achievements */}
          <div>
            <h3 className="font-serif text-base font-semibold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
              Awards & Achievements
            </h3>
            <div className="space-y-1 text-xs sm:text-sm">
              {cvData.achievements.map((ach) => (
                <div key={ach.title} className="flex justify-between items-baseline">
                  <span className="text-stone-800">
                    <strong className="font-medium">{ach.title}:</strong> {ach.recognition}
                  </span>
                  <span className="font-mono text-xs text-stone-500 pl-3">
                    {ach.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Leadership & Service */}
          <div>
            <h3 className="font-serif text-base font-semibold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
              Leadership & Service
            </h3>
            <div className="space-y-2 text-xs sm:text-sm">
              {cvData.leadership.map((l) => (
                <div key={l.organization}>
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-stone-900">
                      {l.role} · {l.organization}
                    </span>
                    <span className="font-mono text-xs text-stone-500">
                      {l.period}
                    </span>
                  </div>
                  <p className="text-stone-600 text-xs">
                    {l.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-stone-300 text-center text-xs font-mono text-stone-500">
            Certified Curriculum Vitae · Department of Computer Science & Engineering, Adamas University
          </div>

        </div>

      </div>
    </section>
  );
}
