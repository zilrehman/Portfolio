"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { pricingPlans, type PricingPlan } from "@/data/site";
import { ArrowIcon, CheckCircleIcon } from "@/components/ui/icons";

const BILLING = ["Monthly", "Quarterly"] as const;

function PlanCard({ plan }: { plan: PricingPlan }) {
  const featured = plan.highlighted;

  return (
    <div className="relative">
      <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white shadow-[0_12px_16px_-4px_rgb(10_13_18/0.08)]">
        <div
          className={`flex flex-col gap-5 rounded-t-2xl p-5 ${
            featured ? "bg-gradient-to-b from-[#D9D6FE] to-white" : "bg-white"
          }`}
        >
          <div className="flex flex-col gap-2">
            <p
              className={`text-2xl font-bold ${
                featured ? "text-brand" : "text-black"
              }`}
            >
              {plan.name}
            </p>
            <p className="text-sm text-gray-800">{plan.blurb}</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-end gap-1">
              <p
                className={`text-[40px] font-bold leading-[120%] tracking-[-0.03em] ${
                  featured ? "text-brand" : "text-gray-900"
                }`}
              >
                {plan.price}
              </p>
              {plan.period && (
                <p
                  className={`text-xl font-medium ${
                    featured ? "text-brand" : "text-gray-700"
                  }`}
                >
                  {plan.period}
                </p>
              )}
            </div>
            <p className="text-base font-bold text-black">{plan.label}</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 border-b border-t border-gray-200 p-5">
          <p className="text-base font-bold text-gray-900">Features included</p>
          <div className="flex flex-col gap-3">
            {plan.features.map((feature) => (
              <div key={feature} className="flex flex-row gap-3">
                <CheckCircleIcon />
                <p className="text-sm text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center p-5">
          <Link
            href={plan.ctaHref}
            className="group/button flex cursor-pointer flex-row items-center justify-center gap-3 whitespace-nowrap rounded-xl border border-brand bg-[#EDECFB] px-8 py-4 text-brand group-hover:bg-brand group-hover:text-white"
          >
            <p className="text-lg font-medium text-brand group-hover:text-white">
              {plan.ctaLabel}
            </p>
            <span className="transition-all duration-300 group-hover/button:rotate-45">
              <ArrowIcon fill="currentColor" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<(typeof BILLING)[number]>("Monthly");
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pill, setPill] = useState({ width: 0, x: 0, opacity: 0 });

  // The reference animates a filled pill behind the active toggle label.
  useLayoutEffect(() => {
    const i = BILLING.indexOf(billing);
    const btn = btnRefs.current[i];
    const wrap = wrapRef.current;
    if (!btn || !wrap) return;

    // Measure both in the same frame of reference. `offsetLeft` is relative to
    // each element's own offsetParent, and the wrapper is itself the buttons'
    // offsetParent — mixing the two put the indicator far outside the pill.
    const measure = () => {
      const wrapRect = wrap.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setPill({
        width: btnRect.width,
        x: btnRect.left - wrapRect.left,
        opacity: 1,
      });
    };

    measure();
    // label widths shift once the webfont swaps in
    document.fonts?.ready.then(measure).catch(() => {});
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [billing]);

  return (
    <section className="bg-desert-storm py-8 lg:py-24">
      <div className="container mx-auto flex max-w-7xl flex-col gap-12 px-4 lg:px-8">
        <div className="flex flex-col items-center gap-13.5">
          <div className="flex flex-col gap-2 lg:items-center">
            <h2 className="text-4xl font-extrabold text-gray-950 md:text-center lg:text-5xl">
              Pick Your <span className="font-playfair">Starting</span>
            </h2>
            <h2 className="text-4xl font-extrabold text-gray-950 md:text-center lg:text-5xl">
              Point
            </h2>
          </div>

          <div className="relative flex flex-col items-center gap-6">
            <div className="absolute -top-9 left-[54%] z-20 rounded-lg bg-[#17B26A] px-3 py-2 text-sm font-semibold text-white">
              Save 20%
              <div className="absolute -bottom-1 left-10 h-3 w-3 rotate-45 bg-[#17B26A]" />
            </div>

            <div
              ref={wrapRef}
              className="relative flex flex-row gap-1.5 rounded-full bg-white p-1.5 shadow-[0_0_12px_0_rgba(0,0,0,0.08)]"
            >
              <div
                className="absolute bottom-1.5 left-0 top-1.5 rounded-full bg-brand transition-all duration-300 ease-out"
                style={{
                  width: pill.width,
                  transform: `translateX(${pill.x}px)`,
                  opacity: pill.opacity,
                }}
              />
              {BILLING.map((option, i) => (
                <button
                  key={option}
                  type="button"
                  ref={(el) => {
                    btnRefs.current[i] = el;
                  }}
                  onClick={() => setBilling(option)}
                  className={`relative z-10 cursor-pointer rounded-full px-6 py-2 text-xl font-semibold transition-colors duration-300 ${
                    billing === option ? "text-white" : "text-gray-900"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <p className="text-xl text-gray-800">
              Not sure which path? Book a free discovery call and we will help you
              figure it out.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
