import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Clock,
  Mail,
  Ruler,
} from "lucide-react";
import { InstagramIcon } from "@/components/shared/BrandIcons";
import { ConceptToolbar } from "@/components/preview/ConceptToolbar";
import { SkipLink } from "@/components/shared/SkipLink";
import { Reveal } from "@/components/shared/Reveal";
import { PlaceholderLink } from "@/components/shared/PlaceholderLink";
import { BlueprintNav } from "@/components/concept-two/BlueprintNav";
import { DisciplineNetwork } from "@/components/concept-two/DisciplineNetwork";
import { BlueprintProjects } from "@/components/concept-two/BlueprintProjects";
import { BlueprintJoinForm } from "@/components/concept-two/BlueprintJoinForm";
import { HeroCoordinates } from "@/components/concept-two/HeroCoordinates";
import { HeroBlueprintDraw } from "@/components/concept-two/HeroBlueprintDraw";
import { Icon } from "@/lib/icons";
import {
  ORG,
  PILLARS,
  WHY_JOIN,
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
  title: "Immersive Experience Blueprint",
  description:
    "Concept 2 — a technical, spatial homepage for TEA @ Stanford styled like attraction concept documents and show-system diagrams.",
};

const CATEGORY_STYLE: Record<EventCategory, string> = {
  Speaker: "border-[#F2B84B] text-[#F2B84B]",
  Workshop: "border-[#8ED8F8] text-[#8ED8F8]",
  Trip: "border-[#4DA3D9] text-[#4DA3D9]",
  Social: "border-[#8C1515] text-[#F05A47]",
};

function SheetLabel({ code, children }: { code: string; children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="border border-[#F2B84B] px-2 py-0.5 font-plex-mono text-[10px] uppercase tracking-widest text-[#F2B84B]">
        {code}
      </span>
      <span className="font-plex-mono text-[11px] uppercase tracking-[0.2em] text-[#8ED8F8]">
        {children}
      </span>
      <span className="h-px flex-1 bg-[#4DA3D9]/30" />
    </div>
  );
}

