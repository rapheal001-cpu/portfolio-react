# Portfolio

A clean, dark, minimal developer portfolio built with **React + Vite + Tailwind CSS v4**.

## About Me

I'm a Software Developer with approximately 5 years of experience in programming and a strong interest in building reliable, scalable, and maintainable software solutions.

My development experience spans frontend and backend engineering, with a primary focus on **JavaScript, React.js, Python, Django, and Django REST Framework**. I enjoy designing and developing full-stack applications, building RESTful APIs, implementing authentication and application logic, and creating responsive user interfaces.

Beyond writing code, I'm interested in software architecture, database design, API development, performance optimization, and understanding the engineering principles behind production-ready applications.

I approach development with a problem-solving mindset, emphasizing clean code, maintainability, security, and continuous improvement. I also enjoy exploring new technologies, experimenting with ideas, and contributing to the developer community through knowledge sharing.

**My goal is to build software that solves meaningful problems, delivers real value, and stands the test of time.**

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

## Live site

Every push to `main` publishes the site with GitHub Pages at:

**https://rapheal001-cpu.github.io/reaphtech-portfolio/**

The Pages build uses `GITHUB_PAGES=true` so Vite prefixes asset URLs with `/reaphtech-portfolio/`.
The same code can still be deployed at the root of any other host.

## Make it yours

All editable content lives in **`src/data.js`** (projects, writing, skills, contact). Browser tab title and meta description are in `index.html`.

Colors are defined in `src/global.css` under `@theme`.

## Stack

- React 19
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- Inter + JetBrains Mono via Google Fonts
