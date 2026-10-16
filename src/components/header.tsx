"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Download, Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header({ resumeHref }: { resumeHref: string | null }) {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#home" className="font-serif text-xl font-semibold">
          Afolabi<span className="text-accent">Adedeji</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-fg">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle colour theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="grid size-9 place-items-center rounded-md text-fg hover:bg-accent-soft"
          >
            <Sun className="hidden size-[18px] dark:block" aria-hidden="true" />
            <Moon className="size-[18px] dark:hidden" aria-hidden="true" />
          </button>
          {resumeHref && (
            <a href={resumeHref} download className="btn-primary hidden sm:inline-flex">
              Resume <Download className="size-4" aria-hidden="true" />
            </a>
          )}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
            className="grid size-9 place-items-center rounded-md hover:bg-accent-soft md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-bg md:hidden">
          <ul className="container-x flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm">
                  {l.label}
                </a>
              </li>
            ))}
            {resumeHref && (
              <li className="py-2">
                <a href={resumeHref} download className="btn-primary w-full">
                  Resume <Download className="size-4" aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
