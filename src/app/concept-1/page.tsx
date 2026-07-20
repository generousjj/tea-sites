import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Clock,
  Mail,
  Sparkles,
} from "lucide-react";
import { InstagramIcon } from "@/components/shared/BrandIcons";
import { ConceptToolbar } from "@/components/preview/ConceptToolbar";
import { SkipLink } from "@/components/shared/SkipLink";
import { Reveal } from "@/components/shared/Reveal";
import { PlaceholderLink } from "@/components/shared/PlaceholderLink";
import { LabNav } from "@/components/concept-one/LabNav";
import { LabDisciplines } from "@/components/concept-one/LabDisciplines";
import { LabProjects } from "@/components/concept-one/LabProjects";
import { LabJoinForm } from "@/components/concept-one/LabJoinForm";
import { Icon } from "@/lib/icons";
import {
  ORG,
  PILLARS,
  WHY_JOIN,
  MAJORS,
  THEMED_ENTERTAINMENT_KINDS,
} from "@/data/org";
import { featuredEvent, upcomingEvents } from "@/data/events";
import {
  JOIN_FORM_URL,
  MAILING_LIST_URL,
  SPONSOR_INQUIRY_URL,
  EVENTS_REGISTRATION_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  CONTACT_EMAIL,
} from "@/lib/links";
import type { EventCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Stanford Creative Lab",
  description:
    "Concept 1 — an editorial, interdisciplinary homepage for TEA @ Stanford styled like a leading university design lab.",
};

const CATEGORY_STYLE: Record<EventCategory, string> = {
  Speaker: "border-[#8C1515] text-[#8C1515]",
  Workshop: "border-[#53565A] text-[#53565A]",
  Trip: "border-[#820000] text-[#820000]",
  Social: "border-[#20201E] text-[#20201E]",
};

function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-cormorant text-lg tabular-nums text-[#8C1515]">
        {n}
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#53565A]">
        {children}
      </span>
      <span className="h-px flex-1 bg-[#20201E]/15" />
    </div>
  );
}

