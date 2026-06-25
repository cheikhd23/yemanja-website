# Yemanjā website proposal

Premium landing website concept for Yemanjā by Sweet Coffee in Dakar.

The site is built to feel like the restaurant’s real entrance: warm stone, palms, lantern light, wood, ocean-night atmosphere, and a reservation-first flow.

## Getting Started

Install dependencies and run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Main files

- `src/app/page.tsx` — main page structure and reservation links
- `src/app/globals.css` — visual system, layout, and responsive design
- `src/components/palm-gate.tsx` — animated entrance reveal
- `src/components/menu-explorer.tsx` — editorial menu section
- `src/data/full-menu.ts` — structured menu transcription

## Checks

```bash
pnpm lint
pnpm build
```

## Deployment

Recommended deployment target: Vercel.

Project settings:

- Framework: Next.js
- Root directory: `web`
- Build command: `pnpm build`
- Output: Next.js default
- Install command: `pnpm install`
