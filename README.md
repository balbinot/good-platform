# GOOD Platform — project website

A Jekyll-based static site for **The General Open Orbital Dynamics (GOOD) Platform**, deployable directly to GitHub Pages.

## What's included

- **Landing page** (`index.html`) — vision, problem, components (Tudat × WISE), applications, stats
- **Timeline page** (`/timeline/`) — four work packages plus a 36-month milestone timeline
- **Team page** (`/team/`) — applicants and 12 cooperation partners
- **About page** (`/about/`) — full project background, access policy, governance, sustainability

## Local development

```bash
# Install dependencies (once)
bundle install

# Serve locally
bundle exec jekyll serve

# Open http://localhost:4000
```

Requires Ruby 3.x and Bundler. On macOS: `brew install ruby` then `gem install bundler`.

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `good-platform`).
2. Push this directory to the `main` branch.
3. In **Settings → Pages**, set the source to **Deploy from a branch** → `main` / `/ (root)`.
4. (Optional) If you're deploying to `username.github.io/good-platform/` rather than a root domain, edit `_config.yml` and set `baseurl: "/good-platform"`.

GitHub will build and serve the site automatically. The included `Gemfile` pins to the `github-pages` gem, so what you see locally matches what GitHub builds.

## Editing content

All content is driven by data files for easy updates:

- **Team members** → `_data/team.yml` (applicants + partners)
- **Timeline milestones & work packages** → `_data/timeline.yml`
- **Site metadata** (title, nav, project stats) → `_config.yml`
- **Page copy** → `index.html`, `timeline/index.html`, `team/index.html`, `about/index.html`

To add a milestone, append an entry to `_data/timeline.yml` under `milestones:` — the timeline page will render it automatically.

## Design notes

- **Type**: Fraunces (display serif with variable axes), Inter Tight (body), JetBrains Mono (labels)
- **Palette**: deep navy ink, paper cream, amber accent, signal red for reviews
- **Aesthetic**: editorial / scientific — calm dense layouts, generous typography, subtle grain texture, animated orbital diagram in hero
- **Accessibility**: semantic HTML, focus-visible outlines, reduced-motion respected, ARIA-hidden on decorative SVGs

## License

The site code is released under the same license you choose for the GOOD project (default suggestion: MIT for the website; project software follows the licenses noted in the About page).
