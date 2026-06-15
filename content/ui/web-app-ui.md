# Web App UI

## Purpose

This pack helps AI agents design and implement credible web application interfaces for SaaS products, dashboards, admin panels, internal tools, CRMs, analytics apps, and data-heavy workflows.

## When To Use

- Use this pack for web apps where users manage work, inspect data, configure systems, review records, or complete repeated operational tasks.
- Use this pack for dashboards, tables, lists, filters, forms, settings, admin panels, inboxes, review queues, reporting tools, and multi-step workflows.
- Use this pack when an AI-generated web app feels like a landing page, portfolio mockup, or decorative card wall instead of a usable product.
- Do not use this pack for marketing websites, editorial pages, games, immersive visual experiences, or consumer social feeds unless the task explicitly includes operational web-app workflows.
- Pair this pack with `ui.ui-ux-fundamentals` for general visual design and with a product-specific design system when one exists.

## Core Principles

- Web apps are work surfaces. Prioritize clarity, speed, repeatability, state visibility, and recoverability over spectacle.
- The first screen should answer: where am I, what changed, what needs attention, and what can I do next?
- Information architecture is more important than decoration. Navigation, object models, and workflow boundaries should be obvious.
- Dense does not mean cramped. Expert tools can show a lot of information while preserving scan paths, alignment, and readable hierarchy.
- Tables, filters, search, sorting, saved views, and bulk actions are primary product features, not afterthoughts.
- Dashboards should support decisions. A chart that does not drive interpretation or action is ornamental.
- A polished web app includes permissions, empty states, loading states, errors, destructive confirmations, undo or recovery, and realistic data variation.

## Rules For AI Agents

### 1. Choose The Product Shell First

- Start with a stable app shell: sidebar or top navigation, page header, content region, and optional utility area.
- Use a left sidebar for multi-section products with many persistent destinations.
- Use top navigation for smaller apps, cross-product areas, or broad sections with fewer destinations.
- Keep account, organization switcher, notifications, help, and global search in predictable utility positions.
- Do not invent a hero section for an operational app.
- Do not hide primary workflow destinations behind a hamburger menu on desktop.

### 2. Make Page Headers Operational

- Every page should have a clear title, object context, and primary action.
- Put page-level actions in the header or a predictable toolbar, not scattered across decorative cards.
- Use breadcrumbs when users navigate through nested objects or deep admin structures.
- Show important scope controls near the title: workspace, date range, environment, project, region, or segment.
- Keep page header height compact unless the page needs a summary block.
- Do not use oversized marketing copy inside app pages.

### 3. Match Layout To Workflow

- Use tables for finding, comparing, auditing, editing, and acting on many records.
- Use cards for independent objects with mixed content or visual identity.
- Use split panes when users need to browse a list and inspect details without losing place.
- Use wizards only when the task must be sequenced or has meaningful dependencies.
- Use dashboards for monitoring and diagnosis, not for every home page.
- Use settings pages for configuration, permissions, integrations, billing, and defaults.
- Do not squeeze unrelated workflows into one screen just because there is desktop space.

### 4. Design Tables Around User Tasks

- Before designing a table, identify whether users need to find records, compare values, inspect or edit one record, or act on selected records.
- Put the primary identifier column first and keep it readable.
- Make status, owner, date, amount, priority, and risk columns visually scannable.
- Align numeric values and comparable units consistently.
- Use sorting on columns where order matters.
- Use row expansion, side panels, or detail pages for content that would make rows too tall.
- Avoid infinite horizontal sprawl. For many columns, use column customization, frozen key columns, responsive priority, or detail views.
- Do not replace a table with cards when users need comparison.

### 5. Make Table Actions Predictable

- Put row-specific actions on the row: inline button, overflow menu, or trailing action area.
- Put table-wide actions in the toolbar: search, filters, export, customize columns, refresh, import, and create.
- Put bulk actions in a contextual bar that appears after selection.
- Disable or explain bulk actions that do not apply to the selected items.
- Provide "select all on page" and "select all matching results" only when the backend semantics are clear.
- After a bulk action, show confirmation, progress, partial failure handling, and selection reset.
- Do not mix single-row actions and bulk actions in the same visual slot.

### 6. Keep Search, Filters, And Views Visible

- Use search for known-item lookup.
- Use filters for narrowing structured attributes.
- Use sort for ordering by priority, recency, amount, status, or name.
- Show active filters as chips, tokens, or readable summaries.
- Provide a clear reset action.
- Keep common filters visible; hide advanced filters behind a panel or popover only when the filter set is large.
- Support saved views when users repeatedly return to the same filtered state.
- Show zero-result recovery: broaden filters, clear filters, check spelling, or create a new record when appropriate.
- Do not hide important filters behind a vague funnel icon without labels in expert workflows.

