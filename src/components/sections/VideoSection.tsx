"use client";

import { VIDEO_URL } from "@/data/site";

/**
 * Showreel band.
 *
 * The reference brackets the video with two empty divs that it hands to GSAP as
 * ScrollTrigger references — they are not spacers and measure 0px tall at every
 * viewport. Keeping them zero-height is what matches the rendered layout.
 */
export function VideoSection({ background = "bg-white" }: { background?: string }) {
  return (
    <section className={`${background} overflow-x-hidden`}>
      <section className="overflow-visible">
        <div />
        <div className="container mx-auto max-w-7xl transform-gpu px-0">
          <div className="overflow-hidden md:rounded-4xl">
            <video
              src={VIDEO_URL}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              className="pointer-events-none block h-full max-h-dvh w-full object-contain"
            />
          </div>
        </div>
        <div />
      </section>
    </section>
  );
}
