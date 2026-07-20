import type { Discipline } from "@/lib/types";

/**
 * How different disciplines contribute to themed entertainment. Each concept
 * renders these differently (cards, network, spatial map, carousel, etc.).
 * The `icon` maps to a Lucide icon resolved inside each concept.
 */
export const disciplines: Discipline[] = [
  {
    name: "Engineering",
    description:
      "Ride systems, mechanisms, and the physical machinery that makes a moment move, safely and reliably.",
    icon: "cog",
  },
  {
    name: "Storytelling",
    description:
      "The narrative spine — premise, characters, and the emotional arc a guest travels through.",
    icon: "book-open",
  },
  {
    name: "Architecture",
    description:
      "Space, structure, and flow — how a building shapes where guests go and what they feel.",
    icon: "building-2",
  },
  {
    name: "Theater",
    description:
      "Staging, performance, and live moments that make an environment feel alive.",
    icon: "drama",
  },
  {
    name: "Art & Animation",
    description:
      "Visual worldbuilding — concept art, color, texture, and motion that set the tone.",
    icon: "palette",
  },
  {
    name: "Sound & Media",
    description:
      "Music, audio, and screens that cue emotion and stitch scenes together.",
    icon: "audio-lines",
  },
  {
    name: "Business",
    description:
      "Strategy, budgeting, and audience — making an ambitious idea viable and sustainable.",
    icon: "briefcase",
  },
  {
    name: "Operations",
    description:
      "Guest flow, safety, and day-to-day show quality once the doors open.",
    icon: "shield-check",
  },
];
