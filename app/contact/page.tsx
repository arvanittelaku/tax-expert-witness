import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL, UK_SERVICE_SCOPE } from "@/lib/site";

export const metadata = createMetadata({
  title: "Instruct a Tax Expert Witness | TaxExpertWitness.co.uk UK",
  description:
    "Submit your UK tax dispute details to be matched with a qualified tax expert witness for FTT, HMRC investigation, or tax litigation proceedings in England, Wales, Scotland, or Northern Ireland.",
  path: "/contact",
});

const trustPoints = [
  "CTA and ACA tax specialists with UK tribunal experience",
  "First-tier Tribunal and Upper Tribunal proceedings",
  "CPR Part 35 compliant reports under English procedure",
  "HMRC methodology challenge expertise",
  "Response within 1 business day (UK time)",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Instruct a Tax Expert Witness"
        subtitle="Submit details of your UK tax dispute. We match instructing solicitors and counsel with qualified tax expert witnesses for HMRC investigations, FTT appeals, and tax litigation governed by United Kingdom law."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container">
          <p className="text-body leading-relaxed max-w-3xl mb-8">
            {UK_SERVICE_SCOPE} If your matter concerns a non-UK tax authority or overseas tribunal, this service is unlikely to be appropriate.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2 min-w-0">
              <ContactForm />
            </div>
            <aside className="lg:col-span-1 min-w-0">
              <div className="rounded-[8px] border border-border bg-section-alt p-5 sm:p-6 lg:sticky lg:top-24">
                <h2 className="text-lg font-bold text-heading mb-4">Why Instruct Through Us</h2>
                <ul className="space-y-3">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-body text-sm">
                      <span className="text-highlight font-bold mt-0.5">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-body">
                    <span className="font-semibold text-heading">Email:</span>{" "}
                    <a href={`mailto:${SITE_EMAIL}`} className="text-accent hover:text-primary transition-colors break-all">
                      {SITE_EMAIL}
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
