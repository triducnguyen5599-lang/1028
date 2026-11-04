import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroAlert } from './components/HeroAlert';
import { ItemChecker } from './components/ItemChecker';
import { QuotaCalculator } from './components/QuotaCalculator';
import { ChannelGuide } from './components/ChannelGuide';
import { PackingChecklist } from './components/PackingChecklist';
import { FAQSection } from './components/FAQSection';
import { EmergencyDirectory } from './components/EmergencyDirectory';
import { GitHubGuideModal } from './components/GitHubGuideModal';
import { ShieldCheck, ArrowUp, Github } from 'lucide-react';

export default function App() {
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* 3-Zone Top Bar */}
      <Navbar 
        onPrintClick={handlePrint}
        onGitHubClick={() => setIsGitHubModalOpen(true)}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        
        {/* Urgent Critical Warnings & Safe Harbor Golden Rule */}
        <HeroAlert />

        {/* 60+ Item Baggage Checker with Live Search & Bilingual Words */}
        <ItemChecker />

        {/* Interactive Quotas & Duty-Free Calculator */}
        <QuotaCalculator />

        {/* Red vs Green Channel Decision Guide & Airport Flow */}
        <ChannelGuide />

        {/* Interactive Luggage Packing Checklist */}
        <PackingChecklist onPrintClick={handlePrint} />

        {/* Real Customs FAQs */}
        <FAQSection />

        {/* Airport Hotlines & Emergency Directory */}
        <EmergencyDirectory />

      </main>

      {/* Clean, Non-Technical Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-xs">
                TW
              </div>
              <div>
                <span className="text-white font-bold text-sm block">Taiwan Customs Traveler Guide</span>
                <span className="text-xs text-slate-500">
                  Unofficial public reference based on Ministry of Finance Customs Administration and APHIA regulations.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs font-medium text-slate-400">
              <a href="#checker" className="hover:text-white transition-colors">Item Checker</a>
              <a href="#alerts" className="hover:text-white transition-colors">Critical Fines</a>
              <a href="#calculator" className="hover:text-white transition-colors">Duty Free</a>
              <a href="#channels" className="hover:text-white transition-colors">Red vs Green</a>
              <button 
                onClick={() => setIsGitHubModalOpen(true)}
                className="hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </button>
              <button 
                onClick={scrollToTop}
                className="hover:text-white transition-colors inline-flex items-center gap-1"
                title="Scroll back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Top</span>
              </button>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
            <p>
              Disclaimer: Regulations are subject to change by Taiwan Customs authorities. When in doubt at the airport, always declare items at the Red Channel.
            </p>
            <p className="font-mono">
              Designed for travelers to Taiwan · Ready for GitHub Pages
            </p>
          </div>
        </div>
      </footer>

      {/* GitHub Setup & Deployment Modal */}
      <GitHubGuideModal 
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
      />

    </div>
  );
}
