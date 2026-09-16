/**
 * The narrative copy the original pages place between the hero and their first
 * section heading. Rendered on its own so no heading has to be invented for it.
 */
export function PageIntro({
  paragraphs = [],
  background = "bg-white",
}: {
  paragraphs?: string[];
  background?: string;
}) {
  if (!paragraphs.length) return null;

  return (
    <section className={`${background} pt-12 md:pt-16 lg:pt-24`}>
      <div className="container mx-auto flex max-w-7xl flex-col gap-4 px-4 lg:px-8">
        {paragraphs.map((text, i) => (
          <p key={i} className="measure text-lg leading-relaxed text-gray-700 lg:mx-auto lg:text-center lg:text-xl">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
