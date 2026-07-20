"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";
import { Modal } from "@/components/shared/Modal";
import { projects } from "@/data/projects";
import type { Project } from "@/lib/types";

const PHASES = ["Brief", "Concept", "Prototype", "Review", "Showcase"];

export function BlueprintProjects() {
  const [active, setActive] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group relative flex flex-col border border-[#4DA3D9]/30 bg-[#0D314B]/40 p-5 transition hover:border-[#4DA3D9]"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-plex-mono text-[10px] uppercase tracking-widest text-[#F2B84B]">
                DWG-{String(i + 1).padStart(3, "0")}
              </span>
              <span className="font-plex-mono text-[10px] uppercase tracking-widest text-[#8ED8F8]/70">
                {p.category}
              </span>
            </div>

            <h3 className="font-space-grotesk mt-3 text-xl font-bold text-[#EAF2F4]">
              {p.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#EAF2F4]/70">
              {p.description}
            </p>

            {/* mini process timeline */}
            <ol className="mt-4 flex items-center gap-1" aria-label="Process phases">
              {PHASES.map((ph, idx) => (
                <li key={ph} className="flex flex-1 items-center gap-1">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DA3D9]" />
                  {idx < PHASES.length - 1 && (
                    <span className="h-px flex-1 bg-[#4DA3D9]/40" />
                  )}
                </li>
              ))}
            </ol>

            <button
              type="button"
              onClick={() => {
                setActive(p);
                setActiveIndex(i);
              }}
              className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 border border-[#4DA3D9]/50 px-4 py-2 font-plex-mono text-[11px] uppercase tracking-wide text-[#8ED8F8] transition hover:border-[#8ED8F8] hover:bg-[#4DA3D9]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ED8F8]"
            >
              <Plus className="h-3.5 w-3.5" aria-hidden />
              Open drawing
            </button>
          </article>
        ))}
      </div>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        labelledById="bp-project-title"
        describedById="bp-project-desc"
        className="border border-[#4DA3D9]/50 bg-[#071A2B] shadow-2xl sm:max-w-2xl"
        backdropClassName="bg-[#071A2B]/80 backdrop-blur-sm"
      >
        {active && (
          <div
            className="p-6 sm:p-8"
            style={{
              backgroundImage:
                "linear-gradient(rgba(77,163,217,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(77,163,217,0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="font-plex-mono text-[10px] uppercase tracking-widest text-[#F2B84B]">
                DWG-{String(activeIndex + 1).padStart(3, "0")} · {active.category}
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="inline-flex h-11 w-11 items-center justify-center border border-[#4DA3D9]/40 text-[#8ED8F8] transition hover:border-[#8ED8F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ED8F8]"
              >
                <span className="sr-only">Close dialog</span>
                <X aria-hidden />
              </button>
            </div>

            <h2
              id="bp-project-title"
              className="font-space-grotesk mt-4 text-3xl font-bold text-[#EAF2F4]"
            >
              {active.title}
            </h2>

            <p
              id="bp-project-desc"
              className="mt-4 text-[15px] leading-relaxed text-[#EAF2F4]/85"
            >
              {active.description}
            </p>

            {/* Full process timeline */}
            <div className="mt-6">
              <p className="font-plex-mono text-[10px] uppercase tracking-widest text-[#8ED8F8]">
                Process timeline
              </p>
              <ol className="mt-3 grid grid-cols-5 gap-1">
                {PHASES.map((ph, idx) => (
                  <li key={ph} className="text-center">
                    <div className="relative flex items-center">
                      <span className="z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-full border border-[#F2B84B] bg-[#071A2B] font-plex-mono text-[10px] text-[#F2B84B]">
                        {idx + 1}
                      </span>
                      {idx < PHASES.length - 1 && (
                        <span className="absolute left-1/2 top-1/2 h-px w-full -translate-y-1/2 bg-[#4DA3D9]/40" />
                      )}
                    </div>
                    <span className="font-plex-mono mt-2 block text-[10px] uppercase tracking-wide text-[#EAF2F4]/70">
                      {ph}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6">
              <p className="font-plex-mono text-[10px] uppercase tracking-widest text-[#8ED8F8]">
                Disciplines
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {active.disciplines.map((d) => (
                  <li
                    key={d}
                    className="border border-[#4DA3D9]/40 px-2.5 py-1 font-plex-mono text-[11px] text-[#EAF2F4]/80"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 border-t border-[#4DA3D9]/25 pt-4 font-plex-mono text-[10px] uppercase tracking-wide text-[#8ED8F8]/60">
              Example drawing — placeholder content for layout only.
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
