# nutriwithrohan.com

Personal site for **NutriwithRohan** — nutrition consulting practice.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).
Hosted free on [Cloudflare Pages](https://pages.cloudflare.com).
Bookings via [Calendly](https://calendly.com), contact form via [Formspree](https://formspree.io).

## Editing the site

Three options, in order of "easiest":

1. **GitHub web editor** — go to the repo on github.com, click any `.md` or `.astro` file, hit the pencil icon, edit, click Commit. The site rebuilds automatically (~30 seconds).
2. **GitHub Codespaces** — click `Code → Codespaces → Create codespace on main`. Full VS Code in the browser. 60 free hours/month.
3. **Local development** — clone, then:
   ```bash
   npm install
   npm run dev
   ```
   Open `http://localhost:4321`.

## Where things live

| What | Where |
|---|---|
| Home page sections | `src/components/{hero,features,testimonial,cta}.astro` |
| Pricing programmes | `src/pages/pricing.astro` (edit the `programmes` array) |
| Philosophy text | `src/pages/philosophy.astro` |
| Booking embed | `src/pages/book.astro` (update `calendlyUrl`) |
| Contact form | `src/components/contactform.astro` (update `formspreeId`) |
| Blog/Resources posts | `src/content/blog/*.md` |
| Branding (logo, fonts, colors) | `src/styles/global.css` + `src/layouts/Layout.astro` |
| Site URL & SEO defaults | `astro.config.mjs` + `src/layouts/Layout.astro` |

## Things to fill in after first deploy

These are placeholders right now:

- **Calendly URL** in `src/pages/book.astro` — replace `https://calendly.com/rohanc922` with your specific event URL once you've created an event type in Calendly.
- **Formspree ID** in `src/components/contactform.astro` — replace `YOUR_FORMSPREE_ID` with the form ID Formspree gives you.
- **OpenGraph image** at `public/opengraph.jpg` — used when the site is shared on social. Recommended: 1200×630 image of food / wellness imagery.
- **Hero illustration** — the home page currently uses a typographic card; you can replace it with a real photo by editing `src/components/hero.astro`.

## Deployment

This repo is connected to Cloudflare Pages. Any push to `main` triggers a
production build at `nutriwithrohan.com`. Pull requests get a preview URL
automatically.

Build command: `npm run build` · Output dir: `dist`
