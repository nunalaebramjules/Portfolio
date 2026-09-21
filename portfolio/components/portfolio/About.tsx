"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const FACTS = [
  { label: "Education", value: "BS Information Technology" },
  { label: "Honor", value: "Cum Laude" },
  { label: "Specialization", value: "Web Development" },
  { label: "Focus areas", value: "Web · Apps · Hardware" },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="border-t border-[var(--line)] py-24">
      <div
        ref={ref}
        className={`pf-reveal mx-auto max-w-6xl px-6 sm:px-10 ${visible ? "is-visible" : ""}`}
      >
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
          {/* Chip-cut profile photo */}
          <div className="pf-chip-frame pf-chip relative aspect-square w-full max-w-[280px] overflow-hidden bg-[var(--panel)]">
            <Image
              src="/img/gradpic.png"
              alt="Graduation Picture"
              fill
              sizes="280px"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="font-mono text-[12px] uppercase tracking-wide text-[var(--signal)]">
              about
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--paper)] sm:text-4xl">
              A systems-minded developer, from the interface to the hardware.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--muted)]">
              I recently graduated Cum Laude with a BS in Information Technology,
              specializing in Web Development. Along the way I picked up a habit that
              stuck: I don&apos;t just want to ship a working feature, I want to understand
              the whole stack underneath it — the browser, the server, the network, and
              the machine it&apos;s all running on. That mix is what I bring to every
              project: clean, functional builds and the troubleshooting instinct to keep
              them running.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[var(--line)] pt-8 sm:grid-cols-4">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[11px] text-[var(--muted)]">{fact.label}</dt>
                  <dd className="mt-1 text-[14px] text-[var(--paper)]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
