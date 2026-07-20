export type EventCategory = "Speaker" | "Workshop" | "Trip" | "Social";

export type Event = {
  title: string;
  category: EventCategory;
  date: string;
  time?: string;
  location: string;
  description: string;
  registrationUrl?: string;
  featured?: boolean;
  placeholder?: boolean;
};

export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  disciplines: string[];
  image?: string;
  placeholder?: boolean;
};

export type Discipline = {
  name: string;
  description: string;
  /** Lucide icon name — resolved by each concept's icon map. */
  icon: string;
};

export type Pillar = {
  title: string;
  description: string;
  icon: string;
};

export type ConceptId = "concept-1" | "concept-2" | "concept-3";

export type ConceptMeta = {
  id: ConceptId;
  index: number;
  name: string;
  tagline: string;
  description: string;
  href: string;
};