export default function ConceptOnePage() {
  const year = new Date().getFullYear();

  return (
    <div id="top" className="min-h-dvh bg-[#F7F4EF] text-[#20201E]">
      <SkipLink className="focus:bg-[#8C1515] focus:text-white" />
      <LabNav />

      <main id="main">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:pt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C1515]">
                  <Sparkles className="h-4 w-4" aria-hidden />
                  {ORG.formal}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="font-dm-serif mt-6 text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  Where engineering meets{" "}
                  <span className="italic text-[#8C1515]">storytelling</span>.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#53565A]">
                  {ORG.elevator}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <PlaceholderLink
                    href={JOIN_FORM_URL}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#8C1515] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#820000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20201E]"
                    comingSoonMessage="Interest form coming soon"
                    bubbleClassName="bg-[#20201E] text-[#F7F4EF]"
                  >
                    Join TEA @ Stanford
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </PlaceholderLink>
                  <a
                    href="#projects"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#20201E]/25 px-6 py-3 text-sm font-semibold text-[#20201E] transition hover:border-[#8C1515] hover:text-[#8C1515] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
                  >
                    Explore our work
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-sm text-[#53565A]">
                  {ORG.allMajors}
                </p>
              </Reveal>
            </div>

            {/* Asymmetric visual panel — CSS only */}
            <div className="lg:col-span-5">
              <Reveal delay={0.15} className="h-full">
                <div className="relative h-full min-h-72 overflow-hidden rounded-lg border border-[#20201E]/10 bg-[#E7DED2]">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(80% 80% at 75% 20%, rgba(140,21,21,0.9) 0%, rgba(140,21,21,0) 55%), linear-gradient(160deg, #E7DED2 0%, #F7F4EF 60%)",
                    }}
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 opacity-[0.5]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#20201E14 1px, transparent 1px), linear-gradient(90deg, #20201E14 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <p className="font-cormorant text-sm uppercase tracking-[0.2em] text-[#F7F4EF]">
                      Est. concept
                    </p>
                    <p className="font-dm-serif text-3xl text-[#F7F4EF]">
                      Design places
                      <br />
                      people remember.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ABOUT / WHAT IS THEMED ENTERTAINMENT */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-[#20201E]/10 bg-[#F7F4EF]"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SectionLabel n="01">What is themed entertainment?</SectionLabel>
            </Reveal>
            <div className="mt-8 grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <h2 className="font-dm-serif text-3xl leading-tight sm:text-4xl">
                  It is much more than theme parks.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-7">
                <p className="text-lg leading-relaxed text-[#53565A]">
                  Themed entertainment is the craft of designing physical places
                  and moments that tell a story and stay with people. It spans a
                  wide, growing field — anywhere design, technology, and
                  narrative combine to shape how a space feels.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {THEMED_ENTERTAINMENT_KINDS.map((k) => (
                    <li
                      key={k}
                      className="flex items-start gap-2 border-t border-[#20201E]/15 pt-3 text-[15px] text-[#20201E]"
                    >
                      <span className="mt-0.5 text-[#8C1515]">—</span>
                      {k}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROGRAM PILLARS */}
        <section
          id="pillars"
          className="scroll-mt-24 border-t border-[#20201E]/10"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SectionLabel n="02">What we do</SectionLabel>
            </Reveal>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[#20201E]/15 bg-[#20201E]/15 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p, i) => {
                return (
                  <Reveal
                    key={p.title}
                    delay={i * 0.06}
                    className="bg-[#F7F4EF]"
                  >
                    <div className="flex h-full flex-col p-6">
                      <div className="flex items-center justify-between">
                        <Icon name={p.icon} className="h-6 w-6 text-[#8C1515]" />
                        <span className="font-cormorant text-lg tabular-nums text-[#53565A]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-dm-serif mt-5 text-xl">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#53565A]">
                        {p.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section
          id="events"
          className="scroll-mt-24 border-t border-[#20201E]/10 bg-[#E7DED2]/40"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SectionLabel n="03">Events & trips</SectionLabel>
            </Reveal>

            {/* Featured */}
            <Reveal delay={0.05}>
              <div className="mt-10 grid overflow-hidden rounded-lg border border-[#20201E]/15 bg-[#F7F4EF] lg:grid-cols-2">
                <div className="relative min-h-56 bg-[#20201E]">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(90% 90% at 30% 20%, rgba(140,21,21,0.85) 0%, rgba(32,32,30,0) 60%)",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <span className="w-fit rounded-full bg-[#F7F4EF] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8C1515]">
                      Featured · {featuredEvent.category}
                    </span>
                    <p className="font-dm-serif text-2xl text-[#F7F4EF]">
                      {featuredEvent.title}
                    </p>
                  </div>
                </div>
                <div className="p-7">
                  <dl className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-[#53565A]">
                      <CalendarDays className="h-4 w-4 text-[#8C1515]" aria-hidden />
                      <dt className="sr-only">Date</dt>
                      <dd>{featuredEvent.date}</dd>
                    </div>
                    <div className="flex items-center gap-2 text-[#53565A]">
                      <MapPin className="h-4 w-4 text-[#8C1515]" aria-hidden />
                      <dt className="sr-only">Location</dt>
                      <dd>{featuredEvent.location}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#20201E]">
                    {featuredEvent.description}
                  </p>
                  <PlaceholderLink
                    href={EVENTS_REGISTRATION_URL}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#8C1515] px-5 py-2.5 text-sm font-semibold text-[#8C1515] transition hover:bg-[#8C1515] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
                    comingSoonMessage="Registration coming soon"
                    bubbleClassName="bg-[#20201E] text-[#F7F4EF]"
                  >
                    Register interest
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </PlaceholderLink>
                  {featuredEvent.placeholder && (
                    <p className="mt-3 text-xs text-[#53565A]">
                      Sample event — details to be announced.
                    </p>
                  )}
                </div>
              </div>
            </Reveal>

            {/* Upcoming list */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.05} as="article">
                  <div className="flex h-full flex-col rounded-lg border border-[#20201E]/15 bg-[#F7F4EF] p-6">
                    <span
                      className={
                        "w-fit rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider " +
                        CATEGORY_STYLE[e.category]
                      }
                    >
                      {e.category}
                    </span>
                    <h3 className="font-dm-serif mt-4 text-xl leading-tight">
                      {e.title}
                    </h3>
                    <dl className="mt-3 space-y-1.5 text-sm text-[#53565A]">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" aria-hidden />
                        <dt className="sr-only">Date</dt>
                        <dd>{e.date}</dd>
                      </div>
                      {e.time && (
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" aria-hidden />
                          <dt className="sr-only">Time</dt>
                          <dd>{e.time}</dd>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" aria-hidden />
                        <dt className="sr-only">Location</dt>
                        <dd>{e.location}</dd>
                      </div>
                    </dl>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#53565A]">
                      {e.description}
                    </p>
                    {e.placeholder && (
                      <p className="mt-3 text-xs text-[#53565A]">
                        Sample event — date to be announced.
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="scroll-mt-24 border-t border-[#20201E]/10"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SectionLabel n="04">Selected projects</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#53565A]">
                Example case studies showing how members could document design
                competitions, prototypes, and campus experiences.
              </p>
            </Reveal>
            <div className="mt-12">
              <LabProjects />
            </div>
          </div>
        </section>

        {/* DISCIPLINES */}
        <section
          id="disciplines"
          className="scroll-mt-24 border-t border-[#20201E]/10 bg-[#E7DED2]/40"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SectionLabel n="05">The disciplines</SectionLabel>
            </Reveal>
            <div className="mt-8 grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl leading-tight sm:text-4xl">
                  Every experience is built by many hands.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[#53565A]">
                  Expand each area to see how it contributes to a finished
                  experience. Most projects draw on several at once.
                </p>
              </Reveal>
              <div className="lg:col-span-8">
                <LabDisciplines />
              </div>
            </div>
          </div>
        </section>

        {/* WHY JOIN */}
        <section className="border-t border-[#20201E]/10">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SectionLabel n="06">Why join</SectionLabel>
            </Reveal>
            <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_JOIN.map((b, i) => (
                <Reveal key={b} delay={i * 0.04} as="li">
                  <div className="flex items-start gap-3 border-t border-[#20201E]/15 pt-4">
                    <span className="font-cormorant text-lg tabular-nums text-[#8C1515]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[17px] leading-snug text-[#20201E]">
                      {b}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* JOIN */}
        <section
          id="join"
          className="scroll-mt-24 border-t border-[#20201E]/10 bg-[#20201E] text-[#F7F4EF]"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E7DED2]">
                  07 — Join us
                </p>
                <h2 className="font-dm-serif mt-4 text-4xl leading-tight sm:text-5xl">
                  No experience required. Just curiosity.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[#E7DED2]">
                  Whether you want a career in themed entertainment or simply
                  love theme parks, museums, and immersive theater, there is a
                  place for you here.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PlaceholderLink
                    href={JOIN_FORM_URL}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#8C1515] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#820000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    comingSoonMessage="Interest form coming soon"
                    bubbleClassName="bg-[#F7F4EF] text-[#20201E]"
                  >
                    Interest form
                  </PlaceholderLink>
                  <PlaceholderLink
                    href={MAILING_LIST_URL}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#F7F4EF]/40 px-6 py-3 text-sm font-semibold text-[#F7F4EF] transition hover:border-[#F7F4EF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    comingSoonMessage="Mailing list coming soon"
                    bubbleClassName="bg-[#F7F4EF] text-[#20201E]"
                  >
                    Join mailing list
                  </PlaceholderLink>
                  <PlaceholderLink
                    href={INSTAGRAM_URL}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#F7F4EF]/40 px-6 py-3 text-sm font-semibold text-[#F7F4EF] transition hover:border-[#F7F4EF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    comingSoonMessage="Instagram coming soon"
                    bubbleClassName="bg-[#F7F4EF] text-[#20201E]"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {INSTAGRAM_HANDLE}
                  </PlaceholderLink>
                </div>
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#E7DED2]">
                    Open to majors including
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {MAJORS.slice(0, 10).map((m) => (
                      <li
                        key={m}
                        className="rounded-full border border-[#F7F4EF]/25 px-3 py-1 text-xs text-[#E7DED2]"
                      >
                        {m}
                      </li>
                    ))}
                    <li className="rounded-full border border-[#F7F4EF]/25 px-3 py-1 text-xs text-[#E7DED2]">
                      + more
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-lg bg-[#F7F4EF] p-6 text-[#20201E] sm:p-8">
                  <h3 className="font-dm-serif text-2xl">Express interest</h3>
                  <p className="mt-1 text-sm text-[#53565A]">
                    We&rsquo;ll follow up with next steps and upcoming events.
                  </p>
                  <div className="mt-5">
                    <LabJoinForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONALS & SPONSORS */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-[#20201E]/10"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SectionLabel n="08">For professionals & partners</SectionLabel>
            </Reveal>
            <div className="mt-8 grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-6">
                <h2 className="font-dm-serif text-3xl leading-tight sm:text-4xl">
                  Speakers, mentors, alumni & sponsors welcome.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#53565A]">
                  We invite industry professionals, alumni, and organizations to
                  collaborate through talks, mentorship, project support, and
                  sponsorship. We would love to build something meaningful with
                  you.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Guest speakers",
                    "Mentors",
                    "Alumni network",
                    "Industry partners",
                    "Sponsors",
                    "University partners",
                  ].map((r) => (
                    <div
                      key={r}
                      className="rounded-lg border border-[#20201E]/15 bg-[#F7F4EF] px-4 py-3 text-[15px] font-medium"
                    >
                      {r}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <PlaceholderLink
                    href={SPONSOR_INQUIRY_URL}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#8C1515] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#820000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20201E]"
                    comingSoonMessage="Sponsor inquiry coming soon"
                    bubbleClassName="bg-[#20201E] text-[#F7F4EF]"
                  >
                    Partner or sponsor
                  </PlaceholderLink>
                  <PlaceholderLink
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#20201E]/25 px-5 py-2.5 text-sm font-semibold text-[#20201E] transition hover:border-[#8C1515] hover:text-[#8C1515] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
                  >
                    <Mail className="h-4 w-4" aria-hidden />
                    Contact us
                  </PlaceholderLink>
                </div>
                <p className="mt-3 text-xs text-[#53565A]">
                  Contact address is a placeholder until the club email is set.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#20201E]/15 bg-[#F7F4EF]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-dm-serif text-2xl">{ORG.short}</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#53565A]">
                {ORG.mission}
              </p>
              <p className="mt-3 text-xs text-[#53565A]">{ORG.nextgen}</p>
            </div>
            <nav aria-label="Footer" className="md:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#53565A]">
                Explore
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
                {[
                  ["About", "#about"],
                  ["Program", "#pillars"],
                  ["Events", "#events"],
                  ["Projects", "#projects"],
                  ["Disciplines", "#disciplines"],
                  ["Join", "#join"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-[#20201E] transition hover:text-[#8C1515]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#53565A]">
                Connect
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <PlaceholderLink
                    href={INSTAGRAM_URL}
                    className="inline-flex items-center gap-2 text-[#20201E] transition hover:text-[#8C1515]"
                    comingSoonMessage="Instagram coming soon"
                    bubbleClassName="bg-[#20201E] text-[#F7F4EF]"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {INSTAGRAM_HANDLE}
                  </PlaceholderLink>
                </li>
                <li>
                  <PlaceholderLink
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 text-[#20201E] transition hover:text-[#8C1515]"
                  >
                    <Mail className="h-4 w-4" aria-hidden />
                    Email us
                  </PlaceholderLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-[#20201E]/15 pt-6 text-xs text-[#53565A]">
            <p>
              © {year} {ORG.short}. A student-run organization. Not officially
              endorsed by Stanford University or any entertainment company. All
              events and projects shown are illustrative placeholders.
            </p>
          </div>
        </div>
      </footer>

      <ConceptToolbar current="concept-1" />
      {/* Spacer so the fixed toolbar never covers footer content. */}
      <div className="h-20" aria-hidden />
    </div>
  );
}
