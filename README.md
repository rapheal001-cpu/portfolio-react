# Portfolio

A clean, dark, minimal developer portfolio built with **React + Vite + Tailwind CSS v4**.

## Sections

Hero, About (bio + skills), Experience, Projects, Writing, Contact and Footer, with a sticky sidebar on desktop that stacks on mobile.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
```

The output goes to `dist/`.

## Make it yours

All editable content lives in **`src/data.js`** (projects, writing, skills, contact). Browser tab title and meta description are in `index.html`.

Colors are defined in `src/global.css` under `@theme`.

## Deploy to Render

This repo includes a `render.yaml` blueprint, so Render configures everything automatically.

1. Go to [dashboard.render.com](https://dashboard.render.com) → **New** → **Blueprint**.
2. Connect your GitHub account and select this repo (`reaphtech-portfolio`).
3. Render reads `render.yaml` and creates a static site named `raph-tech-portfolio`.
4. Click **Apply**. The first deploy takes a couple of minutes.

After that, every push to `main` triggers a new deploy automatically.

**Manual setup** (if you prefer **New → Static Site** instead of a Blueprint):

| Setting | Value |
| --- | --- |
| Repository | `https://github.com/rapheal001-cpu/reaphtech-portfolio` |
| Branch | `main` |
| Runtime | Static Site |
| Build command | `npm ci && npm run build` |
| Publish directory | `dist` |
| Node version | 22 |

Your live URL will look like `https://raph-tech-portfolio.onrender.com`.

## Stack

- React 19
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- Inter + JetBrains Mono via Google Fonts
