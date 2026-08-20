"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { desktopNavLinks } from "@/data/site";
import { CRTText } from "@/components/ui/CRTText";

/** Bottom-dock glyphs, transcribed from the reference (640 viewBox set). */
function NavIcon({ type }: { type: string }) {
  if (type === "about") {
    return (
      <svg width="24" height="24" viewBox="0 0 640 640" aria-hidden>
        <path
          fill="white"
          d="M192 112C183.2 112 176 119.2 176 128L176 512C176 520.8 183.2 528 192 528L272 528L272 448C272 430.3 286.3 416 304 416L336 416C353.7 416 368 430.3 368 448L368 528L448 528C456.8 528 464 520.8 464 512L464 128C464 119.2 456.8 112 448 112L192 112zM128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM224 176C224 167.2 231.2 160 240 160L272 160C280.8 160 288 167.2 288 176L288 208C288 216.8 280.8 224 272 224L240 224C231.2 224 224 216.8 224 208L224 176zM368 160L400 160C408.8 160 416 167.2 416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160zM224 304C224 295.2 231.2 288 240 288L272 288C280.8 288 288 295.2 288 304L288 336C288 344.8 280.8 352 272 352L240 352C231.2 352 224 344.8 224 336L224 304zM368 288L400 288C408.8 288 416 295.2 416 304L416 336C416 344.8 408.8 352 400 352L368 352C359.2 352 352 344.8 352 336L352 304C352 295.2 359.2 288 368 288z"
        />
      </svg>
    );
  }
  if (type === "services") {
    return (
      <svg width="24" height="24" viewBox="0 0 640 640" aria-hidden>
        <path
          fill="white"
          d="M233.1 81.3C247.8 70.3 267.2 64 288 64C308.8 64 328.2 70.3 342.9 81.3C357.6 92.3 368 108.6 368 128C368 147.5 357.4 163.9 342.7 174.8C337.5 178.6 336 182.5 336 184.8C336 188.8 339.2 192 343.2 192L400 192C426.5 192 448 213.5 448 240L448 296.8C448 300.8 451.2 304 455.2 304C457.5 304 461.3 302.4 465.2 297.3C476.2 282.6 492.6 272 512 272C531.4 272 547.8 282.5 558.7 297.1C569.6 311.7 576 331.2 576 352C576 372.8 569.7 392.2 558.7 406.9C547.7 421.6 531.4 432 512 432C492.5 432 476.1 421.4 465.2 406.7C461.4 401.5 457.5 400 455.2 400C451.2 400 448 403.2 448 407.2L448 528C448 554.5 426.5 576 400 576L343.2 576C321.5 576 304 558.5 304 536.8C304 520.6 313.9 508.4 323.6 501.2C332.2 494.8 336 487.1 336 480C336 472.9 332.2 465.3 323.7 458.9C315.2 452.5 302.5 448 288 448C273.5 448 260.9 452.4 252.3 458.9C243.7 465.4 240 472.9 240 480C240 487.1 243.8 494.8 252.4 501.2C262.1 508.4 272 520.6 272 536.8C272 558.5 254.5 576 232.8 576L112 576C85.5 576 64 554.5 64 528L64 407.2C64 385.5 81.5 368 103.2 368C119.4 368 131.6 377.9 138.8 387.6C145.2 396.2 152.9 400 160 400C167.1 400 174.7 396.2 181.1 387.7C187.5 379.2 192 366.5 192 352C192 337.5 187.6 324.9 181.1 316.3C174.6 307.7 167.1 304 160 304C152.9 304 145.2 307.8 138.8 316.4C131.6 326.1 119.4 336 103.2 336C81.6 336 64 318.5 64 296.8L64 240C64 213.5 85.5 192 112 192L232.8 192C236.8 192 240 188.8 240 184.8C240 182.5 238.4 178.7 233.3 174.8C218.6 163.8 208 147.4 208 128C208 108.6 218.5 92.2 233.1 81.3z"
        />
      </svg>
    );
  }
  if (type === "contact") {
    return (
      <svg width="24" height="24" viewBox="0 0 640 640" aria-hidden>
        <path
          fill="white"
          d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"
        />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 640 640" aria-hidden>
      <path
        fill="white"
        d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z"
      />
    </svg>
  );
}

const mobileLinks = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about-us", icon: "about" },
  { label: "Services", href: "/services", icon: "services" },
  { label: "Contact", href: "/contact", icon: "contact" },
];

export function MobileNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed bottom-0 left-1/2 z-1000 flex w-full -translate-x-1/2 items-center justify-center transition-all duration-500 lg:pb-5 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      {/* Mobile — 5 columns, black bar */}
      <div className="grid w-full grid-cols-5 gap-0 rounded-t-xl bg-black lg:hidden">
        {mobileLinks.slice(0, 2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="pointer-events-auto flex w-full flex-col items-center gap-2 p-2 py-3 text-xs text-white"
          >
            <NavIcon type={link.icon} />
            {link.label}
          </Link>
        ))}
        <div className="relative">
          <Link
            href="/contact"
            className="pointer-events-auto absolute -top-4 right-2 flex w-16.25 flex-col items-center gap-2 overflow-hidden rounded-[10px] text-2xl text-white"
          >
            <Image
              src="/assets/projectIcon.png"
              alt="projectIcon"
              width={1024}
              height={1024}
              className="w-full rounded-[10px]"
            />
          </Link>
        </div>
        {mobileLinks.slice(2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="pointer-events-auto flex w-full flex-col items-center gap-2 p-2 py-3 text-xs text-white"
          >
            <NavIcon type={link.icon} />
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop — white pill dock */}
      <div className="pointer-events-auto hidden w-fit items-center gap-2.5 rounded-2xl border border-[#E5E7EB] bg-white p-3 drop-shadow-2xl lg:flex">
        {desktopNavLinks.slice(0, 2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex h-15 min-w-31 max-w-31 cursor-pointer items-center justify-center rounded-xl border border-[#E5E7EB] bg-white py-4 text-center text-lg font-medium text-black hover:bg-[#F3F4F6]"
          >
            <CRTText text={link.label} className="nav-wave" />
          </Link>
        ))}

        <Link
          href="/contact"
          className="group relative flex h-15 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#4539D2] px-8 py-4 text-center text-lg text-white"
        >
          <span className="flex items-center gap-3">
            {/* typographic mark, boxed to the 19x28 footprint the icon had so
                the button keeps its exact content-driven width */}
            <span
              aria-hidden
              className="flex h-7 w-[19px] shrink-0 items-center justify-center text-xl font-bold leading-none text-white"
            >
              P
            </span>
            <CRTText text="Start A Project" className="nav-wave" />
          </span>
          <span className="absolute -left-40 -top-40 h-50 w-16.25 animate-buttonShine rounded-full bg-white blur-[70px] rotate-[30deg]" />
        </Link>

        {desktopNavLinks.slice(2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex h-15 min-w-31 max-w-31 cursor-pointer items-center justify-center rounded-xl border border-[#E5E7EB] bg-white py-4 text-center text-lg font-medium text-black hover:bg-[#F3F4F6]"
          >
            <CRTText text={link.label} className="nav-wave" />
          </Link>
        ))}
      </div>
    </div>
  );
}
