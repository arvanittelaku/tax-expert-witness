import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentProvider from "@/components/cookies/CookieConsentProvider";
import ConsentModeInit from "@/components/cookies/ConsentModeInit";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tax Expert Witness UK | HMRC Disputes, Tribunals & Tax Litigation",
    template: "%s | TaxExpertWitness.co.uk",
  },
  description:
    "Find a qualified tax expert witness in the UK. Independent tax technical experts for FTT, Upper Tribunal, HMRC investigations, VAT disputes, transfer pricing, IHT, and professional negligence.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ConsentModeInit />
        <CookieConsentProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
