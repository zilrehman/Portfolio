import Image from "next/image";
import Link from "next/link";
import {
  CALENDLY_URL,
  LOGO_SRC,
  SITE_OWNER_IMAGE,
  WHATSAPP_URL,
} from "@/data/branding";
import { HeroRotatingPill } from "./HeroRotatingPill";
import { HeroPlatformBadges } from "./HeroPlatformBadges";
import { CRTText } from "@/components/ui/CRTText";
import { ArrowRightIcon, StarIcon } from "@/components/ui/icons";

/**
 * Shared purple hero used by every page. The reference renders the same
 * component with props toggling the subtitle / rotating headline / review strip.
 */
export function HeroShell({
  subtitle,
  titleStart = "From",
  titleHighlight = "AI Idea",
  titleEnd = "into",
  bottomTitleStart = "to Production in",
  bottomTitleHighlight = "Weeks",
  description,
  heading,
  showTestimonials = true,
  showBadges = true,
  showButtons = true,
}: {
  subtitle?: string;
  titleStart?: string;
  titleHighlight?: string;
  titleEnd?: string;
  bottomTitleStart?: string;
  bottomTitleHighlight?: string;
  description?: string;
  heading?: React.ReactNode;
  showTestimonials?: boolean;
  showBadges?: boolean;
  showButtons?: boolean;
}) {
  return (
    <div className="container mx-auto flex max-w-7xl flex-col items-center gap-7 px-4 md:gap-16 md:px-8">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={LOGO_SRC}
          alt="Logo"
          width={172}
          height={48}
          className="h-12 w-43"
          priority
        />
        {subtitle && (
          <p className="text-xs text-white lg:text-2xl">{subtitle}</p>
        )}
      </div>

      <div
        className={`flex flex-col items-center ${description ? "gap-3" : "gap-10"}`}
      >
        {heading ?? (
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center lg:flex-row lg:gap-6">
              <span className="text-[40px] font-semibold leading-16 text-white lg:text-[72px] lg:leading-21.5">
                {titleStart}{" "}
                {/* <span className="font-playfair">{titleHighlight}</span> */}
              </span>
              <HeroRotatingPill />
            </div>
            <span className="text-center text-[40px] font-semibold leading-12 text-white lg:text-start lg:text-[72px] lg:leading-21.5">
              {bottomTitleStart}{" "}
              <span className="font-playfair">{bottomTitleHighlight}</span>
            </span>
          </div>
        )}

        {description && (
          <p className="max-w-208 text-center text-base text-gray-200 lg:text-xl">
            {description}
          </p>
        )}

        {showTestimonials && (
          <div className="hidden flex-row items-center gap-2.5 rounded-full bg-black/30 py-2 pl-4 pr-5 lg:flex">
            <Image
              src="/assets/Hero-testimonials.png"
              alt="Hero Testimonials"
              width={136}
              height={40}
            />
            <div className="flex flex-col gap-1">
              <div className="flex flex-row items-center gap-1.5">
                <p className="text-lg font-medium text-white">
                  What Our Clients Say
                </p>
                <ArrowRightIcon />
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-sm text-white">Rated 4.9 on Clutch</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {!showButtons ? null : (
        <div className="flex flex-col items-center gap-6 lg:gap-12">
          <div className="flex flex-col gap-3 sm:flex-row lg:gap-6">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-white px-5 py-3"
            >
              <CRTText
                text="Book a Free Discovery Call"
                className="text-base font-medium text-gray-950"
              />
              <Image
                src={SITE_OWNER_IMAGE}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-white bg-white px-5 py-3 backdrop-blur-[30px]"
            >
              <Image
                src="/assets/whatsapp-round.svg"
                alt=""
                width={28}
                height={28}
                className="h-9 w-9 rounded-full"
              />
              <CRTText
                text="Send a Message"
                className="text-base font-medium text-gray-950"
              />
            </Link>
          </div>

          {showBadges && <HeroPlatformBadges />}
        </div>
      )}
    </div>
  );
}
