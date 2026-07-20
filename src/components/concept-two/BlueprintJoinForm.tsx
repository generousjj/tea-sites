"use client";

import { useState } from "react";

export function BlueprintJoinForm() {
  const [submitted, setSubmitted] = useState(false);

  const field =
    "min-h-11 w-full border border-[#4DA3D9]/40 bg-[#071A2B] px-3 py-2 font-plex-sans text-[#EAF2F4] outline-none focus:border-[#8ED8F8] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8ED8F8]";
  const label =
    "mb-1.5 block font-plex-mono text-[10px] uppercase tracking-widest text-[#8ED8F8]";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4"
      aria-describedby="bp-form-note"
    >
      <p id="bp-form-note" className="font-plex-mono text-[10px] uppercase tracking-wide text-[#EAF2F4]/60">
        Preview form — no data is collected or transmitted.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="bp-name" className={label}>
            Name
          </label>
          <input id="bp-name" name="name" type="text" autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="bp-email" className={label}>
            Stanford email
          </label>
          <input id="bp-email" name="email" type="email" autoComplete="email" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="bp-focus" className={label}>
          Discipline of interest
        </label>
        <input id="bp-focus" name="focus" type="text" className={field} />
      </div>
      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center border border-[#F2B84B] bg-[#F2B84B] px-6 py-3 font-plex-mono text-xs font-medium uppercase tracking-wide text-[#071A2B] transition hover:bg-[#8ED8F8] hover:border-[#8ED8F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAF2F4]"
      >
        Submit interest (preview)
      </button>
      <p role="status" aria-live="polite" className="min-h-5 font-plex-mono text-xs text-[#8ED8F8]">
        {submitted
          ? "Logged locally. Connect the real interest form to collect responses."
          : ""}
      </p>
    </form>
  );
}
