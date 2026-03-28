# Axon Landing Site

The marketing and documentation website for [Axon](https://github.com/brandonkorous/axon) — an open-source, self-hosted AI command center.

**Live at [useaxon.dev](https://useaxon.dev)**

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [Tailwind CSS](https://tailwindcss.com) v4
- [DaisyUI](https://daisyui.com) v5
- [MDX](https://mdxjs.com) for blog content via `next-mdx-remote`

## Features

Axon is a self-hosted AI command center that coordinates specialist advisors around your work and life. Here's what the platform offers:

### Intelligence

- **Specialist Advisors** — A team of domain experts (not one generic chatbot) with distinct personas, vaults, and voices. Pre-built org templates for Startup, Student, Job Hunt, Family, and Creator teams.
- **The Huddle** — Group discussions with multiple AI specialists. Six modes: standard, vote, devil's advocate, pressure test, quick take, and decision. @mention targeting and real-time multi-agent streaming.
- **Structured Reasoning** — Graph-based reasoning engine with multi-strategy evaluation (debate, synthesis, expert consensus), confidence scoring, contradiction detection, and full decision traceability.
- **Task Delegation** — Advisors delegate work to each other autonomously (sync or async) across research, audit, implementation, and investigation tasks.

### Memory

- **Neural Memory Trees** — Obsidian-compatible markdown vaults with YAML frontmatter, wikilinks, full-text search, and graph-based relationship tracking. Per-agent isolated vaults with shared knowledge mounts.
- **Memory Consolidation** — LLM-driven vault maintenance: duplicate merging, stale entry archiving, contradiction detection, orphan adoption, and confidence-based lifecycle management.
- **Intelligent Recall** — Context-aware retrieval that surfaces relevant vault entries during conversations. Outcome linking lets advisors learn from experience.

### Interaction

- **Voice-First Interface** — Whisper STT, Piper/ElevenLabs/Azure TTS, per-advisor voices with curated catalog, adjustable speed control, and continuous voice mode.
- **Platform Integrations** — Slack (Socket Mode), Microsoft Teams (Bot Framework), Zoom (meeting participation + transcription), Discord (server deployment). All running on your infrastructure.
- **Command Center Dashboard** — Unified view of active agents, tasks (kanban), issues, approvals, vault health, and per-agent cost tracking.

### Autonomy

- **Autonomous Runners** — Agent-spawned worker processes via Claude CLI with Docker sandbox support, lifecycle management, and real-time monitoring.
- **Proactive Scheduling** — Background heartbeat for inbox checks, task execution, and knowledge review at configurable intervals with approval routing.
- **Deep Research** — Two-tier LLM strategy (local compression + reasoning analysis), web scraping, YouTube transcript extraction, and multi-source synthesis.

### Infrastructure

- **Fully Self-Hosted** — SQLite/PostgreSQL, AES credential encryption, Docker deployment, Ollama for local inference. Zero external dependencies possible.
- **Full Audit Trail** — Append-only, immutable audit logs with filterable history by date, agent, action, or tool.
- **Plugins & Skills** — Extensible architecture with 10 built-in skills (brainstorming, code review, debugging, decision analysis, etc.), plugin registry, and UI-based creation.

### Work Management

- **Tasks** — Priority levels (P0-P3), assignee, due dates, full status workflow (pending → executing → done).
- **Issues** — Bug reports, improvement requests, threaded comments, resolution tracking.
- **Approvals** — Decision routing via Slack/Teams/Discord with reaction-based approve/deny.
- **Achievements** — Milestone recording with impact statements, contributors, and timeline view.

## Development

```bash
npm install
npm run dev
```

The dev server runs on [localhost:3000](http://localhost:3000) by default.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, features overview, integrations, showcase, community, docs, blog preview |
| `/features` | Comprehensive feature breakdown with all capabilities |
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
