import Link from "next/link";

export default function HubCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)] hover:border-accent hover:shadow-md transition-all flex flex-col min-h-[44px]"
    >
      <h2 className="text-base sm:text-lg font-bold text-heading group-hover:text-accent transition-colors break-words">
        {title}
      </h2>
      <p className="mt-3 text-body text-sm leading-relaxed flex-1 break-words">
        {description}
      </p>
      <span className="mt-4 text-sm font-semibold text-accent">
        Read more →
      </span>
    </Link>
  );
}
