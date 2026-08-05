import { Code2, GraduationCap, Mail, Palette, PenTool, Rocket, Sparkles } from "lucide-react";

// Update all personal information for the website from this single file.
// Profile photo: replace /public/assets/profile-placeholder.svg with your own image,
// or update profile.image below to point to a new file in /public/assets.
export const portfolio = {
  name: "Md. Ariful Islam",
  title: "Web Developer & Graphics Designer",
  degree: "B.Sc. in Computer Science and Engineering (CSE)",
  university: "Daffodil International University",
  email: "arifwahid2020@gmail.com",
  location: "Bangladesh",
  profile: {
    image: "/assets/profile-placeholder.svg",
    alt: "Portrait placeholder for Md. Ariful Islam",
  },
  resumeUrl: "/assets/resume-placeholder.pdf",
  bio: "I craft elegant, performant, and user-focused digital experiences by combining modern web engineering with thoughtful visual design. My work blends clean code, premium interfaces, and brand-aware graphics to help ideas feel polished and purposeful.",
  highlights: ["Responsive web apps", "Premium UI design", "Brand-forward graphics", "SEO-friendly builds"],
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    facebook: "https://facebook.com/your-username",
    email: "mailto:arifwahid2020@gmail.com",
  },
  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering (CSE)",
      school: "Daffodil International University",
      period: "Update graduation year",
      summary: "Focused on software engineering, web technologies, algorithms, and practical product development.",
    },
  ],
  services: [
    { title: "Web Development", description: "Modern, responsive, SEO-ready websites and web apps built with scalable frontend architecture.", icon: Code2 },
    { title: "UI & Brand Design", description: "Premium interfaces, landing pages, visual systems, and graphics that make brands feel professional.", icon: Palette },
    { title: "Creative Assets", description: "Social media visuals, marketing creatives, and polished digital graphics for campaigns and portfolios.", icon: PenTool },
  ],
  skills: [
    // Add skills here later, e.g. { name: "React", level: 90, category: "Frontend" }
  ] as Array<{ name: string; level: number; category: string }>,
  projects: [
    // Add projects here later, e.g. { title: "Project", description: "...", href: "https://...", tags: ["Next.js"] }
  ] as Array<{ title: string; description: string; href: string; tags: string[] }>,
  experience: [
    {
      role: "Web Developer & Graphics Designer",
      company: "Independent / Freelance",
      period: "Present",
      description: "Designing and building refined digital experiences, visuals, and responsive web interfaces for personal and client projects.",
    },
  ],
  nav: ["Home", "About", "Education", "Services", "Skills", "Projects", "Experience", "Contact"],
  stats: [
    { value: "CSE", label: "Academic Background", icon: GraduationCap },
    { value: "2-in-1", label: "Developer + Designer", icon: Sparkles },
    { value: "SEO", label: "Optimized Foundations", icon: Rocket },
    { value: "24h", label: "Easy Contact", icon: Mail },
  ],
};

export type Portfolio = typeof portfolio;
