"use client";

import { heroPillPhrases } from "@/data/site";
import { Marquee } from "@/components/ui/Marquee";
import { PillStarIcon } from "@/components/ui/icons";
import { useIsTablet } from "@/hooks/useMediaQuery";

export function HeroRotatingPill() {
  const isTablet = useIsTablet();

  return (
    <div className="flex h-8.75 w-70 items-center overflow-hidden rounded-full bg-black/30 backdrop-blur-[20px] md:w-90 lg:h-22">
      <Marquee speed={30} className="overflow-hidden no-scrollbar">
        {heroPillPhrases.map((word) => (
          <div key={word} className="mr-3 flex items-center gap-2 lg:gap-5">
            <PillStarIcon
              width={isTablet ? 12 : 30}
              height={isTablet ? 12 : 30}
            />
            <span className="text-xl font-semibold leading-21.5 text-white lg:text-[54px]">
              {word}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
