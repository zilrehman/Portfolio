import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { BookCallButton } from "@/components/ui/BookCallButton";

const DEFAULT_STORY = [
  "In 2024, a clear shift happened: our clients stopped asking for just software. They needed AI. Chatbots trained on their proprietary data. RAG systems that could answer questions from thousands of internal documents. AI agents that could automate multi-step business workflows.",
];

export function AboutWhoWeAre({
  paragraphs = DEFAULT_STORY,
}: {
  paragraphs?: string[];
} = {}) {
  return (
    <section className="relative z-10 -mt-10 overflow-hidden rounded-t-4xl bg-cream lg:rounded-t-[50px]">
      <section className="bg-white px-4 py-8 lg:py-24 2xl:px-0">
        <div className="container group/section mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12">
            <div className="space-y-3 md:space-y-5">
              <div className="flex flex-col items-start gap-5">
                <SectionBadge label="Our story" />
                <p className="text-[36px] font-semibold leading-[120%] text-gray-950 lg:text-[48px]">
                  Why Zyvarex Built
                  <br />
                  <span className="font-playfair relative inline-block transition-all duration-300 ease-out after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 group-hover/section:text-brand">
                    a Dedicated AI Division
                  </span>
                </p>
              </div>
              <div className="space-y-3 md:space-y-6">
                {paragraphs.map((text, i) => (
                  <p key={i} className="text-base text-gray-700 lg:text-xl">
                    {text}
                  </p>
                ))}
                <BookCallButton className="w-fit" />
              </div>
            </div>

            <div>
              <Image
                src="/images/who_we_are.png"
                alt="Mobile App Image"
                width={600}
                height={700}
                className="rounded-4xl object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
