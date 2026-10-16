import { site } from "@/data/site";
import { BrandIcon } from "./icons";

const labels = { github: "GitHub", linkedin: "LinkedIn", x: "X (Twitter)", whatsapp: "WhatsApp" } as const;

export function Socials({ className = "" }: { className?: string }) {
  const items = (Object.keys(labels) as (keyof typeof labels)[]).filter((k) => site.socials[k]);
  if (items.length === 0) return null;
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {items.map((k) => (
        <li key={k}>
          <a
            href={site.socials[k]}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={`${site.name} on ${labels[k]}`}
            className="text-fg transition-colors hover:text-accent"
          >
            <BrandIcon name={k} />
          </a>
        </li>
      ))}
    </ul>
  );
}
