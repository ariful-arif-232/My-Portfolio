import { Code2, GraduationCap, Layers3, Mail, Palette, PenTool, Rocket, Sparkles } from "lucide-react";

export type SkillCategory = "Frontend" | "Design" | "Tools";

export type Skill = {
  name: string;
  level: number;
  category: SkillCategory;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  technologies: string[];
  featured: boolean;
};

export const portfolio = {
  name: "Md. Ariful Islam",
  title: "Frontend Developer & Graphics Designer",
  degree: "B.Sc. in Computer Science and Engineering (CSE)",
  university: "Daffodil International University",
  email: "arifwahid2020@gmail.com",
  location: "Bangladesh",
  availability: "Available for freelance and frontend work",
  profile: {
    image: "/assets/profile.jpg",
    fallback: "/assets/profile-placeholder.svg",
    alt: "Portrait of Md. Ariful Islam",
  },
  resumeUrl: "/assets/md-ariful-islam-cv.pdf",
  bio: "I design and build clean, responsive web experiences with a strong eye for visual detail. My work sits between frontend engineering and brand-focused design, so the final product feels polished, fast, and easy to use.",
  intro: "I’m a CSE student at Daffodil International University, growing into a frontend developer who cares about tasteful interfaces, reliable implementation, and clear communication.",
  highlights: ["Frontend interfaces", "Responsive layouts", "Graphic design", "SEO-aware builds"],
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    facebook: "https://facebook.com/your-username",
    email: "mailto:arifwahid2020@gmail.com",
  },
  timeline: [
    {
      label: "Education",
      title: "B.Sc. in Computer Science and Engineering",
      meta: "Daffodil International University",
      period: "Update graduation year",
      summary: "Building a foundation in software engineering, web technologies, algorithms, and practical problem solving.",
    },
    {
      label: "Current focus",
      title: "Modern frontend development",
      meta: "Learning journey",
      period: "Present",
      summary: "Improving React, Next.js, TypeScript, UI systems, accessibility, and performance through hands-on portfolio and product work.",
    },
  ],
  services: [
    { title: "Frontend Development", description: "Responsive interfaces built with clean components, accessible interactions, and production-ready structure.", icon: Code2 },
    { title: "UI & Visual Design", description: "Landing pages, portfolio systems, and brand-aware screens with strong typography and spacing.", icon: Palette },
    { title: "Creative Assets", description: "Social graphics, marketing visuals, and polished digital assets that support a consistent identity.", icon: PenTool },
  ],
  skills: [
    { name: "HTML", level: 92, category: "Frontend" },
    { name: "CSS", level: 88, category: "Frontend" },
    { name: "JavaScript", level: 78, category: "Frontend" },
    { name: "React", level: 72, category: "Frontend" },
    { name: "Responsive UI", level: 86, category: "Design" },
    { name: "Graphic Design", level: 82, category: "Design" },
    { name: "Git", level: 70, category: "Tools" },
    { name: "Figma", level: 76, category: "Tools" },
  ] as Skill[],
  projects: [] as Project[],
  experience: [
    {
      role: "Web Developer & Graphics Designer",
      company: "Independent / Freelance",
      period: "Present",
      description: "Designing visuals and building responsive web interfaces for personal and client-facing work while continuing to strengthen frontend fundamentals.",
    },
  ],
  nav: ["Home", "About", "Services", "Skills", "Projects", "Experience", "Contact"],
  stats: [
    { value: "CSE", label: "Academic path", icon: GraduationCap },
    { value: "UI", label: "Design-minded builds", icon: Sparkles },
    { value: "SEO", label: "Solid foundations", icon: Rocket },
    { value: "Web", label: "Frontend focus", icon: Layers3 },
    { value: "Email", label: "Easy to reach", icon: Mail },
  ],
};

export type Portfolio = typeof portfolio;
