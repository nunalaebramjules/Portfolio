"use client";

import { useReveal } from "@/lib/useReveal";

const STEPS = [
  {
    year: "2022–2026",
    title: "BS Information Technology",
    detail: "Specialization in Web Development — graduated Cum Laude.",
  },
  {
    year: "2025",
    title: "Capstone / thesis project",
    detail:
      // TODO: swap in the real capstone title and a one-line outcome.
      "Designed and built a full-stack web application as a final-year capstone project.",
  },
  {
    year: "2025",
    title: "On-the-job training",
    detail:
      // TODO: replace with your actual OJT placement and responsibilities.
      "Hands-on training in web support and systems troubleshooting.",
  },
  {
    year: "2026",
    title: "Cum Laude graduate",
    detail: "Completed the degree with Latin honors and started taking on client work.",
  },
];

export default function Journey() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="journey" className="border-t border-[var(--line)] py-24">
      <div
        ref={ref}
        className={`pf-reveal mx-auto max-w-6xl px-6 sm:px-10 ${visible ? "is-visible" : ""}`}
      >
        <p className="font-mono text-[12px] uppercase tracking-wide text-[var(--signal)]">
          journey
        </p>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold text-[var(--paper)] sm:text-4xl">
          Education &amp; milestones
        </h2>

        <ol className="mt-14 border-l border-[var(--line)] pl-8">
          {STEPS.map((step, i) => (
            <li key={i} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2.5 w-2.5 rounded-full border border-[var(--signal)] bg-[var(--ink)]" />
              <p className="font-mono text-[12px] text-[var(--muted)]">{step.year}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-[var(--paper)]">
                {step.title}
              </h3>
              <p className="mt-1 max-w-md text-[14px] leading-6 text-[var(--muted)]">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
