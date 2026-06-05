import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { tribunalsCourts } from "@/lib/data/tribunals-courts";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tax Tribunals & Courts UK | FTT, Upper Tribunal & Appeals",
  description:
    "Guide to UK tax tribunals and courts, First-tier Tribunal (Tax), Upper Tribunal, Court of Appeal, and Supreme Court tax proceedings for solicitors.",
  path: "/tribunals-courts",
});

export default function TribunalsCourtsHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tax Tribunals & Courts", path: "/tribunals-courts" },
        ])}
      />
      <PageHero
        title="Tax Tribunals & Courts UK"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tribunals & Courts" }]}
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tribunalsCourts.map((tribunal) => (
              <HubCard
                key={tribunal.slug}
                title={tribunal.shortTitle}
                description={tribunal.paragraphs[0]}
                href={`/tribunals-courts/${tribunal.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
