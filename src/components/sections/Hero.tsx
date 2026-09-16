import Image from "next/image";
import { HeroShell } from "@/components/hero/HeroShell";
import { BrandStrip } from "@/components/hero/HeroBrandMarquee";

export function Hero() {
  return (
    <>
      <section className="bg-white">
        <section
          id="home"
          className="relative overflow-hidden bg-[#531fae] bg-[url('/images/HomeHeroBg.svg')] bg-cover bg-no-repeat pb-31 pt-12 lg:pt-18"
        >
          <HeroShell
            subtitle="Production-grade AI engineering"
            description="We build custom AI agents, chatbots, and RAG systems for companies that want AI shipped fast and built right. Fixed pricing starts at $3,000. No hourly billing, no scope creep."
          />

          {/* Floating device mockups — 2xl and up, edge-framed */}
          <div className="hidden 2xl:block">
            <Image
              src="/assets/HomePhone.png"
              alt="mobile mockup"
              width={211}
              height={437}
              priority
              className="absolute right-[2px] top-[25%] z-10 h-auto w-auto animate-heroFloatUp"
            />
          </div>
          <div className="hidden 2xl:block">
            <Image
              src="/assets/HomeCube.png"
              alt="cube"
              width={107}
              height={107}
              className="absolute right-31 top-[57%] z-5 h-auto w-auto animate-heroFloatDown"
            />
          </div>
          <div className="hidden 2xl:block">
            <Image
              src="/assets/Macbook.png"
              alt="macbook"
              width={315}
              height={368}
              priority
              className="absolute left-0 top-[25%] z-10 h-auto w-auto animate-heroFloatUp"
            />
          </div>
          <div className="hidden 2xl:block">
            <Image
              src="/assets/Ring.png"
              alt="ring"
              width={88}
              height={88}
              className="absolute left-40 top-[23.5%] z-5 h-auto w-auto animate-heroFloatDown"
            />
          </div>
        </section>
      </section>

      <section className="relative z-10 -mt-10 overflow-hidden rounded-t-4xl bg-white lg:rounded-t-[50px]">
        <BrandStrip />
      </section>
    </>
  );
}
