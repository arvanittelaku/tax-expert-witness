import Link from "next/link";
import CookieSettingsLink from "@/components/cookies/CookieSettingsLink";
import {
  serviceNavLinks,
  taxDisputeTypeNavLinks,
  tribunalNavLinks,
  hmrcInvestigationNavLinks,
  resourcesNavLinks,
} from "@/lib/data/nav";
import { SITE_EMAIL } from "@/lib/site";

const disputeLinks = [
  ...taxDisputeTypeNavLinks.slice(0, 5),
  { label: "View all 10", href: "/tax-dispute-types" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="page-container py-12 md:py-16 pb-[max(3rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 min-w-0">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Tax Disputes</h3>
            <ul className="space-y-2">
              {disputeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/glossary" className="text-sm text-white/70 hover:text-white transition-colors">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/tax-disputes-explained" className="text-sm text-white/70 hover:text-white transition-colors">
                  Tax Disputes Explained
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Tribunals & HMRC</h3>
            <ul className="space-y-2">
              {tribunalNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              {hmrcInvestigationNavLinks.slice(0, 2).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/hmrc-investigation-types" className="text-sm text-white/70 hover:text-white transition-colors">
                  All Investigation Types
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm text-white/60 leading-relaxed max-w-3xl">
            TaxExpertWitness.co.uk connects solicitors with tax expert witnesses. We are not a law firm and do not provide legal advice.
          </p>
          <p className="mt-3 text-sm text-white/60">
            <a href={`mailto:${SITE_EMAIL}`} className="hover:text-white transition-colors">
              {SITE_EMAIL}
            </a>
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <CookieSettingsLink />
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/what-is-a-tax-expert-witness" className="hover:text-white transition-colors">What Is a Tax Expert Witness?</Link>
          </div>
          <p className="mt-4 text-sm text-white/50">
            © 2025 TaxExpertWitness. England and Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
