// ---------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update text, links,
// resume, or the contact form — components should not need changes.
// ---------------------------------------------------------------------

export const site = {
  name: 'Gunjan Gupta',
  title: 'B.Tech CSE (AI) Student | Aspiring Software Engineer',
  shortRole: 'B.Tech CSE (AI) Student | Aspiring Software Engineer',
  tagline:
    'I build practical software and web applications while continuously improving my programming, problem-solving, and development skills.',
  location: 'India',

  resumeUrl: '/Gunjan-Gupta-Resume.pdf',

  // CONTACT FORM
  // Option A (recommended): create a free form at https://formspree.io and paste
  // its endpoint here, e.g. 'https://formspree.io/f/abcd1234'.
  // Option B (works immediately): leave formEndpoint empty and the form opens the
  // visitor's email app addressed to contactEmail. Set contactEmail to '' to
  // keep your address out of the page source once Formspree is connected.
  formEndpoint: '',
  contactEmail: 'gunjan66598@gmail.com',
}

export const socials = {
  github: 'https://github.com/Gunjan506',
  linkedin: 'https://www.linkedin.com/in/gunjan-gupta-743172309/',
  leetcode: 'https://leetcode.com/u/Gunjan_Gupta20/',
  hackerrank: 'https://www.hackerrank.com/gunjan66598',
  codechef: 'https://www.codechef.com/users/bytmexd',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  text: 'My project work focuses on turning practical requirements into useful software. I developed a responsive website for Rama Technical Institute, including course discovery, online admissions, and administration features. During my internship at Pinnacle Labs, I contributed to UI improvements, bug fixes, and responsive layouts. I am completing my B.Tech in Computer Science and Engineering (Artificial Intelligence) and am looking for opportunities to contribute to a collaborative software engineering team.',
  facts: [
    { label: 'Program', value: 'B.Tech CSE' },
    { label: 'Status', value: '4th Year' },
    { label: 'Current SGPA', value: '8.67' },
    { label: 'Location', value: 'India' },
  ],
}

export const education = [
  {
    title: 'B.Tech — Computer Science & Engineering (Artificial Intelligence)',
    place: 'Maharana Pratap Engineering College, Kanpur',
    period: '2023 – 2027',
    note: 'SGPA: 8.67',
  },
  { title: 'Intermediate', place: 'MAP Public School, Kushinagar', period: '2023', note: '' },
  { title: 'High School', place: 'MAP Public School, Kushinagar', period: '2021', note: '' },
]

export const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    icon: 'code',
    blurb: 'Languages I use for development and problem solving.',
    items: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    id: 'web',
    label: 'Web Development',
    icon: 'globe',
    blurb: 'The stack I use to build responsive websites and web apps.',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Node.js', 'Express.js'],
  },
  {
    id: 'database',
    label: 'Database',
    icon: 'database',
    blurb: 'Storing and querying application data.',
    items: ['MongoDB', 'SQL', 'DBMS'],
  },
  {
    id: 'cs',
    label: 'Core CS',
    icon: 'layers',
    blurb: 'Computer science fundamentals from my degree and practice.',
    items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Problem Solving'],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: 'wrench',
    blurb: 'Tools I use day to day.',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Jupyter Notebook', 'Canva'],
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    icon: 'brain',
    blurb: 'Foundations from my AI specialization and projects.',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Decision Tree'],
  },
]

export const courses = [
  { name: 'ADCA', duration: '12 Months' },
  { name: 'DCA', duration: '6 Months' },
  { name: 'CCC', duration: '3 Months' },
  { name: 'DFA', duration: '6 Months' },
  { name: 'CCFA', duration: '3 Months' },
  { name: 'DTP', duration: '6 Months' },
  { name: 'Tally', duration: '3 Months' },
  { name: 'Advanced Excel', duration: '3 Months' },
  { name: 'AC & Refrigeration', duration: '6 Months' },
  { name: 'House Wiring', duration: '3 Months' },
]

export const featuredProject = {
  name: 'Rama Technical Institute',
  type: 'Real-world website project',
  role: 'Designed, developed, integrated, tested, and deployed the website.',
  description:
    'Designed and developed a responsive website for Rama Technical Institute to present its courses online and simplify the student admission process. The project includes an online admission form, admin dashboard, CRUD functionality, search, email notifications, responsive design, and SEO optimization.',
  stack: ['React', 'Vite', 'CSS', 'Node.js', 'Express.js', 'MongoDB', 'Resend', 'Vercel', 'Render'],
  features: [
    'Responsive design',
    'Online admission form',
    'Admin login',
    'Admin dashboard',
    'CRUD operations',
    'Student admission management',
    'Search',
    'Course information',
    'Email notifications',
    'WhatsApp integration',
    'Call button',
    'SEO optimization',
    'Google Search Console',
    'Backend API',
  ],
  links: {
    live: 'https://rama-technical-institute.vercel.app/',
    backend: 'https://rama-technical-institute.onrender.com/',
    github: 'https://github.com/Gunjan506/Rama-Technical-Institute',
  },
  // Optional: add a real screenshot at /public/rama-screenshot.png and set
  // image: '/rama-screenshot.png' to replace the illustrated preview.
  image: '',

  // Case study content. The process steps summarize how the project fits together;
  // edit them so they match your real workflow.
  caseStudy: {
    problem:
      'The institute needed a clear way to present its courses online and a simpler way for students to apply for admission.',
    solution:
      'A responsive React website with course information and search, an online admission form, and an admin dashboard so admissions can be managed in one place.',
    technology: [
      { label: 'Frontend', value: 'React, Vite, CSS — deployed on Vercel' },
      { label: 'Backend', value: 'Node.js, Express.js — deployed on Render' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Email', value: 'Resend for notifications' },
    ],
    process: [
      'Defined the pages and course information the site needed to show.',
      'Built the responsive React interface, including course search and course details.',
      'Created the Express API and MongoDB models for admissions and admin CRUD.',
      'Added admin login, email notifications, and WhatsApp and call buttons.',
      'Deployed the frontend and backend, then added SEO and Google Search Console.',
    ],
    result:
      'A live, working website that covers the full flow from browsing courses to applying online, with an admin dashboard for managing admissions.',
  },
}

export const otherProjects = [
  {
    name: 'Employee Performance Prediction',
    category: 'Machine Learning',
    visual: 'pipeline',
    description:
      'Built a machine learning model to predict employee performance using a Decision Tree algorithm. The project involved data preprocessing, dataset preparation, model training, and prediction.',
    learned:
      'This project helped me understand the importance of data preprocessing and preparing clean data before applying machine learning algorithms.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Decision Tree'],
    // TODO: add the repository URL when you have one; the GitHub button appears automatically.
    github: '',
    live: '',
  },
  {
    name: 'Weather Detection App',
    category: 'Web App',
    visual: 'weather',
    description:
      'Developed a weather application using HTML, CSS, and JavaScript that fetches weather information from the OpenWeatherMap API and dynamically displays the results.',
    stack: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    github: 'https://github.com/Gunjan506/Weather-Detection-App',
    // TODO: add a live URL if you deploy it; a Live Demo button will appear.
    live: '',
  },
]

