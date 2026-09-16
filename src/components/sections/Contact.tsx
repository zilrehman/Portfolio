import Image from "next/image";
import Link from "next/link";
import {
  CALENDLY_URL,
  SITE_OWNER,
  SITE_OWNER_IMAGE,
  SITE_OWNER_TITLE,
} from "@/data/branding";
import { CONTACT_VIDEO_URL } from "@/data/site";
import { ContactForm } from "@/components/contact/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="bg-cream">
      <div className="container mx-auto max-w-7xl px-4 pb-6 pt-6 lg:pb-24 lg:pt-24 xl:px-8 2xl:px-0">
        <section className="relative flex h-full w-full items-center overflow-hidden rounded-[20px] bg-neutral-900 px-4 py-8 md:px-12 md:py-18 lg:rounded-[56px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 h-full w-full object-cover"
            aria-hidden
          >
            <source src={CONTACT_VIDEO_URL} type="video/mp4" />
          </video>

          <div className="container relative mx-auto grid grid-cols-1 gap-10 py-4 md:grid-cols-2 lg:max-w-8xl lg:py-0">
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-semibold leading-[112%] text-white lg:text-[50px]">
                  Your{" "}
                  <span className="font-playfair inline-block transition-all duration-300 ease-out hover:-translate-x-1">
                    Competitors
                  </span>
                  <br />
                  Are <span className="font-playfair">Already</span> Shipping AI
                </h2>
                <p className="text-lg leading-normal text-white lg:text-xl">
                  The cost of waiting is higher than the cost of starting. Book a
                  free discovery call, and in 30 minutes we will map out exactly
                  where AI fits your business.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Image
                  src={SITE_OWNER_IMAGE}
                  alt={SITE_OWNER}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-[20px] font-semibold text-white">
                    {SITE_OWNER}
                  </h2>
                  <span className="text-[14px] font-normal text-white">
                    {SITE_OWNER_TITLE}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end justify-end">
              <div className="w-full rounded-2xl bg-white p-4 lg:rounded-4xl lg:p-10">
                <ContactForm variant="home" />
              </div>

              <div className="mt-5 w-full max-w-145 text-center text-white lg:-mr-5 lg:mt-3 lg:min-w-145 lg:text-start">
                30-minute call. No commitment.{" "}
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-white font-bold"
                >
                  Book a Free Call
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
