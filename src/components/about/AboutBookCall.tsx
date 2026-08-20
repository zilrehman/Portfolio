import Image from "next/image";
import { BookCallButton } from "@/components/ui/BookCallButton";

export function AboutBookCall() {
  return (
    <section className="bg-cream px-4 xl:px-8 2xl:px-0">
      <div className="container mx-auto max-w-7xl py-4 md:py-12">
        <div className="relative flex h-120.5 w-full flex-col items-center justify-between gap-12 overflow-hidden rounded-[16px] bg-gradient-to-b from-[#0568BF] to-[#070928] px-3 pt-8 md:flex-row md:overflow-visible md:rounded-[50px] md:px-[60px] md:py-[72px]">
          <div className="z-5 flex flex-col items-center justify-center space-y-7 md:items-start md:justify-start">
            <p className="text-center text-[32px] font-semibold leading-[120%] text-white md:text-start lg:text-[48px]">
              Got a product idea? <br />
              <span className="font-playfair text-white"> Let&rsquo;s design it..</span>
            </p>
            <BookCallButton variant="white" className="z-5" />
          </div>

          <Image
            src="/images/about/book-call-bg.png"
            alt="book call"
            width={1572}
            height={964}
            className="absolute bottom-0 -right-6 z-0 block h-120.5 w-100 rounded-r-[50px] object-cover object-bottom lg:w-[60%]"
          />
        </div>
      </div>
    </section>
  );
}
