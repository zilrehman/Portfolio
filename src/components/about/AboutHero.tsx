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
        description="We started with a simple belief that great design has the power to change how people experience the world. Today, we're a global team helping brands across 15+ industries design products that truly matter."
        heading={
          <p className="text-center text-4xl font-semibold text-white lg:text-[72px] lg:leading-21.5">
            A <span className="font-playfair">Design Studio</span>
            <br /> Built on Innovation
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
