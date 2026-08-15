import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Smartphone,
  LayoutGrid,
  Boxes,
  Cloud,
  Sparkles,
  Users,
  Wrench,
  ShieldCheck,
  Target,
  Handshake,
  MapPin,
  Search,
  ClipboardList,
  Code2,
  Rocket,
  Landmark,
  ShoppingCart,
  HeartPulse,
  Truck,
  Briefcase,
  Building2,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    icon: Compass,
    summary:
      "Clear, practical guidance for making informed technology decisions.",
    description:
      "We help businesses evaluate technical options, define strategy, and plan digital transformation initiatives with confidence. Our consulting work focuses on aligning technology decisions with real business outcomes rather than trends.",
    capabilities: [
      "Technology strategy and roadmapping",
      "Architecture evaluation and recommendations",
      "Digital transformation planning",
      "Technical due diligence",
    ],
  },
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    icon: Smartphone,
    summary:
      "Native and cross-platform mobile applications built for reliability.",
    description:
      "We design and build mobile applications for iOS and modern cross-platform environments, with attention to performance, usability, and long-term maintainability.",
    capabilities: [
      "Native iOS development (Swift, SwiftUI, UIKit)",
      "Cross-platform mobile solutions",
      "App architecture and code quality",
      "App Store release support",
    ],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    icon: LayoutGrid,
    summary:
      "Modern, responsive web applications, portals, and SaaS platforms.",
    description:
      "From customer-facing websites to internal dashboards and multi-tenant SaaS platforms, we build web applications that are fast, accessible, and built to scale with your business.",
    capabilities: [
      "Custom web applications and portals",
      "Dashboards and internal tools",
      "SaaS platform development",
      "Responsive, accessible interfaces",
    ],
  },
  {
    slug: "software-architecture-modernization",
    title: "Software Architecture & Modernization",
    icon: Boxes,
    summary:
      "Modernize legacy systems and reduce technical debt.",
    description:
      "We assess existing systems, identify architectural weaknesses, and plan a practical path toward a more maintainable, modern codebase — without disrupting business operations.",
    capabilities: [
      "Legacy system modernization",
      "Architecture redesign",
      "Technical debt reduction",
      "Codebase audits and improvement plans",
    ],
  },
  {
    slug: "cloud-backend-solutions",
    title: "Cloud & Backend Solutions",
    icon: Cloud,
    summary:
      "APIs, cloud infrastructure, and backend systems built to scale.",
    description:
      "We design and build backend services and cloud infrastructure that support growth — including APIs, databases, authentication, and integrations with third-party systems.",
    capabilities: [
      "REST and GraphQL API development",
      "Cloud infrastructure (AWS, Azure)",
      "Database design and optimization",
      "Authentication and integrations",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    icon: Sparkles,
    summary:
      "Practical AI integrations that reduce manual, repetitive work.",
    description:
      "We help businesses apply AI and automation where it creates real value — streamlining workflows, reducing manual work, and integrating intelligent features into existing systems.",
    capabilities: [
      "AI feature integration",
      "Workflow and process automation",
      "Internal tooling with AI assistance",
      "Automation strategy",
    ],
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    icon: Users,
    summary:
      "Experienced technical resources to extend your engineering team.",
    description:
      "When your team needs additional capacity, we provide experienced developers who integrate with your existing processes and help accelerate delivery without long hiring cycles.",
    capabilities: [
      "Dedicated development resources",
      "Team augmentation for existing projects",
      "Flexible engagement models",
      "Works within your existing tools and workflow",
    ],
  },
  {
    slug: "ongoing-development-support",
    title: "Ongoing Development & Support",
    icon: Wrench,
    summary:
      "Long-term development, maintenance, and technical support.",
    description:
      "We support applications well beyond launch — with continued development, performance optimization, troubleshooting, and maintenance to keep systems reliable.",
    capabilities: [
      "Application maintenance",
      "Performance optimization",
      "Bug fixes and troubleshooting",
      "Long-term technical support",
    ],
  },
];

export type Differentiator = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  {
    icon: ShieldCheck,
    title: "Experienced Technical Expertise",
    description:
      "Strong software engineering knowledge across modern technologies and platforms, applied thoughtfully to each project.",
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description:
      "Technology decisions are made to support your actual business goals — not to chase trends.",
  },
  {
    icon: Handshake,
    title: "Reliable Delivery",
    description:
      "Clear communication, structured development processes, and maintainable solutions you can depend on.",
  },
  {
    icon: Boxes,
    title: "Flexible Engagement",
    description:
      "Support for individual projects, ongoing development, technical consulting, or engineering team augmentation.",
  },
  {
    icon: MapPin,
    title: "Canada-Based",
    description:
      "Based in Canada, with the ability to work closely with clients across North America.",
  },
];

export type ProcessStepData = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStepData[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business problem, goals, users, and technical requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "We define the solution, architecture, scope, priorities, and a realistic delivery approach.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "We build the solution with an emphasis on quality, security, performance, and maintainability.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy, monitor, and optimize the solution, and continue improving it over time.",
    icon: Rocket,
  },
];

export type TechCategory = {
  category: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  { category: "Mobile", items: ["Swift", "SwiftUI", "UIKit", "iOS"] },
  { category: "Web", items: ["React", "Next.js", "TypeScript", "JavaScript"] },
  { category: "Backend", items: ["REST APIs", "GraphQL", "Node.js", "Databases"] },
  { category: "Cloud", items: ["AWS", "Azure", "Cloud Platforms"] },
  {
    category: "Architecture",
    items: ["MVVM", "MVP", "Clean Architecture", "API Architecture", "Microservices"],
  },
  { category: "AI", items: ["AI Integrations", "Automation", "Intelligent Workflows"] },
];

export type Industry = {
  name: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  { name: "Financial Services", icon: Landmark },
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Logistics & Transportation", icon: Truck },
  { name: "Professional Services", icon: Briefcase },
  { name: "Startups & Technology", icon: Rocket },
  { name: "Small & Medium Businesses", icon: Building2 },
];

export const serviceInterestOptions = [
  "Technology Consulting",
  "Mobile Development",
  "Web Development",
  "Software Modernization",
  "Cloud & Backend",
  "AI & Automation",
  "Staff Augmentation",
  "Other",
] as const;