### 7. Use Dashboard Cards Carefully

- A dashboard card should answer a question, show a trend, reveal a problem, or link to a workflow.
- Start with a few high-signal metrics, not a wall of small charts.
- Pair metrics with comparison context: previous period, target, threshold, segment, or anomaly.
- Put the most urgent or decision-driving indicators above the fold.
- Use consistent card structure: label, value, context, trend, and action or link when useful.
- Avoid charts that cannot be interpreted without reading a legend, tooltip, or long explanation.
- Do not make every page a grid of KPI cards.

### 8. Make Charts Actionable

- Choose chart type by question: trend, comparison, composition, distribution, correlation, or status.
- Use tables for exact lookup and charts for pattern recognition.
- Label axes, units, time ranges, and segments.
- Use color sparingly and consistently across charts.
- Highlight exceptions, thresholds, and selected series.
- Provide drill-down or source data when users need to investigate.
- Do not use decorative 3D charts, unlabeled sparklines, or arbitrary gradients.

### 9. Design Forms For Enterprise Reality

- Group fields by decision or object model, not by arbitrary columns.
- Put required fields, validation rules, and helper text where users need them.
- Use inline validation and preserve user input after errors.
- Use progressive disclosure for advanced, dangerous, or rarely changed settings.
- Support read-only, disabled, pending, saving, error, and success states.
- For destructive or high-impact changes, show consequences and recovery path.
- Do not make every form two columns. Use columns only when fields are short, related, and easy to scan.

### 10. Handle Permissions And Roles Explicitly

- Design what users see when they lack permission: disabled action, hidden action, request access, or explanation.
- Show role, workspace, organization, environment, or tenant context when mistakes would be costly.
- Mark sensitive, public, shared, billable, irreversible, or production-impacting actions clearly.
- Avoid showing controls that users cannot use unless the disabled state teaches them how to gain access.
- Do not let permission errors appear only after submit.

### 11. Support Loading, Empty, Error, And Partial Data

- Use skeletons or structured placeholders for predictable content.
- Use progress indicators for long operations.
- Use empty states to explain what is missing and provide the next useful action.
- Distinguish first-use empty, filtered empty, cleared empty, permission empty, and failed-load states.
- For partial data, show what loaded, what failed, and how to retry.
- Do not show a blank table, blank chart, or generic "no data" message without context.

### 12. Respect Density And Scan Paths

- Use compact density for expert, repeated workflows only when labels, targets, and states remain readable.
- Use comfortable density for onboarding, mixed-skill users, forms, and review flows.
- Keep row heights, padding, labels, icons, and controls consistent within a page.
- Use alignment and subtle dividers to create scan paths.
- Avoid large decorative whitespace that forces users to scroll through operational content.
- Avoid cramped toolbars where controls become visually indistinguishable.

### 13. Make Responsive Behavior Product-Aware

- Desktop web apps should not simply collapse into a marketing-style mobile page.
- Define what happens to sidebars, tables, filters, action bars, and split panes at smaller widths.
- Use responsive priority for columns: keep identifiers, status, and primary action before secondary metadata.
- Convert complex tables into stacked rows, list summaries, or detail-first views on mobile.
- Keep destructive and primary actions reachable but not accidentally triggered.
- If the workflow is desktop-only, state that clearly and still prevent broken layouts.

### 14. Provide Orientation And Wayfinding

- Highlight the active section and active sub-view.
- Keep object names, IDs, status, and parent context visible on detail pages.
- Use breadcrumbs, tabs, page titles, and side navigation consistently.
- Preserve list position and filters when users open and return from detail views.
- Make recently changed, unsaved, syncing, archived, deleted, or draft states visible.
- Do not make users rely on browser history to understand where they are.

### 15. Design Notifications And Feedback By Severity

- Use inline messages for local field or row problems.
- Use toasts for short-lived success confirmations and reversible actions.
- Use banners for page-level warnings, incidents, account issues, or important system states.
- Use modals for decisions that must interrupt the workflow.
- Show background job status for imports, exports, syncs, reports, and batch operations.
- Do not use toast-only feedback for failures that users must fix.

### 16. Keep Visual Style Quiet And Systematic

- Use restrained color, typography, radius, borders, and shadows.
- Prefer clear surfaces and separators over heavy card decoration.
- Use icons to improve recognition, not to decorate every label.
- Keep buttons and controls aligned with a component system.
- Avoid one-note palettes and oversized gradients.
- Do not put UI cards inside page-section cards.
- Operational tools should feel calm, durable, and easy to scan.

