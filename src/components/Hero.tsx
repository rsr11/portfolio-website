"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="frame relative min-h-[70vh] lg:min-h-screen overflow-hidden">
      <h1
        aria-label="Rajeshwar Singh"
        className="relative z-10 px-[var(--gutter)] pt-[20vh] font-times text-accent
                   leading-[0.9] tracking-[-0.02em]
                   text-[clamp(3.25rem,15.5vw,6rem)] md:pt-[22vh] md:text-[clamp(3.5rem,13vw,12rem)]"
      >
        <span aria-hidden className="block">
          <span className="align-baseline font-scrip text-[1.5em] lg:text-[1.1em] leading-none">R</span>ajeshwar
        </span>
        <span aria-hidden className="block text-right lg:pr-26">
          <span className="align-baseline font-scrip text-[1.5em] lg:text-[1.1em] leading-none">S</span>ingh
        </span>
      </h1>

      <motion.div
        initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
        animate={{ opacity: 1, rotate: -8, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-[10%] top-[46%] z-20 aspect-square w-[38vw] md:w-[42vw] max-w-[230px]
                   md:left-[38%] md:top-[50%] md:w-[clamp(120px,16vw,230px)]"
      >
        <Image src="/images/hero.png" alt="" fill sizes="(min-width: 768px) 42vw, 38vw" className="object-cover shadow-2xl" />
      </motion.div>

      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="absolute right-[27%] top-[67%] z-10 w-[clamp(36px,10vw,80px)] text-[var(--star)]
                   md:right-[14%] md:top-[30%] md:w-[clamp(40px,6vw,80px)]"
      >
        <path
          d="M50 0 L56 40 L100 30 L62 50 L96 82 L54 60 L50 100 L44 60 L4 84 L38 50 L0 28 L44 40 Z"
          fill="currentColor"
        />
      </svg>

      <footer
        className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-start gap-3 px-[var(--gutter)] pb-6
                   sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="text-sm">Freelancer</p>
          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.05em] text-muted">
            UDYAM-RJ-17-0670337
          </p>
        </div>
        {/* <p className="text-sm text-muted">Wannabe Creative Boy</p> */}
      </footer>
    </section>
  );
}