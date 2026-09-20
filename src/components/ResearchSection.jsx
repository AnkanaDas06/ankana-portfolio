import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { TiltCard } from '../utils/tiltEffect';

export default function ResearchSection() {
  const [expandedArea, setExpandedArea] = useState(null);

  const toggleArea = (index) => {
    setExpandedArea(expandedArea === index ? null : index);
  };

  return (
    <section id="research" className="relative py-20 border-b border-stone-800 bg-[#06080f]/90">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-mono text-xs text-cyan-400 font-medium tracking-widest uppercase">
              01 / RESEARCH
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Research Areas & Investigation
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            My investigations sit at the intersection of machine learning, systems architecture, computer vision, and atmospheric data science—advancing reliable, mathematically grounded implementations for automated software repair, low-latency edge biometrics, and high-resolution environmental modeling.
          </p>
        </div>

        {/* Numbered Research Index with 3D Tilt */}
        <div className="divide-y divide-stone-800/80 border-y border-stone-800 mb-16">
          {cvData.researchAreas.map((area) => {
            const isExpanded = expandedArea === area.index;
            return (
              <TiltCard key={area.index} maxTilt={4} className="my-1 rounded-sm">
                <div 
                  className="py-6 px-4 bg-dark-900/40 hover:bg-dark-900/80 border border-transparent hover:border-cyan-500/30 transition-all rounded-sm"
                >
                  <div 
                    onClick={() => toggleArea(area.index)}
                    className="cursor-pointer flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 select-none"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs text-cyan-400 tracking-wider">
                        {area.index}
                      </span>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl text-white font-normal hover:text-cyan-400 transition-colors">
                          {area.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl leading-relaxed">
                          {area.topics}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pl-8 sm:pl-0">
                      <span className="text-xs font-mono text-stone-400">
                        {isExpanded ? 'Collapse [-]' : 'Expand details [+]'}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Research Detail Drawer */}
                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-stone-800 pl-8 sm:pl-12 text-sm text-stone-300 space-y-4 animate-fadeIn">
                      <p className="leading-relaxed font-sans max-w-3xl text-stone-200">
                        {area.summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                          Core Methodologies:
                        </span>
                        {area.keywords.map((kw) => (
                          <span 
                            key={kw}
                            className="px-2 py-0.5 text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-sm"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Research Experience: Computational Lab Notebook Format */}
        <div className="mt-16 pt-8 border-t border-stone-800">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
              COMPUTATIONAL RESEARCH LOG & FORMAL INVESTIGATION
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h3 className="font-serif text-2xl text-white font-normal">
                  Lead Student Researcher
                </h3>
                <p className="text-sm text-stone-400 font-sans">
                  Applied ML & Environmental Analytics · Adamas University, Kolkata
                </p>
              </div>
              <span className="font-mono text-xs text-cyan-400">
                Aug 2025 – Present
              </span>
            </div>
          </div>

          {/* Research Log Entries */}
          <div className="bg-dark-900/80 border border-stone-800 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-stone-800 pb-3 flex items-center justify-between text-xs font-mono text-stone-400">
              <span className="text-cyan-400">PROJECT PROTOCOL: CAAQMS Continuous Time-Series & Photochemical Regimes</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Research Phase
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-1.5">
                <h4 className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  01 / Dataset & Preprocessing Pipeline
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  Curated continuous ambient air quality monitoring (CAAQMS) datasets across multi-station deployments; engineered an automated preprocessing pipeline with strict timestamp alignment, KNN imputation for missing intervals, and combined Hampel filter / interquartile range (IQR) outlier filtering.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  02 / ML Benchmark Architectures
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  Systematically evaluated empirical baseline and non-linear predictive architectures, comparing Linear Regression, Decision Trees, Support Vector Regression (SVR), Random Forest, XGBoost, and Long Short-Term Memory networks (LSTMs) for multi-horizon criteria pollutant trajectories.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  03 / Atmospheric Dynamics & SHAP Attribution
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  Analyzed diurnal trends, seasonal photochemical regimes, and non-linear ozone-titration dynamics (NO–NO₂–O₃ equilibrium). Implemented TreeSHAP and KernelSHAP for transparent feature importance attribution, isolating meteorological confounders from anthropogenic emission factors.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  04 / Publication Output & Review
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  Co-authored research manuscripts detailing empirical findings and interpretability frameworks, currently under active peer review and journal submission preparation for indexed publication.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
