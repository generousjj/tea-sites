import { ConceptCard } from "@/components/preview/ConceptCard";
import { SkipLink } from "@/components/shared/SkipLink";
import { CONCEPTS, ORG } from "@/data/org";

const COMPARISON: {
  attribute: string;
  c1: string;
  c2: string;
  c3: string;
}[] = [
  {
    attribute: "Vibe",
    c1: "Editorial & credible",
    c2: "Technical & spatial",
    c3: "Energetic & graphic",
  },
  {
    attribute: "Layout",
    c1: "Asymmetric editorial grid",
    c2: "Drafting sheet / diagram",
    c3: "Layered poster stack",
  },
  {
    attribute: "Typography",
    c1: "DM Serif + Inter",
    c2: "Space Grotesk + IBM Plex",
    c3: "Archivo Black + Work Sans",
  },
  {
    attribute: "Color",
    c1: "Cardinal on warm white",
    c2: "Blueprint navy + amber",
    c3: "Coral, gold, plum & sky",
  },
  {
    attribute: "Navigation",
    c1: "Slim top bar, numbered",
    c2: "Sheet index / coordinates",
    c3: "Bold sticky pill menu",
  },
  {
    attribute: "Discipline explorer",
    c1: "Numbered case cards",
    c2: "Connected systems network",
    c3: "Rotating carousel",
  },
  {
    attribute: "Motion",
    c1: "Restrained fades & reveals",
    c2: "Drawing-line animations",
    c3: "Playful stack transitions",
  },
];

export default function ComparisonPage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-dvh bg-neutral-50 text-neutral-900">
      <SkipLink />

      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#8C1515] text-xs font-bold text-white">
              T
            </span>
            {ORG.short}
            <span className="ml-1 rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-500">
              Design review
            </span>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="mx-auto max-w-6xl px-6 pt-14 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8C1515]">
            Website concept comparison
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Three directions for the {ORG.formal}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {ORG.elevator} Below are three fully-built, single-page homepage
            concepts. Open any of them, then use the preview bar to jump between
            concepts and return here to compare.
          </p>
        </section>

        <section
          aria-labelledby="concepts-heading"
          className="mx-auto max-w-6xl px-6 pb-14"
        >
          <h2 id="concepts-heading" className="sr-only">
            The three concepts
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CONCEPTS.map((c) => (
              <ConceptCard key={c.id} concept={c} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="compare-heading"
          className="border-t border-neutral-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h2
              id="compare-heading"
              className="text-2xl font-bold tracking-tight"
            >
              Intended style, side by side
            </h2>
            <p className="mt-2 max-w-2xl text-neutral-600">
              Each concept is a distinct visual system — not a recolor of the
              same layout. Here is how they differ at a glance.
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Comparison of the three website concepts across key design
                  attributes
                </caption>
                <thead>
                  <tr className="border-b border-neutral-300">
                    <th scope="col" className="py-3 pr-4 font-semibold">
                      Attribute
                    </th>
                    {CONCEPTS.map((c) => (
                      <th
                        key={c.id}
                        scope="col"
                        className="py-3 pr-4 font-semibold"
                      >
                        <span className="text-[#8C1515]">C{c.index}</span>{" "}
                        {c.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr
                      key={row.attribute}
                      className="border-b border-neutral-200 align-top"
                    >
                      <th
                        scope="row"
                        className="py-3 pr-4 font-medium text-neutral-500"
                      >
                        {row.attribute}
                      </th>
                      <td className="py-3 pr-4 text-neutral-800">{row.c1}</td>
                      <td className="py-3 pr-4 text-neutral-800">{row.c2}</td>
                      <td className="py-3 pr-4 text-neutral-800">{row.c3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-500">
          <p>
            {ORG.short} — student-run design review. Not an official Stanford
            University page. © {year}
          </p>
        </div>
      </footer>
    </div>
  );
}
