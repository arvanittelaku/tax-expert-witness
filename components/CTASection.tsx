import Link from "next/link";

export default function CTASection({
  title = "Instruct a Tax Expert Witness Today",
  description = "Submit your case details and we will match you with a qualified UK tax expert witness. Response within 1 business day.",
  buttonText = "Contact Us",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
}) {
  return (
    <section className="bg-accent py-14 md:py-16">
      <div className="page-container text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white break-words px-2 sm:px-0">
          {title}
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-white/90 text-base sm:text-lg leading-relaxed break-words px-2 sm:px-0">
          {description}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] w-full max-w-xs sm:w-auto sm:max-w-none items-center justify-center rounded-[4px] bg-primary px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-primary/90 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
