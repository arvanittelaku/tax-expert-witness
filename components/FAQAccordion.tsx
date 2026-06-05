"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/schema";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-[8px] border border-border bg-white shadow-[var(--shadow-card)]"
          >
            <button
              type="button"
              className="flex w-full min-h-[44px] items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-heading text-sm sm:text-base break-words text-left">
                {faq.question}
              </span>
              <span
                className="shrink-0 text-accent text-xl font-light"
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-body leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
