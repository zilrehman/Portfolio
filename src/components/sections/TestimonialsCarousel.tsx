"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { carouselTestimonials } from "@/data/site";
import { QuoteMarks } from "@/components/ui/QuoteMarks";

function TestimonialArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M2.7085 10.0001C2.7085 10.3114 2.84654 10.6002 2.97726 10.817C3.11833 11.0511 3.30803 11.2927 3.51615 11.5282C3.93364 12.0008 4.47839 12.5083 5.00703 12.9673C5.53877 13.4291 6.06868 13.8543 6.46454 14.1632C6.6628 14.318 6.82819 14.4442 6.94436 14.5319C7.00246 14.5758 7.04829 14.6101 7.07981 14.6336L7.11612 14.6606L7.12575 14.6677L7.1291 14.6702C7.40701 14.8749 7.79863 14.8159 8.00335 14.5379C8.20805 14.26 8.14873 13.8688 7.87084 13.6641L7.86024 13.6562L7.82686 13.6314C7.79735 13.6094 7.75366 13.5767 7.69783 13.5345C7.58614 13.4502 7.42602 13.328 7.23365 13.1779C6.84827 12.877 6.33652 12.4663 5.82661 12.0235C5.31359 11.578 4.81667 11.1123 4.45292 10.7006C4.42992 10.6746 4.40765 10.649 4.38613 10.6238L16.6668 10.6238C17.012 10.6238 17.2918 10.344 17.2918 9.99883C17.2918 9.65366 17.012 9.37383 16.6668 9.37383L4.38825 9.37384C4.40911 9.3495 4.43067 9.32473 4.45292 9.29954C4.81667 8.88781 5.31359 8.42212 5.82661 7.97663C6.33652 7.53384 6.84826 7.12309 7.23365 6.82228C7.42601 6.67214 7.58613 6.54997 7.69783 6.4656C7.75366 6.42342 7.79734 6.39072 7.82686 6.36872L7.86023 6.34391L7.87084 6.33607C8.14873 6.13134 8.20805 5.74011 8.00334 5.4622C7.79862 5.18429 7.40701 5.12521 7.1291 5.32993L7.12575 5.33239L7.11612 5.33952L7.07981 5.36651C7.04829 5.39001 7.00246 5.42432 6.94436 5.46821C6.82819 5.55597 6.66279 5.68216 6.46453 5.83691C6.06868 6.14589 5.53877 6.57107 5.00702 7.03282C4.47838 7.49188 3.93364 7.99936 3.51615 8.47192C3.30803 8.70748 3.11833 8.94909 2.97726 9.1831C2.84733 9.39866 2.71016 9.68531 2.70851 9.99447"
        fill="#030712"
      />
    </svg>
  );
}

/**
 * The inner-page testimonials block. Distinct from the homepage marquee: a
 * Swiper carousel with the non-active slides blurred back, heading in a
 * 50%/45% split beside it.
 */
export function TestimonialsCarousel() {
  return (
    <section className="overflow-x-hidden bg-cream">
      <section className="py-9 lg:py-24">
        <div className="group/card grid grid-cols-1 gap-8 lg:grid-cols-[50%_45%]">
          <div className="z-10 flex flex-col gap-4 bg-cream px-4 lg:gap-16 lg:px-8 2xl:px-0 2xl:pl-80.25">
            <div className="flex max-w-146 flex-col gap-5">
              <p className="text-4xl font-semibold leading-[100%] text-gray-950 lg:text-5xl">
                What Our
                <br /> {" "}
                <span className="font-playfair relative inline-block transition-all duration-300 ease-out after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 group-hover/card:text-brand">
                  Clients Say
                </span>
              </p>
              <p className="text-lg text-gray-950 lg:text-2xl">
                Teams that chose Zyvarex to build, integrate, and
                scale their AI.
              </p>
            </div>
            <a href="https://clutch.co/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/clutch-widget.svg"
                alt="Clutch reviews"
                width={200}
                height={97}
              />
            </a>
          </div>

          <div className="z-5 overflow-hidden">
            <Swiper
              modules={[Navigation]}
              slidesPerView="auto"
              centeredSlides={false}
              navigation={{
                prevEl: ".testimonial-prev",
                nextEl: ".testimonial-next",
              }}
              className="!overflow-visible"
            >
              {carouselTestimonials.map((t) => (
                <SwiperSlide
                  key={t.name}
                  className="px-4 transition-all duration-500 [&:not(.swiper-slide-active)]:opacity-35 [&:not(.swiper-slide-active)]:blur-xs lg:!w-112.5 lg:px-0"
                >
                  <div className="flex min-h-120 max-w-125 flex-col justify-between gap-4 rounded-3xl bg-white p-4 lg:min-h-151 lg:gap-24 lg:p-10">
                    <div className="flex flex-col gap-4 lg:gap-12">
                      <div className="flex flex-row items-start justify-between">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={300}
                          height={300}
                          className="h-20 w-20 rounded-full object-cover lg:h-30 lg:w-30"
                        />
                        <QuoteMarks />
                      </div>
                      <p className="text-lg text-gray-700">{t.quote}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-2xl font-semibold text-gray-950 lg:text-3xl">
                        {t.name}
                      </p>
                      <p className="text-base text-gray-700">{t.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-5 hidden items-center gap-3 lg:flex">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="testimonial-prev flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-950 text-gray-950"
              >
                <TestimonialArrow />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className="testimonial-next flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-950 text-gray-950"
              >
                <span className="rotate-180">
                  <TestimonialArrow />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
