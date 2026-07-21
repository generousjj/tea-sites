import type { Project } from "@/lib/types";

/**
 * Real themed-entertainment project work from members. Full write-ups and
 * decks live on the portfolio linked from the Projects section
 * (see PORTFOLIO_URL in src/lib/links.ts).
 */
export const projects: Project[] = [
  {
    title: "Starport: Intergalactic Delivery Training",
    category: "Attraction Design Competition",
    year: "2026",
    description:
      "A story-driven trackless dark ride for Swamp Thrills 2026: a 16-passenger spacecraft is split by a giant nudibranch and sent through two parallel missions — Crustallos (a diamond storm) and Incendium (a collapsing star) — before reuniting for a final delivery. The attraction spans three floors with paired lifts and converter transfers, a wormhole-inspired audio chamber, projection and hologram effects, and a modeled throughput of 560 riders per hour. Awarded second place with Distinction in Attraction Overview, Schematics & Models, Attraction Story, and Concept Visuals.",
    disciplines: [
      "Storytelling",
      "Engineering",
      "Architecture",
      "Art & Animation",
      "Operations",
    ],
    placeholder: false,
  },
  {
    title: "Pilot Knob Lava Loop",
    category: "Attraction Design Competition",
    year: "Recent",
    description:
      "A solo Parkitecture entry: a fully accessible boardwalk loop at Morgan's Wonderland that drops guests into an extreme volcanic biome of vents, tubes, and fractured magma crust. Interactive interpretive stations turn Central Texas volcanic geology into hands-on play, leading with inclusion and safety (one continuous accessible loop, multi-height interactives, calm zones, high-contrast wayfinding), research and education, and immersion. Winner of the Innovation and Adventure Design Award.",
    disciplines: [
      "Architecture",
      "Storytelling",
      "Human-Centered Design",
      "Art & Animation",
      "Operations",
    ],
    placeholder: false,
  },
  {
    title: "Talking Maxwell",
    category: "Interactive Experience",
    year: "Recent",
    description:
      "A Bottango animatronic kit turned into a fully interactive character. The mechatronic skull is wired into the OpenAI API for real-time conversational responses, with smart servo control keeping the jaw, eyes, and head movements in sync with speech — guests can walk up and have an actual back-and-forth with Maxwell.",
    disciplines: [
      "Engineering",
      "Sound & Media",
      "Art & Animation",
      "Storytelling",
    ],
    placeholder: false,
  },
  {
    title: "Boba Bounce",
    category: "Interactive Experience",
    year: "Recent",
    description:
      "A themed kiosk experience and arcade-style game for Stanford's Chun Yang Tea, turning a storefront visit into a mini attraction. Custom characters were 3D-modeled and printed to sit on and hang off the existing kiosk, and the themed visuals, characters, and audio work together to pull in foot traffic and give the store a signature moment.",
    disciplines: [
      "Product Design",
      "Art & Animation",
      "Engineering",
      "Business",
    ],
    placeholder: false,
  },
  {
    title: "HauntComp",
    category: "Design Competition",
    year: "In progress",
    description:
      "An annual haunted-attraction design competition that challenges teams to create immersive horror experiences with innovative scares and storytelling. Our team's concept is currently in development.",
    disciplines: ["Storytelling", "Art & Animation", "Theater"],
    placeholder: false,
  },
  {
    title: "Optical Illusions Lab",
    category: "Research & Prototyping",
    year: "In progress",
    description:
      "Ongoing research and fabrication into illusion-based effects for themed environments: levitation displays (studying patents toward large-object levitation with 2-axis motion), Pepper's Ghost workshops building and decorating classic haunted-mansion stands, and custom-designed caustic lenses that project intricate light patterns for dynamic lighting.",
    disciplines: ["Engineering", "Art & Animation", "Sound & Media"],
    placeholder: false,
  },
];
