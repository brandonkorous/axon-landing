# Axon Landing Site

The marketing and documentation website for [Axon](https://github.com/brandonkorous/axon) — an open-source, self-hosted AI command center.

**Live at [useaxon.dev](https://useaxon.dev)**

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [Tailwind CSS](https://tailwindcss.com) v4
- [DaisyUI](https://daisyui.com) v5
- [MDX](https://mdxjs.com) for blog content via `next-mdx-remote`

## Development

```bash
npm install
npm run dev
```

The dev server runs on [localhost:3000](http://localhost:3000) by default.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, features, community stats, docs, blog preview |
| `/docs` | Getting started guide with installation, configuration, and architecture |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog posts (MDX) |
| `/about` | Mission, differentiators, open-source philosophy |
| `/changelog` | Release history |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Blog Content

Blog posts live in `src/content/blog/` as `.mdx` files with frontmatter:

```yaml
---
title: "Post Title"
date: "2026-01-15"
excerpt: "Short description."
author: "Axon Team"
tags: ["tag1", "tag2"]
color: "primary" # primary | secondary | accent | neutral
---
```

## License

AGPL-3.0 — see [LICENSE](https://github.com/brandonkorous/axon/blob/main/LICENSE).
