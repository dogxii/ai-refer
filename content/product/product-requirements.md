# Product Requirements

## Purpose

This pack helps AI agents turn product ideas, user needs, and UX decisions into implementation-ready requirements without losing the product intent.

## When To Use

- Use this pack when writing PRDs, feature specs, user stories, acceptance criteria, implementation briefs, or product handoff notes.
- Use this pack before asking an AI coding agent to build a feature from a vague idea.
- Use this pack when a request contains ambiguous scope, missing edge cases, unclear user value, or untestable requirements.
- Use this pack when splitting a product feature into milestones, stories, tasks, or release phases.
- Do not use this pack to replace engineering design docs, legal policy, security review, or detailed technical architecture.
- Do not force a long PRD for a small UI copy change, bug fix, or obvious implementation task.

## Core Principles

- Requirements are a shared contract about outcome, scope, behavior, and acceptance.
- A good requirement tells the team what must be true, not how every line of code should be written.
- User stories explain value and context; acceptance criteria define completion; implementation tasks define engineering work.
- Scope is a product decision. Non-goals are as important as goals.
- Requirements should be testable, traceable, and small enough to build with confidence.
- The spec should preserve product intent while leaving room for engineering judgment.
- Ambiguity should be surfaced as open questions, not hidden inside confident prose.

## Rules For AI Agents

### 1. Choose The Right Artifact

- Use a short brief when the work is small and low-risk.
- Use a PRD when multiple stakeholders, flows, states, dependencies, or tradeoffs must be aligned.
- Use user stories when work will be split into user-value increments.
- Use acceptance criteria when the team needs clear completion rules.
- Use an engineering design doc when the core risk is technical architecture, migration, scaling, or integration.
- Do not produce a full PRD when a tight checklist or issue brief would be clearer.

### 2. Start With Context And Outcome

- State the problem, user, situation, and desired product outcome.
- Explain why the work matters now.
- Name the behavior or business metric the feature should affect.
- Include evidence, assumptions, and known constraints.
- Avoid writing requirements that only describe a solution without explaining the reason.

### 3. Define Scope And Non-Goals

- List what is included in the first deliverable.
- List what is explicitly out of scope.
- Separate must-have, should-have, could-have, and later.
- Mark any future work that should not block the current release.
- Keep scope small enough to validate the highest-risk assumption.
- Do not let "nice to have" items silently become required.

### 4. Write Requirements As Behavior

- Describe what users or systems can do, what changes, and what must remain true.
- Prefer observable behavior over vague qualities.
- Use "the system shall" only when a precise system behavior is needed.
- Avoid implementation detail unless it changes product behavior or constrains the design.
- Replace "make it easy" with the specific task, success signal, and friction to remove.

### 5. Use User Stories Correctly

- Write stories that create user or customer value.
- Keep stories small enough to discuss, estimate, test, and ship.
- Use the story format only when it adds clarity: "As a [user], I want [capability], so I can [outcome]."
- Include the conversation details outside the one-line story.
- Do not treat a user story title as the whole requirement.
- Do not write stories for purely technical work unless the user value or enabling purpose is clear.

### 6. Use Job Stories When Motivation Matters

- Use job stories for workflows driven by situation, trigger, anxiety, or motivation.
- Structure them around context: "When [situation], I want to [motivation], so I can [outcome]."
- Include constraints and anxieties when they affect the design.
- Prefer job stories when personas are too generic to change decisions.
- Do not use job stories as decorative wording if the spec still lacks behavior and acceptance criteria.

### 7. Make Acceptance Criteria Testable

- Acceptance criteria should define pass or fail conditions.
- Each criterion should be independently testable.
- Cover main path, alternate paths, failure paths, permissions, validation, empty states, and edge cases.
- Use Given/When/Then when state, action, and expected result need precision.
- Use simple bullet criteria when behavior is straightforward.
- Do not include vague criteria such as "works well", "looks good", or "is user-friendly".

