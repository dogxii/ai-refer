# UI UX Fundamentals

## Purpose

This pack helps AI agents apply core UI and UX principles before choosing platform-specific patterns.

## When To Use

- Use this pack before designing or reviewing any interface: web, mobile, desktop, dashboards, landing pages, tools, forms, or prototypes.
- Use this pack when a UI feels amateur, visually flat, confusing, overdecorated, or hard to scan.
- Use this pack when creating a design system, component set, screen, flow, or visual polish pass.
- Do not use this pack as a substitute for product strategy, user research, accessibility standards, or platform-specific guidelines.
- Do not use this pack to justify ornamental design that does not improve comprehension, action, or trust.

## Core Principles

- UI communicates through affordances, signifiers, hierarchy, grouping, feedback, and state. Text should not have to explain every interaction.
- UX quality comes from reducing uncertainty. Users should understand what matters, what is possible, what happened, and what to do next.
- Visual design is decision design. Size, spacing, color, position, contrast, and motion must express priority and relationships.
- Consistency is not sameness. Repeat patterns where users benefit from learning, and vary layout only when the task genuinely changes.
- Good UI makes the correct path obvious and the risky path deliberate.
- A polished interface is not one with more effects; it is one with fewer unresolved decisions.

## Rules For AI Agents

### 1. Start With Meaning Before Style

- Identify the user's goal, the screen's job, and the primary decision the user must make.
- Sort content into primary, secondary, supporting, and optional information before composing the layout.
- Do not choose colors, shadows, illustrations, or gradients until the information hierarchy is clear.
- If two elements compete for attention, decide which one matters more and make the other quieter.
- Remove decorative elements that do not improve recognition, trust, brand, hierarchy, or task completion.

### 2. Use Affordances And Signifiers

- Make interactive elements look interactive before hover or tap.
- Buttons should look pressable, links should look navigable, fields should look editable, and disabled items should look unavailable.
- Use shape, border, fill, label, icon, cursor, placement, and state to communicate what an element does.
- Do not rely on instruction text to compensate for unclear controls.
- If an element behaves like a button, style it like a button. If it only displays information, do not make it look tappable.

### 3. Create Hierarchy With Contrast

- Use size, weight, color, spacing, alignment, and position to show importance.
- Put the most important information where users look first.
- Make high-priority content larger, stronger, closer to the action, or more saturated.
- Make secondary metadata smaller, quieter, or grouped below the primary label.
- Avoid making every label bold, every card prominent, or every action colorful.
- If a screen looks flat, increase meaningful contrast instead of adding decoration.

### 4. Group Related Things

- Place related items close together and unrelated items farther apart.
- Use containers, section headers, dividers, background surfaces, or spacing only when they clarify relationships.
- Group controls with the content they affect.
- Keep labels near their values and errors near the field or control they explain.
- Do not use a card for every small piece of content. Use cards for independent objects or meaningful groups.

### 5. Use Grids As Guidance, Not A Costume

- Use grids for repeated content, responsive layouts, galleries, dashboards, and structured pages.
- Use fewer columns on narrower viewports and preserve content priority when the layout collapses.
- Align repeated elements so users can scan and compare.
- Do not force every creative or editorial layout into a rigid column grid when the content does not need it.
- Prefer consistent spacing rhythm over arbitrary pixel-perfect decoration.

### 6. Treat Spacing As Structure

- Use spacing to express relationships: tight spacing for related elements, larger spacing for section breaks.
- Keep a spacing scale and reuse it across components.
- Use 4 or 8 point increments when the project has no existing spacing system.
- Do not make all gaps equal. Equal gaps make hierarchy harder to read.
- Avoid cramped layouts that require borders and shadows to separate everything.

### 7. Build A Restrained Type System

- Most interfaces need one strong sans-serif family, not many fonts.
- Define a small scale: display or page title, section heading, body, supporting text, caption, and control label.
- Use line height intentionally. Dense labels can be tighter; paragraphs need more breathing room.
- Use font weight sparingly. If every element is bold, the user cannot see priority.
- Use real content lengths while designing. Placeholder-perfect text hides layout problems.
- Never shrink important text below comfortable reading size just to fit more content.

### 8. Use Color For Jobs

- Assign color roles: brand, primary action, selected state, success, warning, danger, info, background, surface, border, and text.
- Use saturated color where user attention or decision priority matters.
- Keep semantic colors stable across the product.
- Do not rely on color alone. Pair status color with label, icon, shape, or position.
- Avoid pale low-contrast text, especially for labels, helper text, disabled-but-readable content, and mobile UI.
- If everything is colorful, nothing is informative.

### 9. Design Dark Mode Separately

- Do not invert light mode colors.
- Use layered dark surfaces, readable contrast, adjusted semantic colors, and softer shadows or borders.
- Reduce pure white text on pure black backgrounds unless the product specifically needs that contrast.
- Check disabled, selected, focus, hover, error, and overlay states in dark mode.
- Avoid glowing gradients or blur effects as a substitute for hierarchy.

### 10. Use Shadows And Elevation With Restraint

- Use shadows to show elevation, focus, drag state, overlay layering, or tappable surfaces.
- Keep shadows consistent with the light source and surface depth.
- Use borders or surface contrast when shadows are unnecessary or muddy.
- Do not stack heavy shadows on every card.
- Avoid using shadow to fix weak spacing or unclear grouping.

