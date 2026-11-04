import React from 'react';
import { ShieldCheck, Printer, Github } from 'lucide-react';

interface NavbarProps {
  onPrintClick: () => void;
  onGitHubClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPrintClick, onGitHubClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2.5 text-slate-900 font-bold text-lg tracking-tight whitespace-nowrap shrink-0 hover:text-slate-700 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-sm shadow-sm">
            TW
          </div>
          <span>Taiwan Customs Guide</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#checker" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Item Checker</a>
          <a href="#alerts" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Critical Warnings</a>
          <a href="#calculator" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Duty-Free Calculator</a>
          <a href="#channels" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Red vs. Green Channel</a>
          <a href="#checklist" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Luggage Checklist</a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onGitHubClick}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="Deploy or Fork on GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Guide</span>
          </button>
          <button
            onClick={onPrintClick}
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Checklist</span>
          </button>
        </div>

      </div>
    </header>
  );
};
