"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Download, ExternalLink, Mail, Menu, Moon, Send, Sparkles, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { portfolio } from "@/data/portfolio";

const sectionIds = portfolio.nav.map((item) => item.toLowerCase());
const skillCategories = ["All", ...Array.from(new Set(portfolio.skills.map((skill) => skill.category)))] as const;

type SocialIconProps = { className?: string };

function GithubIcon({ className }: SocialIconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .28.18.6.69.5A10.12 10.12 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" /></svg>;
}

function LinkedinIcon({ className }: SocialIconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.98H3.75V20h3.19V8.98ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm6.7 4.98H9V20h3.18v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h3.18v-6.04c0-2.96-.64-5.24-4.1-5.24-1.66 0-2.77.91-3.23 1.78h-.04l.04-1.52Z" /></svg>;
}

function FacebookIcon({ className }: SocialIconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2V8.6H15.2c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22A10.04 10.04 0 0 0 22 12.06Z" /></svg>;
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="section mx-auto max-w-7xl px-6 py-20 lg:px-8"><motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease: "easeOut" }}><p className="eyebrow">{eyebrow}</p><h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">{title}</h2><div className="mt-10">{children}</div></motion.div></section>;
}

function Header() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const current = sectionIds.findLast((id) => document.getElementById(id)?.getBoundingClientRect().top! <= 130);
      setActive(current ?? "home");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <header className="fixed inset-x-0 top-4 z-50 mx-auto max-w-7xl px-4"><nav className="glass-nav rounded-full px-4 py-3"><div className="flex items-center justify-between"><Link href="#home" className="font-semibold tracking-tight">Ariful<span className="text-teal-500">.</span></Link><div className="hidden gap-1 lg:flex">{portfolio.nav.map((item) => { const id = item.toLowerCase(); return <Link key={id} href={`#${id}`} className={`rounded-full px-3.5 py-2 text-sm transition ${active === id ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "text-slate-600 hover:bg-slate-950/5 dark:text-slate-300 dark:hover:bg-white/10"}`}>{item}</Link>; })}</div><div className="flex items-center gap-2"><button aria-label="Toggle theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="icon-button"><Sun className="h-4 w-4 dark:hidden" /><Moon className="hidden h-4 w-4 dark:block" /></button><button aria-label="Open menu" onClick={() => setOpen(!open)} className="icon-button lg:hidden">{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button></div></div>{open && <div className="mt-4 grid gap-1 rounded-3xl border border-slate-200 bg-white p-2 lg:hidden dark:border-white/10 dark:bg-slate-950">{portfolio.nav.map((item) => <Link onClick={() => setOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="rounded-2xl px-4 py-3 text-sm hover:bg-slate-100 dark:hover:bg-white/10">{item}</Link>)}</div>}</nav></header>;
}

function SocialLinks() {
  const links = [
    { Icon: GithubIcon, href: portfolio.socials.github, label: "GitHub" },
    { Icon: LinkedinIcon, href: portfolio.socials.linkedin, label: "LinkedIn" },
    { Icon: FacebookIcon, href: portfolio.socials.facebook, label: "Facebook" },
    { Icon: Mail, href: portfolio.socials.email, label: "Email" },
  ];
  return <div className="flex flex-wrap gap-3">{links.map(({ Icon, href, label }) => <Link key={label} href={href} aria-label={label} className="icon-button h-11 w-11 hover:-translate-y-1 hover:text-teal-500"><Icon className="h-5 w-5" /></Link>)}</div>;
}

