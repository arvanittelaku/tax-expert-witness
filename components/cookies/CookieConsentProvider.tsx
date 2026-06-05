"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  preferencesFromAction,
  readStoredConsent,
  writeStoredConsent,
} from "@/lib/cookies/storage";
import { initConsentModeDefaults, updateConsentMode } from "@/lib/cookies/consentMode";
import type { CookieConsentPreferences } from "@/lib/cookies/types";
import CookieBanner from "./CookieBanner";
import CookiePreferencesModal from "./CookiePreferencesModal";
import ConsentAwareScripts from "./ConsentAwareScripts";

type CookieConsentContextValue = {
  preferences: CookieConsentPreferences | null;
  hasConsented: boolean;
  showBanner: boolean;
  showPreferences: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
  saveCustomPreferences: (prefs: CookieConsentPreferences) => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

export default function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsentPreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const applyPreferences = useCallback((prefs: CookieConsentPreferences) => {
    writeStoredConsent(prefs);
    setPreferences(prefs);
    setShowBanner(false);
    updateConsentMode(prefs);
  }, []);

  useEffect(() => {
    setMounted(true);
    initConsentModeDefaults();

    const stored = readStoredConsent();
    if (stored) {
      setPreferences(stored.preferences);
      updateConsentMode(stored.preferences);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = useCallback(() => {
    applyPreferences(preferencesFromAction("accept_all"));
    setShowPreferences(false);
  }, [applyPreferences]);

  const rejectNonEssential = useCallback(() => {
    applyPreferences(preferencesFromAction("reject_non_essential"));
    setShowPreferences(false);
  }, [applyPreferences]);

  const openPreferences = useCallback(() => {
    setShowPreferences(true);
    setShowBanner(false);
  }, []);

  const closePreferences = useCallback(() => {
    setShowPreferences(false);
    if (!preferences) setShowBanner(true);
  }, [preferences]);

  const saveCustomPreferences = useCallback(
    (prefs: CookieConsentPreferences) => {
      applyPreferences({ ...prefs, necessary: true });
      setShowPreferences(false);
    },
    [applyPreferences]
  );

  const value = useMemo(
    () => ({
      preferences,
      hasConsented: preferences !== null,
      showBanner: mounted && showBanner && !showPreferences,
      showPreferences: mounted && showPreferences,
      acceptAll,
      rejectNonEssential,
      openPreferences,
      closePreferences,
      saveCustomPreferences,
    }),
    [
      preferences,
      mounted,
      showBanner,
      showPreferences,
      acceptAll,
      rejectNonEssential,
      openPreferences,
      closePreferences,
      saveCustomPreferences,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {mounted && <ConsentAwareScripts preferences={preferences} />}
      {mounted && value.showBanner && (
        <CookieBanner
          onAcceptAll={acceptAll}
          onRejectNonEssential={rejectNonEssential}
          onCustomize={openPreferences}
        />
      )}
      {mounted && value.showPreferences && (
        <CookiePreferencesModal
          initialPreferences={preferences ?? preferencesFromAction("reject_non_essential")}
          onSave={saveCustomPreferences}
          onAcceptAll={acceptAll}
          onRejectNonEssential={rejectNonEssential}
          onClose={closePreferences}
        />
      )}
    </CookieConsentContext.Provider>
  );
}
