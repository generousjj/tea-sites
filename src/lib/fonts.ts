import {
  Inter,
  Manrope,
  DM_Serif_Display,
  Cormorant_Garamond,
  Space_Grotesk,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Archivo_Black,
  Work_Sans,
  Atkinson_Hyperlegible,
  Bricolage_Grotesque,
} from "next/font/google";

// Shared / UI
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Concept 1 — Stanford Creative Lab
export const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// Concept 2 — Immersive Experience Blueprint
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

// Concept 3 — Contemporary Attraction Poster
export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
});

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

/** All font CSS variables, applied at the root so any concept can use them. */
export const fontVariables = [
  inter.variable,
  manrope.variable,
  dmSerif.variable,
  cormorant.variable,
  spaceGrotesk.variable,
  plexSans.variable,
  plexMono.variable,
  archivoBlack.variable,
  workSans.variable,
  atkinson.variable,
  bricolage.variable,
].join(" ");
