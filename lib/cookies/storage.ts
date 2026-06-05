import {
  ACCEPT_ALL_PREFERENCES,
  CONSENT_STORAGE_KEY,
  CONSENT_TTL_MS,
  CONSENT_VERSION,
  DEFAULT_PREFERENCES,
  type CookieConsentPreferences,
  type StoredConsent,
} from "./types";

/** Build a consent record with expiry */
export function buildStoredConsent(
  preferences: CookieConsentPreferences
): StoredConsent {
  const now = new Date();
  return {
    version: CONSENT_VERSION,
    preferences,
    consentedAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + CONSENT_TTL_MS).toISOString(),
  };
}

/** Read consent from localStorage; returns null if missing or expired */
export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;

    if (new Date(parsed.expiresAt).getTime() < Date.now()) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

/** Persist consent to localStorage */
export function writeStoredConsent(preferences: CookieConsentPreferences): StoredConsent {
  const record = buildStoredConsent(preferences);
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  return record;
}

/** Clear stored consent (for testing or full reset) */
export function clearStoredConsent(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  }
}

export function preferencesFromAction(
  action: "accept_all" | "reject_non_essential",
  custom?: CookieConsentPreferences
): CookieConsentPreferences {
  if (action === "accept_all") return ACCEPT_ALL_PREFERENCES;
  if (action === "reject_non_essential") return DEFAULT_PREFERENCES;
  return custom ?? DEFAULT_PREFERENCES;
}
