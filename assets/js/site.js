/* =============================================================================
 * SITE SCRIPT
 * -----------------------------------------------------------------------------
 * Shared behavior for every page. You normally don't need to edit this file:
 * content lives in data.js, page text lives in the HTML files.
 *
 * Any element with a data-render="..." attribute is filled from data.js:
 *   news, latest-posts, publications, selected-publications, social,
 *   blog-list, blog-tags, post-header, cv
 * ============================================================================= */

/* ---------------------------------------------------------------------------
 * 1. Navigation — edit this list to add/remove/reorder menu items.
 * ------------------------------------------------------------------------- */
const NAV = [
  { title: "about", url: "/" },
  { title: "publications", url: "/publications/" },
  { title: "blog", url: "/blog/" },
  { title: "CV", url: "/cv/" },
];

/* ---------------------------------------------------------------------------
 * 2. Theme (light / dark / system). Runs immediately to avoid a flash.
 * ------------------------------------------------------------------------- */
const Theme = {
  setting() {
    try {
      return localStorage.getItem("theme") || "system";
    } catch (e) {
      return "system";
    }
  },
  computed() {
    const s = Theme.setting();
    if (s !== "system") return s;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  },
  apply() {
    const root = document.documentElement;
    root.setAttribute("data-theme-setting", Theme.setting());
    root.setAttribute("data-theme", Theme.computed());
    const ninja = document.querySelector("ninja-keys");
    if (ninja) ninja.classList.toggle("dark", Theme.computed() === "dark");
  },
  set(value) {
    try {
      localStorage.setItem("theme", value);
    } catch (e) {}
    // Smoothly fade colors when switching.
    document.documentElement.classList.add("transition");
    setTimeout(() => document.documentElement.classList.remove("transition"), 500);
    Theme.apply();
  },
  toggle() {
    const next = { system: "light", light: "dark", dark: "system" };
    Theme.set(next[Theme.setting()] || "system");
  },
};
Theme.apply();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", Theme.apply);

/* ---------------------------------------------------------------------------
 * 3. Small helpers
 * ------------------------------------------------------------------------- */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// "2026-08-18" -> "Aug 18, 2026" (short) or "August 18, 2026" (long)
function formatDate(iso, long) {
  const [y, m, d] = iso.split("-").map(Number);
  const month = long ? MONTHS[m - 1] : MONTHS[m - 1].slice(0, 3);
  return `${month} ${String(d).padStart(2, "0")}, ${y}`;
}

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || "";
}

const isMac = /mac/i.test(navigator.platform);

/* ---------------------------------------------------------------------------
 * 4. Header (navbar + reading progress bar)
 * ------------------------------------------------------------------------- */
function renderHeader() {
  const isHome = location.pathname === "/" || location.pathname === "/index.html";
  const current = NAV.filter((n) => n.url !== "/" && location.pathname.startsWith(n.url)).pop() || (isHome ? NAV[0] : null);

  const items = NAV.map(
    (n) => `<li class="nav-item${n === current ? " active" : ""}"><a class="nav-link" href="${n.url}">${n.title}</a></li>`
  ).join("");

  const header = document.createElement("header");
  header.innerHTML = `
    <nav id="navbar" class="navbar">
      <div class="container">
        ${isHome ? "" : `<a class="navbar-brand" href="/"><span class="bold">${SITE.firstName}</span> ${SITE.lastName}</a>`}
        <button class="navbar-toggler collapsed" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon-bar top-bar"></span><span class="icon-bar middle-bar"></span><span class="icon-bar bottom-bar"></span>
        </button>
        <div class="navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            ${items}
            <li class="nav-item">
              <button id="search-toggle" type="button" title="Search" aria-label="Open search">
                <span class="nav-link">${isMac ? "&#x2318;" : "ctrl"} k <i class="fa-solid fa-magnifying-glass"></i></span>
              </button>
            </li>
            <li class="toggle-container">
              <button id="light-toggle" type="button" title="Change theme" aria-label="Change color theme">
                <i class="fa-half-sun-moon" id="light-toggle-system"></i>
                <i class="fa-solid fa-moon" id="light-toggle-dark"></i>
                <i class="fa-solid fa-sun" id="light-toggle-light"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <progress id="progress" value="0"></progress>`;
  document.body.prepend(header);

  // Mobile menu
  const toggler = header.querySelector(".navbar-toggler");
  const panel = header.querySelector("#navbarNav");
  toggler.addEventListener("click", () => {
    const open = panel.classList.toggle("show");
    toggler.classList.toggle("collapsed", !open);
    toggler.setAttribute("aria-expanded", String(open));
  });

  header.querySelector("#light-toggle").addEventListener("click", Theme.toggle);
  header.querySelector("#search-toggle").addEventListener("click", () => {
    panel.classList.remove("show");
    toggler.classList.add("collapsed");
    const ninja = document.querySelector("ninja-keys");
    if (ninja && ninja.open) ninja.open();
  });
}

