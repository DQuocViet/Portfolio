export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: "server",
    skills: [
      { name: "Python", level: 90 },
      { name: "Django / DRF", level: 90 },
      { name: "PHP", level: 85 },
      { name: "Laravel", level: 85 },
      { name: "RESTful API", level: 92 },
      { name: "Payment Integration", level: 85 },
    ]
  },
  {
    title: "Frontend Development",
    icon: "layout",
    skills: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js / Nuxt.js", level: 88 },
      { name: "React.js", level: 80 },
      { name: "HTML5 / CSS3", level: 92 },
    ]
  },
  {
    title: "Database & Cloud",
    icon: "database",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 75 },
      { name: "Docker", level: 80 },
      { name: "Nginx", level: 75 },
      { name: "AWS", level: 82 },
    ]
  }
];

export const technologies = [
  "Python", "Django", "Django REST Framework", "PHP", "Laravel",
  "JavaScript", "TypeScript", "Vue.js", "Nuxt.js", "React.js",
  "HTML5", "CSS3", "Tailwind CSS",
  "MySQL", "PostgreSQL", "MongoDB",
  "Docker", "Nginx", "AWS",
  "PAY.JP", "GMO Payment",
  "statsmodels", "pmdarima", "OpenCV", "Selenium",
  "Fabric.js", "Three.js"
];
