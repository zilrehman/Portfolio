import Image from "next/image";
import Link from "next/link";
import { FOOTER_LOGO_SRC } from "@/data/branding";
import {
  footerOffices,
  footerLegalLinks,
  footerQuickLinks,
  footerReviewLinks,
  footerServiceLinks,
  footerSocialLinks,
  heroPlatformIcons,
} from "@/data/site";
import { FooterLink } from "@/components/ui/FooterLink";
import { ArrowIcon } from "@/components/ui/icons";
import {
  BahrainFlagIcon,
  FooterLocationPinIcon,
  FooterPhoneIcon,
  PakistanFlagIcon,
  SocialIcon,
  UkFlagIcon,
} from "@/components/ui/BrandIcons";

function OfficeFlag({ flag }: { flag: string }) {
  if (flag === "pk") return <PakistanFlagIcon />;
  if (flag === "bh") return <BahrainFlagIcon />;
  return <UkFlagIcon />;
}

export function Footer() {
  return (
    <footer className="relative pb-27 pt-8 md:pb-30 md:pt-16">
      <Image
        src="/assets/footer-gradient.svg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-center"
        aria-hidden
      />

      <div className="container mx-auto flex max-w-330 flex-col gap-6 px-4 lg:gap-16 lg:px-8">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-10">
          <Link href="/">
            <Image
              src={FOOTER_LOGO_SRC}
              alt="Zyvarex logo"
              width={1216}
              height={339}
              className="h-30 w-auto md:h-85"
            />
          </Link>

          <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row lg:gap-0">
            <div className="flex max-w-173.25 flex-col items-center gap-3 md:items-start">
              <span className="text-center text-base font-normal text-gray-50 md:text-start md:text-xl">
                Build Beyound Possible
              </span>
              <div className="flex items-center gap-4">
                {heroPlatformIcons.map((icon) => (
                  <div key={icon.alt} className="group relative">
                    <a href={icon.href} target="_blank" rel="noreferrer">
                      <Image
                        src={icon.image}
                        alt={icon.alt}
                        width={40}
                        height={40}
                        className={`h-10 w-10 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 ${
                          icon.rounded ? "rounded-full" : ""
                        }`}
                      />
                    </a>
                    <div className="pointer-events-none absolute bottom-[120%] left-1/2 z-20 mt-3 hidden -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100 md:block">
                      <div className="relative whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs text-white shadow-lg">
                        {icon.label}
                        <div className="absolute -bottom-3 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto">
              <Link
                href="/contact"
                className="group relative flex w-full cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand px-4 py-2.5 text-white md:px-6 md:py-4"
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
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Company
            </h4>
            <div className="flex flex-col gap-4">
              {footerQuickLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  external={link.href.startsWith("http")}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Build
            </h4>
            <div className="flex flex-col gap-4">
              {footerServiceLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Resources
            </h4>
            <div className="flex flex-col gap-4">
              {footerReviewLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  external={link.href.startsWith("http")}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {footerOffices.map((office) => (
            <div
              key={office.country}
              className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-black/50 p-7 transition-[transform,border-color,background-color] duration-500 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-black/60"
            >
              <div className="flex flex-row items-center gap-3">
                <div className="shrink-0">
                  <OfficeFlag flag={office.flag} />
                </div>
                <p className="text-[24px] font-semibold text-white">
                  {office.country}
                </p>
              </div>
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-row gap-2.5">
                  <div className="shrink-0">
                    <FooterLocationPinIcon />
                  </div>
                  <p className="text-base font-normal text-gray-200">
                    {office.address}
                  </p>
                </div>
                <a
                  href={office.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer flex-row gap-2.5"
                >
                  <div className="shrink-0">
                    {office.whatsapp ? (
                      <Image
                        src="/assets/whatsapp-footer.svg"
                        alt="whatsapp icon"
                        width={30}
                        height={30}
                        className="h-5 w-5"
                      />
                    ) : (
                      <FooterPhoneIcon />
                    )}
                  </div>
                  <p className="text-base font-normal text-gray-200">
                    {office.phone}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 px-0 pt-8 md:flex-row md:gap-0 lg:px-8">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <p className="text-center text-base font-normal text-white md:text-start">
              © {new Date().getFullYear()} Zyvarex, Inc.
            </p>
            <div className="flex flex-row gap-4">
              {footerLegalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base font-normal text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-center gap-4.25 md:justify-start">
            {footerSocialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                <SocialIcon type={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
