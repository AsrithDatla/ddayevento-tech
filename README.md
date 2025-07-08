# D-Day Evento

Premier Event Management in Hyderabad

## Overview
D-Day Evento is a modern, stylish event management web application built with React, TypeScript, Vite, and Tailwind CSS. It showcases event services, galleries, testimonials, and allows users to request quotes for their special occasions.

## Features
- Beautiful, responsive landing page
- Event categories and service listings
- Visual galleries and testimonials
- Quote request modal with WhatsApp integration
- Modern animations with Framer Motion
- SEO-friendly and fast

## Tech Stack
- **React** & **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **ESLint** (linting)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## File Structure
```
.
├── public/
├── src/
│   ├── api/
│   │   └── send-quote.ts
│   ├── components/
│   │   ├── ConnectWithUs.tsx
│   │   ├── EventCategories.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PopularClubhouses.tsx
│   │   ├── QuoteModal.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ValueProp.tsx
│   │   ├── VisualGalleries.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── data/
│   │   ├── eventsData.ts
│   │   ├── servicesData.ts
│   │   └── testimonialsData.ts
│   ├── hooks/
│   │   └── useQuoteForm.ts
│   ├── pages/
│   │   ├── AboutUs.tsx
│   │   ├── Blogs.tsx
│   │   ├── Packages.tsx
│   │   ├── events/
│   │   │   └── WeddingsPage.tsx
│   │   └── services/
│   │       └── DecorLightingPage.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .bolt/
├── .git/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Configuration
- **Tailwind CSS**: See `tailwind.config.js` for custom colors, fonts, and animations.
- **Vite**: See `vite.config.ts` for dev server and proxy settings.
- **TypeScript**: Configured via `tsconfig.*.json` files.
- **ESLint**: See `eslint.config.js` for linting rules.

## Fonts
- Uses [Google Fonts](https://fonts.google.com/): Inter, Dancing Script, Oswald, Bebas Neue (see `index.html`).

## License
This project is for demonstration and portfolio purposes.
