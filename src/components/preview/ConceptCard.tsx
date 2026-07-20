import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ConceptMeta } from "@/lib/types";

/** Abstract, CSS-only preview art evoking each concept's visual language. */
function PreviewArt({ id }: { id: ConceptMeta["id"] }) {
  if (id === "concept-1") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#F7F4EF] p-5">
        <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-[#8C1515]" />
        <div className="font-cormorant text-[11px] font-medium tracking-[0.2em] text-[#53565A]">
          01 — CREATIVE LAB
        </div>
        <div className="font-dm-serif mt-6 text-3xl leading-none text-[#20201E]">
          Design
          <br />
          places people
          <br />
          remember.
        </div>
        <div className="mt-5 h-px w-full bg-[#20201E]/20" />
        <div className="mt-3 flex gap-2">
          <div className="h-10 flex-1 rounded-sm bg-[#E7DED2]" />
          <div className="h-10 flex-1 rounded-sm bg-[#E7DED2]" />
          <div className="h-10 flex-1 rounded-sm bg-[#8C1515]/15" />
        </div>
      </div>
    );
  }

  if (id === "concept-2") {
    return (
      <div
        className="relative h-full w-full overflow-hidden bg-[#071A2B] p-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(77,163,217,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(77,163,217,0.15) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="font-plex-mono text-[10px] tracking-[0.15em] text-[#8ED8F8]">
          SHEET 02 · X:048 Y:120
        </div>
        <div className="font-space-grotesk mt-5 text-2xl font-bold leading-tight text-[#EAF2F4]">
          Imagined.
          <br />
          Engineered.
          <br />
          Operated.
        </div>
        <svg
          className="mt-4 h-14 w-full"
          viewBox="0 0 200 56"
          fill="none"
          aria-hidden
        >
          <path
            d="M4 40 L60 40 L80 12 L140 12 L160 44 L196 44"
            stroke="#4DA3D9"
            strokeWidth="1.5"
          />
          <circle cx="60" cy="40" r="3" fill="#F2B84B" />
          <circle cx="140" cy="12" r="3" fill="#F2B84B" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#38233D] p-5">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#F4C95D]" />
      <div className="absolute bottom-4 right-5 h-12 w-12 rotate-12 bg-[#69C5D8]" />
      <div className="font-work-sans inline-block -rotate-2 bg-[#F05A47] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
        Now casting
      </div>
      <div className="font-archivo-black mt-4 text-4xl uppercase leading-[0.85] text-[#FFF4DF]">
        Make
        <br />
        it
        <br />
        <span className="text-[#F4C95D]">real</span>
      </div>
    </div>
  );
}

export function ConceptCard({ concept }: { concept: ConceptMeta }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-xl">
      <Link
        href={concept.href}
        className="block aspect-[4/3] w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
        aria-label={`Open ${concept.name}`}
      >
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
          <PreviewArt id={concept.id} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C1515]">
          <span className="tabular-nums">Concept {concept.index}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold text-neutral-900">
          {concept.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-neutral-500">
          {concept.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
          {concept.description}
        </p>
        <Link
          href={concept.href}
          className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8C1515] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
        >
          Open concept
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
