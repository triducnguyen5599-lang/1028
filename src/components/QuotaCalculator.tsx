import React, { useState } from 'react';
import { Wine, Cigarette, DollarSign, Pill, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export const QuotaCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'alcohol' | 'tobacco' | 'currency' | 'medicines'>('alcohol');

  // Alcohol state
  const [alcoholLiters, setAlcoholLiters] = useState<number>(1);
  const [isAge20Plus, setIsAge20Plus] = useState<boolean>(true);

  // Tobacco state
  const [cigarettes, setCigarettes] = useState<number>(200);
  const [cigars, setCigars] = useState<number>(0);
  const [looseTobaccoPounds, setLooseTobaccoPounds] = useState<number>(0);

  // Currency state
  const [twdAmount, setTwdAmount] = useState<number>(50000);
  const [usdEquivalent, setUsdEquivalent] = useState<number>(5000);
  const [rmbAmount, setRmbAmount] = useState<number>(10000);
  const [goldValueUsd, setGoldValueUsd] = useState<number>(0);

  // Medicines state
  const [maxUnitsPerItem, setMaxUnitsPerItem] = useState<number>(6);
  const [totalMedicineUnits, setTotalMedicineUnits] = useState<number>(18);

  return (
    <section id="calculator" className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            <span>Interactive Quota & Duty Calculator</span>
            <span aria-hidden="true">·</span>
            <span>Avoid Border Confiscation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Duty-Free Allowances & Declaration Calculator
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Check exactly how much alcohol, tobacco, currency, or over-the-counter medicine you can carry legally through Taiwan Customs before incurring tariffs, required declarations, or seizure.
          </p>
        </div>

        {/* Tab Selector (Functional Buttons) */}
        <div className="flex border-b border-slate-200 gap-2 sm:gap-4 overflow-x-auto pb-px mb-8">
          <button
            onClick={() => setActiveTab('alcohol')}
            className={`inline-flex items-center gap-2 py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'alcohol'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <Wine className="w-4 h-4" />
            <span>Alcohol Allowance</span>
          </button>

          <button
            onClick={() => setActiveTab('tobacco')}
            className={`inline-flex items-center gap-2 py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'tobacco'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <Cigarette className="w-4 h-4" />
            <span>Tobacco Allowances</span>
          </button>

          <button
            onClick={() => setActiveTab('currency')}
            className={`inline-flex items-center gap-2 py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'currency'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Cash & Foreign Currency</span>
          </button>

          <button
            onClick={() => setActiveTab('medicines')}
            className={`inline-flex items-center gap-2 py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'medicines'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <Pill className="w-4 h-4" />
            <span>Medicines & Supplements</span>
          </button>
        </div>

        {/* Tab 1: Alcohol Calculator */}
        {activeTab === 'alcohol' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Total Alcoholic Beverages Volume (Liters)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={alcoholLiters}
                    onChange={(e) => setAlcoholLiters(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                  />
                  <div className="w-20 text-right font-mono font-bold text-lg text-slate-900">
                    {alcoholLiters} L
                  </div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                  <span>0 L</span>
                  <span>1.0 L (Duty Free)</span>
                  <span>5.0 L (Max Declared)</span>
                  <span>10 L</span>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAge20Plus}
                    onChange={(e) => setIsAge20Plus(e.target.checked)}
                    className="w-4 h-4 text-slate-900 rounded border-slate-300 focus:ring-slate-900"
                  />
                  <span className="text-sm font-semibold text-slate-800">
                    Traveler is 20 years of age or older (Taiwan legal drinking age)
                  </span>
                </label>
                {!isAge20Plus && (
                  <p className="mt-2 text-xs text-red-600 font-medium pl-7">
                    ⚠️ Travelers under 20 years old receive ZERO duty-free alcohol allowance. All alcohol is subject to confiscation.
                  </p>
                )}
              </div>
            </div>

            {/* Assessment Result Card */}
            <div className="lg:col-span-6">
              <div className="h-full rounded-xl border border-slate-200 p-6 flex flex-col justify-between bg-slate-50">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Customs Assessment
                  </div>

                  {!isAge20Plus ? (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-900">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span>Underage Prohibition</span>
                      </div>
                      <p className="text-xs mt-1 text-red-700">
                        You cannot bring alcohol into Taiwan. Any alcohol found in baggage will be confiscated.
                      </p>
                    </div>
                  ) : alcoholLiters <= 1.0 ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-900">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span>100% Duty-Free Allowance</span>
                      </div>
                      <p className="text-xs mt-1 text-emerald-800">
                        {alcoholLiters} L is fully within the 1.0 Liter duty-free personal quota. Proceed through the <strong>Green Channel (Nothing to Declare)</strong>.
                      </p>
                    </div>
                  ) : alcoholLiters <= 5.0 ? (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-900">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Declaration Required at Red Channel</span>
                      </div>
                      <p className="text-xs mt-1 text-amber-800">
                        1.0 L is duty-free. The remaining <span className="font-mono font-bold">{(alcoholLiters - 1.0).toFixed(1)} L</span> must be declared at the Red Channel. Customs tariff and tobacco/alcohol tax will be collected upon arrival.
                      </p>
                      <p className="text-xs mt-2 text-red-700 font-semibold">
                        ⚠️ If undeclared in Green Channel: Confiscated + fine of NT$ 2,000 per excess liter!
                      </p>
                    </div>
                  ) : (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-900">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span>Exceeds Maximum Commercial Passenger Limit (5.0L)</span>
                      </div>
                      <p className="text-xs mt-1 text-red-800">
                        Individual passengers cannot carry more than 5.0 liters total. Amounts over 5 liters require a formal commercial import permit issued by the Ministry of Finance. Excess will be returned or held in custody.
                      </p>
                    </div>
                  )}

                  <div className="mt-6 space-y-2 text-xs text-slate-600">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Duty-Free Limit:</span>
                      <span className="font-mono font-bold text-slate-900">1.0 Liter (1 bottle or combined)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Maximum Allowable with Duty:</span>
                      <span className="font-mono font-bold text-slate-900">5.0 Liters total</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Undeclared Penalty:</span>
                      <span className="font-mono font-bold text-red-700">NT$ 2,000 / Liter + Confiscation</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500">
                  Note: All glass bottles must be packed securely in checked luggage due to liquid carry-on security regulations (LAGs).
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Tobacco Calculator */}
        {activeTab === 'tobacco' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-6">
              
              {/* Critical Vape Notice */}
              <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-xs text-red-900">
                <span className="font-bold block text-sm mb-1 text-red-700">🚫 Zero Allowance for Vapes & Heated Tobacco</span>
                Remember: E-cigarettes, vape pods, and IQOS/glo heated tobacco devices have ZERO allowance. This calculator only applies to legal traditional combustible tobacco.
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Traditional Paper Cigarettes (Number of Sticks)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="1500"
                    step="50"
                    value={cigarettes}
                    onChange={(e) => setCigarettes(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                  />
                  <div className="w-28 text-right font-mono font-bold text-base text-slate-900">
                    {cigarettes} sticks ({Math.floor(cigarettes / 200)} cartons)
                  </div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                  <span>0</span>
                  <span>200 (1 carton, Free)</span>
                  <span>1,000 (5 cartons, Max)</span>
                  <span>1,500+</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Cigars (Sticks)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="200"
                    value={cigars}
                    onChange={(e) => setCigars(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg font-mono"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">Duty-free: 25 sticks</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Loose / Pipe Tobacco (lbs)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.5"
                    value={looseTobaccoPounds}
                    onChange={(e) => setLooseTobaccoPounds(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg font-mono"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">Duty-free: 1 lb (~454g)</span>
                </div>
              </div>

            </div>

            {/* Assessment Tobacco Card */}
            <div className="lg:col-span-6">
              <div className="h-full rounded-xl border border-slate-200 p-6 flex flex-col justify-between bg-slate-50">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Customs Tobacco Assessment
                  </div>

                  {cigarettes <= 200 && cigars <= 25 && looseTobaccoPounds <= 1 ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-900">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span>Within Duty-Free Passenger Limit</span>
                      </div>
                      <p className="text-xs mt-1 text-emerald-800">
                        Your traditional tobacco selection is within the single duty-free allowance. Pass through the <strong>Green Channel</strong>.
                      </p>
                    </div>
                  ) : cigarettes <= 1000 && cigars <= 125 && looseTobaccoPounds <= 5 ? (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-900">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Declaration Required at Red Channel</span>
                      </div>
                      <p className="text-xs mt-1 text-amber-800">
                        You exceed the 200-cigarette duty-free quota, but are within the maximum allowable declared passenger limit (1,000 cigarettes / 5 cartons). Declare at the Red Channel and pay customs duty and tobacco surcharges.
                      </p>
                      <p className="text-xs mt-2 text-red-700 font-semibold">
                        ⚠️ Undeclared cigarettes in Green Channel: Confiscated + fine of NT$ 1,000 per carton!
                      </p>
                    </div>
                  ) : (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-900">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span>Commercial Limit Exceeded (&gt; 1,000 Cigarettes)</span>
                      </div>
                      <p className="text-xs mt-1 text-red-800">
                        Individual passengers cannot import more than 5 cartons (1,000 cigarettes) without an official commercial tobacco import license. Excess will be seized by Customs.
                      </p>
                    </div>
                  )}

                  <div className="mt-6 space-y-2 text-xs text-slate-600">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Age Restriction:</span>
                      <span className="font-mono font-bold text-slate-900">20 years old or older</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Duty-Free Limit:</span>
                      <span className="font-mono font-bold text-slate-900">200 sticks (1 carton)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Maximum Declared Limit:</span>
                      <span className="font-mono font-bold text-slate-900">1,000 sticks (5 cartons)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Fine for Undeclared Cigarettes:</span>
                      <span className="font-mono font-bold text-red-700">NT$ 1,000 per carton + Confiscation</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500">
                  Duty-free exemptions apply to ONE tobacco type (either 200 cigarettes, OR 25 cigars, OR 1 lb loose tobacco), not all three simultaneously.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Currency Calculator */}
        {activeTab === 'currency' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-4">
              
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-800">
                    New Taiwan Dollars (TWD / NTD) Cash
                  </label>
                  <span className="text-[11px] font-mono text-slate-500">Threshold: NT$ 100,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-500">NT$</span>
                  <input
                    type="number"
                    value={twdAmount}
                    onChange={(e) => setTwdAmount(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg font-mono font-bold"
                  />
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-800">
                    Foreign Currency (USD Equivalent)
                  </label>
                  <span className="text-[11px] font-mono text-slate-500">Threshold: USD $10,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-500">USD $</span>
                  <input
                    type="number"
                    value={usdEquivalent}
                    onChange={(e) => setUsdEquivalent(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg font-mono font-bold"
                  />
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  Includes all foreign notes: USD, EUR, JPY, GBP, CAD, AUD, etc. converted to USD.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-800">
                    Chinese Renminbi (RMB / CNY) Cash
                  </label>
                  <span className="text-[11px] font-mono text-slate-500">Threshold: RMB 20,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-500">¥</span>
                  <input
                    type="number"
                    value={rmbAmount}
                    onChange={(e) => setRmbAmount(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg font-mono font-bold"
                  />
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-800">
                    Gold Value (USD Equivalent)
                  </label>
                  <span className="text-[11px] font-mono text-slate-500">Threshold: USD $20,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-500">USD $</span>
                  <input
                    type="number"
                    value={goldValueUsd}
                    onChange={(e) => setGoldValueUsd(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg font-mono font-bold"
                  />
                </div>
              </div>

            </div>

            {/* Assessment Currency Card */}
            <div className="lg:col-span-6">
              <div className="h-full rounded-xl border border-slate-200 p-6 flex flex-col justify-between bg-slate-50">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Currency Declaration Verification
                  </div>

                  {twdAmount <= 100000 && usdEquivalent <= 10000 && rmbAmount <= 20000 && goldValueUsd <= 20000 ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-900">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span>No Currency Declaration Required</span>
                      </div>
                      <p className="text-xs mt-1 text-emerald-800">
                        All currency and bullion amounts are under the statutory declaration thresholds. You can proceed directly through the <strong>Green Channel</strong>.
                      </p>
                    </div>
                  ) : (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-900">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span>CUSTOMS DECLARATION MANDATORY (RED CHANNEL)</span>
                      </div>
                      <p className="text-xs mt-1 text-red-800">
                        You exceed one or more currency thresholds. You MUST fill out the Customs Declaration Form and report to the <strong>Red Channel</strong>.
                      </p>
                      <ul className="text-xs mt-2 list-disc list-inside space-y-1 font-medium text-red-700">
                        {twdAmount > 100000 && <li>NTD cash exceeds NT$ 100,000 (Central Bank permit required for excess).</li>}
                        {usdEquivalent > 10000 && <li>Foreign currency exceeds USD $10,000 (No tax; declaration ensures 100% legal entry).</li>}
                        {rmbAmount > 20000 && <li>RMB cash exceeds 20,000 (Excess placed in customs custody).</li>}
                        {goldValueUsd > 20000 && <li>Gold exceeds USD $20,000 (Bureau of Foreign Trade permit required).</li>}
                      </ul>
                      <p className="text-xs mt-2 text-slate-800 bg-white/70 p-2 rounded border border-red-200">
                        ⚠️ <strong>Severe Penalty Warning:</strong> Any undeclared currency exceeding the threshold will be <strong>permanently confiscated</strong> by Taiwan Customs with no recourse.
                      </p>
                    </div>
                  )}

                  <div className="mt-6 space-y-2 text-xs text-slate-600">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>NTD Limit:</span>
                      <span className="font-mono font-bold text-slate-900">NT$ 100,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Foreign Currency Limit:</span>
                      <span className="font-mono font-bold text-slate-900">USD $10,000 equivalent (Unlimited if declared)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>RMB Limit:</span>
                      <span className="font-mono font-bold text-slate-900">RMB 20,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Gold Limit:</span>
                      <span className="font-mono font-bold text-slate-900">USD $20,000 equivalent</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500">
                  Tip: Declaring foreign currency (e.g. $15,000 USD) costs NOTHING and takes 2 minutes at the Red Channel counter. Never risk confiscation.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Medicines Calculator */}
        {activeTab === 'medicines' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-6">
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Highest Quantity of Any Single OTC Medicine / Supplement
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={maxUnitsPerItem}
                    onChange={(e) => setMaxUnitsPerItem(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                  />
                  <div className="w-24 text-right font-mono font-bold text-base text-slate-900">
                    {maxUnitsPerItem} bottles
                  </div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                  <span>1</span>
                  <span>12 bottles (Max per item)</span>
                  <span>30</span>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Total Units Across All Medicines & Dietary Supplements
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="60"
                    step="1"
                    value={totalMedicineUnits}
                    onChange={(e) => setTotalMedicineUnits(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                  />
                  <div className="w-24 text-right font-mono font-bold text-base text-slate-900">
                    {totalMedicineUnits} bottles
                  </div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                  <span>1</span>
                  <span>36 bottles (Max total)</span>
                  <span>60</span>
                </div>
              </div>

            </div>

            {/* Assessment Medicines Card */}
            <div className="lg:col-span-6">
              <div className="h-full rounded-xl border border-slate-200 p-6 flex flex-col justify-between bg-slate-50">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Customs Health & FDA Assessment
                  </div>

                  {maxUnitsPerItem <= 12 && totalMedicineUnits <= 36 ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-900">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span>Within Personal Exemption Quotas</span>
                      </div>
                      <p className="text-xs mt-1 text-emerald-800">
                        Your non-prescription medicines (e.g. Panadol, eye drops) and nutritional supplements (fish oil, vitamins) do not exceed 12 units per kind or 36 units total. Green Channel permitted.
                      </p>
                    </div>
                  ) : (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-900">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Quota Exceeded - Prior FDA Approval Required</span>
                      </div>
                      <p className="text-xs mt-1 text-amber-800">
                        {maxUnitsPerItem > 12 && `You exceed the 12-bottle limit for a single type of medicine (${maxUnitsPerItem} bottles). `}
                        {totalMedicineUnits > 36 && `You exceed the overall 36-bottle total cap (${totalMedicineUnits} bottles). `}
                        Quantities above this quota require prior online permit approval from the Taiwan Food and Drug Administration (TFDA). Excess units are subject to confiscation or return shipment.
                      </p>
                    </div>
                  )}

                  <div className="mt-6 space-y-2 text-xs text-slate-600">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Per Item Limit:</span>
                      <span className="font-mono font-bold text-slate-900">Up to 12 bottles/boxes</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Total Combined Limit:</span>
                      <span className="font-mono font-bold text-slate-900">Up to 36 bottles/boxes</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Prescription Drugs:</span>
                      <span className="font-mono font-bold text-slate-900">Up to 6-month supply with Doctor Note</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500">
                  Note: Reselling imported OTC medicine or vitamins in Taiwan without a pharmaceutical license violates the Pharmaceutical Affairs Act.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
