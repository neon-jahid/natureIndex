# NatureIndex — Nature & Biodiversity Database

A fully bilingual (**English + বাংলা**) interactive encyclopedia of Earth's biodiversity.
Frontend-only: React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui-style components (Radix) · Framer Motion · Lucide · React Router · Zustand · Recharts · Leaflet · i18next.

## Run

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # type-check + production build into dist/
npm run preview      # serve the production build
npm run fetch-images # (optional) re-resolve species photos from Wikipedia into src/data/images.json
```

The app is a single-page app. When deploying, rewrite all paths to `index.html`
(`public/_redirects` for Netlify and `vercel.json` for Vercel are included).

## Features

| Area | Route |
|---|---|
| Home — hero search, animated stats, categories, featured, species of the day, endangered spotlight, habitats, world, recently explored, awareness | `/` |
| Species Explorer — bilingual search, category/habitat/status/region/kingdom/class filters, 6 sort orders, grid/list, pagination (all state lives in the URL) | `/explore` |
| Species details — overview, gallery + lightbox, taxonomy, physical traits, ecology, range map, IUCN info, facts, related, share/copy/print/compare/favorite | `/species/:id` |
| Categories & category pages | `/categories`, `/categories/:id` |
| Habitats | `/habitats` |
| Interactive biodiversity map (category, habitat & status filters, colour by status/category, introduced ranges) | `/map` |
| Conservation dashboard | `/conservation` |
| My Collection — favorites, personal notes, "seen in the wild", export, recently viewed | `/favorites` |
| Species comparison (up to 3) | `/compare` |
| Species identification prototype (**simulated results, clearly labelled**) | `/identify` |
| About, 404 | `/about`, `*` |

Global search: press `/` or `Ctrl/⌘ + K`.

## Bilingual architecture

- `src/i18n/index.ts` — i18next setup; language stored in `localStorage` (`natureindex-lang`), default English.
- `src/i18n/locales/{en,bn}/*.json` — `common`, `navigation`, `categories`, `homepage`, `species`, `conservation`.
- Species content is stored bilingually in `src/data/species/*.ts` (`{ en, bn }` fields; Latin names unchanged).
- Switching language never navigates: route, query string (search & filters) and scroll position are kept.
- Numbers and dates use `Intl` with `en` / `bn-BD` (Bengali digits in Bengali mode).
- Bengali uses Hind Siliguri / Noto Sans Bengali with roomier line height and no negative tracking.

## Data notes

- 51 species across 12 categories. IUCN categories reflect the Red List to the best of our knowledge; where an assessment year was uncertain it is omitted rather than guessed.
- Dashboard: species charts are computed from the local database; tiger and giant-panda series come from official national surveys; global headline figures cite IUCN Red List 2025-1 and WWF LPR 2024. The "drivers of biodiversity loss" chart is **demonstration data** and is labelled as such.
- Photos are Wikimedia Commons images resolved at build time (`scripts/fetch-images.mjs`); if a photo fails to load, an illustrated placeholder is shown.
- Map tiles © OpenStreetMap contributors.
- Persisted in `localStorage` (`natureindex-store`): theme, favorites, notes, recently viewed, comparison list.
