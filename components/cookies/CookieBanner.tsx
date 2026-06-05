"use client";

import Link from "next/link";

type Props = {
  onAcceptAll: () => void;
  onRejectNonEssential: () => void;
  onCustomize: () => void;
};

export default function CookieBanner({
  onAcceptAll,
  onRejectNonEssential,
  onCustomize,
}: Props) {
  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6 pb-[max(1rem,env(safe-area-inset-bottom))] cookie-banner-enter"
    >
      <div className="mx-auto max-w-4xl rounded-[8px] border border-border bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden">
        <div className="bg-primary px-5 py-3 sm:px-6">
          <h2 id="cookie-banner-title" className="text-base sm:text-lg font-bold text-white">
            Cookie Preferences
          </h2>
        </div>
        <div className="px-5 py-4 sm:px-6 sm:py-5">
          <p id="cookie-banner-desc" className="text-sm sm:text-base text-body leading-relaxed">
            We use cookies to ensure the site works correctly and, with your consent, to analyse
            traffic and improve our service. You can accept all cookies, reject non-essential
            cookies, or customise your preferences.{" "}
            <Link href="/cookies" className="text-accent font-semibold underline hover:text-primary">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-accent font-semibold underline hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={onAcceptAll}
              className="min-h-[44px] flex-1 rounded-[4px] bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={onRejectNonEssential}
              className="min-h-[44px] flex-1 rounded-[4px] border border-border bg-white px-5 py-2.5 text-sm font-semibold text-heading hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Reject Non-Essential
            </button>
            <button
              type="button"
              onClick={onCustomize}
              className="min-h-[44px] flex-1 rounded-[4px] border border-primary bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Customize Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
