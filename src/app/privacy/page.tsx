import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { DetailSections } from "@/components/detail/DetailSections";
import { PageIntro } from "@/components/detail/PageIntro";
import { legalPages, findBySlug } from "@/data/resource-pages";

const page = findBySlug(legalPages, "privacy")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/privacy" },
  openGraph: { title: page.title, description: page.description, url: "/privacy" },
};

export default function PrivacyPage() {
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
