export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  projects: string[]; // project slugs
};

export const experience: Experience[] = [
  {
    company: "EvolversTech",
    role: "Senior React JS Developer",
    start: "Nov 2025",
    end: "Present",
    location: "Lahore, Pakistan",
    summary:
      "Building responsive, high-quality product interfaces with React, Next.js and TypeScript, including the FoodMamba food-delivery platform.",
    highlights: [
      "Develop responsive, high-quality interfaces using React.js, Next.js, TypeScript and modern UI libraries.",
      "Convert Figma designs into pixel-perfect, reusable components while keeping a clean front-end architecture.",
      "Integrate REST APIs and manage state with Redux Toolkit and Next.js data features for smooth data flow.",
      "Optimize performance with SSR/SSG, code-splitting and rendering best practices.",
      "Collaborate with cross-functional teams and deliver features in Agile sprints tracked in Jira.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    projects: ["foodmamba"],
  },
  {
    company: "ECCOUNTBOOK ERP",
    role: "React JS Developer",
    start: "Jun 2025",
    end: "Nov 2025",
    location: "Lahore, Pakistan",
    summary:
      "Product-focused company. I worked on its flagship products, the Zeno ERP and the AgriConnect marketplace.",
    highlights: [
      "Developed the user interface for Zeno, a complete ERP for grain and rice mill owners covering invoicing, stock, purchase orders and HR.",
      "Built screens for AgriConnect, a cross-platform (Next.js + React Native) agricultural marketplace.",
      "Implemented API integrations and handled application-wide state management.",
      "Worked with React, TypeScript, TanStack Query, Jotai, React Hook Form + Zod and Ant Design.",
    ],
    stack: ["React", "TypeScript", "TanStack Query", "Jotai", "React Hook Form", "Zod", "Ant Design", "React Native"],
    projects: ["zeno", "agriconnect"],
  },
  {
    company: "ilsa interactive",
    role: "Front-End Developer",
    start: "Jan 2023",
    end: "Jun 2025",
    location: "Lahore, Pakistan",
    summary:
      "Software agency serving international clients. I built the complete front-ends of five client products, end to end.",
    highlights: [
      "Built responsive, well-structured front-ends with React, Next.js, TypeScript, Tailwind, Ant Design and Material UI.",
      "Converted Figma designs into pixel-perfect, reusable UI components, dashboards, auth flows and email templates.",
      "Integrated APIs and handled state management efficiently, including Redux.",
      "Worked closely with backend developers for smooth delivery, and trained and onboarded new interns.",
      "Managed tasks in Jira to keep project goals tracked, organized and on time.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Ant Design", "Material UI"],
    projects: ["fightbook", "beviq", "purchasing-ally", "rumor", "project-x"],
  },
  {
    company: "GHL Kings",
    role: "Front-End Developer",
    start: "Oct 2022",
    end: "Jan 2023",
    location: "Pakistan",
    summary: "My first professional role, where I built the foundation of my front-end craft.",
    highlights: [
      "Developed user-friendly interfaces with HTML, CSS, JavaScript and Bootstrap.",
      "Structured content with semantic HTML, styled responsive layouts with CSS and added interactivity with JavaScript.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    projects: [],
  },
];
