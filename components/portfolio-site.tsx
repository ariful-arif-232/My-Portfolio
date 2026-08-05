"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Download, ExternalLink, Mail, Menu, Moon, Send, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

const sectionIds = portfolio.nav.map((item) => item.toLowerCase());

type SocialIconProps = {
  className?: string;
};

function GithubIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .28.18.6.69.5A10.12 10.12 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M6.94 8.98H3.75V20h3.19V8.98ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm6.7 4.98H9V20h3.18v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h3.18v-6.04c0-2.96-.64-5.24-4.1-5.24-1.66 0-2.77.91-3.23 1.78h-.04l.04-1.52Z" />
    </svg>
  );
}

function FacebookIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2V8.6H15.2c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22A10.04 10.04 0 0 0 22 12.06Z" />
    </svg>
  );
}


function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="section mx-auto max-w-7xl px-6 py-20 lg:px-8"><motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.25}} transition={{duration:.6}}><p className="mb-3 text-sm font-semibold uppercase tracking-[.3em] text-teal-500">{eyebrow}</p><h2 className="mb-10 text-4xl font-bold tracking-tight sm:text-5xl"><span className="gradient-text">{title}</span></h2>{children}</motion.div></section>;
}

function Header() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const onScroll = () => {
      const current = sectionIds.findLast((id) => {
        const section = document.getElementById(id);
        return section ? section.getBoundingClientRect().top <= 120 : false;
      });
      setActive(current ?? "home");
    };
    onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className="fixed inset-x-0 top-4 z-50 mx-auto max-w-7xl px-4"><nav className="glass rounded-3xl px-4 py-3 shadow-2xl shadow-slate-900/5"><div className="flex items-center justify-between"><Link href="#home" className="text-lg font-black tracking-tight">Ariful<span className="text-teal-500">.</span></Link><div className="hidden gap-1 lg:flex">{portfolio.nav.map((item)=>{const id=item.toLowerCase();return <Link key={id} href={`#${id}`} className={`rounded-full px-4 py-2 text-sm font-medium transition ${active===id?"bg-slate-950 text-white dark:bg-white dark:text-slate-950":"text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"}`}>{item}</Link>})}</div><div className="flex items-center gap-2"><button aria-label="Toggle theme" onClick={()=>setTheme(theme==="dark"?"light":"dark")} className="rounded-full border border-slate-200 p-2 dark:border-slate-700"> <Sun className="h-4 w-4 dark:hidden"/><Moon className="hidden h-4 w-4 dark:block"/></button><button aria-label="Open menu" onClick={()=>setOpen(!open)} className="rounded-full border border-slate-200 p-2 lg:hidden dark:border-slate-700">{open?<X/>:<Menu/>}</button></div></div>{open&&<div className="mt-3 grid gap-1 lg:hidden">{portfolio.nav.map((item)=><Link onClick={()=>setOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="rounded-2xl px-4 py-3 text-sm font-medium hover:bg-slate-100 dark:hover:bg-white/10">{item}</Link>)}</div>}</nav></header>;
}

