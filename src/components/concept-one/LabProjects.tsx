"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Modal } from "@/components/shared/Modal";
import { projects } from "@/data/projects";
import type { Project } from "@/lib/types";

export function LabProjects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article key={p.title} className="group flex flex-col">
            <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#E7DED2]">
              {/* CSS-generated abstract placeholder — no embedded text. */}
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    i % 2 === 0
                      ? "radial-gradient(120% 120% at 20% 10%, #E7DED2 0%, #D8CBB9 60%, #8C1515 220%)"
                      : "linear-gradient(135deg, #E7DED2 0%, #F7F4EF 55%, #8C1515 260%)",
                }}
                aria-hidden
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(32,32,30,0.06) 0 2px, transparent 2px 14px)",
                }}
                aria-hidden
              />
              {p.placeholder && (
                <span className="absolute left-3 top-3 rounded-full bg-[#F7F4EF]/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8C1515]">
                  Example project
                </span>
              )}
            </div>

            <div className="flex items-baseline justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#53565A]">
                {p.category}
              </p>
              <p className="text-xs tabular-nums text-[#53565A]">{p.year}</p>
            </div>
            <h3 className="font-dm-serif mt-1.5 text-2xl leading-tight text-[#20201E]">
              {p.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-[#53565A]">
              {p.description}
            </p>
            <button
              type="button"
              onClick={() => setActive(p)}
              className="mt-4 inline-flex min-h-11 w-fit items-center gap-1.5 self-start text-sm font-semibold text-[#8C1515] transition hover:gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
            >
              View project
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </button>
          </article>
        ))}
      </div>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        labelledById="lab-project-title"
        describedById="lab-project-desc"
        className="rounded-t-2xl bg-[#F7F4EF] shadow-2xl sm:max-w-2xl sm:rounded-2xl"
        backdropClassName="bg-[#20201E]/60 backdrop-blur-sm"
      >
        {active && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full bg-[#8C1515]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8C1515]">
                {active.category}
              </span>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#53565A] transition hover:bg-[#20201E]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
              >
                <span className="sr-only">Close dialog</span>
                <X aria-hidden />
              </button>
            </div>

            <h2
              id="lab-project-title"
              className="font-dm-serif mt-4 text-3xl leading-tight text-[#20201E]"
            >
              {active.title}
            </h2>
            <p className="mt-1 text-sm tabular-nums text-[#53565A]">
              {active.year}
            </p>

            <div
              className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-sm bg-[#E7DED2]"
              aria-hidden
            >
              <div
                className="h-full w-full opacity-70"
                style={{
                  background:
                    "linear-gradient(135deg, #E7DED2 0%, #F7F4EF 50%, #8C1515 260%)",
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(32,32,30,0.06) 0 2px, transparent 2px 14px)",
                }}
              />
            </div>

            <p
              id="lab-project-desc"
              className="mt-5 text-base leading-relaxed text-[#20201E]"
            >
              {active.description}
            </p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#53565A]">
                Disciplines involved
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {active.disciplines.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-[#20201E]/15 px-3 py-1 text-sm text-[#20201E]"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {active.placeholder && (
              <p className="mt-6 border-t border-[#20201E]/10 pt-4 text-xs text-[#53565A]">
                Example project shown for illustration. Real member work will
                replace this content.
              </p>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
