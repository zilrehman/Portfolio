"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { servicesList, type ServiceListItem } from "@/data/services-page";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SeeMoreArrowIcon } from "@/components/ui/icons";

function ServiceCopy({
  item,
  compact = false,
}: {
  item: ServiceListItem;
  /** The mobile copy block is width-capped and sits tighter to the text. */
  compact?: boolean;
}) {
  return (
    <>
      <h2 className="font-manrope text-2xl font-semibold leading-none text-gray-950 lg:text-[32px]">
        {item.title}{" "}
        <span className="font-playfair italic">{item.tags.join(" ")}</span>
      </h2>
      <div className="bg-gradient-to-r from-[#D1D5DB] to-white p-0" />
      <p
        className={`font-manrope text-sm font-normal text-black lg:text-base ${
          compact ? "max-w-125 lg:max-w-full" : ""
        }`}
      >
        {item.desc}
      </p>
      <div
        className={`group flex items-center gap-2 lg:mt-6 ${
          compact ? "mt-2" : "mt-4"
        }`}
      >
        <Link
          href={item.href}
          className="relative font-manrope text-base font-bold text-brand after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 group-hover:after:scale-x-100"
        >
          {item.href.startsWith("/services/")
            ? "See More"
            : "Book a Free Discovery Call"}
        </Link>
        <span className="transition-transform duration-300 group-hover:translate-x-1.5">
          <SeeMoreArrowIcon />
        </span>
      </div>
    </>
  );
}

export function ServicesPageList() {
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const blocks = blockRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!blocks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const idx = blocks.indexOf(visible[0].target as HTMLDivElement);
          if (idx >= 0) setActive(idx);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    blocks.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white px-0 pb-8 pt-12 sm:px-8 md:pb-16 md:pt-16 lg:pb-24 lg:pt-24">
      <section className="container group/card mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:items-start lg:gap-0">
          <div className="flex flex-col items-start gap-3.5">
            <SectionBadge label="What we build" />
            <p className="font-manrope text-4xl font-semibold text-gray-950 lg:text-5xl">
              All AI Development{" "}
              <span className="font-playfair italic relative inline-block transition-all duration-300 ease-out after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 group-hover/card:text-brand">
                Packages
              </span>
            </p>
            <p className="max-w-234 font-manrope text-base font-normal text-gray-800 sm:text-lg lg:text-xl">
              Productized AI packages with fixed pricing, defined timelines, and a
              team of 100+ engineers who have shipped 800+ projects. Start as small
              as $3,000 and scale from there.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4.5 lg:grid-cols-3">
            {/* Sticky copy panel — desktop only */}
            <div className="col-span-1 hidden lg:sticky lg:top-2 lg:flex lg:self-start">
              <div className="relative h-100 w-full overflow-hidden rounded-[30px] bg-white">
                {servicesList.map((item, i) => (
                  <div
                    key={item.title}
                    className={`group absolute inset-0 flex flex-col items-start justify-center gap-2.5 px-0 duration-800 ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <ServiceCopy item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Scrolling image pairs */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex flex-col gap-6 lg:gap-0">
                {servicesList.map((item, i) => (
                  <div
                    key={item.title}
                    ref={(el) => {
                      blockRefs.current[i] = el;
                    }}
                    className="flex flex-col items-center duration-300 lg:min-h-[calc(100vh-40rem)] lg:justify-center"
                  >
                    <div className="flex w-full flex-col gap-2 lg:hidden">
                      <ServiceCopy item={item} compact />
                    </div>

                    <div className="grid grid-cols-2 justify-center gap-4 py-6 lg:gap-6 lg:py-10">
                      <div className="bg-white">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={400}
                          height={533}
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-16 bg-white">
                        <Image
                          src={item.img1}
                          alt={item.title}
                          width={400}
                          height={533}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
