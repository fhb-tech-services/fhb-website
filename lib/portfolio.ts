export type Project = {
  slug: string;
  name: string;
  industry: string;
  /** Short teaser used on preview cards. */
  summary: string;
  /** Full case-study narrative. */
  description: string;
  role: string;
  technologies: string[];
  keyFeatures: string[];
  challenges: string;
  businessImpact: string;
  /** Optional project image/logo — omitted projects fall back to a text mark. */
  image?: string;
  /**
   * Marks illustrative entries so the UI can label them honestly until real
   * case studies are supplied. Remove this field once a project is real.
   */
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "fintech-mobile-banking-app",
    name: "Mobile Banking Application",
    industry: "Financial Services",
    summary:
      "A native iOS banking app rebuilt for reliability, security, and a modern architecture.",
    description:
      "A regional financial services provider needed to replace an aging mobile banking app that had become difficult to maintain and slow to update. We rebuilt the application natively for iOS, introducing a modern architecture that made ongoing feature work significantly faster and safer to ship.",
    role: "Lead iOS Developer — architecture, implementation, and App Store release",
    technologies: ["Swift", "SwiftUI", "Combine", "Clean Architecture", "REST APIs"],
    keyFeatures: [
      "Biometric authentication and secure session handling",
      "Real-time balance and transaction sync",
      "Fund transfers and bill payments",
      "Push notifications for account activity",
    ],
    challenges:
      "The existing codebase had no clear architecture and tightly coupled networking and UI logic, making changes risky. We introduced a layered architecture and a phased migration plan so the rebuild could ship incrementally without a risky big-bang release.",
    businessImpact:
      "Faster release cycles for new features and a measurable drop in crash-related support tickets after launch.",
    placeholder: true,
  },
  {
    slug: "retail-inventory-cross-platform-app",
    name: "Retail Inventory Management App",
    industry: "Retail & E-commerce",
    summary:
      "A cross-platform React Native app that gave store staff real-time inventory visibility.",
    description:
      "A multi-location retailer relied on manual, spreadsheet-based stock counts across stores, leading to frequent discrepancies. We built a cross-platform mobile app for iOS and Android that connected store staff directly to live inventory data.",
    role: "Mobile Developer — cross-platform app development and backend API integration",
    technologies: ["React Native", "TypeScript", "REST APIs", "Cloud Backend"],
    keyFeatures: [
      "Barcode scanning for stock counts and receiving",
      "Real-time inventory sync across locations",
      "Low-stock alerts and reorder suggestions",
      "Role-based access for staff and managers",
    ],
    challenges:
      "The app needed to work reliably on older, low-spec store devices with inconsistent Wi-Fi. We built an offline-first sync layer that queued updates locally and reconciled them once connectivity returned.",
    businessImpact:
      "Reduced inventory discrepancies and cut the time staff spent on manual stock counts.",
    placeholder: true,
  },
  {
    slug: "healthcare-patient-portal-integration",
    name: "Patient Portal System Integration",
    industry: "Healthcare",
    summary:
      "Connecting a patient-facing portal to multiple clinical and billing systems.",
    description:
      "A healthcare provider needed their patient portal to reflect accurate, up-to-date information from several separate clinical and billing systems that didn't natively communicate with each other. We designed and built the integration layer that tied them together.",
    role: "Technical Consultant & Integration Engineer",
    technologies: ["REST APIs", "GraphQL", "Cloud Integration", "Node.js"],
    keyFeatures: [
      "Unified patient record view across systems",
      "Appointment scheduling synced with the clinical calendar",
      "Secure billing and payment status integration",
      "Automated data reconciliation between systems",
    ],
    challenges:
      "Each backend system had a different data model and inconsistent update timing. We designed a reconciliation layer with clear conflict-resolution rules so the portal always showed a trustworthy, consistent view.",
    businessImpact:
      "Reduced staff time spent manually cross-checking records and improved data consistency across systems.",
    placeholder: true,
  },
];
