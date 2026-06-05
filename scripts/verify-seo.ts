/**
 * Verifies public/sitemap.xml <loc> entries match buildPublicUrlInventory().
 * Run: npm run seo:verify
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";

const SITEMAP_PATH = join(process.cwd(), "public", "sitemap.xml");

function extractLocs(xml: string): string[] {
  const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
  return [...matches].map((m) => m[1]).sort();
}

function main(): void {
  if (!existsSync(SITEMAP_PATH)) {
    console.error("ERROR: public/sitemap.xml not found. Run npm run seo:generate first.");
    process.exit(1);
  }

  const xml = readFileSync(SITEMAP_PATH, "utf-8");
  const sitemapUrls = extractLocs(xml);
  const inventoryUrls = buildPublicUrlInventory().allUrls.sort();

  const missing = inventoryUrls.filter((u) => !sitemapUrls.includes(u));
  const extra = sitemapUrls.filter((u) => !inventoryUrls.includes(u));

  if (missing.length > 0) {
    console.error("ERROR: URLs missing from sitemap.xml:");
    missing.forEach((u) => console.error(`  - ${u}`));
  }

  if (extra.length > 0) {
    console.error("ERROR: Extra URLs in sitemap.xml not in inventory:");
    extra.forEach((u) => console.error(`  - ${u}`));
  }

  if (missing.length > 0 || extra.length > 0) {
    console.error(`\nSitemap: ${sitemapUrls.length} URLs | Inventory: ${inventoryUrls.length} URLs`);
    process.exit(1);
  }

  console.log(`seo:verify passed (${inventoryUrls.length} URLs in sync)`);
}

main();
