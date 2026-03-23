# Ginna — private chef site

Vite + React + React Router (HashRouter for simple static hosting).

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build

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
