import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { BookCallButton } from "@/components/ui/BookCallButton";

export function AboutIndustries() {
  return (
    <section className="group/section relative h-full w-full bg-black bg-[url('/img/illustrations/industry.png')] bg-top bg-no-repeat px-4 py-8 lg:py-24 xl:px-8 2xl:px-0">
      {/* decorative overlay the reference reveals on section hover */}
      <Image
        src="/images/about/ElementsWrapper.svg"
        alt="wrapper"
        fill
        sizes="100vw"
        className="hidden h-full w-full group-hover/section:block"
      />

      <div className="container relative mx-auto max-w-7xl overflow-hidden">
        <div className="mb-5 lg:mb-12">
          <div className="flex flex-col items-center gap-4 md:gap-6 lg:px-12">
            <SectionBadge label="Industry expertise" variant="white" />
            <h2 className="text-center text-[36px] font-semibold leading-[120%] text-white lg:text-start lg:text-[48px]">
              AI Solutions{" "}
              <span className="font-playfair relative inline-block transition-all duration-300 ease-out after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#8F84FF] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 group-hover/section:text-[#8F84FF]">
                by Industry
              </span>
            </h2>
            <p className="text-center text-base font-normal text-gray-300 lg:text-xl">
              We have built AI for companies in your industry. Here is what works.
            </p>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-1 gap-2.5 lg:mb-[52px] xl:grid-cols-3">
          <div className="xl:col-span-2">
            <div className="mb-2 flex flex-col gap-2.5 lg:mb-4 lg:flex-row">
              <Image
                src="/images/services/SaaS1.jpg"
                alt="SaaS"
                width={800}
                height={256}
                className="w-full rounded-3xl object-cover transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(255,255,255,0.12)] lg:h-64"
              />
              <Image
                src="/images/services/HealthcareApp.jpg"
                alt="Health Care App"
                width={800}
                height={256}
                className="w-full rounded-3xl object-cover transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(255,255,255,0.12)] lg:h-64"
              />
            </div>
            <Image
              src="/images/services/EnterpriseWeb2.jpg"
              alt="Enterprise Web"
              width={1200}
              height={600}
              className="w-full rounded-3xl object-cover transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(255,255,255,0.12)] lg:h-[600px]"
            />
          </div>
          <Image
            src="/images/services/FintechApp.jpg"
            alt="Fintech App"
            width={600}
            height={900}
            className="h-full min-h-[280px] w-full rounded-3xl object-cover transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(255,255,255,0.12)] lg:min-h-0"
          />
        </div>

        <div className="flex items-center justify-center">
          <BookCallButton />
        </div>
      </div>
    </section>
  );
}
