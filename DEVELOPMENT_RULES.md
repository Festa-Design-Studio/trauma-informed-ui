# Development Rules for Trauma-Informed UI Project

## 1. Project Understanding & Reference

### Core Documentation

All development must reference these key documents:

- `tailwind.config.js` - Design tokens and system configuration
- `trauma-informed-ui-library-revised.md` - Component library specifications
- `spacing-layout-guide.md` - Layout and spacing guidelines
- `headline-body-color-system.md` - Typography and color system
- `design-system-strategy.md` - Implementation strategy
- `COMPONENTS.md` - Component status and specifications

### Implementation Order

1. **Foundation First**

   - Design tokens (colors, typography, spacing)
   - Base styles and utilities
   - Core layout system

2. **Component Hierarchy**

   - Atoms → Molecules → Organisms → Templates
   - Each component must be fully tested before moving up the hierarchy

3. **Integration Priority**
   - Safety features first
   - Core functionality second
   - Enhancement features last

## 2. Development Tracking System

### Component Status Tracking

Create a `STATUS.md` file in each component directory with the following format:

```markdown
## Component Status

✅ = Complete
🟡 = In Progress
⭕ = Not Started
❌ = Has Issues

### Atoms

- [✅] Emergency Exit Button
- [🟡] Primary Button
- [⭕] Form Input
  ...

### Molecules

...

### Organisms

...

### Templates

...
```

### Development Progress File

Maintain `PROGRESS.md` in the project root:

```markdown
# Development Progress

## Current Sprint

- Sprint Goal: [Current Focus]
- Start Date: [Date]
- End Date: [Date]

## Last Completed

- Component: [Name]
- Developer: [Name]
- Date: [Date]
- Location: [File Path]

## Next Up

- Priority Tasks: [List]
- Blocked Tasks: [List]
- Dependencies: [List]
```

## 3. Implementation Rules

### Rule 1: Component Creation

- All components MUST be created in the `trauma-informed-ui/src/components` directory
- Follow the atomic design structure:
  ```
  components/
  ├── atoms/
  ├── molecules/
  ├── organisms/
  └── templates/
  ```

### Rule 2: File Naming

- Use kebab-case for all files
- Include component type in filename
- Example: `emergency-exit-button.html`, `course-card-organism.html`

### Rule 3: Component Documentation

Every component MUST include:

```html
<!-- Component: [Name]
     Type: [Atom/Molecule/Organism/Template]
     Status: [Complete/In Progress/Not Started]
     Dependencies: [List of required components]
     Trauma-Informed Considerations:
     - [List key trauma-informed features]
-->
```

### Rule 4: Testing Requirements

Before marking a component as complete:

- Validate against trauma-informed principles
- Test accessibility (WCAG 2.2 AA)
- Verify responsive behavior
- Check color contrast
- Test with screen readers
- Validate keyboard navigation

### Rule 5: Commit Messages

Format:

```
[Component Type] Component Name: Action

Example:
[Atom] Emergency Exit Button: Add hover state
[Molecule] Content Warning: Fix accessibility
```

### Rule 6: Development Process

1. **Check Status Files**

   - Review `STATUS.md` and `PROGRESS.md`
   - Update current task status

2. **Component Development**

   - Create component file in appropriate directory
   - Implement base functionality
   - Add trauma-informed features
   - Document considerations
   - Test thoroughly

3. **Update Tracking**
   - Update status files
   - Document progress
   - Note any blockers or dependencies

### Rule 7: Trauma-Informed Requirements

Every component MUST implement:

- Clear focus states
- Gentle transitions
- Supportive messaging
- User control options
- Content warnings where needed
- Emergency exit accessibility
- **Dynamic, responsive sizing for all buttons (see Atoms documentation)**

### Rule 8: Code Standards

```html
<!-- Template for component structure -->
<div
  class="[base-classes] [trauma-informed-classes]"
  x-data="{ state: false }"
  role="[aria-role]"
>
  <!-- Emergency exit access -->
  <button class="emergency-exit-button">...</button>

  <!-- Component content -->
  <div class="content-wrapper">...</div>

  <!-- User control options -->
  <div class="control-options">...</div>
</div>
```

### Rule 9: Navigation & Build Troubleshooting

- All navigation links must point to `.html` files that exist in the build output.
- Every new HTML file (including those in subdirectories) **must** be added to `vite.config.js` under `rollupOptions.input`.
- After adding new pages, always run `npm run build` and check the `dist` folder to ensure the file is present.
- If a navigation link results in a 404, check that the file is listed in the Vite config and rebuilt.

### Rule 10: Quality Checklist

Before completion, verify:

- [ ] Implements all trauma-informed principles
- [ ] Follows atomic design hierarchy
- [ ] Uses correct design tokens
- [ ] Includes emergency exit access
- [ ] Provides user control options
- [ ] Has clear documentation
- [ ] Passes accessibility tests
- [ ] Updates status tracking

## 4. Project Validation

### Regular Audits

- Weekly status review
- Component completion verification
- Trauma-informed principle validation
- Accessibility compliance check

### Documentation Updates

- Keep STATUS.md current
- Update PROGRESS.md daily
- Document all decisions
- Track any deviations

## 5. Client Presentation Preparation

### Documentation Requirements

- Component screenshots
- Interaction demonstrations
- Trauma-informed features highlight
- Accessibility compliance proof
- User control demonstrations

### Presentation Structure

1. Design System Overview
2. Component Demonstrations
3. Trauma-Informed Features
4. Technical Implementation
5. Future Enhancements

Remember: Every development decision must prioritize user safety, predictability, and empowerment while maintaining high design standards.

## Page Structure Consistency

- All new component pages must use the header/footer structure from `templates/page-structure.html`.
- See `templates/README.md` for usage instructions and rationale.
