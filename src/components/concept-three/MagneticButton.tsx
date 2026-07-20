"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PlaceholderLink } from "@/components/shared/PlaceholderLink";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  comingSoonMessage?: string;
  bubbleClassName?: string;
};

/**
 * Large "magnetic" button: on fine-pointer desktops it eases toward the
 * cursor. Falls back to a normal button for touch and reduced-motion users.
 */
export function MagneticButton({
  href,
  children,
  className = "",
  comingSoonMessage,
  bubbleClassName,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * 0.25, y: y * 0.25 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.3 }}
      className="inline-block"
    >
      <PlaceholderLink
        href={href}
        className={className}
        comingSoonMessage={comingSoonMessage}
        bubbleClassName={bubbleClassName}
      >
        {children}
      </PlaceholderLink>
    </motion.div>
  );
}
