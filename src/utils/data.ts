export interface Project {
  id: string;
  title: string;
  category: 'AI' | 'Data Science' | 'Full Stack' | 'Python' | 'Excel' | 'Machine Learning';
  technologies: string[];
  description: string;
  features: string[];
  challenges: string;
  role: string;
  results: string;
  demoUrl?: string;
  githubUrl?: string;
  theme: string; // for custom animation card style
}

export interface Internship {
  role: string;
  company: string;
  period: string;
  type: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const personalInfo = {
  name: 'Shaik Saleem',
  title: 'AI Developer & Full Stack Engineer',
  phone: '6305560683',
  email: 'slmedx6@gmail.com',
  address: 'As Peta, Nellore Dst, Andhra Pradesh, India',
  github: 'https://github.com/slmedx6-commits',
  linkedin: 'https://www.linkedin.com/in/sk-saleem-2b7518344/',
  summary: 'Aspiring AI Developer and Full Stack Engineer pursuing Master of Computer Applications (MCA). Hands-on experience developing intelligent platforms, analytical engines, and scalable management tools. Proven capability in Python Full Stack, Machine Learning, Data Analytics, and interactive UI/UX design.',
  languages: ['English', 'Telugu', 'Urdu', 'Hindi']
};

export const skillsData = {
  categories: [
    {
      title: 'Programming & Web',
      skills: [
        { name: 'Python', percentage: 90 },
        { name: 'Django', percentage: 85 },
        { name: 'FastAPI', percentage: 80 },
        { name: 'SQL / Databases', percentage: 85 },
        { name: 'HTML & CSS', percentage: 90 },
        { name: 'JavaScript / React', percentage: 75 }
      ]
    },
    {
      title: 'AI, ML & Data Science',
      skills: [
        { name: 'AI Prompt Engineering', percentage: 95 },
        { name: 'Machine Learning', percentage: 80 },
        { name: 'Data Preprocessing', percentage: 85 },
        { name: 'Data Analysis & Visuals', percentage: 90 },
        { name: 'Excel Dashboards', percentage: 85 }
      ]
    },
    {
      title: 'Tools & Creative',
      skills: [
        { name: 'AI Development Tools', percentage: 95 },
        { name: 'MS Office Suite', percentage: 90 },
        { name: 'Video Editing', percentage: 80 },
        { name: 'Photo Editing', percentage: 85 }
      ]
    }
  ]
};

export const internships: Internship[] = [
  {
    role: 'Python Full Stack Intern',
    company: 'Brainovision',
    period: '2024 (Online)',
    type: 'Internship',
    highlights: [
      'Gained practical training in Python full-stack technologies including Django and REST APIs.',
      'Developed responsive UI and custom logical architectures for web utilities.',
      'Integrated front-end forms with back-end database schemas for dynamic records management.'
    ]
  },
  {
    role: 'Data Science Intern',
    company: 'Brainovision',
    period: '2024 (Online)',
    type: 'Internship',
    highlights: [
      'Performed intensive data analysis and pre-processing tasks using Pandas and NumPy.',
      'Gained hands-on exposure to core Machine Learning algorithms and model evaluations.',
      'Designed interactive visualizations and analytical models to discover business insights.'
    ]
  }
];

export const education: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Sri Venkateswara Engineering College (JNTUA)',
    period: 'Pursuing',
    details: 'Focusing on Advanced Software Engineering, Cloud Computing, Database Administration, and AI Architectures.'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'ASR Degree College (Vikrama Simhapuri University)',
    period: '2022 - 2025',
    details: 'Completed with a strong foundation in Database Systems, OOP with C++/Java/Python, and Web Engineering.'
  }
];

export const certifications: Certification[] = [
  {
    name: 'Python Full Stack Development Certificate',
    issuer: 'Brainovision Solutions',
    year: '2024'
  },
  {
    name: 'Data Science Internship Certification',
    issuer: 'Brainovision Solutions',
    year: '2024'
  },
  {
    name: 'Webinar Participation Certificate',
    issuer: 'Tech Mindsparc Innovations',
    year: '2024'
  }
];

export const achievements = [
  'Successfully developed and showcased PromptForge AI, demonstrating prompt engineering automation for modern LLMs.',
  'Analyzed and structured a dataset of 100K+ records for Hotel Management Analytics, enhancing pipeline efficiency by 25%.',
  'Created a student feedback module in the College Management Portal, processing over 1,500+ faculty reviews.',
  'Designed and published Python mini-projects covering student registries, graphics engines, and utility calculations.'
];

