import Link from "next/link";
import { CALENDLY_URL } from "@/data/branding";
import { ArrowIcon } from "./icons";

type BookCallButtonProps = {
  variant?: "brand" | "white";
  className?: string;
  label?: string;
};

/** Same geometry as StartProjectButton; the white variant drops the shine pill. */
export function BookCallButton({
  variant = "brand",
  className = "",
  label = "Book a Call",
}: BookCallButtonProps) {
  const isWhite = variant === "white";

  return (
    <Link
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group cursor-pointer overflow-hidden flex flex-row items-center justify-center gap-2 rounded-xl px-4 py-2.5 md:px-6 md:py-4 ${
        isWhite ? "bg-white text-black" : "bg-brand text-white"
      } ${className}`}
    >
      <span className="relative z-10 text-base md:text-xl">{label}</span>
      <span className="relative z-10 shrink-0 transition-transform duration-500 group-hover:rotate-45">
        <ArrowIcon fill={isWhite ? "#111827" : "white"} />
      </span>
      {!isWhite && (
        <span className="absolute -left-40 -top-40 h-[200px] w-[65px] rotate-[30deg] rounded-full bg-white blur-[70px] group-hover:animate-buttonShine" />
      )}
    </Link>
  );
}
