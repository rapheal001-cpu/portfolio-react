// ============================================================
// ALL EDITABLE CONTENT LIVES HERE.
// See DATA.md in the project root for a checklist of what to replace.
// ============================================================

const data = {
  // ---- Basics -------------------------------------------------
  name: 'Your Name',
  initials: 'YN',
  role: 'Frontend Engineer',
  location: 'Lagos, Nigeria',
  email: 'hello@example.com',
  availability: 'Available for new opportunities',

  // ---- Sidebar navigation ------------------------------------
  nav: [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Writing', id: 'writing' },
    { label: 'Contact', id: 'contact' },
  ],

  // ---- Social links ------------------------------------------
  socials: [
    { label: 'GitHub', url: 'https://github.com/your-username' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-username' },
    { label: 'X / Twitter', url: 'https://x.com/your-username' },
    { label: 'Instagram', url: 'https://www.instagram.com/your-username' },
  ],

  // ---- Hero ---------------------------------------------------
  hero: {
    greeting: "Hi, my name is",
    headline: 'Your Name.',
    subheadline: 'I build things for the web.',
    description:
      'I am a frontend engineer specializing in building exceptional digital experiences. Currently, I am focused on building accessible, human-centered products at Example Studio.',
    cta: 'Check out my work',
  },

  // ---- About --------------------------------------------------
  about: {
    heading: "A little about me",
    paragraphs: [
      "Hi there! I'm a developer who likes building things. I'm a frontend engineer with expertise in crafting accessible, pixel-perfect user interfaces. I take pride in creating thoughtful, inclusive products and have a sharp eye for the little details that separate a good product from an exceptional one.",
      "Currently, I'm a Senior Frontend Engineer at Example Studio, where I work on our design system and help build new products. I lead engineering efforts across our component library and frontend platform, partnering closely with designers to ensure accessibility is built into everything we ship.",
      "In my spare time, you can usually find me climbing, playing tennis, or exploring new technologies and turning ideas into reality through personal projects.",
    ],
    skillsTitle: 'Technologies I work with:',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'GraphQL',
      'Figma',
      'Vitest',
      'Framer Motion',
      'PostgreSQL',
      'Git',
      'Vercel',
    ],
  },

  // ---- Experience --------------------------------------------
  resumeUrl: 'https://example.com/your-resume.pdf',
  experience: [
    {
      company: 'Example Studio',
      role: 'Senior Frontend Engineer',
      period: '2023 — Present',
      description:
        'Led the rebuild of the company design system used by 40+ engineers. Improved page load performance by 35% and introduced automated accessibility testing into the release pipeline.',
      tech: ['React', 'TypeScript', 'Next.js', 'Storybook'],
    },
    {
      company: 'Acme Corp',
      role: 'Frontend Engineer',
      period: '2021 — 2023',
      description:
        'Built customer-facing dashboards and internal tools from scratch. Collaborated with designers to ship a component library that cut feature delivery time in half.',
      tech: ['React', 'JavaScript', 'CSS', 'Node.js'],
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      period: '2020 — 2021',
      description:
        'Designed and developed websites for small businesses and startups, handling everything from discovery and wireframes to deployment and maintenance.',
      tech: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    },
  ],

  // ---- Projects -----------------------------------------------
  projects: [
    {
      title: 'Project One',
      description:
        'A real-time collaboration app with shared workspaces, live cursors, and offline support. Built to explore optimistic UI patterns at scale.',
      tags: ['React', 'TypeScript', 'WebSockets'],
      liveUrl: 'https://example.com/project-one',
      sourceUrl: 'https://github.com/your-username/project-one',
    },
    {
      title: 'Project Two',
      description:
        'An open-source component library with accessible by default primitives, full keyboard support, and detailed documentation.',
      tags: ['React', 'Tailwind CSS', 'Storybook'],
      liveUrl: 'https://example.com/project-two',
      sourceUrl: 'https://github.com/your-username/project-two',
    },
    {
      title: 'Project Three',
      description:
        'A personal analytics dashboard that visualizes habit tracking data with interactive charts, filters, and exportable reports.',
      tags: ['Next.js', 'PostgreSQL', 'Recharts'],
      liveUrl: 'https://example.com/project-three',
      sourceUrl: 'https://github.com/your-username/project-three',
    },
    {
      title: 'Project Four',
      description:
        'A minimal markdown writing tool with a distraction-free editor, local-first storage, and one-click publishing.',
      tags: ['JavaScript', 'LocalStorage', 'CSS'],
      liveUrl: 'https://example.com/project-four',
      sourceUrl: 'https://github.com/your-username/project-four',
    },
  ],

  // ---- Writing ------------------------------------------------
  writing: [
    {
      title: 'Building accessible components from the start',
      description: 'Notes on designing with keyboard users and screen readers in mind.',
      date: 'Jan 2025',
      url: 'https://example.com/blog/accessible-components',
    },
    {
      title: 'Why I switched to Tailwind CSS',
      description: 'What changed in my workflow after moving from plain CSS.',
      date: 'Oct 2024',
      url: 'https://example.com/blog/why-tailwind',
    },
    {
      title: 'A practical guide to React Server Components',
      description: 'A mental model that finally made server components click for me.',
      date: 'Jul 2024',
      url: 'https://example.com/blog/server-components',
    },
  ],

  // ---- Contact ------------------------------------------------
  contact: {
    eyebrow: 'What happens next?',
    heading: "Let's build something together.",
    description:
      "I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open — I'll get back to you as soon as I can.",
    button: 'Say hello',
  },

  // ---- Footer -------------------------------------------------
  footer: {
    note: 'Designed and built with React, Vite & Tailwind CSS.',
  },
}

export default data