### 11. Make Icons And Buttons Legible

- Use familiar icons for common actions.
- Pair icons with labels when meaning is not universally obvious.
- Keep icon style consistent in stroke, fill, corner radius, optical size, and visual weight.
- Use button hierarchy: primary, secondary, tertiary, destructive, disabled.
- A primary button should be visually obvious but not oversized for the surrounding surface.
- Icon-only buttons need accessible labels, tooltips where appropriate, and sufficient hit area.

### 12. Show Feedback And State

- Every interaction should visibly respond: pressed, loading, selected, saved, changed, disabled, error, or success.
- Do not let users wonder whether a click worked.
- Use inline feedback for local problems and global feedback for whole-page or whole-flow events.
- Make disabled states explainable when users might not know why the action is unavailable.
- Use optimistic feedback only when failure recovery is clear.
- Design empty, loading, error, and success states as first-class UI, not afterthoughts.

### 13. Use Microinteractions To Explain Change

- Use motion to connect cause and effect: open, close, expand, collapse, reorder, save, drag, complete.
- Keep movement short, purposeful, and interruptible.
- Respect reduced-motion preferences.
- Do not add animation that delays work, hides latency, or distracts from reading.
- If the user cannot describe what changed after the motion, the motion failed.

### 14. Use Overlays Carefully

- Use modals for focused decisions that block the underlying flow.
- Use popovers or menus for lightweight contextual options.
- Use drawers or sheets for related side tasks that benefit from staying near the current context.
- Use scrims, focus management, escape behavior, and clear close actions.
- Do not stack multiple overlays unless the product has a strong reason and state management is clear.
- Avoid using modals for ordinary page content or long reading tasks.

### 15. Design For Error Recovery

- Errors should say what happened, why it matters, and how to recover.
- Keep the user's input whenever possible.
- Place field errors near the relevant field.
- Reserve destructive confirmations for actions that are hard to undo.
- Prefer undo for reversible actions.
- Do not blame the user or expose raw system errors.

### 16. Make Repetition Componentized

- If a pattern appears twice, treat it as a component candidate.
- Keep repeated spacing, type, radius, icon style, and interaction states consistent.
- Separate content variants from structural variants.
- Design component states together: default, hover, active, focus, selected, disabled, loading, error.
- Do not create one-off styles for each card, row, or button unless their meaning differs.

## Practical Patterns

### Hierarchy Pass

- Name the primary object or action.
- Make it the clearest visual anchor.
- Move secondary metadata nearby but quieter.
- Remove low-value visual noise.
- Check the first three seconds of scanning: users should know the screen's purpose.

### Grouping Pass

- Circle related content mentally.
- Reduce the distance inside each group.
- Increase distance between groups.
- Add a container only when spacing alone is not enough.
- Put controls next to the content they modify.

### State Pass

- For each visible control, define default, hover or press, focus, loading, disabled, error, and success when relevant.
- For each data area, define loading, empty, partial, populated, error, and refresh states.
- For each flow, define cancel, retry, undo, and completion behavior.

### Visual Polish Pass

- Reduce the number of type sizes.
- Reduce the number of accent colors.
- Make spacing intentional.
- Align repeated elements.
- Remove decorative surfaces that do not group content.
- Check contrast and long text.

## Anti-Patterns

- Explaining controls with paragraphs because the controls themselves are unclear.
- Making every card, heading, and button equally prominent.
- Using color, shadows, blur, or gradients before solving hierarchy.
- Treating a grid as a decoration instead of a responsive structure.
- Using equal spacing everywhere.
- Placeholder-only forms.
- Icon-only navigation with unclear symbols.
- Disabled controls with no explanation in important flows.
- Modals for routine content.
- Animations that hide state changes instead of clarifying them.
- Dark mode created by simple color inversion.
- Cards inside cards.
- Component variants that differ only because the AI improvised.
- Error messages that do not tell the user how to recover.

## Review Checklist

- [ ] The screen's primary job is obvious within a few seconds.
- [ ] Interactive elements clearly communicate what they do.
- [ ] Size, spacing, color, and position express priority.
- [ ] Related elements are grouped and unrelated elements are separated.
- [ ] Repeated UI follows a consistent component pattern.
- [ ] The type scale is small, readable, and coherent.
- [ ] Color roles are consistent and not the only source of meaning.
- [ ] Dark mode is designed, not inverted.
- [ ] Shadows and overlays express real layering.
- [ ] Buttons and icons are recognizable and accessible.
- [ ] Loading, empty, error, disabled, selected, and success states are designed.
- [ ] Motion explains change and does not block the task.
- [ ] Errors preserve user work and explain recovery.
- [ ] The UI feels like an operable product, not a static poster.

## Prompt Hooks

Use these as compact instructions when applying the pack:

```text
Apply UI/UX fundamentals before styling: clarify the screen job, establish hierarchy, group related content, use consistent spacing and type, make affordances obvious, define states, and remove decoration that does not improve comprehension or action.
```

```text
Review this interface for affordances, signifiers, hierarchy, grouping, spacing rhythm, typography, color roles, dark mode, shadows, icons, buttons, feedback states, microinteractions, overlays, and error recovery.
```

```text
Polish this UI by reducing visual noise, strengthening meaningful contrast, aligning repeated patterns, componentizing repeated elements, and designing missing loading, empty, error, disabled, selected, and success states.
```

