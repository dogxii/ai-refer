# Usage

AI Refer is designed to be read by AI agents before they generate, review, or
refactor work.

## For AI Agents

1. Read `llms.txt`.
2. Use `ai-index.json` to select only the packs relevant to the current task.
3. Read the selected packs before producing work.
4. Apply the packs as guidance beneath the user's explicit request.
5. Use the review checklist in each selected pack before finishing.

## For Humans

Use AI Refer when you want to give an AI stronger context without pasting a long
prompt every time.

Run the local web interface:

```sh
npm run dev
```

Open `browse.html` for the full human reader. The root page is intentionally
short so AI agents are directed to `llms.txt` instead of reading navigation UI.

Good use cases:

- UI generation.
- Product and UX critique.
- PRD or feature specification writing.
- Code architecture review.
- AI coding-agent preparation.

## Example Instruction

```text
Before starting, read this project's AI Refer entry point:
llms.txt

Select the relevant packs for my task and apply them as guidance.
```

## Pack Selection

- Use UI packs for screens, app interfaces, layout, states, forms, dashboards, and mobile experiences.
- Use product packs for user problems, flows, PRDs, acceptance criteria, and handoff quality.
- Use code packs for modules, APIs, dependencies, data ownership, tests, observability, rollout, and refactoring.
- Use the meta pack before creating or revising AI Refer itself.

## Priority

AI Refer is guidance. The user's explicit request, repository constraints,
official platform documentation, and project-specific design systems take
priority when they conflict with a generic pack.

## Public URLs

After GitHub Pages deployment, the expected public root is:

```text
https://dogxii.github.io/ai-refer/
```

For AI use, prefer:

```text
https://dogxii.github.io/ai-refer/llms.txt
```
