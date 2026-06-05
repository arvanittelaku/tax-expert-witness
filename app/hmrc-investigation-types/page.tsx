import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { hmrcInvestigations } from "@/lib/data/hmrc-investigations";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "HMRC Investigation Types UK | COP8, COP9 & Enquiry Procedures",
  description:
    "HMRC investigation types requiring tax expert witness support, Code of Practice 8, Code of Practice 9, MTIC fraud, transfer pricing, and criminal investigation procedures.",
  path: "/hmrc-investigation-types",
});

export default function HmrcInvestigationTypesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "HMRC Investigation Types", path: "/hmrc-investigation-types" },
        ])}
      />
      <PageHero
        title="HMRC Investigation Types: When Expert Evidence Helps"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "HMRC Investigation Types" }]}
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hmrcInvestigations.map((investigation) => (
              <HubCard
                key={investigation.slug}
                title={investigation.shortTitle}
                description={investigation.paragraphs[0]}
                href={`/hmrc-investigation-types/${investigation.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
