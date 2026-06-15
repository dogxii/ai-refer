# Frontend Architecture

## Purpose

This pack helps AI agents design, implement, refactor, and review frontend architecture for web applications so routes, components, state, data fetching, rendering, accessibility, performance, and tests fit together coherently.

## When To Use

- Use this pack before creating or restructuring a frontend web app, feature area, page group, component system, data-fetching layer, state model, or form workflow.
- Use this pack when an AI-generated frontend works in a demo but becomes hard to extend, test, or connect to real data.
- Use this pack when deciding where state should live, where data should load, how routes should be organized, or how components should be split.
- Use this pack when reviewing frontend changes that affect routing, rendering, hydration, caching, forms, accessibility, performance, or test strategy.
- Pair this pack with `code.code-architecture` for system boundaries and with UI packs for visual and interaction quality.
- Do not use this pack to force a complex architecture onto a static page, small prototype, or local visual tweak.
- Do not use this pack as a replacement for framework-specific official documentation or an existing project architecture guide.

## Core Principles

- Frontend architecture is the structure that connects user workflows, routes, rendering, state, data, components, and experience quality.
- A route is not only a URL. In many apps it is also a layout boundary, data boundary, loading boundary, error boundary, permission boundary, and analytics boundary.
- State architecture matters more than the state library. Local state, URL state, form state, server state, shared UI state, and persisted state have different lifecycles.
- Components should be split by responsibility, reuse, state ownership, and change frequency, not by arbitrary line count.
- Keep server concerns on the server when the framework supports it: secrets, privileged data access, heavy computation, and initial data loading.
- Keep client code focused on interaction, browser APIs, optimistic feedback, local state, and progressive enhancement.
- The design system should be a constraint and accelerator, not a folder of copied styles.
- Accessibility and performance are architectural concerns because late fixes often require changing structure.
- Tests should protect user behavior, contracts, and state transitions, not private implementation details.
- The best frontend architecture lets a maintainer answer: where does this page load data, where does state live, what can fail, and how is the user protected?

## Rules For AI Agents

### 1. Inspect The Frontend Stack First

- Identify the framework, router, rendering mode, styling approach, component library, state tools, data-fetching tools, form tools, build tool, test tools, and deployment target.
- Find existing conventions for routes, layouts, components, hooks, services, stores, API clients, schemas, errors, loading states, and tests.
- Prefer the project's current architecture when it is coherent and safe.
- Name gaps before adding a new abstraction.
- Do not introduce a new state library, router, UI kit, styling system, or data-fetching tool without a concrete need.

### 2. Start From User Flows And Information Architecture

- Map the main tasks, entry points, route hierarchy, navigation model, and completion states before organizing files.
- Keep routes aligned with user-recognizable product areas.
- Use nested layouts or page shells for shared navigation, filters, object context, and repeated workflow structure.
- Keep destructive, administrative, billing, public, authenticated, and permission-sensitive flows clearly separated.
- Include empty, loading, error, no-access, and not-found states at the route or layout level where users encounter them.
- Do not build a route tree that only mirrors technical folders while hiding the product workflow.

### 3. Treat Routes As Ownership Boundaries

- Decide which route owns data loading, mutation entry points, layout state, page metadata, error handling, and analytics.
- Keep route-level data close to the route or route module when the framework supports it.
- Use shared loaders, query functions, or services when multiple routes need the same stable contract.
- Keep route params typed and validated before they drive API calls or database queries.
- Use route-level error boundaries for failures users can recover from locally.
- Do not fetch the same required data independently in many child components when a route or parent boundary should own it.

### 4. Choose Rendering Strategy Intentionally

- Use static rendering for stable public content, documentation, marketing content, and pages that can be regenerated safely.
- Use server rendering for personalized, SEO-sensitive, authenticated, or initial-data-heavy pages when supported.
- Use client rendering for highly interactive experiences, local-only tools, browser-only APIs, and screens where immediate interactivity is the main value.
- Use streaming, suspense, skeletons, or progressive disclosure when data arrives at different speeds.
- Keep secrets, privileged data access, and heavy server work out of client bundles.
- Minimize client-side JavaScript for mostly read-only screens.
- Do not make every component client-side because one child needs interaction.

### 5. Classify State Before Choosing Tools

- Use local component state for ephemeral UI details used in one small area.
- Use URL state for shareable, bookmarkable, back-button-sensitive state such as search, filters, sort, selected tab, pagination, and view mode.
- Use form state for draft input, validation, dirty tracking, touched fields, submission status, and recovery.
- Use server state tools or route data for remote data that can become stale, be shared by other users, be cached, or require revalidation.
- Use shared client state for cross-page UI state, client-only workflows, or global product state that cannot live in the URL or server cache.
- Use persisted local state only when the user benefits from state surviving reloads or offline use.
- Do not put every piece of state into a global store.

