"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PlaceholderLink } from "@/components/shared/PlaceholderLink";
import { JOIN_FORM_URL } from "@/lib/links";

const LINKS = [
  { id: "about", label: "About" },
  { id: "pillars", label: "Program" },
  { id: "events", label: "Events" },
  { id: "projects", label: "Projects" },
  { id: "disciplines", label: "Disciplines" },
  { id: "join", label: "Join" },
  { id: "contact", label: "Contact" },
];

export function PosterNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#1C1917] lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
          aria-expanded={open}
          aria-controls="poster-mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </header>

      {open && (
        <div
          id="poster-mobile-menu"
          className="mx-auto mt-2 max-w-6xl rounded-3xl border-4 border-[#1C1917] bg-[#FFF4DF] p-4 shadow-[4px_4px_0_0_#1C1917] lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="grid grid-cols-2 gap-2">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center justify-center rounded-2xl border-2 border-[#1C1917] font-work-sans text-sm font-bold text-[#1C1917]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <PlaceholderLink
              href={JOIN_FORM_URL}
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#8C1515] px-5 py-3 font-work-sans text-sm font-bold text-[#FFF4DF]"
              comingSoonMessage="Interest form coming soon"
              bubbleClassName="bg-[#1C1917] text-[#FFF4DF]"
            >
              Join TEA @ Stanford
            </PlaceholderLink>
          </nav>
        </div>
      )}
    </div>
  );
}
