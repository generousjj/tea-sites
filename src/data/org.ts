import type { ConceptMeta, Pillar } from "@/lib/types";

export const ORG = {
  short: "TEA @ Stanford",
  formal: "Stanford Themed Entertainment Association",
  abbr: "STEA",
  mission:
    "TEA @ Stanford brings together students interested in the artistic, technical, operational, and business disciplines involved in creating memorable physical experiences.",
  elevator:
    "A Stanford student organization exploring how immersive, memorable experiences are imagined, engineered, produced, and operated — from theme parks and museums to immersive theater and interactive installations.",
  allMajors:
    "All majors and experience levels are welcome — from engineers and designers to writers, performers, and the simply theme-park-curious.",
  nextgen:
    "Connected to the Themed Entertainment Association's NextGen community.",
} as const;

/** What "themed entertainment" can include — for the explainer section. */
export const THEMED_ENTERTAINMENT_KINDS: string[] = [
  "Theme parks & attractions",
  "Museums & exhibitions",
  "Immersive theater",
  "Resorts",
  "Live entertainment",
  "Location-based entertainment",
  "Interactive spaces",
  "Experiential installations",
];

export const PILLARS: Pillar[] = [
  {
    title: "Design & Build",
    description:
      "Hands-on creative and technical projects, attraction concepts, and prototypes — from first sketch to a working show element.",
    icon: "hammer",
  },
  {
    title: "Learn from Industry",
    description:
      "Speaker nights, portfolio reviews, and career programming with professionals across creative, technical, and operational roles.",
    icon: "presentation",
  },
  {
    title: "Explore & Experience",
    description:
      "Theme park and studio visits, museum trips, and immersive experiences that turn field research into inspiration.",
    icon: "compass",
  },
  {
    title: "Connect & Collaborate",
    description:
      "An interdisciplinary community for mentorship, networking, and cross-major collaboration on ambitious ideas.",
    icon: "users",
  },
];

export const WHY_JOIN: string[] = [
  "Meet students across every discipline",
  "Build portfolio-ready projects",
  "Learn directly from working professionals",
  "Visit attractions and creative studios",
  "Compete in attraction design challenges",
  "Explore themed entertainment careers",
  "Join a welcoming creative community",
];

export const MAJORS: string[] = [
  "Mechanical Engineering",
  "Electrical Engineering",
  "Computer Science",
  "Product Design",
  "Architecture",
  "Theater & Performance",
  "Art & Animation",
  "Film & Media",
  "Music & Sound",
  "Business",
  "Project Management",
  "Writing",
  "Psychology",
  "Human-Centered Design",
  "Operations",
  "Safety",
];

export const CONCEPTS: ConceptMeta[] = [
  {
    id: "concept-1",
    index: 1,
    name: "Stanford Creative Lab",
    tagline: "Editorial · Interdisciplinary · Credible",
    description:
      "A refined, editorial homepage that reads like a leading university design lab or a modern architecture publication. Generous whitespace, asymmetric grids, numbered sections, and restrained motion.",
    href: "/concept-1",
  },
  {
    id: "concept-2",
    index: 2,
    name: "Immersive Experience Blueprint",
    tagline: "Technical · Spatial · Cinematic",
    description:
      "A process-driven homepage styled like attraction concept documents and show-system diagrams. Grid backgrounds, technical linework, annotations, coordinates, and animated drawing lines.",
    href: "/concept-2",
  },
  {
    id: "concept-3",
    index: 3,
    name: "Contemporary Attraction Poster",
    tagline: "Energetic · Graphic · Community-driven",
    description:
      "A bold, expressive homepage inspired by contemporary event posters and attraction key art. Oversized type, layered compositions, sticker-like labels, and playful, controlled motion.",
    href: "/concept-3",
  },
];
