# KAVE Café Website

A modern, production-ready homepage for KAVE - a vegetarian & halal café in London.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles and Tailwind imports
├── components/
│   ├── Navigation.tsx  # Fixed navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── MenuCategories.tsx  # Menu category cards
│   ├── SignatureItems.tsx  # Featured menu items
│   ├── WhyKave.tsx     # Value propositions
│   ├── VisitUs.tsx     # Location and hours
│   └── Footer.tsx      # Footer with links
└── package.json
```

## Design System

- **Colors**: Warm cream backgrounds, charcoal text, sage green accents
- **Typography**: Space Grotesk (headings), Inter (body)
- **Style**: Clean, minimal, Scandinavian-inspired with plenty of whitespace

## Build for Production

```bash
npm run build
npm start
```

