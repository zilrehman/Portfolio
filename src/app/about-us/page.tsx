import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutWhoWeAre } from "@/components/about/AboutWhoWeAre";
import { Stats } from "@/components/sections/Stats";
import { AboutIndustries } from "@/components/about/AboutIndustries";
import { AboutBrands } from "@/components/about/AboutBrands";
import { AboutProcess } from "@/components/about/AboutProcess";
import { VideoSection } from "@/components/sections/VideoSection";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { AboutBookCall } from "@/components/about/AboutBookCall";
import { DetailSections } from "@/components/detail/DetailSections";
import { companyPageBySlug } from "@/data/company-pages";

const page = companyPageBySlug("about")!;

/** Sections the page already renders through its own marketing components. */
const COVERED = [
  "Why Zyvarex Built a Dedicated AI Division",
  "How We Work with Clients",
  "Ready to Explore AI for Your Business?",
];

const story = page.sections.find(
  (s) => s.heading === "Why Zyvarex Built a Dedicated AI Division"
);
const storyParagraphs =
  story && story.kind === "prose" ? story.paragraphs ?? [] : undefined;

const extraSections = page.sections.filter((s) => !COVERED.includes(s.heading));

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: page.title,
    description: page.description,
    url: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <main>
      <AboutHero />
      <AboutWhoWeAre paragraphs={storyParagraphs} />
      <Stats variant="about" />
      <AboutIndustries />
      <AboutBrands />
      <DetailSections sections={extraSections} />
      <AboutProcess />
      <VideoSection background="bg-cream" />
      <TestimonialsCarousel />
      <AboutBookCall />
    </main>
  );
}
