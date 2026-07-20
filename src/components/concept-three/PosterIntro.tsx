"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useMediaQuery } from "@/lib/hooks";

const PANELS = ["#38233D", "#8C1515", "#F05A47", "#F4C95D"];

function signalDone() {
  const w = window as typeof window & { __c3IntroDone?: boolean };
  w.__c3IntroDone = true;
  window.dispatchEvent(new Event("c3:introDone"));
}

/**
 * GSAP page-enter transition: a stack of colored panels covers the viewport on
 * load, then wipes upward to reveal the page. Skipped for reduced-motion users.
 */
export function PosterIntro() {
  const rootRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Reduced motion: no curtain, just tell the hero it may animate.
    if (reduce) {
      signalDone();
      return;
    }

    document.body.style.overflow = "hidden";
    const unlock = () => {
      document.body.style.overflow = "";
    };

    const panels = gsap.utils.toArray<HTMLElement>(".c3-intro-panel");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          signalDone();
          unlock();
          setDone(true);
        },
      });
      tl.set(rootRef.current, { autoAlpha: 1 })
        .from(wordRef.current, {
          yPercent: 120,
          duration: 0.6,
          ease: "power4.out",
        })
        .to(wordRef.current, {
          yPercent: -120,
          duration: 0.5,
          ease: "power3.in",
          delay: 0.35,
        })
        .to(
          panels,
          {
            yPercent: -100,
            duration: 0.7,
            ease: "power4.inOut",
            stagger: 0.08,
          },
          "-=0.2"
        );
    }, rootRef);

    return () => {
      ctx.revert();
      unlock();
    };
  }, [reduce]);

  if (reduce || done) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[75] invisible"
    >
      <div className="absolute inset-0 flex">
        {PANELS.map((c) => (
          <div
            key={c}
            className="c3-intro-panel h-full flex-1"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <span
          ref={wordRef}
          className="font-archivo-black text-5xl uppercase tracking-tight text-[#FFF4DF] sm:text-7xl"
        >
          TEA @ Stanford
        </span>
      </div>
    </div>
  );
}
