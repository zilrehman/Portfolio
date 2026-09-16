import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { QuoteMarks } from "@/components/ui/QuoteMarks";
import { SeeMoreArrowIcon } from "@/components/ui/icons";

type Card = {
  title: string;
  description: string;
  chips?: string[];
  href?: string;
  linkLabel?: string;
};

type Quote = { quote: string; name: string; role: string; badge?: string };

/** Card shell shared by both variants — matches the AboutProcess card. */
const SHELL =
  "group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 drop-shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 lg:rounded-4xl lg:p-10";

const GLOW =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(73,57,210,0.10),transparent_32%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100";

function columnsFor(count: number) {
  if (count <= 2) return "md:grid-cols-2";
  if (count % 4 === 0 && count > 6) return "md:grid-cols-2 xl:grid-cols-4";
  return "md:grid-cols-2 lg:grid-cols-3";
}

/**
 * The workhorse for migrated content: deliverables, qualifiers, use cases,
 * why-us lists, next steps, related services and industry breakdowns all share
 * the same title + description + optional chips/link shape.
 */
export function FeatureGrid({
  heading,
  sub,
  badge,
  items,
  footnote,
  numbered = false,
  paragraphs = [],
  bullets = [],
  background = "bg-white",
}: {
  heading: string;
  sub?: string;
  badge?: string;
  items: Card[];
  footnote?: string;
  numbered?: boolean;
  paragraphs?: string[];
  bullets?: string[];
  background?: string;
}) {
  if (!items.length) return null;

  return (
    <section className={`${background} py-12 md:py-16 lg:py-24`}>
      <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:gap-14 lg:px-8">
        <SectionHeading heading={heading} sub={sub} paragraphs={paragraphs} bullets={bullets} badge={badge} />

        <div className={`grid grid-cols-1 gap-5 lg:gap-6 ${columnsFor(items.length)}`}>
          {items.map((item, i) => (
            <div key={`${item.title}-${i}`} className={SHELL}>
              <div className={GLOW} />
              {numbered && (
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-base font-semibold text-white shadow-[0_8px_20px_-6px_rgba(73,57,210,0.55)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="text-xl font-semibold leading-[130%] text-gray-950 transition-colors duration-300 group-hover:text-brand lg:text-2xl">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>

              {item.chips && item.chips.length > 0 && (
                <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-2">
                  {item.chips.map((chip, ci) => (
                    <span
                      key={`${chip}-${ci}`}
                      className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:border-brand/20 group-hover:bg-brand/5 group-hover:text-brand"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}

              {item.href && (
                <Link
                  href={item.href}
                  className="relative z-10 mt-auto flex w-fit items-center gap-2 pt-2 font-manrope text-base font-bold text-brand"
                >
                  {item.linkLabel || "Learn more"}
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    <SeeMoreArrowIcon />
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {footnote && (
          <p className="measure text-base text-gray-700 lg:mx-auto lg:text-center lg:text-lg">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}

/** Same grid, rendered as pull quotes for the industry testimonial blocks. */
export function QuoteGrid({
  heading,
  sub,
  items,
  paragraphs = [],
  bullets = [],
  background = "bg-cream",
}: {
  heading: string;
  sub?: string;
  items: Quote[];
  paragraphs?: string[];
  bullets?: string[];
  background?: string;
}) {
  if (!items.length) return null;

  return (
    <section className={`${background} py-12 md:py-16 lg:py-24`}>
      <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:gap-14 lg:px-8">
        <SectionHeading heading={heading} sub={sub} paragraphs={paragraphs} bullets={bullets} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={`${item.name}-${i}`} className={SHELL}>
              <div className={GLOW} />
              <div className="relative z-10 flex items-start justify-between gap-4">
                <QuoteMarks />
                {item.badge && (
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="relative z-10 text-base leading-relaxed text-gray-700 lg:text-lg">
                {item.quote}
              </p>
              <div className="relative z-10 mt-auto flex flex-col gap-1 pt-2">
                <p className="text-lg font-semibold text-gray-950">{item.name}</p>
                <p className="text-sm text-gray-600">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