### 6. Keep State Minimal And Non-Contradictory

- Store the smallest source of truth and derive the rest during render or selection.
- Group state that always changes together.
- Avoid duplicate state that must be manually synchronized.
- Avoid state shapes that can contradict themselves.
- Normalize collections when many items are updated independently.
- Keep selected IDs instead of duplicating selected objects when the object already exists in a cache or collection.
- Do not store derived labels, counts, permissions, or filtered lists unless caching them solves a measured problem.

### 7. Separate Server State From Client UI State

- Treat server state as asynchronously fetched, cached, invalidated, and potentially stale.
- Define query keys, cache scope, freshness, invalidation, retries, pagination, and background refresh deliberately.
- Keep server state updates tied to mutations and route transitions.
- Invalidate or update the right cached data after mutations.
- Show pending, refreshing, empty, error, stale, and partial states clearly.
- Do not mirror server data into a global client store just to make it accessible.

### 8. Design Mutations As User Workflows

- Define validation, permission checks, submission trigger, pending state, optimistic update, success state, error state, retry, cancellation, and rollback.
- Use idempotency for actions users might repeat, retry, or submit under bad networks.
- Preserve user input after validation or network errors.
- Disable, debounce, queue, or coalesce actions when repeated clicks would create duplicate work.
- Make destructive and irreversible mutations explicit and recoverable when possible.
- Do not treat a mutation as only an API call hidden behind a button handler.

### 9. Build Components Around Responsibility

- Keep components focused on one responsibility: layout, visual primitive, input control, data display, workflow section, or integration boundary.
- Split when a component mixes unrelated state, unrelated rendering branches, unrelated data sources, or unrelated reasons to change.
- Keep low-level components reusable and controlled by explicit props.
- Keep feature components close to the feature when they depend on product context.
- Use composition before adding boolean prop combinations that create many hidden variants.
- Do not create a shared component until at least two real use cases prove the shared contract.

### 10. Keep Design System Usage Consistent

- Prefer existing tokens, primitives, components, icons, spacing, typography, color, motion, and interaction patterns.
- Wrap third-party UI components when the project needs a stable local API or accessibility fixes.
- Centralize design tokens and avoid hardcoded one-off visual values in feature code.
- Define component variants for size, tone, state, density, and intent.
- Keep visual states complete: default, hover, focus, active, disabled, loading, selected, error, success, empty, and read-only.
- Do not bypass the design system because a generated screen looks prettier in isolation.

### 11. Make Forms First-Class Architecture

- Choose form strategy by complexity: simple native form, controlled fields, schema-driven validation, multi-step workflow, autosave draft, or offline queue.
- Keep validation rules shared between client and server when correctness matters.
- Separate field state, submission state, server errors, and business-rule errors.
- Associate errors with fields and keep a page-level summary for long forms.
- Support keyboard navigation, screen reader labels, autocomplete, dirty-state warnings, and input preservation.
- Do not scatter form validation across input components, submit handlers, API clients, and server responses without a clear contract.

### 12. Treat Accessibility As Structure

- Use semantic HTML before ARIA.
- Preserve keyboard operation for all interactive controls.
- Manage focus when opening, closing, submitting, navigating, or showing validation errors.
- Ensure modals, popovers, menus, tabs, comboboxes, and toasts have correct roles, focus behavior, dismissal, and screen reader announcements.
- Keep label, description, error, and helper text relationships explicit.
- Do not implement custom controls unless the project can support their accessibility behavior.

### 13. Make Performance Budgets Architectural

- Decide what must be fast: first load, route transition, input response, data refresh, animation, search, or batch interaction.
- Reduce unnecessary client JavaScript through server rendering, code splitting, lazy loading, and avoiding oversized dependencies.
- Prevent layout shifts by reserving space for images, media, ads, charts, and dynamic content.
- Avoid expensive render loops, unnecessary context updates, repeated selectors, and uncontrolled re-fetching.
- Virtualize only when lists are large enough to justify the complexity.
- Measure real user experience where possible: loading, interactivity, visual stability, errors, and abandoned flows.
- Do not optimize micro-renders while shipping excessive JavaScript, unstable layout, or slow data waterfalls.

### 14. Prevent Data Waterfalls

- Fetch data at the highest useful boundary when it is required for initial render.
- Fetch independent data in parallel.
- Use preloading, prefetching, streaming, or suspense when the framework supports it and the user journey benefits.
- Avoid child components starting required network requests only after parent render when the dependency is known earlier.
- Split slow optional sections from critical content.
- Do not show a full-page spinner when only one region is waiting.

### 15. Design Loading, Empty, And Error Boundaries

