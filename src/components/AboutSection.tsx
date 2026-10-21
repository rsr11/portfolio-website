
import { about } from "@/content/about";

export default function AboutSection() {
  return (
    <section id="about" className="frame section-top scroll-mt-24 py-24">
      <div className="page-wrap [--content-max:72rem]">
        <h2 className="font-display text-5xl tracking-tight md:text-6xl">{about.heading}</h2>

        <div className="mt-10 grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-lg leading-snug">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="space-y-5">
            {about.facts.map((f) => (
              <div key={f.label} className="hline pt-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">{f.label}</dt>
                <dd className="mt-1 text-sm">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {about.skills.map((s) => (
            <div key={s.group} className="hline pt-4">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">{s.group}</h3>
              <p className="mt-2 text-sm leading-relaxed">{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}