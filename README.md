# Szymon Pucher - Personal Website

Welcome to my personal website! This project serves as my **CV, Portfolio, and Blog**, built with [Astro](https://astro.build/).

## 🌟 Features

- **Multilingual Support**: Internationalized content (English & Polish).
- **Project Showcase**: A dedicated section for my recent projects.
- **Blog**: Thoughts and insights on technology and data engineering.
- **Article-style Home Page**: A clean, readable layout with a professional touch.
- **Terminal Component**: Interactive UI elements to showcase my tech stack.
- **Semantic Versioning**: Automated version management and changelog generation.

## 🚀 Tech Stack

- **Framework**: [Astro 5.x](https://astro.build/)
- **Styling**: CSS with Material Design principles.
- **Content**: Markdown & MDX with Content Collections.
- **Deployment**: GitHub Pages via GitHub Actions.

## 📦 Semantic Versioning

This project uses [Release Please](https://github.com/googleapis/release-please) for automated versioning and release management. 

### How it works:
- **Conventional Commits**: Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification (e.g., `feat:`, `fix:`, `chore:`).
- **Automated Releases**: On every push to the `main` branch, a Release PR is automatically created or updated. Merging this PR will:
  - Bump the version in `package.json`.
  - Update `CHANGELOG.md`.
  - Create a new GitHub Release with a tag.
- **Footer Versioning**: The current project version is automatically displayed in the website's footer.

## 🛠️ Development

### Prerequisites
- Node.js 20+
- npm

### Setup
```sh
npm install
```

### Commands
| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview your build locally |

---
*Built with ❤️ by Szymon Pucher*