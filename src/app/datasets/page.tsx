import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ResourceIndex } from "@/components/detail/ResourceIndex";
import { DetailSections } from "@/components/detail/DetailSections";
import { datasetIndex, indexPages } from "@/data/resource-pages";

const page = indexPages.find((p) => p.slug === "datasets")!;
const listed = new Set(datasetIndex.map((item) => item.label));

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/datasets" },
  openGraph: { title: page.title, description: page.description, url: "/datasets" },
};

export default function DatasetsIndexPage() {
  return (
    <main>
      <ServicesHero
        subtitle={page.heroChip}
        titleTop={page.heroTitleTop}
        titleBottom={page.heroTitleBottom}
        description={page.heroDescription}
      />
      <ResourceIndex
        heading="Published Datasets and Benchmarks"
        basePath="/datasets"
        items={datasetIndex}
        linkLabel="View dataset"
      />
      <DetailSections
        sections={page.sections.filter((s) => !listed.has(s.heading))}
      />
    </main>
  );
}
