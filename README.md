# Beats Landing

Современный лендинг на **React + TypeScript + Vite** с адаптивной версткой, интерактивным mobile dropdown-меню, слайдером коллекции и валидацией формы подписки.

## Demo
- Local: `http://localhost:5173`
- Production (Vercel): настраивается через `vercel.json`

## Stack
- **React 19**
- **TypeScript 5**
- **Vite 7**
- **Swiper 12**
- **CSS (custom, without UI frameworks)**

## Features
- Адаптивная верстка для mobile/tablet/desktop
- Dropdown burger-меню на мобильных
- Плавный скролл по якорям
- Swiper coverflow-слайдер
- Блок подписки с:
  - валидацией email
  - сообщением об ошибке
  - красивым success-alert
- Hover/focus состояния для интерактивных элементов

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
```

## Getting Started
### 1. Install
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```

### 3. Build
```bash
npm run build
```

### 4. Preview build
```bash
npm run preview
```

## Scripts
- `npm run dev` — запуск в режиме разработки
- `npm run build` — production build
- `npm run preview` — локальный предпросмотр production build
- `npm run serve` — запуск Vite на `localhost:8080`
- `npm run deploy` — сборка и деплой ветки `dist` в `gh-pages`

## Deployment
### Vercel
Проект готов к деплою на Vercel, конфиг уже добавлен:
- `vercel.json`
  - framework: `vite`
  - output: `dist`
  - SPA rewrites на `index.html`

### GitHub Pages
Учитывается `base` в `vite.config.ts`:
- `base: '/beats/'`

## Quality
- Зависимости обновлены и проверены: `npm audit` → **0 vulnerabilities**
- Production build проходит успешно


