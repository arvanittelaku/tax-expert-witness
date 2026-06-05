import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import HubRelatedLinks from "@/components/HubRelatedLinks";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { taxDisputeTypes } from "@/lib/data/tax-dispute-types";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tax Dispute Types UK | VAT, Transfer Pricing, IHT, CGT & More",
  description:
    "Types of UK tax disputes requiring expert witness evidence, VAT fraud, transfer pricing, employment taxes, IHT valuations, CGT, SDLT, and corporate tax avoidance.",
  path: "/tax-dispute-types",
});

export default function TaxDisputeTypesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tax Dispute Types", path: "/tax-dispute-types" },
        ])}
      />
      <PageHero
        title="Types of Tax Dispute Requiring Expert Witness Evidence UK"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tax Dispute Types" }]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {taxDisputeTypes.map((dispute) => (
              <HubCard
                key={dispute.slug}
                title={dispute.shortTitle}
                description={dispute.paragraphs[0]}
                href={`/tax-dispute-types/${dispute.slug}`}
              />
            ))}
          </div>
          <HubRelatedLinks
            links={[
              { label: "Tax Disputes Explained (master pillar)", href: "/tax-disputes-explained" },
              { label: "VAT MTIC fraud disputes", href: "/tax-dispute-types/vat-mtic-fraud-disputes" },
              { label: "Transfer pricing disputes", href: "/tax-dispute-types/transfer-pricing-disputes" },
              { label: "Tax professional negligence", href: "/tax-dispute-types/tax-professional-negligence" },
            ]}
          />
        </div>
      </section>
      <CTASection />
    </>
  );
}
