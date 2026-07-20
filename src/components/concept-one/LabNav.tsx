"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PlaceholderLink } from "@/components/shared/PlaceholderLink";
import { JOIN_FORM_URL } from "@/lib/links";

const LINKS = [
  { id: "about", label: "About", n: "01" },
  { id: "pillars", label: "Program", n: "02" },
  { id: "events", label: "Events", n: "03" },
  { id: "projects", label: "Projects", n: "04" },
  { id: "disciplines", label: "Disciplines", n: "05" },
  { id: "join", label: "Join", n: "06" },
  { id: "contact", label: "Contact", n: "07" },
];

export function LabNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={
        "sticky top-0 z-40 border-b transition-colors duration-300 " +
        (scrolled
          ? "border-[#20201E]/10 bg-[#F7F4EF]/90 backdrop-blur"
          : "border-transparent bg-[#F7F4EF]")
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="group flex items-baseline gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C1515]"
        >
          <span className="font-dm-serif text-xl leading-none text-[#20201E]">
            TEA
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#53565A]">
            @ Stanford
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="group relative text-sm font-medium text-[#20201E] transition-colors hover:text-[#8C1515] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C1515]"
                >
                  <span className="mr-1 text-[10px] tabular-nums text-[#53565A]">
                    {l.n}
                  </span>
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#8C1515] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <PlaceholderLink
            href={JOIN_FORM_URL}
            className="inline-flex min-h-11 items-center rounded-full bg-[#8C1515] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#820000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20201E]"
            comingSoonMessage="Interest form coming soon"
            bubbleClassName="bg-[#20201E] text-[#F7F4EF]"
          >
            Join TEA
          </PlaceholderLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[#20201E] lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
          aria-expanded={open}
          aria-controls="lab-mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      {open && (
        <div
          id="lab-mobile-menu"
          className="border-t border-[#20201E]/10 bg-[#F7F4EF] lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-6 py-4">
            <ul className="divide-y divide-[#20201E]/10">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center gap-3 py-1 text-base font-medium text-[#20201E]"
                  >
                    <span className="text-xs tabular-nums text-[#53565A]">
                      {l.n}
                    </span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <PlaceholderLink
              href={JOIN_FORM_URL}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#8C1515] px-5 py-3 text-sm font-semibold text-white"
              comingSoonMessage="Interest form coming soon"
              bubbleClassName="bg-[#20201E] text-[#F7F4EF]"
            >
              Join TEA @ Stanford
            </PlaceholderLink>
          </nav>
        </div>
      )}
    </header>
  );
}
