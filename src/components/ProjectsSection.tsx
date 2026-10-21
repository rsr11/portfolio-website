import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/content/projects";

// Bento placement on desktop: 2 left, 1 tall center, 2 right
const placement = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-2 lg:row-start-1 lg:row-span-2",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-3 lg:row-start-2",
];

function Card({ p, className }: { p: Project; className: string }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--line)] lg:aspect-auto ${className}`}
    >
      <Image
        src={p.image}
        alt={p.title}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100">
        <p className="text-lg font-semibold">{p.title}</p>
        <p className="mt-1 text-sm text-white/80">{p.description}</p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.05em] text-white/70">
          {p.tags.join(" · ")}
        </p>
      </div>
      {p.status && (
        <span className="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.05em] text-[#ffd94d]">
          {p.status}
        </span>
      )}
    </Link>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="frame section-top scroll-mt-24 py-24">
      <div className="page-wrap [--content-max:72rem]">
        <h2 className="font-display text-5xl tracking-tight md:text-6xl">Projects</h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]">
          {projects.map((p, i) => (
            <Card key={p.slug} p={p} className={placement[i] ?? ""} />
          ))}
        </div>
      </div>
    </section>
  );
}