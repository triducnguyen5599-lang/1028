# 🛬 Taiwan Customs Guide: Prohibited & Restricted Items for Travelers

> An authoritative, fast, and mobile-friendly English guide to Taiwan Customs regulations, quarantine restrictions, duty-free quotas, and border inspection procedures.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![React 19](https://img.shields.io/badge/React-19-61dafb.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)

---

## 📖 Overview

This web application provides international tourists, expatriates, overseas students, and transit passengers traveling to Taiwan with instantaneous clarity on what cannot be brought into Taiwan, strict limits on regulated goods, required customs declarations, and the severe penalties for non-compliance.

### 🌟 Key Features

- **🚨 Critical Violations Spotlight**:
  - **African Swine Fever (ASF) Pork Ban**: First offense carries an immediate **NT$200,000 (~$6,250 USD)** fine; second offense **NT$1,000,000**. Foreigners unable to pay on the spot will be denied entry and deported.
  - **E-Cigarettes & Heated Tobacco Total Ban**: Absolute prohibition under Taiwan's amended *Tobacco Hazards Prevention Act*. Fines range from **NT$50,000 to NT$5,000,000** with zero traveler exemption.
  - **The Golden Safe Harbor Rule**: Why walking through the **RED Channel (Goods to Declare)** waives punitive fines even if questionable goods are surrendered for destruction.
- **🔍 60+ Item Baggage Search Engine**:
  - Instant typeahead search for travel commodities: pork jerky, raw meat, instant noodles, mangoes, vape pens, IQOS, cash, gold, medicines, power banks, and drones.
  - Bilingual Traditional Chinese translations (`繁體中文`) to show airport quarantine officers or airline staff directly.
- **🧮 Interactive Duty-Free Quota Calculator**:
  - Alcohol limits (1.0 L duty-free, max 5.0 L declared, age 20+ requirement).
  - Traditional tobacco limits (200 cigarettes / 1 carton).
  - Cash & foreign currency threshold warnings (NT$100,000 / $10,000 USD / RMB 20,000 / Gold).
  - Over-the-counter medicine & dietary supplement caps (12 bottles per kind, 36 total).
- **🟢 Red vs. Green Channel Decision Guide**: Step-by-step airport flow from pre-immigration surrender bins through baggage claim beagle patrols to arrival exit.
- **📋 Pre-Flight Luggage Packing Checklist**:
  - Carry-on bag vs. checked suitcase segregation.
  - Interactive checkboxes with progress indicator and `localStorage` persistence.
  - Print-friendly stylesheet (`@media print`) for offline travel use.
- **☎️ 24/7 Airport Customs Hotline Directory**: Taoyuan (TPE T1 & T2), Taipei Songshan (TSA), and Kaohsiung (KHH) phone numbers.

---

## 🚀 How to Run Locally

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/taiwan-customs-guide.git
cd taiwan-customs-guide

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🌐 Deploy to GitHub Pages

### Method 1: GitHub Actions (Recommended)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Taiwan Customs Prohibited & Restricted Items Guide"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/taiwan-customs-guide.git
   git push -u origin main
   ```
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site at `https://YOUR_USERNAME.github.io/taiwan-customs-guide/`.

### Method 2: Manual Build

```bash
npm run build
```
The output directory will be in `dist/`.

---

## ⚖️ Official Government References

- [Customs Administration, Ministry of Finance (R.O.C.)](https://web.customs.gov.tw/singlehtml/3158)
- [Animal and Plant Health Inspection Agency (APHIA)](https://www.aphia.gov.tw)
- [Taiwan Tobacco Hazards Prevention Act (Amended Regulations)](https://www.hpa.gov.tw)

---

## 📄 License

MIT License. Free for travelers and open-source contributions.
