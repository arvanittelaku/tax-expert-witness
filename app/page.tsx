import Link from "next/link";
import AlertBanner from "@/components/AlertBanner";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import JsonLd from "@/components/JsonLd";
import { homepageSchema } from "@/lib/schema";
import { services } from "@/lib/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tax Expert Witness UK | HMRC Disputes, Tribunals & Tax Litigation",
  description:
    "Find a qualified tax expert witness in the UK. Independent tax technical experts for FTT, Upper Tribunal, HMRC investigations, VAT disputes, transfer pricing, IHT, and professional negligence.",
  path: "/",
});

const stats = [
  { fact: "FTT cases listed for hearing 2025–26", figure: "Thousands", source: "HMCTS Statistics" },
  { fact: "Time from appeal to FTT hearing", figure: "Typically 2–3 years", source: "Slaughter and May, 2024" },
  { fact: "HMRC transfer pricing yield increase", figure: "Significant rise 2025", source: "Jon Preshaw Tax, March 2026" },
  { fact: "FTT jurisdiction", figure: "Income tax, CT, CGT, IHT, VAT, SDLT, NIC", source: "HMCTS" },
  { fact: "Upper Tribunal role", figure: "Appeal on points of law from FTT", source: "HMCTS" },
  { fact: "HMRC v Harte [2026]", figure: "HMRC's extended time limit use criticised", source: "UKUT 2026" },
  { fact: "Expert evidence framework", figure: "CPR Part 35 / FTT Rules", source: "Civil Procedure Rules" },
];

const audiences = [
  {
    title: "Tax Litigation Counsel",
    description:
      "You need independent technical tax opinion to support or challenge HMRC's position before the FTT or Upper Tribunal.",
    href: "/what-is-a-tax-expert-witness",
  },
  {
    title: "Forensic Accountants",
    description:
      "Your financial evidence is complete, but the case also raises technical tax analysis questions outside forensic accounting expertise.",
    href: "/services",
  },
  {
    title: "Taxpayers' Advisers",
    description:
      "Your client faces a COP8 or COP9 investigation and needs independent expert review of HMRC's methodology.",
    href: "/hmrc-investigation-types",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <AlertBanner />
      <PageHero
        title="Tax Expert Witness Services for UK Solicitors & Tax Litigation Counsel"
        subtitle="When a tax dispute reaches the First-tier Tribunal, Upper Tribunal, or Crown Court, the technical tax analysis must be independently verified by a qualified expert. TaxExpertWitness.co.uk connects UK solicitors and tax litigation counsel with qualified tax expert witnesses, specialists in HMRC investigation methodology, tribunal procedure, and independent tax technical opinion."
      />
      <section className="py-8 bg-section-alt border-b border-border">
        <div className="page-container text-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-accent px-8 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-container min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-8 break-words">
            What Our Tax Expert Witnesses Cover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <HubCard
                key={service.id}
                title={service.shortTitle}
                description={service.description.slice(0, 120) + "…"}
                href={`/services/${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-section-alt">
        <div className="page-container min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-8 break-words">
            UK Tax Disputes: Key 2025–2026 Facts
          </h2>
          <div className="table-scroll rounded-[8px] border border-border bg-white shadow-[var(--shadow-card)]">
            <table className="w-full text-sm min-w-[36rem]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold">Fact</th>
                  <th className="px-4 py-3 text-left font-semibold">Figure</th>
                  <th className="px-4 py-3 text-left font-semibold">Source</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-section-alt"}>
                    <td className="px-4 py-3 text-body border-t border-border">{row.fact}</td>
                    <td className="px-4 py-3 text-body border-t border-border font-medium">{row.figure}</td>
                    <td className="px-4 py-3 text-body border-t border-border">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-body/70">
            Sources: HMCTS Annual Statistics; Jon Preshaw Tax Disputes Newsletter March 2026; HMRC v Harte [2026] UKUT 00112.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-container min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-8 break-words">
            Who Needs a Tax Expert Witness?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)] hover:border-accent transition-colors"
              >
                <h3 className="text-lg font-bold text-heading">{card.title}</h3>
                <p className="mt-3 text-body leading-relaxed">{card.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent">Learn more →</span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-body leading-relaxed max-w-3xl">
            A tax expert witness is fundamentally different from a forensic accountant. While forensic accountants focus on financial numbers, tax expert witnesses provide independent technical opinions on whether the correct tax analysis was applied.{" "}
            <Link href="/what-is-a-tax-expert-witness" className="text-accent font-semibold underline hover:text-primary">
              Learn what a tax expert witness does →
            </Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
