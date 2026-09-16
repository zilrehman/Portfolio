import { FeatureGrid } from "./FeatureGrid";
import type { ResourceLink } from "@/data/resource-pages";

/**
 * Listing grid for the blog, glossary and dataset index routes. Each entry is
 * rendered with the shared feature card, so index pages inherit the same
 * spacing, hover and typography as every other section.
 */
export function ResourceIndex({
  heading,
  sub,
  basePath,
  items,
  linkLabel = "Read more",
  background = "bg-white",
}: {
  heading: string;
  sub?: string;
  basePath: string;
  items: ResourceLink[];
  linkLabel?: string;
  background?: string;
}) {
  return (
    <FeatureGrid
      heading={heading}
      sub={sub}
      background={background}
      items={items.map((item) => ({
        title: item.label,
        description: item.excerpt,
        chips: [...item.chips, item.meta].filter(Boolean),
        href: `${basePath}/${item.slug}`,
        linkLabel,
      }))}
    />
  );
}
