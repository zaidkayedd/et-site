"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";

/**
 * Mobile carousel: horizontal scroll-snap track with a peek of the next card
 * and dot pagination (ArtlEms-style). CSS-driven scrolling; JS only tracks the
 * active dot and handles dot taps. Caller decides when to show it (e.g. md:hidden).
 */
export function Carousel<T>({
  items,
  renderItem,
  itemBasis = "80%",
  className = "",
  ariaLabel,
}: {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  itemBasis?: string;
  className?: string;
  ariaLabel?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const center = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let min = Infinity;
    children.forEach((c, i) => {
      const cCenter = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(cCenter - center);
      if (d < min) {
        min = d;
        nearest = i;
      }
    });
    setActive(nearest);
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (child) el.scrollTo({ left: child.offsetLeft - 20, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div ref={trackRef} onScroll={onScroll} className="snap-track" role="list" aria-label={ariaLabel}>
        {items.map((item, i) => (
          <div key={i} className="snap-item" style={{ flexBasis: itemBasis }} role="listitem">
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label="Carousel pagination">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to item ${i + 1}`}
            aria-selected={active === i}
            role="tab"
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-indigo" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
