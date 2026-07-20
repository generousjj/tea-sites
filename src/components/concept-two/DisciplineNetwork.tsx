"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { disciplines } from "@/data/disciplines";
import { Icon } from "@/lib/icons";

const R = 38; // radius as % of container

export function DisciplineNetwork() {
  const [selected, setSelected] = useState(0);
  const reduce = useReducedMotion();

  const nodes = disciplines.map((d, i) => {
    const angle = (i / disciplines.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...d,
      x: 50 + R * Math.cos(angle),
      y: 50 + R * Math.sin(angle),
    };
  });

  const active = disciplines[selected];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      {/* Network map */}
      <div className="relative mx-auto aspect-square w-full max-w-lg">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          aria-hidden
        >
          {nodes.map((n, i) => (
            <motion.line
              key={n.name}
              x1={50}
              y1={50}
              x2={n.x}
              y2={n.y}
              stroke={selected === i ? "#F2B84B" : "#4DA3D9"}
              strokeWidth={selected === i ? 0.6 : 0.35}
              strokeDasharray={selected === i ? "0" : "1.5 1.5"}
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
            />
          ))}
          <circle cx={50} cy={50} r={9} fill="#0D314B" stroke="#8ED8F8" strokeWidth={0.5} />
        </svg>

        {/* Central hub label */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="font-plex-mono text-[10px] uppercase tracking-widest text-[#8ED8F8]">
            Guest
            <br />
            Experience
          </span>
        </div>

        {/* Nodes */}
        {nodes.map((n, i) => {
          const isActive = selected === i;
          return (
            <button
              key={n.name}
              type="button"
              onClick={() => setSelected(i)}
              aria-pressed={isActive}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 focus:outline-none"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <span
                className={
                  "flex h-11 w-11 items-center justify-center rounded-full border transition " +
                  (isActive
                    ? "border-[#F2B84B] bg-[#F2B84B] text-[#071A2B] shadow-[0_0_0_4px_rgba(242,184,75,0.2)]"
                    : "border-[#4DA3D9] bg-[#0D314B] text-[#8ED8F8] hover:border-[#8ED8F8]")
                }
              >
                <Icon name={n.icon} className="h-5 w-5" />
              </span>
              <span
                className={
                  "font-plex-mono max-w-[6rem] text-center text-[9px] leading-tight tracking-wide " +
                  (isActive ? "text-[#F2B84B]" : "text-[#EAF2F4]/70")
                }
              >
                {n.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        className="rounded-lg border border-[#4DA3D9]/40 bg-[#0D314B]/60 p-6"
        aria-live="polite"
      >
        <div className="flex items-center gap-2 font-plex-mono text-[10px] uppercase tracking-widest text-[#8ED8F8]">
          <span>Node {String(selected + 1).padStart(2, "0")}</span>
          <span className="text-[#4DA3D9]">/</span>
          <span>{String(disciplines.length).padStart(2, "0")}</span>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-md border border-[#F2B84B] bg-[#F2B84B]/10 text-[#F2B84B]">
            <Icon name={active.icon} className="h-6 w-6" />
          </span>
          <h3 className="font-space-grotesk text-2xl font-bold text-[#EAF2F4]">
            {active.name}
          </h3>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-[#EAF2F4]/80">
          {active.description}
        </p>

        <div className="mt-6">
          <p className="font-plex-mono text-[10px] uppercase tracking-widest text-[#8ED8F8]">
            Select a node
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {disciplines.map((d, i) => (
              <button
                key={d.name}
                type="button"
                onClick={() => setSelected(i)}
                aria-pressed={selected === i}
                className={
                  "min-h-9 rounded px-2.5 py-1 font-plex-mono text-[11px] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ED8F8] " +
                  (selected === i
                    ? "bg-[#F2B84B] text-[#071A2B]"
                    : "bg-[#071A2B] text-[#EAF2F4]/70 hover:text-[#EAF2F4]")
                }
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
