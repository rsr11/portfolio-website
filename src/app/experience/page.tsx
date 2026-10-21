import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/content/experience";
import TechIcon from "@/components/TechIcon";
import StatusBadge from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "Work Experience — Rajeshwar Singh",
  description: "My work experience across different companies and roles.",
};

export default function ExperiencePage() {
  return (
    <main className="frame min-h-screen pb-24 pt-32">
      <div className="page-wrap [--content-max:48rem]">
        <Link href="/" className="text-sm text-muted transition hover:text-[var(--fg)]">
          ← Back home
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">Work Experience</h1>
        <p className="mt-2 text-muted">My work experiences across different companies and roles.</p>

        <div className="mt-12 space-y-14">
          {experience.map((e) => (
            <article key={e.slug} id={e.slug} className="scroll-mt-28">
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <div>
                  <h2 className="flex items-center gap-3 text-xl font-semibold">
                    {e.company}
                    {e.end === "Present" && <StatusBadge />}
                  </h2>
                  <p className="text-sm text-muted">{e.role}</p>
                </div>
                <div className="text-sm text-muted sm:text-right">
                  <p>{e.start} - {e.end}</p>
                  {e.location && <p>{e.location}</p>}
                </div>
              </div>

              <div className="hline my-5" />

              <h3 className="text-sm font-semibold">Technologies &amp; Tools</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {e.tech.map((t) => <TechIcon key={t} tech={t} />)}
              </div>

              <h3 className="mt-6 text-sm font-semibold">What I&apos;ve done</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {e.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span aria-hidden>▪</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}