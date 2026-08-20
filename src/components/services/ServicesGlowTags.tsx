import { glowTags } from "@/data/services-page";

/**
 * Capability pill wall. Colours, glow radii and transition timing are
 * transcribed from the reference's `.glow-button` / `.btn-*` rules.
 */
export function ServicesGlowTags() {
  return (
    <section>
      <div className="glow-modals-root flex flex-col items-center justify-center gap-10 p-5 py-16 sm:py-20">
        <div className="buttons-container flex max-w-6xl flex-wrap justify-center gap-4">
          {glowTags.map((tag, i) => (
            <button
              key={`${tag.label}-${i}`}
              type="button"
              className={`glow-button ${tag.variant}`}
            >
              <span>{tag.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
