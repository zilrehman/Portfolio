import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesHero } from "@/components/services/ServicesHero";
import { DetailSections } from "@/components/detail/DetailSections";
import { PageIntro } from "@/components/detail/PageIntro";
import { industryPages, industryPageBySlug } from "@/data/detail-pages";

export function generateStaticParams() {
  return industryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = industryPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/industries/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/industries/${page.slug}`,
      type: "website",
    },
  };
}

/** Industry detail page: same composition as the package pages. */
export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = industryPageBySlug(slug);
  if (!page) notFound();

  return (
    <main>
      <ServicesHero
        subtitle={page.heroChip}
        titleTop={page.heroTitleTop}
        titleBottom={page.heroTitleBottom}
        description={page.heroDescription}
      />
      <PageIntro paragraphs={page.introParagraphs} />
      <DetailSections sections={page.sections} marketing />
    </main>
  );
}
