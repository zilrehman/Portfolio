"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CALENDLY_URL, SITE_EMAIL, SITE_OWNER_IMAGE } from "@/data/branding";
import { pricingFaqs } from "@/data/services-page";
import { ArrowIcon, MailRoundIcon } from "@/components/ui/icons";
import { useIsMobile } from "@/hooks/useMediaQuery";

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      data-state={open ? "open" : "closed"}
      className="overflow-hidden rounded-xl bg-transparent"
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          data-state={open ? "open" : "closed"}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-1 px-3 py-4 text-left font-manrope text-lg font-bold text-black outline-none sm:px-6 lg:text-xl"
        >
          <span>{question}</span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-100 transition-transform duration-300 group-data-[state=open]:rotate-90 lg:h-10 lg:w-10">
            <ArrowIcon fill="black" />
          </span>
        </button>
      </h3>
      <div
        role="region"
        data-state={open ? "open" : "closed"}
        hidden={!open}
        className="accordion-content"
      >
        <p className="px-3 pb-4 font-manrope text-base font-normal text-gray-700 sm:px-6">
          {answer}
        </p>
      </div>
      <div className="border border-gray-200 bg-gray-100" />
    </div>
  );
}

export function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <section className="bg-cream py-8 xl:py-24">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="flex flex-col gap-8 xl:gap-16">
          <div className="flex flex-col gap-3 xl:gap-5">
            <p className="font-manrope text-4xl font-semibold leading-[100%] text-black xl:text-5xl">
              Your <span className="font-playfair">UI/UX Questions, </span>
              Answered Clearly
            </p>
            <p className="font-manrope text-base font-normal text-gray-800 md:text-lg lg:text-xl xl:text-2xl">
              Not sure where to start with your product design or redesign project?
              Reach out we&rsquo;ll talk through it.
            </p>
          </div>

          <div className="rounded-2xl bg-[linear-gradient(344.49deg,rgba(218,187,253,0.58)_2.45%,rgba(237,237,237,0.58)_61.47%)] p-px lg:rounded-4xl">
            <div className="flex flex-col gap-4 rounded-2xl p-4 backdrop-blur-[10px] lg:gap-8 lg:rounded-4xl xl:p-8">
              <Image
                src={SITE_OWNER_IMAGE}
                alt="ceo image"
                width={96}
                height={96}
                className="h-24 w-24 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="font-manrope text-2xl font-semibold text-black xl:text-3xl">
                  Book a UI/UX Strategy Call
                </p>
                <p className="font-manrope text-base font-normal text-gray-800 xl:text-lg">
                  Talk to us about your product goals, current design challenges,
                  timeline, and what you want users to do next. We&rsquo;ll help
                  you choose the right UX direction before you invest in design.
                </p>
              </div>
              <div>
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex w-fit cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand px-4 py-2.5 text-white md:px-6 md:py-4"
                >
                  <span className="relative z-10 text-base md:text-xl">
                    Book a Call
                  </span>
                  <span className="relative z-10 shrink-0 transition-transform duration-500 group-hover:rotate-45">
                    <ArrowIcon />
                  </span>
                  <span className="absolute -left-40 -top-40 h-[200px] w-[65px] rotate-[30deg] rounded-full bg-white blur-[70px] group-hover:animate-buttonShine" />
                </Link>
              </div>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="flex flex-row items-center gap-3 lg:gap-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white lg:h-14 lg:w-14">
                  <MailRoundIcon
                    width={isMobile ? 24 : 32}
                    height={isMobile ? 24 : 32}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-manrope text-base font-normal text-black xl:text-xl">
                    Prefer email communication?
                  </p>
                  <p className="font-manrope text-lg font-semibold text-black xl:text-2xl">
                    {SITE_EMAIL}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <section>
          <div className="flex flex-col gap-2 lg:gap-4">
            {pricingFaqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
