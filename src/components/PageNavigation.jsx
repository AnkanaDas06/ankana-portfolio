import React from 'react';

export const PAGES = [
  { id: 1, title: 'Profile & 3D', subtitle: 'Overview, 3D Photo & Core', hash: '#page-1' },
  { id: 2, title: 'Research & Projects', subtitle: 'Disciplines & Archive', hash: '#page-2' },
  { id: 3, title: 'Publications & OS', subtitle: 'Manuscripts & GSSoC', hash: '#page-3' },
  { id: 4, title: 'Academics & Honors', subtitle: 'Coursework & SIH Top 10', hash: '#page-4' },
  { id: 5, title: 'Skills & CV', subtitle: 'Technical Profile & Contact', hash: '#page-5' },
];

export default function PageNavigation({ currentPage, setCurrentPage }) {
  const totalPages = PAGES.length;
  const current = PAGES.find(p => p.id === currentPage) || PAGES[0];

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      window.location.hash = `page-${pageNum}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 pt-6 pb-2">
      {/* Top Page Header Tabs */}
      <div className="bg-stone-950/90 border border-cyan-500/30 rounded p-2 backdrop-blur-md shadow-xl shadow-cyan-950/30">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-stone-800 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-cyan-400 font-bold tracking-wider">VIEW_PORT_NAVIGATOR</span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-300 uppercase font-semibold">PAGE {currentPage} OF {totalPages}: {current.title}</span>
          </div>
          <div className="text-stone-500 text-[10px] hidden sm:block">
            Keyboard: Press [ ← ] or [ → ] to switch pages
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 font-mono text-xs">
          {PAGES.map((page) => {
            const isActive = page.id === currentPage;
            return (
              <button
                key={page.id}
                onClick={() => goToPage(page.id)}
                className={`flex flex-col text-left px-3 py-2 rounded transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/60 shadow-lg shadow-cyan-500/20 font-bold'
                    : 'bg-black/60 text-stone-400 hover:text-stone-200 hover:bg-stone-900 border border-stone-800/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] opacity-75">PAGE 0{page.id}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                </div>
                <span className="text-xs truncate font-medium mt-0.5">{page.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function PageFooterNavigation({ currentPage, setCurrentPage }) {
  const totalPages = PAGES.length;
  const prevPage = PAGES.find(p => p.id === currentPage - 1);
  const nextPage = PAGES.find(p => p.id === currentPage + 1);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      window.location.hash = `page-${pageNum}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded bg-stone-950/90 border border-stone-800 font-mono text-xs">
        
        {/* Previous Button */}
        <div>
          {prevPage ? (
            <button
              onClick={() => goToPage(currentPage - 1)}
              className="flex items-center gap-2 px-4 py-2.5 rounded bg-black hover:bg-stone-900 text-stone-200 border border-stone-700 hover:border-cyan-400 transition-all group"
            >
              <span className="text-cyan-400 transition-transform group-hover:-translate-x-1">←</span>
              <span>Previous: <strong className="text-white font-medium">Page {prevPage.id} ({prevPage.title})</strong></span>
            </button>
          ) : (
            <div className="text-stone-600 text-xs px-2 py-1">Beginning of Portfolio</div>
          )}
        </div>

        {/* Page Dots Indicator */}
        <div className="flex items-center gap-2">
          {PAGES.map((page) => (
            <button
              key={page.id}
              onClick={() => goToPage(page.id)}
              title={`Page ${page.id}: ${page.title}`}
              className={`h-2 rounded-full transition-all ${
                page.id === currentPage
                  ? 'w-7 bg-cyan-400 shadow-md shadow-cyan-400/50'
                  : 'w-2 bg-stone-700 hover:bg-stone-500'
              }`}
            />
          ))}
          <span className="text-stone-400 ml-2 text-[11px]">
            {currentPage} / {totalPages}
          </span>
        </div>

        {/* Next Button */}
        <div>
          {nextPage ? (
            <button
              onClick={() => goToPage(currentPage + 1)}
              className="flex items-center gap-2 px-4 py-2.5 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-bold shadow-lg shadow-cyan-400/20 transition-all group"
            >
              <span>Next: <strong className="font-bold">Page {nextPage.id} ({nextPage.title})</strong></span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          ) : (
            <button
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 px-4 py-2.5 rounded bg-stone-900 hover:bg-stone-800 text-cyan-300 border border-cyan-500/40"
            >
              <span>Back to Page 1 (Top) ↑</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
