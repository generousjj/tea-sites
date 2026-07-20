"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * SSR-safe media query hook using useSyncExternalStore. Returns false during
 * server render / hydration, then the real value on the client — with no
 * setState-in-effect and no hydration mismatch.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (typeof window === "undefined") return () => {};
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query]
  );

  const getSnapshot = () =>
    typeof window !== "undefined" && window.matchMedia(query).matches;

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

const FLAG_EVENT = "stea:flag-change";

/**
 * A boolean flag persisted to localStorage, exposed via useSyncExternalStore so
 * there is no setState in an effect and no hydration mismatch.
 */
export function usePersistentBoolean(
  key: string,
  fallback = false
): [boolean, (value: boolean) => void] {
  const subscribe = useCallback((onChange: () => void) => {
    if (typeof window === "undefined") return () => {};
    window.addEventListener("storage", onChange);
    window.addEventListener(FLAG_EVENT, onChange);
    return () => {
      window.removeEventListener("storage", onChange);
      window.removeEventListener(FLAG_EVENT, onChange);
    };
  }, []);

  const getSnapshot = () => {
    if (typeof window === "undefined") return fallback;
    try {
      const v = window.localStorage.getItem(key);
      return v === null ? fallback : v === "1";
    } catch {
      return fallback;
    }
  };

  const value = useSyncExternalStore(subscribe, getSnapshot, () => fallback);

  const set = useCallback(
    (next: boolean) => {
      try {
        window.localStorage.setItem(key, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      window.dispatchEvent(new Event(FLAG_EVENT));
    },
    [key]
  );

  return [value, set];
}
