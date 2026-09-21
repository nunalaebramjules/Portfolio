"use client";

import { useReveal } from "@/lib/useReveal";

const LINKS = [
  { label: "Email", value: "nunalaebramjules@gmail.com", href: "mailto:nunalaebramjules@gmail.com" },
  { label: "GitHub", value: "github.com/nunalaebramjules", href: "https://github.com/" },
  { label: "LinkedIn", value: "linkedin.com/in/ejnunala", href: "https://linkedin.com/" },
  { label: "Mobile Number", value: "09568241720/09933034584", href: "tel:+639568241720" },
];

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="border-t border-[var(--line)] py-24">
      <div
        ref={ref}
        className={`pf-reveal mx-auto max-w-6xl px-6 sm:px-10 ${visible ? "is-visible" : ""}`}
      >
        <div className="border border-[var(--line)] bg-[var(--panel)] px-8 py-14 text-center sm:px-16">
          <p className="font-mono text-[12px] uppercase tracking-wide text-[var(--signal)]">
            contact
          </p>
          <h2 className="mx-auto mt-3 max-w-xl font-display text-3xl font-semibold text-[var(--paper)] sm:text-4xl">
            Have a project, a role, or a machine that needs fixing? Let&apos;s talk.
          </h2>

          <div className="mt-10 flex flex-col items-center gap-3 font-mono text-sm sm:flex-row sm:justify-center sm:gap-8">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="pf-nav-link text-[var(--muted)] hover:text-[var(--paper)]"
              >
                {link.value}
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-16 max-w-6xl px-6 font-mono text-[12px] text-[var(--muted)] sm:px-10">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--line)] pt-8 sm:flex-row">
          <span>© {new Date().getFullYear()} Ebram Jules. Built with Next.js &amp; TypeScript.</span>
          <span className="flex items-center gap-2">
            <span className="pf-dot" /> system online
          </span>
        </div>
      </footer>
    </section>
  );
}
