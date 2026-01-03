export interface Project {
  id: number;
  title: string;
  description: string;
  duration: string;
  teamSize?: number;
  role: string;
  responsibilities: string[];
  techStack: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "KantsuAI Project",
    description: "AI Demand Forecasting SaaS platform with multi-tenant architecture and event-driven demand adjustment pipeline",
    duration: "Sep 2025 – Present",
    role: "Full-Stack Developer",
    responsibilities: [
      "Built a demand forecasting engine using statsmodels and pmdarima, forecasting demand for 31K+ SKUs with ~70% accuracy",
      "Designed a multi-tenant SaaS architecture with company-based access control and isolated data per tenant",
      "Implemented an event-driven demand adjustment pipeline by crawling promotional events from Amazon and Rakuten",
      "Developed RESTful APIs with Django REST Framework to serve forecasting results, product data, and event signals",
      "Built an admin dashboard using React and TypeScript with interactive charts for analytics and historical trend analysis"
    ],
    techStack: ["Python", "Django", "Django REST Framework", "React", "TypeScript", "statsmodels", "pmdarima"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 2,
    title: "Annie Project",
    description: "Internal task management platform with usage-based billing mechanism and partner referral system",
    duration: "May 2025 – Aug 2025",
    role: "Full Stack Developer",
    responsibilities: [
      "Developed a task management platform using Django to support task creation, assignment, and status tracking across internal teams",
      "Implemented a usage-based billing mechanism calculated from user check-ins, enabling transparent internal cost tracking",
      "Built an admin management interface for organizations, user permissions, and billing configurations",
      "Designed a partner referral and commission tracking flow, automating invitation handling and commission calculation"
    ],
    techStack: ["Python", "Django", "Django REST Framework", "Vue.js", "MySQL"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 3,
    title: "BIHIBI Project",
    description: "E-commerce platform for cosmetics sales with group purchases, subscription plans, and secure payment processing",
    duration: "Feb 2025 – May 2025",
    role: "Full Stack Developer",
    responsibilities: [
      "Extended a Django-based e-commerce system to support group purchases, subscription plans, affiliate tracking, and marketplace integrations",
      "Implemented secure payment processing with PAY.JP, handling checkout validation, coupon logic, and order workflows",
      "Developed and maintained admin dashboards for order management, customer operations, and campaign configuration",
      "Integrated Vue.js components into server-rendered views to enable dynamic pricing updates and interactive checkout experiences"
    ],
    techStack: ["Python", "Django", "Vue.js", "PAY.JP", "MySQL"],
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 4,
    title: "Buzzreach Study Work",
    description: "Healthcare and clinical systems with participant profiles, clinic onboarding, and billing processes",
    duration: "Jan 2024 – Feb 2025",
    role: "Full Stack Developer",
    responsibilities: [
      "Developed and maintained core healthcare workflows including user registration, participant profiles, clinic onboarding, and billing processes using Django",
      "Built responsive frontend screens with Vue.js and Nuxt.js, migrating legacy pages to a modular component-based architecture",
      "Improved system stability and usability by resolving integration issues and enhancing layout consistency across participant, clinic, and admin roles"
    ],
    techStack: ["Python", "Django", "Vue.js", "Nuxt.js", "MySQL"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 5,
    title: "Huong An Vien",
    description: "Cemetery management system with interactive lot planning and 3D visualization features",
    duration: "Jan 2024 – Apr 2025",
    role: "Full Stack Developer",
    responsibilities: [
      "Built backend APIs with Django and developed interactive lot planning interfaces using Vue, Fabric.js, and Three.js",
      "Enabled visual management of cemetery layouts and occupancy statistics"
    ],
    techStack: ["Python", "Django", "Vue.js", "Fabric.js", "Three.js", "MySQL"],
    color: "from-violet-500 to-purple-500"
  },
  {
    id: 6,
    title: "3D Room Tour Platform",
    description: "Image stitching and panoramic rendering system to generate 360° virtual room tours",
    duration: "Sep 2022 – Jan 2023",
    role: "Full Stack Developer",
    responsibilities: [
      "Implemented image stitching and panoramic rendering pipelines using Python and OpenCV to generate 360° virtual room tours from sequential photographs"
    ],
    techStack: ["Python", "OpenCV", "JavaScript", "AWS"],
    color: "from-orange-500 to-amber-500"
  },
  {
    id: 7,
    title: "Automation Order System",
    description: "Selenium-based automation for monitoring sales conditions and triggering automatic order placement",
    duration: "Jun 2023 – Sep 2023",
    role: "Full Stack Developer",
    responsibilities: [
      "Developed Selenium-based automation scripts and Django backends to monitor sales conditions and trigger automatic order placement"
    ],
    techStack: ["Python", "Django", "Selenium", "MySQL"],
    color: "from-red-500 to-orange-500"
  },
  {
    id: 8,
    title: "K-ladies",
    description: "Healthcare platform for patient registration, appointment scheduling, and medical record management",
    duration: "Apr 2022 – Aug 2023",
    role: "Full Stack Developer",
    responsibilities: [
      "Built patient registration, appointment scheduling, and medical record systems using Django and Vue, supporting day-to-day clinic operations"
    ],
    techStack: ["Python", "Django", "Vue.js", "MySQL", "AWS"],
    color: "from-fuchsia-500 to-pink-500"
  },
  {
    id: 9,
    title: "GoJoCo",
    description: "Job matching platform connecting employers and job seekers with candidate matching and application workflows",
    duration: "Feb 2021 – Mar 2022",
    role: "Backend Developer",
    responsibilities: [
      "Designed backend architecture and REST APIs with Django REST Framework to support job listings, candidate matching, and application workflows"
    ],
    techStack: ["Python", "Django", "Django REST Framework", "MongoDB"],
    color: "from-cyan-500 to-blue-500"
  }
];
