"use client";

import Link from "next/link";
import { useState } from "react";
import NavDropdown from "./NavDropdown";
import {
  serviceNavLinks,
  taxDisputeTypeNavLinks,
  tribunalNavLinks,
  hmrcInvestigationNavLinks,
  resourcesNavLinks,
} from "@/lib/data/nav";

const DROPDOWN_IDS = {
  services: "services",
  disputeTypes: "dispute-types",
  tribunals: "tribunals",
  hmrc: "hmrc",
  resources: "resources",
} as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeMenu = () => setMenuOpen(false);

  const dropdownProps = (id: string) => ({
    isOpen: openDropdown === id,
    onOpen: () => setOpenDropdown(id),
    onClose: () => setOpenDropdown((current) => (current === id ? null : current)),
  });

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-[72px] items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 text-base sm:text-lg font-bold text-primary hover:text-primary/80 transition-colors max-w-[55vw] sm:max-w-none truncate sm:overflow-visible sm:whitespace-normal"
            onMouseEnter={() => setOpenDropdown(null)}
          >
            TaxExpertWitness<span className="text-accent">.co.uk</span>
          </Link>

          <nav
            className="hidden xl:flex items-center gap-0.5 flex-1 justify-center"
            aria-label="Main navigation"
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="/"
              className="px-2 py-2 text-sm font-medium text-body hover:text-primary transition-colors whitespace-nowrap min-h-[44px] flex items-center"
              onMouseEnter={() => setOpenDropdown(null)}
            >
              Home
            </Link>
            <NavDropdown
              label="Services"
              href="/services"
              links={serviceNavLinks}
              viewAll={{ label: "All Services", href: "/services" }}
              {...dropdownProps(DROPDOWN_IDS.services)}
            />
            <Link
              href="/tax-disputes-explained"
              className="px-2 py-2 text-sm font-medium text-body hover:text-primary transition-colors whitespace-nowrap min-h-[44px] flex items-center"
              onMouseEnter={() => setOpenDropdown(null)}
            >
              Tax Disputes
            </Link>
            <NavDropdown
              label="Tax Dispute Types"
              href="/tax-dispute-types"
              links={taxDisputeTypeNavLinks}
              viewAll={{ label: "All Dispute Types", href: "/tax-dispute-types" }}
              {...dropdownProps(DROPDOWN_IDS.disputeTypes)}
            />
            <NavDropdown
              label="Tribunals"
              href="/tribunals-courts"
              links={tribunalNavLinks}
              viewAll={{ label: "All Tribunals", href: "/tribunals-courts" }}
              {...dropdownProps(DROPDOWN_IDS.tribunals)}
            />
            <NavDropdown
              label="HMRC Investigations"
              href="/hmrc-investigation-types"
              links={hmrcInvestigationNavLinks}
              viewAll={{ label: "All Investigation Types", href: "/hmrc-investigation-types" }}
              {...dropdownProps(DROPDOWN_IDS.hmrc)}
            />
            <NavDropdown
              label="Resources"
              links={resourcesNavLinks}
              {...dropdownProps(DROPDOWN_IDS.resources)}
            />
          </nav>

          <Link
            href="/contact"
            className="hidden sm:inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent/90 transition-colors shrink-0"
            onMouseEnter={() => setOpenDropdown(null)}
          >
            Contact Us
          </Link>

          <button
            type="button"
            className="xl:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-[4px] border border-border text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="xl:hidden border-t border-border bg-white max-h-[calc(100vh-64px)] overflow-y-auto"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-4 space-y-6">
            <Link
              href="/"
              className="block min-h-[44px] flex items-center px-2 text-body font-medium hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <NavDropdown
              label="Services"
              links={serviceNavLinks}
              viewAll={{ label: "All Services", href: "/services" }}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <Link
              href="/tax-disputes-explained"
              className="block min-h-[44px] flex items-center px-2 text-body font-medium hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Tax Disputes Explained
            </Link>
            <NavDropdown
              label="Tax Dispute Types"
              links={taxDisputeTypeNavLinks}
              viewAll={{ label: "All Dispute Types", href: "/tax-dispute-types" }}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <NavDropdown
              label="Tribunals"
              links={tribunalNavLinks}
              viewAll={{ label: "All Tribunals", href: "/tribunals-courts" }}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <NavDropdown
              label="HMRC Investigations"
              links={hmrcInvestigationNavLinks}
              viewAll={{ label: "All Investigation Types", href: "/hmrc-investigation-types" }}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <NavDropdown
              label="Resources"
              links={resourcesNavLinks}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <Link
              href="/contact"
              className="flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
