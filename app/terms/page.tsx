import PageHero from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use | TaxExpertWitness.co.uk",
  description: "Terms of use for TaxExpertWitness.co.uk referral service.",
  path: "/terms",
  noindex: true,
  nofollow: false,
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 prose-content max-w-3xl">
          <p><strong>Last updated:</strong> June 2025</p>

          <h2>About This Service</h2>
          <p>
            TaxExpertWitness.co.uk is a referral service that connects UK solicitors, barristers, forensic accountants, and taxpayers&apos; advisers with qualified tax expert witnesses. We are not a law firm and do not provide legal or tax advice.
          </p>

          <h2>Nature of the Service</h2>
          <p>
            When you submit an enquiry, we review your case details and introduce you to an appropriate tax expert witness. Any engagement with an expert witness is a separate arrangement between you and the expert. We do not guarantee the outcome of any tax dispute or tribunal proceeding.
          </p>

          <h2>No Legal Advice</h2>
          <p>
            Content on this website is provided for general information purposes only and does not constitute legal or tax advice. You should seek independent legal advice for your specific circumstances.
          </p>

          <h2>Expert Witness Independence</h2>
          <p>
            Tax expert witnesses introduced through our service are independent professionals bound by CPR Part 35 duties to the tribunal. Their duty is to the court or tribunal, not to the instructing party.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We endeavour to keep website content accurate and current, including references to tax law, tribunal procedure, and HMRC practice. Tax law changes frequently and you should verify current positions with your legal advisers.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, TaxExpertWitness.co.uk shall not be liable for any loss arising from reliance on website content or from the introduction of an expert witness. Our liability is limited to the referral service itself.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2>Contact</h2>
          <p>
            Enquiries about these terms:{" "}
            <a href="mailto:info@taxexpertwitness.co.uk">info@taxexpertwitness.co.uk</a>
          </p>
        </div>
      </section>
    </>
  );
}
