# Taiwan Customs Prohibited & Restricted Items Traveler Guide

An authoritative, English-language interactive web guide on prohibited, restricted, and quarantine items under Taiwan Customs (Customs Administration, Ministry of Finance & Animal and Plant Health Inspection Agency). Built as a high-performance, single-page application suitable for immediate deployment to GitHub Pages or static hosting.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The clarifying questionnaire was skipped by default. We have adopted the official Taiwan Customs regulatory standards, incorporating high-severity violation alerts (e.g. African Swine Fever NT$200,000–1,000,000 fines, total e-cigarette/heated tobacco ban under the Tobacco Hazards Prevention Act), bilingual English/Traditional Chinese terminology, an instant baggage search engine, and an interactive Red/Green declaration channel advisor.

- **Confirmed Direction**: Authoritative traveler portal with interactive baggage item checker, penalty calculator, airport channel navigator (Red vs. Green Channel), and exportable/printable departure packing checklist.
- **Language Policy**: Primary language in crisp international English, supplemented with accurate Traditional Chinese (繁體中文) keywords and airport signage translations to assist travelers when speaking to customs officers or reading airport signs.
- **GitHub Compatibility**: 100% client-side reactive architecture with zero runtime backend requirement, pre-configured for direct GitHub Pages publishing with SEO meta tags, OpenGraph preview, and print-ready styles.

---

## 1. Overview & Core Concept

- **What It Does**: Provides inbound international travelers, tourists, students, and overseas workers arriving in Taiwan (Taoyuan TPE, Songshan TSA, Kaohsiung KHH, Taichung RMQ) with instant clarity on what cannot be brought into Taiwan, strict limits on regulated goods, required customs declarations, and the severe financial and legal penalties for non-compliance.
- **Target Audience**: International travelers traveling to Taiwan, overseas Taiwanese, expatriates, and travel agents seeking an unambiguous, mobile-friendly English reference.
- **Key Value**: Prevents accidental confiscation, hefty fines (up to NT$1,000,000 / ~USD $32,000), and deportation by providing instantaneous item search, category breakdowns, duty-free calculators, and packing verification.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Instant "Can I Bring It?" Search**:
   - Universal search input with instant typeahead across 65+ common travel items (e.g., *pork jerky, raw beef, mooncakes, fresh mangoes, vape pen, heated tobacco, CBD oil, paracetamol, sleeping pills, cash over 100,000 TWD, dried mushrooms*).
   - Instant status badges: **PROHIBITED** (Red), **RESTRICTED / DECLARATION REQUIRED** (Amber), or **ALLOWED WITH LIMITS** (Blue/Green).
   - Detailed regulatory citation, exact limits, and practical tips.
2. **High-Risk Critical Alerts Spotlight**:
   - **African Swine Fever (ASF) Strict Pork Ban**: NT$200,000 first-time fine (foreigners unable to pay are denied entry immediately at the border). Covers airline food, cured sausage, meat floss snacks, and instant noodles containing real meat pouches.
   - **E-Cigarettes & Heated Tobacco Ban**: Absolute prohibition under the amended Tobacco Hazards Prevention Act. Confiscation plus NT$50,000 to NT$5,000,000 fines; strictly banned even for personal use or in transit.
   - **Cannabis / CBD / Controlled Narcotics**: Zero-tolerance narcotics regulations in Taiwan; CBD oils with THC or unapproved formulations carry criminal penalties.