### 8. Separate Acceptance Criteria From Implementation Tasks

- Acceptance criteria describe what must be true from the user's or system's perspective.
- Implementation tasks describe how the team may build it.
- Do not put database column names, component names, or internal algorithms in acceptance criteria unless users or integrations depend on them.
- Keep technical constraints in a constraints section.
- Keep engineering unknowns as open questions or risks.

### 9. Define Data And Content Requirements

- Name the objects, fields, states, relationships, and lifecycle changes the feature depends on.
- Include empty, missing, stale, duplicate, invalid, partial, and archived data behavior.
- Define content rules for labels, messages, errors, confirmations, notifications, and help text.
- Include localization, long text, formatting, units, currency, date, time zone, and pluralization when relevant.
- Do not assume perfect demo data.

### 10. Define Roles, Permissions, And Policy

- Identify who can view, create, edit, delete, approve, export, share, configure, or administer the feature.
- Define what users see when they lack permission.
- Include audit trail, compliance, privacy, retention, and security expectations when relevant.
- Mark destructive, irreversible, billable, public, or sensitive actions clearly.
- Do not leave permission behavior to implementation defaults.

### 11. Specify UX States And Flow Coverage

- Include entry points, prerequisites, main path, alternate paths, completion, and return path.
- Define loading, empty, error, disabled, saving, success, partial success, offline, and permission-denied states.
- Include confirmation, undo, retry, cancel, and recovery behavior where appropriate.
- Reference relevant UI packs when the output includes interface work.
- Do not specify only the happy path.

### 12. Include Analytics And Observability

- Define what events or signals should indicate usage, success, failure, and abandonment.
- Include key properties needed for segmentation or diagnosis.
- Add guardrail metrics when optimization could hurt quality, trust, or accessibility.
- Define operational visibility for imports, jobs, syncs, payments, AI generations, or integrations.
- Do not add analytics events that collect unnecessary personal or sensitive data.

### 13. Include Nonfunctional Requirements When They Matter

- Add accessibility, performance, reliability, browser/device support, localization, security, privacy, auditability, and scalability requirements when they affect product quality.
- Make nonfunctional requirements measurable when possible.
- Include graceful degradation for slow networks, unavailable integrations, and rate limits.
- Do not bury critical nonfunctional requirements in vague "quality" language.

### 14. Plan Rollout And Migration

- Define whether the feature ships behind a flag, to a cohort, to a workspace, or globally.
- Include migration, backfill, import, export, compatibility, and rollback considerations.
- Define how existing users, existing data, and existing integrations are affected.
- Include support, documentation, onboarding, and changelog needs.
- Do not assume launch is only a code deploy.

### 15. Manage Open Questions

- Track open questions separately from decisions.
- Assign each question to product, design, engineering, data, legal, security, support, or business.
- Mark which questions block implementation and which can be resolved later.
- Update the spec when decisions are made.
- Do not let unresolved questions become hidden assumptions.

### 16. Split Work Into Buildable Slices

- Split by user value, risk, workflow step, permission layer, data dependency, or release phase.
- Prefer slices that can be independently tested.
- Keep the first slice useful, not merely a technical scaffold.
- Mark dependencies between slices.
- Do not split only by frontend/backend if that prevents end-to-end validation.

### 17. Preserve Traceability

- Link requirements to the problem, outcome, user story, acceptance criteria, design, data dependency, and implementation ticket when possible.
- Keep names and IDs stable across PRD, design, issues, tests, and release notes.
- Note decision history only when it helps future maintainers understand tradeoffs.
- Do not duplicate conflicting requirements across multiple documents.

## Practical Patterns

### Lightweight Feature Brief

- Title.
- Problem.
- Target user and situation.
- Desired outcome.
- Proposed behavior.
- Scope.
- Non-goals.
- Key states and edge cases.
- Acceptance criteria.
- Open questions.

### PRD Skeleton

