import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TEA @ Stanford — Website Concepts",
    template: "%s · TEA @ Stanford",
  },
  description:
    "Three website concepts for TEA @ Stanford, the Stanford Themed Entertainment Association — exploring how memorable experiences are imagined, engineered, produced, and operated.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
