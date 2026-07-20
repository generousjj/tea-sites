"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PlaceholderLink } from "@/components/shared/PlaceholderLink";
import { JOIN_FORM_URL } from "@/lib/links";

const LINKS = [
  { id: "about", label: "About", n: "A.01" },
  { id: "pillars", label: "Program", n: "A.02" },
  { id: "events", label: "Events", n: "B.01" },
  { id: "projects", label: "Projects", n: "B.02" },
  { id: "disciplines", label: "Systems", n: "C.01" },
  { id: "join", label: "Join", n: "D.01" },
  { id: "contact", label: "Contact", n: "D.02" },
];

export function BlueprintNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#4DA3D9]/25 bg-[#071A2B]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ED8F8]"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-[#4DA3D9] font-space-grotesk text-sm font-bold text-[#8ED8F8]">
            T
          </span>
          <span className="font-plex-mono text-[11px] uppercase tracking-[0.2em] text-[#EAF2F4]">
            TEA · Stanford
          </span>
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="group font-plex-mono text-[11px] uppercase tracking-wide text-[#EAF2F4]/80 transition hover:text-[#8ED8F8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ED8F8]"
                >
                  <span className="text-[#F2B84B]">{l.n}</span>{" "}
                  <span className="border-b border-transparent group-hover:border-[#8ED8F8]">
                    {l.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <PlaceholderLink
            href={JOIN_FORM_URL}
            className="inline-flex min-h-11 items-center gap-2 border border-[#F2B84B] bg-[#F2B84B] px-4 py-2 font-plex-mono text-[11px] font-medium uppercase tracking-wide text-[#071A2B] transition hover:bg-[#8ED8F8] hover:border-[#8ED8F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAF2F4]"
            comingSoonMessage="Interest form coming soon"
            bubbleClassName="bg-[#F2B84B] text-[#071A2B]"
          >
            Join
          </PlaceholderLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-[#4DA3D9]/40 text-[#EAF2F4] xl:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ED8F8]"
          aria-expanded={open}
          aria-controls="bp-mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      {open && (
        <div
          id="bp-mobile-menu"
          className="border-t border-[#4DA3D9]/25 bg-[#071A2B] xl:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-6 py-4">
            <ul className="divide-y divide-[#4DA3D9]/15">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center gap-3 py-1 font-plex-mono text-sm text-[#EAF2F4]"
                  >
                    <span className="text-[11px] text-[#F2B84B]">{l.n}</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <PlaceholderLink
              href={JOIN_FORM_URL}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center border border-[#F2B84B] bg-[#F2B84B] px-4 py-3 font-plex-mono text-sm font-medium uppercase tracking-wide text-[#071A2B]"
              comingSoonMessage="Interest form coming soon"
              bubbleClassName="bg-[#F2B84B] text-[#071A2B]"
            >
              Join TEA @ Stanford
            </PlaceholderLink>
          </nav>
        </div>
      )}
    </header>
  );
}
