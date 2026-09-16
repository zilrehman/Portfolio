import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ResourceIndex } from "@/components/detail/ResourceIndex";
import { DetailSections } from "@/components/detail/DetailSections";
import { glossaryIndex, indexPages } from "@/data/resource-pages";

const page = indexPages.find((p) => p.slug === "glossary")!;
const listed = new Set(glossaryIndex.map((item) => item.label));

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/glossary" },
  openGraph: { title: page.title, description: page.description, url: "/glossary" },
};

export default function GlossaryIndexPage() {
  return (
    <main>
      <ServicesHero
        subtitle={page.heroChip}
        titleTop={page.heroTitleTop}
        titleBottom={page.heroTitleBottom}
        description={page.heroDescription}
      />
      <ResourceIndex
        heading="AI Terms Explained"
        basePath="/glossary"
        items={glossaryIndex}
        linkLabel="View definition"
      />
      <DetailSections
        sections={page.sections.filter((s) => !listed.has(s.heading))}
      />
    </main>
  );
}
