"use client";

import Link from "next/link";
import { Home, PanelBottomClose, Eye, Check } from "lucide-react";
import { CONCEPTS } from "@/data/org";
import { usePersistentBoolean } from "@/lib/hooks";
import type { ConceptId } from "@/lib/types";

const STORAGE_KEY = "stea-preview-toolbar-hidden";

/**
 * Development preview toolbar. Intentionally styled as a neutral, unobtrusive
 * chrome that stays visually separate from every concept's own design.
 */
export function ConceptToolbar({ current }: { current: ConceptId }) {
  const [hidden, setHiddenPersist] = usePersistentBoolean(STORAGE_KEY, false);

  const currentMeta = CONCEPTS.find((c) => c.id === current);

  if (hidden) {
    return (
      <div className="fixed bottom-3 left-1/2 z-[90] -translate-x-1/2 print:hidden">
        <button
          type="button"
          onClick={() => setHiddenPersist(false)}
          className="flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-neutral-900/95 px-4 py-2 text-xs font-medium text-neutral-200 shadow-xl backdrop-blur transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Eye className="h-4 w-4" aria-hidden />
          Show preview bar
        </button>
      </div>
    );
  }

  return (
    <nav
      aria-label="Concept preview navigation"
      className="fixed bottom-3 left-1/2 z-[90] w-[min(96vw,760px)] -translate-x-1/2 print:hidden"
    >
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-neutral-900/95 px-2.5 py-2 text-neutral-200 shadow-2xl backdrop-blur">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Home className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Compare</span>
        </Link>

        <span
          className="mx-0.5 hidden h-6 w-px bg-white/15 sm:block"
          aria-hidden
        />

        <div className="flex flex-1 flex-wrap items-center gap-1">
          {CONCEPTS.map((c) => {
            const active = c.id === current;
            return (
              <Link
                key={c.id}
                href={c.href}
                aria-current={active ? "page" : undefined}
                className={
                  "flex min-h-11 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white " +
                  (active
                    ? "bg-white text-neutral-900"
                    : "text-neutral-300 hover:bg-white/10 hover:text-white")
                }
              >
                {active && <Check className="h-3.5 w-3.5" aria-hidden />}
                <span>C{c.index}</span>
                <span className="hidden max-w-[9rem] truncate md:inline">
                  · {c.name}
                </span>
              </Link>
            );
          })}
        </div>

        <span
          className="mx-0.5 hidden h-6 w-px bg-white/15 sm:block"
          aria-hidden
        />

        <div className="hidden max-w-[10rem] items-center px-1 text-[11px] leading-tight text-neutral-400 lg:flex">
          <span className="truncate">Viewing: {currentMeta?.name}</span>
        </div>

        <button
          type="button"
          onClick={() => setHiddenPersist(true)}
          className="flex min-h-11 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <PanelBottomClose className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Hide</span>
        </button>
      </div>
    </nav>
  );
}
