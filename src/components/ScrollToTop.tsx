"use client";

import { useEffect } from "react";

/**
 * Ensures the page always opens at the very top (the hero), not a restored/offset
 * scroll position. Disables the browser's automatic scroll restoration and resets
 * to 0 on first mount.
 */
export function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Jump to the top instantly on load, ignoring any restored position.
    window.scrollTo(0, 0);
  }, []);

  return null;
}
