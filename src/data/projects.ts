export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  url?: string;
  status?: "active" | "archived" | "wip";
}

export const projects: Project[] = [
  {
    title: "What Happened Here",
    description:
      "Explore how cities became what they are today in just 5 minutes.",
    tags: ["TypeScript", "CSS", "JavaScript"],
    github: "https://github.com/Rainiwalk/what-happened-here",
    status: "active",
  },
  {
    title: "Personal Website",
    description:
      "This website. Built with Astro, Tailwind CSS, and deployed to GitHub Pages.",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Rainiwalk/rainiwalk.github.io",
    status: "active",
  },
];
