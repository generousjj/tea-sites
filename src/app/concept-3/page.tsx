import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Clock,
  Mail,
  Star,
} from "lucide-react";
import { InstagramIcon } from "@/components/shared/BrandIcons";
import { ConceptToolbar } from "@/components/preview/ConceptToolbar";
import { SkipLink } from "@/components/shared/SkipLink";
import { Reveal } from "@/components/shared/Reveal";
import { PlaceholderLink } from "@/components/shared/PlaceholderLink";
import { PosterNav } from "@/components/concept-three/PosterNav";
import { EventMarquee } from "@/components/concept-three/EventMarquee";
import { DisciplineCarousel } from "@/components/concept-three/DisciplineCarousel";
import { PosterProjects } from "@/components/concept-three/PosterProjects";
import { PosterJoinForm } from "@/components/concept-three/PosterJoinForm";
import { MagneticButton } from "@/components/concept-three/MagneticButton";
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
  title: "Contemporary Attraction Poster",
  description:
    "Concept 3 — an energetic, graphic, poster-inspired homepage for TEA @ Stanford, built for community and community-driven design.",
};

const CATEGORY_STYLE: Record<EventCategory, { bg: string; text: string }> = {
  Speaker: { bg: "#F05A47", text: "#FFF4DF" },
  Workshop: { bg: "#F4C95D", text: "#1C1917" },
  Trip: { bg: "#69C5D8", text: "#1C1917" },
  Social: { bg: "#38233D", text: "#FFF4DF" },
};

