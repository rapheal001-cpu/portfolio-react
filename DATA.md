# DATA.md — your content checklist

Every piece of text on the site is dummy data. To make it yours, edit **one file only**:

```
src/data.js
```

Save the file and the page updates automatically (Vite hot reload). You do **not** need to touch any component file.

A couple of things live in `index.html` too — those are listed in section 0 below.

---

## 0. Browser tab & metadata (`index.html`)

| Line / field | Current dummy value | Your value |
| --- | --- | --- |
| `<title>` | `Your Name — Frontend Engineer` | e.g. `Jane Doe — Product Engineer` |
| `<meta name="description">` | `Your Name — Frontend Engineer. Selected work, experience and writing.` | Your short site description |
| `<meta name="theme-color">` | `#0a192f` | Change only if you change the background color |

---

## 1. Basics — top of `src/data.js`

| Key | Current dummy value | Used for |
| --- | --- | --- |
| `name` | `Your Name` | Footer copyright |
| `initials` | `YN` | Round logo in the sidebar (2 letters) |
| `role` | `Frontend Engineer` | Sidebar subtitle |
| `location` | `Lagos, Nigeria` | Sidebar subtitle |
| `email` | `hello@example.com` | The "Say hello" mailto button |
| `availability` | `Available for new opportunities` | Small status line under socials |

---

## 2. Sidebar navigation — `nav[]`

Each item has a `label` (visible text) and an `id` (must match a section id).

| `label` | `id` | Change? |
| --- | --- | --- |
| `About` | `about` | Label only |
| `Experience` | `experience` | Label only |
| `Projects` | `projects` | Label only |
| `Writing` | `writing` | Label only or remove the item |
| `Contact` | `contact` | Label only |

> To remove Writing entirely, delete its object from `nav[]`, delete the `writing` block, and remove `<Writing />` from `src/App.jsx`.

---

## 3. Social links — `socials[]`

| `label` | Current `url` |
| --- | --- |
| `GitHub` | `https://github.com/your-username` |
| `LinkedIn` | `https://www.linkedin.com/in/your-username` |
| `X / Twitter` | `https://x.com/your-username` |
| `Instagram` | `https://www.instagram.com/your-username` |

Add or remove entries by copying a `{ label, url }` line.

---

## 4. Hero — `hero`

| Key | Current dummy value |
| --- | --- |
| `greeting` | `Hi, my name is` |
| `headline` | `Your Name.` |
| `subheadline` | `I build things for the web.` |
| `description` | `I am a frontend engineer specializing in...` |
| `cta` | `Check out my work` |

---

## 5. About — `about`

| Key | Current dummy value |
| --- | --- |
| `heading` | `A little about me` |
| `paragraphs[0]` | `Hi there! I'm a developer who likes building things...` |
| `paragraphs[1]` | `Currently, I'm a Senior Frontend Engineer at Example Studio...` |
| `paragraphs[2]` | `In my spare time, you can usually find me climbing...` |
| `skillsTitle` | `Technologies I work with:` |
| `skills[]` | `React`, `TypeScript`, `Next.js`, `Tailwind CSS`, ... (12 items) |

Add or remove paragraphs/skills by editing the arrays.

---

## 6. Experience — `resumeUrl` + `experience[]`

`resumeUrl`: `https://example.com/your-resume.pdf` — link for the "View full résumé" button.

Each job has 5 fields. Current dummy entries:

| `company` | `role` | `period` | `description` | `tech[]` |
| --- | --- | --- | --- | --- |
| `Example Studio` | `Senior Frontend Engineer` | `2023 — Present` | Led the rebuild of the company design system... | React, TypeScript, Next.js, Storybook |
| `Acme Corp` | `Frontend Engineer` | `2021 — 2023` | Built customer-facing dashboards... | React, JavaScript, CSS, Node.js |
| `Freelance` | `Web Developer` | `2020 — 2021` | Designed and developed websites... | HTML, CSS, JavaScript, WordPress |

Copy a whole `{ ... }` block to add another job.

---

## 7. Projects — `projects[]`

Each project has: `title`, `description`, `tags[]`, `liveUrl`, `sourceUrl`.

| `title` | Current `liveUrl` / `sourceUrl` |
| --- | --- |
| `Project One` | `https://example.com/project-one` / `https://github.com/your-username/project-one` |
| `Project Two` | `https://example.com/project-two` / `.../project-two` |
| `Project Three` | `https://example.com/project-three` / `.../project-three` |
| `Project Four` | `https://example.com/project-four` / `.../project-four` |

The card image area is currently a numbered gradient placeholder. If you want real screenshots, tell me and I'll wire up an `image` field plus local image files.

---

## 8. Writing — `writing`

`writing` is an object with `heading`, `description`, `categories[]`, and `articles[]`. The Writing section renders cards with category filtering; no article links are shown until a real URL exists.

Each entry in `articles[]` has: `title`, `category`, `description`, `status`, and optionally `readingTime` and `url`.

| Field | Purpose |
| --- | --- |
| `title` | Article title shown on the card |
| `category` | Must match one of the values in `categories[]` for filtering to work |
| `description` | Short, accurate summary of the topic |
| `status` | e.g. `Draft` — shown as a badge until the article is published |
| `readingTime` | Optional; rendered as "N min read" only when present |
| `url` | Optional; the "Read Article" link appears only when set |

Current entries are draft topics, not published articles. To publish one, write the article, then add its `url` (and optionally `readingTime`) and change `status` to `Published`. To add a category, add its name to `categories[]`.

If you don't write articles, see the note in section 2 about removing the section.

---

## 9. Contact — `contact`

| Key | Current dummy value |
| --- | --- |
| `eyebrow` | `What happens next?` |
| `heading` | `Let's build something together.` |
| `description` | `I'm currently looking for new opportunities...` |
| `button` | `Say hello` |

The email comes from `email` in section 1.

---

## 10. Footer — `footer`

| Key | Current dummy value |
| --- | --- |
| `note` | `Designed and built with React, Vite & Tailwind CSS.` |

The year and name are automatic from `new Date().getFullYear()` and `name`.

---

## Optional: change the colors

Colors are defined in `src/global.css` under `@theme`:

```css
--color-navy: #0a192f;        /* page background */
--color-navy-700: #112240;    /* cards */
--color-slate-light: #ccd6f6; /* headings */
--color-slate: #8892b0;       /* body text */
--color-mint: #64ffda;        /* accent */
--color-line: #233554;        /* borders */
```

Change these values to re-theme the whole site. Also update `<meta name="theme-color">` in `index.html` if you change the background.
