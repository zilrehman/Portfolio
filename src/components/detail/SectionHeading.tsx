import { SectionBadge } from "@/components/ui/SectionBadge";
import { CheckStarIcon } from "@/components/ui/icons";

/**
 * Shared heading for the detail-page sections.
 *
 * Uses the same display scale as the marketing sections — 4xl stepping to 5xl
 * at `leading-[100%]`, Playfair on the trailing words with the brand underline
 * on hover — so migrated content sits in the site's existing rhythm instead of
 * reading as a second, flatter type system.
 */
export function splitHeading(heading: string) {
  const words = heading.trim().split(/\s+/);
  if (words.length < 3) return { start: "", tail: heading };
  const tailLength = words[words.length - 1].length <= 3 ? 2 : 1;
  return {
    start: words.slice(0, words.length - tailLength).join(" "),
    tail: words.slice(words.length - tailLength).join(" "),
  };
}

export function SectionHeading({
  heading,
  sub,
  badge,
  paragraphs = [],
  bullets = [],
  align = "center",
}: {
  heading: string;
  sub?: string;
  badge?: string;
  paragraphs?: string[];
  bullets?: string[];
  align?: "center" | "start";
}) {
  const { start, tail } = splitHeading(heading);
  const centered = align === "center";

  return (
    <div
      className={`group/heading flex flex-col gap-5 ${
        centered ? "items-start lg:items-center" : "items-start"
      }`}
    >
      {badge && <SectionBadge label={badge} />}

      <h2
        className={`text-4xl font-semibold leading-[110%] text-gray-950 lg:text-5xl lg:leading-[100%] ${
          centered ? "lg:text-center" : ""
        }`}
      >
        {start && `${start} `}
        <span className="font-playfair relative inline-block transition-colors duration-300 ease-out after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 after:ease-out group-hover/heading:text-brand group-hover/heading:after:scale-x-100">
          {tail}
        </span>
      </h2>

      {sub && (
        <p
          className={`measure text-base text-gray-700 lg:text-xl ${
            centered ? "lg:text-center" : ""
          }`}
        >
          {sub}
        </p>
      )}

      {paragraphs.length > 0 && (
        <div
          className={`measure flex flex-col gap-4 ${centered ? "lg:text-center" : ""}`}
        >
          {paragraphs.map((text, i) => (
            <p key={i} className="text-base leading-relaxed text-gray-700 lg:text-lg">
              {text}
            </p>
          ))}
        </div>
      )}

      {bullets.length > 0 && (
        <div className="measure flex w-full flex-col gap-3 text-left">
          {bullets.map((item, i) => (
            <div
              key={i}
              className="flex flex-row items-start gap-3 transition-transform duration-300 ease-out hover:translate-x-1"
            >
              <span className="mt-1 shrink-0">
                <CheckStarIcon />
              </span>
              <p className="text-base leading-relaxed text-gray-800 lg:text-lg">
                {item}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
