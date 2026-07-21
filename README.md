# Lomar Supply Co., Inc. — Website

Marketing site for Lomar Supply (environmental spill-response supply house).
Built with **Next.js (App Router) + React**. Deploys on Vercel with zero config.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # run the production build locally
```

## Project structure

```
app/
  layout.jsx      # <html>/<body>, page title + SEO metadata
  page.jsx        # renders the site component
  globals.css     # small CSS reset
components/
  LomarSupply.jsx # the entire site (starts with "use client")
```

All copy and the product catalog are plain data arrays near the top of
`components/LomarSupply.jsx` (`CAPABILITIES`, `PRODUCTS`, `PARTNERS`,
`INDUSTRIES`, `TIMELINE`). Brand colors are the CSS variables in the `CSS`
string (`--brand` #0a7a3c, `--lime` #7dc242).

## Deploy to Vercel

Vercel auto-detects Next.js — no `vercel.json` needed.

### Updating your existing repo
Your repo currently holds the earlier version. Replace its contents with this
folder (keep the same repo), commit, and push:

```bash
git add -A
git commit -m "Switch site to Next.js"
git push
```

Vercel redeploys automatically. Make sure the project's **Framework Preset**
is **Next.js** (Settings → Build and Deployment). If you previously added a
`vercel.json` forcing Vite, delete it.

### First-time setup
1. Push this folder to a GitHub repo.
2. vercel.com → **Add New… → Project** → import the repo → **Deploy**.

### Vercel CLI
```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## Custom domain
Vercel project → **Settings → Domains → Add** `lomarsupply.com` and `www`,
then point DNS as Vercel instructs.
