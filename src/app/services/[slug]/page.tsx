import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesHero } from "@/components/services/ServicesHero";
import { DetailSections } from "@/components/detail/DetailSections";
import { PageIntro } from "@/components/detail/PageIntro";
import { servicePages, servicePageBySlug } from "@/data/detail-pages";

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePageBySlug(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/services/${page.slug}`,
      type: "website",
    },
  };
}

/** Package detail page: the shared hero, then the package's own sections. */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = servicePageBySlug(slug);
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