export default function ConceptThreePage() {
  const year = new Date().getFullYear();

  return (
    <div id="top" className="min-h-dvh bg-[#FFF4DF] font-work-sans text-[#1C1917]">
      <SkipLink className="focus:bg-[#8C1515] focus:text-[#FFF4DF]" />
      <PosterNav />

      <main id="main">
        {/* HERO — layered poster */}
        <section className="relative overflow-hidden">
          {/* decorative shapes */}
          <div
            className="pointer-events-none absolute -right-16 -top-10 h-64 w-64 rounded-full bg-[#F4C95D]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-10 right-24 h-24 w-24 rotate-12 bg-[#69C5D8]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-10 top-40 h-40 w-40 rounded-full border-8 border-[#F05A47]"
            aria-hidden
          />

          <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 sm:pt-16">
            <Reveal>
              <span className="inline-block -rotate-2 bg-[#8C1515] px-4 py-1.5 font-work-sans text-sm font-bold uppercase tracking-wide text-[#FFF4DF] shadow-[3px_3px_0_0_#1C1917]">
                {ORG.formal}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-archivo-black mt-6 text-[clamp(2.75rem,11vw,8rem)] uppercase leading-[0.82] tracking-tight text-[#1C1917]">
                <span className="block">Build the</span>
                <span className="block text-[#F05A47]">experiences</span>
                <span className="block">
                  people{" "}
                  <span className="inline-block rotate-2 bg-[#F4C95D] px-2">
                    remember
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-[#1C1917]/80">
                {ORG.elevator}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton
                  href={JOIN_FORM_URL}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#8C1515] px-8 py-4 text-base font-bold text-[#FFF4DF] shadow-[4px_4px_0_0_#1C1917] transition hover:bg-[#F05A47]"
                  comingSoonMessage="Interest form coming soon"
                  bubbleClassName="bg-[#1C1917] text-[#FFF4DF]"
                >
                  Join TEA @ Stanford
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </MagneticButton>
                <a
                  href="#projects"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-[#1C1917] bg-[#FFF4DF] px-8 py-4 text-base font-bold text-[#1C1917] transition hover:bg-[#69C5D8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
                >
                  Explore our work
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-[#8C1515]">
                <Star className="h-4 w-4 fill-current" aria-hidden />
                {ORG.allMajors}
              </p>
            </Reveal>
          </div>

          {/* Marquee band */}
          <div className="border-y-4 border-[#1C1917] bg-[#69C5D8]">
            <EventMarquee />
          </div>
        </section>

        {/* ABOUT / WHAT IS THEMED ENTERTAINMENT */}
        <section id="about" className="scroll-mt-24 bg-[#38233D] text-[#FFF4DF]">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <Reveal>
              <p className="font-work-sans text-sm font-bold uppercase tracking-widest text-[#F4C95D]">
                What is themed entertainment?
              </p>
              <h2 className="font-archivo-black mt-4 max-w-3xl text-4xl uppercase leading-none sm:text-6xl">
                Way more than
                <span className="text-[#F05A47]"> theme parks.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#FFF4DF]/85">
                Themed entertainment is the art and craft of designing physical
                places and moments that tell a story. It shows up everywhere
                people gather to feel something.
              </p>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              {THEMED_ENTERTAINMENT_KINDS.map((k, i) => {
                const colors = ["#F05A47", "#F4C95D", "#69C5D8"];
                const bg = colors[i % colors.length];
                const dark = bg === "#F05A47";
                return (
                  <Reveal key={k} delay={i * 0.04}>
                    <span
                      className="inline-block rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide"
                      style={{
                        backgroundColor: bg,
                        color: dark ? "#FFF4DF" : "#1C1917",
                        transform: `rotate(${(i % 3) - 1}deg)`,
                      }}
                    >
                      {k}
                    </span>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROGRAM PILLARS */}
        <section id="pillars" className="scroll-mt-24 border-b-4 border-[#1C1917]">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <Reveal>
              <h2 className="font-archivo-black text-4xl uppercase leading-none sm:text-5xl">
                What we do
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p, i) => {
                const colors = [
                  { bg: "#F05A47", text: "#FFF4DF" },
                  { bg: "#F4C95D", text: "#1C1917" },
                  { bg: "#69C5D8", text: "#1C1917" },
                  { bg: "#8C1515", text: "#FFF4DF" },
                ];
                const c = colors[i % colors.length];
                return (
                  <Reveal key={p.title} delay={i * 0.06}>
                    <div
                      className="flex h-full flex-col rounded-3xl border-4 border-[#1C1917] p-6 shadow-[5px_5px_0_0_#1C1917]"
                      style={{ backgroundColor: c.bg, color: c.text }}
                    >
                      <Icon name={p.icon} className="h-9 w-9" />
                      <h3 className="font-archivo-black mt-4 text-xl uppercase leading-tight">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed opacity-90">
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
        <section id="events" className="scroll-mt-24 border-b-4 border-[#1C1917] bg-[#69C5D8]">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <Reveal>
              <h2 className="font-archivo-black text-4xl uppercase leading-none sm:text-5xl">
                Upcoming events
              </h2>
            </Reveal>

            {/* Featured */}
            <Reveal delay={0.05}>
              <div className="mt-10 grid overflow-hidden rounded-3xl border-4 border-[#1C1917] bg-[#FFF4DF] shadow-[6px_6px_0_0_#1C1917] lg:grid-cols-[1.3fr_1fr]">
                <div className="border-b-4 border-[#1C1917] p-7 lg:border-b-0 lg:border-r-4">
                  <span className="inline-block -rotate-2 bg-[#8C1515] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#FFF4DF]">
                    Featured · {featuredEvent.category}
                  </span>
                  <h3 className="font-archivo-black mt-4 text-3xl uppercase leading-none sm:text-4xl">
                    {featuredEvent.title}
                  </h3>
                  <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#1C1917]/80">
                    {featuredEvent.description}
                  </p>
                  <MagneticButton
                    href={EVENTS_REGISTRATION_URL}
                    className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1C1917] px-6 py-3 text-sm font-bold text-[#FFF4DF] transition hover:bg-[#8C1515]"
                    comingSoonMessage="Registration coming soon"
                    bubbleClassName="bg-[#1C1917] text-[#FFF4DF]"
                  >
                    Register interest
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </MagneticButton>
                </div>
                <div className="flex flex-col justify-center gap-4 bg-[#F4C95D] p-7">
                  <div className="flex items-center gap-2 font-bold">
                    <CalendarDays className="h-5 w-5" aria-hidden />
                    {featuredEvent.date}
                  </div>
                  <div className="flex items-center gap-2 font-bold">
                    <MapPin className="h-5 w-5" aria-hidden />
                    {featuredEvent.location}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#1C1917]/60">
                    Sample event — details TBA
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Upcoming cards */}
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((e, i) => {
                const c = CATEGORY_STYLE[e.category];
                return (
                  <Reveal key={e.title} delay={i * 0.05} as="article">
                    <div className="flex h-full flex-col rounded-3xl border-4 border-[#1C1917] bg-[#FFF4DF] p-6 shadow-[5px_5px_0_0_#1C1917]">
                      <span
                        className="w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
                        style={{ backgroundColor: c.bg, color: c.text }}
                      >
                        {e.category}
                      </span>
                      <h3 className="font-archivo-black mt-4 text-2xl uppercase leading-none">
                        {e.title}
                      </h3>
                      <dl className="mt-3 space-y-1.5 text-sm font-semibold text-[#1C1917]/80">
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
                      <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-[#1C1917]/75">
                        {e.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 border-b-4 border-[#1C1917]">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <Reveal>
              <h2 className="font-archivo-black text-4xl uppercase leading-none sm:text-5xl">
                Project showcase
              </h2>
              <p className="mt-4 max-w-2xl text-lg font-medium text-[#1C1917]/80">
                Tap a card to expand. Example projects showing how members could
                document competitions, prototypes, and campus experiences.
              </p>
            </Reveal>
            <div className="mt-10">
              <PosterProjects />
            </div>
          </div>
        </section>

        {/* DISCIPLINES CAROUSEL */}
        <section id="disciplines" className="scroll-mt-24 border-b-4 border-[#1C1917] bg-[#F4C95D]">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <Reveal>
              <h2 className="font-archivo-black text-4xl uppercase leading-none sm:text-5xl">
                Every discipline plays a part
              </h2>
              <p className="mt-4 max-w-2xl text-lg font-medium text-[#1C1917]/80">
                Spin through the disciplines that come together to build an
                experience. Use the arrows or pick one directly.
              </p>
            </Reveal>
            <div className="mt-10">
              <DisciplineCarousel />
            </div>
          </div>
        </section>

        {/* WHY JOIN */}
        <section className="border-b-4 border-[#1C1917] bg-[#38233D] text-[#FFF4DF]">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <Reveal>
              <h2 className="font-archivo-black text-4xl uppercase leading-none sm:text-5xl">
                Why join?
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_JOIN.map((b, i) => (
                <Reveal key={b} delay={i * 0.04} as="li">
                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-archivo-black text-sm text-[#1C1917]"
                      style={{ backgroundColor: "#F4C95D" }}
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <span className="text-lg font-semibold leading-snug">{b}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* JOIN */}
        <section id="join" className="scroll-mt-24 border-b-4 border-[#1C1917] bg-[#F05A47]">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="font-archivo-black text-5xl uppercase leading-[0.85] text-[#FFF4DF] sm:text-6xl">
                  No experience?
                  <br />
                  <span className="text-[#1C1917]">Perfect.</span>
                </h2>
                <p className="mt-6 max-w-md text-lg font-semibold leading-relaxed text-[#FFF4DF]">
                  All you need is curiosity. Whether you want a career in themed
                  entertainment or just love a great experience, come build with
                  us.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton
                    href={JOIN_FORM_URL}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1C1917] px-7 py-3.5 text-base font-bold text-[#FFF4DF] shadow-[4px_4px_0_0_#8C1515] transition hover:bg-[#38233D]"
                    comingSoonMessage="Interest form coming soon"
                    bubbleClassName="bg-[#1C1917] text-[#FFF4DF]"
                  >
                    Interest form
                  </MagneticButton>
                  <PlaceholderLink
                    href={MAILING_LIST_URL}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-[#1C1917] bg-[#FFF4DF] px-7 py-3.5 text-base font-bold text-[#1C1917] transition hover:bg-[#F4C95D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
                    comingSoonMessage="Mailing list coming soon"
                    bubbleClassName="bg-[#1C1917] text-[#FFF4DF]"
                  >
                    Mailing list
                  </PlaceholderLink>
                  <PlaceholderLink
                    href={INSTAGRAM_URL}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-[#1C1917] bg-[#FFF4DF] px-7 py-3.5 text-base font-bold text-[#1C1917] transition hover:bg-[#69C5D8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
                    comingSoonMessage="Instagram coming soon"
                    bubbleClassName="bg-[#1C1917] text-[#FFF4DF]"
                  >
                    <InstagramIcon className="h-5 w-5" />
                    {INSTAGRAM_HANDLE}
                  </PlaceholderLink>
                </div>
              </div>

              <div className="rounded-3xl border-4 border-[#1C1917] bg-[#FFF4DF] p-6 shadow-[6px_6px_0_0_#1C1917] sm:p-8">
                <h3 className="font-archivo-black text-3xl uppercase leading-none">
                  Count me in
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#1C1917]/70">
                  We&rsquo;ll follow up with next steps and events.
                </p>
                <div className="mt-5">
                  <PosterJoinForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONALS & SPONSORS */}
        <section id="contact" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <Reveal>
              <h2 className="font-archivo-black text-4xl uppercase leading-none sm:text-5xl">
                Partners &amp; pros
              </h2>
              <p className="mt-4 max-w-2xl text-lg font-medium text-[#1C1917]/80">
                We&rsquo;d love to work with speakers, mentors, alumni, industry
                partners, and sponsors who want to support the next generation of
                experience makers.
              </p>
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Guest speakers",
                "Mentors",
                "Alumni",
                "Industry partners",
                "Sponsors",
                "University partners",
              ].map((r, i) => {
                const colors = ["#F05A47", "#F4C95D", "#69C5D8", "#38233D", "#8C1515"];
                const bg = colors[i % colors.length];
                const light = bg === "#F4C95D" || bg === "#69C5D8";
                return (
                  <span
                    key={r}
                    className="inline-block rounded-full border-2 border-[#1C1917] px-5 py-2.5 text-sm font-bold uppercase tracking-wide"
                    style={{
                      backgroundColor: bg,
                      color: light ? "#1C1917" : "#FFF4DF",
                    }}
                  >
                    {r}
                  </span>
                );
              })}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                href={SPONSOR_INQUIRY_URL}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#8C1515] px-7 py-3.5 text-base font-bold text-[#FFF4DF] shadow-[4px_4px_0_0_#1C1917] transition hover:bg-[#F05A47]"
                comingSoonMessage="Sponsor inquiry coming soon"
                bubbleClassName="bg-[#1C1917] text-[#FFF4DF]"
              >
                Partner or sponsor
              </MagneticButton>
              <PlaceholderLink
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-[#1C1917] bg-[#FFF4DF] px-7 py-3.5 text-base font-bold text-[#1C1917] transition hover:bg-[#F4C95D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
              >
                <Mail className="h-5 w-5" aria-hidden />
                Contact us
              </PlaceholderLink>
            </div>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[#1C1917]/50">
              Contact address is a placeholder until the club email is set.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t-4 border-[#1C1917] bg-[#1C1917] text-[#FFF4DF]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-archivo-black text-3xl uppercase">
                TEA<span className="text-[#F05A47]">@</span>Stanford
              </p>
              <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-[#FFF4DF]/70">
                {ORG.mission}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[#F4C95D]">
                {ORG.nextgen}
              </p>
            </div>
            <nav aria-label="Footer" className="md:col-span-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F4C95D]">
                Explore
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm font-semibold">
                {[
                  ["About", "#about"],
                  ["Program", "#pillars"],
                  ["Events", "#events"],
                  ["Projects", "#projects"],
                  ["Disciplines", "#disciplines"],
                  ["Join", "#join"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="transition hover:text-[#F05A47]">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:col-span-3">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F4C95D]">
                Connect
              </p>
              <ul className="mt-3 space-y-2 text-sm font-semibold">
                <li>
                  <PlaceholderLink
                    href={INSTAGRAM_URL}
                    className="inline-flex items-center gap-2 transition hover:text-[#F05A47]"
                    comingSoonMessage="Instagram coming soon"
                    bubbleClassName="bg-[#FFF4DF] text-[#1C1917]"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {INSTAGRAM_HANDLE}
                  </PlaceholderLink>
                </li>
                <li>
                  <PlaceholderLink
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 transition hover:text-[#F05A47]"
                  >
                    <Mail className="h-4 w-4" aria-hidden />
                    Email us
                  </PlaceholderLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-[#FFF4DF]/20 pt-6 text-xs font-medium leading-relaxed text-[#FFF4DF]/60">
            <p>
              © {year} {ORG.short}. A student-run organization — not officially
              endorsed by Stanford University or any entertainment company. All
              events and projects shown are illustrative placeholders.
            </p>
          </div>
        </div>
      </footer>

      <ConceptToolbar current="concept-3" />
      <div className="h-20" aria-hidden />
    </div>
  );
}
