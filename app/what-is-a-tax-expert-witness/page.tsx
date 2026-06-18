import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { FAQ } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";

const comparisonFaqs: FAQ[] = [
  {
    question: "Does TaxExpertWitness.co.uk cover non-UK tax disputes?",
    answer:
      "No. This service is limited to United Kingdom tax disputes only, including HMRC investigations and assessments, First-tier Tribunal and Upper Tribunal appeals, and civil proceedings governed by UK tax law. We do not provide expert witness referrals for US, EU, or other non-UK tax jurisdictions.",
  },
  {
    question: "What is the difference between a tax expert witness and a forensic accountant?",
    answer:
      "A forensic accountant focuses on financial numbers, reconstruction, and quantification. A tax expert witness focuses on whether the correct tax analysis was applied, whether HMRC methodology is sound, and what the correct tax treatment should be. Complex HMRC investigations often require both.",
  },
  {
    question: "When should a solicitor instruct a tax expert witness rather than a forensic accountant?",
    answer:
      "Instruct a tax expert witness where the dispute turns on technical tax law, HMRC methodology, tribunal tax analysis, COP8/COP9 technical issues, MTIC knowledge, transfer pricing, or professional negligence standard of care. Instruct a forensic accountant where loss quantification, business valuation, or financial reconstruction is the primary question.",
  },
];

export const metadata = createMetadata({
  title: "What Is a Tax Expert Witness? | UK Role & Tax Tribunal Standards",
  description:
    "A tax expert witness provides independent technical tax opinions for UK courts and tribunals, challenging HMRC assessments, advising on correct tax treatment, and giving evidence at FTT and Upper Tribunal proceedings.",
  path: "/what-is-a-tax-expert-witness",
});

export default function WhatIsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(comparisonFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "What Is a Tax Expert Witness?", path: "/what-is-a-tax-expert-witness" },
          ]),
        ]}
      />
      <PageHero
        title="What Is a Tax Expert Witness?"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What Is a Tax Expert Witness?" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container prose-content max-w-3xl min-w-0">
          <h2>Definition</h2>
          <p>
            A tax expert witness is a qualified tax specialist, typically a Chartered Tax Adviser (CTA) or senior tax practitioner, retained to provide an independent expert opinion on technical tax questions in legal proceedings within the United Kingdom. Unlike a forensic accountant who focuses on financial numbers, a tax expert witness focuses on the correct application of UK tax law and HMRC practice to the facts of the case.
          </p>

          <h2>United Kingdom Jurisdiction Only</h2>
          <p>
            Tax expert witnesses instructed through this service address disputes before HMRC, the First-tier Tribunal (Tax Chamber), Upper Tribunal, and UK civil courts. Their expertise applies to UK domestic tax legislation, HMRC guidance, and tribunal procedure under CPR Part 35. This does not extend to foreign tax authorities, US federal or state tax courts, or EU tax tribunals outside the United Kingdom.
          </p>

          <h2>Tax Expert Witness vs Forensic Accountant</h2>
          <table>
            <thead>
              <tr>
                <th>Expert</th>
                <th>Primary Question</th>
                <th>Typical Instructions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Forensic accountant</td>
                <td>What are the financial numbers?</td>
                <td>Loss quantification, business valuation, fraud investigation</td>
              </tr>
              <tr>
                <td>Tax expert witness</td>
                <td>Is the tax analysis correct?</td>
                <td>FTT appeals, HMRC methodology challenge, COP8/COP9</td>
              </tr>
              <tr>
                <td>Both together</td>
                <td>Financial numbers + correct tax treatment</td>
                <td>Complex HMRC investigations, POCA with tax element, professional negligence</td>
              </tr>
            </tbody>
          </table>

          <h2>What Tax Expert Witnesses Do</h2>
          <ul>
            <li>Provide independent technical opinion on whether HMRC&apos;s tax analysis is correct</li>
            <li>Challenge HMRC&apos;s reconstruction methodology, including identifying cases where HMRC relied on flawed and untested data, ignored actual circumstances, or did not apply HMRC&apos;s own approved methods</li>
            <li>Advise on the correct tax treatment of a transaction where the law is disputed</li>
            <li>Assess whether a tax adviser&apos;s advice met the required standard of care (professional negligence)</li>
            <li>Give expert evidence before the FTT, Upper Tribunal, and in civil court proceedings</li>
            <li>Produce CPR Part 35 compliant expert reports for tax-related civil claims</li>
          </ul>

          <h2>When Is a Tax Expert Witness Needed?</h2>
          <ul>
            <li>HMRC has issued an assessment based on a disputed technical tax position</li>
            <li>HMRC&apos;s financial reconstruction methodology is challenged</li>
            <li>A COP8 or COP9 investigation involves complex technical tax issues</li>
            <li>VAT input tax has been denied on MTIC fraud grounds and the knowledge test requires expert analysis</li>
            <li>Transfer pricing adjustments are disputed</li>
            <li>An IHT or CGT valuation is in dispute</li>
            <li>Employment-related securities treatment is challenged</li>
            <li>A tax adviser&apos;s advice is alleged to have been negligent</li>
            <li>Tax aspects of a fraud case require specialist evidence</li>
          </ul>

          <h2>The FTT & CPR Part 35</h2>
          <p>
            Expert evidence in FTT proceedings is governed by CPR Part 35, the expert must include a summary of their material instructions and the report must meet the independence and objectivity requirements of CPR Part 35.10.{" "}
            <Link href="/qualifications">Learn about qualifications and CPR Part 35 compliance →</Link>
          </p>

          <h2>Key Difference: HMRC Methodology Challenge</h2>
          <p>
            One of the most important functions of a tax expert witness is challenging HMRC&apos;s own methodology. In one case, HMRC relied on a forensic accountant&apos;s reconstruction showing undeclared takings of £600,000. Independent review indicated the HMRC report relied on flawed and untested data, ignored actual circumstances, and did not accord with HMRC&apos;s own approved reconstruction methods, the correct figure was £100,000.{" "}
            <Link href="/guides/hmrc-methodology-challenge-guide">Read our methodology challenge guide →</Link>
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
