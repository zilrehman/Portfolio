import { DiamondBadgeIcon } from "./icons";
import { CRTText } from "./CRTText";

type SectionBadgeProps = {
  label: string;
  variant?: "brand" | "white";
};

export function SectionBadge({ label, variant = "brand" }: SectionBadgeProps) {
  // The white variant on the reference uses a bottom border only and plain text
  // (no CRT scaffolding).
  if (variant === "white") {
    return (
      <div className="flex flex-row items-center gap-2 rounded-full border-b border-white bg-white/20 px-4 py-2 transition-all duration-300 ease-out hover:translate-y-0.5 hover:bg-white/30 lg:px-5">
        <DiamondBadgeIcon fill="white" />
        <p className="text-base font-medium text-white lg:text-lg">{label}</p>
      </div>
    );
  }

  return (
    <div className="flex cursor-default flex-row items-center gap-2 rounded-full border border-brand px-5 py-2">
      <DiamondBadgeIcon />
      <CRTText text={label} className="text-base font-medium text-brand lg:text-lg" />
    </div>
  );
}
