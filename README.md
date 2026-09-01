# Ginna — private chef site

Vite + React + React Router (HashRouter for simple static hosting).

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build

## Cloudflare Pages (GitHub)

1. Push this repo to GitHub if it is not already there.
2. In Cloudflare: **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → choose the repository.
3. **Build settings**
   - **Framework preset:** Vite (or **None** with **Build command** `npm run build` and **Build output directory** `dist`).
   - **Root directory:** `/` (repository root).
4. Under **Environment variables** (production + preview), add **`NODE_VERSION`** = **`20`** so the build uses a current Node runtime (matches `.nvmrc`).
5. Save and deploy. Production tracks your default branch; other branches and PRs get preview URLs.

`wrangler.jsonc` documents the Pages output directory for Wrangler and keeps local commands consistent:

```bash
npx wrangler whoami
npx wrangler pages deploy ./dist --project-name=gina-chef
```

Use the dashboard Git connection for ongoing deploys; the command above is optional for manual uploads.

## Project structure

```
src/
  App.jsx                 # Routes + router shell
  main.jsx                # React entry (StrictMode)
  styles.css              # Global styles
  data/
    assets.js             # Image URLs + placeholder SVG
    content.js            # Copy blocks, nav links, menus, testimonials
  components/
    layout/
      PageShell.jsx       # Nav + main + footer wrapper
      NavBar.jsx
      Footer.jsx
      ScrollToTop.jsx
    ui/
      Hero.jsx
      PrimaryButton.jsx
      SecondaryButton.jsx
      SectionHeading.jsx
      Field.jsx
  pages/
    HomePage.jsx
    AboutPage.jsx
    MenusPage.jsx
    ContactPage.jsx
```

## Notes

- Swap `HashRouter` for `BrowserRouter` in `App.jsx` if you add server rewrites for SPA routes.
- Wire the contact form to your backend or FormSubmit when ready.
