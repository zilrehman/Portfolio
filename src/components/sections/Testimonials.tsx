"use client";

import Image from "next/image";
import { lowerTestimonials, upperTestimonials, type Testimonial } from "@/data/site";
import { Marquee } from "@/components/ui/Marquee";
import { UpworkBadge, FiverrBadge, ClutchBadge } from "@/components/ui/BrandIcons";
import { useIsMobile } from "@/hooks/useMediaQuery";

function TestimonialCard({ testimonialText, image, imageAlt, name }: Testimonial) {
  return (
    <div className="flex max-w-125 flex-col justify-between gap-6 rounded-xl border border-gray-200 bg-white p-4 lg:gap-12 lg:rounded-3xl lg:p-8">
      <p className="line-clamp-5 text-ellipsis text-base text-gray-700 lg:text-lg">
        {testimonialText}
      </p>
      <div className="flex flex-row items-center gap-3">
        <Image
          src={image}
          alt={imageAlt}
          width={60}
          height={60}
          className="h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
        />
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold text-gray-950 md:text-lg lg:text-xl">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials({
  background = "bg-white",
}: {
  background?: string;
}) {
  const isMobile = useIsMobile();
  const badgeSize = isMobile ? 50 : 72;

  return (
    <section
      className={`${background} py-8 lg:py-24`}
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(73,57,210,0.18) 2%, #ffffff 80%)",
      }}
    >
      <div className="flex flex-col gap-12 overflow-hidden">
        <div className="container mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 lg:gap-7 lg:px-8">
          <div className="flex flex-col items-center gap-2 lg:gap-4.5">
            <p className="text-4xl font-extrabold text-gray-950 lg:text-5xl">
              What Our{" "}
              <span className="font-playfair font-semibold text-brand">
                Clients
              </span>
            </p>
            <p className="text-4xl font-extrabold text-gray-950 lg:text-5xl">
              Say
            </p>
          </div>
          <div className="flex flex-row gap-6.5">
            <UpworkBadge width={badgeSize} height={badgeSize} />
            <FiverrBadge width={badgeSize} height={badgeSize} />
            <ClutchBadge width={badgeSize} height={badgeSize} />
          </div>
        </div>

        <div className="flex w-full max-w-none flex-col gap-4 overflow-hidden">
          <Marquee speed={40}>
            <div className="mr-5 flex flex-row gap-5">
              {upperTestimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </Marquee>
          <Marquee speed={40} direction="right">
            <div className="mr-5 flex flex-row gap-5">
              {lowerTestimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
