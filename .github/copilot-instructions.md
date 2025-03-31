### Key Principles

1. **Concise Responses**: Write short, technical answers with Astro-specific examples.
2. **Static First**: Prioritize static generation, minimal JavaScript, and performance optimization.
3. **Multi-Framework Support**: Leverage Astro's partial hydration and integrations for React.
4. **Clear Code**: Use descriptive variable names and Astro naming conventions.
5. **Organized Structure**: Follow Astro's file-based routing and project structure.

---

### Astro Project Structure

Adopt the standard Astro layout:
src/
components/ # Astro components
components/svg/ # For transformed to Components SVG files  
 layouts/ # Shared layouts
pages/ # Routing pages
styles/ # CSS, Sass, or Tailwind
assets/ # Local Images and files
data/ # Local data files
lib/ # Utilities
types/ # Types
public/ # Static assets
astro.config.mjs # Astro configuration

---

### Icons

- Choose an icon collection that fits the current design, ensuring a consistent style.
- For SVG icons, transform them into Astro components placed in src/components/svg/ to maintain editing freedom and consistent styling.

---

### Component Development

- Use .astro files for components.
- Integrate React components if performance requires it.
- Enable **reusability** with props and proper composition.
- Use built-in components like <Fragment> where applicable.

---

### Routing and Pages

- Use **file-based routing** under src/pages/.
- Create dynamic routes with [...slug].astro.
- Use getStaticPaths() for static dynamic page generation.
- Add 404.astro for proper error handling.
- Pagination: For collections like blog posts, the first page is just the main listing (/blog/), and subsequent pages increment starting from /blog/1/, /blog/3/, and so on. This keeps the primary listing clean and human-readable, while additional pages remain clearly structured and short.

---

### Content Management

- Use **Contentful** or other **Headless CMSes** for managing content.
- Integrate content into Astro using **Astro's Content Layer**.
- Ensure clean and efficient integration with API calls or CMS SDKs.
- Use content/ collections when Content Layer is the preferred solution.
- Avoid hardcoded Markdown files for dynamic or extensive content.
- Prefer headless CMS or the Astro Content Collection system.
- Use content/ collections when using the Astro Content Layer.
- Check Astro’s Content Collection docs if unsure before implementing.

---

### Data Management

- Prefer **SQLite with Turso** for lightweight, scalable database needs.
- Use Astro-compatible libraries to query data at build time.
- Store structured content where applicable in the database.

---

### Styling

- Tailwind First: Use Tailwind CSS for all styling. Rely on @astrojs/tailwind integration.
- If a feature cannot be achieved with Tailwind alone, then consider other styling methods.
- Extend themes in tailwind.config.cjs as needed. Use Tailwind UI for pre-built, responsive components.
- For forms, use Tailwind Forms.
- For rich text formatting, use Tailwind Typography.
- Prefer a single variable font from Fontsource, defined once and used consistently.
- Scoped styles: Use `<style>` tags in .astro components.
- Global styles: Import CSS in layouts.
- Use **Tailwind CSS** with @astrojs/tailwind integration.
- Extend **colors** and **typography** in tailwind.config.cjs:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        accent: "...",
        secondary: "...",
        dark: "...",
        light: "...",
      },
      fontSize: {
        h1: ["4.209rem", { lineHeight: "1.33", fontWeight: "700" }],
        h2: ["3.157rem", { lineHeight: "1.33", fontWeight: "700" }],
        h3: ["2.369rem", { lineHeight: "1.33", fontWeight: "700" }],
        h4: ["1.777rem", { lineHeight: "1.33", fontWeight: "700" }],
        h5: ["1.333rem", { lineHeight: "1.33", fontWeight: "700" }],
        h6: ["1rem", { lineHeight: "1.33", fontWeight: "700" }],
        p: ["1rem", { lineHeight: "1.75", fontWeight: "400" }],
        small: ["0.75rem", { lineHeight: "1.75", fontWeight: "400" }],
        quote: ["1.333rem", { lineHeight: "1.75", fontWeight: "400" }],
        button: ["1rem", { lineHeight: "1.75", fontWeight: "400" }],
      },
    },
  },
};
```

- Use one **variable font** installed from **Fontsource**: https://fontsource.org/
- For subtones, use **opacity** with predefined colors for flexible styling.

---

### Client-Side Interactivity with Alpine.js

- **Primary Choice for Simple Dynamics:**  
  Use Alpine.js for lightweight interactions such as mobile menu toggles, dropdowns, modal windows, and similar features. This approach keeps your JavaScript footprint small while providing the necessary dynamic behaviour.

- **Static-First Approach:**  
  Build your components as static HTML first, then enhance them using Alpine.js directives (e.g., x-data, x-show, x-on) for interactivity. This ensures a robust static base that benefits from progressive enhancement.

- **Integration Options:**  
  Decide between using Alpine.js via a CDN or installing it through NPM, based on your project’s build process and dependency management.

- **Best Practices:**

  - Keep your Alpine.js components small and focused.
  - Avoid mixing Alpine.js with heavier frameworks for simple UI interactions.
  - Prioritise Alpine.js for lightweight interactivity unless the complexity of the task requires another solution.

- **When to Consider Alternatives:**  
  For interactions that become too complex or require state management beyond simple toggles, consider integrating a React component with Astro’s partial hydration features.

- **Consistency and Documentation:**  
  Maintain clear naming conventions and add brief inline comments within your Alpine.js code to ensure clarity and ease of future updates. Ensure that interactive elements use Alpine.js first, except when performance or complexity needs dictate an alternative approach.

---

### Forms Handling

- Use **Netlify Forms** for form submissions.
- Ensure the form redirects users to a **thank you** page upon submission.
- Integrate spam protection and form validation where necessary.

Example form in Astro:

```html
<form name="admission" method="POST" netlify action="/thankyou/">
  <input type="hidden" name="form-name" value="admission" />
  <label>
    Name:
    <input type="text" name="name" required />
  </label>
  <label>
    Email:
    <input type="email" name="email" required />
  </label>
  <label>
    Message:
    <textarea name="message" required></textarea>
  </label>
  <button type="submit">Send</button>
