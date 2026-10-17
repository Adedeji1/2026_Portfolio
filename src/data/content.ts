import { siReact, siNextdotjs, siTypescript, siJavascript, siTailwindcss, siHtml5, siCss, siGit, siReactquery, siFigma,} from "simple-icons";

export const skills = [
  { name: "Next.js", icon: siNextdotjs, mono: true },
  { name: "React", icon: siReact },
  { name: "TypeScript", icon: siTypescript },
  { name: "JavaScript", icon: siJavascript },
  { name: "HTML", icon: siHtml5 },
  { name: "CSS", icon: siCss },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "TanStack Query", icon: siReactquery },
  { name: "Git", icon: siGit },
  { name: "Figma", icon: siFigma },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Admin Dashboard",
    description:
      "An admin dashboard for managing deliveries, campaigns and team operations.",
    tags: ["TanStack Query", "TypeScript", "Tailwind CSS"],
    image: "/project/Jolo_Portfolio.gif",
  },
  {
    title: "Movie Recommendation App",
    description: "Search and explore movies from TMDB, with a wishlist to track what you want to watch.",
    tags: ["Next.js", "TMDB API", "Tailwind CSS"],
    image: "/project/moviebox.png",
  },
  {
    title: "YPL Pizza",
    description: "Website for a Florida pizza business, taking the brands Figma design to a live, deployed site.",
    tags: ["Figma", "TypeScript", "Tailwind CSS"],
    image: "/project/image.png"
  },
  {
    title: "Consulting Firm",
    description: "Responsive website for a consulting firm, presenting its services and generating client enquiries.",
    tags: [ "React", "TypeScript", "Tailwind CSS"],
    image: "/project/Ade-Consult.png",
  },
];

export const principles = [
  { title: "Clean code", text: "Maintainable, scalable solutions." },
  { title: "Modern tools", text: "Current frameworks and best practices." },
  { title: "User focused", text: "Interfaces that solve real problems." },
];