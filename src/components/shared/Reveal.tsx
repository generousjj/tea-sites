"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Vertical offset in px for the enter animation. */
  y?: number;
  /** Delay in seconds. */
  delay?: number;
  /** Duration in seconds. */
  duration?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Scroll-triggered fade/rise reveal that fully respects reduced-motion.
 * Shared functional behavior; visual tuning is passed per concept.
 */
export function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
  duration = 0.6,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : duration, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
