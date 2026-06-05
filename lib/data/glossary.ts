import type { FAQ } from "@/lib/schema";

export type GlossaryTerm = FAQ & {
  id: string;
  link?: { label: string; href: string };
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "apn",
    question: "Accelerated Payment Notice (APN)",
    answer:
      "An APN requires a taxpayer to pay disputed tax upfront where HMRC has issued a follower notice or the taxpayer has used a DOTAS-notifiable arrangement that has been defeated in another tribunal decision. Payment is required before the dispute is resolved at tribunal.",
    link: { label: "Corporate Tax Avoidance", href: "/tax-dispute-types/corporate-tax-avoidance-schemes" },
  },
  {
    id: "apa",
    question: "Advance Pricing Agreement (APA)",
    answer:
      "An APA is an agreement between a taxpayer and HMRC on the arm's length pricing of future related-party transactions, providing certainty and reducing transfer pricing dispute risk.",
    link: { label: "Transfer Pricing Enquiry", href: "/hmrc-investigation-types/transfer-pricing-enquiry" },
  },
  {
    id: "adr",
    question: "Alternative Dispute Resolution (ADR)",
    answer:
      "HMRC's ADR process provides mediation between the taxpayer and HMRC to resolve disputes without tribunal proceedings. A tax expert can provide preliminary technical analysis to inform the ADR position.",
    link: { label: "HMRC ADR Guide", href: "/tribunals-courts/alternative-dispute-resolution-hmrc" },
  },
  {
    id: "arms-length",
    question: "Arm's Length Principle",
    answer:
      "The arm's length principle requires that transactions between connected parties be priced as if the parties were independent. It is the foundation of transfer pricing law under UK domestic rules and OECD Guidelines.",
    link: { label: "Transfer Pricing Disputes", href: "/tax-dispute-types/transfer-pricing-disputes" },
  },
  {
    id: "badr",
    question: "Business Asset Disposal Relief (BADR)",
    answer:
      "BADR (formerly Entrepreneurs' Relief) provides a reduced CGT rate on qualifying business disposals. Disputes arise where HMRC challenges whether qualifying conditions, personal company test, officer requirement, and 24-month period, are met.",
    link: { label: "CGT Share Disposal Valuation", href: "/tax-dispute-types/cgt-share-disposal-valuation" },
  },
  {
    id: "bpr",
    question: "Business Property Relief (BPR)",
    answer:
      "BPR provides relief from IHT on qualifying business interests. Disputes arise over the trading vs investment test, valuation of business interests, and application of the excepted assets rule.",
    link: { label: "IHT Business Property Relief", href: "/tax-dispute-types/iht-business-property-relief" },
  },
  {
    id: "cop8",
    question: "COP8 (Code of Practice 8)",
    answer:
      "COP8 is HMRC's civil investigation of fraud procedure, used where HMRC suspects serious tax fraud but proposes a civil rather than criminal settlement.",
    link: { label: "COP8 Investigations", href: "/hmrc-investigation-types/code-of-practice-8-cop8" },
  },
  {
    id: "cop9",
    question: "COP9 / Contractual Disclosure Facility (CDF)",
    answer:
      "COP9 is HMRC's most serious civil investigation procedure. The taxpayer makes a full disclosure of deliberate tax fraud in exchange for civil settlement. Refusal leads to criminal investigation.",
    link: { label: "COP9 Investigations", href: "/hmrc-investigation-types/code-of-practice-9-cop9" },
  },
  {
    id: "cpr-part-35",
    question: "CPR Part 35",
    answer:
      "CPR Part 35 governs expert evidence in civil proceedings including FTT tax appeals. It requires expert independence, a summary of material instructions, and a statement of truth.",
    link: { label: "Qualifications", href: "/qualifications" },
  },
  {
    id: "crpr-part-33",
    question: "CrPR Part 33",
    answer:
      "CrPR Part 33 governs expert evidence in criminal proceedings. Tax expert witnesses in HMRC criminal investigations produce CrPR Part 33 compliant reports challenging prosecution financial reconstructions.",
    link: { label: "HMRC Criminal Investigation", href: "/hmrc-investigation-types/hmrc-criminal-investigation" },
  },
  {
    id: "discovery-assessment",
    question: "Discovery Assessment",
    answer:
      "A discovery assessment allows HMRC to assess tax where new information comes to light or HMRC discovers an under-assessment. Time limits and procedural requirements are frequently challenged, as in HMRC v Harte [2026].",
    link: { label: "Upper Tribunal Guide", href: "/tribunals-courts/upper-tribunal-tax" },
  },
  {
    id: "dotas",
    question: "DOTAS (Disclosure of Tax Avoidance Schemes)",
    answer:
      "DOTAS requires promoters and users of notifiable tax avoidance schemes to disclose them to HMRC. DOTAS-notified arrangements are subject to follower notices and accelerated payment notices when defeated in tribunal.",
    link: { label: "Corporate Tax Avoidance", href: "/tax-dispute-types/corporate-tax-avoidance-schemes" },
  },
  {
    id: "ers",
    question: "Employment Related Securities (ERS)",
    answer:
      "ERS provisions under ITEPA 2003 govern the tax treatment of shares and options provided to employees. Disputes arise over valuation at grant, vesting, or exercise, and s431 election treatment.",
    link: { label: "ERS Disputes", href: "/tax-dispute-types/employment-related-securities" },
  },
  {
    id: "ftt",
    question: "First-tier Tribunal (FTT): Tax Chamber",
    answer:
      "The FTT (Tax Chamber) handles appeals against HMRC decisions on income tax, CT, CGT, NIC, IHT, VAT, SDLT, and customs duties. Expert evidence is governed by CPR Part 35.",
    link: { label: "FTT Guide", href: "/tribunals-courts/first-tier-tribunal-tax" },
  },
  {
    id: "follower-notice",
    question: "Follower Notice",
    answer:
      "A follower notice requires a taxpayer to amend their return in accordance with a relevant tribunal decision. Non-compliance attracts a penalty. Tax experts analyse whether the ruling truly applies to the specific scheme.",
    link: { label: "Corporate Tax Avoidance", href: "/tax-dispute-types/corporate-tax-avoidance-schemes" },
  },
  {
    id: "gaar",
    question: "GAAR (General Anti-Abuse Rule)",
    answer:
      "The GAAR allows HMRC to counteract tax advantages from abusive arrangements using the double reasonableness test. It applies across direct and indirect taxes including SDLT and corporation tax.",
    link: { label: "Corporate Tax Avoidance", href: "/tax-dispute-types/corporate-tax-avoidance-schemes" },
  },
  {
    id: "sav",
    question: "HMRC Shares & Assets Valuation (SAV)",
    answer:
      "SAV is HMRC's specialist valuation unit providing share and asset valuations for CGT, IHT, and other tax purposes. Disputes arise where taxpayers challenge SAV's adopted methodology or value.",
    link: { label: "CGT Valuation Disputes", href: "/tax-dispute-types/cgt-share-disposal-valuation" },
  },
  {
    id: "harte-2026",
    question: "HMRC v Harte [2026]",
    answer:
      "A landmark Upper Tribunal decision criticising HMRC's application of extended time limits for discovery assessments. Highlights the importance of challenging HMRC procedural decisions.",
    link: { label: "Upper Tribunal Guide", href: "/tribunals-courts/upper-tribunal-tax" },
  },
  {
    id: "ikarian-reefer",
    question: "The Ikarian Reefer Duties",
    answer:
      "The Ikarian Reefer [1993] established the expert witness duties of independence, objectivity, and overriding duty to the court. These principles apply to tax expert witnesses under CPR Part 35.",
    link: { label: "Qualifications", href: "/qualifications" },
  },
  {
    id: "lifestyle-analysis",
    question: "Lifestyle Analysis (HMRC Investigation)",
    answer:
      "Lifestyle analysis compares a taxpayer's personal expenditure to declared income to estimate undeclared earnings. Tax experts challenge whether the correct data and methodology were applied.",
    link: { label: "Business Records Reconstruction", href: "/tax-dispute-types/hmrc-business-records-reconstruction" },
  },
  {
    id: "mark-up-analysis",
    question: "Mark-up Analysis (Business Reconstruction)",
    answer:
      "Mark-up analysis applies expected profit margins to purchases to estimate undeclared turnover. Experts challenge whether industry-appropriate margins were used for the specific business.",
    link: { label: "Business Records Reconstruction", href: "/tax-dispute-types/hmrc-business-records-reconstruction" },
  },
  {
    id: "mtic",
    question: "Missing Trader Intra-Community Fraud (MTIC)",
    answer:
      "MTIC fraud involves a missing trader in a VAT chain who collects VAT and disappears. HMRC denies input tax to connected businesses where the knowledge test under Mobilx v HMRC is met.",
    link: { label: "VAT MTIC Fraud", href: "/tax-dispute-types/vat-mtic-fraud-disputes" },
  },
  {
    id: "mobilx-v-hmrc",
    question: "Mobilx v HMRC [2010]",
    answer:
      "The Court of Appeal confirmed HMRC must prove actual or constructive knowledge before denying input tax in MTIC fraud cases. The knowledge test is central to MTIC expert evidence.",
    link: { label: "VAT MTIC Fraud", href: "/tax-dispute-types/vat-mtic-fraud-disputes" },
  },
  {
    id: "oecd-beps",
    question: "OECD BEPS Guidelines",
    answer:
      "The OECD Base Erosion and Profit Shifting project provides international transfer pricing standards. UK transfer pricing law aligns with OECD Guidelines for arm's length analysis.",
    link: { label: "Transfer Pricing Disputes", href: "/tax-dispute-types/transfer-pricing-disputes" },
  },
  {
    id: "pcrt",
    question: "PCRT (Professional Conduct in Relation to Taxation)",
    answer:
      "PCRT sets professional standards for tax advisers including competence, integrity, and appropriate risk advice. Breach supports negligence findings in tax professional negligence claims.",
    link: { label: "Tax Professional Negligence", href: "/tax-dispute-types/tax-professional-negligence" },
  },
  {
    id: "s431-election",
    question: "s431 Election (ITEPA 2003)",
    answer:
      "A s431 election taxes an employee on the unrestricted market value of shares at acquisition rather than when restrictions lift. Disputes arise over the value used and tax treatment.",
    link: { label: "ERS Disputes", href: "/tax-dispute-types/employment-related-securities" },
  },
  {
    id: "sdlt",
    question: "SDLT (Stamp Duty Land Tax)",
    answer:
      "SDLT is charged on land transactions in England and Northern Ireland. Disputes involve MDR, mixed use relief, GAAR application, and complex acquisition structures.",
    link: { label: "SDLT Disputes", href: "/tax-dispute-types/sdlt-property-transactions" },
  },
  {
    id: "s29-discovery",
    question: "Section 29 TMA Discovery Assessment",
    answer:
      "Section 29 TMA 1970 allows HMRC to make discovery assessments where under-assessments are discovered. Time limits under s29(3) and extended time limits are frequently disputed.",
    link: { label: "Upper Tribunal Guide", href: "/tribunals-courts/upper-tribunal-tax" },
  },
  {
    id: "transfer-pricing",
    question: "Transfer Pricing",
    answer:
      "Transfer pricing governs the pricing of transactions between connected parties. HMRC challenges prices not at arm's length and adjusts taxable profits accordingly.",
    link: { label: "Transfer Pricing Disputes", href: "/tax-dispute-types/transfer-pricing-disputes" },
  },
  {
    id: "tnmm",
    question: "TNMM (Transactional Net Margin Method)",
    answer:
      "TNMM is a transfer pricing method comparing net profit margins in controlled transactions to those in comparable uncontrolled transactions. Widely used for complex arrangements.",
    link: { label: "Transfer Pricing Disputes", href: "/tax-dispute-types/transfer-pricing-disputes" },
  },
  {
    id: "upper-tribunal",
    question: "Upper Tribunal (Tax)",
    answer:
      "The Upper Tribunal hears appeals from the FTT on points of law. Permission to appeal is sought from the FTT first. Expert evidence is limited to matters specifically permitted.",
    link: { label: "Upper Tribunal Guide", href: "/tribunals-courts/upper-tribunal-tax" },
  },
  {
    id: "vat-input-tax",
    question: "VAT Input Tax",
    answer:
      "Input tax is VAT incurred on business purchases that can be recovered against output tax. Denial of input tax in MTIC cases requires proof of knowledge of fraud connection.",
    link: { label: "VAT MTIC Fraud", href: "/tax-dispute-types/vat-mtic-fraud-disputes" },
  },
  {
    id: "voluntary-disclosure",
    question: "Voluntary Disclosure",
    answer:
      "A voluntary disclosure to HMRC of previously undeclared tax liabilities. Distinguished from COP9 CDF which is offered by HMRC in suspected fraud cases.",
    link: { label: "COP9 Investigations", href: "/hmrc-investigation-types/code-of-practice-9-cop9" },
  },
  {
    id: "withholding-tax",
    question: "Withholding Tax",
    answer:
      "Withholding tax is deducted at source on certain cross-border payments. Transfer pricing adjustments can affect withholding tax obligations and treaty relief claims.",
    link: { label: "Transfer Pricing Disputes", href: "/tax-dispute-types/transfer-pricing-disputes" },
  },
  {
    id: "zero-rate-vat",
    question: "Zero-Rate VAT Supply",
    answer:
      "Certain goods and services are zero-rated for VAT, taxable at 0% with input tax recovery. Classification disputes arise where HMRC challenges whether supplies qualify for zero-rating.",
    link: { label: "VAT Dispute Evidence", href: "/services/vat-dispute-evidence" },
  },
];