- Put loading UI at the smallest boundary that preserves page context.
- Use skeletons only when shape and timing are predictable.
- Show empty states that explain why there is no data and what the user can do next.
- Distinguish not found, no access, offline, timeout, validation, conflict, and unexpected errors.
- Provide retry, back, contact support, reset filters, or recover draft actions when useful.
- Do not let every failure collapse into a generic toast.

### 16. Keep Styling Scalable

- Choose one primary styling strategy and follow it consistently.
- Use tokens or variables for color, spacing, typography, radius, shadow, z-index, breakpoints, and motion.
- Keep responsive rules close to the component or layout they affect.
- Avoid global CSS that silently changes unrelated components.
- Define layering rules for headers, sidebars, modals, popovers, toasts, and sticky elements.
- Do not solve layout with arbitrary margins that break across screen sizes.

### 17. Handle Responsive And Adaptive Behavior Deliberately

- Define which layouts collapse, reflow, hide, pin, stack, or become drawers.
- Keep navigation, filters, tables, charts, and primary actions usable on target screen sizes.
- Use container-aware layout where component context matters more than viewport width.
- Preserve task continuity when switching between desktop and mobile layouts.
- Do not hide critical controls on smaller screens without an equivalent path.

### 18. Keep Browser And Runtime Boundaries Clear

- Guard browser-only APIs such as `window`, `document`, storage, geolocation, media, clipboard, and observers.
- Keep server-only code, secrets, filesystem access, and private environment variables out of browser bundles.
- Define how code behaves during SSR, hydration, prerendering, tests, and edge runtimes.
- Avoid hydration mismatches by making time, randomness, locale, and user-specific values deterministic across boundaries.
- Do not assume a component always runs in the browser just because it renders UI.

### 19. Plan Offline And Persistence Only When It Matters

- Use persistent local storage for user-beneficial recovery, preferences, drafts, offline queues, or cached read experiences.
- Define storage schema, versioning, quota, eviction, privacy, encryption needs, and clear/reset behavior.
- For service workers, define caching strategy by asset or request type: cache-first, network-first, stale-while-revalidate, or no-store.
- Make offline UI honest about what is available, stale, queued, or failed.
- Do not add offline caching that can serve unsafe stale data or hide failed mutations.

### 20. Test User Behavior And Frontend Contracts

- Test component behavior through accessible roles, labels, text, and user events.
- Test route behavior, loaders, actions, redirects, permissions, and error boundaries when routing owns data.
- Test state transitions, form validation, optimistic updates, and cache invalidation.
- Use visual or story-based tests for important design system components and hard-to-reach UI states.
- Use end-to-end tests for critical flows that cross routes, authentication, data persistence, and browser behavior.
- Avoid tests that assert private hook calls, internal component structure, CSS implementation details, or snapshots with no behavioral meaning.

### 21. Make Frontend Observability Useful

- Track route load failures, API failures, mutation failures, client exceptions, performance metrics, and key user flow completion.
- Include route, feature, request ID, release version, and safe diagnostic context where possible.
- Log enough to debug user impact without collecting unnecessary personal data.
- Connect frontend events to product success metrics and backend traces when relevant.
- Do not add analytics that observe clicks without explaining success, failure, abandonment, or quality.

### 22. Keep AI-Generated Frontend Changes Grounded

- Before coding, summarize the existing frontend architecture and selected pack guidance.
- Reuse existing routes, components, hooks, schemas, stores, query helpers, styling utilities, and test patterns.
- Add the smallest new abstraction that makes the feature easier to build and maintain.
- Include realistic states and data variation, not only a happy-path static mock.
- After coding, review rendering boundaries, state placement, data loading, accessibility, performance, tests, and failure paths.
- Do not produce a visually complete screen with fake state, fake data, no contracts, and no recovery behavior.

## Practical Patterns

### Frontend Architecture Brief

- Product area and user workflow.
- Routes and layouts affected.
- Rendering model.
- Data ownership and data-fetching boundary.
- State categories and where each state lives.
- Component boundaries.
- Mutation workflows.
- Loading, empty, error, permission, and offline states.
- Accessibility requirements.
- Performance risks.
- Tests and observability.
- Rollout or migration notes.

### State Placement Matrix

- Local component state: transient UI inside one component or small subtree.
- URL state: shareable, bookmarkable, back-button-aware state.
- Form state: draft values, validation, submission, dirty tracking, and recovery.
- Server state: remote data with cache, stale time, revalidation, mutation, and invalidation.
- Shared client state: cross-route UI state or client-only workflow state.
- Persistent local state: preferences, drafts, offline queues, and recoverable local work.

### Route Module Pattern

- Route params and validation.
- Data loader or query contract.
- Permission check.
- Layout and page component.
- Loading boundary.
- Error boundary.
- Mutation actions.
- Metadata.
- Analytics event boundary.
- Tests for success, empty, no-access, not-found, and failure cases.

