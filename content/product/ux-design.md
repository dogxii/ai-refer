# UX Design

## Purpose

This pack helps AI agents reason about product experience before proposing screens, flows, features, or interface changes.

## When To Use

- Use this pack when creating product concepts, UX flows, PRDs, prototypes, feature specs, product critiques, or experience audits.
- Use this pack before UI generation when the user's request includes goals, users, workflows, onboarding, conversion, retention, or complex tasks.
- Use this pack when an AI answer jumps straight to screens, components, or features without clarifying the problem.
- Use this pack for B2B, SaaS, mobile apps, web apps, internal tools, AI tools, consumer products, and service flows.
- Do not use this pack as a replacement for real user research, analytics, legal review, domain expertise, or business strategy.
- Do not over-apply heavyweight UX artifacts when a quick design decision, bug fix, or small UI polish pass is enough.

## Core Principles

- Good UX starts with the right problem, not the first solution.
- Users do not want features; they want progress in a situation.
- A product flow should reduce uncertainty, effort, risk, and unnecessary decisions.
- A useful design connects user needs, business outcomes, technical constraints, and measurable behavior.
- Evidence beats confidence. Assumptions should be named, tested, or kept out of the critical path.
- Journeys explain the broader experience; flows explain the step-by-step interaction.
- A product is only as good as its edge cases: empty, error, slow, denied, repeated, interrupted, and high-risk states.

## Rules For AI Agents

### 1. Frame The Problem Before The Feature

- Start by naming the user, situation, goal, current pain, and desired outcome.
- Separate symptoms from root causes.
- Ask what user behavior should change if the solution works.
- State the business or product outcome the work supports.
- Avoid feature lists until the problem is clear.
- If the user already gave a solution, infer the underlying problem and validate whether the solution fits it.

### 2. Identify The Job And Motivation

- Describe what the user is trying to accomplish, not only who the user is.
- Include the trigger, motivation, anxiety, constraint, and success criteria.
- Use job-style language when useful: "When X happens, the user wants to Y, so they can Z."
- Distinguish functional progress from emotional or social progress.
- Do not rely only on personas with demographics, role labels, or vague traits.

### 3. Define Outcomes And Signals

- Connect the design to measurable or observable outcomes.
- Use behavior-based signals: activation, completion, retry rate, time on task, error rate, adoption, retention, conversion, support tickets, saved time, or quality of output.
- Include guardrails when optimizing one metric could harm trust, accessibility, quality, or long-term retention.
- Do not treat clicks as success when the user's real goal happens later.
- If metrics are unavailable, define qualitative success signals and what evidence would change the design.

### 4. Map Assumptions And Risks

- List assumptions about user motivation, comprehension, trust, data availability, technical feasibility, permissions, and operational constraints.
- Mark which assumptions are high-risk because the solution fails if they are wrong.
- Propose lightweight validation for high-risk assumptions.
- Do not present speculative user needs as facts.
- Do not hide uncertainty inside confident UI recommendations.

### 5. Choose The Right Research Move

- Use interviews to understand motivations, situations, language, and unmet needs.
- Use usability testing to find where a proposed flow breaks.
- Use analytics to find drop-offs, frequency, segments, and behavioral patterns.
- Use surveys to quantify attitudes or preferences after the concepts are clear.
- Use diary studies or longitudinal methods when behavior unfolds over time.
- Use card sorting and tree testing for information architecture.
- Use support tickets, sales calls, reviews, and search logs as secondary evidence, not as a complete picture.

### 6. Analyze Tasks, Not Just Screens

- Break the workflow into user goal, entry point, steps, decisions, system responses, failure points, and completion criteria.
- Identify repeated tasks, rare high-risk tasks, expert shortcuts, and beginner guidance.
- Reduce steps only when the removed step does not also remove necessary understanding or control.
- Preserve user work across interruptions.
- Design recovery for mistakes, abandoned flows, expired sessions, slow responses, and permission failures.

