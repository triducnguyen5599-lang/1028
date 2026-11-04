import React from 'react';
import { ShieldCheck, AlertCircle, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export const ChannelGuide: React.FC = () => {
  return (
    <section id="channels" className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            <span>Airport Customs Procedures</span>
            <span aria-hidden="true">·</span>
            <span>TPE · TSA · KHH · RMQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Red Channel vs. Green Channel: Which Line to Choose?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            After claiming your checked luggage at baggage claim and before exiting into the arrival hall, you must pass through Taiwan Customs. Choosing the wrong line with undeclared regulated items is treated as customs fraud or illegal smuggling.
          </p>
        </div>

        {/* Side-by-Side Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Green Channel (Nothing to Declare) */}
          <div className="bg-white rounded-2xl border-2 border-emerald-500/80 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-mono text-xs font-bold px-3 py-1 rounded-bl-lg">
              免申報檯
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xl">
                  🟢
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    GREEN CHANNEL
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                    Nothing to Declare (免申報)
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Choose the Green Channel <strong>ONLY</strong> if every single condition below applies to your entire travel party:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero pork products</strong>, meat jerky, sausages, or fresh fruits in baggage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero e-cigarettes</strong>, vape pens, e-liquids, or heated tobacco products.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Alcohol does not exceed <strong>1.0 Liter</strong> (and passenger is 20+ years old).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cigarettes do not exceed <strong>200 sticks (1 carton)</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cash is under <strong>NT$100,000</strong>, under <strong>USD $10,000</strong> equivalent, and under <strong>RMB 20,000</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Total general overseas articles value is under <strong>NT$ 35,000</strong> (~$1,100 USD).</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 bg-emerald-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl text-xs text-emerald-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Random X-ray scans and beagle inspections are actively conducted here.</span>
            </div>
          </div>

          {/* Red Channel (Goods to Declare) */}
          <div className="bg-white rounded-2xl border-2 border-red-500/80 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-600 text-white font-mono text-xs font-bold px-3 py-1 rounded-bl-lg">
              應申報檯
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-black text-xl">
                  🔴
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    RED CHANNEL
                  </h3>
                  <p className="text-xs font-semibold text-red-700 uppercase tracking-wider">
                    Goods to Declare (應申報)
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                You <strong>MUST</strong> walk through the Red Channel and present a completed Customs Declaration Form if you have:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>Any agricultural or animal products</strong> with quarantine certificates (or unconfirmed food).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>Alcohol exceeding 1 liter (up to 5 liters) or cigarettes exceeding 200 sticks (up to 1,000 sticks).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>Cash exceeding <strong>NT$ 100,000</strong>, <strong>USD $10,000</strong>, <strong>RMB 20,000</strong>, or Gold &gt; $20,000 USD.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>Controlled prescription pharmaceuticals (Schedule 1-3) or large medical equipment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>Commercial merchandise, cargo samples, or unaccompanied air/sea luggage arriving separately.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>ANY UNCERTAINTY</strong>: If you are not 100% sure an item is legal.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 bg-red-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl text-xs text-red-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
              <span><strong>Immunity from Fines:</strong> Declaring goods waives punitive fines even if goods are surrendered.</span>
            </div>
          </div>

        </div>

        {/* Airport 4-Step Flowchart */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            Step-by-Step Arrival Procedure at Taiwan Airports
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-slate-400">
                <span>01. PRE-IMMIGRATION</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                Surrender Food Bins
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Before immigration checkpoints, red & yellow quarantine bins are placed along corridors. Discard any airplane fruit, sandwiches, or pork snacks freely without penalty.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-slate-400">
                <span>02. BAGGAGE CAROUSEL</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                Quarantine Beagle Patrol
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                While retrieving checked luggage, APHIA detection dogs will inspect bags. If a beagle sits next to your luggage, an officer will request an inspection.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-slate-400">
                <span>03. CUSTOMS DECISION</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                Choose Channel
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Select <strong>Green</strong> if 100% compliant. Select <strong>Red</strong> if you have items to declare, excess cash, or any doubts about food/medicine.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-slate-400">
                <span>04. ARRIVAL HALL</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                Welcome to Taiwan
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Exit safely into the arrival terminal for airport MRT trains, buses, currency exchange, and SIM card counters.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
