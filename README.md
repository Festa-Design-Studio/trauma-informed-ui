# Dr. G's Lab Trauma-Informed UI Design System

A comprehensive trauma-informed UI design system built with semantic HTML, Tailwind CSS, and Alpine.js. This system prioritizes user safety, predictability, and empowerment while maintaining high design standards.

## Project Structure

```
trauma-informed-ui/
├── src/
│   ├── components/
│   │   ├── atoms/        # Basic UI elements
│   │   ├── molecules/    # Compound components
│   │   ├── organisms/    # Complex UI sections
│   │   └── templates/    # Page layouts
│   ├── styles/
│   │   └── main.css      # Main stylesheet
│   ├── layouts/          # Layout templates
│   ├── assets/           # Images and other assets
│   └── docs/             # Documentation
├── tailwind.config.js    # Tailwind configuration
└── package.json         # Project dependencies
```

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/Festa-Design-Studio/trauma-informed-ui.git
cd trauma-informed-ui
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## Deployment

The project is configured to deploy to GitHub Pages automatically when changes are pushed to the main branch. Manual deployment can be done using:

```bash
npm run deploy
```

Visit the live design system at: https://festa-design-studio.github.io/trauma-informed-ui/

## Development Rules

Please refer to `DEVELOPMENT_RULES.md` for comprehensive guidelines on:

- Project structure and organization
- Component development process
- Trauma-informed implementation requirements
- Testing and validation procedures
- Documentation standards

## Status Tracking

- Current progress: See `STATUS.md`
- Development updates: See `PROGRESS.md`

## Technology Stack

- **HTML**: Semantic HTML5 for accessible structure
- **CSS**: Tailwind CSS for styling
- **JavaScript**: Alpine.js for interactivity
- **Build Tool**: Vite

## Trauma-Informed Design Principles

This design system follows key trauma-informed principles:

1. **Safety First**: All components prioritize psychological safety
2. **User Control**: Empowering users with control over their experience
3. **Predictability**: Consistent and predictable interactions
4. **Clear Communication**: Transparent and supportive messaging
5. **Accessibility**: WCAG compliance and inclusive design

> **Note:**
> All button components (Emergency Exit, Primary, Secondary, Tertiary) now support dynamic, trauma-informed, and accessible size variations with responsive behavior. See the Atoms show page and documentation for details.

## Component Categories

### Atoms

- Buttons ([Button System Show Page](src/components/atoms/buttons/button-system.html))
  - Emergency Exit Button
  - Primary Button
  - Secondary Button
  - Tertiary Button
- Form elements
- Typography
- Status indicators

### Molecules

- Alerts
- Form groups
- Navigation elements
- Cards

### Organisms

- Course components
- Content sections
- Interactive features
- Navigation systems

### Templates

- Page layouts
- Grid systems
- Content structures

## Contributing

Please read our contributing guidelines before submitting changes.

## License

Copyright © 2024 Festa Design Studio. All rights reserved.

## Page Structure Template

A systematic header and footer structure is provided in `templates/page-structure.html` for use in all component pages. This ensures:

- Consistent branding with Dr. G's Lab logo and logomark
- Collaboration statement in the footer
- Responsive, accessible layout

**How to use:**

1. Copy the header and footer from `templates/page-structure.html` into your new page.
2. Replace the placeholder title and description.
3. Add your component content inside the `<main>` tag.
4. See `templates/README.md` for more details.

## [2024-06-10] Button Atoms Update

- All button atoms (Primary, Secondary, Tertiary, Emergency Exit) now have:
  - Improved trauma-informed and accessible states: default, hover, focus, disabled
  - Consistent size variations: sm, md, lg, xl, full-width
  - Updated documentation and demo structure for clarity and accessibility
- Tertiary Button section fully restructured to match Primary/Secondary hierarchy

## Troubleshooting: Navigation & Build Issues

### Problem: 404 Errors or Missing Pages on GitHub Pages

If you encounter navigation links that result in "404 Not Found" on GitHub Pages, it is likely because the HTML file was not included in the Vite build output.

#### Solution:

- **Update `vite.config.js`:**  
  Add every new HTML file (including those in subdirectories) to the `rollupOptions.input` section.  
  Example:
  ```js
  input: {
    ...,
    typography: resolve(__dirname, "src/components/atoms/typography.html"),
    // Add all new HTML files here
  }
  ```
- **Rebuild and redeploy:**  
  Run `npm run build` and `npm run deploy`.

#### Why?

Vite only builds files listed in `rollupOptions.input`. If a file is missing, it will not be available in the deployed site, causing navigation to break.

#### What to do next time:

- Whenever you add a new HTML page, always add it to `vite.config.js` and rebuild before deploying.

For more details, see DEVELOPMENT_RULES.md.