function setupProgressBar() {
  const bar = document.getElementById("progress");
  const navbar = document.getElementById("navbar");
  const update = () => {
    bar.style.top = `${navbar.offsetHeight}px`;
    bar.max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
    bar.value = window.scrollY;
  };
  document.addEventListener("scroll", update);
  window.addEventListener("resize", update);
  window.addEventListener("load", update);
  update();
}

/* ---------------------------------------------------------------------------
 * 5. Back-to-top button
 * ------------------------------------------------------------------------- */
function setupBackToTop() {
  const btn = document.createElement("button");
  btn.id = "back-to-top";
  btn.type = "button";
  btn.setAttribute("aria-label", "Scroll to top");
  btn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill="currentColor"/></svg>';
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.body.appendChild(btn);
  const update = () => btn.classList.toggle("visible", window.scrollY > 400);
  document.addEventListener("scroll", update);
  update();
}

/* ---------------------------------------------------------------------------
 * 6. Renderers for data.js content
 * ------------------------------------------------------------------------- */
const renderers = {
  // Home page news table
  news(el) {
    const limit = Number(el.dataset.limit) || NEWS.length;
    el.innerHTML = `<table class="news-table">${NEWS.slice(0, limit)
      .map((n) => `<tr><th scope="row">${formatDate(n.date)}</th><td>${n.text}</td></tr>`)
      .join("")}</table>`;
  },

  // Home page "latest posts" table
  "latest-posts"(el) {
    const limit = Number(el.dataset.limit) || POSTS.length;
    el.innerHTML = `<table class="news-table">${POSTS.slice(0, limit)
      .map((p) => `<tr><th scope="row">${formatDate(p.date)}</th><td><a class="news-title" href="${p.url}">${p.title}</a></td></tr>`)
      .join("")}</table>`;
  },

  // Full list, grouped by year
  publications(el) {
    const years = [...new Set(PUBLICATIONS.map((p) => p.year))].sort((a, b) => b - a);
    el.innerHTML = years
      .map((y) => `<h2 class="year-heading">${y}</h2><ol class="bibliography">${PUBLICATIONS.filter((p) => p.year === y).map(publicationHtml).join("")}</ol>`)
      .join("");
  },

  // Only entries with selected: true
  "selected-publications"(el) {
    el.innerHTML = `<ol class="bibliography">${PUBLICATIONS.filter((p) => p.selected).map(publicationHtml).join("")}</ol>`;
  },

  // Contact icons + note at the bottom of the home page
  social(el) {
    el.innerHTML = `
      <div class="contact-icons">
        <a href="mailto:${SITE.email}" title="Email"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://github.com/${SITE.github}" title="GitHub"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/${SITE.linkedin}" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://scholar.google.com/citations?user=${SITE.scholar}" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>
      </div>
      <div class="contact-note">${SITE.contactNote}</div>`;
  },

  // Tag / category chips above the blog list
  "blog-tags"(el) {
    const chips = [
      ...BLOG_TAGS.map((t) => `<li><i class="fa-solid fa-hashtag fa-sm"></i> <a href="/blog/?tag=${t}">${t}</a></li>`),
      ...BLOG_CATEGORIES.map((c) => `<li><i class="fa-solid fa-tag fa-sm"></i> <a href="/blog/?category=${c}">${c}</a></li>`),
    ];
    el.innerHTML = `<ul>${chips.join("<p>&bull;</p>")}</ul>`;
  },

  // Blog post list (supports ?tag=, ?category=, ?year= filters)
  "blog-list"(el) {
    const q = new URLSearchParams(location.search);
    const tag = q.get("tag");
    const cat = q.get("category");
    const year = q.get("year");
    const posts = POSTS.filter(
      (p) => (!tag || p.tags.includes(tag)) && (!cat || p.category === cat) && (!year || p.date.startsWith(year))
    );
    const filter = tag || cat || year;
    el.innerHTML =
      (filter ? `<p class="blog-filter">Showing posts in <strong>${filter}</strong> · <a href="/blog/">show all</a></p>` : "") +
      `<ul class="post-list">${posts
        .map((p) => {
          const y = p.date.slice(0, 4);
          return `<li>
            <h3><a class="post-title" href="${p.url}">${p.title}</a></h3>
            <p>${p.description}</p>
            <p class="post-meta">${p.readTime} min read &nbsp; &middot; &nbsp; ${formatDate(p.date, true)}</p>
            <p class="post-tags">${postTagsHtml(p, y)}</p>
          </li>`;
        })
        .join("")}</ul>`;
  },

  // Title / description / author block at the top of each blog post (matched by URL)
  "post-header"(el) {
    const p = POSTS.find((post) => post.url === location.pathname || post.url === location.pathname + "/");
    if (!p) return;
    el.innerHTML = `
      <h1 class="post-title">${p.title}</h1>
      <p class="blog-description">${p.description}</p>
      <div class="blog-metadata">
        <div class="blog-metadata-item"><span class="blog-metadata-label">Author</span><strong>${p.author || `${SITE.firstName} ${SITE.lastName}`}</strong></div>
        <div class="blog-metadata-item"><span class="blog-metadata-label">Affiliation</span><span>${p.affiliation || "VinUniversity"}</span></div>
        <div class="blog-metadata-item"><span class="blog-metadata-label">Published</span><time datetime="${p.date}">${formatDate(p.date, true)}</time></div>
      </div>
      <p class="post-tags blog-tags">${postTagsHtml(p)}</p>`;
  },

  // Whole CV page
  cv(el) {
    const row = (badge, body) => `
      <li class="cv-item">
        <div class="cv-date"><span class="badge">${badge}</span></div>
        <div class="cv-body">${body}</div>
      </li>`;
    const sections = CV.sections.map((s) => {
      const items = s.items.map((it) =>
        row(
          it.dates,
          `<h6 class="cv-title">${it.url ? `<a href="${it.url}">${it.title}</a>` : it.title}</h6>
           ${it.subtitle ? `<h6 class="cv-subtitle">${it.subtitle}</h6>` : ""}
           ${it.bullets ? `<ul class="items">${it.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}
           ${it.text ? `<p>${it.text}</p>` : ""}`
        )
      );
      return card(s.title, `<ul class="cv-list">${items.join("")}</ul>`);
    });
    function card(title, body) {
      return `<div class="card"><h3 class="card-title">${title}</h3>${body}</div>`;
    }
    el.innerHTML = [
      card("Contact Information", `<table class="cv-contact">${CV.contact.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${v}</td></tr>`).join("")}</table>`),
      card("Professional Summary", `<p>${CV.summary}</p>`),
      ...sections,
    ].join("");
  },
};

function publicationHtml(p) {
  const venue = `<em>${p.venue}</em>, ${p.year}`;
  const links = [
    p.abstract ? `<a class="btn abstract-toggle" role="button">Abs</a>` : "",
    p.arxiv ? `<a class="btn" href="https://arxiv.org/abs/${p.arxiv}">arXiv</a>` : "",
    p.pdf ? `<a class="btn" href="${p.pdf}">PDF</a>` : "",
    p.code ? `<a class="btn" href="${p.code}">Code</a>` : "",
  ].join("");
  return `<li>
    <div class="pub">
      <div class="pub-abbr">
        <abbr class="badge">${p.abbr}</abbr>
        ${p.preview ? `<img class="preview" src="/assets/img/publication_preview/${p.preview}" alt="${p.title}" data-zoomable>` : ""}
      </div>
      <div class="pub-body">
        <div class="title">${p.title}</div>
        <div class="author">${p.authors}</div>
        <div class="periodical">${venue}</div>
        <div class="links">${links}</div>
        ${p.abstract ? `<div class="abstract"><p>${p.abstract}</p></div>` : ""}
      </div>
    </div>
  </li>`;
}

function postTagsHtml(p, year) {
  const parts = [];
  if (year) parts.push(`<a href="/blog/?year=${year}"><i class="fa-solid fa-calendar fa-sm"></i> ${year}</a>`);
  if (p.tags.length) parts.push(p.tags.map((t) => `<a href="/blog/?tag=${t}"><i class="fa-solid fa-hashtag fa-sm"></i> ${t}</a>`).join(" &nbsp; "));
  if (p.category) parts.push(`<a href="/blog/?category=${p.category}"><i class="fa-solid fa-tag fa-sm"></i> ${p.category}</a>`);
  return parts.join(" &nbsp; &middot; &nbsp; ");
}

/* ---------------------------------------------------------------------------
 * 7. Interactive bits
 * ------------------------------------------------------------------------- */

// "Abs" buttons open/close the abstract under each publication
function setupAbstracts() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".abstract-toggle");
    if (!btn) return;
    btn.closest(".pub-body").querySelector(".abstract").classList.toggle("open");
  });
}

