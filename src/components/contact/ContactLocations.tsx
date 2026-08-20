import Image from "next/image";
import Link from "next/link";
import { contactPageOffices } from "@/data/contact";
import { SectionBadge } from "@/components/ui/SectionBadge";

/** Reference paths (24px viewBox); the previous local copies were spliced. */
function LocationPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0011 22C12.6044 22 13.1841 21.773 13.6177 21.367C13.9206 21.0834 14.2311 20.7971 14.5452 20.5075C18.3609 16.9893 22.711 12.9784 20.316 7.37966C18.9126 4.09916 15.5439 2 12.0011 2C8.45834 2 5.08963 4.09916 3.68627 7.37966C1.30093 12.9556 5.603 16.9368 9.39808 20.4488C9.73246 20.7582 10.0629 21.064 10.3845 21.367C10.8182 21.773 11.3978 22 12.0011 22ZM12 14.5C13.933 14.5 15.5 12.933 15.5 11C15.5 9.067 13.933 7.5 12 7.5C10.067 7.5 8.5 9.067 8.5 11C8.5 12.933 10.067 14.5 12 14.5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6.75C9.65279 6.75 7.75 8.65279 7.75 11C7.75 13.3472 9.65279 15.25 12 15.25C14.3472 15.25 16.25 13.3472 16.25 11C16.25 8.65279 14.3472 6.75 12 6.75ZM9.25 11C9.25 9.48122 10.4812 8.25 12 8.25C13.5188 8.25 14.75 9.48122 14.75 11C14.75 12.5188 13.5188 13.75 12 13.75C10.4812 13.75 9.25 12.5188 9.25 11Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.001 1.25C8.17489 1.25 4.52456 3.51303 2.99665 7.08468C1.57469 10.4086 2.34447 13.2373 3.94723 15.6595C5.26128 17.6454 7.17786 19.4178 8.90693 21.0168C9.2366 21.3217 9.55961 21.6204 9.87017 21.9129L9.87182 21.9145C10.4468 22.4528 11.2107 22.75 12.001 22.75C12.7914 22.75 13.5553 22.4528 14.1303 21.9145C14.4238 21.6396 14.7281 21.3592 15.0385 21.0732C16.7864 19.4628 18.7299 17.672 20.0577 15.6609C21.6586 13.2362 22.4256 10.4045 21.0055 7.08468C19.4775 3.51303 15.8272 1.25 12.001 1.25ZM4.37575 7.67465C5.65457 4.68528 8.74166 2.75 12.001 2.75C15.2604 2.75 18.3475 4.68528 19.6263 7.67465C20.7984 10.4144 20.207 12.7124 18.806 14.8344C17.5884 16.6786 15.8049 18.3242 14.0516 19.9418C13.7339 20.235 13.4172 20.5272 13.1051 20.8195C12.8127 21.0932 12.4172 21.25 12.001 21.25C11.5852 21.25 11.19 21.0934 10.8977 20.8201C10.5652 20.5069 10.2275 20.1942 9.88891 19.8806C8.15804 18.2778 6.40275 16.6523 5.19817 14.8318C3.7958 12.7124 3.2022 10.4179 4.37575 7.67465Z"
        fill="black"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
      <path
        opacity="0.4"
        d="M9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.755 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9392 8.41261 21.9097 7.0282 21.5259 6L12 11L2.47411 6C2.09032 7.0282 2.0608 8.4126 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.92 2.78681C12.967 2.73773 11.033 2.73773 9.07999 2.7868L9.02182 2.78826C7.497 2.82655 6.27002 2.85735 5.2867 3.0286C4.2572 3.20789 3.42048 3.55177 2.71362 4.26132C2.00971 4.9679 1.66764 5.7926 1.49176 6.8054C1.32429 7.76978 1.29878 8.9668 1.26719 10.4496L1.26593 10.5084C1.24469 11.5047 1.24469 12.4953 1.26594 13.4916L1.26719 13.5504C1.29879 15.0332 1.32429 16.2302 1.49176 17.1946C1.66764 18.2074 2.00972 19.0321 2.71362 19.7387C3.42048 20.4482 4.2572 20.7921 5.2867 20.9714C6.27001 21.1426 7.49697 21.1735 9.02177 21.2117L9.07999 21.2132C11.033 21.2623 12.967 21.2623 14.92 21.2132L14.9782 21.2117C16.503 21.1735 17.73 21.1426 18.7133 20.9714C19.7428 20.7921 20.5795 20.4482 21.2864 19.7387C21.9903 19.0321 22.3324 18.2074 22.5082 17.1946C22.6757 16.2302 22.7012 15.0332 22.7328 13.5503L22.7341 13.4916C22.7553 12.4953 22.7553 11.5047 22.7341 10.5084L22.7328 10.4497C22.7012 8.96683 22.6757 7.76979 22.5082 6.80542C22.3324 5.79261 21.9903 4.96792 21.2864 4.26134C20.5795 3.55179 19.7428 3.20791 18.7133 3.02862C17.73 2.85737 16.503 2.82656 14.9782 2.78827L14.92 2.78681ZM9.11766 4.28633C11.0456 4.23789 12.9544 4.23789 14.8823 4.28633C16.479 4.32645 17.5947 4.35638 18.4559 4.50637C19.2835 4.65049 19.7994 4.89411 20.2237 5.31998C20.3977 5.49459 20.5405 5.68255 20.6582 5.89829L14.7173 9.26444C13.4621 9.9757 12.7003 10.25 12.0001 10.25C11.2999 10.25 10.5381 9.9757 9.28285 9.26444L3.34181 5.8982C3.4595 5.68249 3.60237 5.49455 3.77629 5.31997C4.20055 4.89409 4.71652 4.65048 5.54405 4.50636C6.40529 4.35637 7.52099 4.32644 9.11766 4.28633ZM2.92102 7.38383C2.81754 8.17564 2.79468 9.17647 2.76559 10.5404C2.7448 11.5154 2.7448 12.4846 2.7656 13.4596C2.79877 15.0152 2.82385 16.0984 2.96964 16.938C3.10923 17.7418 3.34907 18.2512 3.77629 18.68C4.20056 19.1059 4.71653 19.3495 5.54406 19.4936C6.4053 19.6436 7.521 19.6736 9.11767 19.7137C11.0456 19.7621 12.9544 19.7621 14.8823 19.7137C16.479 19.6736 17.5947 19.6436 18.4559 19.4936C19.2835 19.3495 19.7994 19.1059 20.2237 18.68C20.6509 18.2512 20.8908 17.7418 21.0304 16.938C21.1762 16.0984 21.2012 15.0152 21.2344 13.4596C21.2552 12.4846 21.2552 11.5154 21.2344 10.5404C21.2053 9.17653 21.1825 8.17574 21.079 7.38394L15.4568 10.5695C14.1635 11.3023 13.1126 11.75 12.0001 11.75C10.8876 11.75 9.83667 11.3023 8.54339 10.5695L2.92102 7.38383Z"
        fill="black"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
      <g opacity="0.4">
        <path
          d="M2.09584 7.57121C2.37185 8.93948 2.8296 10.2893 3.77762 11.9424L6.33397 9.00601C7.26736 7.93388 7.73407 7.39779 7.8027 6.73959C7.87134 6.08139 7.52529 5.46057 6.83318 4.21892L5.96 2.6524C5.57323 1.95852 4.82345 1.77638 4.16938 2.30947C2.62181 3.57081 1.68762 5.54758 2.09584 7.57121Z"
          fill="black"
        />
        <path
          d="M16.4288 21.9049C15.0605 21.6289 13.7107 21.1711 12.0576 20.2231L14.994 17.6667C16.0661 16.7333 16.6022 16.2666 17.2604 16.198C17.9186 16.1294 18.5394 16.4754 19.7811 17.1675L21.3476 18.0407C22.0415 18.4275 22.2236 19.1773 21.6905 19.8313C20.4292 21.3789 18.4524 22.3131 16.4288 21.9049Z"
          fill="black"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.31677 1.28657C5.88346 1.40369 6.33476 1.78443 6.61515 2.28746L7.50836 3.8899C7.83737 4.48011 8.11424 4.97679 8.29505 5.40857C8.48686 5.86658 8.60078 6.31824 8.5487 6.8176C8.49663 7.31696 8.29197 7.7354 8.0098 8.14399C7.74379 8.52917 7.3704 8.95804 6.92669 9.46767L4.69884 12.0267C6.46568 14.9227 9.07461 17.5328 11.9736 19.3014L14.5326 17.0736C15.0422 16.6299 15.4711 16.2565 15.8563 15.9905C16.2649 15.7083 16.6833 15.5036 17.1827 15.4516C17.682 15.3995 18.1337 15.5134 18.5917 15.7052C19.0235 15.886 19.5202 16.1629 20.1104 16.4919L21.7128 17.3851C22.2158 17.6655 22.5966 18.1168 22.7137 18.6835C22.832 19.2561 22.6575 19.8316 22.2719 20.3047C20.873 22.021 18.6317 23.1139 16.2805 22.6396C14.8353 22.348 13.4093 21.8623 11.6846 20.8732C8.21921 18.8858 5.11214 15.777 3.12706 12.3157C2.13795 10.591 1.65223 9.165 1.36069 7.71974C0.886391 5.36852 1.97923 3.12724 3.69559 1.72833C4.16862 1.34279 4.74417 1.16822 5.31677 1.28657ZM13.3707 20.0739C14.5371 20.6486 15.5516 20.9623 16.5771 21.1692C18.2732 21.5113 19.9854 20.7358 21.1092 19.357C21.2568 19.176 21.2577 19.0496 21.2447 18.9871C21.2306 18.9187 21.1733 18.8017 20.9825 18.6953L19.416 17.8221C18.7803 17.4678 18.3572 17.2332 18.0123 17.0888C17.6849 16.9517 17.4971 16.9269 17.3382 16.9435C17.1794 16.96 17.0007 17.0231 16.7087 17.2247C16.401 17.4372 16.0354 17.7541 15.4865 18.2319L13.3707 20.0739ZM3.92636 10.6296L5.76835 8.51376C6.24618 7.9649 6.56306 7.59925 6.77553 7.29159C6.97721 6.99956 7.04023 6.82086 7.05679 6.66202C7.07336 6.50319 7.04857 6.31533 6.91148 5.98797C6.76705 5.6431 6.53243 5.21993 6.17812 4.58429L5.30494 3.01778C5.19856 2.82693 5.08158 2.76966 5.01317 2.75552C4.95066 2.7426 4.82429 2.74351 4.64326 2.89106C3.26448 4.01482 2.48894 5.72708 2.83107 7.42313C3.03795 8.44871 3.35164 9.46319 3.92636 10.6296Z"
        fill="black"
      />
    </svg>
  );
}

