import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesAiSection } from "@/components/services/ServicesAiSection";
import { ServicesProblems } from "@/components/services/ServicesProblems";
import { ServicesPageList } from "@/components/services/ServicesPageList";
import { ServicesGlowTags } from "@/components/services/ServicesGlowTags";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesFaq } from "@/components/services/ServicesFaq";

export const metadata: Metadata = {
  title: "UI UX Design Services Built for Products That Convert",
  description:
    "Your product needs UI/UX design that connects with your target audience and delivers a user interface that's both beautiful and effective.",
};

/* Seven sections, in the reference's order. */
export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesAiSection />
      <ServicesProblems />
      <ServicesPageList />
      <ServicesGlowTags />
      <ServicesProcess />
      <ServicesFaq />
    </main>
  );
}
