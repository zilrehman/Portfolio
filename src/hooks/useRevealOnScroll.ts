"use client";

import { useEffect, type RefObject } from "react";

/**
 * Adds `is-visible` to every `.service-mobile-reveal` inside `rootRef` as it
 * scrolls in. The reference runs the same reveal through GSAP ScrollTrigger,
 * scoped to <1024px via matchMedia; the CSS side is scoped the same way.
 */
export function useRevealOnScroll(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>(".service-mobile-reveal")
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootRef]);
}
