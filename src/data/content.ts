import {
  siReact, siNextdotjs, siTypescript, siJavascript, siTailwindcss,
  siHtml5, siCss, siGit, siReactquery, siFigma,
} from "simple-icons";

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
  image?: string; // e.g. "/projects/jolojolo.png" (put the file in /public/projects)
  demo?: string;
  repo?: string;
};

// Only details already confirmed in the approved mockup. Add `image`, `demo` and `repo` as they become available.
export const projects: Project[] = [
  {
    title: "Jolojolo Admin Dashboard",
    description:
      "An admin dashboard for managing deliveries, campaigns and team operations.",
    tags: ["Tan Stack Query", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Movie Recommendation App",
    description: "A movie discovery application built with Next.js and the TMDB API.",
    tags: ["Next.js", "TMDB API", "Tailwind CSS"],
  },
];

export const principles = [
  { title: "Clean code", text: "Maintainable, scalable solutions." },
  { title: "Modern tools", text: "Current frameworks and best practices." },
  { title: "User focused", text: "Interfaces that solve real problems." },
];
