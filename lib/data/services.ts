import type { FAQ } from "@/lib/schema";

export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  paragraphs: string[];
  methodology: { aspect: string; detail: string }[];
  faqs: FAQ[];
  relatedHref: string;
};

export const services: Service[] = [
  {
    id: "technical-tax-opinion",
    title: "Technical Tax Opinion (FTT/Upper Tribunal)",
    shortTitle: "Technical Tax Opinion",
    metaTitle: "Technical Tax Opinion Expert Witness UK | FTT & Upper Tribunal",
    metaDescription:
      "Independent technical tax opinions for UK FTT and Upper Tribunal proceedings. CPR Part 35 compliant expert reports challenging HMRC tax analysis.",
    description:
      "Independent technical tax opinions addressing whether HMRC's tax analysis is correct, what the correct tax treatment should be, and how statutory provisions, HMRC guidance, and case law apply to the facts of the dispute.",
    paragraphs: [
      "Technical tax opinion is the core instruction for tax expert witnesses in FTT and Upper Tribunal proceedings. The expert provides an independent view on whether HMRC has correctly applied tax law to the facts, what the correct tax treatment should be, and how relevant legislation, HMRC guidance, and binding case law support the taxpayer's or HMRC's position.",
      "Reports are prepared in CPR Part 35 format with a summary of material instructions, statement of truth, and full analysis accessible to non-specialist tribunal judges. The expert's duty is to the tribunal, not the instructing party.",
      "Early instruction is essential given FTT cases typically take 2 to 3 years from appeal to hearing, allowing adequate time for document review, analysis, and response to written questions.",
    ],
    methodology: [
      { aspect: "Scope", detail: "Identification of disputed technical tax questions and material facts" },
      { aspect: "Legal analysis", detail: "Application of primary legislation, HMRC manuals, and binding tribunal decisions" },
      { aspect: "Report format", detail: "CPR Part 35 compliant expert report with statement of truth" },
      { aspect: "Tribunal support", detail: "Written questions, supplemental reports, and hearing attendance" },
    ],
    faqs: [
      {
        question: "When is a technical tax opinion needed at the FTT?",
        answer:
          "A technical tax opinion is needed where the dispute turns on the correct application of tax law rather than financial reconstruction alone. This includes challenges to HMRC assessments, disputed tax treatment of transactions, and appeals where statutory interpretation is central to the outcome.",
      },
      {
        question: "What format must the expert report follow?",
        answer:
          "FTT expert reports must comply with CPR Part 35, including a summary of material instructions, statement of truth, and analysis that addresses all material matters including those unfavourable to the instructing party. The expert's duty is to the tribunal.",
      },
    ],
    relatedHref: "/tax-disputes-explained",
  },
  {
    id: "hmrc-methodology-challenge",
    title: "HMRC Methodology Challenge",
    shortTitle: "HMRC Methodology Challenge",
    metaTitle: "HMRC Methodology Challenge Expert Witness UK",
    metaDescription:
      "Expert witness challenge to HMRC business records reconstruction methodology. Independent review of mark-up, lifestyle, and cash flow analysis.",
    description:
      "Expert review and challenge of HMRC's financial reconstruction methodology, including cases where HMRC relied on flawed data, ignored actual circumstances, or failed to apply its own approved reconstruction methods.",
    paragraphs: [
      "HMRC frequently relies on forensic reconstructions to estimate undeclared income in direct tax investigations. A tax expert witness challenges whether the correct methodology was applied and whether the figures are supportable against HMRC's own published guidance.",
      "Common failures include applying industry mark-ups without regard to the specific business model, lifestyle analysis using incomplete data, and ignoring HMRC's approved reconstruction methods. In one case, independent review reduced alleged undeclared income from £600,000 to £100,000.",
      "Methodology challenge is equally important in COP8 and COP9 investigations before settlement, and in FTT proceedings where HMRC's reconstruction forms the basis of the assessment.",
    ],
    methodology: [
      { aspect: "Reconstruction review", detail: "Analysis of mark-up, lifestyle, and cash flow reconstruction methods" },
      { aspect: "HMRC compliance", detail: "Assessment against HMRC's published approved methodology" },
      { aspect: "Data validation", detail: "Testing underlying assumptions and source data reliability" },
      { aspect: "Counter-quantum", detail: "Independent calculation of correct tax position" },
    ],
    faqs: [
      {
        question: "How does a tax expert challenge HMRC's reconstruction?",
        answer:
          "The expert reviews HMRC's methodology against published approved methods, tests underlying data and assumptions, and produces an independent reconstruction where the original fails scrutiny. Challenges address both methodology compliance and the resulting quantum.",
      },
      {
        question: "Can methodology challenge reduce the settlement figure?",
        answer:
          "Yes. Where HMRC has failed to follow approved reconstruction methods or relied on flawed data, expert challenge can significantly reduce the alleged undeclared income figure, affecting both COP8/COP9 settlements and FTT outcomes.",
      },
    ],
    relatedHref: "/guides/hmrc-methodology-challenge-guide",
  },
  {
    id: "vat-dispute-evidence",
    title: "VAT Dispute Expert Evidence",
    shortTitle: "VAT Dispute Expert Evidence",
    metaTitle: "VAT Dispute Expert Witness UK | MTIC & Input Tax",
    metaDescription:
      "VAT dispute expert witness evidence for UK FTT proceedings. MTIC fraud knowledge test, input tax denial, and technical VAT analysis.",
    description:
      "Expert evidence for VAT disputes including MTIC fraud input tax denial, knowledge test analysis under Mobilx v HMRC, and technical VAT treatment of complex transactions.",
    paragraphs: [
      "VAT disputes before the FTT frequently require expert evidence on the knowledge test in MTIC fraud cases, technical supply classification, and input tax entitlement. The tax expert witness provides independent analysis separate from forensic transaction tracing.",
      "Under Mobilx Ltd v HMRC [2010], HMRC must prove actual or constructive knowledge before denying input tax. Expert evidence on due diligence, red flags, and the knowledge test has achieved cancellation of substantial VAT assessments.",
      "VAT expert witnesses also address technical VAT treatment disputes including place of supply, zero-rating, and partial exemption methodology.",
    ],
    methodology: [
      { aspect: "Knowledge test", detail: "Analysis of actual and constructive knowledge of fraud connection" },
      { aspect: "Due diligence", detail: "Review of commercial checks and red flag assessment" },
      { aspect: "Transaction tracing", detail: "Chain analysis in MTIC and carousel fraud cases" },
      { aspect: "VAT technical", detail: "Supply classification, place of supply, and input tax entitlement" },
    ],
    faqs: [
      {
        question: "What is the Mobilx knowledge test?",
        answer:
          "Mobilx Ltd v HMRC [2010] established that HMRC must prove actual or constructive knowledge of a connection to MTIC fraud before denying input tax. The tax expert analyses due diligence performed and whether a reasonable business would have known of the fraud connection.",
      },
      {
        question: "When is VAT expert evidence needed alongside forensic accounting?",
        answer:
          "Forensic accountants trace transactions and quantify flows; tax expert witnesses address the knowledge test, input tax entitlement, and technical VAT treatment. Both disciplines are frequently needed in complex MTIC disputes.",
      },
    ],
    relatedHref: "/tax-dispute-types/vat-mtic-fraud-disputes",
  },
  {
    id: "transfer-pricing-evidence",
    title: "Transfer Pricing Expert Evidence",
    shortTitle: "Transfer Pricing Expert Evidence",
    metaTitle: "Transfer Pricing Expert Witness UK | Arm's Length Analysis",
    metaDescription:
      "Transfer pricing expert witness evidence for UK HMRC disputes. OECD methods, comparables analysis, and arm's length principle.",
    description:
      "Arm's length analysis, comparables review, and OECD method selection for transfer pricing disputes, particularly important given HMRC's significantly increased transfer pricing enforcement in 2025.",
    paragraphs: [
      "Transfer pricing disputes require expert evidence on method selection, comparables identification and adjustment, and whether related-party pricing was at arm's length. HMRC's transfer pricing yield increased sharply in 2025 through more sophisticated enforcement.",
      "Tax expert witnesses apply OECD-approved methods including CUP, Resale Price, Cost Plus, and TNMM, justifying the most appropriate method for the specific transaction type and functional profile.",
      "Transfer pricing expert reports for complex international structures can require extensive economic analysis and are a significant investment where disputed adjustments run into millions.",
    ],
    methodology: [
      { aspect: "Method selection", detail: "CUP, Resale Price, Cost Plus, TNMM, and profit split analysis" },
      { aspect: "Comparables", detail: "Identification and adjustment of comparable uncontrolled transactions" },
      { aspect: "OECD BEPS", detail: "Compliance assessment against OECD Transfer Pricing Guidelines" },
      { aspect: "Documentation", detail: "Review of transfer pricing documentation and APA positions" },
    ],
    faqs: [
      {
        question: "What transfer pricing methods do expert witnesses use?",
        answer:
          "Experts apply OECD-approved methods: Comparable Uncontrolled Price for commodities, Resale Price or Cost Plus for distribution and manufacturing, and TNMM for complex arrangements. Method selection must be justified for the specific transaction and functional analysis.",
      },
      {
        question: "Why has transfer pricing expert evidence become more important in 2025?",
        answer:
          "HMRC has significantly increased transfer pricing enforcement in 2025 with more sophisticated analytical tools and broader transaction targeting, making independent arm's length expert evidence critical for large and mid-size international groups.",
      },
    ],
    relatedHref: "/tax-dispute-types/transfer-pricing-disputes",
  },
  {
    id: "iht-cgt-valuation",
    title: "IHT & CGT Valuation Disputes",
    shortTitle: "IHT & CGT Valuation Disputes",
    metaTitle: "IHT & CGT Valuation Expert Witness UK | SAV Disputes",
    metaDescription:
      "IHT and CGT valuation expert witness evidence for UK tribunal proceedings. Business property relief, share disposal, and HMRC SAV challenges.",
    description:
      "Independent valuation opinions for IHT business property relief disputes, CGT share disposal valuations, and challenges to HMRC Shares & Assets Valuation (SAV) assessments.",
    paragraphs: [
      "IHT and CGT disputes frequently turn on the value of unquoted shares, business interests, or property at a specific date. Tax expert witnesses address both the correct valuation methodology and whether HMRC SAV's adopted value is defensible.",
      "Business Property Relief disputes require analysis of the trading vs investment test under IHTA 1984 s105. CGT share disposal disputes involve earnings multiple, NAV, or DCF methodology and minority discount analysis.",
      "Expert counter-valuations are essential where the tax liability depends on a valuation difference of hundreds of thousands or millions of pounds.",
    ],
    methodology: [
      { aspect: "Valuation method", detail: "Earnings multiple, NAV, DCF, and market value at relevant date" },
      { aspect: "BPR qualification", detail: "Trading vs investment business test analysis" },
      { aspect: "SAV challenge", detail: "Independent counter-valuation to HMRC SAV position" },
      { aspect: "BADR conditions", detail: "Personal company and qualifying period assessment" },
    ],
    faqs: [
      {
        question: "How does HMRC challenge share valuations?",
        answer:
          "HMRC's Shares & Assets Valuation team provides valuations for IHT and CGT purposes on unquoted shares and business interests. Where the taxpayer disagrees, a tax expert witness produces an independent counter-valuation and defends the methodology before the FTT.",
      },
      {
        question: "When is expert evidence needed for IHT Business Property Relief?",
        answer:
          "Expert evidence is needed when HMRC challenges whether a business qualifies as trading rather than investment, when the value of BPR-eligible interests is disputed, or when the excepted assets rule reduces available relief.",
      },
    ],
    relatedHref: "/tax-dispute-types/iht-business-property-relief",
  },
  {
    id: "employment-related-securities",
    title: "Employment Related Securities",
    shortTitle: "Employment Related Securities",
    metaTitle: "Employment Related Securities Expert Witness UK | ERS Disputes",
    metaDescription:
      "ERS expert witness evidence for UK tax disputes. Growth shares, EMI options, s431 elections, and ITEPA 2003 valuation challenges.",
    description:
      "Expert evidence for ERS disputes under ITEPA 2003, including growth shares, restricted share plans, EMI options, and s431 election valuation challenges.",
    paragraphs: [
      "Employment Related Securities disputes arise where HMRC challenges the valuation placed on shares or options at grant, vesting, or exercise. Growth share arrangements, hurdle structures, and restricted share plans are common areas of dispute.",
      "Tax expert witnesses provide independent analysis of market value at the relevant date, assessing commercial restrictions on shares and whether HMRC's valuation methodology is appropriate.",
      "s431 election disputes require expert evidence on the unrestricted market value at acquisition and the correct tax treatment of the overall arrangement.",
    ],
    methodology: [
      { aspect: "Valuation date", detail: "Market value at grant, vesting, or exercise as relevant" },
      { aspect: "Restrictions", detail: "Analysis of commercial restrictions affecting value" },
      { aspect: "s431 elections", detail: "Assessment of unrestricted market value at acquisition" },
      { aspect: "ITEPA analysis", detail: "Correct tax treatment of share and option arrangements" },
    ],
    faqs: [
      {
        question: "When is a tax expert witness needed for ERS disputes?",
        answer:
          "ERS disputes require expert evidence where HMRC challenges the valuation of shares or options, particularly for growth shares, hurdle arrangements, and restricted share plans. The expert provides independent valuation analysis at the relevant date.",
      },
      {
        question: "What is a s431 election dispute?",
        answer:
          "A s431 election under ITEPA 2003 taxes an employee on unrestricted market value at acquisition. Disputes arise where HMRC challenges the value used in the election or the tax treatment of the arrangement, requiring expert valuation and technical analysis.",
      },
    ],
    relatedHref: "/tax-dispute-types/employment-related-securities",
  },
  {
    id: "tax-professional-negligence",
    title: "Tax Professional Negligence",
    shortTitle: "Tax Professional Negligence",
    metaTitle: "Tax Professional Negligence Expert Witness UK",
    metaDescription:
      "Expert witness evidence for UK tax professional negligence claims. Standard of care, PCRT, but-for analysis, and loss quantification.",
    description:
      "Expert opinions on standard of care in tax advice, whether advice fell below the required standard, the correct advice that should have been given, and loss causation in professional negligence claims.",
    paragraphs: [
      "Tax professional negligence claims require a tax expert witness to assess whether a reasonably competent tax adviser would have given different advice, whether PCRT standards were met, and what loss was caused by the negligent advice.",
      "The but-for position establishes what the claimant's tax position would have been had competent advice been given. The difference between this and actual tax paid, including penalties and interest, represents recoverable loss subject to SAAMCo scope limitations.",
      "Expert evidence addresses both the technical correctness of the advice and whether material risks were properly communicated to the client.",
    ],
    methodology: [
      { aspect: "Standard of care", detail: "Assessment against reasonably competent tax adviser benchmark" },
      { aspect: "PCRT compliance", detail: "Review against Professional Conduct in Relation to Taxation" },
      { aspect: "But-for position", detail: "Correct advice and resulting tax position analysis" },
      { aspect: "Loss quantification", detail: "Additional tax, penalties, interest, and SAAMCo scope" },
    ],
    faqs: [
      {
        question: "What standard of care applies to UK tax advisers?",
        answer:
          "Tax advisers must exercise the skill and care of a reasonably competent tax adviser in their field, applying relevant tax law correctly and complying with PCRT. The expert assesses whether advice fell below this standard and what correct advice should have been given.",
      },
      {
        question: "How is loss quantified in a tax negligence claim?",
        answer:
          "The but-for position is established and compared to the actual tax paid including penalties and interest. The difference is the recoverable loss, subject to any SAAMCo scope of duty limitations on the adviser's responsibility.",
      },
    ],
    relatedHref: "/tax-dispute-types/tax-professional-negligence",
  },
  {
    id: "cop8-cop9-support",
    title: "COP8 / COP9 Expert Support",
    shortTitle: "COP8 / COP9 Support",
    metaTitle: "COP8 & COP9 Expert Witness Support UK",
    metaDescription:
      "Expert witness support for UK COP8 and COP9 HMRC investigations. Pre-disclosure review, methodology challenge, and CDF support.",
    description:
      "Expert support for HMRC Code of Practice 8 and Code of Practice 9 investigations, reviewing HMRC methodology before disclosure and providing independent technical analysis of the correct tax position.",
    paragraphs: [
      "COP8 and COP9 are HMRC's civil fraud investigation procedures. Expert witnesses review financial records and HMRC's preliminary reconstruction before disclosure, ensuring the taxpayer's position is accurately represented.",
      "Independent forensic review before COP9 Contractual Disclosure Facility submission is essential to ensure complete and accurate disclosure while challenging HMRC methodology where appropriate.",
      "With COP9 methodology under debate in 2025 to 2026, expert witnesses with COP9 experience help navigate the evolving landscape between civil settlement and criminal investigation routes.",
    ],
    methodology: [
      { aspect: "Pre-disclosure review", detail: "Financial records analysis before CDF submission" },
      { aspect: "Methodology challenge", detail: "Independent review of HMRC reconstruction" },
      { aspect: "Settlement support", detail: "Technical analysis informing negotiation position" },
      { aspect: "Criminal risk", detail: "Assessment of civil vs criminal route implications" },
    ],
    faqs: [
      {
        question: "When should a tax expert be instructed in a COP9 investigation?",
        answer:
          "A tax expert should be instructed as early as possible, ideally before accepting or responding to the COP9 offer and before preparing the Contractual Disclosure Facility. Early review ensures accurate disclosure and challenges HMRC methodology before settlement negotiations.",
      },
      {
        question: "What is the difference between COP8 and COP9 expert support?",
        answer:
          "COP8 is HMRC's civil fraud investigation without the criminal route offer. COP9 is the Contractual Disclosure Facility where refusal leads to criminal investigation. Both require expert methodology review, but COP9 demands particular care on disclosure completeness and accuracy.",
      },
    ],
    relatedHref: "/hmrc-investigation-types/code-of-practice-9-cop9",
  },
];

export function getService(id: string) {
  return services.find((s) => s.id === id);
}
