import fs from "node:fs";
import path from "node:path";

export const site = {
  name: "Afolabi Adedeji",
  url: "https://adedeji-portfolio-psi.vercel.app",
  title: "Afolabi Adedeji | Frontend Developer (React, Next.js, TypeScript)",
  description:
    "Afolabi Adedeji is a Frontend Developer with 2+ years of experience building responsive, maintainable web applications with React, Next.js and TypeScript.",
  email: "adedejiafolabi@gmail.com",
  location: "Lagos, Nigeria",
  // Add a profile URL to show its icon in the hero, contact section and footer. Empty values are hidden.
  socials: {
    github: "https://github.com/Adedeji1",
    linkedin: "https://www.linkedin.com/in/afolabi-adedeji-4019a6225/",
    x: "https://x.com/afolabi_adedeji",
    whatsapp: "https://wa.me/2348106918387",
  },
};

const exists = (file: string) => fs.existsSync(path.join(process.cwd(), "public", file));

// Drop your files into /public with these exact names; the UI switches over automatically.
export const resumeHref = exists("resume.pdf") ? "/resume.pdf" : null;
export const portraitSrc = exists("portrait.jpg") ? "/portrait.jpg" : null;
