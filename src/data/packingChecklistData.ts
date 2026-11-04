export interface ChecklistItem {
  id: string;
  category: 'carry_on' | 'checked' | 'declaration_action';
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  isCrucial: boolean;
}

export const DEFAULT_CHECKLIST: ChecklistItem[] = [
  // Carry-On Bag
  {
    id: 'carry-powerbanks',
    category: 'carry_on',
    titleEn: 'Power Banks & Spare Batteries in Carry-On Only',
    titleZh: '行動電源及鋰電池置於手提行李',
    descriptionEn: 'Never pack lithium power banks or spare camera batteries in checked luggage (strict aviation fire safety).',
    isCrucial: true
  },
  {
    id: 'carry-prescriptions',
    category: 'carry_on',
    titleEn: 'Prescription Medicines with Doctor\'s Note',
    titleZh: '處方藥品與英文診斷證明隨身攜帶',
    descriptionEn: 'Carry essential medications in original boxes with prescription/doctor\'s letter in English.',
    isCrucial: true
  },
  {
    id: 'carry-passport-funds',
    category: 'carry_on',
    titleEn: 'Valid Passport (6+ Months) & Entry Documents',
    titleZh: '護照效期6個月以上及入境證明',
    descriptionEn: 'Ensure passport has at least 6 months validity from date of entry.',
    isCrucial: true
  },
  {
    id: 'carry-cash-check',
    category: 'carry_on',
    titleEn: 'Count Cash to Verify Declaration Thresholds',
    titleZh: '清點現金確保符合免申報上限',
    descriptionEn: 'Check that cash does not exceed NT$100,000, USD $10,000 equivalent, or RMB 20,000 without declaration.',
    isCrucial: false
  },

  // Checked Luggage
  {
    id: 'checked-no-pork',
    category: 'checked',
    titleEn: 'NO Pork, Jerky, Meat Floss or Cured Sausage',
    titleZh: '嚴禁任何豬肉製品（肉乾、香腸、肉鬆、月餅）',
    descriptionEn: 'Inspect all gift bags and snacks. 1st violation carries mandatory NT$200,000 fine under African Swine Fever law.',
    isCrucial: true
  },
  {
    id: 'checked-no-vape',
    category: 'checked',
    titleEn: 'NO E-Cigarettes, Vapes or Heated Tobacco',
    titleZh: '嚴禁攜帶電子煙、煙油、加熱菸主機及煙彈',
    descriptionEn: 'Do not pack e-cigarettes or IQOS sticks in either checked or carry-on luggage. Fines start at NT$50,000.',
    isCrucial: true
  },
  {
    id: 'checked-no-fresh-fruit',
    category: 'checked',
    titleEn: 'NO Fresh Fruit (Mangoes, Apples, Citrus, Bananas)',
    titleZh: '嚴禁任何新鮮水果',
    descriptionEn: 'Eat or discard any leftover fruit from in-flight meals or prior departures before landing.',
    isCrucial: true
  },
  {
    id: 'checked-alcohol-limit',
    category: 'checked',
    titleEn: 'Alcohol Limited to 1 Liter Duty-Free (Max 5L Declared)',
    titleZh: '酒類免稅1公升（需年滿20歲）',
    descriptionEn: 'Pack wine/spirits securely cushioned in checked luggage. Max 1 liter duty-free.',
    isCrucial: false
  },
  {
    id: 'checked-otc-meds',
    category: 'checked',
    titleEn: 'Over-The-Counter Medicine Limits (Max 12/kind, 36 total)',
    titleZh: '非處方藥每種上限12瓶，總計不超過36瓶',
    descriptionEn: 'Keep non-prescription vitamins, painkillers, and digestive pills within official quotas.',
    isCrucial: false
  },

  // Customs Action at Airport
  {
    id: 'action-snack-check',
    category: 'declaration_action',
    titleEn: 'Discard Unknown Snacks in Airport Surrender Bins',
    titleZh: '入關前將不確定食物投入棄置桶',
    descriptionEn: 'Notice the yellow/red quarantine bins before immigration. Discarding items carries ZERO penalty.',
    isCrucial: true
  },
  {
    id: 'action-red-channel',
    category: 'declaration_action',
    titleEn: 'When in Doubt: Walk the RED Channel (申報櫃檯)',
    titleZh: '有疑問時，務必走紅線應申報檯',
    descriptionEn: 'Declaring goods waives punitive fines. Even if an item cannot be admitted, it is surrendered peacefully.',
    isCrucial: true
  }
];

export interface FAQItem {
  question: string;
  questionZh: string;
  answer: string;
  badge: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'Can I bring canned meat like Spam, corned beef, or luncheon meat?',
    questionZh: '我可以帶午餐肉或牛肉罐頭嗎？',
    answer: 'Canned pork products from African Swine Fever affected zones are banned. Other commercially sterilized metal cans (beef or chicken) might technically pass, but quarantine officers must physically inspect the can seals. You MUST present them at the Red Channel. If undeclared, you risk massive fines.',
    badge: 'Quarantine'
  },
  {
    question: 'What happens if I accidentally forget an apple or sandwich from the airplane in my bag?',
    questionZh: '如果我不小心把飛機上的蘋果或三明治忘在包包裡會怎樣？',
    answer: 'Quarantine detection beagles patrol the baggage claim area actively. If you walk through the Green Channel and the dog signals your bag, you will be fined NT$3,000 for fruit, or NT$200,000 if the sandwich contains pork. Always search your bag before customs and discard food in the designated airport bins.',
    badge: 'Fines'
  },
  {
    question: 'Are vape pens or nicotine-free e-liquids allowed if they are for personal use during my vacation?',
    questionZh: '自用的電子煙或不含尼古丁煙油可以在旅遊期間攜帶嗎？',
    answer: 'No. Taiwan enacted a blanket ban under the amended Tobacco Hazards Prevention Act. Nicotine-containing and non-nicotine vape devices, pods, and heated tobacco units are strictly forbidden from importation regardless of personal use. Fines range from NT$50,000 to NT$5,000,000.',
    badge: 'Total Ban'
  },
  {
    question: 'How much money can I bring into Taiwan without declaring?',
    questionZh: '入境臺灣免申報的現金上限是多少？',
    answer: 'You can carry up to NT$100,000 in New Taiwan Dollars, up to RMB 20,000 in Chinese Yuan, and up to the equivalent of USD $10,000 in foreign currencies (e.g., USD, JPY, EUR). If you carry more than USD $10,000, simply declare it at the Red Channel—there is NO tax or upper limit on foreign currency if properly declared.',
    badge: 'Currency'
  },
  {
    question: 'Can I bring CBD oil, melatonin, or sleeping pills for jet lag?',
    questionZh: '我可以帶CBD精油、褪黑激素或安眠藥嗎？',
    answer: 'CBD products with detectable THC are considered illegal narcotics carrying severe prison sentences. Melatonin supplements (if classified as OTC overseas) are generally allowed within the 12/36 bottle limit. Sleeping pills that fall under controlled pharmaceuticals (like Zolpidem/Ambien) require an authentic prescription in your name.',
    badge: 'Health'
  }
];