### 17. Implement Visible Controls

- In coded prototypes, make visible tabs, filters, search, sorting, pagination, row selection, bulk actions, menus, drawers, modals, forms, and toggles functional.
- Use realistic mock data with long names, missing values, different statuses, dates, currencies, counts, and error cases.
- Preserve state in the URL or local UI when the workflow implies shareable views or back navigation.
- Use accessible labels, focus states, keyboard navigation, and semantic table markup where possible.
- Do not ship a dashboard where filters, charts, and row actions are decorative.

## Practical Patterns

### App Shell

- Sidebar: product sections, nested groups, active state, collapse behavior, workspace switcher.
- Top bar: global search, create action, notifications, help, user menu.
- Page header: title, context, primary action, secondary actions, breadcrumbs or tabs.
- Content area: table, dashboard, detail view, form, split pane, or workflow.

### Table View

- Header: title, count, create action.
- Toolbar: search, filters, saved views, export, refresh, column settings.
- Table: selectable rows, sortable headers, status chips, compact metadata, row actions.
- Footer: pagination, result count, page size.
- States: loading skeleton, empty, zero results, error, partial data, selected rows.

### Dashboard View

- Scope controls: date range, segment, workspace, region, product, environment.
- Summary metrics: high-signal cards with comparison context.
- Charts: trend, breakdown, exception, source table, drill-down.
- Attention area: alerts, anomalies, failed jobs, overdue tasks.
- Follow-up actions: investigate, export, create report, open filtered table.

### Detail View

- Identity: object name, ID, status, owner, timestamps.
- Primary actions: edit, approve, assign, archive, retry, export, delete.
- Content: overview, activity, related records, permissions, history.
- Navigation: tabs or sections when the object is complex.
- Recovery: audit trail, undo, restore, retry, contact owner.

### Settings View

- Group settings by product mental model.
- Use clear current values and save behavior.
- Separate dangerous settings.
- Show permission and plan limits.
- Provide test connection, verify, preview, or dry-run actions for integrations.

## Anti-Patterns

- Treating a SaaS app like a landing page with a hero, slogans, and oversized decorative sections.
- Dashboard made of many cards with no decision hierarchy.
- Tables without search, sort, filters, pagination, empty states, or row actions.
- Filters hidden so well that users cannot understand the current view.
- Bulk actions with unclear selection semantics.
- Charts without labels, units, date ranges, or interpretation.
- Blank empty states and generic "No data" messages.
- Form pages that lose user input after validation errors.
- Permission errors shown only after submit.
- Sidebars with unclear active state or unstable navigation.
- Huge cards inside cards, especially around tables and dashboards.
- Mobile breakpoints that simply squeeze desktop tables until they become unreadable.
- Decorative icons, gradients, and shadows used to mask weak hierarchy.
- Static prototypes where visible controls do nothing.

## Review Checklist

- [ ] The interface uses an app shell appropriate to the product's information architecture.
- [ ] The page header explains location, scope, and primary action.
- [ ] The layout matches the workflow: table, dashboard, form, detail, split pane, or settings.
- [ ] Tables support finding, comparing, inspecting, editing, and acting on records.
- [ ] Search, filters, sorting, saved views, and reset behavior are visible and understandable.
- [ ] Bulk actions have clear selection semantics, feedback, and recovery.
- [ ] Dashboard cards and charts support decisions, not decoration.
- [ ] Forms preserve input, validate inline, and explain consequences.
- [ ] Permissions, roles, tenant context, and dangerous actions are explicit.
- [ ] Loading, empty, zero-result, error, partial-data, and success states are designed.
- [ ] Density supports scanning without cramped controls or wasted space.
- [ ] Responsive behavior is planned for sidebars, tables, filters, and actions.
- [ ] Navigation, active state, breadcrumbs, tabs, and return paths preserve orientation.
- [ ] Notifications match severity and do not hide fixable errors in transient toasts.
- [ ] Visual style is quiet, systematic, and componentized.
- [ ] Visible controls are functional in coded prototypes.

## Prompt Hooks

Use these as compact instructions when applying the pack:

```text
Design this as a real web application, not a marketing page. Use an appropriate app shell, compact page header, stable navigation, workflow-matched layout, functional controls, realistic data, and complete loading, empty, error, permission, selection, and success states.
```

```text
For tables and lists, support search, filters, sorting, saved views, pagination, row actions, bulk selection, contextual bulk actions, empty states, zero-result recovery, and realistic messy data.
```

```text
Review this SaaS/dashboard UI for operational credibility: app shell, page header, navigation, table UX, filter visibility, chart usefulness, density, permissions, feedback, responsive behavior, and whether visible controls actually work.
```

