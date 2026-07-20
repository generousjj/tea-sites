"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { disciplines } from "@/data/disciplines";
import { Icon } from "@/lib/icons";

const CARD_COLORS = [
  { bg: "#F05A47", text: "#FFF4DF" },
  { bg: "#F4C95D", text: "#1C1917" },
  { bg: "#69C5D8", text: "#1C1917" },
  { bg: "#38233D", text: "#FFF4DF" },
  { bg: "#8C1515", text: "#FFF4DF" },
];

export function DisciplineCarousel() {
  const [index, setIndex] = useState(0);
  const n = disciplines.length;
  const cardRef = useRef<HTMLDivElement>(null);
  const dirRef = useRef(1);
  const firstRun = useRef(true);

  const go = (dir: number) => {
    dirRef.current = dir >= 0 ? 1 : -1;
    setIndex((prev) => (prev + dir + n) % n);
  };

  const jumpTo = (i: number) => {
    dirRef.current = i >= index ? 1 : -1;
    setIndex(i);
  };

  const active = disciplines[index];
  const color = CARD_COLORS[index % CARD_COLORS.length];

  // Animate the card content whenever the active slide changes.
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const el = cardRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-slide-item]");
    gsap.fromTo(
      targets,
      { x: dirRef.current * 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        overwrite: true,
      }
    );
  }, [index]);

  return (
    <div>
      <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto]">
        {/* Active card */}
        <div
          ref={cardRef}
          className="relative flex min-h-64 flex-col justify-between overflow-hidden rounded-3xl p-8 transition-colors duration-500"
          style={{ backgroundColor: color.bg, color: color.text }}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${n}: ${active.name}`}
        >
          <div data-slide-item className="flex items-start justify-between">
            <span
              className="flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ backgroundColor: "rgba(0,0,0,0.12)" }}
            >
              <Icon name={active.icon} className="h-8 w-8" />
            </span>
            <span className="font-archivo-black text-5xl opacity-30">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div data-slide-item>
            <h3 className="font-archivo-black text-4xl uppercase leading-none sm:text-5xl">
              {active.name}
            </h3>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed opacity-90">
              {active.description}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-row items-center justify-center gap-3 lg:flex-col">
          <button
            type="button"
            onClick={() => go(-1)}
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#1C1917] bg-[#FFF4DF] text-[#1C1917] transition hover:bg-[#F4C95D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
          >
            <span className="sr-only">Previous discipline</span>
            <ChevronLeft aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#1C1917] bg-[#1C1917] text-[#FFF4DF] transition hover:bg-[#8C1515] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
          >
            <span className="sr-only">Next discipline</span>
            <ChevronRight aria-hidden />
          </button>
        </div>
      </div>

      {/* Dots / quick select */}
      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Choose a discipline">
        {disciplines.map((d, i) => (
          <button
            key={d.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            onClick={() => jumpTo(i)}
            className={
              "min-h-9 rounded-full border-2 px-3 py-1 font-work-sans text-xs font-bold uppercase tracking-wide transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515] " +
              (i === index
                ? "border-[#1C1917] bg-[#1C1917] text-[#FFF4DF]"
                : "border-[#1C1917]/30 text-[#1C1917] hover:border-[#1C1917]")
            }
          >
            {d.name}
          </button>
        ))}
      </div>
    </div>
  );
}
