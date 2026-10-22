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
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />

      {/* always-on gradient so text is readable on any image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      {p.status && (
        <span className="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.05em] text-[#ffd94d]">
          {p.status}
        </span>
      )}

      <span
        aria-hidden
        className="absolute right-3 top-3 grid size-9 -translate-y-1 place-items-center rounded-full bg-white/90 text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      >
        ↗
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
        <h3 className="text-xl font-semibold tracking-[-0.03em]">{p.title}</h3>

        <p className="mt-1 line-clamp-2 text-sm text-white/80 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-300 md:group-hover:max-h-12 md:group-hover:opacity-100">
          {p.description}
        </p>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.slice(0, 3).map((t) => (
            <li
              key={t}
              className="rounded-full bg-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.05em] backdrop-blur-sm"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
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