# AI Refer

AI Refer is an open reference hub for AI agents.

It turns high-quality design, product, and engineering knowledge into compact,
actionable reference packs that an AI can read before doing work.

## What This Project Is

- A public, open-source library of AI-readable guidelines.
- A way to package distilled knowledge from many references into practical rules.
- A remote "skill-like" knowledge base for UI generation, product design, and code architecture.

## What This Project Is Not

- It is not a transcript archive.
- It is not a link collection.
- It is not a prompt dump.
- It is not a replacement for official platform documentation.

## First Principle

Reference packs should contain the final usable judgment, not the research trail.
The research process can use many videos, articles, books, product examples, and official docs,
but the published output should be concise, original, executable, and useful to AI agents.

## AI Entry Points

- [`llms.txt`](llms.txt): Human and AI-readable entry point.
- [`ai-index.json`](ai-index.json): Machine-readable index.
- [`content/meta/how-to-extract-guidelines.md`](content/meta/how-to-extract-guidelines.md): The meta-guideline for creating all future reference packs.
- [`robots.txt`](robots.txt): Public crawler policy.
- [`sitemap.xml`](sitemap.xml): Public URL map for the static site.

## Quick Start

For an AI agent:

```text
Read llms.txt, select the relevant packs from ai-index.json, and apply them as guidance for my task.
```

For a human maintainer:

```sh
npm run dev
npm run validate
```

`npm run dev` opens a local static server. The root page is intentionally short
for AI agents; the full human reader lives at `browse.html`.

## Project Structure

- [`index.html`](index.html): Short AI-first landing page that points agents to `llms.txt`.
- [`browse.html`](browse.html): Human-readable web interface for browsing packs.
- [`assets/`](assets/): Web UI styles, scripts, and visual assets.
- [`content/`](content/README.md): Published AI-readable reference packs.
- [`docs/usage.md`](docs/usage.md): How humans and AI agents should use AI Refer.
- [`docs/deployment.md`](docs/deployment.md): Static hosting and GitHub Pages notes.
- [`docs/roadmap.md`](docs/roadmap.md): Recommended next packs and deferred ideas.
- [`templates/`](templates/reference-pack-template.md): Starting template for new packs.
- [`scripts/validate.mjs`](scripts/validate.mjs): Local repository checks.
- [`CONTRIBUTING.md`](CONTRIBUTING.md): Contribution rules and content boundaries.

## Deployment

AI Refer is a static site. The root page is intentionally short for AI agents,
and the human reader lives at [`browse.html`](browse.html).

Expected GitHub Pages URL:

```text
https://dogxii.github.io/ai-refer/
```

GitHub Actions are included for validation and Pages deployment.

## Active Packs

- [`content/ui/ui-ux-fundamentals.md`](content/ui/ui-ux-fundamentals.md): Core UI/UX principles for all interface work.
- [`content/ui/web-app-ui.md`](content/ui/web-app-ui.md): SaaS, dashboard, admin, and data-heavy web app UI.
- [`content/ui/mobile-app-ui.md`](content/ui/mobile-app-ui.md): Mobile app UI generation and review.
- [`content/product/ux-design.md`](content/product/ux-design.md): Product and UX reasoning before screens, flows, and specs.
- [`content/product/product-requirements.md`](content/product/product-requirements.md): PRDs, user stories, acceptance criteria, and implementation-ready product specs.
- [`content/code/code-architecture.md`](content/code/code-architecture.md): Code architecture, boundaries, contracts, dependencies, tests, observability, and rollout risk.
- [`content/code/frontend-architecture.md`](content/code/frontend-architecture.md): Frontend routes, rendering, state, data fetching, components, accessibility, performance, and tests.

## Planned Packs

- UI generation for web, mobile apps, and desktop apps.
- Product design and UX review.
- Frontend component design.
- AI self-checklists for design and code quality.

## License

MIT.
