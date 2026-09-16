import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { FeatureGrid } from "@/components/detail/FeatureGrid";
import { AboutBookCall } from "@/components/about/AboutBookCall";
import { industryPages } from "@/data/detail-pages";

export const metadata: Metadata = {
  title: "AI Solutions by Industry | Zyvarex",
  description:
    "AI development for SaaS, healthcare, fintech and e-commerce teams. Fixed-price packages, production-grade delivery, and industry-specific compliance.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "AI Solutions by Industry | Zyvarex",
    description:
      "AI development for SaaS, healthcare, fintech and e-commerce teams. Fixed-price packages, production-grade delivery, and industry-specific compliance.",
    url: "/industries",
  },
};

/**
 * Hub for the four industry pages. The original site links here from every
 * industry breadcrumb but never published the page, so it is assembled from
 * those four pages' own hero copy rather than from new content.
 */
export default function IndustriesIndexPage() {
  return (
    <main>
      <ServicesHero
        subtitle="Industry expertise"
        titleTop="AI Solutions"
        titleBottom="by Industry"
        description="We have built AI for companies in your industry. Here is what works."
      />
      <FeatureGrid
        heading="Industries We Serve"
        sub="Each vertical has specific compliance, data and integration requirements we have delivered against."
        items={industryPages.map((page) => ({
          title: page.heroChip || `${page.heroTitleTop} ${page.heroTitleBottom}`.trim(),
          description: page.heroDescription,
          href: `/industries/${page.slug}`,
          linkLabel: "Learn more",
        }))}
      />
      <AboutBookCall
        headingTop="Different industry?"
        headingHighlight="Tell us about your use case"
      />
    </main>
  );
}
