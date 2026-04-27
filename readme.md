## Ishanvi Upare's Personal Website 🌸
A close-up of who I am and what I do.
A responsive personal website built with Next.js and React, featuring a Markdown-fed blog and custom UI details.

**🔗 Live Site:** [ishanvis-personal-website.vercel.app](https://ishanvis-personal-website.vercel.app)

---

## Highlights
- 🗂️ **Markdown-fed Projects Blog** — each project page is its own `.md` file with frontmatter metadata
- 🔀 **Dynamic Routing** — project pages are generated automatically from markdown files
- 📱 **Responsiveness** — adapts across multiple sizes with Tailwind breakpoints
- 🌗 **Conditional Rendering** — navbar and page colors shift between routes
- ✨ **Polished UI** — hover animations, custom scrollbar, themed code blocks

---

## 🎬 Demo
 
![Demo Video](/demo.mp4)
 
---
 
## 📋 Table of Contents
 
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Pages](#pages)
- [How It Was Made](#how-it-was-made)
- [Bugs Fixed](#bugs-fixed)
- [Deployment](#deployment)
- [Next Steps](#next-steps)
  
---

## Overview
 
During my second semester at UIC, I joined the **[WiCS@UIC](https://github.com/wics-uic) Web Development Team**, where we spent the semester building our own personal websites. 

As a freshman tackling my first real project, I used this as an opportunity to learn **Next.js**, **React**, **HTML** and **Tailwind CSS** from the ground up. I also set up a **WSL Ubuntu** environment this semester, which gave me hands-on experience with Unix commands and managing a development workflow from the terminal. I additionally gained familiarity with tools like **Git**, and **Figma**.

Each weekly meeting introduced a new concept — navbar components, animations, responsiveness, blog structure — which I then applied to my own site after doing further research.
 
The result is a four-page personal portfolio with a home page, about page, projects blog, and contact page — all deployed live on Vercel.



## Tech Stack
 
| Tool | Purpose |
|---|---|
| Figma | Design |
| Next.js (App Router) | Framework & file-based routing |
| React | UI components |
| Tailwind CSS v4 | Styling & responsive design |
| `gray-matter` | Markdown frontmatter parsing |
| `ReactMarkdown` | Rendering `.md` files as HTML |
| `tailwindcss-typography`| Formatting Markdown content |
| `rehype-raw` | Enabling HTML inside markdown |
| `rehype-highlight` + Highlight.js | Syntax-highlighted code blocks |
| Vercel | Deployment |

---

## Pages
 
### 🏠 [Home](https://ishanvis-personal-website.vercel.app)
A cover-page style landing screen. The sidebar navbar changes color on the home page versus all other pages using conditional rendering.
 
### 👤 [About](https://ishanvis-personal-website.vercel.app/about)
A photo and short bio. Fully responsive using Tailwind flex and breakpoints — the layout shifts from a stacked column on mobile to a side-by-side row on desktop. Includes a custom scrollbar that only appears on hover.
 
### 📁 [Projects](https://ishanvis-personal-website.vercel.app/Projects)
The centerpiece of the site, highlighting my projects. Each project is displayed as a polaroid-style card, complete with animations as if you are filtering through each photo. When you click on a card, it dynamically routes to a blog page based on separately written `.md` files.
 
### 📬 [Contact](https://ishanvis-personal-website.vercel.app/contact)
Icon links to LinkedIn, GitHub, and email, each wrapped in anchor tags that open in a new tab.

---

## How It Was Made

My full development process, including code segments, is detailed in my [blog](https://ishanvis-personal-website.vercel.app/blog/personalwebsite).
 
**Design first.** Before writing any code, I designed the full site layout in Figma, drawing inspiration from an art book (*Monet* by Christoph Heinrich) and my color palette.
 
**File-based routing.** Next.js's App Router turns folder structure directly into URL routes — adding a `/about/page.tsx` file automatically creates `website.com/about`.
 
**Markdown blog system.** I store project write-ups as `.md` files in a `/posts` directory. Using `gray-matter`, each file's frontmatter is parsed into metadata (title, dates, cover image). `generateStaticParams()` reads all filenames to pre-generate every project page. `ReactMarkdown` renders the body content as formatted HTML.
 
**Formatting markdown.** I used the `@tailwindcss/typography` plugin (added directly in `globals.css` with Tailwind v4) and the `prose` utility class to style all rendered markdown elements. For code blocks, I added `rehype-highlight` with the `atom-one-dark` theme.
 
**Time elapsed helper.** To display how long I worked on each project, I wrote a `formatTime()` utility that calculates the difference between `start` and `end` frontmatter dates and returns strings like `"For 2mos"` or `"For 1yr 3mos (ongoing)"`.
 
---

## Bugs Fixed
 
**Scroll hijacking on embedded iframes.** When embedding external sites via `<iframe>`, scrolling inside the embed would bubble up and scroll the parent page. I fixed this by creating a `ResponsiveIFrame` component that sets `document.body.style.overflow = 'hidden'` on pointer enter and restores it on pointer leave — but only for non-YouTube embeds, since disabling scroll on video hover felt unnatural.
 
---
 
## Deployment
 
The site is deployed on **Vercel**, connected directly to this GitHub repository. Every push to `main` triggers an automatic redeploy — no manual steps needed.

---

## Next Steps
Next, I'd like to implement a new Next.js app to act as my _full_ portfolio. This would include not only my programming projects, but also video, drawing, musical, and writing projects. I'd like to especially make use of concepts I learned like conditional rendering and dynamic routing to help stylize my website differently based on the interest being displayed.
