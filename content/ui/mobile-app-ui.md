# Mobile App UI

## Purpose

This pack helps AI agents design and implement credible mobile app interfaces for native or native-like experiences.

## When To Use

- Use this pack for iOS, Android, React Native, Flutter, SwiftUI, Kotlin, mobile web apps, and mobile-first prototypes.
- Use this pack when generating mobile screens, app flows, onboarding, tabs, feeds, forms, settings, dashboards, commerce flows, or detail pages.
- Use this pack when reviewing an AI-generated mobile UI for professional quality.
- Do not use this pack as the only source for platform-specific production details. Check the current platform docs for exact component APIs, safe-area behavior, and accessibility requirements.
- Do not use this pack for desktop web, TV, game HUDs, kiosk interfaces, or watch interfaces unless the user explicitly wants a phone-like pattern.

## Core Principles

- Design for short, interrupted sessions. A phone UI must let users understand state, resume work, and complete common actions quickly.
- Start from the user's immediate task, not from decorative screen composition. Every screen needs one primary job.
- Respect platform conventions before inventing custom controls. Users bring expectations from iOS, Android, and other common apps.
- Reduce cognitive load. Mobile screens have less space, lower reading comprehension for dense content, and more physical input friction.
- Make primary actions reachable, legible, and forgiving. Touch accuracy, one-handed use, and accidental taps are part of the design problem.
- Keep navigation stable. Users should always know where they are, where they can go, and how to get back.
- Make interface state visible. Loading, saving, errors, success, permission denial, offline mode, and empty data all need designed states.
- Treat accessibility as a layout constraint, not a polish pass.

## Rules For AI Agents

### 1. Define The Mobile Job Before Drawing

- Identify the product type, primary user, platform target, and screen role.
- Write the screen's job in one sentence before designing it.
- Pick the primary action and make it visually dominant.
- Remove or defer anything that does not support the current screen job.
- If a mobile screen has more than one competing primary action, split the flow or create clear priority.

### 2. Use A Real Phone Frame Mentally

- Account for status bars, notches, dynamic islands, home indicators, gesture areas, and safe areas.
- Keep persistent navigation and bottom actions clear of system gesture zones.
- Avoid placing destructive or high-risk actions where accidental thumb taps are likely.
- Test the layout at narrow widths. A good mobile UI cannot depend on desktop-like horizontal space.
- For mobile web, treat browser chrome and keyboard appearance as layout pressure.

### 3. Choose Navigation By Information Architecture

- Use bottom navigation for 3-5 stable, top-level destinations that users switch between often.
- Use tabs or segmented controls for sibling views within the current section.
- Use a stack/back pattern for drill-down flows.
- Use drawers or hidden menus only for secondary destinations, infrequent settings, or large information architectures.
- Keep destination order and labels consistent across screens.
- Do not use bottom navigation for actions. Use it for places.
- Do not hide the only route to important content behind gestures.

### 4. Preserve Platform Expectations

- Prefer iOS-like patterns for iOS work and Material-like patterns for Android work.
- Use native-feeling bars, sheets, alerts, switches, pickers, menus, and date inputs unless the brief asks for a custom brand system.
- On iOS, avoid making Android-specific patterns feel pasted onto the platform.
- On Android, avoid copying iOS-only behavior when Material conventions are clearer.
- For cross-platform prototypes, use a neutral native-like style and avoid platform-specific flourishes that would mislead implementation.

### 5. Make Touch Targets Forgiving

- Use at least 44 pt for important iOS tap regions and around 48 dp for Android-like touch regions when possible.
- Treat 24 CSS px as an accessibility floor for pointer targets, not as a comfort target for phone UI.
- Expand the invisible hit area when the visible icon must stay small.
- Add spacing between adjacent interactive elements so nearby targets are not accidentally activated.
- Make list rows, cards, and settings items tappable as a whole when they represent one action.
- Never create tiny icon-only actions in dense rows without labels, spacing, or a larger tap region.

### 6. Design For The Thumb Zone

- Put frequent primary actions in reachable lower or central areas when the task benefits from one-handed use.
- Keep navigation and repeated actions close to the user's natural grip.
- Place rare, destructive, or confirmation actions away from accidental thumb paths.
- For long forms, use sticky bottom actions only when they do not cover required content or fields.
- If an action is at the top, provide a reachable alternative when it is frequent or flow-critical.

### 7. Use Hierarchy, Not Decoration

- Build hierarchy with size, weight, spacing, contrast, and position before adding color effects.
- Use one clear page title, one primary action style, and a small set of supporting text styles.
- Keep body text readable; do not shrink dense content to fit more onto one screen.
- Prefer clear sections and list rows over many floating cards.
- Use cards only when they group independent objects or summarize tappable records.
- Do not put cards inside cards.
- Avoid oversized hero areas in utility apps unless the app's core value is visual discovery or content immersion.

### 8. Make Content Scannable

