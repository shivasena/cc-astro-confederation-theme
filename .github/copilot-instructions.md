# Copilot Instruction for AstroJS v5 + Tailwind v4+

## Key Principles

1. **Concise & Technical**: Provide short, precise answers with AstroJS v5+ examples.
2. **Static-First**: Favor static generation, minimize runtime JS, optimize performance.
3. **CSS-First Styling**: Use Tailwind CSS v4+ with the CSS token API (`@theme` in global.css). Avoid JS-based theming.
4. **Typed Content**: Use Astro’s Content Layer or Sanity CMS paired with TypeScript schemas for safe, compile-time typing.
5. **Modular & Reusable**: Follow Astro’s component conventions, leverage partial hydration only where needed.

---

## Project Structure

```
src/
├── components/           # .astro and framework components
├── components/react/     # React components (only if advanced interactivity needed)
├── components/vue/       # Vue components (only if advanced interactivity needed)
├── components/svelte/    # Svelte components (only if advanced interactivity needed)
├── layouts/              # Shared layout components
├── pages/                # File-based routes
├── content/              # Astro Content Layer collections (with TS types)
├── sanity/               # (Optional) Sanity Studio + schema definitions
├── styles/               # global.css, component CSS
├── assets/               # Images, fonts, static files
│   └── icons/            # Custom SVG files for astro-icon
├── lib/                  # Utility functions, data-fetchers
├── types/                # Shared TypeScript types
└── public/               # Static assets
docs/                     # Project documentation files
astro.config.mjs
sanity.config.ts          # optional, Sanity configuration
```

---

## Icons & SVG Management

