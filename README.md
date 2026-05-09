# LaraClaw Docs

Documentation site for LaraClaw, built with [Nuxt](https://nuxt.com) and the
[Docus](https://docus.dev) theme.

## Setup

Install dependencies:

```bash
pnpm install
```

## Development

Start the dev server on http://localhost:3000:

```bash
pnpm dev
```

## Production

Build the static documentation site:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Editing content

All documentation pages live in [`content/`](./content). Files are written in
Markdown (with [MDC](https://content.nuxt.com/docs/files/markdown) extensions
provided by Nuxt Content), and the navigation order is driven by the numeric
prefix of each file or folder (e.g. `1.introduction.md`, `4.connectors/`).

Site-wide branding (title, colors, footer, GitHub link) is configured in
[`app/app.config.ts`](./app/app.config.ts).
