# Code Architecture

## Purpose

This pack helps AI agents design, implement, refactor, and review code architecture so the result is maintainable, testable, observable, and appropriate for the actual product risk.

## When To Use

- Use this pack before creating a new app, package, module, service, API, integration, data model, or major feature.
- Use this pack before asking an AI coding agent to restructure a codebase or introduce a new architectural pattern.
- Use this pack when the task involves boundaries, dependencies, state management, data flow, persistence, external systems, deployment, or long-term maintainability.
- Use this pack when generated code feels plausible in isolation but does not fit the surrounding codebase.
- Use this pack during code review when a change increases coupling, complexity, hidden state, or operational risk.
- Do not use this pack to force a large design process for a small typo, local UI tweak, copy change, or obvious bug fix.
- Do not use this pack as a reason to ignore the existing architecture, framework conventions, or user constraints.

## Core Principles

- Architecture is the set of hard-to-change decisions that shape how the system evolves.
- Good architecture makes common changes easy, important behavior explicit, and dangerous changes visible.
- The best architecture is the smallest structure that protects the product from the risks it actually has.
- Boundaries should follow domain concepts, ownership, data lifecycle, and change frequency, not only technical layers.
- High cohesion and low coupling matter more than fashionable patterns.
- Stable contracts are more important than clever internals.
- Business rules should not depend on framework, database, network, UI, or deployment details unless the product truly requires it.
- Every boundary creates both freedom and overhead. Split only when the independence is worth the coordination cost.
- Simplicity is a system property. A simple function inside a tangled system is still part of a complex architecture.
- Architecture should be testable, observable, deployable, and explainable to a new maintainer.
- Significant decisions should leave a short trace: context, options, decision, consequences, and reversal path.

## Rules For AI Agents

### 1. Read The Existing System First

- Inspect the repository structure before proposing architecture.
- Identify the framework, language, package manager, runtime, test tools, build process, and deployment assumptions.
- Find existing patterns for modules, routes, services, components, data access, validation, errors, logging, and tests.
- Prefer local conventions when they are coherent and safe.
- Name any pattern that is missing or inconsistent before inventing a new one.
- Do not introduce a new architecture because a generic template looks cleaner than the codebase in front of you.

### 2. Start With Architectural Drivers

- State the product goal, primary workflows, and users affected by the change.
- Identify quality attributes that matter: maintainability, reliability, latency, throughput, security, privacy, accessibility, offline use, portability, cost, or developer speed.
- Separate hard constraints from preferences.
- Include expected scale only when there is evidence or a stated requirement.
- Ask whether the change is reversible, risky, user-visible, data-destructive, security-sensitive, or hard to migrate.
- Do not optimize for abstract future scale while ignoring current correctness and clarity.

### 3. Choose The Smallest Sufficient Structure

- Use a simple module, function, component, or route when the behavior is local.
- Use a feature slice when UI, API, domain logic, state, and tests change together.
- Use a shared library only when multiple callers need the same stable capability.
- Use a service boundary only when separate deployment, ownership, scaling, data lifecycle, or reliability isolation is needed.
- Keep monoliths modular before reaching for microservices.
- Do not split code by habit if every change will still require coordinated edits across the split.

### 4. Define Boundaries By Change

- Group code that changes for the same reason.
- Separate code that changes at different rates.
- Keep business capabilities, domain concepts, and user workflows visible in the module structure.
- Avoid folders that only mirror technical nouns when they hide the feature or domain boundary.
- Make cross-boundary communication explicit through functions, interfaces, events, APIs, or message contracts.
- Do not let unrelated features share writable state, private helpers, or database tables casually.

### 5. Control Dependency Direction

- Make dependencies flow from volatile details toward stable policies, not from core logic toward incidental tooling.
- Let UI, routes, controllers, jobs, and adapters call domain or application logic.
- Keep domain and application logic free from direct framework, network, clock, random, filesystem, and database calls when practical.
- Inject or pass external capabilities at boundaries when testing or replacement matters.
- Avoid cyclic dependencies between modules, packages, services, or initialization paths.
- Do not create a dependency that makes cold start, local testing, or partial failure impossible to reason about.

### 6. Keep Domain Logic Out Of Infrastructure

