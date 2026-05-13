# GOOD Platform Website

Jekyll-based GitHub Pages site for the **General Open Orbital Dynamics (GOOD) Platform**.

## Quick Start

### Prerequisites
- Ruby ≥ 3.0
- Bundler (`gem install bundler`)

### Local development

```bash
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

### Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `good-platform`)
2. Push all files to the `main` branch
3. Go to **Settings → Pages**
4. Set Source to **Deploy from a branch**, select `main` / `/ (root)`
5. Your site will be live at `https://<username>.github.io/good-platform/`

> **Tip:** If deploying to a project page (not user root), update `baseurl` in `_config.yml` to `/good-platform` (your repo name).

## Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/
│   └── default.html     # Base HTML layout
├── _includes/
│   ├── nav.html         # Navigation bar
│   └── footer.html      # Footer
├── assets/
│   ├── css/main.css     # All styles
│   └── js/main.js       # Interactions & team rendering
├── index.html           # Main landing page
└── Gemfile
```

## Customizing

- **Content**: Edit `index.html` — all sections are self-contained with clear comments.
- **Team data**: Edit the `teamData` object in `assets/js/main.js`.
- **Colors/fonts**: CSS custom properties are at the top of `assets/css/main.css`.
- **Config**: Update `_config.yml` with your institution's URL.

## Adding pages

Create new `.html` or `.md` files with front matter:

```yaml
---
layout: default
title: Publications
---
```

## License

GPL-3.0 — consistent with the GOOD platform software license.