### Component Layer Pattern

- Design primitives: buttons, inputs, icons, typography, layout utilities.
- Design system components: accessible reusable components with variants.
- Feature components: product-specific UI close to the feature.
- Route components: data, layout, permissions, and workflow orchestration.
- Integration adapters: API, storage, browser APIs, analytics, and third-party SDKs.

### Mutation Workflow Pattern

- Validate input.
- Confirm permission.
- Start pending state.
- Optionally apply optimistic UI.
- Send mutation with idempotency or duplicate protection when needed.
- Handle success and update or invalidate data.
- Handle validation, conflict, permission, network, and unexpected errors.
- Roll back optimistic state when needed.
- Announce result accessibly.

### Frontend Test Stack

- Unit tests for pure helpers, formatters, reducers, selectors, schemas, and state machines.
- Component tests for interactive behavior and accessibility semantics.
- Route or integration tests for loaders, actions, redirects, and error boundaries.
- Visual tests for design system states and high-value UI surfaces.
- End-to-end tests for critical user journeys.

### Foldering Questions

- Does this code belong to one route, one feature, the design system, app shell, infrastructure, or shared domain logic?
- Will it change with product behavior, visual system changes, API changes, or framework changes?
- Does it depend on user context, data fetching, permissions, browser APIs, or only props?
- Is the intended caller local, feature-wide, app-wide, or external?
- Would moving it to shared code clarify ownership or create a dumping ground?

## Anti-Patterns

- Choosing a state library before classifying state.
- Putting server data into a global client store by default.
- Duplicating state across URL, form, cache, and component state without a synchronization rule.
- Fetching required route data inside deeply nested visual components.
- Every page showing a full-screen spinner for small region updates.
- Components with many boolean props that secretly encode many variants.
- A shared component folder full of one-off feature code.
- Styling that bypasses tokens and design system components.
- Custom controls with incomplete keyboard or screen reader behavior.
- Forms with validation split across many hidden places.
- Catch-all error toasts with no route-level recovery.
- Hydration mismatches caused by time, randomness, locale, or browser-only APIs.
- Client bundles containing server secrets or unnecessary heavy dependencies.
- Caching without freshness, invalidation, or mutation rules.
- Offline support that hides stale data or failed writes.
- Snapshot tests that approve broken behavior.
- End-to-end tests used as the only frontend safety net.
- Analytics events that collect noise but cannot explain success or failure.
- AI-generated screens that look polished but contain fake data, no edge states, and no integration path.

## Review Checklist

- [ ] The current frontend stack and local conventions were inspected.
- [ ] Routes match user workflows and product information architecture.
- [ ] Route boundaries define layout, data, loading, error, permission, and analytics ownership where relevant.
- [ ] Rendering strategy is intentional and keeps server-only work out of the client.
- [ ] State is classified into local, URL, form, server, shared client, or persisted state.
- [ ] State is minimal, non-contradictory, and not duplicated without a rule.
- [ ] Server state has cache, freshness, invalidation, retry, and mutation behavior.
- [ ] Mutations include validation, pending, optimistic behavior, success, error, retry, and rollback as needed.
- [ ] Component boundaries follow responsibility, reuse, state ownership, and change frequency.
- [ ] Design system tokens, components, variants, and states are used consistently.
- [ ] Forms have clear validation, submission, error, accessibility, and recovery behavior.
- [ ] Keyboard, focus, labels, announcements, and semantic structure are handled.
- [ ] Performance risks are addressed at routing, rendering, bundle, data, and layout levels.
- [ ] Required data does not create avoidable waterfalls.
- [ ] Loading, empty, error, no-access, offline, and partial states are designed.
- [ ] Styling is tokenized, responsive, and does not depend on fragile one-off layout hacks.
- [ ] Browser-only and server-only code are separated correctly.
- [ ] Offline or persistence behavior is explicit when present.
- [ ] Tests cover behavior, state transitions, route contracts, visual states, and critical flows.
- [ ] Observability can explain frontend errors, route failures, performance, and user-flow abandonment.
- [ ] The final implementation fits the repository instead of a generic frontend template.

## Prompt Hooks

Use these as compact instructions when applying the pack:

```text
Before implementing this frontend feature, analyze the existing stack, route structure, rendering model, state categories, data-fetching boundaries, component ownership, design system usage, accessibility, performance risks, tests, and observability.
```

```text
Design the frontend architecture for this feature: routes, layouts, rendering strategy, state placement, server-state handling, mutation workflow, component boundaries, loading/error/empty states, accessibility, performance, tests, and rollout notes.
```

```text
Review this frontend change for architecture quality: route ownership, state placement, data loading, cache invalidation, component boundaries, forms, accessibility, performance, browser/server boundaries, tests, and observability.
```

