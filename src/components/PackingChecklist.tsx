import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, Printer, RotateCcw, ShieldCheck, AlertTriangle } from 'lucide-react';
import { DEFAULT_CHECKLIST, ChecklistItem } from '../data/packingChecklistData';

interface PackingChecklistProps {
  onPrintClick: () => void;
}

export const PackingChecklist: React.FC<PackingChecklistProps> = ({ onPrintClick }) => {
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('tw_customs_checklist_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeCategory, setActiveCategory] = useState<'all' | 'carry_on' | 'checked' | 'declaration_action'>('all');

  useEffect(() => {
    try {
      localStorage.setItem('tw_customs_checklist_v1', JSON.stringify(checkedIds));
    } catch (e) {
      console.warn('Unable to persist checklist to localStorage', e);
    }
  }, [checkedIds]);

  const toggleItem = (id: string) => {
    setCheckedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleCheckAllCrucial = () => {
    const crucialIds = DEFAULT_CHECKLIST.filter(i => i.isCrucial).map(i => i.id);
    setCheckedIds(prev => Array.from(new Set([...prev, ...crucialIds])));
  };

  const handleReset = () => {
    if (confirm('Reset your customs packing checklist?')) {
      setCheckedIds([]);
    }
  };

  const completedCount = checkedIds.length;
  const totalCount = DEFAULT_CHECKLIST.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const filteredItems = DEFAULT_CHECKLIST.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="checklist" className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              <span>Pre-Departure Luggage Inspection</span>
              <span aria-hidden="true">·</span>
              <span>Checked vs. Carry-On Safety</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pre-Flight Luggage Packing Checklist
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Tick items off as you pack your suitcase. Your progress automatically saves on your device so you can double-check before leaving for the airport.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2.5 shrink-0 no-print">
            <button
              onClick={handleCheckAllCrucial}
              type="button"
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Check Crucial Rules
            </button>
            <button
              onClick={handleReset}
              type="button"
              className="px-2.5 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors inline-flex items-center gap-1"
              title="Reset checklist"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <button
              onClick={onPrintClick}
              type="button"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Checklist</span>
            </button>
          </div>
        </div>

        {/* Progress Tracker Bar */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 mb-8">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
            <span>Baggage Safety Verification Progress</span>
            <span className="font-mono tabular-nums">{completedCount} of {totalCount} verified ({progressPercent}%)</span>
          </div>
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {progressPercent === 100 && (
            <div className="mt-3 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>All critical packing safety checks verified. You are ready for departure!</span>
            </div>
          )}
        </div>

        {/* Category Tabs (Functional Buttons) */}
        <div className="flex gap-2 mb-6 overflow-x-auto no-print">
          {(['all', 'carry_on', 'checked', 'declaration_action'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap border ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' && 'All Checklist Items'}
              {cat === 'carry_on' && 'Carry-On Bag'}
              {cat === 'checked' && 'Checked Suitcase'}
              {cat === 'declaration_action' && 'Airport Customs Actions'}
            </button>
          ))}
        </div>

        {/* Checklist Rows */}
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const isChecked = checkedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                  isChecked 
                    ? 'bg-emerald-50/40 border-emerald-200' 
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="mt-0.5 text-slate-900">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-sm font-bold ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                      {item.titleEn}
                    </span>
                    {item.isCrucial && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-1.5 py-0.2 rounded">
                        Crucial Penalty Rule
                      </span>
                    )}
                    <span className="text-xs text-slate-500 font-mono">
                      ({item.titleZh})
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.descriptionEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
