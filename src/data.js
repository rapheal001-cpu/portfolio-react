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
    heading: 'About me',
    paragraphs: [
      "I'm Rapheal, a full-stack developer based in Lagos. I started with HTML and CSS, moved into Python and Django, and now spend most of my time building React interfaces on top of Django REST APIs. I like owning the whole path from an idea to something running in production.",
      'My main project, SkillStream, is a learning platform where instructors publish courses and videos, students enrol, and people talk in real time. Building it has made me comfortable with authentication and roles, REST API design, PostgreSQL, Redis, Celery background jobs, WebSockets and Stripe payments — the parts that matter once an app leaves the happy path.',
      'I care about the less visible work too: writing tests, keeping queries fast, setting sensible security headers and cookie rules, and making deployments repeatable with Docker and GitHub Actions. A feature is not finished for me until it is reliable and the next developer can understand it.',
      "I'm still learning — Dart and Flutter are my current focus — and I write plain-English notes about the tools I use in my Understand Tools repository. I'm open to collaborating on products where careful engineering and a good user experience matter equally.",
    ],
    skillsTitle: 'Technical skills:',
    skillGroups: [
      {
        title: 'Frontend Development',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Tailwind CSS',
          'Redux Toolkit',
          'TanStack Query',
          'Dart (Learning)',
          'Flutter (Learning)',
        ],
      },
      {
        title: 'Backend Development',
        skills: ['Python', 'Django', 'Celery'],
      },
      {
        title: 'Database Management',
        skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
      },
      {
        title: 'API Development',
        skills: ['Django REST Framework', 'REST APIs', 'Axios'],
      },
      {
        title: 'Authentication and Security',
        skills: ['JWT Authentication', 'Role-Based Access', 'Application Security'],
      },
      {
        title: 'Real-time Communication',
        skills: ['WebSockets', 'Django Channels'],
      },
      {
        title: 'Payment Integration',
        skills: ['Stripe', 'Paystack'],
      },
      {
        title: 'Development Tools and Deployment',
        skills: ['Git', 'GitHub', 'Docker', 'Vite', 'Render'],
      },
    ],
  },

  // ---- Professional experience --------------------------------
  resumeUrl: '',
  experience: [
    {
      role: 'Independent Full-Stack Software Engineer',
      engagement: 'Independent Project / Product Development',
      period: 'Ongoing',
      project: 'SkillStream — Learning and Knowledge-Sharing Platform',
      description:
        'Designed and developed SkillStream, a full-stack learning and knowledge-sharing platform that connects instructors and students through an integrated digital learning environment.',
      highlights: [
        "Architected and developed the application's frontend and backend systems.",
        'Built responsive user interfaces and interactive application features using React and JavaScript.',
        'Developed backend services and RESTful APIs using Python, Django, and Django REST Framework.',
        'Implemented user authentication, authorization, and role-based access for instructors and students.',
        'Developed course management and learning-related functionality.',
        'Implemented real-time messaging and communication features.',
        'Integrated supporting systems for notifications, user profiles, and application workflows.',
        'Worked on database design, API optimization, application security, and backend performance.',
        'Managed application deployment, environment configuration, and production troubleshooting.',
      ],
      tech: [
        'React',
        'JavaScript',
        'Python',
        'Django',
        'Django REST Framework',
        'PostgreSQL',
        'REST APIs',
        'HTML',
        'CSS',
        'Git',
        'Render',
      ],
    },
  ],

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
    {
      title: 'Understand Tools',
      image: '/understand-tools.svg',
      repoVisibility: 'Public',
      description:
        'A public documentation library for the tools I use every day. It explains Docker, MCP for AI, and the packages that matter for web development, security and scaling — what each one does, why it is needed, and where to read the official docs.',
      tags: [
        'Documentation',
        'Docker',
        'MCP',
        'Markdown',
        'Developer Tools',
        'Web Security',
        'Scaling',
      ],
      sourceUrl: 'https://github.com/rapheal001-cpu/understand-tools',
    },
  ],

  // ---- Technical writing --------------------------------------
  // Draft topics only. These are planned articles, not published work.
  // Add `url` (and optionally `readingTime`) when an article is actually
  // published — the "Read Article" link appears only when `url` is set.
  writing: {
    heading: 'Technical Writing & Engineering Insights',
    description:
      'Practical insights into software engineering, backend development, frontend architecture, API design, and the technologies I use to build real-world applications.',
    categories: [
      'Backend Engineering',
      'Frontend Development',
      'Python & Django',
      'API Development',
      'Database Engineering',
      'Software Architecture',
      'Developer Tools & Workflow',
    ],
    articles: [
      {
        title: 'Understanding REST API Architecture: From Request to Response',
        category: 'API Development',
        description:
          'A practical walk through the request-to-response lifecycle: routing, input validation, business logic, serialization, and status codes in a REST API.',
        status: 'Draft',
      },
      {
        title: 'Building Authentication Systems with Django REST Framework',
        category: 'Python & Django',
        description:
          'How authentication fits into Django REST Framework, from serializers and user lookup to permission classes and protected endpoints.',
        status: 'Draft',
      },
      {
        title: 'Understanding JWT Authentication and Secure Token Management',
        category: 'Backend Engineering',
        description:
          'What a JWT contains, how signing and expiry work, and the practical trade-offs of storing and refreshing tokens in a web application.',
        status: 'Draft',
      },
      {
        title: 'How React Communicates with Backend APIs',
        category: 'Frontend Development',
        description:
          'How a React client talks to a backend API: request setup, loading and error states, authentication headers, and keeping UI state in sync.',
        status: 'Draft',
      },
      {
        title: 'Understanding Database Relationships in Django',
        category: 'Database Engineering',
        description:
          'How Django models express one-to-one, one-to-many, and many-to-many relationships, and what that means for queries and migrations.',
        status: 'Draft',
      },
      {
        title: 'Background Task Processing with Celery and Redis',
        category: 'Backend Engineering',
        description:
          'Why background tasks matter in backend systems, and how Celery workers and Redis queues handle work outside the request cycle.',
        status: 'Draft',
      },
      {
        title: 'Building Scalable Backend Applications with Django',
        category: 'Software Architecture',
        description:
          'Structuring Django applications for growth: separating concerns, managing dependencies, and keeping views and services maintainable.',
        status: 'Draft',
      },
      {
        title: 'Common Backend Development Mistakes and How to Avoid Them',
        category: 'Developer Tools & Workflow',
        description:
          'Recurring backend development pitfalls — weak validation, unclear error handling, and untested edge cases — and the habits that avoid them.',
        status: 'Draft',
      },
    ],
  },

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
    
