"use client";

import { useState, FormEvent } from "react";

const ROLES = [
  "Tax Litigation Solicitor",
  "Tax Barrister",
  "Forensic Accountant",
  "Taxpayer's Adviser",
  "In-House Tax Counsel",
  "Other",
];

const DISPUTE_TYPES = [
  "VAT / MTIC",
  "Transfer Pricing",
  "Employment Related Securities",
  "SDLT",
  "IHT / BPR",
  "CGT / BADR",
  "Corporate Tax Avoidance",
  "Tax Professional Negligence",
  "HMRC Business Reconstruction",
  "COP8 / COP9",
  "Other",
];

const FORUMS = [
  "FTT (First-tier Tribunal)",
  "Upper Tribunal",
  "Court of Appeal / Supreme Court",
  "HMRC Investigation (pre-tribunal)",
  "ADR",
  "Civil Court",
  "Criminal Proceedings",
];

const FORENSIC_OPTIONS = ["Yes", "No", "Unsure"];

const TAX_VALUES = [
  "Under £100k",
  "£100k–£500k",
  "£500k–£5M",
  "£5M–£25M",
  "Over £25M",
  "Unknown",
];

const URGENCY_OPTIONS = [
  "Standard (within 1 business day)",
  "Urgent (within 24 hours)",
  "FTT hearing within 3 months",
  "FTT hearing listed, immediate",
];

const PHONE_PREFIXES = [
  { code: "+44", label: "UK +44" },
  { code: "+353", label: "IE +353" },
  { code: "+1", label: "US +1" },
  { code: "+61", label: "AU +61" },
  { code: "+49", label: "DE +49" },
  { code: "+33", label: "FR +33" },
  { code: "+971", label: "AE +971" },
  { code: "+65", label: "SG +65" },
  { code: "+91", label: "IN +91" },
  { code: "+86", label: "CN +86" },
];

function buildPhone(prefix: string, national: string): string {
  const digits = national.replace(/\D/g, "");
  if (!digits) return "";
  return `${prefix}${digits}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [phonePrefix, setPhonePrefix] = useState("+44");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: buildPhone(phonePrefix, String(data.get("phone_national") ?? "")),
      organisation: String(data.get("organisation") ?? "").trim(),
      role: String(data.get("role") ?? ""),
      disputeType: String(data.get("dispute_type") ?? ""),
      forum: String(data.get("forum") ?? ""),
      forensicAccountant: String(data.get("forensic_accountant") ?? ""),
      taxValue: String(data.get("tax_value") ?? ""),
      hearingDate: String(data.get("hearing_date") ?? ""),
      urgency: String(data.get("urgency") ?? ""),
      description: String(data.get("description") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "min-h-[44px] rounded-[4px] border border-border px-4 py-2 text-body text-base focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent";
  const inputClass = `${fieldClass} w-full`;
  const labelClass = "block text-sm font-medium text-heading mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 min-w-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="min-w-0">
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input type="text" id="name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label htmlFor="organisation" className={labelClass}>Law Firm / Organisation *</label>
          <input type="text" id="organisation" name="organisation" required autoComplete="organization" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input type="email" id="email" name="email" required autoComplete="email" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label htmlFor="phone_national" className={labelClass}>Phone</label>
          <div className="flex gap-2 min-w-0 w-full">
            <select
              id="phone_prefix"
              name="phone_prefix"
              value={phonePrefix}
              onChange={(e) => setPhonePrefix(e.target.value)}
              aria-label="Phone country code"
              className={`${fieldClass} w-[6.75rem] shrink-0 px-2`}
            >
              {PHONE_PREFIXES.map((p) => (
                <option key={p.code} value={p.code}>{p.label}</option>
              ))}
            </select>
            <input
              type="tel"
              id="phone_national"
              name="phone_national"
              autoComplete="tel-national"
              placeholder="National number"
              className={`${fieldClass} min-w-0 flex-1`}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="min-w-0">
          <label htmlFor="role" className={labelClass}>You are:</label>
          <select id="role" name="role" className={`${inputClass} max-w-full`}>
            {ROLES.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="dispute_type" className={labelClass}>Tax Dispute Type:</label>
          <select id="dispute_type" name="dispute_type" className={inputClass}>
            {DISPUTE_TYPES.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="forum" className={labelClass}>Forum:</label>
          <select id="forum" name="forum" className={inputClass}>
            {FORUMS.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="forensic_accountant" className={labelClass}>Do you also need a forensic accountant?</label>
          <select id="forensic_accountant" name="forensic_accountant" className={inputClass}>
            {FORENSIC_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="tax_value" className={labelClass}>Approximate disputed tax value:</label>
          <select id="tax_value" name="tax_value" className={inputClass}>
            {TAX_VALUES.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="hearing_date" className={labelClass}>FTT hearing date (if listed):</label>
          <input type="date" id="hearing_date" name="hearing_date" className={inputClass} />
        </div>
      </div>

      <div className="min-w-0">
        <label htmlFor="urgency" className={labelClass}>Urgency:</label>
        <select id="urgency" name="urgency" className={inputClass}>
          {URGENCY_OPTIONS.map((u) => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
      </div>

      <div className="min-w-0">
        <label htmlFor="description" className={labelClass}>Brief description *</label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
          placeholder="Please describe the tax dispute, HMRC position, and the technical tax questions requiring expert evidence."
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm" role="alert">
          There was a problem submitting your enquiry. Please email us directly at info@taxexpertwitness.co.uk or try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[44px] w-full max-w-full sm:w-auto rounded-[4px] bg-accent px-6 sm:px-8 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Contact Us"}
      </button>
    </form>
  );
}
