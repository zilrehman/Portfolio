import { SectionHeading } from "./SectionHeading";

/**
 * Technology stacks and integration lists. Groups are optional: the original
 * site sometimes labels them (LLM Providers, Vector Databases…) and sometimes
 * renders one flat wall of tools.
 */
export function TagSection({
  heading,
  sub,
  groups,
  footnote,
  paragraphs = [],
  bullets = [],
  background = "bg-cream",
}: {
  heading: string;
  sub?: string;
  groups: { label: string; items: string[] }[];
  footnote?: string;
  paragraphs?: string[];
  bullets?: string[];
  background?: string;
}) {
  const filled = groups.filter((group) => group.items.length);
  if (!filled.length) return null;
  const labelled = filled.some((group) => group.label);

  return (
    <section className={`${background} py-12 md:py-16 lg:py-24`}>
      <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:gap-14 lg:px-8">
        <SectionHeading heading={heading} sub={sub} paragraphs={paragraphs} bullets={bullets} />

        <div
          className={
            labelled
              ? "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
              : "flex flex-wrap justify-start gap-3 lg:justify-center"
          }
        >
          {labelled
            ? filled.map((group, i) => (
                <div
                  key={`${group.label}-${i}`}
                  className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white drop-shadow-2xl p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 lg:rounded-4xl lg:p-10"
                >
                  <h3 className="font-manrope text-lg font-bold text-gray-950">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, ii) => (
                      <span
                        key={`${item}-${ii}`}
                        className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            : filled[0].items.map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 hover:text-brand lg:text-base"
                >
                  {item}
                </span>
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

/** Simple link row used for "Related AI Services". */
export function LinkSection({
  heading,
  sub,
  links,
  paragraphs = [],
  bullets = [],
  background = "bg-white",
}: {
  heading: string;
  sub?: string;
  links: { label: string; href: string }[];
  paragraphs?: string[];
  bullets?: string[];
  background?: string;
}) {
  if (!links.length) return null;
  return (
    <section className={`${background} py-12 md:py-16 lg:py-24`}>
      <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:px-8">
        <SectionHeading heading={heading} sub={sub} paragraphs={paragraphs} bullets={bullets} />
        <div className="flex flex-wrap justify-start gap-3 lg:justify-center">
          {links.map((link, i) => (
            <a
              key={`${link.label}-${i}`}
              href={link.href}
              className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-base font-medium text-gray-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
