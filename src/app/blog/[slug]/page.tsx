import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import AuthorRow from "@/components/AuthorRow";

// export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — Rajeshwar Singh`,
    description: post.meta.summary,
    openGraph: { title: post.meta.title, description: post.meta.summary, images: post.meta.cover ? [post.meta.cover] : [] },
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, content } = post;

  return (
    <main className="frame min-h-screen pb-24 pt-32">
      <article className="page-wrap [--content-max:52rem]">
        <Link href="/blog" className="text-sm text-muted transition hover:text-[var(--fg)]">← All posts</Link>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.05em] text-muted">{formatDate(meta.date)}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">{meta.title}</h1>
        <p className="mt-4 text-xl leading-snug text-muted">{meta.summary}</p>
        <div className="mt-6"><AuthorRow readingTime={meta.readingTime} /></div>

        {meta.cover && (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl bg-[var(--line)]">
            <Image src={meta.cover} alt="" fill priority sizes="768px" className="object-cover" />
          </div>
        )}

        <div className="prose mt-10 max-w-none dark:prose-invert prose-headings:tracking-[-0.03em] prose-a:text-accent">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, [rehypePrettyCode, { theme: "github-dark" }]],
              },
            }}
          />
        </div>
      </article>
    </main>
  );
}