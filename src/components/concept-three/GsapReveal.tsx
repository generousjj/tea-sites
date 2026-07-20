"use client";

import { useEffect, useRef, type CSSProperties, type ElementType } from "react";
import gsap from "gsap";

type GsapRevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  /** Starting offsets for the reveal. */
  y?: number;
  x?: number;
  scale?: number;
  rotate?: number;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
};

/**
 * Scroll-triggered reveal for Concept 3, powered by IntersectionObserver +
 * GSAP. The hidden state is rendered inline during SSR (no flash), and the
 * reduced-motion / no-JS fallbacks are handled in CSS + a <noscript> style on
 * the page, so content is always readable.
 */
export function GsapReveal({
  children,
  className,
  as,
  y = 28,
  x = 0,
  scale = 1,
  rotate = 0,
  delay = 0,
  duration = 0.85,
  style,
}: GsapRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1, clearProps: "transform" });
      return;
    }

    const animate = () => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        duration,
        delay,
        ease: "power3.out",
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, duration]);

  const hiddenStyle: CSSProperties = {
    opacity: 0,
    transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`,
    willChange: "transform, opacity",
    ...style,
  };

  return (
    <Tag ref={ref} data-c3-reveal className={className} style={hiddenStyle}>
      {children}
    </Tag>
  );
}