export const experience = [
  {
    role: 'Web Developer Intern',
    company: 'Pinnacle Labs',
    period: 'January 2025 – February 2025',
    points: [
      'Worked on web development tasks.',
      'Developed and improved UI components.',
      'Fixed website bugs.',
      'Worked on CSS responsiveness and fixed browser-specific issues between Chrome and Edge.',
      'Improved the user interface and responsive behavior.',
    ],
  },
]

export const achievements = [
  { icon: 'code', category: 'Coding', title: 'HackerRank', detail: '5-Star in Python' },
  { icon: 'code', category: 'Coding', title: 'CodeChef', detail: '500 Difficulty Rating Problems' },
  { icon: 'award', category: 'Certification', title: 'NPTEL', detail: 'Joy of Computing Using Python' },
  { icon: 'award', category: 'Certification', title: 'Oracle Cloud', detail: 'AI Foundations Associate' },
  { icon: 'flag', category: 'Hackathon', title: 'Smart India Hackathon', detail: 'SIH 2025' },
  { icon: 'trophy', category: 'Sports', title: 'Badminton', detail: 'Zonal Badminton Participation' },
  { icon: 'trophy', category: 'Sports', title: 'Apex 2026', detail: 'Badminton Doubles Runner-up' },
  { icon: 'users', category: 'Leadership', title: 'Sports Club', detail: 'Sports Club Coordinator — Maharana Pratap Engineering College' },
]

export const projectTypes = [
  'Software Development Opportunity',
  'Website Development',
  'Website Improvement',
  'React Project',
  'Other',
]

export const services = [
  { icon: 'briefcase', title: 'Business Websites', text: 'Clear, professional websites for small businesses and institutes.', type: 'Website Development' },
  { icon: 'layout', title: 'Responsive Websites', text: 'Layouts that work across phones, tablets, and desktops.', type: 'Website Development' },
  { icon: 'rocket', title: 'Landing Pages', text: 'Focused single-page sites for a product, service, or campaign.', type: 'Website Development' },
  { icon: 'code', title: 'React Websites', text: 'Component-based sites built with React and Vite.', type: 'React Project' },
  { icon: 'layers', title: 'Portfolio Websites', text: 'Personal sites that present your work clearly.', type: 'Website Development' },
  { icon: 'palette', title: 'Website Redesign', text: 'A cleaner, more modern look for an existing site.', type: 'Website Improvement' },
  { icon: 'smartphone', title: 'Mobile Responsiveness Fixes', text: 'Fixing layouts that break on smaller screens or in some browsers.', type: 'Website Improvement' },
  { icon: 'bug', title: 'Website Bug Fixing', text: 'Finding and fixing issues on an existing website.', type: 'Website Improvement' },
  { icon: 'plug', title: 'API Integration', text: 'Connecting your website to third-party APIs.', type: 'Other' },
  { icon: 'database', title: 'MongoDB Integration', text: 'Storing and managing website data with MongoDB.', type: 'Other' },
  { icon: 'server', title: 'Basic Backend Integration', text: 'Simple Node.js and Express backends for forms and data.', type: 'Other' },
]

export const whyPoints = [
  { title: 'Responsive and mobile-friendly', text: 'Websites built to work on phones, tablets, and desktops.' },
  { title: 'Clean and maintainable code', text: 'Component-based code that is easy to read and update later.' },
  { title: 'Modern UI', text: 'Clean layouts, readable typography, and consistent spacing.' },
  { title: 'Practical functionality', text: 'Forms, dashboards, and integrations that solve a real need.' },
  { title: 'Clear communication', text: 'Straightforward updates and honest answers about scope.' },
  { title: 'Attention to detail', text: 'Care for small things like spacing, browser differences, and bugs.' },
]

export const profiles = [
  { name: 'GitHub', icon: 'github', username: 'Gunjan506', url: socials.github },
  { name: 'LinkedIn', icon: 'linkedin', username: 'gunjan-gupta-743172309', url: socials.linkedin },
  { name: 'LeetCode', icon: 'code', username: 'Gunjan_Gupta20', url: socials.leetcode },
  { name: 'HackerRank', icon: 'terminal', username: 'gunjan66598', url: socials.hackerrank },
  { name: 'CodeChef', icon: 'braces', username: 'bytmexd', url: socials.codechef },
]
