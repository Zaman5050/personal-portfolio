export type ProjectCategory = "SaaS & Dashboards" | "Marketplace" | "ERP" | "Mobile";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  company: string;
  role: string;
  period: string;
  categories: ProjectCategory[];
  stack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  /** Shown instead of a live link when there is no public URL */
  linkNote?: string;
  /** Optional screenshot in /public, e.g. "/projects/foodmamba.png" (16:10 works best) */
  cover?: string;
  /** Gradient colors for the generated cover when no screenshot is provided */
  colors: [string, string];
  featured?: boolean;
  challenges?: { problem: string; solution: string }[];
};

export const projects: Project[] = [
  {
    slug: "foodmamba",
    title: "FoodMamba",
    tagline: "Canadian food ordering & delivery platform",
    description:
      "FoodMamba is a Canadian food ordering and delivery web app. Customers explore nearby restaurants, browse menus, place orders and get timely deliveries through a fast, intuitive interface designed for both desktop and mobile.",
    company: "EvolversTech",
    role: "Senior Front-End Developer",
    period: "2025 – Present",
    categories: ["Marketplace"],
    stack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    features: [
      "Restaurant discovery with search and filtering",
      "Menus, cart and a smooth checkout flow",
      "Order placement and delivery tracking",
      "SEO-friendly, server-rendered pages for fast first load",
      "Fully responsive, mobile-first UI built from Figma",
    ],
    liveUrl: "https://www.foodmamba.com/",
    colors: ["#f97316", "#db2777"],
    featured: true,
  },
  {
    slug: "zeno",
    title: "Zeno ERP",
    tagline: "Complete ERP for grain & rice mill owners",
    description:
      "Zeno is a complete ERP system built for mill owners in the grain and rice industry. It handles sales and purchase invoices, stock and inventory, purchase orders, HR and many more business modules, all in one place.",
    company: "ECCOUNTBOOK ERP",
    role: "Front-End Developer",
    period: "2025",
    categories: ["ERP", "SaaS & Dashboards"],
    stack: ["React", "TypeScript", "TanStack Query", "Jotai", "React Hook Form", "Zod", "Ant Design"],
    features: [
      "Sales & purchase invoicing",
      "Stock and inventory management",
      "Purchase order workflows",
      "HR module and other business modules",
      "Complex, validated data-entry forms with React Hook Form + Zod",
      "Server-state caching and syncing with TanStack Query",
    ],
    linkNote: "Private enterprise product",
    colors: ["#7c3aed", "#2563eb"],
    featured: true,
  },
  {
    slug: "agriconnect",
    title: "AgriConnect",
    tagline: "Agricultural marketplace for web & mobile",
    description:
      "AgriConnect is a cross-platform web and mobile application that makes it easy to buy and sell grains, rice and agricultural fields. It connects farmers, traders and buyers in a reliable digital marketplace.",
    company: "ECCOUNTBOOK ERP",
    role: "Front-End & Mobile Developer",
    period: "2025",
    categories: ["Marketplace", "Mobile"],
    stack: ["Next.js", "React Native", "TypeScript", "TanStack Query", "Jotai"],
    features: [
      "Listings for grains, rice and agricultural land",
      "Shared logic across a Next.js web app and a React Native mobile app",
      "Clean, intuitive UI for farmers, traders and buyers",
      "Seamless API integration for real-time marketplace data",
    ],
    linkNote: "Mobile application",
    colors: ["#16a34a", "#ca8a04"],
    featured: true,
  },
  {
    slug: "fightbook",
    title: "Fight Book",
    tagline: "Fighter profiles, records & match booking",
    description:
      "Fight Book is a fight booking platform where fighters create and manage their own profiles, or hire a manager to handle their profile, fight records and personal information. Fighters can track stats, schedule upcoming matches and manage all their professional details.",
    company: "ilsa interactive",
    role: "Front-End Developer",
    period: "2023 – 2025",
    categories: ["Marketplace", "SaaS & Dashboards"],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    features: [
      "Fighter profiles with stats and fight records",
      "Manager accounts that handle fighters' profiles",
      "Match scheduling and upcoming-fight management",
      "Dashboards, authentication flows and responsive layouts",
    ],
    liveUrl: "https://fightbook.com/",
    colors: ["#dc2626", "#111827"],
    featured: true,
  },
  {
    slug: "beviq",
    title: "BevIQ",
    tagline: "Inventory management for the beverage industry",
    description:
      "BevIQ is an inventory management platform tailored to the beverage industry. I built the entire front-end, including the dashboard, sidebar navigation, login and signup, email templates and a wide range of UI components.",
    company: "ilsa interactive",
    role: "Front-End Developer",
    period: "2023 – 2025",
    categories: ["SaaS & Dashboards"],
    stack: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    features: [
      "Inventory dashboard with key metrics",
      "Sidebar navigation and app shell",
      "Login and signup flows",
      "Transactional email templates",
      "Reusable UI component library",
    ],
    liveUrl: "https://beviq.co/",
    colors: ["#0891b2", "#4f46e5"],
  },
  {
    slug: "purchasing-ally",
    title: "Purchasing Ally",
    tagline: "EDI solution for the flooring industry",
    description:
      "Purchasing Ally is an Electronic Data Interchange (EDI) solution built for the flooring industry. I developed all of the front-end interfaces, including the dashboard, sidebar, login and signup, email templates and supporting UI components.",
    company: "ilsa interactive",
    role: "Front-End Developer",
    period: "2023 – 2025",
    categories: ["SaaS & Dashboards"],
    stack: ["React", "TypeScript", "Material UI", "Redux"],
    features: [
      "EDI dashboard for purchasing workflows",
      "Sidebar navigation and app shell",
      "Login and signup flows",
      "Transactional email templates",
      "Data-heavy tables and forms",
    ],
    liveUrl: "https://purchasingally.com/",
    colors: ["#0f766e", "#1d4ed8"],
  },
  {
    slug: "rumor",
    title: "Rumor",
    tagline: "Event management platform",
    description:
      "Rumor is an event management system. I developed all of the front-end interfaces, including the dashboard, sidebar, login and signup, email templates and other UI components.",
    company: "ilsa interactive",
    role: "Front-End Developer",
    period: "2023 – 2025",
    categories: ["SaaS & Dashboards"],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Event management dashboard",
      "Sidebar navigation and app shell",
      "Login and signup flows",
      "Transactional email templates",
    ],
    liveUrl: "https://therumor.com/",
    colors: ["#9333ea", "#e11d48"],
  },
  {
    slug: "project-x",
    title: "Project X",
    tagline: "Interior design management system",
    description:
      "Project X (Ten) is an interior design management system that helps design teams manage projects end to end. I developed all of the front-end interfaces, including the dashboard, sidebar, login and signup, email templates and other UI components.",
    company: "ilsa interactive",
    role: "Front-End Developer",
    period: "2023 – 2025",
    categories: ["SaaS & Dashboards"],
    stack: ["React", "Next.js", "TypeScript", "Ant Design"],
    features: [
      "Project management dashboard for design teams",
      "Sidebar navigation and app shell",
      "Login and signup flows",
      "Transactional email templates",
    ],
    liveUrl: "https://weareten.co/",
    colors: ["#a16207", "#57534e"],
  },
];

export const categories: ("All" | ProjectCategory)[] = ["All", "SaaS & Dashboards", "Marketplace", "ERP", "Mobile"];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const domainOf = (url?: string) => (url ? new URL(url).hostname.replace(/^www\./, "") : undefined);
