import Link from "next/link";

export default function AlertBanner() {
  return (
    <div className="bg-accent/10 border-b border-accent/30">
      <div className="page-container py-3">
        <p className="text-sm md:text-base text-body leading-relaxed break-words">
          <span className="font-semibold text-accent mr-1">⚠ 2025–2026 HMRC Enforcement:</span>
          Transfer pricing yield up sharply. COP9 methodology under judicial scrutiny (HMRC v Harte [2026]).
          MTIC VAT assessments challenged. Tax expert evidence is increasingly decisive in tribunal outcomes.{" "}
          <Link
            href="/guides/hmrc-enforcement-update-2025"
            className="font-semibold text-accent underline hover:text-primary transition-colors"
          >
            See enforcement update →
          </Link>
        </p>
      </div>
    </div>
  );
}
