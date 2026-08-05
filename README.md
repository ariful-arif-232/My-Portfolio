# Md. Ariful Islam — Premium Portfolio

A modern personal portfolio website for **Md. Ariful Islam**, built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It includes responsive sections for hero, about, education, services, skills, projects, experience, contact, and footer.

## Features

- Premium responsive UI for mobile, tablet, and desktop
- Dark/light mode with system preference support
- Smooth scroll and reveal animations powered by Framer Motion
- SEO-friendly metadata in the Next.js app router
- Active navigation, loading animation, and back-to-top button
- Contact form UI ready for backend/service integration
- Download CV button with a replaceable placeholder file
- Social icons for GitHub, LinkedIn, Facebook, and Email
- Centralized personal data configuration

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- next-themes
- lucide-react

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Updating Personal Information

All editable portfolio data lives in:

```text
data/portfolio.ts
```

Update this file to change:

- Name, title, bio, location, email
- Education
- Services
- Experience
- Social links
- Skills placeholders
- Projects placeholders
- Resume link
- Profile image path

## Updating Skills and Projects

Add skills and projects directly in `data/portfolio.ts`:

```ts
skills: [
  { name: "React", level: 90, category: "Frontend" },
]
```

```ts
projects: [
  {
    title: "Project Name",
    description: "Short project summary.",
    href: "https://example.com",
    tags: ["Next.js", "Tailwind CSS"],
  },
]
```

## Replacing Profile Photo

The current placeholder image is:

```text
public/assets/profile-placeholder.svg
```

To replace it, either:

1. Upload your own image with the same filename, or
2. Add a new image to `public/assets` and update `profile.image` in `data/portfolio.ts`.

Example:

```ts
profile: {
  image: "/assets/my-photo.jpg",
  alt: "Portrait of Md. Ariful Islam",
}
```

## Replacing Resume/CV

The placeholder resume is:

```text
public/assets/resume-placeholder.pdf
```

Replace it with your actual CV PDF using the same filename, or update `resumeUrl` in `data/portfolio.ts`.

## Project Structure

```text
app/                  Next.js app router pages and global styles
components/           Reusable React components
data/portfolio.ts     Single source of truth for personal content
public/assets/        Replaceable profile image and resume assets
```

## Deployment

This project is ready for deployment to platforms such as Vercel, Netlify, or any Node.js hosting provider that supports Next.js.
