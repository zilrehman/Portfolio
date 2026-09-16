import Image from "next/image";
import Link from "next/link";
import { uiProblems } from "@/data/services-page";
import type { DetailHeading } from "@/data/detail-pages";
import { CRTText } from "@/components/ui/CRTText";
import { ArrowIconSmall, StarIcon } from "@/components/ui/icons";

/** Icons stay fixed; only the copy varies between pages. */
const PROBLEM_ICONS = uiProblems.map((p) => p.icon);

const DEFAULT_HEADING: DetailHeading = {
  topStart: "You Want",
  topHighlight: "AI",
  topEnd: " in Your Business.",
  bottomStart: "You Just Need the",
  bottomHighlight: "Right Partner",
  bottomEnd: ".",
};

export function ServicesProblems({
  heading = DEFAULT_HEADING,
  sub = "Sound familiar?",
  items = uiProblems.map(({ title, description }) => ({ title, description })),
  ctaLabel = "See All Packages",
  ctaHref = "/#services",
}: {
  heading?: DetailHeading;
  sub?: string;
  items?: { title: string; description: string }[];
  ctaLabel?: string;
  ctaHref?: string;
} = {}) {
  return (
    <section className="bg-cream">
      <section className="px-4 md:pt-16">
        <div className="relative overflow-hidden rounded-[50px] px-0 py-10 md:px-8 md:py-12 lg:px-12 lg:py-18">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden
          >
            <source src="/videos/ui-problem-bg.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
              <div className="flex flex-col gap-10 sm:gap-12 md:gap-12 lg:gap-16">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row lg:gap-10">
                  <div className="flex flex-col gap-3 text-center sm:gap-4 md:text-left">
                    <div className="text-3xl md:text-4xl lg:text-[50px]">
                      <p className="font-manrope font-semibold leading-[120%] text-white">
                        {heading.topStart ? `${heading.topStart} ` : ""}
                        <span className="font-playfair italic">
                          {heading.topHighlight}
                        </span>
                        {heading.topEnd}
                      </p>
                      <p className="font-manrope font-semibold leading-[120%] text-white">
                        {heading.bottomStart ? `${heading.bottomStart} ` : ""}
                        <span className="font-playfair italic">
                          {heading.bottomHighlight}
                        </span>
                        {heading.bottomEnd}
                      </p>
                    </div>
                    {/* reference writes `ld:text-xl` here, which is not a
                        breakpoint — so the size stops at md. Matched as rendered. */}
                    <p className="font-manrope text-sm font-normal text-white md:text-base">
                      {sub}
                    </p>
                  </div>
                  <Link
                    href={ctaHref}
                    className="group flex cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-brand px-6 py-3 md:px-8 md:py-4"
                  >
                    <CRTText
                      text={ctaLabel}
                      className="text-base font-medium text-white"
                    />
                    <ArrowIconSmall />
                  </Link>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent p-px text-center" />

                <div className="grid gap-12 lg:grid-cols-2">
                  <div className="relative flex justify-center">
                    <Image
                      src="/images/services/problems/mobilephone.png"
                      alt=""
                      width={346}
                      height={601}
                    />
                    <Image
                      src="/images/services/problems/Emoji.png"
                      alt=""
                      width={81}
                      height={81}
                      className="absolute -left-2 -top-6 w-15 sm:left-[20%] sm:w-20 md:left-[20%] lg:left-1 xl:left-18"
                    />
                    <div className="absolute right-[-4%] top-26 flex h-14 w-14 items-center justify-center rounded-full bg-[#1C6DF2] px-4.25 py-2.75 sm:right-[12%] sm:top-26 sm:h-25 sm:w-25 md:right-[12%] md:top-21 lg:-right-16 lg:top-32 xl:right-8 xl:top-23">
                      <svg width="47" height="44" viewBox="0 0 47 44" fill="none" aria-hidden>
                        <path
                          d="M23.5 43.5C11.35 43.5 1.5 34.72 1.5 23.9C1.5 13.08 11.35 4.3 23.5 4.3C35.65 4.3 45.5 13.08 45.5 23.9C45.5 34.72 35.65 43.5 23.5 43.5Z"
                          fill="white"
                          opacity="0.001"
                        />
                        <path
                          d="M14.6 15.4c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.9-2.9 2.9-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9zm17.8 0c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.9-2.9 2.9-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9zM23.5 36.6c-5.6 0-10.4-3.4-12.5-8.2-.4-.9.1-1.9 1-2.2.9-.4 1.9.1 2.2 1 1.6 3.7 5.2 6.2 9.3 6.2s7.7-2.5 9.3-6.2c.4-.9 1.4-1.3 2.2-1 .9.4 1.3 1.4 1 2.2-2.1 4.8-6.9 8.2-12.5 8.2z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="absolute -left-4 bottom-16 flex items-center justify-start gap-2 rounded-[117px] bg-white px-3 py-2 sm:bottom-22 sm:left-10 sm:gap-3.5 sm:px-4 sm:py-3 md:left-16 lg:-left-12 xl:left-0">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} size={30} />
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 flex flex-col justify-center gap-6 sm:mt-0 md:gap-11">
                    {items.map((problem, i) => (
                      <div
                        key={problem.title}
                        className="flex items-start gap-3 sm:gap-7.5"
                      >
                        <Image
                          src={PROBLEM_ICONS[i % PROBLEM_ICONS.length]}
                          alt=""
                          width={68}
                          height={68}
                          className="w-9 sm:w-17"
                        />
                        <div className="flex flex-col gap-2 sm:gap-3.5">
                          <h6 className="font-manrope text-lg font-semibold text-white sm:text-xl md:text-2xl">
                            {problem.title}
                          </h6>
                          <p className="font-manrope text-xs font-normal text-gray-200 sm:text-sm md:text-lg">
                            {problem.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
