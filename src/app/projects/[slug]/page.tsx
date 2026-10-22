import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { Suspense } from "react";

// export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Rajeshwar Singh`,
    description: project.description,
    openGraph: { images: [project.image] },
  };
}


export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<main className="frame min-h-screen" />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}


export async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="frame min-h-screen pb-24 pt-32">
      <div className="page-wrap [--content-max:56rem]">
        <Link href="/#projects" className="text-sm text-muted transition hover:text-[var(--fg)]">
          ← All projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <h1 className="font-display text-4xl tracking-tight md:text-6xl">{project.title}</h1>
          {project.status && (
            <span className="rounded-md border border-[var(--line)] px-2 py-1 font-mono text-[11px] uppercase tracking-[0.05em] text-accent">
              {project.status}
            </span>
          )}
        </div>
        <p className="mt-3 text-lg text-muted">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-[var(--on-accent)] transition hover:opacity-80"
            >
              Visit live site ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--line)] px-5 py-2 text-sm font-semibold transition hover:bg-[var(--line)]"
            >
              GitHub ↗
            </a>
          )}
        </div>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-[var(--line)]">
          <Image src={project.image} alt={project.title} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
        </div>

        <dl className="hline mt-10 grid gap-6 pt-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">Role</dt>
            <dd className="mt-1 text-sm">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">Year</dt>
            <dd className="mt-1 text-sm">{project.year}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">Stack</dt>
            <dd className="mt-1 text-sm">{project.tags.join(", ")}</dd>
          </div>
        </dl>

        <section className="mt-12">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="mt-3 leading-relaxed text-muted">{project.overview}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">What I built</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span aria-hidden>▪</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-12 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--line)]">
                <Image src={src} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </section>
        )}

        <Link
          href={`/projects/${next.slug}`}
          className="hline mt-16 flex items-center justify-between pt-6 transition hover:opacity-70"
        >
          <span className="text-sm text-muted">Next project</span>
          <span className="font-display text-2xl">{next.title} →</span>
        </Link>
      </div>
    </main>
  );
}