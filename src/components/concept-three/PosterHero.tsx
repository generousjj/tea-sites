"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Star } from "lucide-react";
import { MagneticButton } from "@/components/concept-three/MagneticButton";
import { ORG } from "@/data/org";
import { JOIN_FORM_URL } from "@/lib/links";

/**
 * Concept 3 hero with a GSAP entrance timeline (synced to the page-enter
 * curtain) plus continuous floating decorative shapes. Reduced-motion users get
 * the final state instantly with no looping motion.
 */
export function PosterHero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shapes = gsap.utils.toArray<HTMLElement>(".c3-hero-shape", el);
    const items = gsap.utils.toArray<HTMLElement>("[data-hero-item]", el);

    if (reduce) {
      gsap.set([...items, ...shapes], { opacity: 1, clearProps: "transform" });
      return;
    }

    let onIntroDone: (() => void) | null = null;
    const ctx = gsap.context(() => {
      const play = () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(shapes, {
          scale: 0,
          opacity: 0,
          duration: 0.7,
          ease: "back.out(1.7)",
          stagger: 0.1,
        })
          .fromTo(
            items,
            { yPercent: 60, opacity: 0, rotate: 1.5 },
            {
              yPercent: 0,
              opacity: 1,
              rotate: 0,
              duration: 0.75,
              stagger: 0.09,
            },
            "-=0.4"
          );

        // Continuous ambient float on the decorative shapes.
        shapes.forEach((s, i) => {
          gsap.to(s, {
            y: i % 2 === 0 ? 18 : -16,
            x: i % 2 === 0 ? -10 : 12,
            rotate: i % 2 === 0 ? 8 : -8,
            duration: 3.5 + i * 0.6,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        });
      };

      const w = window as typeof window & { __c3IntroDone?: boolean };
      if (w.__c3IntroDone) {
        play();
      } else {
        onIntroDone = play;
        window.addEventListener("c3:introDone", play, { once: true });
      }
    }, root);

    return () => {
      if (onIntroDone) window.removeEventListener("c3:introDone", onIntroDone);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden">
      <div
        className="c3-hero-shape pointer-events-none absolute -right-16 -top-10 h-64 w-64 rounded-full bg-[#F4C95D]"
        aria-hidden
      />
      <div
        className="c3-hero-shape pointer-events-none absolute bottom-36 right-20 h-24 w-24 rotate-12 bg-[#69C5D8] sm:bottom-32 sm:right-24"
        aria-hidden
      />
      <div
        className="c3-hero-shape pointer-events-none absolute -left-10 top-40 hidden h-40 w-40 rounded-full border-8 border-[#38233D] sm:block"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 sm:pt-16">
        <span
          data-hero-item
          className="c3-hero-hidden inline-block -rotate-2 bg-[#8C1515] px-4 py-1.5 font-work-sans text-sm font-bold uppercase tracking-wide text-[#FFF4DF] shadow-[3px_3px_0_0_#1C1917]"
        >
          {ORG.formal}
        </span>

        <h1 className="font-archivo-black mt-6 text-[clamp(2.75rem,11vw,8rem)] uppercase leading-[0.82] tracking-tight text-[#1C1917]">
          <span data-hero-item className="c3-hero-hidden block">
            Build the
          </span>
          <span data-hero-item className="c3-hero-hidden block text-[#F05A47]">
            experiences
          </span>
          <span data-hero-item className="c3-hero-hidden block">
            people{" "}
            <span className="inline-block rotate-2 bg-[#F4C95D] px-2">
              remember
            </span>
          </span>
        </h1>

        <p
          data-hero-item
          className="c3-hero-hidden mt-8 max-w-xl text-lg font-medium leading-relaxed text-[#1C1917]/80"
        >
          {ORG.elevator}
        </p>

        <div
          data-hero-item
          className="c3-hero-hidden mt-8 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href={JOIN_FORM_URL}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#8C1515] px-8 py-4 text-base font-bold text-[#FFF4DF] shadow-[4px_4px_0_0_#1C1917] transition hover:bg-[#F05A47]"
            comingSoonMessage="Interest form coming soon"
            bubbleClassName="bg-[#1C1917] text-[#FFF4DF]"
          >
            Join TEA @ Stanford
            <ArrowRight className="h-5 w-5" aria-hidden />
          </MagneticButton>
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-[#1C1917] bg-[#FFF4DF] px-8 py-4 text-base font-bold text-[#1C1917] transition hover:bg-[#69C5D8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
          >
            Explore our work
          </a>
        </div>

        <p
          data-hero-item
          className="c3-hero-hidden mt-6 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-[#8C1515]"
        >
          <Star className="h-4 w-4 fill-current" aria-hidden />
          {ORG.allMajors}
        </p>
      </div>
    </section>
  );
}