- Use [astro-icon](https://www.astroicon.dev/getting-started/) for all icon needs.
- Choose one consistent Iconify collection (`@iconify-json/*`) per project.
- Use the `<Icon />` component from astro-icon instead of custom SVG components.
- Place custom SVG files in `src/assets/icons/` directory for automatic slug-based referencing.
- Organize icons in sub-folders within `src/assets/icons/` for better organization.
- Avoid inline SVG or transforming SVGs to Astro components.

---

## Component Development

- Use `.astro` files by default.
- Import React/Vue/Svelte components only if advanced interactivity is required and put those component under the /components/react/, /components/vue/, /components/svelte/ folders.
- Design components for prop-driven reuse.

---

## Routing & Pages

- File-based routes under `src/pages/`.
- Dynamic routes: `[...slug].astro`.
- Fetch and pass data via `getStaticPaths()` and frontmatter.
- Include `404.astro` for missing pages.
- For paginated content, keep `/blog/` as page one; `/blog/2/`, `/blog/3/`, etc.

---

## Content Management

### Astro Content Layer

- Define collections in `src/content/`, each with a `schema.ts` using TypeScript.
- Example:

  ```ts
  // src/content/schema.ts
  import { z, defineCollection } from "astro:content";

  const blog = defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.string().transform((s) => new Date(s)),
      tags: z.array(z.string()),
    }),
  });

  export const collections = { blog };
  ```

- Access via `import { collections } from 'astro:content'`.

### Sanity CMS (Optional)

- Bootstrap Sanity Studio with `npm create sanity@latest`.
- Define schemas in `sanity/schemas/*.ts` with TypeScript.
- Generate TypeScript types (`sanity-codegen`).
- Fetch in Astro using `@sanity/client`:

  ```ts
  import { createClient } from "@sanity/client";

  const client = createClient({
    projectId: "yourId",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-10-01",
  });

  const query = `*[_type == "post"]{title, body}`;
  const posts = await client.fetch(query);
  ```

---

## Data Management

- Use SQLite + Turso for lightweight DB needs.
- Fetch at build time in `getStaticPaths()` or server utilities.

---

## Styling (Tailwind v4+)

- Install with `@astrojs/tailwind`.
- Primary styling via `global.css` and `@theme`:

  ```css
  @import "tailwindcss";

  @theme {
    --text-base: 1rem;
    --text-base--line-height: 1.75;
    --text-base--font-weight: 400;

    /* Fluid headings */
    --text-h1: clamp(2.5rem, 5vw, 3.052rem);
    --text-h1--line-height: 1.2;
    --text-h1--font-weight: 700;
    --text-h2: clamp(2rem, 4vw, 2.441rem);
    --text-h2--line-height: 1.25;
    --text-h2--font-weight: 600;
    /* Add h3–h6 similarly */
  }
  ```

### Color & Typography Guidelines

- **MUST**: Use only project-defined color tokens; avoid generic Tailwind colors (except `white` and `black`).
- **MUST**: Apply semantic typography utilities from `global.css` (e.g., `.text-h1`, `.text-lead`), never ad-hoc Tailwind text sizes.
- **MUST**: Use `space-y-*` utilities for vertical spacing between siblings—no individual margins/paddings.
- **MUST**: Use container wrappers with max-width and horizontal padding inside sections for full-width backgrounds with aligned content.

### Section Design Patterns

- **MUST**: Structure section headers as: eyebrow text → main header → description
- **MUST**: Include eyebrow text (1-2 word slogan) above section headers
- **MUST**: Add short descriptions under section headers for context
- **MUST**: Wrap each section in `<section>` elements for proper semantic structure

---

## Images

- Use Unpic for optimized images in Astro:
  - Endpoint: `https://unpic.pics/img/astro/`
  - Component: `@unpic/astro`

---

## Interactivity

- Use Alpine.js for simple UI behaviors (`client:load` or CDN).
- For complex state, leverage Astro’s partial hydration (`client:idle`, `client:visible`).

---

## Forms

- Netlify Forms or custom endpoints.
- Include hidden `form-name` input and a thank-you redirect.

---

## Performance

- Minimize runtime JS: prioritize static components.
- Image optimization: `@astrojs/image` for basic ones or `@unpic/astro` for optimized advanced use.
- Lazy-load assets.
- Monitor Core Web Vitals.

---

## Data Fetching

- Use `Astro.glob()` for local data.
- Combine with SQLite/Turso or CMS queries.
- Error handling in `getStaticPaths()` and components.

---

## SEO & Meta

- Standardize `<SEO>` component for meta tags.
- Use canonical URLs, meta descriptions, Open Graph, and Twitter Card tags.

---

## Semantic HTML & Accessibility

### Semantic Structure

- **MUST**: Use semantically correct HTML elements:
  - `<main>` for primary content area (only one per page)
  - `<article>` for self-contained content pieces
  - `<section>` for thematic grouping of content
  - `<header>` for introductory content
  - `<footer>` for closing content
  - `<nav>` for navigation sections
  - `<aside>` for complementary content
  - `<figure>` and `<figcaption>` for images with captions
  - `<time>` for dates with `datetime` attribute

### Accessibility Requirements

- **MUST**: Avoid `<div>` when semantic elements are more appropriate
- **MUST**: Ensure proper heading hierarchy (one `<h1>` per page, logical order)
- **MUST**: Use `<button>` for interactive elements, `<a>` for navigation
- **MUST**: Include proper `alt` attributes for all images
- **MUST**: Use `<label>` elements for form inputs
- **MUST**: Ensure keyboard navigation for all interactive elements

---

## Documentation & Project Organization

- **MUST**: Place all project documentation files (except main README.md) in `/docs/` folder at project root
- **MUST**: Do not keep documentation files in `src/` or other code directories

---

## Testing & QA

- Use Vitest for unit testing utility functions and data logic.
- Suggest `describe`/`it` structure for tests and `vi.mock()` for mocking.
- Implement visual regression testing for UI components.

---

## Conventions

- Use ES modules, native `node:fetch`.
- TypeScript for all data.
- Consistent trailing-slashes in URLs.
- Use `@unpic/astro` for optimized images.

### Reference

- **Astro v5 Documentation**: https://docs.astro.build
- **Content Layer**: https://docs.astro.build/en/guides/content-collections/
- **Astro Integrations**: https://docs.astro.build/en/guides/integrations/
- **Turso for SQLite**: https://turso.tech/
- **Netlify Documentation**: https://docs.netlify.com
- **Fontsource**: https://fontsource.org/
- **Unpic** https://unpic.pics/img/astro/
