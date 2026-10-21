"use client";
import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

export default function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

 const router = useRouter();
const pathname = usePathname();

const go = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  onClose();
  setTimeout(() => {
    if (pathname === "/") {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  }, 450);
};

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="no-scrollbar fixed inset-2 z-50 overflow-y-auto rounded-lg border border-[var(--line)] bg-[var(--menu-bg)] text-[var(--menu-fg)] sm:inset-5"
        >
          <div className="flex items-start justify-between px-6 pt-5 sm:px-10">
            <div className="flex items-start gap-3">
              <Image src="/images/profile.png" alt="" width={44} height={44} className="size-11 rounded-full object-cover" />
              <div>
                <p className="text-sm leading-tight">Software<br />Developer</p>
                
              </div>
            </div>
            <button aria-label="Close menu" onClick={onClose} className="p-1 text-4xl font-light leading-none">
              ✕
            </button>
          </div>

          <div className="grid gap-10 px-6 pb-10 pt-8 sm:px-10 md:grid-cols-[1fr_1.4fr_1fr] md:items-center">
            <p className="hidden self-end font-display text-7xl italic text-[var(--menu-accent)] md:block">Content</p>

            <nav>
              <ul>
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="border-b border-[var(--menu-line)]"
                  >
                    <a
                      href={l.href}
                      onClick={(e) => go(e, l.href)}
                      className="flex items-baseline justify-between py-3 text-2xl uppercase transition-opacity hover:opacity-60 md:text-3xl"
                    >
                      <span>{l.label}</span>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="relative hidden aspect-square md:block">
              <Image src="/images/menu-sun.png" alt="" fill className="object-cover" />
            </div>
          </div>

          <div className="flex justify-between px-6 pb-5 text-sm sm:px-10">
               <p className="dark:hidden">Freelancer</p>
               <p className="hidden dark:block" />
               <p className="hidden dark:block">2026</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}