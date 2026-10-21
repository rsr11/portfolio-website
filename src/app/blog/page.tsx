import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Rajeshwar Singh",
  description: "Notes on backend engineering, SaaS architecture and things I build.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="frame min-h-screen pb-24 pt-32">
      <div className="page-wrap [--content-max:56rem]">
        <Link href="/" className="text-sm text-muted transition hover:text-[var(--fg)]">← Back home</Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em]">Blog</h1>
        <p className="mt-2 text-lg text-muted">Notes on backend engineering, SaaS architecture and things I build.</p>

        <ul className="mt-12">
          {posts.map((p) => (
            <li key={p.slug} className="hline">
              <Link href={`/blog/${p.slug}`} className="group grid gap-2 py-8 md:grid-cols-[180px_1fr]">
                <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">{formatDate(p.date)}</p>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] transition group-hover:text-accent">{p.title}</h2>
                  <p className="mt-2 text-muted">{p.summary}</p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.05em] text-muted">
                    {p.tags.join(" · ")}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}