# Agent Guidelines

Static personal website (plain HTML/CSS/JS), served as-is by GitHub Pages from `main`. There is no build step, no package manager and no framework. Keep it that way: don't add Jekyll, npm builds, bundlers or frameworks.

## Structure

- Pages are folder-style `index.html` files (`/`, `/publications/`, `/blog/`, `/cv/`, `/blog/<year>/<slug>/`) so URLs stay stable.
- `assets/js/data.js` holds all repeated content: `SITE`, `NEWS`, `BLOG_TAGS`/`BLOG_CATEGORIES`, `POSTS`, `PUBLICATIONS`, `CV`. Lists are newest-first.
- `assets/js/site.js` injects the navbar (`NAV`), handles theme/search/progress bar/back-to-top/TOC/abstract toggles, and fills every element with a `data-render="..."` attribute from `data.js`.
- `assets/css/style.css` is the only stylesheet. Colors are CSS variables at the top, with a `html[data-theme="dark"]` override block.
- `assets/js/vendor/ninja-keys.min.js` is a vendored, bundled ctrl-k palette. Don't edit it.
- Blog post bodies are hand-written HTML inside `<article class="post-content">`. The post header comes from the matching `POSTS` entry, matched by `url`.

## Conventions

- Every page has the same `<head>`: fonts, FontAwesome, Academicons, `style.css`, `data.js`, `site.js`, the ninja-keys module and medium-zoom. When adding a page, copy the `<head>` from an existing one.
- Use absolute paths (`/assets/...`, `/blog/...`).
- Keep the look identical to the existing pages. Reuse existing classes before adding CSS.

## Check changes

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Check light and dark mode, a mobile width (~390px), and that the browser console has no errors.
