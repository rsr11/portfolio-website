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
    tags: ["React", "Node.js", "PostgreSQL","Meta API","Zoho"],
    image: "/images/projects/appointmydoctor.png",
    url: "www.appointmydoctor.in", // TODO: live link
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
    tags: ["Next.js", "GSAP", "SEO"],
    image: "/images/projects/legacy-marble.png",
    url: "https://legacy-marble.com",
    year: "2026",
    role: "Freelance Full-Stack Developer",
    overview: "A marble-seller need a website that can showcase their work and their catalogue.",
    highlights: [
      "Animated front-end built with GSAP, Framer Motion.",
      "increase the rank in SEO, with multiple keywords.",
    ],
  },
  {
    slug: "buggy-bank",
    title: "Buggy Bank",
    description: "Buggy Bank is a personal finance backend that turns saving into a habit. Users set wishlist goals with their own piggy bank for each item, build savings streaks, and never miss an EMI, rent or bill payment thanks to a unified reminder engine.",
    tags: ["Java","Spring Boot","PostgreSQL","REST API","Flyway","JWT Auth","Spring Data JPA","Fintech","Backend","Testcontainers"],
    image: "/images/projects/buggy-bank.png",
    status: "In progress",
    year: "2026",
    role: "Solo Developer",
    overview: "Most money apps either track expenses or send bill reminders, but they don’t help you save for specific things you want. Buggy Bank combines both. Each wishlist item (a phone, a trip) gets its own piggy with a target amount and date, so progress is visible. A streak system rewards consistent saving, and one obligations engine handles EMIs, rent and bills with pre-generated due dates and scheduled reminders. A dashboard pulls it together into a single “free to spend” number: your balance minus what’s saved in piggies and what’s due soon.",
    highlights: ["Ledger-based design: balances and piggy savings are derived from append-only transaction ledgers instead of editable fields, so numbers can’t drift and every rupee is traceable.","Money stored as integers (paise), avoiding floating-point errors.","One obligations engine for EMIs, rent and bills (including rent you collect), rather than three duplicate systems.","Timezone-aware streaks: streak periods are calculated in the user’s timezone, so a late-night deposit counts for the right day or week.","Safe scheduled reminders using a Postgres queue with FOR UPDATE SKIP LOCKED, so notifications aren’t sent twice even with multiple instances.","Feature-based Spring Boot structure with event-driven side effects, keeping modules decoupled.","Atomic “mark as paid”: one transaction updates the due item and records the expense, and a unique constraint prevents double payment."],
  },
  {
    slug: "skilltyro",
    title: "Skilltyro",
    description: "Animated website built for a client.",
    tags: ["Next.js", "Framer Motion","PHP"],
    image: "/images/projects/skilltyro.png",
    url: "https://skilltyro.com",
    year: "2024",
    role: "Freelance Full-Stack Developer",
    overview: "hyderabad based client, need website to sell the courses and can store user details.",
    highlights: ["Created backend for storing their user data.","created multi-page website showcasing about their courses."],
  },
  {
    slug: "productr",
    title: "Productr",
    description: "It is a Project with Orufy Technology",
    tags: ["React.js","Node.js","Email","Cloudnary","MongoDb"],
    image: "/images/projects/productr.png",
    url: "", // TODO: live link
    year: "2025",
    role: "",
    overview: "Productr is a MERN project that is given by Orufy Technology as Assignment, have to submit it before 15th Jan 2026",
    highlights: ["Product Management"],
  },
];