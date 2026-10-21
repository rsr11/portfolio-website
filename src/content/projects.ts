export interface Project {
  slug: string;
  title: string;
  description: string; // short line for the card
  tags: string[];
  image: string; // card + detail cover
  url?: string; // live site
  github?: string;
  status?: "In progress";
  year: string;
  role: string;
  overview: string; // what it is and why it exists
  highlights: string[]; // what you built / what was hard
  gallery?: string[]; // extra screenshots
}

export const projects: Project[] = [
  {
    slug: "appointmydoctor",
    title: "AppointMyDoctor",
    description: "Patient-facing platform to find doctors and book appointments.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/images/projects/appointmydoctor.png",
    url: "", // TODO: live link
    year: "2026",
    role: "Software Engineer",
    overview:
      "The patient side of a healthcare SaaS. Patients find doctors, book appointments and get updates, while clinics run their side on MediSetu.",
    highlights: [
      "Cut API response latency from 100–200 ms to 3–5 ms by optimizing backend APIs and database queries.",
      "Integrated Zoho payments for bookings and invoices, and the Meta WhatsApp API for patient communication.",
      "Added real-time in-app notifications with Server-Sent Events, and ABHA health-ID linking.",
    ],
  },
  {
    slug: "legacy-marble",
    title: "Legacy Marble",
    description: "Animated marketing website for a marble business.",
    tags: ["Next.js", "GSAP", "Three.js"],
    image: "/images/projects/legacy-marble.png",
    url: "https://legacy-marble.com",
    year: "TODO",
    role: "Freelance Full-Stack Developer",
    overview: "TODO: who the client is and what the site needed to do.",
    highlights: [
      "Animated front-end built with GSAP, Framer Motion and Three.js.",
      "TODO: one or two specific things you built or solved.",
    ],
  },
  {
    slug: "buggy-bank",
    title: "Buggy Bank",
    description: "TODO: one-line description",
    tags: ["TODO"],
    image: "/images/projects/buggy-bank.png",
    status: "In progress",
    year: "2026",
    role: "Solo Developer",
    overview: "TODO: what it is and the problem it solves.",
    highlights: ["TODO"],
  },
  {
    slug: "skilltyro",
    title: "Skilltyro",
    description: "Animated website built for a client.",
    tags: ["Next.js", "Framer Motion"],
    image: "/images/projects/skilltyro.png",
    url: "https://skilltyro.com",
    year: "TODO",
    role: "Freelance Full-Stack Developer",
    overview: "TODO: who the client is and what the site needed to do.",
    highlights: ["TODO: one or two specific things you built or solved."],
  },
  {
    slug: "productr",
    title: "Productr",
    description: "TODO: one-line description",
    tags: ["TODO"],
    image: "/images/projects/productr.png",
    url: "", // TODO: live link
    year: "TODO",
    role: "TODO",
    overview: "TODO: what it is and the problem it solves.",
    highlights: ["TODO"],
  },
];