</form>
```

---

### Performance Optimization

- Minimize client-side JavaScript; prioritize **static generation**.
- Use client:\* directives for **partial hydration**:
  - client:load for immediate hydration.
  - client:idle for non-critical interactivity.
  - client:visible for visibility-triggered hydration.
- Optimize images and assets with Astro's built-in tools.
- Lazy-load assets for better performance.

---

### Data Fetching

- Use **Astro.props** to pass data to components.
- Fetch build-time data using getStaticPaths().
- Use **Astro.glob()** for efficient local file operations.
- Query APIs or databases (e.g., SQLite with Turso) for dynamic data.
- Implement error handling for data fetching processes.

---

### SEO and Meta Tags

- Add meta tags using `<head>`.
- Use **canonical URLs** for SEO consistency.
- Create reusable `<SEO>` components for standardized meta setups.

---

### Integrations and Plugins

- Use **official Astro integrations** (e.g., @astrojs/image, @astrojs/tailwind).
- Utilize **Astro's Content Layer** for improved content management workflows.
- Configure integrations in astro.config.mjs for compatibility and performance.

---

### Build and Deployment

- Optimize builds with Astro's build command.
- Deploy on **Netlify** with GitHub integration for seamless CI/CD workflows.
- Automate builds with **Netlify's Build Hooks** for content updates.
- Manage environment variables via **Netlify Dashboard**.
- Ensure clean and efficient deployments using GitHub Actions if needed.

---

### Testing

- Write **unit tests** for utilities.
- Use **Cypress** for end-to-end testing.
- Implement visual regression testing for design consistency.

---

### Accessibility

- Use **semantic HTML** in components.
- Add ARIA attributes for accessibility support.
- Ensure **keyboard navigation** for all interactive elements.

---

### Performance Metrics

- Focus on **Core Web Vitals**: LCP, FID, CLS.
- Audit performance with **Lighthouse** and WebPageTest.
- Implement **performance budgets** and monitoring tools.

---

### Key Conventions

1. Use modern JavaScript features. Prefer import statements over require().
2. Use native Node.js methods (like node:fetch) instead of external libraries when it doesn’t complicate implementation.
3. Follow Astro’s official Style Guide for formatting.
4. Use TypeScript for type safety where needed.
5. Handle errors gracefully, referencing official Astro docs if uncertain.
6. Ensure trailing slashes in all links and follow previously defined pagination conventions.
7. Use **Astro's Image** component for optimized images.

---

### Reference

- **Astro v5 Documentation**: https://docs.astro.build
- **Content Layer**: https://docs.astro.build/en/guides/content-collections/
- **Astro Integrations**: https://docs.astro.build/en/guides/integrations/
- **Turso for SQLite**: https://turso.tech/
- **Netlify Documentation**: https://docs.netlify.com
- **Fontsource**: https://fontsource.org/
