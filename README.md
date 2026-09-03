# Studio Tech Portfolio — Figma → React

Pixel-accurate React + Tailwind implementation of the `CodethrivePortfolio`
Figma file (4 pages: Home / Work, Services, Process, About).

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
```

## Structure

```
src/
 ├─ assets/figmaImages.js   # image URL constants (see "Assets" below)
 ├─ components/
 │   ├─ Navbar.jsx          # shared nav, active-link highlighting via route
 │   └─ Footer.jsx          # shared footer
 ├─ pages/
 │   ├─ Home.jsx            # "/"        — hero, stats, selected works, CTA
 │   ├─ Services.jsx        # "/services"— hero, 6-service editorial list, stack, CTA
 │   ├─ Process.jsx         # "/process" — hero, 5-step vertical timeline
 │   └─ About.jsx           # "/about"   — narrative hero, mission, team
 ├─ App.jsx                 # react-router routes
 └─ main.jsx
```

Routing uses `react-router-dom`. "Work"/"Awards"/"Let's Talk" nav items point
to `/`, `/awards`, `/contact` respectively — `/awards` and `/contact` aren't
in the source Figma file, so they currently 404; wire them up once those
pages/sections exist.

## Design tokens (tailwind.config.js)

| token   | hex                    | use                          |
|---------|-------------------------|-------------------------------|
| ink     | #261814                 | headings / primary text       |
| clay    | #594139                 | body text                     |
| rust    | #ab3500                 | links, eyebrow labels          |
| ember   | #ff6b35                 | CTA buttons, stat highlight    |
| blush   | #f7ddd5                 | tag chips, soft accents        |
| sand    | #fff8f6                 | section backgrounds            |
| cream   | #e1bfb5                 | light display accent (Services)|
| hairline| rgba(225,191,181,.3)    | dividers / borders             |

Fonts: **Space Grotesk** (display/headings) + **DM Sans** (body), loaded via
Google Fonts in `index.html`. The Figma export listed a `Liberation Serif`
fallback on the Home page only (its actual typeface wasn't embedded in the
file) — since About/Process/Services all consistently use Space
Grotesk + DM Sans with the same tracking/weight system, Home was normalized
to the same pair rather than introducing a third, unintended serif.

## Assets — action required before shipping

`src/assets/figmaImages.js` currently points at Figma's temporary export CDN
(`figma.com/api/mcp/asset/...`). **These links expire ~7 days after export.**
Download each file and swap the import for a local asset (e.g.
`src/assets/images/nexora.png`) before deploying. The file lists every image
grouped by page with a short name so it's a mechanical find/replace.

No icon/logo assets were required — the tech-stack grid on Services uses
placeholder swatches (`bg-ink/10`) in place of the original per-tool SVG
icons, since those are decorative brand marks best sourced directly (e.g.
simple-icons) rather than re-exported from Figma.

## Accuracy checklist

- [x] Layout matches (grid columns, spacing, section order)
- [x] Colors match exactly (see token table)
- [x] Typography matches (Space Grotesk / DM Sans, tracked sizes)
- [x] Spacing matches (converted to Tailwind arbitrary values where needed)
- [x] Images match (Figma-exported photography, see Assets note above)
- [x] Buttons / cards / border-radius / shadows match
- [x] Responsive behavior added (stacks on mobile, preserves hierarchy)
- [x] No custom CSS files — Tailwind utilities only
- [ ] Tech-stack icons — placeholders pending real icon assets (see Assets)