- Context and problem.
- Goals and success metrics.
- Users, jobs, and scenarios.
- Scope and non-goals.
- User flows.
- Functional requirements.
- Data and content requirements.
- Roles and permissions.
- UX states and edge cases.
- Analytics and observability.
- Nonfunctional requirements.
- Rollout and migration.
- Risks and open questions.
- Acceptance criteria.

### User Story Pattern

- Story: As a [user], I want [capability], so I can [outcome].
- Notes: context, constraints, and conversation details.
- Acceptance criteria: testable pass/fail conditions.
- Dependencies: design, data, API, permission, migration, or experiment.
- Out of scope: what this story will not handle.

### Job Story Pattern

- When [situation or trigger].
- I want to [make progress or reduce friction].
- So I can [achieve outcome].
- Constraints: anxiety, risk, time pressure, environment, data, or permission.
- Acceptance: what must be true when the job is supported.

### Acceptance Criteria Pattern

- Main path.
- Alternate path.
- Validation.
- Empty or missing data.
- Permission denied.
- Error and recovery.
- State persistence.
- Accessibility and keyboard behavior when UI is involved.
- Analytics or audit event when relevant.

### Given When Then Pattern

Use when behavior depends on state:

```text
Given [initial context]
When [user or system action]
Then [expected outcome]
And [observable side effect, if needed]
```

Keep scenarios atomic. One scenario should test one behavior, not the entire product.

### Requirement Review Pass

- Is it valuable?
- Is it scoped?
- Is it testable?
- Is it small enough?
- Is it free of hidden implementation assumptions?
- Are edge cases covered?
- Are non-goals explicit?
- Are open questions visible?

## Anti-Patterns

- A PRD that is mostly feature ideas with no problem or outcome.
- Requirements that describe screens but not behavior.
- User stories with no acceptance criteria.
- Acceptance criteria that say "should be intuitive" or "should work".
- Specs that include only the happy path.
- Hidden scope creep inside "nice to have" language.
- Engineering implementation details mixed into user-facing acceptance criteria.
- No decision about permissions, errors, empty states, or data lifecycle.
- Analytics added after launch with no connection to success criteria.
- Nonfunctional requirements hidden under "must be fast and secure".
- Open questions scattered through the document as unresolved prose.
- Splitting work by technical layer only, leaving no testable product slice.
- PRD, design, tickets, and tests using different names for the same concept.

## Review Checklist

- [ ] The artifact type fits the size and risk of the work.
- [ ] The problem, user, situation, and product outcome are clear.
- [ ] Scope and non-goals are explicit.
- [ ] Requirements describe observable behavior.
- [ ] User stories or job stories include real value and context.
- [ ] Acceptance criteria are testable and cover main, alternate, failure, permission, and edge paths.
- [ ] Implementation tasks are separated from product acceptance criteria.
- [ ] Data, content, roles, permissions, and lifecycle states are defined.
- [ ] UX states and flows are covered beyond the happy path.
- [ ] Analytics and observability connect to success and failure signals.
- [ ] Important nonfunctional requirements are measurable or concrete.
- [ ] Rollout, migration, existing users, and rollback are considered.
- [ ] Open questions are visible and categorized.
- [ ] Work is split into buildable, testable slices.
- [ ] Names and decisions are traceable across docs, design, tickets, and tests.

## Prompt Hooks

Use these as compact instructions when applying the pack:

```text
Turn this idea into implementation-ready product requirements: context, problem, target users, outcome, scope, non-goals, functional behavior, data/content, permissions, UX states, analytics, nonfunctional requirements, rollout, risks, open questions, and acceptance criteria.
```

```text
Rewrite these requirements so they are testable. Separate user stories, acceptance criteria, implementation tasks, edge cases, non-goals, and open questions. Remove vague language and hidden assumptions.
```

```text
Before coding, check the spec for missing scope boundaries, permissions, data states, errors, loading, empty states, analytics, rollout, migration, and pass/fail acceptance criteria.
```

