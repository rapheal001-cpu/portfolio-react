// ============================================================
// All editable portfolio content lives here.
// ============================================================

const data = {
  // ---- Basics -------------------------------------------------
  name: 'Rapheal Kukoyi',
  initials: 'RK',
  role: 'Full-Stack Developer',
  location: 'Lagos, Nigeria',
  email: '',
  availability: 'Open to learning, collaboration, and opportunities',

  // ---- Sidebar navigation ------------------------------------
  nav: [
    { label: 'About', id: 'about' },
    { label: 'Journey', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ],

  // ---- Social links ------------------------------------------
  socials: [
    { label: 'GitHub', url: 'https://github.com/rapheal001-cpu' },
  ],

  // ---- Hero ---------------------------------------------------
  hero: {
    greeting: 'Hello, my name is',
    headline: 'Rapheal Kukoyi.',
    subheadline: 'I build useful things for the web.',
    description:
      'I am a self-driven full-stack developer with around five years of experience learning, building, and growing through code. I started with HTML, moved into Python and Django, and now build modern web applications with React. I am also exploring Dart and Flutter as I continue expanding my skills into mobile development.',
    cta: 'Explore my projects',
  },

  // ---- About --------------------------------------------------
  about: {
    heading: 'A little about me',
    paragraphs: [
      "I'm Rapheal, a developer who enjoys turning ideas into working digital products. My coding journey began with HTML, where I learned the foundations of building for the web. Over time, I moved into CSS and JavaScript, then explored Python and Django to understand how applications work behind the scenes.",
      'As I grew, I started building full-stack applications and working with APIs, databases, authentication, and real-time features. Today, I use React on the frontend and Django with Django REST Framework on the backend. Two of the projects I have built are SkillStream, a learning and content-sharing platform, and NaijaBay, a Nigerian online marketplace.',
      'I believe development is a continuous learning process. Alongside the technologies I already use, I am currently learning Dart and Flutter so I can build mobile experiences too. I also enjoy sharing knowledge and helping other people learn as I grow.',
    ],
    skillsTitle: 'Technologies and tools I work with:',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Python',
      'Django',
      'Django REST Framework',
      'Dart (Learning)',
      'Flutter (Learning)',
      'Tailwind CSS',
      'Redux Toolkit',
      'TanStack Query',
      'Axios',
      'REST APIs',
      'WebSockets',
      'PostgreSQL',
      'SQLite',
      'Redis',
      'Celery',
      'Git',
      'GitHub',
      'Stripe',
      'Paystack',
    ],
  },

  // ---- Experience / Development journey -----------------------
  // This section describes the user's learning and project journey,
  // not employment at companies that have not been confirmed.
  resumeUrl: '',
  experience: [
    {
      company: 'Independent Learning & Projects',
      role: 'Full-Stack Developer',
      period: 'Around 5 years — Present',
      description:
        'Started learning web development with HTML and gradually expanded into CSS, JavaScript, Python, and Django. Progressed into building full-stack applications with React on the frontend and Django REST Framework on the backend. Focus areas include API integration, authentication, databases, real-time communication, background tasks, and payment integrations. Currently learning Dart and Flutter for mobile development.',
      tech: [
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
        'Django',
        'React',
        'Django REST Framework',
        'Dart',
        'Flutter',
      ],
    },
    {
      company: 'Personal Projects',
      role: 'Builder & Knowledge Sharer',
      period: 'Ongoing',
      description:
        'Built SkillStream, a platform for learning, instructors, courses, videos, and messaging; and NaijaBay, a marketplace for buyers and sellers. I enjoy documenting what I learn and sharing knowledge with other developers.',
      tech: [
        'SkillStream',
        'NaijaBay',
        'REST APIs',
        'PostgreSQL',
        'WebSockets',
        'GitHub',
      ],
    },
  ],

  // ---- Projects -----------------------------------------------
  projects: [
    {
      title: 'SkillStream',
      description:
        'A learning and content-sharing platform where students and instructors can connect. It brings together creator channels, videos, courses, lessons, enrollments, subscriptions, messaging, and course payments. Built with a React frontend and a Django REST Framework backend.',
      tags: [
        'React',
        'Vite',
        'JavaScript',
        'Tailwind CSS',
        'Redux Toolkit',
        'TanStack Query',
        'Axios',
        'Python',
        'Django',
        'Django REST Framework',
        'PostgreSQL',
        'WebSockets',
        'Celery',
        'Redis',
        'Stripe',
      ],
      liveUrl: 'https://skillstream-rxhe.onrender.com',
      sourceUrl: 'https://github.com/rapheal001-cpu/skillstream',
    },
    {
      title: 'NaijaBay',
      description:
        'A Nigerian online marketplace built to help people discover products and connect with sellers. Buyers can browse and search listings, save favorites, and chat with sellers, while sellers can manage products and stores. The platform includes real-time messaging and payment-related features.',
      tags: [
        'React',
        'Vite',
        'JavaScript',
        'Tailwind CSS',
        'Redux Toolkit',
        'TanStack Query',
        'Axios',
        'Python',
        'Django',
        'Django REST Framework',
        'PostgreSQL',
        'Django Channels',
        'WebSockets',
        'Paystack',
      ],
      liveUrl: 'https://naijabay.onrender.com',
      sourceUrl: 'https://github.com/rapheal001-cpu/Naija-Bay',
    },
  ],

  // No published articles or writing links have been provided yet.
  writing: [],

  // ---- Contact ------------------------------------------------
  contact: {
    eyebrow: 'Have a project in mind?',
    heading: "Let's build something meaningful.",
    description:
      "I'm always interested in learning, collaborating, and connecting with people who enjoy building useful products. Reach out through my GitHub profile, or contact me once my email address is added here.",
    button: 'Visit my GitHub profile',
    url: 'https://github.com/rapheal001-cpu',
  },

  // ---- Footer -------------------------------------------------
  footer: {
    note: 'Designed and built with React, Vite & Tailwind CSS. Always learning, always building.',
  },
}

export default data
    
