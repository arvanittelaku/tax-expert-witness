import { appendRow } from "@/lib/google-sheets";

export const BRAND_NAME = "TaxExpertWitness";

/** Row 1 headers for GOOGLE_SHEET_TAB_NAME (e.g. Sheet23) — columns A through N */
export const SHEET_COLUMN_HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone",
  "Law Firm / Organisation",
  "You Are",
  "Tax Dispute Type",
  "Forum",
  "Forensic Accountant Needed",
  "Disputed Tax Value",
  "FTT Hearing Date",
  "Urgency",
  "Description",
  "Brand",
] as const;

export type LeadFormPayload = {
  fullName: string;
  email: string;
  phone?: string;
  organisation?: string;
  role?: string;
  disputeType?: string;
  forum?: string;
  forensicAccountant?: string;
  taxValue?: string;
  hearingDate?: string;
  urgency?: string;
  description?: string;
};

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export async function appendLeadToSheet(payload: LeadFormPayload): Promise<void> {
  const timestamp = new Date().toISOString();

  await appendRow([
    timestamp,
    sanitize(payload.fullName),
    payload.email.toLowerCase().trim(),
    payload.phone?.trim() ?? "",
    sanitize(payload.organisation ?? ""),
    payload.role ?? "",
    payload.disputeType ?? "",
    payload.forum ?? "",
    payload.forensicAccountant ?? "",
    payload.taxValue ?? "",
    payload.hearingDate ?? "",
    payload.urgency ?? "",
    sanitize(payload.description ?? ""),
    BRAND_NAME,
  ]);
}

export async function notifyLeadWebhook(
  payload: Pick<LeadFormPayload, "fullName" | "email" | "phone">
): Promise<void> {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) return;

  const body = {
    "Full Name": payload.fullName.trim(),
    Email: payload.email.trim(),
    "Phone Number": payload.phone?.trim() ?? "",
    "Brand name": BRAND_NAME,
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Webhook request failed");
  }
}

export async function processLeadSubmission(payload: LeadFormPayload): Promise<void> {
  await appendLeadToSheet(payload);

  try {
    await notifyLeadWebhook(payload);
  } catch (error) {
    console.error("Lead webhook failed (sheet write succeeded):", error);
  }
}
