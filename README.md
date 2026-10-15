# dinhieufam.github.io

Personal website of Hieu Pham Dinh, built with plain HTML, CSS and JavaScript. There is no build step and nothing to install.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Use a local server rather than double-clicking `index.html`, because the links are folder-style (`/publications/`, `/blog/...`).

## Where things are

```
index.html                    Home page: bio text, photo
publications/index.html       Publications page
blog/index.html               Blog list
blog/2026/<post>/index.html   One folder per blog post
blog/_template.html           Copy this to start a new post
cv/index.html                 CV page
404.html                      "Page not found"

assets/js/data.js             ← news, publications, blog list, CV (edit this most)
assets/js/site.js             Navbar, dark mode, search, rendering (rarely needs edits)
assets/css/style.css          All styles (colors at the top)
assets/css/style.original.css Backup of the original (pre-Mark III) theme, not loaded
assets/img/                   Profile photo, publication preview images
```

## Common edits

| I want to…                         | Edit                                                                                     |
| ---------------------------------- | ---------------------------------------------------------------------------------------- |
| Change my bio                      | the `<p>` paragraphs in `index.html`                                                     |
| Add a news item                    | add `{ date, text }` at the top of `NEWS` in `assets/js/data.js`                         |
| Add a paper                        | add an entry at the top of `PUBLICATIONS` in `data.js` (`selected: true` shows it on home) |
| Add a paper preview image          | put the image in `assets/img/publication_preview/` and set `preview: "file.jpg"`         |
| Update the CV                      | `CV` in `data.js` (Education, Experience, Awards & Honors, Service & Teaching)           |
| Change email / GitHub / LinkedIn   | `SITE` in `data.js`                                                                      |
| Change the menu                    | `NAV` at the top of `assets/js/site.js`                                                  |
| Change the accent color            | `--theme` / `--hover` (and `--gold` trim) at the top of `assets/css/style.css`          |
| Go back to the original theme      | copy `assets/css/style.original.css` over `assets/css/style.css`                         |
| Change the profile photo           | replace `assets/img/prof_pic.jpg`                                                        |

The ctrl-k / ⌘-k search builds itself from `data.js`, so you never update it by hand.

## Write a new blog post

1. Copy `blog/_template.html` to `blog/<year>/<post-name>/index.html`.
2. Change the `<title>` and description in the copy, then write the article inside `<article class="post-content">` using normal HTML: `<p>`, `<h2>`, `<h3>`, `<ul><li>`, `<blockquote>`, `<img>`.
3. Add an entry at the top of `POSTS` in `assets/js/data.js`. Its `url` must be `/blog/<year>/<post-name>/`.

The title, date, author block and the "Contents" sidebar are added automatically.

## Publish

Push to `main`. GitHub Pages serves the files as they are (`.nojekyll` turns off Jekyll).

One-time setup: **Settings → Pages → Build and deployment → Source: "Deploy from a branch" → `main` / `(root)`**.
