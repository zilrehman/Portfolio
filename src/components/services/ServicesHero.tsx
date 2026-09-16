import { HeroShell } from "@/components/hero/HeroShell";
import { servicesHeroCarousel } from "@/data/services-page";

/**
 * 3D ring carousel: N frames laid on one grid cell, each rotated by
 * i * (1turn / N) and pushed back along Z so they form a cylinder, with the
 * whole ring spinning once every 32s (`ry`).
 */
function HeroRing() {
  const n = servicesHeroCarousel.length;

  return (
    <div className="py-0">
      <div className="grid py-0 [perspective:35em] [mask-image:linear-gradient(90deg,transparent,red_20%,red_80%,transparent)] md:py-8 lg:py-12 xl:py-24">
        <div
          className="grid animate-ry place-self-center [transform-style:preserve-3d]"
          style={{ "--n": n } as React.CSSProperties}
        >
          {/* Raw <img> on purpose: the per-frame transforms come from CSS custom
              properties on the element, and next/image's wrapper would break the
              preserve-3d chain. */}
          {servicesHeroCarousel.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt=""
              style={{ "--i": i } as React.CSSProperties}
              className="aspect-[7/10] w-[var(--w)] rounded-[1.5em] object-cover [--ba:1turn/var(--n)] [--w:17.5em] [backface-visibility:hidden] [grid-area:1/1] [transform:rotateY(calc(var(--i)*var(--ba)))_translateZ(calc(-1*(0.5*var(--w)+0.5em)/tan(0.5*var(--ba))))] motion-reduce:![animation-duration:128s]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicesHero({
  subtitle,
  titleTop = "AI Development",
  titleBottom = "Services",
  description = "Productized packages with transparent pricing, fixed timelines, and defined deliverables. Start small, prove value, then scale.",
}: {
  subtitle?: string;
  titleTop?: string;
  titleBottom?: string;
  description?: string;
} = {}) {
  return (
    <section className="bg-white">
      <section
        id="services-hero"
        className="relative overflow-hidden bg-[#531fae] bg-[url('/images/HomeHeroBg.svg')] bg-cover bg-no-repeat pb-4 pt-12 lg:pb-12 lg:pt-18 xl:pb-20"
      >
        <HeroShell
          showTestimonials={false}
          showBadges={false}
          subtitle={subtitle}
          description={description}
          heading={
            <p className="text-center text-4xl font-semibold text-white lg:text-[72px] lg:leading-21.5">
              <span className="font-playfair">{titleTop}</span>
              {titleBottom ? (
                <>
                  <br /> {titleBottom}
                </>
              ) : null}
            </p>
          }
        />
        <HeroRing />
      </section>
    </section>
  );
}
