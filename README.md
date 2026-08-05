# Md. Ariful Islam — Developer Portfolio

A premium, modern portfolio for **Md. Ariful Islam** built with **Next.js 15**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**. The design focuses on clean whitespace, strong typography, subtle motion, responsive layouts, accessible controls, and centralized editable content.

## Features

- Split hero section with profile image fallback, availability badge, CTAs, and social links
- Professional about section with timeline cards for education and current learning
- Filterable skills with premium progress indicators
- Project cards with thumbnails, technology badges, GitHub links, live demo links, and featured sorting
- Experience timeline, services cards, modern contact card, and minimal footer
- SEO metadata, OpenGraph/Twitter cards, and structured `Person` JSON-LD
- Lazy-loaded project images and optimized Next.js image handling
- Dark/light theme support

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Useful commands:

```bash
npm run lint
npm run build
```

## Edit Portfolio Content

All editable site content lives in:

```text
data/portfolio.ts
```

Use this file to update your name, title, bio, intro, location, email, availability, services, timeline, skills, projects, experience, and social links.

## Replace the Profile Photo

The site automatically tries to load:

```text
public/assets/profile.jpg
```

To add your real profile photo:

1. Add your image to `public/assets/`.
2. Name it `profile.jpg`.
3. Keep this value in `data/portfolio.ts`:

```ts
profile: {
  image: "/assets/profile.jpg",
  fallback: "/assets/profile-placeholder.svg",
  alt: "Portrait of Md. Ariful Islam",
}
```

If `profile.jpg` is missing or fails to load, the portfolio displays `public/assets/profile-placeholder.svg` automatically.

## Upload the CV / Resume

The CV button points to:

```text
public/assets/md-ariful-islam-cv.pdf
```

To upload your resume:

1. Add your PDF to `public/assets/`.
2. Name it `md-ariful-islam-cv.pdf`.
3. Or update `resumeUrl` in `data/portfolio.ts` if you prefer a different filename.

```ts
resumeUrl: "/assets/md-ariful-islam-cv.pdf"
```

## Add Projects

Projects are stored in `data/portfolio.ts` and support these fields:

```ts
projects: [
  {
    title: "Project Name",
    description: "A short, honest summary of the project.",
    image: "/assets/project-name.jpg",
    github: "https://github.com/your-username/project-name",
    live: "https://project-name.example.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
]
```

Notes:

- Set `featured: true` to move a project toward the top.
- Store thumbnails in `public/assets/` and reference them with `/assets/file-name.jpg`.
- Do not add placeholder companies or fake projects; leave the array empty until real work is ready.

## Add Skills

Skills are also stored in `data/portfolio.ts`:

```ts
skills: [
  { name: "React", level: 80, category: "Frontend" },
  { name: "Figma", level: 75, category: "Tools" },
]
```

The UI creates category filters automatically from the `category` values.

## Change Social Links

Update the `socials` object in `data/portfolio.ts`:

```ts
socials: {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  facebook: "https://facebook.com/your-username",
  email: "mailto:arifwahid2020@gmail.com",
}
```

## Project Structure

```text
app/                  Next.js app router files and global styles
components/           Portfolio UI components and theme provider
data/portfolio.ts     Single source of truth for portfolio content
public/assets/        Profile photo, CV, thumbnails, and static assets
```

## Deployment

Deploy to Vercel, Netlify, or any platform that supports Next.js. For accurate canonical metadata, set:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```
