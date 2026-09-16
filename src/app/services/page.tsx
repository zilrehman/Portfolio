import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesAiSection } from "@/components/services/ServicesAiSection";
import { ServicesProblems } from "@/components/services/ServicesProblems";
import { ServicesPageList } from "@/components/services/ServicesPageList";
import { ServicesGlowTags } from "@/components/services/ServicesGlowTags";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesFaq } from "@/components/services/ServicesFaq";
import { DetailSections } from "@/components/detail/DetailSections";
import { companyPageBySlug } from "@/data/company-pages";

const page = companyPageBySlug("services")!;

/**
 * The package list and the FAQ already have dedicated sections on this page;
 * everything else from the original services overview renders through the
 * shared detail sections.
 */
const COVERED = [
  "All AI Development Packages",
  "AI Development Services: Frequently Asked Questions",
];
const extraSections = page.sections.filter((s) => !COVERED.includes(s.heading));

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: page.title,
    description: page.description,
    url: "/services",
  },
};

/* Seven sections, in the reference's order. */
export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesAiSection />
      <ServicesProblems />
      <ServicesPageList />
      <DetailSections sections={extraSections} />
      <ServicesGlowTags />
      <ServicesProcess />
      <ServicesFaq />
    </main>
  );
}
