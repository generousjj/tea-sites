"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Abstract "attraction cross-section" blueprint that draws itself in on load.
 * Purely decorative CSS/SVG — no embedded real text or copyrighted imagery.
 */
export function HeroBlueprintDraw() {
  const reduce = useReducedMotion();

  const draw = (delay: number) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1.4, delay, ease: "easeInOut" as const },
        };

  return (
    <div className="relative h-full min-h-72 border border-[#4DA3D9]/40 bg-[#0D314B]/30 p-4">
      <div className="absolute left-3 top-3 font-plex-mono text-[10px] uppercase tracking-widest text-[#8ED8F8]">
        Fig. 01 — Experience section
      </div>
      <div className="absolute bottom-3 right-3 font-plex-mono text-[10px] uppercase tracking-widest text-[#F2B84B]">
        Scale 1:∞
      </div>
      <svg
        viewBox="0 0 200 150"
        className="h-full w-full"
        role="img"
        aria-label="Decorative blueprint diagram of an abstract attraction cross-section"
      >
        {/* ground line */}
        <motion.line
          x1="10" y1="120" x2="190" y2="120"
          stroke="#4DA3D9" strokeWidth="1"
          {...draw(0.2)}
        />
        {/* show building silhouette */}
        <motion.path
          d="M30 120 L30 70 L70 40 L110 70 L110 120"
          fill="none" stroke="#8ED8F8" strokeWidth="1.5"
          {...draw(0.4)}
        />
        {/* track / path curve */}
        <motion.path
          d="M20 110 Q60 60 100 95 T180 70"
          fill="none" stroke="#F2B84B" strokeWidth="1.5" strokeDasharray="4 3"
          {...draw(0.8)}
        />
        {/* dimension lines */}
        <motion.line x1="30" y1="132" x2="110" y2="132" stroke="#4DA3D9" strokeWidth="0.6" {...draw(1.1)} />
        <motion.line x1="30" y1="128" x2="30" y2="136" stroke="#4DA3D9" strokeWidth="0.6" {...draw(1.1)} />
        <motion.line x1="110" y1="128" x2="110" y2="136" stroke="#4DA3D9" strokeWidth="0.6" {...draw(1.1)} />
        {/* nodes */}
        <motion.circle cx="70" cy="40" r="3" fill="#F2B84B"
          initial={reduce ? false : { scale: 0 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ delay: 1.4, duration: 0.3 }}
        />
        <motion.circle cx="180" cy="70" r="3" fill="#F2B84B"
          initial={reduce ? false : { scale: 0 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ delay: 1.6, duration: 0.3 }}
        />
      </svg>
    </div>
  );
}
