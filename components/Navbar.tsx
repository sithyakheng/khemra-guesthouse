"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun } from "lucide-react";
import { nav, hotel } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-clay/15 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Sun className="h-5 w-5 text-clay transition-transform group-hover:rotate-45" strokeWidth={1.5} />
          <span className="font-display text-lg tracking-wide text-ink">
            Khemra <span className="italic text-clay">Guesthouse</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-clay">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${hotel.phone1.replace(/\s/g, "")}`}
          className="hidden md:inline-block rounded-full border border-clay/50 px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-clay transition-colors hover:bg-clay hover:text-cream"
        >
          Check availability
        </a>

        <button className="md:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 border-t border-clay/15 bg-cream px-6 py-4 font-mono text-sm uppercase tracking-wide text-ink-soft">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 transition-colors hover:text-clay">
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
