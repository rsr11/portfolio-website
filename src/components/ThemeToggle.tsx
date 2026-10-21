"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid size-9 place-items-center rounded-full transition hover:bg-[var(--line)]"
    >
      {mounted ? (
        resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />
      ) : (
        <span className="size-5" />
      )}
    </button>
  );
}