import { site } from "@/data/site";
import { Socials } from "./socials";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <Socials />
      </div>
    </footer>
  );
}
