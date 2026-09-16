import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ResourceIndex } from "@/components/detail/ResourceIndex";
import { DetailSections } from "@/components/detail/DetailSections";
import { blogIndex, indexPages } from "@/data/resource-pages";

const page = indexPages.find((p) => p.slug === "blog")!;
const listed = new Set(blogIndex.map((item) => item.label));

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/blog" },
  openGraph: { title: page.title, description: page.description, url: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main>
      <ServicesHero
        subtitle={page.heroChip}
        titleTop={page.heroTitleTop}
        titleBottom={page.heroTitleBottom}
        description={page.heroDescription}
      />
      <ResourceIndex
        heading="Latest AI Guides"
        basePath="/blog"
        items={blogIndex}
        linkLabel="Read the guide"
      />
      <DetailSections
        sections={page.sections.filter((s) => !listed.has(s.heading))}
      />
    </main>
  );
}
