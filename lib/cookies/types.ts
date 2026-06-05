/** Cookie consent category identifiers */
export type CookieCategory = "necessary" | "analytics" | "marketing" | "preferences";

/** User's granular consent choices (necessary is always true) */
export type CookieConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

/** Persisted consent record with version and expiry metadata */
export type StoredConsent = {
  version: number;
  preferences: CookieConsentPreferences;
  /** ISO timestamp when consent was given or updated */
  consentedAt: string;
  /** ISO timestamp when consent expires */
  expiresAt: string;
};

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "tew_cookie_consent";
/** Consent valid for 12 months per GDPR best practice */
export const CONSENT_TTL_MS = 365 * 24 * 60 * 60 * 1000;

export const DEFAULT_PREFERENCES: CookieConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export const ACCEPT_ALL_PREFERENCES: CookieConsentPreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
};

export type ConsentAction = "accept_all" | "reject_non_essential" | "custom";
