# Confederation College Astro Starter

A starter template for Confederation College web projects built with Astro.js, featuring the college's brand styling.

## 🚀 Getting Started

To create a new project using this Confederation College Astro theme:

### Create a new project using this template

```bash
npm create astro@latest cc-astro-project -- --template shivasena/cc-astro-confederation-theme
```

```bash
# Navigate to project folder
cd my-cc-project

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎓 Features

- Confederation College brand colors
- Tailwind CSS for styling
- Typography with Outfit font
- Responsive design
- Fast performance with Astro.js

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg           # Confederation College favicon
│   └── site.webmanifest      # Web app manifest file
├── src/
│   ├── components/           # Reusable UI components
│   │   └── svg/              # SVG components as Astro files
│   │       └── LogoHorizontalSVG.astro  # CC logo component
│   ├── layouts/              # Page layouts
│   │   └── Layout.astro      # Main layout with CC branding
│   ├── pages/                # Route pages
│   │   ├── index.astro       # Homepage
│   │   └── 404.astro         # Error page
│   └── styles/               # Global styles
│       └── global.css        # Tailwind with CC brand colors
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🧞 Commands

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🔧 Customization

This starter includes Confederation College's brand colors and typography. You can customize the theme further by modifying the Tailwind configuration in `tailwind.config.js`.

## 📝 License

This project is intended for Confederation College coursework and projects.
