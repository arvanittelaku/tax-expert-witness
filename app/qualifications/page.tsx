import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tax Expert Witness Qualifications UK | CTA, ACA & Tax Credentials",
  description:
    "What credentials should a UK tax expert witness hold? CTA, ATT, ACA, tax litigation experience, FTT/Upper Tribunal testimony history, and CPR Part 35 compliance explained.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Qualifications", path: "/qualifications" },
        ])}
      />
      <PageHero
        title="Tax Expert Witness Qualifications & Credentials"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Qualifications" }]}
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 prose-content max-w-3xl">
          <h2>Core Tax Credentials</h2>

          <h3>CTA (Chartered Tax Adviser)</h3>
          <p>
            The primary UK qualification for tax specialists, awarded by the Chartered Institute of Taxation (CIOT). Essential for tax expert witnesses addressing complex tax technical questions in FTT and Upper Tribunal proceedings.
          </p>

          <h3>ATT (Association of Taxation Technicians)</h3>
          <p>
            Foundation tax qualification, appropriate for expert witnesses on less complex tax matters where the technical questions do not require the depth of a CTA-level specialist.
          </p>

          <h3>ACA / FCA (ICAEW) with Tax Specialisation</h3>
          <p>
            Chartered accountants with specialist tax practice, combining financial accounting expertise with tax technical knowledge. Particularly valuable where disputes involve both valuation and tax treatment questions.
          </p>

          <h3>FTT and Upper Tribunal Testimony History</h3>
          <p>
            Prior acceptance as expert in FTT or Upper Tribunal tax proceedings, critical credibility signal. Tribunals and judges place significant weight on an expert&apos;s track record of accepted evidence.
          </p>

          <h3>VAT Specialist Credentials</h3>
          <p>
            For MTIC and VAT-specific expert witness work, additional VAT specialisation and knowledge of Mobilx v HMRC principles and current MTIC enforcement practice is essential.
          </p>

          <h3>Transfer Pricing Qualifications</h3>
          <p>
            OECD BEPS familiarity and transfer pricing advisory practice background. Transfer pricing expert witnesses should demonstrate experience with OECD method selection and comparables analysis.
          </p>

          <h2>Experience Requirements</h2>
          <ul>
            <li>Active tax practice (not full-time expert witnessing), tax law changes constantly and currency is essential</li>
            <li>Specific technical expertise in the tax area in dispute</li>
            <li>FTT or tribunal testimony history</li>
            <li>CPR Part 35 expert report experience</li>
            <li>Professional indemnity insurance</li>
          </ul>

          <h2>CPR Part 35 Compliance</h2>
          <p>
            Tax expert witnesses in FTT proceedings must comply with CPR Part 35, including the requirement for a statement of truth and a summary of material instructions. The expert&apos;s duty is to the tribunal, not to the instructing party, this is particularly important in tax cases where the technical analysis must be genuinely independent.
          </p>
          <p>
            The Ikarian Reefer [1993] principles of independence and objectivity apply. The expert must not act as advocate for the instructing party and must address all material matters, including those unfavourable to the instructing party&apos;s case.{" "}
            <Link href="/how-to-instruct">How to instruct a tax expert witness →</Link>
          </p>

          <h2>Red Flags</h2>
          <ul>
            <li>Expert who is not currently in active tax practice (tax law changes constantly, currency is essential)</li>
            <li>No FTT testimony history</li>
            <li>Cannot explain the specific tax law area in dispute clearly to non-specialists</li>
            <li>No knowledge of current HMRC practice and recent tribunal decisions</li>
            <li>Prior adverse judicial comments on their analysis</li>
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
