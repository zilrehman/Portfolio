import Image from "next/image";
import { partnerBrandsRowOne, partnerBrandsRowTwo } from "@/data/site";
import { Marquee } from "@/components/ui/Marquee";

/**
 * Two counter-scrolling rows (left, then right) at speed 30 — the reference
 * layout. No container/max-width here: the strip runs full-bleed.
 */
export function HeroBrandMarquee() {
  return (
    <div>
      <Marquee speed={30}>
        {partnerBrandsRowOne.map((brand, i) => (
          <span
            key={`${brand.src}-${i}`}
            className="marquee__item mr-0 bg-white opacity-60"
          >
            <Image
              src={brand.src}
              alt="Partner Logo"
              width={brand.width}
              height={brand.height}
            />
          </span>
        ))}
      </Marquee>
      <Marquee speed={30} direction="right">
        {partnerBrandsRowTwo.map((brand, i) => (
          <span
            key={`${brand.src}-${i}`}
            className="marquee__item mr-0 opacity-60"
          >
            <Image
              src={brand.src}
              alt="Partner Logo"
              width={brand.width}
              height={brand.height}
            />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/** The "Backed by 14+ years at Zyvarex" band that wraps the strip. */
export function BrandStrip() {
  return (
    <section className="py-10 lg:pb-24 lg:pt-16">
      <div className="flex flex-col items-center gap-7">
        <h2 className="text-center font-manrope text-xl font-bold text-gray-950 lg:text-start lg:text-2xl">
          Backed by <span className="text-[#7432E9]">14+</span> years at Zyvarex
        </h2>
        <HeroBrandMarquee />
      </div>
    </section>
  );
}
