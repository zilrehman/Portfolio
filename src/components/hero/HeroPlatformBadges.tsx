"use client";

import Image from "next/image";
import { heroPlatformIcons } from "@/data/site";
import { useIsTablet } from "@/hooks/useMediaQuery";

/**
 * Review-platform badges under the hero CTAs.
 * The reference renders them at 40px up to 1280px and 60px above it.
 */
export function HeroPlatformBadges() {
  const isTablet = useIsTablet();
  const size = isTablet ? 40 : 60;

  return (
    <div className="flex flex-row gap-5">
      {heroPlatformIcons.map((icon) => (
        <div key={icon.alt} className="group relative">
          <a href={icon.href} target="_blank" rel="noreferrer">
            <Image
              src={icon.image}
              alt={icon.alt}
              width={size}
              height={size}
              className="rounded-full transition-transform duration-300 ease-out group-hover:-translate-y-1.5"
            />
          </a>
          <div className="pointer-events-none absolute bottom-[120%] left-1/2 z-20 mt-3 hidden -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100 md:block">
            <div className="relative whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs text-white shadow-lg">
              {icon.label}
              <div className="absolute -bottom-3 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
