import Link from "next/link";
import PageHero from "./PageHero";
import CTASection from "./CTASection";
import FAQAccordion from "./FAQAccordion";
import type { FAQ } from "@/lib/schema";

type Breadcrumb = { label: string; href?: string };

export default function DetailPageLayout({
  title,
  breadcrumbs,
  paragraphs,
  faqs,
  relatedLinks,
}: {
  title: string;
  breadcrumbs: Breadcrumb[];
  paragraphs: string[];
  faqs: FAQ[];
  relatedLinks?: { label: string; href: string; type: string }[];
}) {
  return (
    <>
      <PageHero title={title} breadcrumbs={breadcrumbs} />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-body leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>

          {relatedLinks && relatedLinks.length > 0 && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[8px] border border-border bg-white p-5 shadow-[var(--shadow-card)] hover:border-accent transition-colors min-h-[44px]"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                    {link.type}
                  </p>
                  <p className="font-semibold text-heading">{link.label}</p>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-14">
            <h2 className="text-2xl font-bold text-heading mb-6">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
      <CTASection buttonText="Contact Us" />
    </>
  );
}