function ProjectImage({ src, title }: { src: string; title: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6 text-center dark:from-slate-900 dark:to-slate-800"><Sparkles className="mb-3 h-8 w-8 text-teal-500" /><p className="text-sm font-medium text-slate-600 dark:text-slate-300">Upload thumbnail to</p><code className="mt-2 rounded-full bg-white/80 px-3 py-1 text-xs text-slate-500 dark:bg-white/10 dark:text-slate-400">public{src}</code></div>;
  }

  return <Image src={src} alt={`${title} thumbnail`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" loading="lazy" onError={() => setHasError(true)} />;
}

function HeroImage() {
  const [src, setSrc] = useState(portfolio.profile.image);
  return <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative mx-auto w-full max-w-[460px]"><motion.div aria-hidden animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-4 top-8 h-28 w-28 rounded-full bg-teal-300/30 blur-xl" /><motion.div aria-hidden animate={{ y: [0, 18, 0], x: [0, 10, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -left-6 h-40 w-40 rounded-[2rem] bg-indigo-300/25 blur-2xl" /><div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/60 p-3 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-white/10"><div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100 dark:bg-slate-900"><Image src={src} alt={portfolio.profile.alt} fill priority sizes="(min-width: 1024px) 460px, 90vw" className="object-cover" onError={() => setSrc(portfolio.profile.fallback)} /></div><div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/60 bg-white/75 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-950/70"><p className="flex items-center gap-2 text-sm font-medium"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />{portfolio.availability}</p></div></div></motion.div>;
}

export default function PortfolioSite() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [skillFilter, setSkillFilter] = useState<(typeof skillCategories)[number]>("All");
  const filteredSkills = useMemo(() => skillFilter === "All" ? portfolio.skills : portfolio.skills.filter((skill) => skill.category === skillFilter), [skillFilter]);
  const projects = useMemo(() => [...portfolio.projects].sort((a, b) => Number(b.featured) - Number(a.featured)), []);

  return <main className="relative overflow-hidden"><motion.div style={{ scaleX }} className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-slate-950 dark:bg-white" /><Header /><div className="ambient-bg" />
    <section id="home" className="section mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-20 pt-36 lg:grid-cols-[1.05fr_.95fr] lg:px-8"><motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}><p className="eyebrow">Hello, I’m {portfolio.name.split(" ").at(-1)}</p><h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-balance sm:text-7xl lg:text-8xl">Building calm, modern web experiences with visual clarity.</h1><p className="mt-6 max-w-2xl text-xl font-medium text-slate-700 dark:text-slate-200">{portfolio.title}</p><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">{portfolio.intro}</p><div className="mt-8 flex flex-wrap gap-3"><Link href={portfolio.resumeUrl} className="primary-button"><Download className="h-4 w-4" />Download CV</Link><Link href="#projects" className="secondary-button">View work<ArrowUpRight className="h-4 w-4" /></Link></div><div className="mt-8"><SocialLinks /></div></motion.div><HeroImage /></section>
    <Section id="about" eyebrow="About" title="Thoughtful frontend work, shaped by design taste and engineering discipline."><div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]"><article className="premium-card p-8"><p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{portfolio.bio}</p><div className="mt-8 grid grid-cols-2 gap-3">{portfolio.stats.slice(0, 4).map(({ icon: Icon, ...stat }) => <div key={stat.label} className="rounded-2xl bg-slate-50 p-4 dark:bg-white/5"><Icon className="mb-3 h-5 w-5 text-teal-500" /><p className="font-semibold">{stat.value}</p><p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p></div>)}</div></article><div className="space-y-4">{portfolio.timeline.map((item) => <article key={item.title} className="timeline-card"><p className="text-sm font-medium text-teal-600 dark:text-teal-300">{item.label} · {item.period}</p><h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.title}</h3><p className="mt-1 text-slate-600 dark:text-slate-300">{item.meta}</p><p className="mt-4 leading-7 text-slate-500 dark:text-slate-400">{item.summary}</p></article>)}</div></div></Section>
    <Section id="services" eyebrow="Services" title="Useful, polished work without unnecessary complexity."><div className="grid gap-5 md:grid-cols-3">{portfolio.services.map(({ icon: Icon, ...service }) => <motion.article whileHover={{ y: -6 }} key={service.title} className="premium-card group p-7"><div className="mb-8 inline-flex rounded-2xl bg-slate-950 p-3 text-white transition group-hover:rotate-3 dark:bg-white dark:text-slate-950"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-semibold tracking-tight">{service.title}</h3><p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{service.description}</p></motion.article>)}</div></Section>
    <Section id="skills" eyebrow="Skills" title="A practical toolkit, organized for quick editing."><div className="mb-6 flex flex-wrap gap-2">{skillCategories.map((category) => <button key={category} onClick={() => setSkillFilter(category)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${skillFilter === category ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "border border-slate-200 text-slate-600 hover:border-slate-400 dark:border-white/10 dark:text-slate-300"}`}>{category}</button>)}</div><div className="grid gap-4 md:grid-cols-2">{filteredSkills.map((skill) => <motion.article layout key={skill.name} whileHover={{ y: -4 }} className="premium-card p-5"><div className="flex items-center justify-between gap-4"><h3 className="font-semibold">{skill.name}</h3><span className="text-sm text-slate-500">{skill.level}%</span></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10"><motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full rounded-full bg-slate-950 dark:bg-white" /></div></motion.article>)}</div></Section>
    <Section id="projects" eyebrow="Projects" title="Selected work, ready for real case studies.">{projects.length ? <div className="grid gap-6 lg:grid-cols-2">{projects.map((project) => <motion.article whileHover={{ y: -6 }} key={project.title} className="premium-card overflow-hidden"><div className="relative aspect-video bg-slate-100 dark:bg-white/5"><ProjectImage src={project.image} title={project.title} /></div><div className="p-6"><div className="flex items-start justify-between gap-4"><h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>{project.featured && <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">Featured</span>}</div><p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full border border-slate-200 px-3 py-1 text-xs dark:border-white/10">{tech}</span>)}</div><div className="mt-6 flex flex-wrap gap-3"><Link href={project.github} target="_blank" rel="noopener noreferrer" className="secondary-button"><GithubIcon className="h-4 w-4" />GitHub</Link><Link href={project.live} target="_blank" rel="noopener noreferrer" className="primary-button">Live Demo<ExternalLink className="h-4 w-4" /></Link></div></div></motion.article>)}</div> : <div className="premium-card border-dashed p-10 text-center"><CheckCircle2 className="mx-auto mb-4 h-9 w-9 text-teal-500" /><h3 className="text-xl font-semibold">No projects added yet</h3><p className="mt-3 text-slate-600 dark:text-slate-400">Add real projects in <code>data/portfolio.ts</code>. Each project supports title, description, image, GitHub, live link, technologies, and featured status.</p></div>}</Section>
    <Section id="experience" eyebrow="Experience" title="A focused journey with room for verified milestones."><div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:bg-slate-200 dark:before:bg-white/10">{portfolio.experience.map((item) => <article key={item.role} className="relative pl-12"><span className="absolute left-2 top-2 h-4 w-4 rounded-full border-4 border-white bg-slate-950 dark:border-slate-950 dark:bg-white" /><div className="premium-card p-7"><p className="text-sm font-medium text-teal-600 dark:text-teal-300">{item.period}</p><h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.role}</h3><p className="mt-1 text-slate-600 dark:text-slate-300">{item.company}</p><p className="mt-4 leading-7 text-slate-500 dark:text-slate-400">{item.description}</p></div></article>)}</div></Section>
    <Section id="contact" eyebrow="Contact" title="Have a project or role in mind? Let’s talk."><div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]"><div className="premium-card p-8"><h3 className="text-2xl font-semibold tracking-tight">Start with a simple message.</h3><p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">Email me directly at <Link className="font-medium text-teal-600 dark:text-teal-300" href={portfolio.socials.email}>{portfolio.email}</Link>. The form is intentionally frontend-only so it can be connected to your preferred service.</p><div className="mt-8"><SocialLinks /></div></div><form className="premium-card grid gap-4 p-8"><label className="sr-only" htmlFor="name">Your name</label><input id="name" className="field" placeholder="Your name" /><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" className="field" placeholder="Email address" /><label className="sr-only" htmlFor="message">Project details</label><textarea id="message" className="field min-h-36 resize-y" placeholder="Tell me about your project" /><button type="button" className="primary-button justify-center"><Send className="h-4 w-4" />Send Message</button></form></div></Section>
    <footer className="border-t border-slate-200 px-6 py-10 text-center text-sm text-slate-500 dark:border-white/10">© {new Date().getFullYear()} {portfolio.name}. Built with care using Next.js, TypeScript, Tailwind CSS, and Framer Motion.</footer><button onClick={() => scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 rounded-full bg-slate-950 p-4 text-white shadow-xl dark:bg-white dark:text-slate-950" aria-label="Back to top"><ArrowUpRight className="h-5 w-5 -rotate-45" /></button></main>;
}