export default function ConceptTwoPage() {
  const year = new Date().getFullYear();

  return (
    <div
      id="top"
      className="min-h-dvh bg-[#071A2B] text-[#EAF2F4]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(77,163,217,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(77,163,217,0.06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <SkipLink className="focus:bg-[#F2B84B] focus:text-[#071A2B]" />
      <BlueprintNav />

      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[#4DA3D9]/20">
          <HeroCoordinates />
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-12 lg:py-24">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-plex-mono text-[11px] uppercase tracking-[0.25em] text-[#8ED8F8]">
                  Sheet 00 · {ORG.formal}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="font-space-grotesk mt-6 text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                  Imagined.
                  <br />
                  Engineered.
                  <br />
                  <span className="text-[#F2B84B]">Operated.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#EAF2F4]/80">
                  {ORG.elevator}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <PlaceholderLink
                    href={JOIN_FORM_URL}
                    className="inline-flex min-h-11 items-center gap-2 border border-[#F2B84B] bg-[#F2B84B] px-6 py-3 font-plex-mono text-xs font-medium uppercase tracking-wide text-[#071A2B] transition hover:bg-[#8ED8F8] hover:border-[#8ED8F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAF2F4]"
                    comingSoonMessage="Interest form coming soon"
                    bubbleClassName="bg-[#F2B84B] text-[#071A2B]"
                  >
                    Join TEA @ Stanford
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </PlaceholderLink>
                  <a
                    href="#events"
                    className="inline-flex min-h-11 items-center gap-2 border border-[#4DA3D9]/50 px-6 py-3 font-plex-mono text-xs font-medium uppercase tracking-wide text-[#8ED8F8] transition hover:border-[#8ED8F8] hover:bg-[#4DA3D9]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ED8F8]"
                  >
                    See upcoming events
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 flex items-center gap-2 font-plex-mono text-[11px] uppercase tracking-wide text-[#EAF2F4]/60">
                  <Ruler className="h-4 w-4 text-[#F2B84B]" aria-hidden />
                  {ORG.allMajors}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.15} className="h-full">
                <HeroBlueprintDraw />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ABOUT / WHAT IS THEMED ENTERTAINMENT */}
        <section id="about" className="scroll-mt-20 border-b border-[#4DA3D9]/20">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SheetLabel code="A.01">What is themed entertainment</SheetLabel>
            </Reveal>
            <div className="mt-8 grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <h2 className="font-space-grotesk text-3xl font-bold leading-tight sm:text-4xl">
                  A field that extends far beyond theme parks.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[#EAF2F4]/75">
                  Themed entertainment is the discipline of engineering places
                  and moments that tell stories. Think of it as a system:
                  narrative inputs, technical systems, and operational outputs
                  working together.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-7">
                <ul className="grid grid-cols-1 gap-px overflow-hidden border border-[#4DA3D9]/25 bg-[#4DA3D9]/20 sm:grid-cols-2">
                  {THEMED_ENTERTAINMENT_KINDS.map((k, i) => (
                    <li
                      key={k}
                      className="flex items-center gap-3 bg-[#071A2B] px-4 py-4"
                    >
                      <span className="font-plex-mono text-[10px] text-[#F2B84B]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] text-[#EAF2F4]">{k}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROGRAM PILLARS */}
        <section id="pillars" className="scroll-mt-20 border-b border-[#4DA3D9]/20">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SheetLabel code="A.02">Program systems</SheetLabel>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p, i) => {
                return (
                  <Reveal key={p.title} delay={i * 0.06}>
                    <div className="flex h-full flex-col border border-[#4DA3D9]/30 bg-[#0D314B]/40 p-5">
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center border border-[#4DA3D9]/50 text-[#8ED8F8]">
                          <Icon name={p.icon} className="h-5 w-5" />
                        </span>
                        <span className="font-plex-mono text-[10px] text-[#F2B84B]">
                          SYS-{String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-space-grotesk mt-4 text-lg font-bold">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#EAF2F4]/70">
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
        <section id="events" className="scroll-mt-20 border-b border-[#4DA3D9]/20">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SheetLabel code="B.01">Events &amp; field trips</SheetLabel>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-10 grid overflow-hidden border border-[#F2B84B]/40 lg:grid-cols-[1.2fr_1fr]">
                <div className="border-b border-[#F2B84B]/40 p-7 lg:border-b-0 lg:border-r">
                  <span className="inline-block border border-[#F2B84B] px-2 py-0.5 font-plex-mono text-[10px] uppercase tracking-widest text-[#F2B84B]">
                    Featured · {featuredEvent.category}
                  </span>
                  <h3 className="font-space-grotesk mt-4 text-3xl font-bold">
                    {featuredEvent.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#EAF2F4]/80">
                    {featuredEvent.description}
                  </p>
                  <PlaceholderLink
                    href={EVENTS_REGISTRATION_URL}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 border border-[#8ED8F8] px-5 py-2.5 font-plex-mono text-[11px] uppercase tracking-wide text-[#8ED8F8] transition hover:bg-[#8ED8F8] hover:text-[#071A2B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ED8F8]"
                    comingSoonMessage="Registration coming soon"
                    bubbleClassName="bg-[#F2B84B] text-[#071A2B]"
                  >
                    Register interest
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </PlaceholderLink>
                </div>
                <div className="bg-[#0D314B]/40 p-7">
                  <dl className="space-y-4 font-plex-mono text-sm">
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-[#8ED8F8]">
                        Date
                      </dt>
                      <dd className="mt-1 flex items-center gap-2 text-[#EAF2F4]">
                        <CalendarDays className="h-4 w-4 text-[#F2B84B]" aria-hidden />
                        {featuredEvent.date}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-[#8ED8F8]">
                        Location
                      </dt>
                      <dd className="mt-1 flex items-center gap-2 text-[#EAF2F4]">
                        <MapPin className="h-4 w-4 text-[#F2B84B]" aria-hidden />
                        {featuredEvent.location}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-[#8ED8F8]">
                        Status
                      </dt>
                      <dd className="mt-1 text-[#EAF2F4]/70">
                        Sample event — TBA
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.05} as="article">
                  <div className="flex h-full flex-col border border-[#4DA3D9]/30 bg-[#0D314B]/40 p-5">
                    <span
                      className={
                        "w-fit border px-2.5 py-0.5 font-plex-mono text-[10px] uppercase tracking-widest " +
                        CATEGORY_STYLE[e.category]
                      }
                    >
                      {e.category}
                    </span>
                    <h3 className="font-space-grotesk mt-3 text-lg font-bold">
                      {e.title}
                    </h3>
                    <dl className="mt-3 space-y-1.5 font-plex-mono text-xs text-[#EAF2F4]/70">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                        <dt className="sr-only">Date</dt>
                        <dd>{e.date}</dd>
                      </div>
                      {e.time && (
                        <div className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5" aria-hidden />
                          <dt className="sr-only">Time</dt>
                          <dd>{e.time}</dd>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5" aria-hidden />
                        <dt className="sr-only">Location</dt>
                        <dd>{e.location}</dd>
                      </div>
                    </dl>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#EAF2F4]/70">
                      {e.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-20 border-b border-[#4DA3D9]/20">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SheetLabel code="B.02">Project drawings</SheetLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#EAF2F4]/75">
                Example projects, documented like concept drawings. Open any
                sheet to view its process timeline and contributing disciplines.
              </p>
            </Reveal>
            <div className="mt-10">
              <BlueprintProjects />
            </div>
          </div>
        </section>

        {/* DISCIPLINES NETWORK */}
        <section id="disciplines" className="scroll-mt-20 border-b border-[#4DA3D9]/20">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SheetLabel code="C.01">Discipline systems map</SheetLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#EAF2F4]/75">
                Every experience connects many disciplines to a shared center:
                the guest. Select any node to read how it contributes.
              </p>
            </Reveal>
            <div className="mt-12">
              <DisciplineNetwork />
            </div>
          </div>
        </section>

        {/* WHY JOIN */}
        <section className="border-b border-[#4DA3D9]/20">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SheetLabel code="C.02">Why join</SheetLabel>
            </Reveal>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_JOIN.map((b, i) => (
                <Reveal key={b} delay={i * 0.04} as="li">
                  <div className="flex items-start gap-3 border border-[#4DA3D9]/25 bg-[#0D314B]/30 px-4 py-4">
                    <span className="font-plex-mono text-[11px] text-[#F2B84B]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-snug text-[#EAF2F4]">
                      {b}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* JOIN */}
        <section id="join" className="scroll-mt-20 border-b border-[#4DA3D9]/20">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SheetLabel code="D.01">Join the association</SheetLabel>
                <h2 className="font-space-grotesk mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                  No previous experience required.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[#EAF2F4]/80">
                  Bring curiosity and a discipline you care about. We&rsquo;ll
                  connect you with a team building real experiences.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PlaceholderLink
                    href={JOIN_FORM_URL}
                    className="inline-flex min-h-11 items-center gap-2 border border-[#F2B84B] bg-[#F2B84B] px-6 py-3 font-plex-mono text-xs font-medium uppercase tracking-wide text-[#071A2B] transition hover:bg-[#8ED8F8] hover:border-[#8ED8F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAF2F4]"
                    comingSoonMessage="Interest form coming soon"
                    bubbleClassName="bg-[#F2B84B] text-[#071A2B]"
                  >
                    Interest form
                  </PlaceholderLink>
                  <PlaceholderLink
                    href={MAILING_LIST_URL}
                    className="inline-flex min-h-11 items-center gap-2 border border-[#4DA3D9]/50 px-6 py-3 font-plex-mono text-xs font-medium uppercase tracking-wide text-[#8ED8F8] transition hover:border-[#8ED8F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ED8F8]"
                    comingSoonMessage="Mailing list coming soon"
                    bubbleClassName="bg-[#F2B84B] text-[#071A2B]"
                  >
                    Mailing list
                  </PlaceholderLink>
                  <PlaceholderLink
                    href={INSTAGRAM_URL}
                    className="inline-flex min-h-11 items-center gap-2 border border-[#4DA3D9]/50 px-6 py-3 font-plex-mono text-xs font-medium uppercase tracking-wide text-[#8ED8F8] transition hover:border-[#8ED8F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ED8F8]"
                    comingSoonMessage="Instagram coming soon"
                    bubbleClassName="bg-[#F2B84B] text-[#071A2B]"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {INSTAGRAM_HANDLE}
                  </PlaceholderLink>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="border border-[#4DA3D9]/30 bg-[#0D314B]/40 p-6 sm:p-8">
                  <h3 className="font-space-grotesk text-2xl font-bold">
                    Express interest
                  </h3>
                  <p className="mt-1 font-plex-mono text-[11px] uppercase tracking-wide text-[#8ED8F8]">
                    Intake · preview only
                  </p>
                  <div className="mt-5">
                    <BlueprintJoinForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONALS & SPONSORS */}
        <section id="contact" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <SheetLabel code="D.02">Professionals &amp; partners</SheetLabel>
            </Reveal>
            <div className="mt-8 grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-6">
                <h2 className="font-space-grotesk text-3xl font-bold leading-tight sm:text-4xl">
                  Collaborate with our chapter.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#EAF2F4]/80">
                  We welcome speakers, mentors, alumni, industry partners, and
                  sponsors interested in supporting the next generation of
                  experience designers and engineers.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <PlaceholderLink
                    href={SPONSOR_INQUIRY_URL}
                    className="inline-flex min-h-11 items-center gap-2 border border-[#F2B84B] bg-[#F2B84B] px-5 py-2.5 font-plex-mono text-xs font-medium uppercase tracking-wide text-[#071A2B] transition hover:bg-[#8ED8F8] hover:border-[#8ED8F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAF2F4]"
                    comingSoonMessage="Sponsor inquiry coming soon"
                    bubbleClassName="bg-[#F2B84B] text-[#071A2B]"
                  >
                    Partner or sponsor
                  </PlaceholderLink>
                  <PlaceholderLink
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex min-h-11 items-center gap-2 border border-[#4DA3D9]/50 px-5 py-2.5 font-plex-mono text-xs font-medium uppercase tracking-wide text-[#8ED8F8] transition hover:border-[#8ED8F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ED8F8]"
                  >
                    <Mail className="h-4 w-4" aria-hidden />
                    Contact
                  </PlaceholderLink>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-6">
                <ul className="grid grid-cols-2 gap-px overflow-hidden border border-[#4DA3D9]/25 bg-[#4DA3D9]/20">
                  {[
                    "Guest speakers",
                    "Mentors",
                    "Alumni network",
                    "Industry partners",
                    "Sponsors",
                    "University partners",
                  ].map((r, i) => (
                    <li
                      key={r}
                      className="flex items-center gap-2 bg-[#071A2B] px-4 py-5"
                    >
                      <span className="font-plex-mono text-[10px] text-[#F2B84B]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-medium">{r}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-plex-mono text-[10px] uppercase tracking-wide text-[#8ED8F8]/60">
                  Contact address is a placeholder until the club email is set.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#4DA3D9]/25 bg-[#0D314B]/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-space-grotesk text-2xl font-bold">{ORG.short}</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#EAF2F4]/70">
                {ORG.mission}
              </p>
              <p className="mt-3 font-plex-mono text-[10px] uppercase tracking-wide text-[#8ED8F8]">
                {ORG.nextgen}
              </p>
            </div>
            <nav aria-label="Footer" className="md:col-span-4">
              <p className="font-plex-mono text-[10px] uppercase tracking-widest text-[#8ED8F8]">
                Index
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
                {[
                  ["About", "#about"],
                  ["Program", "#pillars"],
                  ["Events", "#events"],
                  ["Projects", "#projects"],
                  ["Systems", "#disciplines"],
                  ["Join", "#join"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-[#EAF2F4]/80 transition hover:text-[#8ED8F8]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:col-span-3">
              <p className="font-plex-mono text-[10px] uppercase tracking-widest text-[#8ED8F8]">
                Connect
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <PlaceholderLink
                    href={INSTAGRAM_URL}
                    className="inline-flex items-center gap-2 text-[#EAF2F4]/80 transition hover:text-[#8ED8F8]"
                    comingSoonMessage="Instagram coming soon"
                    bubbleClassName="bg-[#F2B84B] text-[#071A2B]"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {INSTAGRAM_HANDLE}
                  </PlaceholderLink>
                </li>
                <li>
                  <PlaceholderLink
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 text-[#EAF2F4]/80 transition hover:text-[#8ED8F8]"
                  >
                    <Mail className="h-4 w-4" aria-hidden />
                    Email us
                  </PlaceholderLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-[#4DA3D9]/25 pt-6 font-plex-mono text-[10px] uppercase leading-relaxed tracking-wide text-[#8ED8F8]/60">
            <p>
              © {year} {ORG.short}. Student-run organization. Not officially
              endorsed by Stanford University or any entertainment company. All
              events and projects shown are illustrative placeholders.
            </p>
          </div>
        </div>
      </footer>

      <ConceptToolbar current="concept-2" />
      <div className="h-20" aria-hidden />
    </div>
  );
}
