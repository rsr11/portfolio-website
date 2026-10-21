export type Tech =
  | "node" | "express" | "react" | "next" | "postgres" | "docker" | "nginx"
  | "aws" | "kafka" | "redis" | "tailwind" | "framer" | "gsap" | "three"
  | "django" | "flask" | "php" | "shopify" | "reactquery" | "dotnet";

export interface Experience {
  slug: string;
  company: string;
  role: string;
  start: string;
  end: string; // "Present" marks the entry as current
  location?: string;
  tech: Tech[];
  highlights: string[];
}

export const experience: Experience[] = [
  {
    slug: "medisetu",
    company: "MediSetu", // TODO: confirm actual company name
    role: "Software Engineer",
    start: "May 2026",
    end: "Present",
    tech: ["react", "node", "express", "postgres", "docker", "nginx", "aws"],
    highlights: [
      "Core engineer on a healthcare SaaS for appointment booking, patient management and lab operations (AppointMyDoctor for patients, MediSetu for clinics).",
      "Cut API response latency from 100–200 ms to 3–5 ms by optimizing backend APIs and database queries.",
      "Deployed and maintain the backend end-to-end with Docker, AWS CloudWatch and Utho, with Nginx as a reverse proxy that blocks unauthorized API endpoints.",
      "Integrated Zoho payments, Meta WhatsApp API, ABHA health-ID linking and Server-Sent Events for real-time notifications.",
    ],
  },
  {
    slug: "kuchoriya",
    company: "Kuchoriya TechSoft", // TODO: confirm spelling
    role: "Full Stack Developer",
    start: "Feb 2026",
    end: "May 2026",
    tech: ["node", "express", "postgres", "aws", "react"],
    highlights: [
      "Designed a multi-tenant architecture with isolated per-company databases for a SaaS platform.",
      "Built and maintained 30+ REST APIs with JWT authentication and RBAC across 5+ user roles.",
      "Integrated HLS (m3u8) adaptive streaming with AWS S3, supporting 5GB+ media files across devices.",
    ],
  },
  {
    slug: "bharg-it",
    company: "Bharg IT Solutions",
    role: "MERN Developer",
    start: "Feb 2024",
    end: "Jun 2024",
    tech: ["react", "reactquery", "node", "express", "dotnet"],
    highlights: [
      "Migrated a Hospital ERP backend from .NET to Node.js and Express while preserving core functionality.",
      "Added React Query for server-state management, caching and background sync.",
      "Reduced cumulative layout shift and improved load performance with prefetching and efficient API usage.",
    ],
  },
   {
    slug: "freelance",
    company: "Freelance",
    role: "Full-Stack Developer",
    start: "Aug 2024",
    end: "Present",
    tech: ["next", "react", "gsap", "framer", "three", "django", "flask", "php", "shopify"],
    highlights: [
      "Design, build and deploy end-to-end websites for independent clients, including legacy-marble.com and skilltyro.com.",
      "Animated front-ends with GSAP, Framer Motion and Three.js.",
      "Picked the stack per client's needs and budget: Django, Flask, PHP or Shopify.",
    ],
  },
];