- Put the most useful content first. Mobile users should not scroll past branding, illustrations, or welcome copy to reach the task.
- Replace long explanations with short labels, helper text, and progressive disclosure.
- Use lists for known, comparable items; use cards for browsable, visual, or mixed-content items.
- Keep list rows predictable: leading identity, primary label, secondary metadata, trailing status or action.
- Use thumbnails only when they improve recognition or decision-making.
- Do not waste first-screen space on uninformative artwork.

### 9. Keep Forms Short And Native

- Ask only for information needed now.
- Use the correct keyboard type, input mode, autocomplete, masks, pickers, and steppers.
- Keep labels visible. Do not rely on placeholder text as the only label.
- Validate inline when possible and explain recovery in plain language.
- Preserve entered data when validation fails or the user navigates back.
- Use camera, contacts, location, biometrics, QR scan, paste helpers, or saved values only when they genuinely reduce effort.
- Split long forms into logical steps only when each step has a clear purpose.

### 10. Treat Onboarding As A Delay To Value

- Let users experience value before forcing account creation when the core task does not require identity.
- Ask for permissions at the moment they are needed, with a short reason tied to the user's task.
- Make onboarding skippable unless it is legally, medically, financially, or operationally required.
- Do not explain obvious gestures or common controls.
- Use empty states and contextual tips to teach features inside the product instead of front-loading tutorials.

### 11. Provide Immediate Feedback

- Every tap should produce visible feedback: pressed state, progress, transition, selection, or disabled state.
- Use skeletons, optimistic updates, or local placeholders to reduce perceived waiting.
- Show saving and sync states when data persistence matters.
- Confirm high-risk actions and support undo where possible.
- Use motion to clarify state changes, not to decorate the interface.
- Respect reduced-motion preferences and avoid animation that blocks task completion.

### 12. Design All Important States

For every generated screen, consider:

- Default state.
- Loading state.
- Empty state.
- Error state.
- Offline or poor-network state.
- Permission-denied state.
- Disabled state.
- Selected state.
- Success or completion state.
- Long-content state.
- Keyboard-open state.

If the user asks for only one static screen, still include enough state hints in the component design that implementation will not invent them later.

### 13. Use Color Deliberately

- Use color to encode brand, hierarchy, status, and action priority.
- Do not rely on color alone to communicate meaning.
- Keep semantic colors consistent: success, warning, danger, info, selected, disabled.
- Avoid low-contrast text, faint gray labels, and pale controls on bright backgrounds.
- Use saturated accent color sparingly. If everything is accented, nothing is primary.
- For dark mode, design surfaces, borders, shadows, and text contrast explicitly instead of simply inverting colors.

### 14. Build A Small Type System

- Use a compact type scale: title, section heading, body, supporting text, caption.
- Keep line length short enough for phone reading.
- Use font weight changes sparingly; too many weights create noise.
- Use real text lengths, not perfect placeholder labels.
- Allow text expansion for localization, accessibility text scaling, and long user-generated content.
- Avoid fixed-height containers that clip larger text.

### 15. Make Icons Recognizable

- Use familiar symbols for common actions.
- Pair icons with labels when the meaning is not universal or the action is high value.
- Keep icon style consistent: stroke, fill, corner radius, optical size, and visual weight.
- Do not use novelty icons for core navigation.
- Do not make icon-only controls the main way users discover functionality.

### 16. Handle Lists, Feeds, And Dense Data Carefully

- Use enough spacing for scanability, but avoid desktop-dashboard density.
- Keep repeated items structurally identical so users learn the row pattern.
- Put the differentiating information near the start of each item.
- Support filtering, sorting, search, grouping, or pinned sections when lists grow.
- For mobile tables, avoid forcing a desktop table into a narrow viewport. Use stacked rows, column prioritization, comparison cards, or horizontal scrolling only when the task truly needs tabular comparison.
- Do not mix too many content formats in one feed unless the product is explicitly discovery-driven.

### 17. Make Search And Filters Task-Aware

- Use search when users know what they want.
- Use browse categories when users are exploring or do not know exact terms.
- Keep filters close to results and show active filters clearly.
- Provide useful zero-result recovery: spelling suggestions, broader categories, recent searches, or clear reset.
- Avoid hiding sort/filter behind ambiguous icons without labels.

### 18. Keep Permission, Privacy, And Trust Visible

- Explain why sensitive access is needed before the system prompt appears.
- Ask for the smallest permission that supports the task.
- Provide a fallback path when permission is denied.
- Mark private, synced, public, shared, paid, or destructive actions clearly.
- Never surprise users with account creation, subscription gates, notifications, contacts access, or location tracking.

### 19. Design For Accessibility From The First Pass

- Ensure text and controls can scale without breaking layout.
- Maintain sufficient contrast for text, icons, focus indicators, and disabled-but-readable content.
- Provide semantic labels for icons, fields, tabs, and custom controls.
- Keep focus order logical for keyboard, switch control, and screen-reader navigation.
- Do not depend only on gestures, color, tiny hit areas, hover states, or precise dragging.
- Avoid flashing, unexpected motion, and interaction patterns that trap users.

