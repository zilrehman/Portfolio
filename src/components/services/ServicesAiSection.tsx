import Image from "next/image";
import Link from "next/link";
import { aiCards } from "@/data/services-page";

export function ServicesAiSection() {
  return (
    <section className="relative z-10 -mt-10 overflow-hidden rounded-t-[50px] bg-cream px-4 xl:px-8 2xl:px-0">
      <section className="container mx-auto max-w-7xl space-y-10 pb-10 pt-12 md:pb-12 md:pt-12 lg:pt-24">
        <div className="flex flex-col items-center gap-3">
          <p className="text-center text-3xl font-semibold leading-[120%] text-gray-950 md:text-4xl lg:text-5xl">
            AI-Enhanced Design,{" "}
            <span className="font-playfair italic">Built for Impact</span>
          </p>
          <p className="max-w-216 text-center font-manrope text-base text-gray-800 lg:text-xl">
            We use intelligent tools to accelerate workflows, create custom
            visuals, and make informed design decisions that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col items-center justify-center gap-4 rounded-4xl bg-white p-4 md:col-span-2 md:flex-row lg:items-center">
            <Image
              src="/images/services/ai/ServiceCardImg1.png"
              alt=""
              width={449}
              height={477}
            />
            <div className="flex flex-col items-center justify-center gap-3.5 px-4">
              <Image
                src="/images/services/ai/ServiceCardLogo.svg"
                alt=""
                width={83}
                height={110}
              />
              <div className="flex flex-col gap-3 lg:gap-5">
                <h5 className="text-center font-rubik text-lg font-medium text-black lg:text-xl">
                  AI-Powered Experiences
                </h5>
                <p className="text-center font-inter text-xs font-normal text-black lg:text-sm">
                  Transform ideas into polished digital products using intelligent
                  tools, faster workflows, and thoughtful human-led design.
                </p>
                <Link
                  href="#process"
                  className="mx-auto rounded-4xl bg-black px-8 py-3 text-center font-rubik text-base font-medium text-white"
                >
                  Explore Our Process
                </Link>
              </div>
            </div>
          </div>

          {aiCards.map((card) => (
            <div key={card.src} className="rounded-4xl bg-white p-4">
              <Image
                src={card.src}
                alt=""
                width={card.width}
                height={card.height}
                className="mx-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
