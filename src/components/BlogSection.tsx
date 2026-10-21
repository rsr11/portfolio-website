import Image from "next/image";
import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/blog";
import AuthorRow from "./AuthorRow";

export default function BlogSection() {
  const posts = getAllPosts();
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <section id="blogs" className="frame section-top scroll-mt-24 py-24">
      <div className="page-wrap [--content-max:72rem]">
        <h2 className="font-display text-5xl tracking-tight md:text-6xl">Blogs</h2>

        <Link
          href={`/blog/${featured.slug}`}
          className="group mt-10 grid items-center gap-8 md:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">
              {formatDate(featured.date)}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] transition group-hover:text-accent md:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 text-lg leading-snug text-muted">{featured.summary}</p>
            <div className="mt-6">
              <AuthorRow readingTime={featured.readingTime} />
            </div>
          </div>

          {featured.cover && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--line)]">
              <Image src={featured.cover} alt="" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>
          )}
        </Link>

        {rest.length > 0 && (
          <ul className="mt-12">
            {rest.slice(0, 3).map((p) => (
              <li key={p.slug} className="hline">
                <Link href={`/blog/${p.slug}`} className="group grid gap-2 py-6 md:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">
                    {formatDate(p.date)}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] transition group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-muted">{p.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="rounded-lg border border-[var(--line)] px-4 py-2 text-sm font-semibold transition hover:bg-[var(--line)]"
          >
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
}