import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { CheckStarIcon } from "@/components/ui/icons";
import { StartProjectButton } from "@/components/ui/StartProjectButton";

/**
 * Narrative sections: "What Is …", ROI write-ups, pricing and timeline blocks,
 * the closing CTA and the SEO summary paragraph. Stats, bullets, chips and the
 * CTA are all optional so one component covers every prose shape on the
 * migrated pages.
 */
export function ContentSection({
  heading,
  sub,
  badge,
  paragraphs = [],
  stats = [],
  bulletsTitle,
  bullets = [],
  chips = [],
  links = [],
  ctaLabel,
  ctaHref,
  background = "bg-white",
  align = "center",
}: {
  heading: string;
  sub?: string;
  badge?: string;
  paragraphs?: string[];
  stats?: { value: string; label: string }[];
  bulletsTitle?: string;
  bullets?: string[];
  chips?: string[];
  links?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  background?: string;
  align?: "center" | "start";
}) {
  const hasBody =
    paragraphs.length ||
    stats.length ||
    bullets.length ||
    chips.length ||
    links.length ||
    ctaLabel;
  if (!hasBody && !sub) return null;

  return (
    <section className={`${background} py-12 md:py-16 lg:py-24`}>
      <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:px-8">
        <SectionHeading heading={heading} sub={sub} badge={badge} align={align} />

        {paragraphs.length > 0 && (
          <div className="measure flex flex-col gap-4 lg:mx-auto">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-gray-700 lg:text-lg"
              >
                {text}
              </p>
            ))}
          </div>
        )}

        {stats.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={`${stat.label}-${i}`}
                className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white drop-shadow-2xl p-6 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 lg:rounded-4xl lg:p-10"
              >
                <p className="font-manrope text-[40px] font-bold leading-[120%] tracking-[-0.02em] text-brand">
                  {stat.value}
                </p>
                <p className="text-base text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {bullets.length > 0 && (
          <div className="measure mx-auto flex w-full flex-col gap-4 rounded-2xl border border-gray-100 bg-white drop-shadow-2xl p-4 lg:rounded-4xl lg:p-10">
            {bulletsTitle && (
              <h3 className="font-manrope text-xl font-bold text-gray-950 lg:text-2xl">
                {bulletsTitle}
              </h3>
            )}
            <div className="flex flex-col gap-3">
              {bullets.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-row items-start gap-3 transition-transform duration-300 ease-out hover:translate-x-1"
                >
                  <span className="mt-1 shrink-0">
                    <CheckStarIcon />
                  </span>
                  <p className="text-base text-gray-800 lg:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {chips.length > 0 && (
          <div className="flex flex-wrap justify-start gap-3 lg:justify-center">
            {chips.map((chip, i) => (
              <span
                key={`${chip}-${i}`}
                className="rounded-full border border-gray-200 bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 lg:text-base"
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        {links.length > 0 && (
          <div className="flex flex-wrap justify-start gap-3 lg:justify-center">
            {links.map((link, i) => (
              <Link
                key={`${link.label}-${i}`}
                href={link.href}
                className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-base font-medium text-gray-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {ctaLabel && (
          <div className="flex lg:justify-center">
            <StartProjectButton href={ctaHref || "/contact"} className="w-fit">
              {ctaLabel}
            </StartProjectButton>
          </div>
        )}
      </div>
    </section>
  );
}

/** Muted variant used for the page-summary paragraph at the foot of each page. */
export function SummarySection({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  if (!paragraphs.length) return null;
  return (
    <section className="bg-cream pb-12 md:pb-16 lg:pb-24">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white drop-shadow-2xl p-4 lg:rounded-4xl lg:p-10">
          <h2 className="font-manrope text-lg font-bold text-gray-950 lg:text-xl">
            {heading}
          </h2>
          {paragraphs.map((text, i) => (
            <p key={i} className="text-sm leading-relaxed text-gray-600 lg:text-base">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
