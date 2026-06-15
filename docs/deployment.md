# Deployment

AI Refer is a static site. It can be hosted by GitHub Pages, Netlify, Vercel,
Cloudflare Pages, or any static file server.

## GitHub Pages

This repository includes a GitHub Actions workflow that deploys the repository
root as a Pages artifact.

Expected public URL:

```text
https://dogxii.github.io/ai-refer/
```

Important public entry points:

- `https://dogxii.github.io/ai-refer/`
- `https://dogxii.github.io/ai-refer/llms.txt`
- `https://dogxii.github.io/ai-refer/ai-index.json`
- `https://dogxii.github.io/ai-refer/browse.html`

## Local Preview

```sh
npm run dev
```

## Validation

```sh
npm run validate
```

Validation checks:

- `ai-index.json` is valid JSON.
- Every indexed pack exists.
- Indexed packs have required sections.
- `llms.txt` and `README.md` mention active packs.
- Published content does not contain research URLs or video-platform traces.

## AI Entry Policy

The root page is intentionally short. AI agents should read `llms.txt`, then
use `ai-index.json` to choose relevant packs.

The full human reader is `browse.html`.