### 7. Use Journeys And Flows Correctly

- Use a journey map to understand the broader experience across time, channels, emotions, touchpoints, and opportunities.
- Use a user flow to design a specific path through product screens and decisions.
- Use a service blueprint when frontstage user actions depend on backstage operations, teams, systems, or policies.
- Do not confuse a happy-path screen sequence with the whole experience.
- Always include alternate paths, failure paths, and return paths for important workflows.

### 8. Shape Information Architecture

- Group content and actions according to user mental models, not internal org charts.
- Give categories clear, mutually understandable names.
- Keep top-level navigation stable and limited to meaningful destinations.
- Use progressive disclosure for complexity that users do not need immediately.
- Use card sorting or tree testing when IA choices are uncertain.
- Avoid flat navigation that overwhelms users and deep navigation that hides common tasks.

### 9. Design The Decision Path

- Identify the decisions users must make and what information they need at each decision.
- Put decision-supporting information before the action.
- Remove choices that do not affect the outcome.
- Use defaults when there is a safe, common, reversible choice.
- Ask for commitment only after users understand value, cost, risk, and consequences.
- Do not ask users to configure details before they know why the configuration matters.

### 10. Reduce Cognitive Load

- Use familiar patterns unless the product gains meaningful value from a new pattern.
- Keep labels concrete and task-oriented.
- Chunk complex work into clear sections, steps, or progressive disclosure.
- Keep system status visible.
- Use recognition over recall: recent items, saved views, examples, defaults, previews, and contextual hints.
- Avoid forcing users to remember IDs, settings, rules, or previous choices across screens.

### 11. Support Trust And Control

- Explain what will happen before high-impact actions.
- Provide preview, undo, draft, confirmation, or audit trail when mistakes are costly.
- Make data source, freshness, permissions, privacy, and automation boundaries clear.
- Let users cancel, go back, edit, retry, and recover.
- Do not surprise users with irreversible changes, hidden sharing, unexpected billing, or silent automation.

### 12. Design Onboarding Around Value

- Start with the shortest path to meaningful value.
- Ask only for setup information needed for the next useful moment.
- Use sample data, templates, imports, guided tasks, or contextual empty states to help users begin.
- Defer education until the user has context.
- Do not block value behind long tours, permission prompts, account setup, or abstract explanations unless the domain requires it.

### 13. Handle Edge Cases As Product Decisions

- Design for first use, no data, zero results, permission denied, offline, loading, failed save, partial success, duplicate data, stale data, archived data, and conflicting edits.
- Treat empty states as opportunities to explain status and guide action.
- Treat errors as recovery moments, not blame messages.
- Include accessible and localized content lengths.
- Do not let implementation invent edge cases after the UX is approved.

### 14. Prototype At The Right Fidelity

- Use low fidelity to explore structure, sequence, and content quickly.
- Use high fidelity to test comprehension, trust, interaction details, and visual hierarchy.
- Use realistic data before judging complex workflows.
- Prototype only the uncertainty that matters.
- Do not polish pixels before validating the flow's purpose and assumptions.

### 15. Critique With Criteria

- Evaluate designs against user goals, task success, clarity, efficiency, accessibility, risk, consistency, and business outcome.
- Separate taste feedback from usability feedback.
- Name the severity of each issue: blocking, high-friction, confusing, cosmetic, or strategic.
- Tie critique to evidence or expected behavior.
- Do not redesign everything when a local fix solves the problem.

### 16. Make Handoff Actionable

- Document the problem, outcome, target user, key flows, states, constraints, open questions, analytics events, and acceptance criteria.
- Include content rules, data dependencies, permissions, and failure behavior.
- Mark assumptions that still require validation.
- Provide implementation priorities: must-have, should-have, could-have, and later.
- Do not hand off a pretty mockup without interaction, state, data, and edge-case guidance.

## Practical Patterns

