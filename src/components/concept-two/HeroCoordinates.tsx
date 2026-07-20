"use client";

import { useRef, useState } from "react";
import { useMediaQuery } from "@/lib/hooks";

/**
 * Desktop-only cursor-following coordinate readout, scoped to the hero.
 * Disabled for touch (coarse pointer) and reduced-motion users.
 */
export function HeroCoordinates() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const fine = useMediaQuery("(pointer: fine)");
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (!fine || reduce) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        onMouseMove={(e) => {
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          setPos({
            x: Math.round(e.clientX - rect.left),
            y: Math.round(e.clientY - rect.top),
          });
        }}
        onMouseLeave={() => setPos(null)}
        style={{ pointerEvents: "auto" }}
      />
      {pos && (
        <>
          {/* Crosshair */}
          <div
            className="absolute h-px w-full bg-[#4DA3D9]/25"
            style={{ top: pos.y }}
          />
          <div
            className="absolute h-full w-px bg-[#4DA3D9]/25"
            style={{ left: pos.x }}
          />
          {/* Coordinate chip */}
          <div
            className="font-plex-mono absolute rounded bg-[#F2B84B] px-1.5 py-0.5 text-[10px] font-medium text-[#071A2B]"
            style={{
              left: Math.min(pos.x + 12, 9999),
              top: pos.y + 12,
            }}
          >
            X:{String(pos.x).padStart(4, "0")} Y:{String(pos.y).padStart(4, "0")}
          </div>
        </>
      )}
    </div>
  );
}
