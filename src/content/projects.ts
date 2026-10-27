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
    description: "The patient app of a healthcare platform for clinics. Find a doctor, pick a slot, pay online and book through the app or WhatsApp, and manage health records for up to four family members.",
    tags: ["React", "Node.js", "PostgreSQL","Meta API","Zoho"],
    image: "/images/projects/appointmydoctor.png",
    url: "www.appointmydoctor.in", // TODO: live link
    year: "2026",
    role: "Software Engineer",
    overview:
      "AppointMyDoctor is the patient-facing side of a healthcare SaaS built for clinics, while the clinics run their side on MediSetu. Patients search for doctors and clinics by name, rating, experience or symptoms. The booking flow is the same everywhere: choose the doctor, choose the time slot, then pay online to confirm. It works in the app or over WhatsApp. Patients can also create their ABHA health ID, keep their health records in one place, and book for up to four family members from a single account.",
    highlights: [
      "Search by doctor name, rating, experience or symptoms, so patients can find care even when they don’t know which specialist they need.",
      "One booking flow across the app and WhatsApp: doctor, slot, online payment.",
      "Online payments for bookings and invoices with the Zoho payment gateway, and patient messages through the Meta WhatsApp API.",
      "ABHA (Ayushman Bharat Health Account) integration for creating and linking a patient’s health ID.",
      "Real-time in-app notifications with Server-Sent Events.",
      "Cut API response time from 100–200 ms to 3–5 ms by optimizing backend APIs and database queries.",
      "Deployed with Docker, with Nginx as a reverse proxy that blocks unauthorized API endpoints, and monitored with AWS CloudWatch."
    ],
  },
  {
    slug: "legacy-marble",
    title: "Legacy Marble",
    description: "Animated marketing website for a marble business.",
    tags: ["Next.js", "GSAP", "SEO","Blog","Freelance"],
    image: "/images/projects/legacy-marble.png",
    url: "https://legacy-marble.com",
    year: "2026",
    role: "Freelance Full-Stack Developer",
    overview: "The owner of Legacy Marble wanted a website that shows what the business sells, builds trust with testimonials from past clients, and ranks on search through a blog. They also wanted the site to feel interactive and not like a plain catalogue. I designed, built and deployed it end to end as a freelance project, with animated, interactive front-end work using GSAP, Framer Motion and Three.js.",
    highlights: [
      "Product showcase so visitors can see what the business sells.",
      "Testimonials section that puts real client feedback in front of new customers.",
      "Blog set up for SEO, so the business can be found through search.",
      "Interactive, animated front-end built with GSAP, Framer Motions.",
      "Delivered start to finish by me: design, build and deployment."
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
    description: "A product management and CRM platform where you list items, set them live or archive them, and manage multiple product images with drag and drop.",
    tags: ["React.js","Node.js","Email","Cloudnary","MongoDb"],
    image: "/images/projects/productr.png",
    url: "", // TODO: live link
    year: "2025",
    role: "",
    overview: "Productr is a web platform for managing a product catalogue. You add products, publish them to make them live, or archive them when they’re no longer sold. Each product can have several images, and you change or reorder them by dragging and dropping.",
    highlights: ["Add and manage products from a single CRM-style dashboard.","Switch any product between live and archived.","Multiple images per product, changed with drag and drop."

    ],
  },
];