// ============================================================
// All editable portfolio content lives here.
// ============================================================

const data = {
  // ---- Basics -------------------------------------------------
  name: 'Rapheal Kukoyi',
  initials: 'RK',
  // Drop a replacement photo into public/ and update this path if needed.
  profileImage: '/rapheal.jpeg',
  role: 'Full-Stack Developer',
  location: 'Lagos, Nigeria',
  email: 'kkukoyirapheal@gmail.com',
  availability: 'Open to learning, collaboration, and opportunities',

  // ---- Top navigation -----------------------------------------
  nav: [
    { label: 'About', id: 'about' },
    { label: 'Journey', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ],

  // ---- Social links ------------------------------------------
  socials: [
    { label: 'GitHub', url: 'https://github.com/rapheal001-cpu' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rapheal-kukoyi-9172472bb/',
    },
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
      'As I grew, I started building full-stack applications and working with APIs, databases, authentication, and real-time features. Today, I use React on the frontend and Django with Django REST Framework on the backend. One of the projects I have built is SkillStream, a learning and content-sharing platform.',
      'I believe development is a continuous learning process. Alongside the technologies I already use, I am currently learning Dart and Flutter so I can build mobile experiences too. I also enjoy sharing knowledge and helping other people learn as I grow.',
    ],
    skillsTitle: 'Technologies and tools I work with:',
    skillGroups: [
      {
        title: 'Frontend',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Tailwind CSS',
          'Redux Toolkit',
          'TanStack Query',
          'Axios',
          'Dart (Learning)',
          'Flutter (Learning)',
        ],
      },
      {
        title: 'Backend',
        skills: [
          'Python',
          'Django',
          'Django REST Framework',
          'REST APIs',
          'WebSockets',
          'PostgreSQL',
          'MySQL',
          'SQLite',
          'Redis',
          'Celery',
          'Stripe',
          'Paystack',
        ],
      },
      {
        title: 'Tools',
        skills: ['Git', 'GitHub', 'Docker'],
      },
    ],
  },

  // ---- Work experience ----------------------------------------
  // Add your work experience entries here when you are ready.
  resumeUrl: '',
  experience: [],

  // ---- Projects -----------------------------------------------
  projects: [
    {
      title: 'SkillStream',
      image: '/skillstream-home.png',
      repoVisibility: 'Private',
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
      sourceUrl: 'https://github.com/rapheal001-cpu/skillstream.git',
    },
  ],

  // No published articles or writing links have been provided yet.
  writing: [],

  // ---- Contact ------------------------------------------------
  contact: {
    eyebrow: 'Get in touch',
    heading: "Let's build something meaningful.",
    description:
      "I'm always interested in learning, collaborating, and connecting with people who enjoy building useful products. Reach out by phone, email, or message — I'd love to hear from you.",
    name: 'Rapheal Kukoyi',
    address: 'Lagos, Nigeria',
    phone: '+2349162271251',
    whatsapp: '+2349162271251',
    telegram: '+234 91 6227 1251',
    button: 'Send me an email',
    url: 'https://github.com/rapheal001-cpu',
  },

  // ---- Footer -------------------------------------------------
  footer: {
    note: 'Always learning, always building.',
  },
}

export default data
    
