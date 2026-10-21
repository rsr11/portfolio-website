import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const socials = [
  { label: "Email", href: "mailto:rajeshwar.singh45411@gmail.com", Icon: FaEnvelope },
  { label: "GitHub", href: "https://github.com/rsr11", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rajeshwarsingh11", Icon: FaLinkedinIn },
];

const nav = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Blogs", href: "/#blogs" },
];

export default function Footer() {
  return (
  <footer id="contact" className="frame section-top scroll-mt-24">
      {/* <div className="hline" /> */}
      <div className="page-wrap [--content-max:72rem] pb-8 pt-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">Contact</p>
        <h2 className="mt-4 max-w-3xl font-display text-5xl italic leading-[1.05] tracking-tight text-accent md:text-7xl">
          Let&apos;s build something together.
        </h2>

        <a
          href="mailto:rajeshwar.singh45411@gmail.com"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:opacity-80"
        >
          Say hello ↗
        </a>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition hover:text-accent">{n.label}</Link>
                </li>
              ))}
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="transition hover:text-accent">
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-accent"
                  >
                    <Icon size={14} /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">Based in</p>
            <p className="mt-4 text-sm">Jaipur, India</p>
            <p className="mt-1 text-sm text-muted">Open to freelance work</p>
          </div>
        </div>

        <div className="hline mt-16 flex flex-col justify-between gap-3 pt-6 text-xs text-muted sm:flex-row">
          <p>© 2026 Rajeshwar Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}