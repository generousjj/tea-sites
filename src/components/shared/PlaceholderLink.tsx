"use client";

import { useId, useRef, useState } from "react";
import { isPlaceholder } from "@/lib/links";

type PlaceholderLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Accessible label; falls back to text content. */
  "aria-label"?: string;
  /** Message shown when a placeholder link is activated. */
  comingSoonMessage?: string;
  /** Optional tone class for the "coming soon" bubble. */
  bubbleClassName?: string;
};

/**
 * Renders a real anchor when a URL is configured. When the URL is still a
 * placeholder, it renders a button that shows a visible, announced
 * "Link coming soon" response instead of navigating nowhere.
 */
export function PlaceholderLink({
  href,
  children,
  className = "",
  comingSoonMessage = "Link coming soon",
  bubbleClassName = "bg-neutral-900 text-white",
  ...rest
}: PlaceholderLinkProps) {
  const [showBubble, setShowBubble] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bubbleId = useId();

  if (!isPlaceholder(href)) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const announce = () => {
    setShowBubble(true);
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setShowBubble(false), 2200);
  };

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={announce}
        className={className}
        aria-describedby={showBubble ? bubbleId : undefined}
        {...rest}
      >
        {children}
      </button>
      <span
        id={bubbleId}
        role="status"
        aria-live="polite"
        className={
          "pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium shadow-lg transition-all duration-200 " +
          bubbleClassName +
          (showBubble ? " opacity-100 translate-y-0" : " opacity-0 -translate-y-1")
        }
      >
        {showBubble ? comingSoonMessage : ""}
      </span>
    </span>
  );
}