### 20. Implement Like A Real App, Not A Poster

- Use actual components, states, and data structures where implementation is requested.
- Avoid static images of UI controls.
- Make navigation, forms, tabs, filters, toggles, sheets, modals, and menus functional when they are visible.
- Use realistic mock data with messy lengths, missing values, and edge cases.
- Check mobile viewport screenshots before calling the UI done.

## Practical Patterns

### Common Screen Skeletons

- Home: top identity or title, primary content/feed, contextual action, stable navigation.
- Detail: title or object identity, key status, primary action, supporting sections, related metadata.
- Create/edit: clear title, grouped inputs, inline validation, persistent save action when needed.
- Search: visible input, recent queries or suggestions, results, empty recovery.
- Settings: grouped list rows, clear labels, current values, destructive actions separated.
- Onboarding: value preview, one decision per screen, skip path, contextual permission requests.
- Empty state: what happened, why it matters, primary next action, optional secondary action.

### Navigation Selection

- Top-level frequent sections: bottom navigation.
- Sibling filters or modes: segmented control or tabs.
- Deep object flow: stack navigation with back.
- Contextual options: action sheet, menu, or bottom sheet.
- Complex secondary structure: drawer, "More" tab, or settings hierarchy.
- Large-screen mobile/tablet adaptation: navigation rail or sidebar only when width supports it.

### Action Placement

- Primary flow action: bottom button, floating action button, or prominent inline button depending on context.
- Item-level action: trailing icon, swipe action, context menu, or row tap.
- Destructive action: separated, confirmed, and visually distinct.
- Repeated action across tabs: stable placement and wording.
- Optional advanced action: secondary text button or overflow menu.

### Feedback Patterns

- Tap: pressed state.
- Long operation: progress indicator or skeleton.
- Refresh: pull-to-refresh or visible reload.
- Save: optimistic update plus recovery path.
- Error: inline message near the problem plus a global summary only when needed.
- Permission denial: explanation plus settings or alternate path.
- Offline: cached content if available plus a visible offline indicator.

## Anti-Patterns

- Desktop dashboard squeezed into a phone screen.
- Bottom navigation with too many destinations or action buttons.
- A hamburger menu hiding primary app sections.
- Gesture-only navigation for essential actions.
- First launch blocked by forced login, permissions, or long onboarding before value is visible.
- Tiny icon-only controls with no labels and no expanded hit areas.
- Decorative illustration consuming the first screen of a task-focused app.
- Floating cards nested inside other cards.
- Low-contrast gray text used for important labels.
- Placeholder-only form labels.
- Error messages that only say "invalid" or use technical jargon.
- Loading spinners with no context for important content.
- Custom controls that look tappable but do not behave like platform controls.
- Inconsistent icon style, spacing, radius, type scale, or button treatment between screens.
- Fixed-height rows that clip larger text or long localized strings.
- Treating dark mode as a color inversion.
- Ignoring keyboard-open, empty, permission-denied, and offline states.
- Overusing motion, blur, glass effects, gradients, or shadows to hide weak hierarchy.

## Review Checklist

- [ ] The screen has one clear job and one primary action.
- [ ] The layout respects safe areas, system gesture zones, and keyboard-open states.
- [ ] Navigation matches the information architecture and stays consistent.
- [ ] Primary actions are reachable and touch targets are forgiving.
- [ ] Text hierarchy is readable without tiny fonts or clipped labels.
- [ ] Visual grouping follows content relationships, not decoration.
- [ ] Icons are recognizable; unclear icons have labels.
- [ ] Forms use proper labels, keyboard types, validation, and recovery.
- [ ] Loading, empty, error, offline, permission, disabled, selected, and success states have a plan.
- [ ] Color is not the only way meaning is communicated.
- [ ] The UI can handle long content, missing data, and accessibility text scaling.
- [ ] Onboarding and permission prompts happen only when they help the current task.
- [ ] Visible controls are functional in coded prototypes.
- [ ] The mobile screenshot looks like an app people could actually use, not a resized desktop page or portfolio poster.

## Prompt Hooks

Use these as compact instructions when applying the pack:

```text
Design this as a real mobile app screen. Start from the user's immediate task, choose platform-appropriate navigation, respect safe areas and thumb reach, use forgiving touch targets, keep hierarchy scannable, and include loading, empty, error, disabled, and success states where relevant.
```

```text
Review this mobile UI for app credibility: navigation stability, platform conventions, touch target size, thumb reach, text hierarchy, form usability, feedback states, accessibility, and whether the screen has one clear job.
```

```text
When implementing, make visible mobile controls functional: tabs, bottom navigation, forms, filters, sheets, menus, toggles, permission fallbacks, loading states, empty states, and error recovery.
```

