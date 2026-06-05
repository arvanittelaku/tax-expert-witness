import type { CookieConsentPreferences } from "./types";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Push Google Consent Mode v2 defaults (all denied except security).
 * Call once before any Google tags load.
 */
export function initConsentModeDefaults(): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args as unknown as Record<string, unknown>);
    };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500,
  });
}

/** Update consent mode immediately when user changes preferences */
export function updateConsentMode(preferences: CookieConsentPreferences): void {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
    functionality_storage: preferences.preferences ? "granted" : "denied",
    personalization_storage: preferences.preferences ? "granted" : "denied",
  });
}
