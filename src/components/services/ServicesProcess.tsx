"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CALENDLY_URL } from "@/data/branding";
import { serviceDesignProcessCards } from "@/data/services-page";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ArrowIcon, ProcessConeIcon } from "@/components/ui/icons";

/**
 * Stacking process cards: each card sticks under the header with an increasing
 * z-index, and the rail on the left fills as the section scrolls past.
 */
export function ServicesProcess() {
  const railRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(Math.max(-rect.top / total, 0), 1);
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="process" className="bg-cream py-12 xl:py-24">
      <div className="container group/section mx-auto flex max-w-7xl flex-col gap-6 px-4 lg:items-center lg:px-8 xl:gap-12">
        <div className="flex flex-col items-start gap-3.5 lg:items-center">
          <SectionBadge label="Our SaaS Design Process" />
          <p className="text-start text-4xl font-semibold leading-[100%] text-gray-900 lg:text-center lg:text-5xl">
            Our UI/UX Design Process
            <br className="hidden sm:flex" />
            <span className="font-playfair relative inline-block transition-[transform,color] duration-300 ease-out after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 group-hover/section:-translate-y-1 group-hover/section:text-brand">
              {" "}
              Make Complex Products
            </span>{" "}
            Simple.
          </p>
          <p className="max-w-250 text-start text-base text-gray-800 md:text-lg lg:text-center lg:text-xl">
            A clear product experience does not happen by accident. Our UI/UX
            design process combines research, strategy, wireframing, interface
            design, prototyping, and usability refinement to turn complex product
            ideas into clean, conversion-focused user experiences.
          </p>
        </div>

        <div ref={sectionRef} className="relative flex w-full flex-row items-start gap-6">
          <div className="sticky top-28 hidden flex-col items-center self-start lg:flex">
            <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-brand">
              <ProcessConeIcon />
            </div>
            <div
              ref={railRef}
              className="relative -mt-1 h-70 w-2 overflow-hidden rounded-full bg-white"
            >
              <div
                className="absolute left-0 top-0 h-full w-full origin-top rounded-full bg-brand transition-transform duration-150 ease-out"
                style={{ transform: `scaleY(${progress})` }}
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 lg:gap-7.5">
            {serviceDesignProcessCards.map((card, i) => (
              <div
                key={card.title}
                className="lg:sticky lg:top-28"
                style={{ zIndex: i + 1 }}
              >
                <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-4 md:flex-row lg:gap-12 lg:rounded-4xl lg:p-10">
                  <div className="flex flex-col items-start gap-4">
                    <div className="rounded-full bg-brand px-4 py-1 text-lg font-medium text-white">
                      {card.step}
                    </div>
                    <div className="flex flex-col gap-2">
                      {/* the reference's arbitrary lg size carries no bundled
                          line-height, so the title falls back to `normal` */}
                      <h3 className="text-2xl font-semibold text-gray-950 lg:text-[40px] lg:leading-[normal]">
                        {card.title}
                      </h3>
                      <p className="text-base text-gray-700 lg:text-xl">
                        {card.description}
                      </p>
                      <div className="mt-4 flex flex-col gap-3">
                        <h5 className="font-manrope text-lg font-bold text-gray-950 lg:text-2xl">
                          Task Included
                        </h5>
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 lg:text-xl"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    width={208}
                    height={208}
                    className="h-40 w-40 shrink-0 lg:h-52 lg:w-52"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="self-center">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand px-4 py-2.5 text-white md:px-6 md:py-4"
          >
            <span className="relative z-10 text-base md:text-xl">
              Book a UI/UX Strategy Call
            </span>
            <span className="relative z-10 shrink-0 transition-transform duration-500 group-hover:rotate-45">
              <ArrowIcon />
            </span>
            <span className="absolute -left-40 -top-40 h-[200px] w-[65px] rotate-[30deg] rounded-full bg-white blur-[70px] group-hover:animate-buttonShine" />
          </Link>
        </div>
      </div>
    </section>
  );
}
