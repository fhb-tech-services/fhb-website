import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Smartphone,
  Plug,
  Sparkles,
  Users,
  ShieldCheck,
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

export type ServiceSubsection = {
  title: string;
  items: string[];
};

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  /** Flat list. Used as the whole capability list, or as "Additional Capabilities" alongside `subsections`. */
  capabilities: string[];
  /** Optional grouped breakdown (e.g. Mobile's iOS / Android / Cross-Platform tracks). */
  subsections?: ServiceSubsection[];
};

export const services: Service[] = [
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    icon: Smartphone,
    summary:
      "Native iOS and Android apps, plus cross-platform solutions built for reliability.",
    description:
      "We design and build mobile applications for iOS and Android, as well as cross-platform solutions, with attention to architecture, performance, and long-term maintainability. We also modernize existing mobile applications and improve their performance and architecture.",
    subsections: [
      {
        title: "iOS Development",
        items: [
          "Swift",
          "SwiftUI",
          "UIKit",
          "Combine",
          "Modern iOS architecture",
          "App Store deployment",
        ],
      },
      {
        title: "Android Development",
        items: [
          "Kotlin",
          "Android SDK",
          "Jetpack components",
          "Modern Android architecture",
          "Google Play Store deployment",
        ],
      },
      {
        title: "Cross-Platform Development",
        items: ["React Native", "Shared mobile solutions across iOS and Android"],
      },
    ],
    capabilities: [
      "Mobile app modernization",
      "Performance optimization",
      "Architecture improvements",
      "Legacy application migration",
    ],
  },
  {
    slug: "software-consulting",
    title: "Software Consulting",
    icon: Compass,
    summary:
      "Clear, practical guidance for making informed technology decisions.",
    description:
      "We help businesses evaluate technical options, review application architecture, and modernize legacy systems — applying sound engineering practices throughout, rather than chasing trends.",
    capabilities: [
      "Technical consulting",
      "Application architecture reviews",
      "Code quality improvements",
      "Legacy system modernization",
      "Engineering best practices",
    ],
  },
  {
    slug: "application-integration",
    title: "Application Integration",
    icon: Plug,
    summary:
      "Connecting your systems through REST, GraphQL, cloud, and third-party integrations.",
    description:
      "We build reliable integrations between your applications and the services they depend on — APIs, cloud platforms, and third-party tools — so your systems work together smoothly.",
    capabilities: [
      "REST API integration",
      "GraphQL integration",
      "Cloud service integration",
      "Third-party service integration",
    ],
  },
  {
    slug: "engineering-support-team-augmentation",
    title: "Engineering Support / Team Augmentation",
    icon: Users,
    summary:
      "Experienced senior developers who extend your engineering team.",
    description:
      "When your team needs additional capacity or expertise, we provide experienced senior developers who work directly with your existing engineering team — contributing code, reviews, and technical guidance.",
    capabilities: [
      "Senior developer consulting",
      "Remote engineering support",
      "Collaboration with existing engineering teams",
      "Code reviews and technical guidance",
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
    icon: Code2,
    title: "Experienced Engineering",
    description: "12+ years of software development experience.",
  },
  {
    icon: MapPin,
    title: "North America Based",
    description: "Providing consulting services across Canada and North America.",
  },
  {
    icon: Building2,
    title: "Enterprise Experience",
    description: "Experience building and maintaining production-level applications.",
  },
  {
    icon: Sparkles,
    title: "Modern Technology Approach",
    description: "Using modern frameworks, architectures, and engineering practices.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description: "Clean architecture, maintainable code, and scalable solutions.",
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

export const projectTypeOptions = [
  "iOS App Development",
  "Android App Development",
  "Cross-Platform App Development",
  "Mobile App Modernization",
  "Software Consulting",
  "Application Integration",
  "Engineering Support / Team Augmentation",
  "Other",
] as const;
