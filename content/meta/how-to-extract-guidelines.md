# How To Extract Guidelines

This is the meta-guideline for AI Refer.

Use it before creating or updating any reference pack. Its job is to make sure every pack is
distilled from strong references, written as original judgment, and shaped for AI agents to execute.

## Goal

Create compact, actionable, source-informed guidelines that help AI agents produce better work.

The final pack should read like a senior practitioner's distilled operating manual, not like notes,
video transcripts, SEO content, or a bibliography.

## Output Philosophy

Publish the conclusion, not the research mess.

Good packs:

- Synthesize many references into one coherent standard.
- Convert abstract advice into concrete AI behavior.
- Include rules, examples, anti-patterns, and checklists.
- Preserve nuance without becoming long or academic.
- Avoid dumping links, transcripts, or copied explanations.

Bad packs:

- List sources without turning them into decisions.
- Repeat generic advice like "make it clean and user-friendly."
- Copy a creator's script, article, or framework too closely.
- Mix contradictory advice without resolving when each rule applies.
- Tell the AI what to admire instead of what to do.

## Research Inputs

Use a mix of references when possible:

- Long-form videos, courses, conference talks, and tutorials.
- Official design or platform guidelines.
- High-quality blogs, case studies, design-system docs, and product teardown articles.
- Real product examples from strong apps, websites, and developer tools.
- Personal project experience and repeated failure patterns from AI-generated work.

Do not rely on a single source unless the pack is explicitly about that one system.

## Selection Criteria

Prefer references that have at least three of these qualities:

- The author demonstrates real product, design, or engineering experience.
- The advice is specific enough to change implementation decisions.
- The material includes before/after examples, critiques, or applied workflows.
- The recommendation matches observable patterns in successful products.
- The idea is repeated across multiple credible sources.
- The source distinguishes beginner shortcuts from professional practice.
- The content explains tradeoffs, not only rules.

Avoid references when:

- They are mostly trend chasing.
- They only show visual taste without explaining decision logic.
- They optimize for portfolio spectacle over product usability.
- They contain ungrounded claims, engagement bait, or purely personal preference.
- They cannot be generalized into repeatable AI behavior.

## Extraction Process

1. Define the pack's job.

   Write one sentence: "This pack helps AI agents do X for Y context."

2. Gather diverse references.

   Use multiple videos, articles, official docs, and real product examples. Look for repeated ideas,
   disagreements, concrete tactics, and common mistakes.

3. Extract claims.

   Turn each useful idea into a short claim:

   - "Bottom navigation should map to primary app destinations."
   - "Dashboard cards should support scanning, comparison, and action."
   - "A component boundary should follow ownership of state and behavior."

4. Test each claim.

   Ask:

   - Does this change what the AI should generate?
   - Does it prevent a common failure?
   - Does it survive across more than one example?
   - Is it context-dependent?

5. Resolve conflicts.

   When references disagree, write a conditional rule:

   - "Use dense tables for expert workflows; use card lists for browsing and discovery."
   - "Use platform-native patterns for production mobile apps; use expressive custom UI for brand-led concepts only when usability remains clear."

6. Convert claims into AI instructions.

   Replace passive knowledge with executable behavior:

   - Weak: "Consistency is important."
   - Strong: "Reuse spacing, typography, icon style, and interaction states across repeated controls. If a pattern appears twice, treat it as a component."

7. Add anti-patterns.

   Name the failure modes AI commonly produces:

   - Decorative cards inside cards.
   - Marketing-style hero layouts for operational tools.
   - Icon-only controls without labels or tooltips where recognition is weak.
   - Mobile screens with desktop density and unreachable actions.

8. Add a checklist.

   End with a compact review list the AI can run after generating work.

9. Cut aggressively.

   Remove history, biography, transcript residue, repeated wording, and advice that cannot guide a decision.

## Pack Structure

Use this shape unless a pack has a strong reason to differ:

```md
# Pack Title

## Purpose

## When To Use

## Core Principles

## Rules For AI Agents

## Practical Patterns

## Anti-Patterns

## Review Checklist

## Prompt Hooks
```

## Writing Rules

- Write in clear, direct language.
- Prefer commands and decision rules over explanation.
- Keep paragraphs short.
- Use examples only when they clarify execution.
- Do not include raw source links in the final pack unless the pack is explicitly a reading list.
- Do not include full transcripts or long copied passages.
- Do not overfit to one platform, creator, tool, or aesthetic trend.
- Mark conditional guidance clearly.
- Make every section useful to an AI agent working inside a limited context window.

## Quality Bar

A pack is ready when another AI can read it and immediately make better choices.

Before publishing, check:

- Does the pack tell the AI when to use it?
- Does it contain concrete rules rather than vague taste?
- Does it include the common mistakes the pack is meant to prevent?
- Does it explain important tradeoffs?
- Does it avoid source dumping?
- Is it short enough to load during a real task?
- Could a human contributor update it without knowing the original research session?

## Copyright And Attribution Boundary

AI Refer should learn from public knowledge without republishing someone else's work.

Allowed:

- Original synthesis.
- Short, transformed summaries.
- General principles learned across multiple references.
- Brief attribution when legally or contextually necessary.

Avoid:

- Full transcripts.
- Long copied article sections.
- Creator-specific frameworks rewritten with only minor wording changes.
- Publishing private, paid, or login-only material without permission.

## Maintenance

Reference packs should evolve when:

- A pattern repeatedly fails in real AI-generated output.
- Platform guidelines change.
- A better source clarifies a tradeoff.
- A pack becomes too broad and should be split.
- The checklist no longer catches common mistakes.

When revising a pack, preserve the user's operational value over historical completeness.

