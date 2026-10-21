import Link from "next/link";

export default function NotFound() {
  return (
    <main className="frame grid min-h-screen place-items-center px-[var(--gutter)] text-center">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">Error 404</p>
        <h1 className="mt-4 font-display text-6xl tracking-tight md:text-8xl">Lost?</h1>
        <p className="mt-4 text-muted">That page doesn&apos;t exist or has moved.</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[var(--on-accent)] transition hover:opacity-80"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}