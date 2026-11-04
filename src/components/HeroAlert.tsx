import React from 'react';
import { AlertTriangle, ShieldCheck, Flame, Ban, DollarSign, Info } from 'lucide-react';

export const HeroAlert: React.FC = () => {
  return (
    <section id="alerts" className="relative overflow-hidden bg-white border-b border-slate-200 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subtitle / Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <span>Official Traveler Advisory</span>
            <span aria-hidden="true">·</span>
            <span>Ministry of Finance Customs Administration</span>
            <span aria-hidden="true">·</span>
            <span>APHIA Quarantine</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight">
            What You Cannot Bring Into Taiwan Customs
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Arriving at Taoyuan (TPE), Songshan (TSA), or Kaohsiung (KHH)? Taiwan strictly enforces border quarantine to protect against African Swine Fever and illicit goods. Knowing the regulations protects you from severe fines up to NT$ 1,000,000 (~$31,250 USD) or immediate deportation.
          </p>
        </div>

        {/* High-Severity Notice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: ASF Pork Ban */}
          <div className="bg-red-50/60 border border-red-200 rounded-xl p-6 flex flex-col justify-between transition-shadow hover:shadow-md">
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold">
                  <Flame className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-wide">
                  FINE: NT$ 200,000+
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Pork & Meat Products Strict Ban
              </h2>
              <p className="text-xs text-slate-500 mb-2 font-mono">
                繁體中文: 嚴禁攜帶豬肉及肉製品
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Zero tolerance for pork jerky, Chinese sausages, canned pork, airline meals, or mooncakes with pork lard from African Swine Fever regions. Non-resident foreigners who cannot pay the NT$200,000 fine on arrival are <strong>denied entry immediately</strong>.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-red-200/60 flex items-center justify-between text-xs text-red-800 font-medium">
              <span>Allowance: 0 grams</span>
              <span>Action: Airport surrender bin</span>
            </div>
          </div>

          {/* Card 2: E-Cigarettes & Vapes Total Ban */}
          <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-6 flex flex-col justify-between transition-shadow hover:shadow-md">
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Ban className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wide">
                  FINE: NT$ 50,000–5,000,000
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                E-Cigarettes & Heated Tobacco Ban
              </h2>
              <p className="text-xs text-slate-500 mb-2 font-mono">
                繁體中文: 全面禁止電子煙與加熱菸
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Under the amended Tobacco Hazards Prevention Act, all e-cigarettes, vape pens, e-liquids, and heated tobacco units (IQOS, glo) are strictly prohibited from entering Taiwan. There is <strong>no passenger quota or personal allowance</strong>.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs text-amber-800 font-medium">
              <span>Allowance: 0 units</span>
              <span>Checked/Carry-on: Strictly Banned</span>
            </div>
          </div>

          {/* Card 3: The Golden Rule (Red Channel Exemption) */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-6 flex flex-col justify-between transition-shadow hover:shadow-md">
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wide">
                  SAFE HARBOR PROTECTION
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                The Golden Rule: Declare at Red Channel
              </h2>
              <p className="text-xs text-slate-500 mb-2 font-mono">
                繁體中文: 有疑慮走紅線檯，主動申報免罰款
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                If you are unsure whether an item in your luggage is permitted, proceed to the <strong>Red Channel (Goods to Declare)</strong>. Declaring items waives punitive fines! Even if an item is not allowed, it is simply surrendered peacefully without penalty.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center justify-between text-xs text-emerald-800 font-medium">
              <span>Penalty if declared: NT$ 0</span>
              <span>Advice: When in doubt, DECLARE</span>
            </div>
          </div>

        </div>

        {/* Airport Beagle Detection Unit Banner */}
        <div className="bg-slate-900 text-slate-100 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-slate-800 text-amber-400 shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">
                Active Quarantine Detector Dogs (Beagles) on Patrol
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
                Highly trained quarantine detector dogs patrol passenger luggage belts at all Taiwan airports. They can detect microscopic traces of pork, citrus, and raw seeds inside vacuum bags. If you have food, eat it or discard it in the surrender bins BEFORE entering the customs hall.
              </p>
            </div>
          </div>
          <div className="shrink-0 self-start sm:self-center">
            <a
              href="#checker"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              Search Baggage Items Below ↓
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
