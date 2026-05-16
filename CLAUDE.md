# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `portfolio-v3/` directory:

```bash
npm start        # Dev server at localhost:3000
npm run build    # Production build
npm test         # Run tests in watch mode
```

No explicit lint script — ESLint runs via `react-scripts` using the `react-app` preset configured in `package.json`.

## Architecture

**Stack:** React 18 + TypeScript, bootstrapped with Create React App. No Tailwind — uses vanilla CSS with CSS custom properties for theming.

### Single-page scroll layout

There is no client-side routing despite React Router being installed. The app is a single scrollable page with sections:
- `App.tsx` listens to scroll events via `handleScroll()` and updates `activeNav` state
- Each scroll position maps to one of 7 color schemes defined in `colorScheme.css`
- NavBar links are anchor tags (`href="#section-id"`) — clicking scrolls to a section; scroll position drives the active nav state (not clicks)
- The animated nav underline follows the active item using CSS `transform: translateX`

### Key files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Root component, scroll listener, color scheme transitions |
| `src/colorScheme.css` | 7 CSS variable themes (one per section), applied via class on `<body>` |
| `src/types.tsx` | Shared TypeScript interfaces: `ActiveNav`, `DisplayInfo`, `SkillData`, `ProjectData` |
| `src/env.ts` | Notion API credentials — **should not be committed; move to `.env`** |

### Pages & components

Each page lives in `src/pages/<name>/` with a paired `.css` file. Components are in `src/components/`. Data is hardcoded as typed arrays inside each page component (no external data fetching at runtime currently).

### Notion data pipeline

`src/data/update/query_notion.js` is a standalone Node script (mostly commented out) that queries a Notion database to update portfolio data. It uses credentials from `src/env.ts`. The `.env-example` shows the expected env vars (`NOTION_KEY`, `NOTION_PAGE_ID`).

### Styling conventions

- CSS custom properties set per-section color scheme; components reference `var(--color-*)` tokens
- Component-scoped CSS files alongside each `.tsx`
- Hover tooltips (`DisplayInfo` state) used in Skills and Projects pages for detail overlays
