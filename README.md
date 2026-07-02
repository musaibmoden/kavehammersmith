# KAVE Café Website

A production-ready homepage for KAVE — a vegetarian & halal café in Hammersmith, London.

## Tech Stack

| Tool                    | Purpose                            |
| ----------------------- | ---------------------------------- |
| Next.js 14 (App Router) | Framework                          |
| React 18                | UI                                 |
| TypeScript              | Type safety                        |
| Tailwind CSS            | Styling + design tokens            |
| GSAP                    | Gallery animation                  |
| Google Sheets           | CMS (menu, hours, contact)         |
| Vercel                  | Hosting, Analytics, Speed Insights |
| ESLint + Prettier       | Linting + formatting               |
| Husky + lint-staged     | Pre-commit quality gate            |

## Prerequisites

- **Node ≥ 20** — use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) and run `nvm use` (`.nvmrc` is included)
- **npm ≥ 10**

## Setup

### 1. Clone and install

```bash
git clone <repo-url>
cd kavehammersmith
nvm use        # switches to Node 20 via .nvmrc
npm install    # also runs `husky` via the prepare script
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in both values:

| Variable                      | Description                                                                                              |
| ----------------------------- | -------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_GOOGLE_SHEET_ID` | ID from the Google Sheet URL — the sheet must be shared as "Anyone with the link can view"               |
| `NEXT_PUBLIC_SITE_URL`        | Canonical URL (e.g. `http://localhost:3000` locally, `https://kavehammersmith.vercel.app` in production) |

> `.env.local` is git-ignored and must never be committed.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | What it does                        |
| ---------------- | ----------------------------------- |
| `npm run dev`    | Start dev server with hot reload    |
| `npm run build`  | Production build                    |
| `npm start`      | Serve the production build locally  |
| `npm run lint`   | Run ESLint (`next/core-web-vitals`) |
| `npm run format` | Format all files with Prettier      |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, JSON-LD, analytics
│   ├── page.tsx            # Homepage (assembles all sections)
│   ├── globals.css         # Tailwind base + global styles
│   ├── error.tsx           # Runtime error boundary (retry button)
│   ├── not-found.tsx       # Custom 404 page
│   ├── loading.tsx         # Route-level loading skeleton
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # robots.txt
│   ├── privacy/page.tsx    # Privacy policy
│   └── terms/page.tsx      # Terms of service
├── components/
│   ├── Navigation.tsx      # Fixed nav bar with mobile hamburger
│   ├── Hero.tsx            # Full-screen hero with background image
│   ├── About.tsx           # Story section with interior photo
│   ├── BounceCards.tsx     # GSAP fan-card gallery animation
│   ├── SignatureItems.tsx  # Featured dishes (Google Sheets or fallback)
│   ├── WhyKave.tsx         # Value proposition cards
│   ├── MenuCategories.tsx  # Full menu with category sidebar + search
│   ├── VisitUs.tsx         # Address, hours, Google Maps embed
│   ├── Footer.tsx          # Footer with nav, hours, social links
│   └── Loader.tsx          # First-paint loading screen
├── lib/
│   └── googleSheets.ts     # Fetches menu/hours/contact from Sheets CSV export
├── public/                 # Static assets (images, logo)
├── .env.local.example      # Environment variable template
├── .eslintrc.json          # ESLint config (next/core-web-vitals)
├── .prettierrc.json        # Prettier config (semi:false, tailwindcss plugin)
├── .prettierignore
├── .nvmrc                  # Node 20
├── next.config.js          # Security headers, image remotePatterns
├── tailwind.config.js      # Design tokens (cream, charcoal, sage-green, …)
└── tsconfig.json
```

## Design Tokens

Defined in `tailwind.config.js` under `theme.extend.colors`:

| Token          | Hex       | Usage                    |
| -------------- | --------- | ------------------------ |
| `cream`        | `#FAF8F4` | Page backgrounds         |
| `charcoal`     | `#2C2C2C` | Body text, dark elements |
| `sage-green`   | `#9CAF88` | Accents, loader dots     |
| `coffee-brown` | `#6B5B4F` | Tertiary                 |
| `warm-cream`   | `#F5F1EB` | Subtle backgrounds       |

Fonts: **Space Grotesk** (`font-heading`) for headings, **Inter** (`font-sans`) for body.

## CMS — Google Sheets

Menu items, opening hours, and contact info are pulled live from a Google Sheet. The sheet must have these tabs with matching column headers:

| Sheet tab       | Required columns                                     |
| --------------- | ---------------------------------------------------- |
| `Menu`          | `name`, `description`, `price`, `category`, `image`  |
| `SignatureItem` | `name`, `description`, `price`, `category`, `image`  |
| `Hours`         | `open`, `close` (row 1 = weekdays, row 2 = weekends) |
| `Contact`       | `email`, `phone`, `address`, `instagram`             |

All components fall back to hardcoded defaults if the sheet is unavailable.

## Code Quality

- **Pre-commit hook** (Husky + lint-staged): runs `eslint --fix` → `prettier --write` on staged `.ts`/`.tsx` files, and `prettier --write` on `.js`/`.json`/`.css`/`.md` files automatically on every commit.
- **Lint**: `npx next lint` — zero errors expected (one `@next/next/no-img-element` warning in `BounceCards.tsx` is tracked and will be resolved when placeholder images are replaced).
- **Types**: `npx tsc --noEmit` — no errors.

## Deploying to Vercel

1. Push to GitHub and import the repository in the [Vercel dashboard](https://vercel.com).
2. Add the two environment variables (`NEXT_PUBLIC_GOOGLE_SHEET_ID`, `NEXT_PUBLIC_SITE_URL`) under **Settings → Environment Variables**.
3. Vercel Analytics and Speed Insights activate automatically after the first deploy (no extra configuration needed).
