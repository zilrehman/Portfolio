import type { DetailSection } from "@/data/detail-pages";
import { ContentSection, SummarySection } from "./ContentSection";
import { FeatureGrid, QuoteGrid } from "./FeatureGrid";
import { ComparisonCards, DataTable } from "./ComparisonCards";
import { TagSection, LinkSection } from "./TagSection";
import { ServicesProblems } from "@/components/services/ServicesProblems";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesFaq } from "@/components/services/ServicesFaq";
import { AboutBookCall } from "@/components/about/AboutBookCall";
import { splitHeading } from "./SectionHeading";

const isProcess = (s: DetailSection) =>
  s.kind === "cards" && /^how\b/i.test(s.heading) && s.items.some((i) => i.chips?.length);

const isSummary = (s: DetailSection) => /^about this page$/i.test(s.heading);

/** The closing banner: a short prose block at the very end of the page. */
function isClosingCta(s: DetailSection, index: number, all: DetailSection[]) {
  if (s.kind !== "prose") return false;
  const remaining = all.slice(index + 1).filter((x) => !isSummary(x));
  return remaining.length === 0 && (s.paragraphs?.length ?? 0) <= 2;
}

/**
 * Renders a migrated page's sections onto the existing design system.
 *
 * The first problem list, the process steps, the FAQ accordion and the closing
 * banner reuse the marketing components this site already ships; everything
 * else goes through the shared detail sections.
 */
export function DetailSections({
  sections,
  marketing = false,
}: {
  sections: DetailSection[];
  /**
   * Package and industry pages reuse the video problem block and the stacking
   * process rail. Editorial routes (blog, glossary, datasets, legal) keep every
   * section in the plain card grid so nothing is lost to those fixed layouts.
   */
  marketing?: boolean;
}) {
  let problemsUsed = false;
  let processUsed = false;
  let alt = 0;
  /** Alternate section backgrounds so neighbouring blocks stay distinct. */
  const nextBg = () => (alt++ % 2 === 0 ? "bg-white" : "bg-cream");

  return (
    <>
      {sections.map((section, index) => {
        const key = `${section.kind}-${index}`;

        if (isSummary(section) && section.kind === "prose") {
          return (
            <SummarySection
              key={key}
              heading={section.heading}
              paragraphs={section.paragraphs ?? []}
            />
          );
        }

        if (isClosingCta(section, index, sections) && section.kind === "prose") {
          const { start, tail } = splitHeading(section.heading);
          return (
            <div key={key}>
              {section.paragraphs?.length ? (
                <ContentSection
                  heading={section.heading}
                  paragraphs={section.paragraphs}
                  bullets={section.bullets}
                  background={nextBg()}
                />
              ) : null}
              <AboutBookCall headingTop={start} headingHighlight={tail} />
            </div>
          );
        }

        switch (section.kind) {
          case "cards": {
            if (marketing && !problemsUsed && index <= 1 && section.items.length >= 3) {
              problemsUsed = true;
              const { start, tail } = splitHeading(section.heading);
              return (
                <ServicesProblems
                  key={key}
                  heading={{
                    topStart: start,
                    topHighlight: tail,
                    topEnd: "",
                    bottomStart: "",
                    bottomHighlight: "",
                    bottomEnd: "",
                  }}
                  sub={section.sub || "Sound familiar?"}
                  items={section.items}
                  ctaLabel="Book a Free Discovery Call"
                  ctaHref="/contact"
                />
              );
            }
            if (marketing && !processUsed && isProcess(section)) {
              processUsed = true;
              const { start, tail } = splitHeading(section.heading);
              return (
                <ServicesProcess
                  key={key}
                  badge="Simple, predictable process"
                  heading={{
                    topStart: start,
                    topHighlight: "",
                    topEnd: "",
                    bottomStart: "",
                    bottomHighlight: tail,
                    bottomEnd: "",
                  }}
                  sub={section.sub ?? ""}
                  cards={section.items.map((item, i) => ({
                    step: String(i + 1).padStart(2, "0"),
                    title: item.title,
                    description: item.description,
                    tags: item.chips ?? [],
                  }))}
                />
              );
            }
            return (
              <FeatureGrid
                key={key}
                heading={section.heading}
                sub={section.sub}
                items={section.items}
                paragraphs={section.paragraphs}
                bullets={section.bullets}
                footnote={section.footnote}
                numbered={/getting started|your ai journey|choose your starting/i.test(
                  section.heading
                )}
                background={nextBg()}
              />
            );
          }

          case "prose":
            return (
              <ContentSection
                key={key}
                heading={section.heading}
                sub={section.sub}
                paragraphs={section.paragraphs}
                stats={section.stats}
                bulletsTitle={section.bulletsTitle}
                bullets={section.bullets}
                chips={section.chips}
                links={section.links}
                ctaLabel={section.ctaLabel}
                ctaHref={section.ctaHref}
                background={nextBg()}
              />
            );

          case "tags":
            return (
              <TagSection
                key={key}
                heading={section.heading}
                sub={section.sub}
                groups={section.groups}
                paragraphs={section.paragraphs}
                bullets={section.bullets}
                footnote={section.footnote}
                background={nextBg()}
              />
            );

          case "compare":
            return (
              <ComparisonCards
                key={key}
                heading={section.heading}
                sub={section.sub}
                columns={section.columns}
                paragraphs={section.paragraphs}
                bullets={section.bullets}
                background={nextBg()}
              />
            );

          case "table":
            return (
              <DataTable
                key={key}
                heading={section.heading}
                sub={section.sub}
                headers={section.headers}
                rows={section.rows}
                truncatedRows={section.truncatedRows}
                paragraphs={section.paragraphs}
                bullets={section.bullets}
                background={nextBg()}
              />
            );

          case "quotes":
            return (
              <QuoteGrid
                key={key}
                heading={section.heading}
                sub={section.sub}
                items={section.items}
                paragraphs={section.paragraphs}
                bullets={section.bullets}
                background={nextBg()}
              />
            );

          case "links":
            return (
              <LinkSection
                key={key}
                heading={section.heading}
                sub={section.sub}
                links={section.links}
                paragraphs={section.paragraphs}
                bullets={section.bullets}
                background={nextBg()}
              />
            );

          case "faq":
            return (
              <ServicesFaq
                key={key}
                headingStart="Frequently"
                headingHighlight="Asked "
                headingEnd="Questions"
                sub={section.sub || "Everything teams ask us before getting started."}
                faqs={section.items}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
