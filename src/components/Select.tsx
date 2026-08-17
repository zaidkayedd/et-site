"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export function Select({
  value,
  onChange,
  options,
  id,
  placeholder = "Select…",
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  id?: string;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        id={id}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-xl border bg-white/[0.02] px-4 py-3 text-sm transition-colors ${
          open ? "border-indigo/60" : "border-hair hover:border-hairbright"
        } ${value ? "text-white" : "text-faint"}`}
      >
        {value || placeholder}
        <ChevronDown className={`h-4 w-4 text-faint transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-hairbright bg-surface-2 p-1.5 shadow-[0_24px_60px_-20px_rgba(4,6,13,0.9)]"
        >
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <button
                key={opt}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  selected ? "bg-indigo/15 text-white" : "text-muted hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {opt}
                {selected && <Check className="h-4 w-4 text-indigo-soft" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
