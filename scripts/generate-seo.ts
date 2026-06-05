/**
 * Generates public/sitemap.xml and public/robots.txt from buildPublicUrlInventory().
 * Run: npm run seo:generate
 */
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import {
  buildPublicUrlInventory,
  CANONICAL_HOST,
  getChangeFreq,
  getPriority,
} from "../lib/seo/publicUrlInventory";

const PUBLIC_DIR = join(process.cwd(), "public");
const lastmod = new Date().toISOString().slice(0, 10);

function renderSitemap(): string {
  const inventory = buildPublicUrlInventory();

  const urlEntries = inventory.allPaths
    .map((path) => {
      const loc = path === "/" ? CANONICAL_HOST : `${CANONICAL_HOST}${path}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getChangeFreq(path)}</changefreq>
    <priority>${getPriority(path).toFixed(2)}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

function renderRobots(): string {
  return `User-agent: *
Allow: /

Disallow: /thank-you
Disallow: /api/
Disallow: /_next/

Sitemap: ${CANONICAL_HOST}/sitemap.xml
`;
}

function main(): void {
  mkdirSync(PUBLIC_DIR, { recursive: true });

  const sitemap = renderSitemap();
  const robots = renderRobots();

  writeFileSync(join(PUBLIC_DIR, "sitemap.xml"), sitemap, "utf-8");
  writeFileSync(join(PUBLIC_DIR, "robots.txt"), robots, "utf-8");

  const count = buildPublicUrlInventory().allUrls.length;
  console.log(`Generated public/sitemap.xml (${count} URLs, lastmod ${lastmod})`);
  console.log(`Generated public/robots.txt`);
}

main();