export default function PortfolioSite() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(()=>setLoaded(true), 750); return () => clearTimeout(t); }, []);
  if (!loaded) return <div className="grid min-h-screen place-items-center bg-slate-950 text-white"><motion.div animate={{scale:[1,.9,1], opacity:[.7,1,.7]}} transition={{repeat:Infinity,duration:1.4}} className="text-3xl font-black gradient-text">Ariful.</motion.div></div>;
  return <main className="relative overflow-hidden"><motion.div style={{scaleX}} className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500"/><Header/><div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,.20),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,.18),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(236,72,153,.15),transparent_35%)]"/>
    <section id="home" className="section mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pt-32 lg:grid-cols-[1.1fr_.9fr] lg:px-8"><motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}><p className="mb-5 inline-flex rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-semibold text-teal-600 dark:text-teal-300">Available for modern web and design work</p><h1 className="text-5xl font-black tracking-tight sm:text-7xl">Hi, I&apos;m <span className="gradient-text">{portfolio.name}</span></h1><p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600 dark:text-slate-300">{portfolio.bio}</p><div className="mt-8 flex flex-wrap gap-4"><Link href={portfolio.resumeUrl} className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-1 dark:bg-white dark:text-slate-950"><Download className="mr-2 inline h-4 w-4"/>Download CV</Link><Link href="#contact" className="rounded-full border border-slate-300 px-6 py-3 font-semibold transition hover:-translate-y-1 dark:border-slate-700">Let&apos;s Talk</Link></div><div className="mt-8 flex gap-3">{[
        { Icon: GithubIcon, href: portfolio.socials.github, label: "GitHub profile" },
        { Icon: LinkedinIcon, href: portfolio.socials.linkedin, label: "LinkedIn profile" },
        { Icon: FacebookIcon, href: portfolio.socials.facebook, label: "Facebook profile" },
        { Icon: Mail, href: portfolio.socials.email, label: "Email Ariful" },
      ].map(({ Icon, href, label })=><Link key={label} href={href} aria-label={label} className="rounded-full border border-slate-200 p-3 transition hover:-translate-y-1 hover:text-teal-500 dark:border-slate-700"><Icon className="h-5 w-5"/></Link>)}</div></motion.div><motion.div initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}} className="relative mx-auto aspect-square w-full max-w-md"><div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-teal-400 via-indigo-500 to-pink-500 blur-2xl opacity-40"/><Image priority src={portfolio.profile.image} alt={portfolio.profile.alt} fill className="relative rounded-[3rem] object-cover shadow-2xl"/></motion.div></section>
    <Section id="about" eyebrow="About me" title="A developer with a designer's eye."><div className="grid gap-6 lg:grid-cols-4"><div className="glass rounded-3xl p-8 lg:col-span-2"><p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{portfolio.bio}</p></div>{portfolio.stats.map(({icon:Icon,...stat})=><div key={stat.label} className="glass rounded-3xl p-6"><Icon className="mb-5 h-8 w-8 text-teal-500"/><p className="text-3xl font-black">{stat.value}</p><p className="mt-2 text-slate-500 dark:text-slate-400">{stat.label}</p></div>)}</div></Section>
    <Section id="education" eyebrow="Education" title="Academic foundation.">{portfolio.education.map((item)=><article key={item.degree} className="glass rounded-3xl p-8"><p className="text-sm font-semibold text-teal-500">{item.period}</p><h3 className="mt-2 text-2xl font-bold">{item.degree}</h3><p className="mt-1 text-lg text-slate-600 dark:text-slate-300">{item.school}</p><p className="mt-4 text-slate-500 dark:text-slate-400">{item.summary}</p></article>)}</Section>
    <Section id="services" eyebrow="Services" title="What I can do."><div className="grid gap-6 md:grid-cols-3">{portfolio.services.map(({icon:Icon,...s})=><article key={s.title} className="glass rounded-3xl p-8 transition hover:-translate-y-2"><Icon className="mb-6 h-10 w-10 text-teal-500"/><h3 className="text-2xl font-bold">{s.title}</h3><p className="mt-4 text-slate-600 dark:text-slate-300">{s.description}</p></article>)}</div></Section>
    <Section id="skills" eyebrow="Skills" title="Ready for your skill list."><Placeholder text="Add skills in data/portfolio.ts and they will appear here." /></Section>
    <Section id="projects" eyebrow="Projects" title="A curated showcase is coming."><Placeholder text="Add projects in data/portfolio.ts with links, descriptions, and tags." /></Section>
    <Section id="experience" eyebrow="Experience" title="Professional journey."><div className="space-y-5">{portfolio.experience.map((e)=><article key={e.role} className="glass rounded-3xl p-8"><p className="text-sm font-semibold text-teal-500">{e.period}</p><h3 className="mt-2 text-2xl font-bold">{e.role}</h3><p className="text-slate-600 dark:text-slate-300">{e.company}</p><p className="mt-4 text-slate-500 dark:text-slate-400">{e.description}</p></article>)}</div></Section>
    <Section id="contact" eyebrow="Contact" title="Let's build something polished."><div className="grid gap-8 lg:grid-cols-2"><div className="glass rounded-3xl p-8"><h3 className="text-2xl font-bold">Start a conversation</h3><p className="mt-4 text-slate-600 dark:text-slate-300">Email me directly at <Link className="text-teal-500" href={portfolio.socials.email}>{portfolio.email}</Link> or use this contact form UI as a ready integration point.</p></div><form className="glass grid gap-4 rounded-3xl p-8"><input className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 outline-none focus:border-teal-400 dark:border-slate-700 dark:bg-slate-900/60" placeholder="Your name"/><input className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 outline-none focus:border-teal-400 dark:border-slate-700 dark:bg-slate-900/60" placeholder="Email address"/><textarea className="min-h-32 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 outline-none focus:border-teal-400 dark:border-slate-700 dark:bg-slate-900/60" placeholder="Tell me about your project"/><button type="button" className="rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 px-6 py-3 font-bold text-white"><Send className="mr-2 inline h-4 w-4"/>Send Message</button></form></div></Section>
    <footer className="border-t border-slate-200 px-6 py-10 text-center text-slate-500 dark:border-slate-800">© {new Date().getFullYear()} {portfolio.name}. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</footer><button onClick={()=>scrollTo({top:0,behavior:"smooth"})} className="fixed bottom-6 right-6 rounded-full bg-slate-950 p-4 text-white shadow-2xl dark:bg-white dark:text-slate-950" aria-label="Back to top"><ArrowUp className="h-5 w-5"/></button></main>;
}
function Placeholder({ text }: { text: string }) { return <div className="glass rounded-3xl border-dashed p-10 text-center"><ExternalLink className="mx-auto mb-4 h-10 w-10 text-teal-500"/><p className="text-lg text-slate-600 dark:text-slate-300">{text}</p></div>; }
