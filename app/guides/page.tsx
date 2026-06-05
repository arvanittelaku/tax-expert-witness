import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import HubRelatedLinks from "@/components/HubRelatedLinks";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { guides } from "@/lib/data/guides";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Solicitor Guides: Tax Expert Witnesses UK | HMRC & Tribunal",
  description:
    "In-depth guides for UK solicitors on tax expert witnesses, FTT procedure, COP9 methodology, MTIC fraud defence, transfer pricing disputes, and IHT valuation challenges.",
  path: "/guides",
});

export default function GuidesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <PageHero
        title="Solicitor Guides: Tax Expert Witnesses UK"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <HubCard
                key={guide.slug}
                title={guide.shortTitle}
                description={guide.excerpt}
                href={`/guides/${guide.slug}`}
              />
            ))}
          </div>
          <HubRelatedLinks
            links={[
              { label: "Tax Disputes Explained (master pillar)", href: "/tax-disputes-explained" },
              { label: "How to instruct a tax expert witness", href: "/how-to-instruct" },
              { label: "HMRC methodology challenge guide", href: "/guides/hmrc-methodology-challenge-guide" },
              { label: "MTIC knowledge test guide", href: "/guides/vat-mtic-knowledge-test-guide" },
            ]}
          />
        </div>
      </section>
      <CTASection />
    </>
  );
}
