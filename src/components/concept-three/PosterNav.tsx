"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { PlaceholderLink } from "@/components/shared/PlaceholderLink";
import { InstagramIcon } from "@/components/shared/BrandIcons";
import { JOIN_FORM_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/links";

const LINKS = [
  { id: "about", label: "About" },
  { id: "pillars", label: "Program" },
  { id: "events", label: "Events" },
  { id: "projects", label: "Projects" },
  { id: "disciplines", label: "Disciplines" },
  { id: "join", label: "Join" },
  { id: "contact", label: "Contact" },
];

const FOCUSABLE =
  'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

export function PosterNav() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const reduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const closeMenu = useCallback(() => {
    const el = overlayRef.current;
    if (!el || reduced()) {
      setOpen(false);
      return;
    }
    gsap
      .timeline({ onComplete: () => setOpen(false) })
      .to(".c3-menu-link", {
        yPercent: 60,
        opacity: 0,
        duration: 0.25,
        stagger: 0.04,
        ease: "power2.in",
      })
      .to(el, { opacity: 0, duration: 0.3, ease: "power2.inOut" }, "-=0.1");
  }, []);

  // Body scroll lock, focus management, Escape + focus trap while open.
  useEffect(() => {
    if (!open) return;
    const el = overlayRef.current;
    const trigger = triggerRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (!reduced() && el) {
      gsap
        .timeline()
        .fromTo(
          el,
          { opacity: 0 },
          { opacity: 1, duration: 0.35, ease: "power2.out" }
        )
        .fromTo(
          ".c3-menu-link",
          { yPercent: 80, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.07,
            ease: "power3.out",
          },
          "-=0.1"
        );
    }

    const first = el?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key === "Tab" && el) {
        const nodes = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (nodes.length === 0) return;
        const firstEl = nodes[0];
        const lastEl = nodes[nodes.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && active === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && active === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      trigger?.focus();
    };
  }, [open, closeMenu]);

  return (
    <div className="sticky top-0 z-40 px-3 pt-3">
      <header className="mx-auto flex max-w-6xl items-center justify-between rounded-full border-4 border-[#1C1917] bg-[#FFF4DF] px-4 py-2 shadow-[4px_4px_0_0_#1C1917]">
        <a
          href="#top"
          className="font-archivo-black text-lg uppercase tracking-tight text-[#1C1917] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C1515]"
        >
          TEA<span className="text-[#F05A47]">@</span>Stanford
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="rounded-full px-3 py-2 font-work-sans text-sm font-bold text-[#1C1917] transition hover:bg-[#F4C95D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <PlaceholderLink
            href={JOIN_FORM_URL}
            className="inline-flex min-h-11 items-center rounded-full bg-[#8C1515] px-5 py-2.5 font-work-sans text-sm font-bold text-[#FFF4DF] transition hover:bg-[#F05A47] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
            comingSoonMessage="Interest form coming soon"
            bubbleClassName="bg-[#1C1917] text-[#FFF4DF]"
          >
            Join Now
          </PlaceholderLink>
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#1C1917] lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
          aria-expanded={open}
          aria-controls="poster-mobile-menu"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <Menu aria-hidden />
        </button>
      </header>

      {open && (
        <div
          id="poster-mobile-menu"
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[85] flex flex-col bg-[#38233D] text-[#FFF4DF] lg:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-archivo-black text-lg uppercase tracking-tight">
              TEA<span className="text-[#F05A47]">@</span>Stanford
            </span>
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FFF4DF] text-[#FFF4DF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4C95D]"
            >
              <span className="sr-only">Close menu</span>
              <X aria-hidden />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col justify-center overflow-y-auto px-6 pb-8"
          >
            <ul>
              {LINKS.map((l) => (
                <li key={l.id} className="overflow-hidden">
                  <a
                    href={`#${l.id}`}
                    onClick={closeMenu}
                    className="c3-menu-link flex min-h-[3.25rem] items-center font-archivo-black text-4xl uppercase leading-tight tracking-tight text-[#FFF4DF] transition-colors hover:text-[#F4C95D] focus-visible:text-[#F4C95D] focus-visible:outline-none sm:text-5xl"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="c3-menu-link mt-8 flex flex-col gap-3">
              <PlaceholderLink
                href={JOIN_FORM_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F05A47] px-6 py-3.5 font-work-sans text-base font-bold text-[#FFF4DF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4C95D]"
                comingSoonMessage="Interest form coming soon"
                bubbleClassName="bg-[#FFF4DF] text-[#1C1917]"
              >
                Join TEA @ Stanford
              </PlaceholderLink>
              <PlaceholderLink
                href={INSTAGRAM_URL}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#FFF4DF] px-6 py-3.5 font-work-sans text-base font-bold text-[#FFF4DF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4C95D]"
                comingSoonMessage="Instagram coming soon"
                bubbleClassName="bg-[#FFF4DF] text-[#1C1917]"
              >
                <InstagramIcon className="h-5 w-5" />
                {INSTAGRAM_HANDLE}
              </PlaceholderLink>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
