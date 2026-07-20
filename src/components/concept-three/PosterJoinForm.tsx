"use client";

import { useState } from "react";

export function PosterJoinForm() {
  const [submitted, setSubmitted] = useState(false);

  const field =
    "min-h-12 w-full rounded-2xl border-2 border-[#1C1917] bg-[#FFF4DF] px-4 py-2.5 font-work-sans text-[#1C1917] outline-none placeholder:text-[#1C1917]/40 focus:border-[#8C1515] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8C1515]";
  const label =
    "mb-1.5 block font-work-sans text-sm font-bold uppercase tracking-wide text-[#1C1917]";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4"
      aria-describedby="poster-form-note"
    >
      <p id="poster-form-note" className="font-work-sans text-xs font-semibold text-[#1C1917]/60">
        Preview form — nothing is collected or sent.
      </p>
      <div>
        <label htmlFor="poster-name" className={label}>
          Name
        </label>
        <input id="poster-name" name="name" type="text" autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="poster-email" className={label}>
          Stanford email
        </label>
        <input id="poster-email" name="email" type="email" autoComplete="email" className={field} />
      </div>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#8C1515] px-6 py-3 font-work-sans text-base font-bold text-[#FFF4DF] transition hover:bg-[#F05A47] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
      >
        Count me in (preview)
      </button>
      <p role="status" aria-live="polite" className="min-h-5 font-work-sans text-sm font-bold text-[#8C1515]">
        {submitted
          ? "You're on the list — for real, connect the interest form to save responses."
          : ""}
      </p>
    </form>
  );
}
