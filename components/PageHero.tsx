import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}) {
  return (
    <section className="bg-primary py-10 sm:py-14 md:py-20">
      <div className="page-container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-white/60">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1 max-w-full">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white/80 transition-colors break-words"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/80 break-words">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight break-words">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-white/80 leading-relaxed break-words">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
