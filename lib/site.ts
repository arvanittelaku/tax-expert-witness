export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.taxexpertwitness.co.uk";

export const SITE_NAME = "TaxExpertWitness";
export const SITE_EMAIL = "cases@taxexpertwitness.co.uk";
export const LINKEDIN_URL = "https://www.linkedin.com/company/taxexpertwitness";

/** Shared copy: UK-only service scope (use in footer, contact, terms — not as a banner) */
export const UK_SERVICE_SCOPE =
  "TaxExpertWitness.co.uk is a United Kingdom–focused referral service. We connect instructing solicitors, barristers, and advisers with tax expert witnesses experienced in HMRC enquiries, UK tribunal procedure (First-tier Tribunal and Upper Tribunal), and domestic UK tax law including income tax, corporation tax, VAT, IHT, CGT, SDLT, and NIC. We do not provide expert witness referrals for non-UK tax jurisdictions, US federal or state tax proceedings, or disputes governed by foreign tax authorities.";

export const COLORS = {
  primary: "#1F3A4F",
  accent: "#C27C0E",
  highlight: "#1B5E20",
  background: "#FFFFFF",
  sectionAlt: "#F5F7F9",
  border: "#D1D9E0",
  heading: "#1F3A4F",
  body: "#374151",
} as const;
