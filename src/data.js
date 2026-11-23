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
      'I am a Full-Stack Software Engineer with 5 years of experience designing, developing, and maintaining modern web applications and software solutions. My expertise spans both frontend and backend engineering, with a strong focus on building scalable architectures, intuitive user interfaces, efficient APIs, and reliable application infrastructure.',
      'I specialize in developing end-to-end software solutions using React, JavaScript, Python, Django, and Django REST Framework. I have practical experience implementing authentication and authorization systems, RESTful APIs, database architecture, real-time communication, payment integrations, background task processing, and third-party service integrations.',
      'Beyond writing code, I approach software development with an engineering mindset, emphasizing clean architecture, maintainability, performance optimization, security, and practical problem-solving. I enjoy transforming complex requirements into functional, user-focused applications while ensuring that the underlying systems remain reliable and extensible.',
      'My work reflects a commitment to continuous improvement, thoughtful engineering decisions, and building software that solves real-world problems.',
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
    
