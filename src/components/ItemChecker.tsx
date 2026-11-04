import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  AlertOctagon, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Copy, 
  Check, 
  ExternalLink,
  X,
  Layers,
  Drumstick,
  Apple,
  Ban,
  Wine,
  Pill,
  Coins,
  BatteryCharging,
  ShieldAlert,
  Luggage
} from 'lucide-react';
import { CUSTOMS_ITEMS, CATEGORIES, CustomsItem } from '../data/customsItems';

const categoryIconMap: Record<string, React.ReactNode> = {
  all: <Layers className="w-4 h-4" />,
  meat: <Drumstick className="w-4 h-4" />,
  plants: <Apple className="w-4 h-4" />,
  vapes: <Ban className="w-4 h-4" />,
  alcohol_tobacco: <Wine className="w-4 h-4" />,
  medicines: <Pill className="w-4 h-4" />,
  currency: <Coins className="w-4 h-4" />,
  electronics: <BatteryCharging className="w-4 h-4" />,
  weapons_contraband: <ShieldAlert className="w-4 h-4" />
};

export const ItemChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'PROHIBITED' | 'RESTRICTED' | 'ALLOWED'>('ALL');
  const [onlyHighRisk, setOnlyHighRisk] = useState<boolean>(false);
  const [activeItemModal, setActiveItemModal] = useState<CustomsItem | null>(null);
  const [copiedKeyword, setCopiedKeyword] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return CUSTOMS_ITEMS.filter(item => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Status match
      if (statusFilter !== 'ALL') {
        if (statusFilter === 'PROHIBITED' && item.status !== 'PROHIBITED') return false;
        if (statusFilter === 'RESTRICTED' && item.status !== 'RESTRICTED') return false;
        if (statusFilter === 'ALLOWED' && item.status !== 'ALLOWED' && item.status !== 'CONDITIONAL') return false;
      }

      // High risk match
      if (onlyHighRisk && !item.highRisk) {
        return false;
      }

      // Search match across English name, Chinese name, rule, penalty, and tags
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesNameEn = item.nameEn.toLowerCase().includes(query);
        const matchesNameZh = item.nameZh.toLowerCase().includes(query);
        const matchesRule = item.ruleSummary.toLowerCase().includes(query);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesNameEn && !matchesNameZh && !matchesRule && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, selectedCategory, statusFilter, onlyHighRisk]);

  const handleCopyChinese = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKeyword(text);
    setTimeout(() => setCopiedKeyword(null), 2000);
  };

  const getLuggageBadge = (loc: CustomsItem['luggageLocation']) => {
    switch (loc) {
      case 'carry_on_only':
        return { text: 'Carry-On Only', color: 'text-sky-700 bg-sky-50 border-sky-200' };
      case 'checked_only':
        return { text: 'Checked Luggage Only', color: 'text-indigo-700 bg-indigo-50 border-indigo-200' };
      case 'neither':
        return { text: 'Banned in All Baggage', color: 'text-rose-700 bg-rose-50 border-rose-200' };
      case 'either':
      default:
        return { text: 'Checked or Carry-On', color: 'text-slate-600 bg-slate-100 border-slate-200' };
    }
  };

  return (
    <section id="checker" className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            <span>Instant Item Search Engine</span>
            <span aria-hidden="true">·</span>
            <span>60+ Regulated Commodities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Can I Bring It to Taiwan? Item Checker
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Type any item (e.g. <span className="font-medium text-slate-800">pork, vape, mango, drone, cash, vitamins, jerky</span>) or browse by category to inspect immediate import status, quotas, and penalties.
          </p>
        </div>

        {/* Search Controls Toolbar */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 mb-8 shadow-sm">
          
          {/* Search Input */}
          <div className="relative mb-4">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search items by name, ingredient, brand, or Chinese term (e.g., pork, sausage, IQOS, cash, fruit)..."
              className="w-full pl-11 pr-10 py-3 text-sm sm:text-base bg-slate-50 hover:bg-slate-50/80 focus:bg-white text-slate-900 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder:text-slate-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills (Functional Buttons) */}
          <div className="mb-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Filter by Category
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    type="button"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 border ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {categoryIconMap[cat.id]}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary Controls (Status & High Risk Toggle) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
            
            {/* Status Segments */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-semibold text-slate-700 mr-1">Status:</span>
              {(['ALL', 'PROHIBITED', 'RESTRICTED', 'ALLOWED'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  type="button"
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    statusFilter === st
                      ? 'bg-slate-200 font-bold text-slate-900'
                      : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  {st === 'ALL' ? 'All Statuses' : st === 'PROHIBITED' ? 'Prohibited 🚫' : st === 'RESTRICTED' ? 'Restricted ⚠️' : 'Allowed / Limit ✅'}
                </button>
              ))}
            </div>

            {/* High-Risk Switch */}
            <label className="inline-flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={onlyHighRisk}
                onChange={(e) => setOnlyHighRisk(e.target.checked)}
                className="w-4 h-4 text-red-600 rounded border-slate-300 focus:ring-red-500"
              />
              <span className="font-medium text-slate-700">Only High-Risk / High-Penalty Items</span>
            </label>

          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
          <div>
            Showing <span className="font-semibold text-slate-900 tabular-nums">{filteredItems.length}</span> items
            {selectedCategory !== 'all' && <span> in selected category</span>}
          </div>
          {(searchTerm || selectedCategory !== 'all' || statusFilter !== 'ALL' || onlyHighRisk) && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setStatusFilter('ALL');
                setOnlyHighRisk(false);
              }}
              className="text-slate-600 hover:text-slate-900 underline transition-colors"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No matching items found</h3>
            <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
              We couldn't find an item matching "{searchTerm}". When in doubt regarding any unlisted item, declare it at the Taiwan Customs <strong>Red Channel</strong> upon arrival to avoid penalties.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setStatusFilter('ALL');
                setOnlyHighRisk(false);
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              Clear Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => {
              const luggage = getLuggageBadge(item.luggageLocation);
              
              // Status Styling
              let statusBorder = 'border-slate-200';
              let statusBg = 'bg-white';
              let statusBadgeColor = 'text-slate-700 bg-slate-100 border-slate-200';
              
              if (item.status === 'PROHIBITED') {
                statusBorder = 'border-red-200 hover:border-red-300';
                statusBg = 'bg-white';
                statusBadgeColor = 'text-red-700 bg-red-50 border-red-200';
              } else if (item.status === 'RESTRICTED') {
                statusBorder = 'border-amber-200 hover:border-amber-300';
                statusBg = 'bg-white';
                statusBadgeColor = 'text-amber-800 bg-amber-50 border-amber-200';
              } else if (item.status === 'ALLOWED' || item.status === 'CONDITIONAL') {
                statusBorder = 'border-emerald-200 hover:border-emerald-300';
                statusBg = 'bg-white';
                statusBadgeColor = 'text-emerald-800 bg-emerald-50 border-emerald-200';
              }

              return (
                <div
                  key={item.id}
                  className={`rounded-xl border ${statusBorder} ${statusBg} p-5 flex flex-col justify-between transition-all hover:shadow-md relative`}
                >
                  <div>
                    {/* Top Status & Channel Tags */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide border ${statusBadgeColor}`}>
                        {item.status}
                      </span>
                      <span className="text-[11px] font-mono font-medium text-slate-500">
                        {item.channelRecommendation === 'RED' ? '🔴 RED Channel' : '🟢 GREEN Channel'}
                      </span>
                    </div>

                    {/* Title & Chinese Name */}
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.nameEn}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5 mb-2.5">
                      繁體: {item.nameZh}
                    </p>

                    {/* Short Rule Summary */}
                    <p className="text-xs text-slate-700 mb-3 leading-relaxed">
                      {item.ruleSummary}
                    </p>

                    {/* Allowed Limit Pill Box */}
                    <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-200/80 mb-3">
                      <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        Passenger Allowance Limit
                      </div>
                      <div className="text-xs font-semibold text-slate-900 mt-0.5">
                        {item.allowedLimit}
                      </div>
                    </div>

                    {/* Penalty Highlight */}
                    <div className="text-xs text-red-700 bg-red-50/50 rounded-lg p-2 border border-red-100 mb-3">
                      <span className="font-semibold">Penalty: </span>
                      <span className="tabular-nums">{item.penaltyEn}</span>
                    </div>
                  </div>

                  {/* Card Footer: Luggage Location + View Detail Button */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${luggage.color}`}>
                      {luggage.text}
                    </span>
                    <button
                      onClick={() => setActiveItemModal(item)}
                      type="button"
                      className="text-xs font-semibold text-slate-900 hover:text-slate-600 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Full Rules</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Item Detail & Bilingual Chinese Phrase Modal */}
      {activeItemModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItemModal(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-8 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                  activeItemModal.status === 'PROHIBITED' 
                    ? 'text-red-700 bg-red-50 border-red-200' 
                    : activeItemModal.status === 'RESTRICTED'
                    ? 'text-amber-800 bg-amber-50 border-amber-200'
                    : 'text-emerald-800 bg-emerald-50 border-emerald-200'
                }`}>
                  {activeItemModal.status}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {activeItemModal.channelRecommendation === 'RED' ? 'Customs Red Channel Required' : 'Green Channel if within limits'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {activeItemModal.nameEn}
              </h3>
              <p className="text-sm font-semibold text-slate-600 font-mono mt-1">
                {activeItemModal.nameZh}
              </p>
            </div>

            {/* Detailed Explanation */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Full Regulatory Explanation
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  {activeItemModal.detailedExplanation}
                </p>
              </div>

              {/* Penalty Card */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                  Non-Compliance Fine & Legal Penalties
                </h4>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3.5 text-xs text-red-900 space-y-1">
                  <p className="font-semibold tabular-nums">{activeItemModal.penaltyEn}</p>
                  <p className="font-mono text-slate-700 pt-1 border-t border-red-200/60">{activeItemModal.penaltyZh}</p>
                </div>
              </div>

              {/* Show-to-Officer Traditional Chinese Phrase */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Airport Signage & Officer Phrase (繁體中文)
                  </h4>
                  <button
                    onClick={() => handleCopyChinese(activeItemModal.bilingualCustomsKeyword)}
                    type="button"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    {copiedKeyword === activeItemModal.bilingualCustomsKeyword ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Phrase</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-3 flex items-center justify-between gap-3">
                  <span className="text-sm sm:text-base font-bold text-slate-900 font-mono">
                    {activeItemModal.bilingualCustomsKeyword}
                  </span>
                  <span className="text-[11px] text-amber-800 font-medium whitespace-nowrap">
                    Show to Airport Officer
                  </span>
                </div>
              </div>

              {/* Luggage Placement */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block mb-0.5">Baggage Location</span>
                  <span className="font-semibold text-slate-900 capitalize">
                    {activeItemModal.luggageLocation.replace('_', ' ')}
                  </span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block mb-0.5">Recommended Channel</span>
                  <span className="font-semibold text-slate-900">
                    {activeItemModal.channelRecommendation === 'RED' ? '🔴 Red Channel (申報)' : '🟢 Green Channel (免申報)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setActiveItemModal(null)}
                type="button"
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => handleCopyChinese(activeItemModal.bilingualCustomsKeyword)}
                type="button"
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm"
              >
                Copy Chinese Translation
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
