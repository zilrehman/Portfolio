import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesHero } from "@/components/services/ServicesHero";
import { DetailSections } from "@/components/detail/DetailSections";
import { PageIntro } from "@/components/detail/PageIntro";
import { datasetPages, findBySlug } from "@/data/resource-pages";

export function generateStaticParams() {
  return datasetPages.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = findBySlug(datasetPages, slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `/datasets/${entry.slug}` },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: `/datasets/${entry.slug}`,
    },
  };
}

export default async function DatasetsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = findBySlug(datasetPages, slug);
  if (!entry) notFound();

  return (
    <main>
      <ServicesHero
        subtitle={entry.heroChip}
        titleTop={entry.heroTitleTop}
        titleBottom={entry.heroTitleBottom}
        description={entry.heroDescription}
      />
      <PageIntro paragraphs={entry.introParagraphs} />
      <DetailSections sections={entry.sections} />
    </main>
  );
}