- Put product rules, validation rules, permission decisions, calculations, and state transitions in a place that can be tested without the full app shell.
- Keep database queries, HTTP clients, SDK calls, file access, queues, and framework glue at the edges.
- Use adapters or repositories when persistence details would otherwise leak into business rules.
- Avoid making persisted objects responsible for saving themselves unless that is an established local pattern.
- Do not let ORM annotations, API DTOs, or UI view models become the only expression of the domain model.

### 7. Make Data Ownership Explicit

- Name the source of truth for each important object and state.
- Define who can create, update, delete, archive, restore, import, export, or derive the data.
- Model lifecycle states explicitly instead of relying on null values or scattered booleans.
- Treat shared databases, shared mutable caches, and duplicated records as architectural decisions.
- Include data migration, backfill, rollback, and compatibility when changing stored data.
- Do not let two modules or services write the same conceptual object without an ownership rule.

### 8. Design Contracts Before Internals

- Define the public interface before filling in implementation details.
- For APIs, define request shape, response shape, status/error semantics, idempotency, pagination, filtering, sorting, versioning, and compatibility.
- For functions or modules, define inputs, outputs, side effects, error behavior, and ownership.
- For events, define producer, consumer, schema, ordering assumptions, retry behavior, idempotency, and dead-letter handling.
- Keep contracts narrow, typed, and named around behavior.
- Do not expose internal persistence shape as the public contract unless it is intentionally stable.

### 9. Make State And Data Flow Traceable

- Identify where state lives: URL, client memory, server session, database, cache, queue, file, external provider, or derived computation.
- Keep state transitions explicit and testable.
- Avoid hidden global mutable state.
- Normalize server state and local UI state according to the framework's conventions.
- Make cache invalidation, optimistic updates, conflict handling, and stale data behavior explicit.
- Do not duplicate the same state in multiple places unless synchronization is deliberately designed.

### 10. Treat Errors As Architecture

- Define expected failures, unexpected failures, validation failures, permission failures, dependency failures, timeouts, retries, and partial success.
- Return errors at the right abstraction level for the caller.
- Preserve diagnostic detail in logs or traces while showing safe messages to users.
- Use retry only for operations that are safe or idempotent.
- Include cancellation, timeout, and cleanup behavior for long-running work.
- Do not let every layer catch, wrap, log, and rethrow the same error without adding meaning.

### 11. Make Security Boundaries Concrete

- Identify trusted and untrusted inputs.
- Validate untrusted data on a trusted side of the boundary.
- Centralize authentication, authorization, session, token, and permission checks when possible.
- Use allow lists for validation when the accepted shape is known.
- Keep secrets out of source code, logs, client bundles, and test fixtures.
- Avoid sending sensitive data to clients, analytics, AI providers, logs, or third-party services unless required and governed.
- Do not rely on UI hiding, client-side checks, or route naming as the security model.

### 12. Manage Configuration Deliberately

- Separate code from deploy-specific configuration.
- Keep configuration explicit, typed, documented, and validated at startup.
- Treat feature flags, environment variables, service endpoints, credentials, limits, and timeouts as part of architecture.
- Make defaults safe for local development and tests.
- Avoid scattered configuration reads across business logic.
- Do not hardcode environment-specific values inside reusable modules.

### 13. Keep Dependencies Boring And Owned

- Prefer standard library, existing project dependencies, and well-maintained ecosystem tools.
- Add a dependency only when it reduces real complexity or risk.
- Check license, maintenance, bundle/runtime cost, security posture, type quality, and integration fit.
- Hide third-party SDKs behind a local adapter when the provider is likely to change or the SDK is invasive.
- Avoid framework lock-in inside domain logic.
- Do not add a library for a small amount of straightforward code.

### 14. Plan Asynchronous Work Explicitly

- Use background jobs for work that is slow, retryable, scheduled, resource-heavy, or not required for immediate user feedback.
- Define job payload, idempotency key, retry policy, timeout, cancellation, progress, and failure visibility.
- Use events for decoupled facts that have already happened, not for vague commands with hidden required consumers.
- Make ordering, duplication, replay, and eventual consistency visible to callers.
- Include operational tooling for stuck jobs, poison messages, reprocessing, and audit trails when the workflow matters.
- Do not hide a critical synchronous requirement behind an unreliable async side effect.

### 15. Design For Observability

- Decide what logs, metrics, traces, audit records, and domain events are needed to understand the system.
- Instrument important flows, dependencies, background jobs, external calls, and error paths.
- Use structured logs with correlation IDs or request IDs where possible.
- Track latency, traffic, errors, saturation, queue depth, retry count, and business success signals when relevant.
- Ensure logs do not expose secrets or unnecessary personal data.
- Do not ship architecture that cannot answer "is it working, for whom, and where is it failing?"

