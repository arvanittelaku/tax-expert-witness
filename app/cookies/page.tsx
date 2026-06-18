import Link from "next/link";
import PageHero from "@/components/PageHero";
import CookieSettingsLink from "@/components/cookies/CookieSettingsLink";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = createMetadata({
  title: "Cookie Policy | TaxExpertWitness.co.uk",
  description:
    "Cookie policy for TaxExpertWitness.co.uk. Learn how we use necessary, analytics, marketing, and preference cookies.",
  path: "/cookies",
  noindex: true,
  nofollow: false,
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container prose-content max-w-3xl min-w-0">
          <p><strong>Last updated:</strong> June 2025</p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help
            the site function correctly, remember your preferences, and (with your consent) analyse
            how the site is used.
          </p>

          <h2>How We Use Cookies</h2>
          <p>TaxExpertWitness.co.uk uses four categories of cookies:</p>

          <h3>1. Necessary Cookies (Always Active)</h3>
          <p>
            These cookies are essential for the website to function. They include consent storage
            so we remember your cookie choices. They cannot be disabled.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tew_cookie_consent (localStorage)</td>
                <td>Stores your cookie consent preferences</td>
                <td>12 months</td>
              </tr>
            </tbody>
          </table>

          <h3>2. Analytics Cookies</h3>
          <p>
            With your consent, we use analytics cookies to understand how visitors use our site.
            This helps us improve content and navigation. We may use Google Analytics and Google Tag
            Manager. IP addresses may be anonymised.
          </p>

          <h3>3. Marketing Cookies</h3>
          <p>
            With your consent, marketing cookies help measure the effectiveness of our outreach.
            We may use Meta Pixel and LinkedIn Insight Tag. These cookies may track your visit
            across websites for advertising measurement.
          </p>

          <h3>4. Preferences Cookies</h3>
          <p>
            With your consent, preference cookies remember your settings and help us improve user
            experience. We may use Hotjar for session analysis and feedback tools.
          </p>

          <h2>Managing Your Preferences</h2>
          <p>
            You can change your cookie preferences at any time using the{" "}
            <CookieSettingsLink /> button in the footer, or by clearing your browser cookies and
            revisiting the site.
          </p>

          <h2>Google Consent Mode</h2>
          <p>
            We implement Google Consent Mode v2. Non-essential Google tags remain blocked until you
            grant analytics or marketing consent. When you update preferences, consent signals are
            updated immediately without requiring a page reload.
          </p>

          <h2>Your Rights (GDPR / UK GDPR)</h2>
          <p>
            Under UK data protection law, you have the right to withdraw consent for non-essential
            cookies at any time. Withdrawal does not affect the lawfulness of processing based on
            consent before withdrawal. For more information, see our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h2>CCPA Notice (California Residents)</h2>
          <p>
            We do not sell personal information. California residents may request information about
            data collection practices by contacting{" "}
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            Cookie enquiries:{" "}
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
          </p>
        </div>
      </section>
    </>
  );
}
