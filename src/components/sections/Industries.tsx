import Image from "next/image";
import { industries } from "@/data/site";
import { SectionBadge } from "@/components/ui/SectionBadge";

function IndustryShot({
  src,
  alt,
  tags,
}: {
  src: string;
  alt: string;
  tags: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <Image
        src={src}
        alt={alt}
        width={1088}
        height={816}
        className="h-auto w-full rounded-3xl transition-transform duration-500 ease-out hover:scale-105"
      />
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 lg:bottom-6 lg:left-6 lg:right-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white bg-black/30 px-1.5 py-2 text-xs font-medium text-white backdrop-blur-[30px] transition-colors duration-300 ease-out group-hover/card:bg-black/50 lg:px-4 lg:text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Industries() {
  return (
    <section id="about" className="bg-white">
      <section className="container group mx-auto flex max-w-7xl flex-col gap-4 px-4 lg:gap-12 lg:px-8">
        <div className="flex flex-col items-start gap-5">
          <SectionBadge label="Industry expertise" />
          <p className="text-3xl font-semibold leading-[100%] text-gray-950 lg:text-5xl">
            AI Solutions
            <br />
            by{" "}
            <span className="playfair-underline font-playfair">
              Industry
            </span>
          </p>
        </div>

        <div className="space-y-5 lg:space-y-12">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group/card flex flex-col gap-4 rounded-[20px] p-4 lg:gap-8 lg:rounded-[50px] lg:p-12"
              style={{ backgroundColor: industry.bg }}
            >
              <div className="flex max-w-206 flex-col gap-2">
                <h2 className="text-3xl font-bold text-gray-950 lg:text-5xl">
                  {industry.title}
                </h2>
                <p className="text-base text-gray-700 lg:text-xl">
                  {industry.description}
                </p>
              </div>

              <div className="grid grid-cols-1 justify-between gap-4 lg:grid-cols-2 lg:gap-8">
                <IndustryShot
                  src={industry.appImage}
                  alt={industry.appAlt}
                  tags={industry.appTags}
                />
                <IndustryShot
                  src={industry.webImage}
                  alt={industry.webAlt}
                  tags={industry.webTags}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
