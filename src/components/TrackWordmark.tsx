"use client";

/**
 * Resend-style oversized footer wordmark.
 * - Sits above the footer columns and blends into the page (bottom masked/cropped).
 * - Each letter lights up individually on hover with a smooth indigo/white glow.
 * Self-contained: styles live in the component, so it drops in anywhere.
 */
export function TrackWordmark({ text = "Track" }: { text?: string }) {
  return (
    <div className="tw-wrap" aria-hidden>
      <div className="tw-word">
        {[...text].map((ch, i) => (
          <span key={i} className="tw-letter">
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </div>

      <style>{`
        .tw-wrap {
          position: relative;
          width: 100%;
          line-height: 0;

        }
        .tw-word {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 0.9;
          font-size: clamp(3.75rem, 17vw, 15rem);
          transform: translateY(0.2em);
          /* gradual bottom fade → letters blend into the footer without a hard cut */
          -webkit-mask-image: linear-gradient(to bottom, #000 62%, rgba(0,0,0,0.4) 82%, transparent 100%);
          mask-image: linear-gradient(to bottom, #000 62%, rgba(0,0,0,0.4) 82%, transparent 100%);
    padding-top:2.5rem;
        }
        .tw-letter {
          color: rgba(255, 255, 255, 0.08);
          transition: color 0.9s ease, text-shadow 0.9s ease;
          will-change: color, text-shadow;
        }
        .tw-letter:hover {
          color: rgba(255, 255, 255, 0.7);
          text-shadow: 0 0 20px rgba(138, 143, 232, 0.42),
            0 0 48px rgba(104, 110, 218, 0.25),
            0 0 84px rgba(104, 110, 218, 0.14);
        }
        @media (prefers-reduced-motion: reduce) {
          .tw-letter { transition-duration: 0.001ms; }
        }
      `}</style>
    </div>
  );
}
