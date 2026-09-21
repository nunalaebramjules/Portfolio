"use client";

import { useEffect, useState } from "react";

const ROLES = ["Web Developer", "Application Developer", "Hardware & Troubleshooting Specialist"];

const BOOT_LINES = [
  { cmd: "whoami", out: "Ebram Jules Nunala — BSIT Graduate, Cum Laude" },
  { cmd: "specialization", out: "Web Development" },
  { cmd: "stack", out: "Next.js · TypeScript · React · Node.js" },
  { cmd: "status", out: "available — full-time / freelance" },
];

function RoleTypewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setText(ROLES[0]);
      return;
    }

    const current = ROLES[roleIndex];
    const speed = deleting ? 35 : 65;
    const pauseAtFull = 1400;
    const pauseAtEmpty = 300;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseAtFull);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, pauseAtEmpty);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <span className="font-mono text-[var(--signal)]">
      {text}
      <span className="pf-caret">&nbsp;</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-10 sm:pt-24">
      <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-10">
        {/* Left: identity */}
        <div>
          <div
            className="pf-load mb-6 inline-flex items-center gap-2 border border-[var(--line-strong)] px-3 py-1 font-mono text-[12px] text-[var(--muted)]"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="pf-dot" />
            available for full-time &amp; freelance work
          </div>

          <h1
            className="pf-load font-display text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--paper)] sm:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            Ebram Jules Y. Nunala
          </h1>

          <p
            className="pf-load mt-3 font-display text-2xl text-[var(--muted)] sm:text-3xl"
            style={{ animationDelay: "0.28s" }}
          >
            <RoleTypewriter />
          </p>

          <p
            className="pf-load mt-6 max-w-md text-[15px] leading-7 text-[var(--muted)]"
            style={{ animationDelay: "0.4s" }}
          >
            Newly graduated Cum Laude in BS Information Technology, specialized in Web
            Development. I build web platforms and applications end to end, and I keep the
            hardware and systems behind them running.
          </p>

          <div
            className="pf-load mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.52s" }}
          >
            <a
              href="#work"
              className="bg-[var(--signal)] px-5 py-3 font-mono text-[13px] font-medium text-[#062b26] transition-transform hover:-translate-y-0.5"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="border border-[var(--line-strong)] px-5 py-3 font-mono text-[13px] text-[var(--paper)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right: terminal status panel */}
        <div
          className="pf-load border border-[var(--line)] bg-[var(--panel)]"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center gap-1.5 border-b border-[var(--line)] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
            <span className="ml-3 font-mono text-[12px] text-[var(--muted)]">status.sh</span>
          </div>
          <div className="space-y-3 px-5 py-6 font-mono text-[13px] leading-6">
            {BOOT_LINES.map((line, i) => (
              <p
                key={line.cmd}
                className="pf-line"
                style={{ animationDelay: `${0.6 + i * 0.35}s` }}
              >
                <span className="text-[var(--signal)]">$</span>{" "}
                <span className="text-[var(--muted)]">{line.cmd}</span>
                <br />
                <span className="text-[var(--paper)]">{line.out}</span>
              </p>
            ))}
            <p className="pf-line" style={{ animationDelay: "2.1s" }}>
              <span className="text-[var(--signal)]">$</span>
              <span className="pf-caret">&nbsp;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
