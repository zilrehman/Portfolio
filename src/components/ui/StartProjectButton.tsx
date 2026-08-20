import Link from "next/link";
import { ArrowIcon } from "./icons";

type StartProjectButtonProps = {
  href?: string;
  type?: "button" | "submit" | "link";
  className?: string;
  children?: React.ReactNode;
};

/**
 * Brand CTA. Classes transcribed from the reference:
 * py-2.5 md:py-4 · px-4 md:px-6 · text-base md:text-xl · rounded-xl · bg-[#4939D2]
 * with the blurred shine pill that runs `buttonShine` on hover.
 */
export function StartProjectButton({
  href = "/contact",
  type = "link",
  className = "",
  children = "Start a Project",
}: StartProjectButtonProps) {
  const inner = (
    <>
      <span className="relative z-10 text-base md:text-xl">{children}</span>
      <span className="relative z-10 shrink-0 transition-transform duration-500 group-hover:rotate-45">
        <ArrowIcon />
      </span>
      <span className="absolute -left-40 -top-40 h-[200px] w-[65px] rotate-[30deg] rounded-full bg-white blur-[70px] group-hover:animate-buttonShine" />
    </>
  );

  const classes = `relative group cursor-pointer overflow-hidden flex flex-row items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-white md:px-6 md:py-4 ${className}`;

  if (type === "submit" || type === "button") {
    return (
      <button type={type} className={classes}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