### 16. Test The Architecture, Not Only The Code

- Put most tests close to the behavior they protect.
- Test public behavior and contracts before private implementation details.
- Use unit tests for pure logic, state transitions, validation, and edge cases.
- Use integration or contract tests for database, API, queue, filesystem, browser, or third-party boundaries.
- Use end-to-end tests sparingly for critical user journeys and cross-system confidence.
- Keep tests deterministic, clear, and fast enough to run during normal development.
- Add architecture checks, lint rules, type boundaries, or dependency rules when humans will otherwise break the intended structure.
- Do not create a brittle test suite that blocks refactoring without improving confidence.

### 17. Include Rollout, Migration, And Recovery

- Decide whether a change needs feature flags, staged rollout, canary release, dark launch, shadow traffic, migration step, or compatibility layer.
- Preserve backward compatibility when clients, integrations, or stored data still depend on old behavior.
- Include rollback and data recovery steps for risky changes.
- Separate schema expansion, data backfill, code switch, and cleanup when needed.
- Add observability before or with the risky change, not after a production problem.
- Do not treat deployment as a single irreversible event.

### 18. Capture Significant Decisions

- Write a short decision record for choices that affect structure, quality attributes, team workflow, data ownership, deployment, or hard-to-reverse dependencies.
- Include context, forces, options considered, decision, consequences, and revisit triggers.
- Keep decision records close to the code or documentation developers actually read.
- Update by superseding old decisions instead of silently rewriting history.
- Do not document every minor implementation choice as an architectural decision.

### 19. Keep Diagrams And Docs Executable Enough

- Document context, major building blocks, runtime flows, deployment assumptions, cross-cutting concerns, and known risks.
- Prefer diagrams that explain a decision or flow the code alone does not make obvious.
- Keep names consistent across code, docs, tests, telemetry, and product specs.
- Update docs when boundaries, contracts, or data ownership change.
- Use short README files inside important modules when local rules are not obvious.
- Do not create decorative diagrams that cannot guide implementation or review.

### 20. Refactor Incrementally

- Start by characterizing current behavior with tests or executable checks.
- Move one boundary at a time.
- Keep public behavior stable unless the task explicitly changes it.
- Use adapters, facades, or compatibility shims to avoid large-bang rewrites.
- Delete obsolete paths after migration is complete.
- Compare a rewrite against the value of improving the existing system with the same effort.
- Do not rewrite a working system because the target architecture looks cleaner in isolation.

### 21. Make AI-Generated Changes Fit The Codebase

- Before editing, summarize the current architecture and the intended change boundary.
- Keep edits scoped to the affected modules and contracts.
- Reuse existing helpers, naming, error patterns, test utilities, and framework idioms.
- When adding a new pattern, explain why the existing pattern is insufficient.
- Generate realistic tests and sample data that match domain rules.
- After editing, review for coupling, hidden state, missing errors, missing tests, config leaks, and migration risk.
- Do not produce a beautiful standalone implementation that ignores the real repository.

## Practical Patterns

### Architecture Brief

- Goal: what product or technical outcome this supports.
- Current context: relevant existing modules, flows, contracts, and constraints.
- Drivers: quality attributes, risk, scale, security, reliability, team ownership, and timeline.
- Proposed structure: modules, boundaries, data ownership, dependency direction, and runtime flow.
- Contracts: APIs, functions, events, schemas, and external systems.
- Operational plan: configuration, observability, tests, rollout, migration, and recovery.
- Decisions: what was chosen, rejected, and why.
- Open questions: what blocks implementation and what can be resolved later.

### Module Contract

- Name and responsibility.
- Owner or caller.
- Public API.
- Inputs and outputs.
- Side effects.
- Error semantics.
- Data ownership.
- Dependencies allowed.
- Dependencies forbidden.
- Tests required.
- Observability required.
- Examples of correct use.

### Feature Slice Structure

- Route or entry point.
- UI or presentation layer when applicable.
- Application use case or action.
- Domain logic or state transition.
- Data access adapter.
- External service adapter.
- Validation and permission checks.
- Tests at behavior, integration, and critical journey levels.
- Telemetry and audit points.

### Boundary Decision Questions

