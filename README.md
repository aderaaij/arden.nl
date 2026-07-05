# arden.nl

Source for [arden.nl](https://arden.nl) — personal site and writing.

## Stack

- [Astro 7](https://astro.build) with React 19 islands for the interactive bits (glitch wordmark, theme toggle)
- MDX for posts, [motion](https://motion.dev) for animation
- Self-hosted fonts via Fontsource: Inter, Space Grotesk, IBM Plex Mono
- Deployed on Cloudflare Pages via the git integration — every push to `main` ships

## Content

Two content collections (`src/content.config.ts`):

- **`writing/`** — current posts, served at `/writing/[slug]`. Posts with `draft: true` appear in the writing index as unlinked rows and never get a route.
- **`archive/`** — pre-redesign posts, kept alive at their original `/posts/[slug]` URLs.

Slug renames get a 301 in `public/_redirects` so old links keep working.

Markdown code blocks are intentionally unhighlighted — the prose styles render them as plain panels.

## Analytics

Self-hosted [Umami](https://umami.is) — cookie-less, no personal data collected, so no consent banner. The tracking script is only injected in production builds.

## Development

Requires Node ≥ 22.12.

```sh
npm install
npm run dev      # dev server at localhost:4321
npm run build    # production build to ./dist/
npm run preview  # preview the production build
```
