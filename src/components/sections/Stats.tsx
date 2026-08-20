"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";

function StatItem({
  end,
  suffix = "",
  prefix = "",
  label,
  icon,
  index,
  duration = 2200,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: string;
  index: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * end));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, end, duration]);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 0.12}s` }}
      className={`fact-card relative z-40 flex flex-col items-center gap-4 p-4 lg:gap-5 lg:p-6 ${
        visible ? "is-visible" : ""
      }`}
    >
      <Image src={icon} alt="icon" width={64} height={64} />
      <div className="flex flex-col items-center gap-3">
        <p className="font-manrope text-4xl font-bold text-white lg:text-[42px]">
          {prefix}
          {count}
          {suffix}
        </p>
        {/* stop positions match the reference: 3.51% / 49.84% / 103.2% */}
        <div className="w-full rounded-2xl bg-[linear-gradient(to_left,rgba(18,25,41,0.2)_3.51%,rgba(255,255,255,0.2)_49.84%,rgba(18,25,41,0.2)_103.2%)] p-[0.8px]" />
        <p className="text-center font-manrope text-base font-normal text-gray-300">
          {label}
        </p>
      </div>
    </div>
  );
}

/**
 * Dark rounded stat card with two blurred brand-purple glows behind it.
 * `home` keeps the reference's tall top offset that clears the sticky services
 * panel; `about` is the plain padded variant used on inner pages.
 */
export function Stats({
  variant = "home",
  background = "bg-cream",
}: {
  variant?: "home" | "about";
  background?: string;
}) {
  return (
    <section
      className={
        variant === "about"
          ? `${background} py-12 lg:py-24`
          : `${background} flex flex-col gap-6 px-2.5 pt-4 lg:gap-16 lg:pt-70 xl:py-0`
      }
    >
      <section className="container relative mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-[40px] bg-gray-900 p-8 px-4 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.10)] lg:grid-cols-5 lg:px-8">
        <div className="absolute -right-20 -top-43 z-5 h-78 w-78 rounded-full bg-brand blur-[140px]" />
        <div className="absolute -bottom-65 -left-34 z-5 h-78 w-78 rounded-full bg-brand blur-[140px]" />
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            index={i}
            end={stat.value}
            suffix={stat.suffix}
            prefix={stat.prefix ?? ""}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </section>
    </section>
  );
}
