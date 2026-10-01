# Gunjan Gupta — Portfolio (v2)

React + Vite developer portfolio for SDE placements and freelance web work.

## Run locally

```bash
npm install
npm run dev
```

Open the `localhost` link it prints. Stop with `Ctrl+C`.

## Build for production

```bash
npm run build
```

## Edit your content

Nearly everything (text, links, projects, skills, services) lives in **`src/data/content.js`**.
Change it there — you shouldn't need to touch the components.

## Things to finish before you share the link

1. **Resume** — put your PDF in `public/` (e.g. `public/Gunjan-Gupta-Resume.pdf`), then in
   `content.js` set `resumeUrl: '/Gunjan-Gupta-Resume.pdf'`. Until then the button shows as disabled.
2. **Contact form** — works right away by opening the visitor's email app. For a smoother experience,
   create a free form at https://formspree.io and paste its URL into `formEndpoint`. After that you can
   set `contactEmail: ''` to keep your address out of the page source.
3. **Real screenshot (optional)** — save a screenshot to `public/rama-screenshot.png` and set
   `image: '/rama-screenshot.png'` in `featuredProject`. It replaces the illustrated preview.
4. **Case study** — the "Development process" steps summarize how the project fits together.
   Edit them so they match how you actually built it.
5. **Project links** — add the Employee Performance Prediction GitHub URL (`github`) and any live URL
   for the Weather app (`live`). The buttons appear automatically once filled in.

## Deploy (free) on Vercel

Push this folder to a GitHub repo, then import it at https://vercel.com/new. Framework: Vite.
Vercel gives you a public URL to share on LinkedIn.

## Structure

```
src/
├── data/content.js        all content
├── hooks/                 useReveal, useActiveSection, useSpotlight, useTheme
├── styles/                base.css (tokens, buttons, cards) + one file per section
└── components/
    ├── Navbar, Hero, About, Skills, Experience, Projects,
    │   Achievements, Services, WhyWorkWithMe, CodingProfiles, Contact, Footer
    └── projects/          FeaturedProject, ProjectCard, CaseStudyModal, previews
```
