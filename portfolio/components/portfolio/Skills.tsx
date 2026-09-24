"use client";

import { useEffect } from "react";
import { useReveal } from "@/lib/useReveal";

type Skill = { name: string; level: number };
type Group = { title: string; note: string; skills: Skill[] };

const GROUPS: Group[] = [
  {
    title: "Web Development",
    note: "front end & back end",
    skills: [
      { name: "HTML5 / CSS3", level: 92 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "React / Next.js", level: 82 },
      { name: "Tailwind CSS", level: 88 },
      { name: "REST APIs", level: 78 },
    ],
  },
  {
    title: "Application Development",
    note: "software & systems",
    skills: [
      { name: "Dart & Flutter", level: 80 },
      { name: "Javascript", level: 75 },
      { name: "MySQL / Database Design", level: 82 },
      { name: "Git & Version Control", level: 100 },
    ],
  },
  {
    title: "Hardware & Troubleshooting",
    note: "diagnostics & support",
    skills: [
      { name: "PC Assembly & Diagnostics", level: 90 },
      { name: "OS Install & Configuration", level: 88 },
      { name: "Network Setup & Troubleshooting", level: 80 },
      { name: "Tech Support", level: 85 },
    ],
  },
];

function SkillGroup({ group, delay }: { group: Group; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="border border-[var(--line)] bg-[var(--panel)] p-6"
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <div className="mb-6 flex items-baseline justify-between">
        <h3 className="font-display text-lg font-semibold text-[var(--paper)]">{group.title}</h3>
        <span className="font-mono text-[11px] text-[var(--muted)]">{group.note}</span>
      </div>

      <ul className="space-y-5">
        {group.skills.map((skill) => (
          <li key={skill.name}>
            <div className="mb-1.5 flex items-center justify-between font-mono text-[12px]">
              <span className="text-[var(--paper)]">{skill.name}</span>
              <span className="text-[var(--muted)]">{visible ? skill.level : 0}%</span>
            </div>
            <div className="pf-meter">
              <span style={{ width: visible ? `${skill.level}%` : "0%" }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  // Keeps a stable render pass so meter widths transition after mount.
  useEffect(() => {}, []);

  return (
    <section id="skills" className="border-t border-[var(--line)] py-24">
      <div
        ref={ref}
        className={`pf-reveal mx-auto max-w-6xl px-6 sm:px-10 ${visible ? "is-visible" : ""}`}
      >
        <p className="font-mono text-[12px] uppercase tracking-wide text-[var(--signal)]">
          skills
        </p>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold text-[var(--paper)] sm:text-4xl">
          What I bring to a team
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {GROUPS.map((group, i) => (
            <SkillGroup key={group.title} group={group} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