const LINK_TEXT =
  "relative text-base text-gray-800 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 group-hover/link:text-brand hover:after:scale-x-100 lg:text-lg";

export function ContactLocations() {
  return (
    <section className="relative flex flex-col items-start justify-center bg-cream px-4 md:py-24 xl:px-8 2xl:px-0">
      <Image
        src="/images/services/services-cube.png"
        alt="cube"
        width={200}
        height={200}
        className="absolute -left-1/12 hidden w-auto animate-slowRotate lg:inline-block"
      />

      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-2 md:grid-cols-3 md:gap-10">
        <div className="flex flex-col items-start gap-5 pb-8 md:pb-12">
          <SectionBadge label="Location" />
          <p className="text-[32px] font-semibold leading-[120%] text-gray-950 md:text-[48px]">
            One <span className="font-playfair">Studio</span>
            <br />
            <span>Global Reach</span>
          </p>
        </div>

        <div className="col-span-2 flex flex-col gap-4 md:gap-8">
          {contactPageOffices.map((office) => (
            <div
              key={office.country}
              className="group relative flex w-full flex-col gap-4 overflow-hidden rounded-3xl border border-transparent bg-white p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand/20 md:gap-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(73,57,210,0.14),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center gap-4">
                <Image
                  src={office.flag}
                  alt={office.flagAlt}
                  width={48}
                  height={48}
                  className="h-12 w-12 transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:scale-110"
                />
                <span className="text-2xl font-semibold text-gray-950">
                  {office.country}
                </span>
              </div>

              <hr className="relative z-10 block border-gray-200" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="group/link flex w-fit items-start gap-4 text-gray-800 transition-transform duration-300 ease-out hover:translate-x-1">
                  <LocationPinIcon />
                  <span className="text-base leading-relaxed text-gray-800 transition-colors duration-300 group-hover/link:text-brand lg:text-lg">
                    {office.address}
                  </span>
                </div>

                <Link
                  href={`mailto:${office.email}`}
                  className="group/link flex w-fit items-center gap-4 text-gray-800 transition-transform duration-300 ease-out hover:translate-x-1"
                >
                  <EmailIcon />
                  <span className={LINK_TEXT}>{office.email}</span>
                </Link>

                {office.phone && office.phoneHref && (
                  <Link
                    href={office.phoneHref}
                    target={office.whatsapp ? "_blank" : undefined}
                    rel={office.whatsapp ? "noopener noreferrer" : undefined}
                    className="group/link flex w-fit items-center gap-4 text-gray-800 transition-transform duration-300 ease-out hover:translate-x-1"
                  >
                    {office.whatsapp ? (
                      <Image
                        src="/assets/whatsapp-footer.svg"
                        alt="whatsapp icon"
                        width={30}
                        height={30}
                        className="h-6 w-6 shrink-0"
                      />
                    ) : (
                      <PhoneIcon />
                    )}
                    <span className={LINK_TEXT}>{office.phone}</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
