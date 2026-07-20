import type { Event } from "@/lib/types";

/**
 * Sample events. All content is placeholder — dates, speakers, and locations
 * are intentionally generic. Replace with real events as they are scheduled.
 */
export const featuredEvent: Event = {
  title: "Industry Speaker Night",
  category: "Speaker",
  date: "To Be Announced",
  location: "Stanford Campus",
  description:
    "Meet professionals working across creative, technical, and operational roles in themed entertainment. An evening of short talks, Q&A, and informal networking open to every major.",
  featured: true,
  placeholder: true,
};

export const events: Event[] = [
  featuredEvent,
  {
    title: "Attraction Design Workshop",
    category: "Workshop",
    date: "To Be Announced",
    time: "Evening session",
    location: "Design studio, Stanford Campus",
    description:
      "A hands-on session covering the fundamentals of ride and experience concepting — story beats, guest flow, and rapid model-making.",
    placeholder: true,
  },
  {
    title: "Theme Park & Studio Visit",
    category: "Trip",
    date: "To Be Announced",
    location: "Regional attraction (TBD)",
    description:
      "A field trip to study a real attraction up close — queue design, show systems, and operations — with a group debrief afterward.",
    placeholder: true,
  },
  {
    title: "Community Social",
    category: "Social",
    date: "To Be Announced",
    location: "Stanford Campus",
    description:
      "A relaxed mixer for new and returning members. Meet the community, swap favorite experiences, and find project collaborators.",
    placeholder: true,
  },
];

export const upcomingEvents: Event[] = events.filter((e) => !e.featured);
