"use client";
import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import MenuOverlay from "./MenuOverlay";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className=" fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-dashed border-[var(--line)] bg-[var(--bg)] px-[var(--gutter)] py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/images/profile.png"
            alt="Rajeshwar Singh"
            width={44}
            height={44}
            className="size-11 rounded-full object-cover"
          />
          <p className="text-sm leading-tight">Software<br />Developer</p>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="space-y-1.5 p-1">
            <span className="block h-[3px] w-8 bg-[var(--fg)]" />
            <span className="block h-[3px] w-8 bg-[var(--fg)]" />
            <span className="block h-[3px] w-8 bg-[var(--fg)]" />
          </button>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}