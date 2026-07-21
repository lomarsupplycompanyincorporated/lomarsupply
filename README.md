# Lomar Supply Co., Inc. — Website

Single-page marketing site for Lomar Supply (environmental spill-response supply house).
Built with **React + Vite**. No backend required — deploys as a static site.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs static site to /dist
npm run preview  # preview the production build locally
```

## Deploy to Vercel

Vercel auto-detects Vite. Framework preset: **Vite** · Build command: `npm run build` · Output dir: `dist`.

### Option A — GitHub (recommended)
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → **Add New… → Project** → import the repo.
3. Leave the detected settings as-is → **Deploy**.
4. Every future `git push` redeploys automatically.

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel          # first run: link/create the project, then it deploys a preview
vercel --prod   # promote to production
```

### Option C — Drag & drop
On the Vercel dashboard choose import, upload this project folder, keep the
detected Vite settings, and Deploy.

## Custom domain
In the Vercel project: **Settings → Domains → Add** `lomarsupply.com` (and `www`),
then point your DNS as Vercel instructs (A / CNAME records).

## Editing content
All copy and the product catalog live in `src/LomarSupply.jsx` in plain data
arrays near the top (`CAPABILITIES`, `PRODUCTS`, `PARTNERS`, `INDUSTRIES`,
`TIMELINE`). Brand colors are the CSS variables in the `CSS` string
(`--brand` #0a7a3c, `--lime` #7dc242).
