import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesHero } from "@/components/services/ServicesHero";
import { DetailSections } from "@/components/detail/DetailSections";
import { PageIntro } from "@/components/detail/PageIntro";
import { blogPosts, findBySlug } from "@/data/resource-pages";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findBySlug(blogPosts, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findBySlug(blogPosts, slug);
  if (!post) notFound();

  return (
    <main>
      <ServicesHero
        subtitle={post.heroChip}
        titleTop={post.heroTitleTop}
        titleBottom={post.heroTitleBottom}
        description={post.heroDescription}
      />
      <PageIntro paragraphs={post.introParagraphs} />
      <DetailSections sections={post.sections} />
    </main>
  );
}
