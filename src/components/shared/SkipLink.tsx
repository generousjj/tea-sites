/**
 * Accessible skip-to-content link. Visually hidden until focused.
 * `className` lets each concept theme the focused pill.
 */
export function SkipLink({
  targetId = "main",
  className = "",
}: {
  targetId?: string;
  className?: string;
}) {
  return (
    <a
      href={`#${targetId}`}
      className={
        "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg " +
        (className || "focus:bg-black focus:text-white")
      }
    >
      Skip to main content
    </a>
  );
}
