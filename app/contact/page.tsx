import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Instruct a Tax Expert Witness | TaxExpertWitness.co.uk UK",
  description:
    "Submit your case details to be matched with a qualified UK tax expert witness for FTT, HMRC investigation, or tax litigation proceedings. Response within 1 business day.",
  path: "/contact",
});

const trustPoints = [
  "CTA and ACA tax specialists",
  "FTT and Upper Tribunal experience",
  "CPR Part 35 compliant reports",
  "HMRC methodology challenge expertise",
  "Response within 1 business day",
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 min-w-0">
              <ContactForm />
            </div>
            <aside className="lg:col-span-1 min-w-0">
              <div className="rounded-[8px] border border-border bg-section-alt p-6 lg:sticky lg:top-24">
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
                    <a href="mailto:info@taxexpertwitness.co.uk" className="text-accent hover:text-primary transition-colors">
                      info@taxexpertwitness.co.uk
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
