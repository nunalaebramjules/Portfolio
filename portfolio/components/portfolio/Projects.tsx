"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { useReveal } from "@/lib/useReveal";

function handleGlowMove(e: MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="border-t border-[var(--line)] py-24">
      <div
        ref={ref}
        className={`pf-reveal mx-auto max-w-6xl px-6 sm:px-10 ${visible ? "is-visible" : ""}`}
      >
        <p className="font-mono text-[12px] uppercase tracking-wide text-[var(--signal)]">
          selected work
        </p>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold text-[var(--paper)] sm:text-4xl">
          Things I&apos;ve built
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Featured project: Vengo */}
          <div
            onMouseMove={handleGlowMove}
            className="pf-glow-card group relative col-span-full overflow-hidden border border-[var(--line)] bg-[var(--panel)] md:grid md:grid-cols-[1.1fr_1fr]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--line)] md:aspect-auto md:border-b-0 md:border-r">
              <Image
                src="/img/vengo.png"
                alt="Vengo application prototype screenshot"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="relative z-10 flex flex-col justify-center p-8">
              <span className="w-fit border border-[var(--line-strong)] px-2.5 py-1 font-mono text-[11px] text-[var(--muted)]">
                client prototype
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-[var(--paper)]">
                Vengo
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-[var(--muted)]">
                {/* TODO: replace with the real project brief — what problem it solves
                   and what the client needed. */}
                A prototype application built for a client, developed from an early
                concept into a working, testable interface ready for client review and
                further iteration.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] text-[var(--muted)]">
                {["Prototype", "UI/UX", "Client Project"].map((tag) => (
                  <li key={tag} className="border border-[var(--line)] px-2 py-1">
                    {tag}
                  </li>
                ))}
              </ul>
              {/* Uncomment once a live link or case study exists
              <a href="#" className="mt-6 w-fit font-mono text-[13px] text-[var(--signal)]">
                View case study
              </a>
              */}
            </div>
          </div>

          {/* Invite-to-add placeholder slots */}
          {["Adding more Project!", "Adding more Project!"].map((label, i) => (
            <div
              key={i}
              className="flex min-h-[220px] flex-col items-center justify-center border border-dashed border-[var(--line-strong)] p-8 text-center"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-[var(--line-strong)] font-mono text-lg text-[var(--muted)]">
                +
              </span>
              <p className="mt-4 font-mono text-[12px] text-[var(--muted)]">{label}</p>
              <p className="mt-1 max-w-[220px] text-[12px] text-[var(--muted)]/70">
                Alert Application and Grading System is In Progress.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
