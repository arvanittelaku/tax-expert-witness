import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { definedTermSetSchema, breadcrumbSchema } from "@/lib/schema";
import { glossaryTerms } from "@/lib/data/glossary";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tax Expert Witness Glossary | Key UK Tax & Tribunal Terms",
  description:
    "Definitions of key tax expert witness and tribunal terms for UK proceedings, from First-tier Tribunal to COP9, MTIC, transfer pricing, and CPR Part 35.",
  path: "/glossary",
});

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={[
          definedTermSetSchema(
            glossaryTerms.map((term) => ({
              id: term.id,
              name: term.question,
              description: term.answer,
            }))
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Glossary", path: "/glossary" },
          ]),
        ]}
      />
      <PageHero
        title="Tax Expert Witness Glossary"
        subtitle="Key UK tax dispute and tribunal terms for solicitors instructing tax expert witnesses."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Glossary" }]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <div className="space-y-4 max-w-3xl">
            {glossaryTerms.map((term) => (
              <div
                key={term.id}
                id={term.id}
                className="rounded-[8px] border border-border bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <h2 className="text-lg font-bold text-heading">{term.question}</h2>
                <p className="mt-2 text-body leading-relaxed">{term.answer}</p>
                {term.link && (
                  <Link
                    href={term.link.href}
                    className="mt-3 inline-block text-sm font-semibold text-accent hover:text-primary transition-colors"
                  >
                    {term.link.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
