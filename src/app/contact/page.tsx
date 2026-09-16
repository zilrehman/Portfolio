import type { Metadata } from "next";
import { ContactPageHero } from "@/components/contact/ContactPageHero";
import { ContactPageFormSection } from "@/components/contact/ContactPageFormSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { ContactLocations } from "@/components/contact/ContactLocations";
import { Stats } from "@/components/sections/Stats";
import { DetailSections } from "@/components/detail/DetailSections";
import { companyPageBySlug } from "@/data/company-pages";

const page = companyPageBySlug("contact")!;

/** The form and its success state are already part of the contact components. */
const COVERED = ["Send Us a Message", "Message Sent!"];
const extraSections = page.sections.filter((s) => !COVERED.includes(s.heading));

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: page.title,
    description: page.description,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactPageHero />
      <ContactPageFormSection />
      <DetailSections sections={extraSections} />
      <ValueSection background="bg-cream" />
      <VideoSection background="bg-cream" />
      <ContactLocations />
      <Stats variant="about" background="bg-white" />
    </main>
  );
}
