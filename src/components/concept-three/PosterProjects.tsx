"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { projects } from "@/data/projects";
import { asset } from "@/lib/asset";

const ACCENTS = ["#F05A47", "#F4C95D", "#69C5D8", "#8C1515", "#38233D", "#F05A47"];

export function PosterProjects() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="grid items-start gap-4 md:grid-cols-2">
      {projects.map((p, i) => {
        const isOpen = open === i;
        const accent = ACCENTS[i % ACCENTS.length];
        const panelId = `poster-proj-${i}`;
        return (
          <article
            key={p.title}
            className="overflow-hidden rounded-3xl border-4 border-[#1C1917] bg-[#FFF4DF]"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center gap-4 p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#8C1515]"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-archivo-black text-lg text-[#FFF4DF]"
                style={{ backgroundColor: accent }}
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block font-work-sans text-[11px] font-bold uppercase tracking-widest text-[#8C1515]">
                  {p.category}
                </span>
                <span className="font-archivo-black block text-xl uppercase leading-tight text-[#1C1917]">
                  {p.title}
                </span>
              </span>
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#1C1917] text-[#1C1917]"
                aria-hidden
              >
                {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  key="content"
                  initial={reduce ? undefined : { height: 0, opacity: 0 }}
                  animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t-4 border-[#1C1917] px-5 pb-6 pt-4">
                    {p.image ? (
                      <div className="mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl border-4 border-[#1C1917] bg-[#FFF4DF]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={asset(p.image)}
                          alt={p.title}
                          loading="lazy"
                          className="h-full w-full"
                          style={{
                            objectFit: p.imageFit ?? "cover",
                            objectPosition: p.imagePosition ?? "center",
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className="mb-4 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border-4 border-[#1C1917]"
                        style={{
                          background: `repeating-linear-gradient(45deg, ${accent} 0 12px, #1C1917 12px 24px)`,
                        }}
                      >
                        <span className="rounded-full bg-[#FFF4DF] px-4 py-1.5 font-work-sans text-xs font-bold uppercase tracking-widest text-[#1C1917]">
                          In development
                        </span>
                      </div>
                    )}
                    <p className="text-[15px] leading-relaxed text-[#1C1917]">
                      {p.description}
                    </p>
                    <div className="mt-4">
                      <p className="font-work-sans text-[11px] font-bold uppercase tracking-widest text-[#8C1515]">
                        Disciplines · {p.year}
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {p.disciplines.map((d) => (
                          <li
                            key={d}
                            className="rounded-full border-2 border-[#1C1917] px-3 py-1 font-work-sans text-xs font-bold text-[#1C1917]"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {p.placeholder && (
                      <p className="mt-4 font-work-sans text-xs font-semibold uppercase tracking-wide text-[#1C1917]/50">
                        Example project — placeholder content
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
