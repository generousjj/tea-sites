"use client";

import { useReducedMotion } from "framer-motion";
import { events } from "@/data/events";

/**
 * Sliding event marquee. Uses a CSS animation that pauses on hover/focus and
 * is fully disabled for reduced-motion users (renders a static, wrapping row).
 */
export function EventMarquee() {
  const reduce = useReducedMotion();

  const items = events.map((e) => `${e.category} — ${e.title}`);
  const doubled = [...items, ...items];

  if (reduce) {
    return (
      <ul className="flex flex-wrap gap-x-6 gap-y-2 px-4 py-3 font-work-sans text-sm font-bold uppercase tracking-wide text-[#1C1917]">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-3">
            <span
              aria-hidden
              className="inline-block h-2 w-2 shrink-0 rotate-45 bg-[#8C1515]"
            />
            {t}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      className="group relative overflow-hidden"
      aria-label="Upcoming events ticker"
    >
      <div className="flex w-max animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap px-5 py-3 font-work-sans text-sm font-bold uppercase tracking-wide text-[#1C1917]"
            aria-hidden={i >= items.length}
          >
            <span
              aria-hidden
              className="inline-block h-2 w-2 shrink-0 rotate-45 bg-[#8C1515]"
            />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
