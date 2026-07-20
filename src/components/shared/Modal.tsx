"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  labelledById: string;
  describedById?: string;
  children: React.ReactNode;
  /** Class for the centered dialog container (concept-styled). */
  className?: string;
  /** Class for the backdrop. */
  backdropClassName?: string;
};

const FOCUSABLE =
  'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])';

/**
 * Accessible modal dialog: portal, backdrop, Escape to close, focus trap, and
 * focus restoration. Concepts provide their own visual styling via className.
 */
export function Modal({
  open,
  onClose,
  labelledById,
  describedById,
  children,
  className = "",
  backdropClassName = "bg-black/60",
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const nodes = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
        ).filter((el) => el.offsetParent !== null || el === document.activeElement);
        if (nodes.length === 0) {
          e.preventDefault();
          return;
        }
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    lastFocused.current = document.activeElement as HTMLElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);

    // Move focus into the dialog.
    const t = setTimeout(() => {
      const first = dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE);
      (first ?? dialogRef.current)?.focus();
    }, 0);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
      clearTimeout(t);
      lastFocused.current?.focus?.();
    };
  }, [open, handleKey]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <div
        className={"absolute inset-0 " + backdropClassName}
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledById}
        aria-describedby={describedById}
        tabIndex={-1}
        className={"relative z-10 max-h-[90dvh] w-full overflow-y-auto " + className}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
