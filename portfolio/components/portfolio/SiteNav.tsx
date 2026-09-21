"use client";

import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--ink)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-display text-sm tracking-tight text-[var(--paper)]">
          Ebram<span className="text-[var(--signal)]">.</span>dev
        </a>

        <nav className="hidden items-center gap-8 font-mono text-[13px] text-[var(--muted)] md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="pf-nav-link hover:text-[var(--paper)]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <span className="pf-dot" />
          <span className="font-mono text-[12px] text-[var(--muted)]">open to work</span>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-[var(--paper)] transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-[var(--paper)] transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--line)] px-6 py-4 font-mono text-sm md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-[var(--muted)] hover:text-[var(--paper)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
