import Image from "next/image";
import { HeroShell } from "@/components/hero/HeroShell";
import { AboutProjectMarquee } from "./AboutProjectMarquee";

export function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative overflow-hidden bg-brand-dark bg-[url('/images/HomeHeroBg.svg')] bg-cover bg-no-repeat pb-31 pt-12 lg:pt-18"
    >
      <HeroShell
        showTestimonials={false}
        showBadges={false}
        description="14+ years of production software experience, 800+ projects delivered, 100+ engineers. We build custom AI agents, chatbots, RAG systems, and AI integrations for mid-market companies with fixed pricing and clear timelines."
        heading={
          <p className="text-center text-4xl font-semibold text-white lg:text-[72px] lg:leading-21.5">
            About
            <br />
            <span className="font-playfair">Zyvarex</span>
          </p>
        }
      />

      <AboutProjectMarquee />

      <div className="hidden 2xl:block">
        <Image
          src="/images/about/StarImage.png"
          alt="Star"
          width={148}
          height={148}
          className="absolute left-[10%] top-[10%] animate-floatSoft"
        />
      </div>
      <div className="hidden 2xl:block">
        <Image
          src="/images/about/GlobeImage.png"
          alt="Globe"
          width={172}
          height={172}
          className="absolute right-[10%] top-[40%] animate-floatSoftReverse"
        />
      </div>
    </section>
  );
}
