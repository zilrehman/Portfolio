import Image from "next/image";
import { aboutMarqueeImages } from "@/data/about";
import { Marquee } from "@/components/ui/Marquee";

/**
 * Project-shot marquee that sits inside the About hero, under the CTAs.
 * Reference geometry: 200px squares on mobile, 300px from lg up, 30px gap,
 * one full pass in ~44s.
 */
export function AboutProjectMarquee() {
  return (
    <div className="mt-10 w-full">
      <Marquee speed={90}>
        {aboutMarqueeImages.map((item) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={400}
            height={400}
            className="z-10 mr-[30px] h-50 w-50 lg:h-75 lg:w-75"
          />
        ))}
      </Marquee>
    </div>
  );
}
