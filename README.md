# TEA @ Stanford — Website Concepts

Three fully-coded, single-page website concepts for **TEA @ Stanford** (the
Stanford Themed Entertainment Association, "STEA"), built so they can be
previewed and compared side by side in the browser.

Each concept is a distinct visual system — different layout, typography, color,
graphic language, navigation, and interaction style — not a recolor of one
template.

| Route | Concept | Style |
| --- | --- | --- |
| `/` | Comparison & selection screen | Neutral review UI |
| `/concept-1` | **Stanford Creative Lab** | Editorial, interdisciplinary, credible |
| `/concept-2` | **Immersive Experience Blueprint** | Technical, spatial, cinematic |
| `/concept-3` | **Contemporary Attraction Poster** | Energetic, graphic, community-driven |

A small, unobtrusive **preview toolbar** is fixed to the bottom of every concept
page. It lets you return to the comparison screen, switch between concepts, see
the current concept name, and hide/minimize itself. It is deliberately styled
separately from the club designs and is intended for development review only.

## How to run

Requires Node 18+ (developed on Node 24).

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (type-checks the whole project)
npm run start    # serve the production build
npm run lint     # ESLint
```

Then open:

- <http://localhost:3000/> — comparison screen
- <http://localhost:3000/concept-1>
- <http://localhost:3000/concept-2>
- <http://localhost:3000/concept-3>

## Project structure

```text
src/
  app/
    layout.tsx            # root layout, loads all fonts as CSS variables
    globals.css           # base styles, font helpers, a11y, marquee keyframes
    page.tsx              # comparison / selection screen
    concept-1/page.tsx    # Stanford Creative Lab
    concept-2/page.tsx    # Immersive Experience Blueprint
    concept-3/page.tsx    # Contemporary Attraction Poster
  components/
    preview/              # ConceptToolbar, ConceptCard (review UI only)
    shared/               # SkipLink, PlaceholderLink, Modal, Reveal, BrandIcons
    concept-one/          # LabNav, LabProjects, LabDisciplines, LabJoinForm
    concept-two/          # BlueprintNav, DisciplineNetwork, BlueprintProjects,
                          #   HeroBlueprintDraw, HeroCoordinates, BlueprintJoinForm
    concept-three/        # PosterNav, EventMarquee, DisciplineCarousel,
                          #   PosterProjects, MagneticButton, PosterJoinForm
  data/
    events.ts             # sample events (typed)
    projects.ts           # sample projects (typed)
    disciplines.ts        # disciplines (typed)
    org.ts                # org info, pillars, why-join, majors, concept metadata
  lib/
    types.ts              # Event, Project, Discipline, Pillar, ConceptMeta types
    links.ts              # centralized placeholder link constants
    fonts.ts              # next/font declarations for every concept
    icons.tsx             # data-driven Lucide icon resolver + <Icon> component
    hooks.ts              # SSR-safe useMediaQuery / usePersistentBoolean
```

The concepts intentionally do **not** share visual components. Shared code is
limited to content data, types, accessibility utilities, the preview navigation,
and common functional behavior (modal, reveal-on-scroll, placeholder links).

## Replacing events and projects

All sample content lives in typed data files so it can be swapped without
touching the page layouts.

- **Events** — edit `src/data/events.ts`. Each entry follows the `Event` type
  (`src/lib/types.ts`): `title`, `category` (`"Speaker" | "Workshop" | "Trip" |
  "Social"`), `date`, optional `time`, `location`, `description`, optional
  `registrationUrl`, `featured`, and `placeholder`. The `featured: true` event is
  used for the "Featured Event" component; the rest render as upcoming cards. Set
  `placeholder: false` once an event is real to drop the "sample" note.
- **Projects** — edit `src/data/projects.ts`. Each entry follows the `Project`
  type: `title`, `category`, `year`, `description`, `disciplines[]`, optional
  `image`, and `placeholder`.
- **Disciplines** — edit `src/data/disciplines.ts` (`name`, `description`,
  `icon`). The `icon` string maps to a Lucide icon in `src/lib/icons.tsx`; add a
  new mapping there if you introduce a new icon name.
- **Org info / pillars / concept blurbs** — edit `src/data/org.ts`.

## Replacing placeholder links

All placeholder URLs are centralized in `src/lib/links.ts`:

```ts
JOIN_FORM_URL, MAILING_LIST_URL, EVENTS_REGISTRATION_URL,
SPONSOR_INQUIRY_URL, LINKEDIN_URL, INSTAGRAM_URL, CONTACT_EMAIL
```

Replace the `"#"` value (the `PLACEHOLDER` constant) with a real URL. Any link
still set to the placeholder is rendered through `PlaceholderLink`
(`src/components/shared/PlaceholderLink.tsx`), which turns it into a button that
shows an accessible "Link coming soon" message instead of navigating nowhere.
Once a real URL is supplied, the same component automatically renders a working
anchor (external links get `target="_blank"` + `rel="noopener noreferrer"`).

The Instagram handle `@tea.stanford` is shown as-is; only its link target is a
placeholder until the real profile URL is added.

## Replacing placeholder images

There are currently **no bitmap image placeholders** — all imagery is generated
with CSS/SVG (gradients, hatching, blueprint linework, poster shapes) to avoid
embedding text in images or using copyrighted attraction artwork.

To use real photography later:

- The `Project` type already has an optional `image` field. Drop club-owned
  images into `public/` (e.g. `public/placeholders/`) and reference them via
  `next/image` inside each concept's project component.
- Keep stable aspect ratios (the current placeholders use `4/3` and `16/9`) and
  always provide descriptive `alt` text.

## Dependencies added

On top of the `create-next-app` defaults (Next.js 16 App Router, React 19,
TypeScript, Tailwind CSS v4, ESLint):

- **framer-motion** — purposeful, reduced-motion-aware animations (scroll
  reveals, blueprint line drawing, carousel/accordion transitions, magnetic
  buttons).
- **lucide-react** — accessible icon set. (Brand icons like Instagram were
  removed upstream, so a small inline `InstagramIcon` lives in
  `src/components/shared/BrandIcons.tsx`.)

No UI component library was added; components are hand-built per concept. shadcn/
ui was intentionally not used to keep each concept's design fully independent.

## Accessibility & responsiveness

- Semantic HTML, logical heading order, and a skip-to-content link on every page.
- Keyboard-accessible navigation, visible focus states, and a focus-trapped,
  Escape-closable modal with restored focus.
- No essential information is hover-only (the desktop cursor-coordinate readout
  in Concept 2 is purely decorative and disabled for touch/reduced-motion).
- `prefers-reduced-motion` is respected globally and per-component.
- Tested at 375 / 390 / 768 / 1024 / 1440 px with no horizontal overflow and
  touch targets of at least 44×44 px.

## Disclaimers

This is a student-run project. It is **not** officially endorsed by Stanford
University or any entertainment company. All events, projects, speakers, and
partners shown are illustrative placeholders and do not represent real,
scheduled, or completed activities.
