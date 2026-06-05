import { taxDisputeTypes } from "@/lib/data/tax-dispute-types";
import { tribunalsCourts } from "@/lib/data/tribunals-courts";
import { hmrcInvestigations } from "@/lib/data/hmrc-investigations";
import { guides } from "@/lib/data/guides";
import { services } from "@/lib/data/services";

/** Canonical production host for sitemap and robots */
export const CANONICAL_HOST = "https://www.taxexpertwitness.co.uk";

export const APP_STATIC_PATHS: string[] = [
  "/",
  "/services",
  "/tax-disputes-explained",
  "/tax-dispute-types",
  "/tribunals-courts",
  "/hmrc-investigation-types",
  "/what-is-a-tax-expert-witness",
  "/qualifications",
  "/how-to-instruct",
  "/guides",
  "/glossary",
  "/cookies",
];

function dynamicPaths(): string[] {
  return [
    ...services.map((s) => `/services/${s.id}`),
    ...taxDisputeTypes.map((d) => `/tax-dispute-types/${d.slug}`),
    ...tribunalsCourts.map((t) => `/tribunals-courts/${t.slug}`),
    ...hmrcInvestigations.map((h) => `/hmrc-investigation-types/${h.slug}`),
    ...guides.map((g) => `/guides/${g.slug}`),
  ];
}

export type PublicUrlInventory = {
  allPaths: string[];
  allUrls: string[];
};

export function buildPublicUrlInventory(): PublicUrlInventory {
  const combined = [...APP_STATIC_PATHS, ...dynamicPaths()];
  const allPaths = [...new Set(combined)].sort((a, b) => a.localeCompare(b));
  const allUrls = allPaths.map((path) =>
    path === "/" ? CANONICAL_HOST : `${CANONICAL_HOST}${path}`
  );

  return { allPaths, allUrls };
}

export function getChangeFreq(path: string): string {
  if (path === "/") return "weekly";
  if (path.startsWith("/guides")) return "monthly";
  if (path.includes("tax-dispute") || path.includes("tribunals") || path.includes("hmrc")) {
    return "monthly";
  }
  if (path.startsWith("/services")) return "monthly";
  if (path === "/cookies" || path === "/privacy" || path === "/terms") return "yearly";
  return "monthly";
}

export function getPriority(path: string): number {
  if (path === "/") return 1.0;
  if (path === "/services" || path === "/tax-disputes-explained") return 0.95;
  if (
    path === "/tax-dispute-types" ||
    path === "/tribunals-courts" ||
    path === "/hmrc-investigation-types"
  ) {
    return 0.93;
  }
  if (path === "/what-is-a-tax-expert-witness") return 0.9;
  if (path.startsWith("/services/")) return 0.92;
  if (
    path.startsWith("/tax-dispute-types/") ||
    path.startsWith("/tribunals-courts/") ||
    path.startsWith("/hmrc-investigation-types/")
  ) {
    return 0.9;
  }
  if (path === "/qualifications" || path === "/how-to-instruct") return 0.88;
  if (path === "/guides") return 0.87;
  if (path.startsWith("/guides/")) return 0.8;
  if (path === "/glossary") return 0.75;
  if (path === "/cookies") return 0.3;
  return 0.7;
}
