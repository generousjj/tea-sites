"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { disciplines } from "@/data/disciplines";
import { Icon } from "@/lib/icons";

/** Editorial accordion: click/keyboard to expand each discipline's role. */
export function LabDisciplines() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="border-t border-[#20201E]/15">
      {disciplines.map((d, i) => {
        const isOpen = open === i;
        const panelId = `disc-panel-${i}`;
        const btnId = `disc-btn-${i}`;
        return (
          <li key={d.name} className="border-b border-[#20201E]/15">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-4 py-5 text-left transition-colors hover:text-[#8C1515] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
              >
                <span className="w-8 shrink-0 font-cormorant text-lg tabular-nums text-[#53565A]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon name={d.icon} className="h-5 w-5 shrink-0 text-[#8C1515]" />
                <span className="font-dm-serif flex-1 text-xl text-[#20201E] sm:text-2xl">
                  {d.name}
                </span>
                {isOpen ? (
                  <Minus className="h-5 w-5 shrink-0 text-[#53565A]" aria-hidden />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-[#53565A]" aria-hidden />
                )}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="pb-6 pl-12 pr-8 sm:pl-[4.5rem]"
            >
              <p className="max-w-2xl text-[15px] leading-relaxed text-[#53565A]">
                {d.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