### Problem Frame

- User: who is trying to make progress.
- Situation: when and where the need appears.
- Current behavior: what they do today.
- Pain: what is slow, confusing, risky, expensive, or impossible.
- Desired outcome: what should become easier or better.
- Product outcome: why the business should care.
- Evidence: what is known, unknown, and assumed.

### Job Story

- When: the triggering situation.
- I want to: the progress the user seeks.
- So I can: the deeper outcome or value.
- But: anxiety, constraint, risk, or competing solution.

### Flow Review

- Entry points.
- Required prerequisites.
- Main path.
- Decisions and branches.
- System feedback.
- Failure and recovery.
- Completion and next step.
- Return path.

### UX Audit Pass

- Can users tell where they are?
- Can users tell what they can do?
- Can users predict what will happen?
- Can users recover from mistakes?
- Does the interface match user language and mental models?
- Does each step provide enough information for the next decision?
- Are the highest-risk assumptions visible?

### Research Plan Lite

- Question: what decision the research must inform.
- Method: interview, usability test, analytics, survey, card sort, tree test, diary, or support review.
- Participants or data source.
- Tasks or prompts.
- Success signal.
- Decision that will change based on findings.

### Acceptance Criteria

- User can complete the primary task.
- Important alternate and failure paths are handled.
- Success, empty, loading, disabled, permission, and error states are defined.
- Analytics or qualitative feedback can indicate whether the design worked.
- Accessibility, content, data, and implementation constraints are accounted for.

## Anti-Patterns

- Starting with screens before understanding the problem.
- Treating a stakeholder request as a validated user need.
- Writing personas that do not change design decisions.
- Designing only the happy path.
- Confusing a journey map with a screen flow.
- Using research to confirm a chosen solution instead of reducing uncertainty.
- Optimizing for clicks, impressions, or feature usage without checking user value.
- Asking users for setup before showing why setup matters.
- Hiding critical consequences until after submit.
- Using vague labels like "manage", "solutions", "resources", or "advanced" without user meaning.
- Treating empty states, errors, and permissions as engineering details.
- Shipping a high-fidelity prototype that uses perfect fake data and no edge cases.
- Giving critique as taste without criteria.
- Handing off mockups without states, constraints, and acceptance criteria.

## Review Checklist

- [ ] The problem, user, situation, and desired outcome are explicit.
- [ ] The solution connects to a measurable or observable product outcome.
- [ ] Assumptions and high-risk unknowns are named.
- [ ] Research or evidence is appropriate to the decision being made.
- [ ] The workflow is analyzed as tasks, decisions, system responses, and recovery paths.
- [ ] Journeys, flows, and service dependencies are used at the right scope.
- [ ] Information architecture matches user mental models.
- [ ] Each step gives users enough information to make the next decision.
- [ ] Cognitive load is reduced through defaults, recognition, chunking, and clear labels.
- [ ] Trust, privacy, permission, cost, and irreversible consequences are visible.
- [ ] Onboarding gets users to value quickly.
- [ ] Empty, error, loading, permission, duplicate, stale, and interrupted states are designed.
- [ ] Prototype fidelity matches the uncertainty being tested.
- [ ] Critique is tied to criteria, severity, and expected behavior.
- [ ] Handoff includes states, constraints, data dependencies, and acceptance criteria.

## Prompt Hooks

Use these as compact instructions when applying the pack:

```text
Before proposing UI, frame the UX problem: user, situation, job, pain, desired outcome, business outcome, assumptions, risks, and the behavior that should change if the design works.
```

```text
Design the product flow by mapping entry points, main path, decisions, alternate paths, failure states, recovery, completion, and return paths. Include onboarding, permissions, empty states, errors, and realistic data.
```

```text
Review this product experience using UX criteria: problem fit, task success, information architecture, cognitive load, trust, control, accessibility, edge cases, evidence, and implementation handoff quality.
```

