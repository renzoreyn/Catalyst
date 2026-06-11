# Catalyst landing site

Next.js marketing site for [Catalyst](https://github.com/renzoreyn/catalyst).

## Stack

- Next.js 15 (App Router)
- Tailwind CSS + shadcn/ui components
- Framer Motion
- Lucide React

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

**Vercel (recommended):** import this folder, framework preset Next.js, deploy.

**Static export:** add `output: "export"` to `next.config.ts`, then `npm run build` and host the `out/` folder.

Point your domain DNS to the host. The landing page reads the latest version from [GitHub Releases](https://github.com/renzoreyn/catalyst/releases) (cached for one hour). Update `src/lib/site.ts` only if repo URLs change.
