import Link from "next/link";
import { experience } from "@/content/experience";
import StatusBadge from "./StatusBadge";

export default function ExperienceSection() {
  const items = experience.slice(0, 3);

  return (
    <section id="experience" className="frame section-top scroll-mt-24 py-24">
      <div className="mx-auto max-w-4xl px-[var(--gutter)]">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>

        <ul className="mt-8 space-y-8">
          {items.map((e) => (
            <li key={e.slug}>
              <Link
                href={`/experience#${e.slug}`}
                className="group flex flex-col justify-between gap-1 sm:flex-row"
              >
                <div>
                  <p className="flex items-center gap-3 text-lg font-semibold">
                    {e.company}
                    {e.end === "Present" && <StatusBadge />}
                  </p>
                  <p className="text-sm text-muted">{e.role}</p>
                </div>
                <div className="text-sm text-muted sm:text-right">
                  <p>{e.start} - {e.end}</p>
                  {e.location && <p>{e.location}</p>}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/experience"
            className="rounded-lg border border-[var(--line)] px-4 py-2 text-sm font-semibold transition hover:bg-[var(--line)]"
          >
            Show all work experiences
          </Link>
        </div>
      </div>
    </section>
  );
}