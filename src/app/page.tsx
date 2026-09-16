import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { ValueSection } from "@/components/sections/ValueSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { DetailSections } from "@/components/detail/DetailSections";
import { companyPageBySlug } from "@/data/company-pages";

const home = companyPageBySlug("home")!;

/**
 * Homepage content the existing sections already cover; the grouped technology
 * stack, the FAQ and the page summary are not represented anywhere else, so
 * they render through the shared detail sections.
 */
const HOME_EXTRAS = [
  "Technologies We Work With",
  "Frequently Asked Questions",
  "About This Page",
];

const extraSections = home.sections.filter((s) =>
  HOME_EXTRAS.includes(s.heading)
);

/* Section order taken from the reference DOM: the showreel sits between the
   value section and services, and stats precede pricing. */
export default function Home() {
  return (
    <main>
      <Hero />
      <Industries />
      <ValueSection />
      <VideoSection background="bg-white" />
      <Services />
      <Stats variant="home" />
      <Pricing />
      <Testimonials />
      <DetailSections sections={extraSections} />
      <Contact />
    </main>
  );
}
