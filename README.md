# Zaman Arshad — Portfolio

Personal portfolio built with **Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, React Hook Form + Zod**.

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

## Update content (no layout code needed)

All content lives in `data/`:

| File | What it controls |
|---|---|
| `data/site.ts` | Name, tagline, contact links, about text, stats, domain |
| `data/experience.ts` | Work timeline |
| `data/projects.ts` | Projects, live links, stack, features, case-study content |
| `data/skills.ts` | Skill groups and the scrolling tech marquee |
| `data/education.ts` | Degree, scholarship, certificates |

### Add project screenshots
1. Put an image in `public/projects/` (16:10 ratio, e.g. 1600×1000, `.png`/`.webp`).
2. Set `cover: "/projects/foodmamba.png"` on the project in `data/projects.ts`.
Projects without a `cover` show an auto-generated branded mockup.

### Add a "Challenges & solutions" section to a case study
Add to any project:
```ts
challenges: [{ problem: "Large invoice tables were slow", solution: "Virtualized rows and cached queries with TanStack Query..." }],
```

### Resume download
Put your CV at `public/resume.pdf`.

## Contact form email
The form posts to `/api/contact`, which sends via [Resend](https://resend.com).
Add these environment variables (locally in `.env.local`, or in Vercel → Settings → Environment Variables):

```
RESEND_API_KEY=re_xxx
CONTACT_TO=zamanarshad5050@gmail.com        # optional, defaults to site email
CONTACT_FROM=Portfolio <hello@yourdomain.com> # optional, needs a verified domain in Resend
```
Without a key, the form opens the visitor's email app with the message pre-filled.

## Deploy
1. Push this folder to a GitHub repo.
2. Import it on [vercel.com/new](https://vercel.com/new) → Deploy.
3. Update `url` in `data/site.ts` to your final domain.