// Filter box on the publications page (also reads #search-term from the URL)
function setupPublicationSearch() {
  const input = document.getElementById("pub-search");
  if (!input) return;
  const filter = () => {
    const term = input.value.toLowerCase().trim();
    document.querySelectorAll(".bibliography > li").forEach((li) => {
      li.hidden = term && !li.textContent.toLowerCase().includes(term);
    });
    document.querySelectorAll(".year-heading").forEach((h) => {
      const list = h.nextElementSibling;
      const empty = ![...list.children].some((li) => !li.hidden);
      h.hidden = list.hidden = empty;
    });
  };
  const fromHash = () => {
    input.value = decodeURIComponent(location.hash.slice(1));
    filter();
  };
  input.addEventListener("input", filter);
  window.addEventListener("hashchange", fromHash);
  if (location.hash) fromHash();
}

// "Contents" sidebar built from headings (blog posts and CV)
function setupToc() {
  const sidebar = document.getElementById("toc-sidebar");
  if (!sidebar) return;
  const headings = [...document.querySelectorAll(sidebar.dataset.headings || "article h2, article h3")];
  const slug = (t) => t.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, "");

  let html = "<ul class='toc-list'>";
  let open = false;
  headings.forEach((h) => {
    if (!h.id) h.id = slug(h.textContent);
    const link = `<a class="toc-link" href="#${h.id}">${h.textContent}</a>`;
    if (h.tagName === "H3" && sidebar.dataset.headings === undefined) {
      if (!open) {
        html = html.replace(/<\/li>$/, "") + "<ul class='toc-list'>";
        open = true;
      }
      html += `<li>${link}</li>`;
    } else {
      if (open) {
        html += "</ul></li>";
        open = false;
      }
      html += `<li>${link}</li>`;
    }
  });
  html += open ? "</ul></li></ul>" : "</ul>";
  sidebar.innerHTML = html;

  // Highlight the section currently being read
  const links = [...sidebar.querySelectorAll(".toc-link")];
  const update = () => {
    let active = 0;
    headings.forEach((h, i) => {
      if (h.getBoundingClientRect().top < 120) active = i;
    });
    links.forEach((l, i) => l.classList.toggle("is-active-link", i === active));
  };
  document.addEventListener("scroll", update);
  update();
}

