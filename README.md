# Artl Tracker — Marketing Website

A premium, privacy-conscious marketing site for **Artl Tracker**, a workforce
intelligence platform (activity monitoring, analytics, device management, and payroll).
Rebuilt on the ArtlEms/ArtlOps stack with a Resend-inspired dark aesthetic.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens — see `src/app/globals.css`)
- **motion** (Framer Motion successor) for reveals and micro-interactions
- **lucide-react** icons
- **Onest** as the single typeface, self-hosted via `next/font/local`
- Bespoke dependency-free **SVG charts** (no charting library)

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## Structure

```
src/
  app/
    layout.tsx        # Onest font + metadata
    globals.css       # Tailwind v4 @theme tokens + utilities
    page.tsx          # home composition
    contact/page.tsx  # contact page
  components/         # ui, charts, hero mock, particle field, contact form, carousel
  sections/          # Navbar, Hero, Ecosystem, Features, ... Platform, Pricing, CTA, Footer
  lib/data.ts        # all copy + illustrative datasets
  fonts/             # self-hosted Onest .woff2 (OFL)
```

## What changed in this revision (the 9 requests)

1. **Stack → ArtlEms stack.** Migrated from Vite/React to Next.js 16 + React 19 + Tailwind v4.
2. **CTA redesigned.** The home CTA is now a split panel (message + actions on one side,
   a "up and running in minutes" quick-start on the other) instead of the old centered glow box.
3. **Contact page added** at `/contact` — form (name, email, company, topic, message) plus
   contact channels and location.
4. **"The Platform" section is now a stepper** (`#platform`): an interactive numbered rail with
   a progress line and a Back / Next detail panel. (The data-flow graph keeps its own
   "The Ecosystem" heading so the signature visual isn't lost.)
5. **Single font: Onest** everywhere. Numeric/tabular data uses Onest's tabular figures (`.tnum`)
   rather than a separate mono font.
6. **Studio + Resend touches:** near-black flat background, one restrained ambient glow,
   hairline borders, section top-rules for rhythm, generous whitespace, white primary buttons.
7. **Footer redesigned** with columned links and a large brand wordmark + "A product by Artl Studio".
8. **Mobile cards are carousels** (Features, Solutions/use-cases, Roles, Pricing): CSS
   scroll-snap, no animation on mobile; grids on desktop.
9. **Resend-like theme/layout** throughout (restraint, type, spacing, monochrome-with-accent).

## Notes / things to finalize

- **"Onset" → Onest.** The brief asked for the font "Onset"; there is no web font by that name.
  Onest (a geometric grotesk, Resend-adjacent) was used as the intended match. Swap the files in
  `src/fonts/` if a different face was meant.
- **Artl reference sites.** `artlstudio.com` / the ArtlEms site aren't publicly indexed, so the
  footer idea (#7) and mobile carousel (#8) follow the established studio pattern + Resend restraint
  rather than a pixel copy. Share the ArtlEms repo/URL to match either exactly.
- **Placeholders:** stat strip, pricing numbers, and contact details (`src/lib/data.ts` → `contact`)
  are placeholders. The contact form is front-end only — wire it to your email/Resend before launch.
- All dashboard/chart figures are **illustrative**, not real customer data.

## Revision 2 — requested edits

1. Footer rebuilt (ArtlEms-style): CTA strip, richer link columns, socials, a background
   texture (`public/footerBackground.png`) and an "A product by Artl Studio" credit using
   `public/artlstudio-long-white.webp`.
2. "The Ecosystem" now displays as an interactive connected **data pipeline** (hover/tap a
   stage to reveal its detail) instead of the dashed-dot flow.
3. Decorative shadows/glows are **purple** (indigo) throughout; green is reserved for live
   status only.
4. "Workforce Analytics" charts are a **carousel on mobile**.
5. New reusable **Carousel** (`src/components/Carousel.tsx`) with peeking cards + dot pagination.
6. Platform stepper transparency fixed (removed the exit-gap; keyed fade-in).
7. Roles reduced to **three**: Super Admin, Admin, Head of Department (Manager).
8. Pricing cards redesigned (icons, gradient-emphasized featured plan, cleaner price block).
9. Home CTA redesigned smoother (soft purple gradient, centered).
10. **Location removed** site-wide.
11. Custom **dropdowns**: a styled `Select` for the contact form and richer two-line nav menus.
12. Hero uses a **custom 3D dashboard** (pointer-tilt, parallax depth layers, floating live
    chips) — a system-themed take on a Resend-style hero.
13. Purple is now the dominant accent across the site.
14. Contact page + form redesigned (branded left panel, channels, socials).

> Note: the uploaded `node_modules` was missing the Linux `lightningcss` native binary — run a
> clean `npm install` on your machine and it will fetch the right one for your OS.
