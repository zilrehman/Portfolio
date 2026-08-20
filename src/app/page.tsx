import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { ValueSection } from "@/components/sections/ValueSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

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
      <Contact />
    </main>
  );
}
