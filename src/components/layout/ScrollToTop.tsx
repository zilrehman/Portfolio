"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

/**
 * Reference markup: a fixed round button that stays invisible until the page is
 * scrolled, holding the horizontal arrow rotated -90° so it points up.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#"
      id="to-top"
      aria-label="Scroll to top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`group fixed bottom-20 right-12 z-[1100] inline-flex h-[46px] w-[46px] cursor-pointer select-none items-center justify-center overflow-hidden rounded-full border-0 bg-black/40 text-white no-underline transition-all duration-300 ease-out hover:scale-[1.04] lg:bottom-16 lg:h-[56px] lg:w-[56px] xl:right-24 2xl:right-36 ${
        visible ? "opacity-100" : "pointer-events-none invisible opacity-0"
      }`}
    >
      <span className="inline-flex -rotate-90 transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <ArrowRightIcon />
      </span>
    </a>
  );
}