3. **Duty-Free & Regulated Limits Interactive Calculator**:
   - Alcohol allowance (1 liter under 20 years age limit verification).
   - Tobacco allowance (200 cigarettes or 25 cigars or 1 lb tobacco).
   - Cash & Currency thresholds (NT$100,000, RMB 20,000, Foreign currency equivalent of USD 10,000, Gold exceeding USD 20,000).
   - Over-the-counter medicines (up to 12 bottles per kind, 36 bottles total; prescription limits with doctor's letter).
4. **Customs Channel Guide (Red Channel vs. Green Channel)**:
   - Visual guidance: When in doubt, always choose the **Red Channel (Goods to Declare)**. Declaring items waives punitive fines even if goods are surrendered for destruction.
5. **Interactive Departure Checklist & Print View**:
   - Pre-flight checklist allowing travelers to tick off checked luggage vs. carry-on items with persistent state (saved to `localStorage`) and a clean `@media print` layout.

### Visual Identity & Theme
- **Aesthetic Direction**: Contemporary aviation & customs authority design. Crisp, reliable, clean, high legibility with institutional rigor and zero generic fluff.
- **Color Palette**:
  - Dominant Canvas: Crisp neutral white (`#FFFFFF`) with cool slate-50 (`#F8FAFC`) backdrops.
  - Structural Surfaces: Pure slate-900 typography (`#0F172A`), muted slate-600 secondary prose (`#475569`), hairline borders (`#E2E8F0`).
  - Critical Severity Tokens:
    - Prohibited / Danger: Crimson Red (`#DC2626` / `#FEF2F2`)
    - Regulated / Warning: Amber Ochre (`#D97706` / `#FFFBEB`)
    - Permitted / Safe: Forest Green (`#16A34A` / `#F0FDF4`)
    - Informational / Nav: Deep Aviation Navy (`#1E3A8A` / `#EFF6FF`)
- **Typography & Hierarchy**:
  - Display Font: `Plus Jakarta Sans` / `DM Sans` (bold, authoritative headers).
  - Body Font: Clean sans-serif with high readability, paired with tabular numerals (`tabular-nums font-mono`) for currencies, quotas, and penalty amounts.
  - Traditional Chinese: System font fallback (`"PingFang TC", "Microsoft JhengHei", sans-serif`) for flawless bilingual character rendering.
- **Top Bar Contract**:
  - Zone 1: Wordmark `Taiwan Customs Guide` with official emblem icon.
  - Zone 2: Navigation links (`Item Checker`, `Critical Alerts`, `Duty-Free Limits`, `Red/Green Channel`, `Packing Checklist`).
  - Zone 3: Primary action button (`Download / Print Checklist`).

---

## 3. Key Product Decisions & Trade-Offs

- **Client-Side Search & Dataset (Zero Network Latency)**:
  - *Decision*: Embed the structured catalog of 60+ items into an optimized client-side JSON data model rather than requiring an external API.
  - *Why*: Guarantees instant sub-millisecond filtering, works offline on airport Wi-Fi or during in-flight mode, and eliminates any runtime server dependency for seamless GitHub Pages deployment.
- **Bilingual Context (English + Traditional Chinese)**:
  - *Decision*: Include Chinese names for items (e.g. *Pork Floss 肉鬆*, *Fresh Mango 愛文芒果*, *E-Cigarette 電子煙*, *Heated Tobacco 加熱菸*, *Declared Channel 應申報櫃檯*).
  - *Why*: When travelers are at Taiwan Taoyuan or Songshan airport, showing the Chinese term to a quarantine officer or airline desk immediately prevents misunderstandings.
- **When In Doubt "Red Channel" Guidance**:
  - *Decision*: Promote the golden rule of Taiwan Customs prominently: if undeclared, prohibited goods carry immense fines; if declared at the Red Channel, unallowable goods are simply surrendered without punishment.
  - *Why*: This is the single most valuable legal protection for any international tourist.

---

## 4. Technical Architecture & Data Strategy

### System Architecture & Component Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                          Taiwan Customs Guide                          │
├────────────────────────────────────────────────────────────────────────┤
│  Top Navigation (Top Bar Contract: Brand · 5 Single-Line Links · Print)│
├────────────────────────────────┬───────────────────────────────────────┤
│  Emergency Alert Banner        │  ASF Alert: NT$200k+ Fine Warning     │
├────────────────────────────────┴───────────────────────────────────────┤
│  Quick "Can I Bring It?" Universal Search & Category Filter Bar       │
│  [ Input: "pork", "vape", "fruits"... ]  [ Filter: All / Meat / Meds ] │
├────────────────────────────────────────────────────────────────────────┤
│  Catalog Results Grid / Card System                                    │
│  ┌───────────────────────┐ ┌───────────────────────┐ ┌────────────────┐│
│  │ Pork & Pork Products  │ │ E-Cigarettes & Vapes  │ │ Fresh Fruits   ││
│  │ Status: PROHIBITED    │ │ Status: PROHIBITED    │ │ Status: BANNED ││
│  │ Fine: NT$ 200,000+    │ │ Fine: NT$ 50,000+     │ │ Fine: NT$3,000+││
│  │ 繁體: 豬肉製品        │ │ 繁體: 電子煙/加熱菸   │ │ 繁體: 新鮮水果 ││
│  └───────────────────────┘ └───────────────────────┘ └────────────────┘│
├────────────────────────────────────────────────────────────────────────┤
│  Interactive Duty-Free & Quota Calculator                              │
│  ┌───────────────────┐ ┌───────────────────┐ ┌────────────────────────┐│
│  │ Alcohol: 1 Liter  │ │ Tobacco: 200 Cigs │ │ Cash: NT$100k / $10k   ││
│  └───────────────────┘ └───────────────────┘ └────────────────────────┘│
├────────────────────────────────────────────────────────────────────────┤
│  Red Channel (申報) vs. Green Channel (免申報) Visual Decision Guide   │
├────────────────────────────────────────────────────────────────────────┤
│  Pre-Flight Interactive Luggage Checklist (Checked vs Carry-On)        │
│  [x] No raw meats  [x] Power banks in carry-on  [x] Declare cash       │
├────────────────────────────────────────────────────────────────────────┤
│  Official Contacts, FAQ, Airport Hotline Numbers & GitHub Repo Link    │
└────────────────────────────────────────────────────────────────────────┘
```

### Data Model & Category Breakdown
- **Categories**:
  - `meat_poultry`: Pork, beef, poultry, jerky, processed meats, instant noodle packets with meat
  - `agriculture_plants`: Fresh fruits, vegetables, seeds, soil, live plants, dried herbs
  - `tobacco_vape`: E-cigarettes, vape juices, heated tobacco devices, traditional cigarettes quota
  - `medicines_supplements`: Over-the-counter medicine limits, prescription drugs, vitamins, contact lenses
  - `currency_precious`: TWD, USD, RMB, gold bullions, negotiable securities
  - `electronics_batteries`: Power banks (carry-on only), lithium batteries, drones
  - `weapons_restricted`: Knives, pepper spray, imitation guns, martial arts items
- **State Management**:
  - React state for search terms, active categories, filter toggles, calculator input parameters, and expanded detail modals.
  - `localStorage` persistence for the interactive luggage packing checklist.
- **GitHub Readme & Deployment Guide**:
  - Dedicated copyable guide in a lightweight modal or drawer explaining how to deploy this repository directly to GitHub Pages (`gh-pages` / GitHub Actions) with zero configuration.

---

## 5. Verification & Delivery Steps

1. Review and approve the plan.
2. Build the complete, production-grade application in `src/App.tsx` and accompanying modules.
3. Configure `index.html` with title, meta tags, and open graph tags.
4. Verify compilation via `compile_applet` and linting via `lint_applet`.
