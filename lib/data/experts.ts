export type Expert = {
  id: string;
  name: string;
  credentials: string[];
  specialisms: string[];
  experience: string;
  tribunals: string;
};

export const experts: Expert[] = [
  {
    id: "expert-1",
    name: "James Harrington FCTA",
    credentials: ["Fellow CTA (CIOT)", "ACA (ICAEW)", "FTT Expert Witness"],
    specialisms: [
      "VAT MTIC fraud and input tax disputes",
      "HMRC methodology challenge",
      "COP8 and COP9 investigations",
      "First-tier Tribunal expert evidence",
    ],
    experience:
      "James is a Fellow of the Chartered Institute of Taxation with over 25 years in tax dispute resolution. He has provided expert evidence in more than 40 FTT proceedings, specialising in VAT MTIC fraud knowledge test analysis and HMRC business records reconstruction challenges. He maintains an active tax advisory practice and has particular expertise in challenging HMRC forensic reconstructions that fail to follow approved methodology.",
    tribunals:
      "First-tier Tribunal (Tax), Upper Tribunal, 40+ expert reports and 15 tribunal appearances",
  },
  {
    id: "expert-2",
    name: "Dr Sarah Whitfield CTA",
    credentials: ["CTA (CIOT)", "PhD Taxation", "OECD Transfer Pricing"],
    specialisms: [
      "Transfer pricing disputes",
      "Arm's length analysis and comparables",
      "International group restructuring",
      "HMRC transfer pricing enquiries",
    ],
    experience:
      "Dr Whitfield is a Chartered Tax Adviser with a doctorate in international taxation and 18 years specialising in transfer pricing. She has produced expert reports for FTT and Upper Tribunal transfer pricing appeals involving adjustments from £2M to £80M. Her expertise covers OECD method selection, comparables analysis, and functional profiling for complex multinational structures.",
    tribunals:
      "First-tier Tribunal (Tax), Upper Tribunal, 25+ transfer pricing expert reports",
  },
  {
    id: "expert-3",
    name: "Michael Chen FCA CTA",
    credentials: ["FCA (ICAEW)", "CTA (CIOT)", "CPR Part 35 Expert"],
    specialisms: [
      "IHT business property relief disputes",
      "CGT share disposal valuation",
      "Employment related securities",
      "Tax professional negligence",
    ],
    experience:
      "Michael is a Fellow Chartered Accountant and Chartered Tax Adviser with 22 years combining valuation expertise and tax technical analysis. He provides expert evidence for IHT BPR qualification disputes, CGT SAV valuation challenges, ERS valuation under ITEPA 2003, and tax professional negligence claims. He has appeared before the FTT in valuation and negligence proceedings and produces CPR Part 35 compliant reports across direct tax disputes.",
    tribunals:
      "First-tier Tribunal (Tax), 30+ expert reports in IHT, CGT, ERS, and negligence matters",
  },
];

export function personSchema(expert: Expert) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: expert.name,
    jobTitle: "Tax Expert Witness",
    knowsAbout: expert.specialisms,
    hasCredential: expert.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: c,
    })),
    worksFor: {
      "@type": "Organization",
      name: "TaxExpertWitness",
    },
  };
}
