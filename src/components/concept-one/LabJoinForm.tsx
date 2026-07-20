"use client";

import { useState } from "react";

/**
 * Visually mocked interest form. It does not transmit any data — submitting
 * shows a local confirmation and points members to the real form placeholder.
 */
export function LabJoinForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4"
      aria-describedby="lab-form-note"
    >
      <p id="lab-form-note" className="text-xs text-[#53565A]">
        Preview form — no information is collected or sent.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="lab-name"
            className="mb-1.5 block text-sm font-medium text-[#20201E]"
          >
            Name
          </label>
          <input
            id="lab-name"
            name="name"
            type="text"
            autoComplete="name"
            className="min-h-11 w-full rounded-sm border border-[#20201E]/20 bg-white px-3 py-2 text-[#20201E] outline-none focus:border-[#8C1515] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8C1515]"
          />
        </div>
        <div>
          <label
            htmlFor="lab-email"
            className="mb-1.5 block text-sm font-medium text-[#20201E]"
          >
            Stanford email
          </label>
          <input
            id="lab-email"
            name="email"
            type="email"
            autoComplete="email"
            className="min-h-11 w-full rounded-sm border border-[#20201E]/20 bg-white px-3 py-2 text-[#20201E] outline-none focus:border-[#8C1515] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8C1515]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="lab-interest"
          className="mb-1.5 block text-sm font-medium text-[#20201E]"
        >
          What draws you to themed entertainment?
        </label>
        <textarea
          id="lab-interest"
          name="interest"
          rows={3}
          className="w-full rounded-sm border border-[#20201E]/20 bg-white px-3 py-2 text-[#20201E] outline-none focus:border-[#8C1515] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8C1515]"
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#8C1515] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#820000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20201E]"
      >
        Submit interest (preview)
      </button>

      <p role="status" aria-live="polite" className="min-h-5 text-sm text-[#8C1515]">
        {submitted
          ? "Thanks! This is a preview — connect the real interest form to start collecting responses."
          : ""}
      </p>
    </form>
  );
}
