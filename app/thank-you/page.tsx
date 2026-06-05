import Link from "next/link";
import PageHero from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | TaxExpertWitness.co.uk",
  description: "Your tax expert witness enquiry has been received.",
  path: "/thank-you",
  noindex: true,
  nofollow: true,
});

const nextSteps = [
  {
    step: "1",
    title: "Case review",
    description:
      "Our team reviews your dispute type, forum, and technical tax questions within 1 business day.",
  },
  {
    step: "2",
    title: "Expert matching",
    description:
      "We identify a CTA or ACA qualified tax expert witness with relevant FTT, Upper Tribunal, or HMRC investigation experience.",
  },
  {
    step: "3",
    title: "Introduction",
    description:
      "You receive an introduction to the matched expert to discuss scope, timeline, and CPR Part 35 report requirements.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Thank You: Enquiry Received"
        subtitle="We have received your tax expert witness enquiry and will respond within 1 business day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Thank You" }]}
      />
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-highlight/10 text-highlight text-3xl font-bold mb-6">
              ✓
            </div>
            <p className="text-body text-lg leading-relaxed">
              A member of our team will review your case details and match you with an appropriate
              UK tax expert witness for your dispute type and forum. For urgent FTT hearings, we
              prioritise enquiries marked as immediate.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-heading text-center mb-8">What Happens Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {nextSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)] text-center"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-bold text-heading">{item.title}</h3>
                  <p className="mt-2 text-sm text-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-accent px-8 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              Return to Homepage
            </Link>
            <Link
              href="/tax-disputes-explained"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-border px-8 py-3 text-base font-semibold text-heading hover:border-accent transition-colors"
            >
              Read Tax Disputes Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
