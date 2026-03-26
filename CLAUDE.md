@AGENTS.md

## Design Context

> **This is the origin site for the Axon theme.** The `/axon` app inherits its design language from here. Changes to the palette, typography, or tokens should originate in this repo and be mirrored to `/axon`.

### Users
Mixed audience — technical founders self-hosting AI tools alongside non-technical team members managing AI workflows. Both need the interface to feel capable and trustworthy without being intimidating. Context is focused, high-stakes decision-making through AI advisors.

### Brand Personality
**Warm, Intelligent, Grounded.** Axon should feel like a thoughtful, capable companion — not a cold tool or a flashy toy. It projects quiet confidence and approachable authority.

### Aesthetic Direction
- **Visual tone:** Clean, warm, organic. Professional sophistication with human warmth — the antithesis of generic SaaS.
- **Anti-references:** Cookie-cutter startup landing pages (blue gradients, stock photos, generic hero sections). Matrix/hacker aesthetic (neon-on-black, terminal-heavy). Anything that screams "AI startup template."
- **References:** Linear's polish and information clarity. Notion's warmth and approachability. Stripe's typographic confidence.
- **Theme:** Light mode default (`axon` theme). Warm neutral backgrounds (cream/tan OKLCH), muted teal primary, terracotta secondary, olive accent. All tokens in `globals.css`.
- **Dark mode:** Must stay in the warm family — adapt teal/terracotta for dark surfaces rather than switching to unrelated palettes (no violet/neon).
- **Typography:** DM Sans (body/UI), Fraunces (display headings, logo, brand moments). Tight tracking on headings, generous line-height on body.
- **Geometry:** Flat design (depth: 0, no shadows). Pill-shaped buttons (`rounded-full`). Cards with `rounded-lg` or `--radius-box: 0.75rem`. 1px borders.

### Design Principles
1. **Warmth over cold precision** — The earthy palette (cream, teal, terracotta) is intentional. Maintain organic warmth in every surface and interaction. Avoid sterile whites and clinical blues.
2. **Hierarchy through restraint** — Use color sparingly and with intent. Neutrals for structure, teal for primary actions, semantic colors for status. Let contrast, spacing, and typography weight create hierarchy — not visual noise.
3. **Consistency is trust** — The landing site and app must feel like one product. Same colors, same type scale, same component patterns. A user should never feel a jarring transition between them.
4. **Breathable, not empty** — Generous whitespace is intentional, not lazy. Every section earns its space, but content should breathe. Dense where it matters (app), spacious where it inspires (landing).
5. **Serif for soul** — Fraunces gives Axon its distinctive character. Use it for headlines, brand moments, and anywhere the product needs to feel human. DM Sans handles the work; Fraunces provides the personality.

### Accessibility
- WCAG AA compliance — sufficient contrast ratios on all text/background combinations
- Respect `prefers-reduced-motion` for all animations
- Keyboard navigable — focus states visible on all interactive elements
- Opacity-based text hierarchy must maintain readable contrast (minimum `/60` on base backgrounds)
