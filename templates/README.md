# Page Structure Template for Trauma-Informed UI

This template provides a systematic approach for creating component pages at any atomic structure level in the Trauma-Informed UI documentation.

## Header Structure

- Includes Dr. G's Lab logo (dgl-logo.svg)
- Navigation link (Back to Main)
- Responsive page title and description
- Consistent spacing and styling

## Footer Structure

- Collaboration statement: "Trauma-informed interfaces is a project of Dr. G's Lab in collaboration with Festa Design Studio"
- Dr. G's Lab logomark (dgl-logomark.svg)
- Responsive, accessible, and visually consistent

## Usage Steps

1. Copy the header and footer structure from `page-structure.html` into your new component page.
2. Replace `[Page Title]` and `[Page Description]` with your content.
3. Add your component-specific content inside the `<main>` tag.
4. Keep the max-width and spacing classes for consistency.
5. Use the provided logo assets from `/src/assets/`.

## Styling Notes

- Uses Tailwind CSS utility classes for layout and spacing.
- Responsive design is built-in for all breakpoints.
- All pages should use the same header and footer structure for brand and UX consistency.

## Section-Based Layout Principle

- Each major content block (e.g., button type, form element) should be its own <section> with aria-labelledby, h2, and trauma-spacing (e.g., space-y-8, space-y-16).
- This creates clear content hierarchy, improves accessibility, and ensures trauma-informed spacing between content blocks.
- See `page-structure.html` for an example.

## Rationale

This approach ensures:

- Consistency across all documentation and component pages
- Easy maintenance and updates
- Clear documentation for future development
- Brand alignment with Dr. G's Lab and Festa Design Studio

- Section-based layout supports cognitive clarity and reduces overwhelm by visually and semantically separating content.
- Improves screen reader navigation and accessibility.
- Makes it easier to maintain and extend documentation as the system grows.

## Breadcrumb Navigation System (Required for Sublevel Pages)

All sublevel component pages (any page below atomic-structure.html) **must** include a breadcrumb navigation at the top of the page, above the main content. This helps users easily navigate back to the Atomic Structure overview and supports systematic, trauma-informed navigation.

**Breadcrumb Example:**

```html
<nav aria-label="Breadcrumb" class="mb-4">
  <ol class="flex items-center space-x-2 text-sm font-montserrat text-grey-700">
    <li>
      <a
        href="../../atomic-structure.html"
        class="hover:underline text-azurite-blue-600"
        >Atomic Structure</a
      >
    </li>
    <li aria-hidden="true">/</li>
    <li class="text-grey-500" aria-current="page">[Current Page Name]</li>
  </ol>
</nav>
```

- The breadcrumb should always link back to `atomic-structure.html`.
- The current page name should be set as the last breadcrumb item and marked with `aria-current="page"`.
- Do **not** include a breadcrumb on `atomic-structure.html` itself.
- Place the breadcrumb directly above the main content or component demo.

---

For questions or updates to this template, see the main project README or contact the maintainers.
