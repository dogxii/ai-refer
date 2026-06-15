# Contributing

AI Refer is a public library of distilled reference packs for AI agents.

Contributions should improve the final guidance an AI can apply, not expand the
project into a transcript archive, source dump, or prompt collection.

## Contribution Principles

- Write original, distilled guidance.
- Prefer practical rules an AI can execute.
- Keep packs compact enough to read before work.
- Preserve user intent, product quality, and engineering judgment.
- Use reputable references during research, but publish the final judgment.
- Do not include full transcripts, large copied excerpts, private prompts, cookies, tokens, or raw research notes.
- Do not add source links inside final packs unless the pack explicitly exists to route readers to official documentation.

## Before Creating A Pack

1. Read `content/meta/how-to-extract-guidelines.md`.
2. Check `ai-index.json` for related packs.
3. Decide whether the work belongs in an existing pack or a new pack.
4. Use `templates/reference-pack-template.md` as the starting shape.
5. Keep research notes under `research/` if needed. That directory is ignored by git.

## Pack Requirements

Each active pack should include:

- `Purpose`
- `When To Use`
- `Core Principles`
- `Rules For AI Agents`
- `Practical Patterns`
- `Anti-Patterns`
- `Review Checklist`
- `Prompt Hooks`

Rules should be specific enough to change an AI's output. Avoid vague advice
such as "make it good", "be user-friendly", or "follow best practices".

## Updating The Index

When adding a pack:

1. Add the Markdown file under the right `content/` category.
2. Add it to the category `README.md`.
3. Add it to the root `README.md`.
4. Add it to `llms.txt`.
5. Add it to `ai-index.json`.
6. Run `npm run validate`.

## Content Boundaries

Published packs should not contain:

- Video transcripts.
- Long copied excerpts.
- Lists of research links.
- Personal notes.
- Credentials or cookies.
- Unverified claims presented as facts.
- Legal, medical, financial, or security guidance beyond general engineering practice unless researched and reviewed carefully.

## Review Questions

- Would this help an AI produce better work immediately?
- Is the guidance original and compact?
- Are the instructions concrete and testable?
- Does it duplicate another pack?
- Does it respect copyright and source privacy?
- Is the pack discoverable through `llms.txt` and `ai-index.json`?