// ctrl-k / cmd-k search palette, built from data.js
function setupSearch() {
  const ninja = document.createElement("ninja-keys");
  ninja.setAttribute("hidebreadcrumbs", "");
  ninja.setAttribute("noautoloadmdicons", "");
  ninja.setAttribute("placeholder", "Type to start searching");
  document.body.appendChild(ninja);
  Theme.apply();

  const go = (url) => () => (window.location.href = url);
  const open = (url) => () => window.open(url, "_blank");
  const short = (s, n = 80) => (s.length > n ? s.slice(0, n).trim() + "..." : s);

  const data = [
    ...NAV.map((n) => ({ id: `nav-${n.title}`, title: n.title, section: "Navigation", handler: go(n.url) })),
    ...POSTS.map((p) => ({ id: `post-${p.url}`, title: short(p.title), description: p.description, section: "Posts", handler: go(p.url) })),
    ...PUBLICATIONS.map((p, i) => ({
      id: `pub-${i}`,
      title: short(p.title),
      description: p.abbr,
      section: "Publications",
      handler: go("/publications/#" + encodeURIComponent(p.title)),
    })),
    ...NEWS.map((n, i) => ({ id: `news-${i}`, title: short(stripHtml(n.text)), section: "News", handler: go("/") })),
    { id: "social-email", title: "email", section: "Socials", handler: open(`mailto:${SITE.email}`) },
    { id: "social-github", title: "GitHub", section: "Socials", handler: open(`https://github.com/${SITE.github}`) },
    { id: "social-linkedin", title: "LinkedIn", section: "Socials", handler: open(`https://www.linkedin.com/in/${SITE.linkedin}`) },
    { id: "social-scholar", title: "Google Scholar", section: "Socials", handler: open(`https://scholar.google.com/citations?user=${SITE.scholar}`) },
    { id: "light-theme", title: "Change theme to light", section: "Theme", handler: () => Theme.set("light") },
    { id: "dark-theme", title: "Change theme to dark", section: "Theme", handler: () => Theme.set("dark") },
    { id: "system-theme", title: "Use system default theme", section: "Theme", handler: () => Theme.set("system") },
  ];
  customElements.whenDefined("ninja-keys").then(() => (ninja.data = data));
}

// Click-to-zoom on images marked data-zoomable
function setupZoom() {
  if (window.mediumZoom) {
    mediumZoom("[data-zoomable]", { background: getComputedStyle(document.body).backgroundColor });
  }
}

/* ---------------------------------------------------------------------------
 * 8. Start everything once the page has loaded
 * ------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  document.querySelectorAll("[data-render]").forEach((el) => renderers[el.dataset.render](el));
  setupProgressBar();
  setupBackToTop();
  setupAbstracts();
  setupPublicationSearch();
  setupToc();
  setupSearch();
});
window.addEventListener("load", setupZoom);
