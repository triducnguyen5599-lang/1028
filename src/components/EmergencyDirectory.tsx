import React from 'react';
import { Phone, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';

export const EmergencyDirectory: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            <span>Official Government Contacts</span>
            <span aria-hidden="true">·</span>
            <span>24/7 Airport Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Official Airport Customs & Quarantine Hotlines
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Have questions before departure or need immediate clarification while on your flight layover? Contact the official Taiwan Customs service desks directly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Taoyuan Airport */}
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
              <MapPin className="w-4 h-4 text-slate-700" />
              <span>Taoyuan Airport (TPE)</span>
            </div>
            <p className="text-xs text-slate-500 mb-3 font-mono">Terminal 1 & Terminal 2</p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center justify-between">
                <span>Terminal 1 Desk:</span>
                <a href="tel:+88633982307" className="font-mono font-bold text-slate-900 hover:underline">
                  +886-3-398-2307
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>Terminal 2 Desk:</span>
                <a href="tel:+88633983422" className="font-mono font-bold text-slate-900 hover:underline">
                  +886-3-398-3422
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Taipei Songshan Airport */}
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
              <MapPin className="w-4 h-4 text-slate-700" />
              <span>Taipei Songshan (TSA)</span>
            </div>
            <p className="text-xs text-slate-500 mb-3 font-mono">Downtown Taipei Arrivals</p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center justify-between">
                <span>Customs Service:</span>
                <a href="tel:+886225460799" className="font-mono font-bold text-slate-900 hover:underline">
                  +886-2-2546-0799
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>Quarantine Desk:</span>
                <a href="tel:+886287701543" className="font-mono font-bold text-slate-900 hover:underline">
                  +886-2-8770-1543
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Kaohsiung Airport */}
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
              <MapPin className="w-4 h-4 text-slate-700" />
              <span>Kaohsiung Airport (KHH)</span>
            </div>
            <p className="text-xs text-slate-500 mb-3 font-mono">Southern Taiwan Arrivals</p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center justify-between">
                <span>Passenger Desk:</span>
                <a href="tel:+88678057010" className="font-mono font-bold text-slate-900 hover:underline">
                  +886-7-805-7010
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>APHIA Desk:</span>
                <a href="tel:+88679720599" className="font-mono font-bold text-slate-900 hover:underline">
                  +886-7-972-0599
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: APHIA Toll-Free */}
          <div className="p-5 rounded-xl border border-red-200 bg-red-50/40 hover:bg-red-50 transition-colors">
            <div className="flex items-center gap-2 font-bold text-red-900 text-sm mb-1">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>Quarantine Toll-Free</span>
            </div>
            <p className="text-xs text-red-700 mb-3 font-mono">Animal & Plant Health Inspection</p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center justify-between">
                <span>Toll-Free Hotline:</span>
                <a href="tel:0800039131" className="font-mono font-bold text-red-700 hover:underline">
                  0800-039-131
                </a>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Free within Taiwan or with local SIM
              </div>
            </div>
          </div>

        </div>

        {/* Links to Official Portals */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-4 flex-wrap">
            <a 
              href="https://web.customs.gov.tw/singlehtml/3158" 
              target="_blank" 
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 font-semibold text-slate-900 hover:underline"
            >
              <span>Customs Administration (Ministry of Finance)</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <a 
              href="https://www.aphia.gov.tw" 
              target="_blank" 
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 font-semibold text-slate-900 hover:underline"
            >
              <span>Animal and Plant Health Inspection Agency (APHIA)</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
          <div className="text-slate-400 font-mono text-[11px]">
            Regulations verified against current Taiwan Customs Code.
          </div>
        </div>

      </div>
    </section>
  );
};
