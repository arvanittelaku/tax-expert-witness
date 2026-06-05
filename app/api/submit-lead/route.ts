import { NextRequest, NextResponse } from "next/server";
import { processLeadSubmission, type LeadFormPayload } from "@/lib/submitLead";

export async function POST(request: NextRequest) {
  let body: LeadFormPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.fullName?.trim()) {
    return NextResponse.json({ error: "fullName is required" }, { status: 400 });
  }

  if (!body.email?.trim()) {
    return NextResponse.json({ error: "email is required" }, { status: 400 });
  }

  if (
    !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    !process.env.GOOGLE_PRIVATE_KEY ||
    !process.env.GOOGLE_SHEET_ID
  ) {
    console.error("Google Sheets credentials not configured");
    return NextResponse.json(
      { error: "Form submission is not configured" },
      { status: 500 }
    );
  }

  try {
    await processLeadSubmission(body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
