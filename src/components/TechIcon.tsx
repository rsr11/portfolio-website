import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiNodedotjs, SiExpress, SiReact, SiNextdotjs, SiPostgresql, SiDocker, SiNginx,
  SiApachekafka, SiRedis, SiTailwindcss, SiFramer, SiGreensock, SiThreedotjs,
  SiDjango, SiFlask, SiPhp, SiShopify, SiReactquery, SiDotnet,
} from "react-icons/si";
import type { Tech } from "@/content/experience";

const icons: Record<Tech, { Icon: IconType; label: string }> = {
  node: { Icon: SiNodedotjs, label: "Node.js" },
  express: { Icon: SiExpress, label: "Express" },
  react: { Icon: SiReact, label: "React" },
  next: { Icon: SiNextdotjs, label: "Next.js" },
  postgres: { Icon: SiPostgresql, label: "PostgreSQL" },
  docker: { Icon: SiDocker, label: "Docker" },
  nginx: { Icon: SiNginx, label: "Nginx" },
  aws: { Icon: FaAws, label: "AWS" },
  kafka: { Icon: SiApachekafka, label: "Kafka" },
  redis: { Icon: SiRedis, label: "Redis" },
  tailwind: { Icon: SiTailwindcss, label: "Tailwind CSS" },
  framer: { Icon: SiFramer, label: "Framer Motion" },
  gsap: { Icon: SiGreensock, label: "GSAP" },
  three: { Icon: SiThreedotjs, label: "Three.js" },
  django: { Icon: SiDjango, label: "Django" },
  flask: { Icon: SiFlask, label: "Flask" },
  php: { Icon: SiPhp, label: "PHP" },
  shopify: { Icon: SiShopify, label: "Shopify" },
  reactquery: { Icon: SiReactquery, label: "React Query" },
  dotnet: { Icon: SiDotnet, label: ".NET" },
};

export default function TechIcon({ tech }: { tech: Tech }) {
  const { Icon, label } = icons[tech];
  return (
    <span
      title={label}
      aria-label={label}
      className="grid size-9 place-items-center rounded-md border border-dashed border-[var(--line)] text-[var(--fg)]"
    >
      <Icon size={18} />
    </span>
  );
}