# rainiwalk.github.io

Personal website built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and deployed to GitHub Pages.

## Tech Stack

- **Framework:** Astro 4
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **Deployment:** GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Rainiwalk/rainiwalk.github.io.git
cd rainiwalk.github.io

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
.
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── favicon.svg         # Site favicon
│   └── robots.txt          # Search engine directives
├── src/
│   ├── components/
│   │   ├── Footer.astro    # Site footer
│   │   ├── Header.astro    # Navigation header
│   │   ├── ProjectCard.astro  # Project card component
│   │   ├── SEO.astro       # Meta tags and SEO
│   │   └── ThemeToggle.astro  # Dark/light mode toggle
│   ├── data/
│   │   └── projects.ts     # Project data (edit to add projects)
│   ├── layouts/
│   │   └── BaseLayout.astro  # Base page layout
│   ├── pages/
│   │   ├── index.astro     # Home page
│   │   ├── about.astro     # About page
│   │   ├── projects.astro  # Projects page
│   │   └── contact.astro   # Contact page
│   └── styles/
│       └── global.css      # Global styles and Tailwind config
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mts     # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## Adding a New Project

Edit `src/data/projects.ts`:

```ts
{
  title: "My New Project",
  description: "What it does.",
  tags: ["Kotlin", "Android"],
  github: "https://github.com/Rainiwalk/project",
  status: "wip",  // "active" | "archived" | "wip"
}
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The GitHub Actions workflow:

1. Checks out the code
2. Installs dependencies
3. Builds the Astro site
4. Deploys to GitHub Pages

### Manual Deployment

You can also trigger a deployment manually from the Actions tab in the GitHub repository.

## Configuration

### Site URL

Update `site` in `astro.config.mjs` if your domain changes:

```js
export default defineConfig({
  site: "https://rainiwalk.github.io",
});
```

### Now Section

Update the "What I'm Working On Now" section in the About page (`src/pages/about.astro`) periodically to reflect what you're currently focused on.

## License

MIT
