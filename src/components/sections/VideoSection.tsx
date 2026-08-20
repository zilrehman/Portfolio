"use client";

import { useLayoutEffect, useRef } from "react";
import { VIDEO_URL } from "@/data/site";
import { useIsMobile, useIsTablet } from "@/hooks/useMediaQuery";

/**
 * Scroll-scrubbed showreel.
 *
 * Reproduces the reference's GSAP ScrollTrigger timeline, measured off the live
 * site rather than invented:
 *
 *   trigger  = this section
 *   start    = section top hits 75% of the viewport height
 *   end      = section top hits 45% of the viewport height   (a 0.30vh window)
 *   scrub    = 0.8s  ·  ease "none" (perfectly linear across the window)
 *
 * Over that window it drives four properties in parallel, all clamped outside it:
 *   top spacer     0 → topSpacerValue      (150 desktop / 0 tablet+mobile)
 *   bottom spacer  0 → bottomSpacerValue   (180 desktop / 30 tablet+mobile)
 *   scale          1 → innerWidth / containerWidth   (transformOrigin center)
 *   border radius  32px → 0                (0 throughout on mobile)
 *
 * The container is capped at max-w-7xl (1280px), so the scale target is 1.0 at
 * or below 1280px wide — the expansion is only visible above that, exactly as on
 * the reference. The spacers are animated, never static: they open up the room
 * the scaled video needs (transforms don't affect layout).
 */

/**
 * GSAP `scrub: 0.8` = "take 0.8s to catch up to the scroll position", tweened
 * linearly and restarted on every scroll update — so it fully settles once
 * scrolling stops rather than easing asymptotically.
 */
const SCRUB_SECONDS = 0.8;
const DESKTOP_RADIUS = 32;

export function VideoSection({ background = "bg-white" }: { background?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const radiusRef = useRef<HTMLDivElement>(null);
  const topSpacerRef = useRef<HTMLDivElement>(null);
  const bottomSpacerRef = useRef<HTMLDivElement>(null);

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  const topSpacerValue = isTablet ? 0 : 150;
  const bottomSpacerValue = isTablet ? 30 : 180;
  const baseRadius = isMobile ? 0 : DESKTOP_RADIUS;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const scaleEl = scaleRef.current;
    const radiusEl = radiusRef.current;
    const topSpacer = topSpacerRef.current;
    const bottomSpacer = bottomSpacerRef.current;
    if (!section || !scaleEl || !radiusEl || !topSpacer || !bottomSpacer) return;

    scaleEl.style.transformOrigin = "center center";
    scaleEl.style.willChange = "transform";
    radiusEl.style.overflow = "hidden";
    radiusEl.style.willChange = "transform, border-radius";

    let start = 0;
    let end = 1;
    let maxScale = 1;

    /** offsetWidth is the untransformed layout width, so this stays stable. */
    const measure = () => {
      const top = section.getBoundingClientRect().top + window.scrollY;
      const vh = window.innerHeight;
      start = top - 0.75 * vh;
      end = top - 0.45 * vh;
      const base = scaleEl.offsetWidth;
      maxScale = base > 0 ? window.innerWidth / base : 1;
    };

    const targetProgress = () => {
      if (end <= start) return 0;
      const p = (window.scrollY - start) / (end - start);
      return p < 0 ? 0 : p > 1 ? 1 : p;
    };

    let current = 0;
    let raf = 0;
    let running = false;
    let from = 0;
    let goal = 0;
    let startedAt = 0;

    const paint = (p: number) => {
      topSpacer.style.height = `${p * topSpacerValue}px`;
      bottomSpacer.style.height = `${p * bottomSpacerValue}px`;
      const scale = 1 + p * (maxScale - 1);
      scaleEl.style.transform = `translateZ(0) scale(${scale})`;
      radiusEl.style.borderRadius = `${(1 - p) * baseRadius}px`;
    };

    const tick = (now: number) => {
      const target = targetProgress();

      // scroll moved: restart the catch-up tween from wherever we are now
      if (target !== goal) {
        from = current;
        goal = target;
        startedAt = now;
      }

      const t = Math.min((now - startedAt) / (SCRUB_SECONDS * 1000), 1);
      current = from + (goal - from) * t;
      paint(current);

      if (t >= 1 && current === goal) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const kick = () => {
      if (running) return;
      running = true;
      from = current;
      goal = targetProgress();
      startedAt = performance.now();
      raf = requestAnimationFrame(tick);
    };

    // settle straight to the correct state on mount / resize — no entrance sweep
    const snap = () => {
      measure();
      current = targetProgress();
      from = current;
      goal = current;
      paint(current);
    };

    snap();

    const onScroll = () => kick();
    const onResize = () => snap();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // section height shifts as sibling content loads; re-measure when it does
    const ro = new ResizeObserver(() => measure());
    ro.observe(document.body);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [topSpacerValue, bottomSpacerValue, baseRadius]);

  return (
    <section className={`${background} overflow-x-hidden`}>
      <section ref={sectionRef} className="overflow-visible">
        <div ref={topSpacerRef} />
        <div
          ref={scaleRef}
          className="container mx-auto max-w-7xl transform-gpu px-0"
        >
          <div ref={radiusRef} className="overflow-hidden md:rounded-4xl">
            <video
              src={VIDEO_URL}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              className="pointer-events-none block h-full max-h-dvh w-full object-contain"
            />
          </div>
        </div>
        <div ref={bottomSpacerRef} />
      </section>
    </section>
  );
}
