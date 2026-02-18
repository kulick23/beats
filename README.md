# Beats Landing

A modern **React + TypeScript + Vite** landing page with responsive layout, mobile dropdown menu, product slider, and email subscription validation.

## Demo
- Local: `http://localhost:5173`
- Production: deploy-ready for Vercel via `vercel.json`

## Tech Stack
- **React 19**
- **TypeScript 5**
- **Vite 7**
- **Swiper 12**
- **Custom CSS**

## Features
- Responsive layout (mobile / tablet / desktop)
- Mobile burger dropdown navigation
- Smooth anchor scrolling
- Swiper coverflow slider section
- Subscription form with:
  - email validation
  - error message
  - success alert
- Hover/focus states for interactive UI elements

## Project Structure
```text
src/
  app/
    App.tsx
  pages/
    home/ui/HomePage.tsx
  widgets/
    header/
    hero/
    collection/
    specs/
    products/
    box/
    subscribe/
    footer/
  features/
    menu/model/useMenu.ts
  shared/
    config/navigation.ts
    lib/getAssetUrl.ts
    model/
      data.ts
      types.ts
styles/
  style.css
public/
  assets/
```

## Getting Started
### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## NPM Scripts
- `npm run dev` — run dev server
- `npm run build` — create production build
- `npm run preview` — preview production build locally
- `npm run serve` — run Vite on `localhost:8080`

## Deployment
### Vercel
Project is configured for Vercel deployment:
- `vercel.json`
  - framework: `vite`
  - output directory: `dist`
  - SPA rewrites to `index.html`

### GitHub Pages
Current Vite base path:
- `base: '/'`

## Quality
- `npm audit` reports **0 vulnerabilities**
- Production build passes successfully