export const projects: Project[] = [
  {
    id: 'promptforge-ai',
    title: 'PromptForge AI',
    category: 'AI',
    technologies: ['Python', 'FastAPI', 'React', 'OpenAI API', 'Data Science'],
    description: 'An AI-powered web application that analyzes and transforms simple user inputs into highly structured, optimized, and professional prompts suitable for multiple LLM platforms (like ChatGPT, Claude, and Gemini).',
    features: [
      'Real-time prompt engineering analyzer with detailed structure breakdown.',
      'Multi-platform output optimizer (ChatGPT, Claude, Gemini, Midjourney templates).',
      'Integrated analysis metrics to estimate prompt clarity, specificity, and constraints.',
      'Scalable backend system designed for high-concurrency prompt evaluations.'
    ],
    challenges: 'Designing a structured prompt parsing engine that evaluates input quality dynamically across multiple LLM guidelines without introducing latency.',
    role: 'Lead Full Stack & AI Developer. Programmed the prompt transformation templates, developed API connectors, and styled the interactive UI.',
    results: 'Enabled users to generate prompts that have a 40% higher compliance and detail rate in final LLM outputs compared to raw prompts.',
    githubUrl: 'https://github.com/slmedx6-commits/PromptForge-AI',
    demoUrl: '#',
    theme: 'ai'
  },
  {
    id: 'revalua-ai',
    title: 'ReValua AI',
    category: 'Machine Learning',
    technologies: ['Python Full Stack', 'TensorFlow', 'scikit-learn', 'Django', 'Data Science'],
    description: 'An AI-powered resale pricing engine that inspects second-hand items. The application estimates product age, manufacturer, and original value, subsequently recommending a fair resale price using Machine Learning models.',
    features: [
      'Image analysis using computer vision to identify item type, brand, and condition.',
      'Dynamic valuation model that integrates product age, release year, and depreciation variables.',
      'Odometer-style animation showcasing resale valuation estimations.',
      'Recommendation logic backed by historical marketplace datasets.'
    ],
    challenges: 'Training a lightweight regression model to output robust prices despite highly variable input descriptions and conditions of secondary items.',
    role: 'ML Developer & Python Backend Engineer. Curated secondary item datasets, cleaned depreciated values, and designed the Django inference API.',
    results: 'Achieved an average error margin of less than 8% in predicting secondary market valuation.',
    githubUrl: 'https://github.com/slmedx6-commits/ReValua-AI',
    demoUrl: '#',
    theme: 'ml'
  },
  {
    id: 'college-management',
    title: 'College Management Portal',
    category: 'Full Stack',
    technologies: ['Python', 'Django', 'FastAPI', 'SQL', 'Bootstrap'],
    description: 'A comprehensive campus web portal containing distinct student and staff dashboards, custom authentication schemas, and transport/canteen rating modules.',
    features: [
      'Role-based authorization and separation of Student / Faculty dashboard panels.',
      'Interactive faculty and campus services rating system.',
      'Dynamic schedule and attendance tracker utilizing transactional database triggers.',
      'API gateway backed by FastAPI for fast data transactions.'
    ],
    challenges: 'Ensuring transaction isolation and consistency when multiple students rate services simultaneously, preventing database locks.',
    role: 'Database Architect & Core Backend Engineer. Created SQL schema, views, and indexes, and built the Django role-based permission controller.',
    results: 'Deployed and tested mock feedback module processing 1,500+ reviews in a simulated student enrollment workload.',
    githubUrl: 'https://github.com/slmedx6-commits/College-Management-Portal',
    demoUrl: '#',
    theme: 'fullstack'
  },
  {
    id: 'hotel-analytics',
    title: 'Hotel Management Analytics',
    category: 'Excel',
    technologies: ['Excel', 'Power Query', 'Power Pivot', 'Data Analytics'],
    description: 'An extensive data analytics case study involving clean-up and analysis of ~100,000 reservation and occupancy logs to generate key business dashboards and revenue suggestions.',
    features: [
      'Extensive data cleansing pipelines utilizing Power Query, removing duplicate registries and outlier records.',
      'Dynamic Pivot Charts displaying occupancy percentages, seasonal booking margins, and lead-time distributions.',
      'Interactive filter dashboard designed for hotel managers to trace KPIs by region and room category.'
    ],
    challenges: 'Optimizing Excel workbook responsiveness and Pivot Cache size with a large dataset containing 100K entries.',
    role: 'Data Analyst. Wrote cleaning routines, built data models using Excel Power Pivot, and formatted the visual graphs.',
    results: 'Synthesized insights pointing to a 15% revenue leakage in off-season pricing structures, suggesting actionable dynamic occupancy rates.',
    githubUrl: 'https://github.com/slmedx6-commits/Hotel-Management-Analytics',
    demoUrl: '#',
    theme: 'excel'
  }
];

export const miniProjects = [
  { name: 'Interactive Calculator', tech: 'Python (Tkinter)', desc: 'A clean desktop calculator with memory functions and dark-mode styling.' },
  { name: 'Retail Billing System', tech: 'Python (OOP)', desc: 'Console-based cashier application with receipt generation and inventory tracking.' },
  { name: 'Heads & Tails Game', tech: 'Python (Random)', desc: 'Coin flip simulator with probability tracking and persistent score boards.' },
  { name: 'Student Database MS', tech: 'Python (SQLite)', desc: 'A database management application supporting CRUD operations for student records.' },
  { name: 'Student Result Tracker', tech: 'Python (File I/O)', desc: 'Processes text records to generate marks lists and statistical reports.' },
  { name: 'Turtle Graphics Visuals', tech: 'Python (Turtle)', desc: 'Mathematical spiral designs and interactive screens rendered in vector canvas.' }
];
