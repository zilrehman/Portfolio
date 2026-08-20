"use client";

import FastMarquee from "react-fast-marquee";

type MarqueeProps = {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
};

/**
 * Thin wrapper over react-fast-marquee — the library the reference uses for the
 * hero pill, the brand strip and the testimonial rows. `autoFill` is always on
 * there, so the track seamlessly repeats regardless of item count.
 */
export function Marquee({
  children,
  speed = 30,
  direction = "left",
  className = "",
}: MarqueeProps) {
  return (
    <FastMarquee autoFill speed={speed} direction={direction} className={className}>
      {children}
    </FastMarquee>
  );
}
