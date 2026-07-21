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

Home-page copy (capabilities, partners, industries, history) lives in
`components/LomarSupply.jsx`. The **product catalog is now in
`lib/products.js`** — one entry per product with a stable `slug`. Brand
colors are CSS variables (`--brand` #0a7a3c, `--lime` #7dc242) in
`app/globals.css` and inside the home component.

## Product pages

- `/products` — filterable catalog index (`app/products/page.jsx`)
- `/products/<slug>` — one landing page per product, generated automatically
  from `lib/products.js` (`app/products/[slug]/page.jsx`)

Home-page catalog cards and the index both link to these pages.

### Uploading a product image
Drop one image per product into **`public/products/`**, named after the
product's `slug` (see `public/products/README.txt` for the full list):

```
public/products/skimpak-skimmer.jpg
public/products/self-inflatable-oil-boom.jpg
```

`.jpg`, `.jpeg`, `.png` and `.webp` all work. Until an image exists, the page
shows a branded "image coming soon" placeholder — no broken images. Commit the
images and push; Vercel redeploys. Recommended size ~1200×900 (4:3).

### Adding or editing a product
Edit `lib/products.js`. Add an object with a unique `slug`, `cat` (one of the
`CATEGORIES` keys), `brand`, `name` and `desc`. Its page, the index entry, and
the home-page card all appear automatically.

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
