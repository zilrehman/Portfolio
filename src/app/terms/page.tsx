import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { DetailSections } from "@/components/detail/DetailSections";
import { PageIntro } from "@/components/detail/PageIntro";
import { legalPages, findBySlug } from "@/data/resource-pages";

const page = findBySlug(legalPages, "terms")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/terms" },
  openGraph: { title: page.title, description: page.description, url: "/terms" },
};

export default function TermsPage() {
  return (
    <main>
      <ServicesHero
        subtitle={page.heroChip}
        titleTop={page.heroTitleTop}
        titleBottom={page.heroTitleBottom}
        description={page.heroDescription}
      />
      <PageIntro paragraphs={page.introParagraphs} />
      <DetailSections sections={page.sections} />
    </main>
  );
}
