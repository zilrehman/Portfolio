import Image from "next/image";
import { HeroShell } from "@/components/hero/HeroShell";

export function ContactPageHero() {
  return (
    <div
      id="contact-hero"
      className="relative overflow-hidden bg-brand-dark bg-[url('/images/HomeHeroBg.svg')] bg-cover bg-no-repeat pb-31 pt-12 lg:pt-18"
    >
      <HeroShell
        showTestimonials={false}
        showBadges={false}
        showButtons={false}
        description="Tell us about your AI goals. We respond within 1 business day with a clear next step, whether that is a discovery call, a proposal, or a recommendation."
        heading={
          <p className="text-center text-4xl font-semibold text-white lg:text-[72px] lg:leading-21.5">
            Let&rsquo;s Build Your
            <br />
            <span className="font-playfair">AI Solution</span>
          </p>
        }
      />

      <div className="hidden 2xl:block">
        <Image
          src="/images/contact/hexaIcon.png"
          alt="Star"
          width={150}
          height={150}
          className="absolute left-[10%] top-[10%] animate-floatSoft"
        />
      </div>
      <div className="hidden 2xl:block">
        <Image
          src="/images/contact/bendIcon.png"
          alt="Globe"
          width={172}
          height={172}
          className="absolute right-[10%] top-[50%] animate-floatSoftReverse"
        />
      </div>
    </div>
  );
}