- Will this code change for the same reasons as nearby code?
- Does it need a different owner, release cadence, scale profile, security boundary, or reliability target?
- Does it own different data?
- Does it need a stable public contract?
- Would splitting it reduce complexity or only move complexity into coordination?
- Can it be tested and deployed independently enough to justify the split?

### API Contract Checklist

- Resource or action name.
- Request and response schema.
- Validation rules.
- Authentication and authorization.
- Idempotency.
- Pagination, filtering, sorting, and search.
- Error response shape.
- Versioning and compatibility.
- Rate limits and timeouts.
- Observability and audit.
- Client migration path.

### Decision Record

```text
Title:
Status:
Context:
Decision:
Options considered:
Consequences:
Revisit when:
```

### Refactoring Plan

- Map current behavior.
- Add characterization tests.
- Identify the smallest boundary to move.
- Create the new interface.
- Move callers gradually.
- Keep compatibility during the transition.
- Remove old path after verification.
- Update docs, tests, and telemetry names.

### Architecture Review Pass

- What is the core domain boundary?
- What are the public contracts?
- What owns the data?
- Which dependencies are allowed?
- What happens when a dependency fails?
- How is the system tested?
- How is the system observed in production?
- How is the change rolled out and reversed?
- What decision would be expensive to undo?

## Anti-Patterns

- Choosing architecture by trend instead of product drivers.
- Creating folders before understanding boundaries.
- Splitting into microservices before the domain, data ownership, and deployment needs are clear.
- A "shared" package that becomes a dumping ground for unrelated helpers.
- Business rules scattered across controllers, components, database triggers, and background jobs.
- Framework, ORM, or SDK details leaking into every layer.
- Two modules or services writing the same data without an ownership rule.
- API contracts that mirror database tables without user or integration semantics.
- Events with no schema, no owner, no retry behavior, and hidden required consumers.
- Global mutable state that makes tests order-dependent.
- Configuration read from random files or environment variables throughout the code.
- Secrets in code, logs, fixtures, screenshots, or client-side bundles.
- Catch-all error handling that hides root causes and gives users no recovery path.
- Retry logic on non-idempotent operations.
- Tests coupled to private implementation details.
- End-to-end tests used as the only safety net.
- Refactors that change behavior without tests or migration notes.
- Rewrites that underestimate migration, compatibility, and dual-maintenance cost.
- Documentation that describes an ideal architecture the code no longer follows.
- AI-generated code that fits the prompt but not the repository.

## Review Checklist

- [ ] The existing architecture and local conventions were inspected first.
- [ ] The product goal and architectural drivers are explicit.
- [ ] The proposed structure is the smallest one that handles the real risk.
- [ ] Boundaries follow domain, ownership, data lifecycle, and change frequency.
- [ ] Dependency direction is clear and free of cycles.
- [ ] Domain logic is separated from framework and infrastructure details where it matters.
- [ ] Data ownership, lifecycle, migration, and rollback are defined.
- [ ] Public contracts are explicit and do not leak unstable internals.
- [ ] State and data flow can be traced through the system.
- [ ] Error handling covers validation, permissions, dependency failure, timeout, retry, and partial success.
- [ ] Security boundaries, trusted sides, and sensitive data handling are concrete.
- [ ] Configuration is explicit, validated, and separated from code.
- [ ] New dependencies are justified and isolated when appropriate.
- [ ] Async work has idempotency, retry, progress, and failure handling.
- [ ] Observability answers whether the system is working and where it fails.
- [ ] Tests protect behavior, contracts, and boundaries without becoming brittle.
- [ ] Rollout, migration, compatibility, and recovery are considered for risky changes.
- [ ] Significant decisions are recorded briefly.
- [ ] Docs and diagrams match the code names and current behavior.
- [ ] The final implementation fits the real repository, not a generic template.

## Prompt Hooks

Use these as compact instructions when applying the pack:

```text
Before coding, analyze the existing repository architecture. Identify the affected modules, boundaries, data ownership, dependency direction, contracts, state flow, error paths, tests, observability, rollout risk, and the smallest safe implementation plan.
```

```text
Design this feature's code architecture: state the architectural drivers, choose the smallest sufficient structure, define modules and contracts, explain data ownership and dependency direction, list tests, and call out migration or rollout risks.
```

```text
Review this code change for architecture quality: coupling, cohesion, dependency cycles, framework leakage, data ownership, hidden state, error handling, configuration, security boundaries, async behavior, test coverage, observability, and rollback risk.
```

