# al-folio Website Content Specification

> Draft for confirmation. This document is written in the same structure that will be used to populate the `dinhieufam.github.io` al-folio template. The attached `Academic_CV.pdf` is the source of truth where it differs from `website_v0`.

## 1. Implementation Rules

- Keep the template's existing typography, spacing, cards, navigation, responsive behavior, and light/dark modes.
- Replace the default purple accent with red; do not redesign the template.
- Use the template's native content locations instead of creating custom page layouts.
- Initial navigation: **about**, **publications**, **projects**, **blog**, and **CV**.
- Keep the phone number and professional references inside the downloadable CV only. Do not expose them elsewhere on the website.

## 2. Theme Accent

Only the theme color tokens should change.

| Token          | Light mode | Dark mode | Use                                                 |
| -------------- | ---------: | --------: | --------------------------------------------------- |
| Primary accent |  `#B91C1C` | `#F87171` | Links, active navigation, icons, publication labels |
| Hover accent   |  `#991B1B` | `#FCA5A5` | Link and button hover states                        |

This is a deep academic red rather than a bright product red. It has enough contrast on the template's white background while remaining readable and restrained. All other colors and design tokens remain the template defaults.

In al-folio v1, this is a small site-specific theme-token override under `_sass/`; no layout or component override is needed.

## 3. Site Configuration

Target file: `_config.yml`

```yaml
title: blank
first_name: Hieu
middle_name:
last_name: Pham Dinh
contact_note: >
  The best way to reach me is by email. I am always happy to connect,
  learn, and discuss potential research collaborations.
description: >
  Personal academic website of Hieu Pham Dinh, a Data Science undergraduate
  at VinUniversity working on AI for robotics, multimodal learning, agentic AI,
  reinforcement learning, and real-world machine learning systems.
keywords: artificial intelligence, machine learning, robotics, multimodal AI, agentic AI, reinforcement learning, data science
lang: en
icon: 🤖

url: https://dinhieufam.github.io
baseurl: ""

navbar_fixed: true
footer_fixed: true
back_to_top: true
search_enabled: true
socials_in_search: true
posts_in_search: true
bib_search: true
max_width: 930px

blog_name: Hieu's notes
blog_description: Research ideas, implementation notes, and lessons from building machine learning systems.
```

## 4. Social Profiles

Target file: `_data/socials.yml`

```yaml
cv_pdf: /assets/pdf/Academic_CV.pdf
email: 24hieu.pd@vinuni.edu.vn
github_username: dinhieufam
linkedin_username: dinhieufam
scholar_userid: IVHIqhkAAAAJ
rss_icon: true

custom_social:
  logo: https://huggingface.co/front/assets/huggingface_logo-noborder.svg
  title: Hugging Face
  url: https://huggingface.co/dinhieufam
```

Profile links:

- Email: `24hieu.pd@vinuni.edu.vn`
- GitHub: `https://github.com/dinhieufam`
- LinkedIn: `https://www.linkedin.com/in/dinhieufam/`
- Google Scholar: `https://scholar.google.com/citations?hl=en&user=IVHIqhkAAAAJ`

## 5. About Page

Target file: `_pages/about.md`

```yaml
---
layout: about
title: about
permalink: /
subtitle: Data Science undergraduate at <a href="https://vinuni.edu.vn/">VinUniversity</a> · Hanoi, Vietnam

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>College of Engineering &amp; Computer Science</p>
    <p>VinUniversity · Hanoi, Vietnam</p>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 6

latest_posts:
  enabled: true
  scrollable: true
  limit: 3
---
```

Page body:

```markdown
Hi! I'm **Hieu**, a Data Science undergraduate at VinUniversity interested in
building learning-based systems that work beyond the lab.

My research sits at the intersection of **AI for robotics**, **multimodal
learning**, **agentic AI**, and **reinforcement learning**. I have worked on
vision–language–action systems, medical AI, intelligent control, and natural
language processing, with experience spanning dataset development, model
training and evaluation, and real-world deployment.

I am particularly interested in scalable and efficient approaches to robotic
learning: systems that can understand multiple modalities, reason over complex
tasks, and act reliably in real environments. My work has resulted in two LREC
2026 publications, alongside research experience with Knovel Engineering and
several research groups at VinUniversity.

Outside the lab, I serve as Co-President of
[VinTelligence](https://www.facebook.com/vintelligencevinuni), VinUniversity's
AI and Data Science club. I am always happy to connect, learn, and collaborate.

## Research interests

### AI for robotics and multimodal learning

I am interested in learning-based robotic systems that connect perception,
language, reasoning, and action. My current work includes multimodal modeling
and vision–language–action planning in medical and surgical settings.

### Agentic AI

I build agent-based systems that reason over structured constraints and make
multi-step decisions. One current direction is agentic medical meal
recommendation using clinical and nutritional knowledge.

### Reinforcement learning and intelligent control

I study reinforcement learning for real-world control problems, including
physics-informed methods and energy-efficient HVAC control. I am especially
interested in reliable, efficient methods that can transfer from simulation to
practical environments.
```

Profile asset:

- Copy `website_v0/assets/profile_picture.JPEG` to `assets/img/prof_pic.jpg`.

## 6. News / Announcements

Create one file per item in `_news/`. Each file uses `layout: post`, `inline: true`, and `related_posts: false`.

### `_news/2026-02-knovel.md`

```markdown
---
layout: post
date: 2026-02-01
inline: true
related_posts: false
---

Started as a Research Intern at [Knovel Engineering](https://knoveleng.com/about-us/), working on multimodal learning and vision–language–action modeling in medical and surgical contexts.
```

### `_news/2025-12-oic.md`

```markdown
---
layout: post
date: 2025-12-01
inline: true
related_posts: false
---

Presented a poster at [Open Innovation Conference 2025](https://oic.vinuni.edu.vn/), Workshop on Digital Twin for Greener and Healthier Indoor Spaces.
```

### `_news/2025-11-ai-olympiad.md`

```markdown
---
layout: post
date: 2025-11-01
inline: true
related_posts: false
---

Received a Consolation Prize in the Regional Round of the AI Olympiad for Undergraduate Students, including a top-two national performance in the Word Translation task.
```

### `_news/2025-09-deans-list.md`

```markdown
---
layout: post
date: 2025-09-01
inline: true
related_posts: false
---

Named to the VinUniversity Dean's List for Academic Excellence for AY 2024–2025.
```

### `_news/2025-08-vintelligence.md`

```markdown
---
layout: post
date: 2025-08-01
inline: true
related_posts: false
---

Became Co-President of [VinTelligence](https://www.facebook.com/vintelligencevinuni), VinUniversity's AI and Data Science club.
```

### `_news/2025-02-dataflow.md`

```markdown
---
layout: post
date: 2025-02-01
inline: true
related_posts: false
---

Placed in the top 10 at the DataFlow competition with a project on forecasting business performance.
```

The July 2024 IOAI silver medal belongs in the CV and can be added as an older announcement if a longer news history is desired.

## 7. Publications

Target file: `_bibliography/papers.bib`

The author name in `_config.yml` should be configured so al-folio highlights **Hieu Pham Dinh** in the author lists.

```bibtex
---
---

@inproceedings{dinh2026vietjobs,
  abbr         = {LREC 2026},
  title        = {VietJobs: A Vietnamese Job Advertisement Dataset},
  author       = {Dinh, Hieu Pham and Nguyen, Hung Huy and El-Haj, Mo},
  booktitle    = {Language Resources and Evaluation Conference},
  year         = {2026},
  abstract     = {VietJobs is a large-scale corpus of 48,092 Vietnamese job advertisements containing more than 15 million words and spanning all 34 provinces and municipalities of Vietnam. It includes structured information such as job titles, categories, salaries, skills, employment conditions, occupational domains, and work types, supporting research in Vietnamese NLP and labour-market analytics.},
  arxiv        = {2603.05262},
  pdf          = {https://arxiv.org/pdf/2603.05262},
  code         = {https://github.com/VinNLP/VietJobs},
  preview      = {vietjobs.jpg},
  selected     = {true},
  bibtex_show  = {true}
}

@inproceedings{almandhari2026arabic,
  abbr         = {LREC 2026},
  title        = {Structured Prompting for Arabic Essay Proficiency: A Trait-Centric Evaluation Approach},
  author       = {Al Mandhari, Salim and Dinh, Hieu Pham and El-Haj, Mo and Rayson, Paul},
  booktitle    = {Language Resources and Evaluation Conference},
  year         = {2026},
  abstract     = {This work introduces standard, hybrid, and rubric-guided prompting strategies for trait-specific Arabic automatic essay scoring. Eight language models are evaluated on the QAES dataset across organization, vocabulary, development, and style in zero-shot and few-shot settings.},
  arxiv        = {2603.19668},
  pdf          = {https://arxiv.org/pdf/2603.19668},
  code         = {https://github.com/dinhieufam/Arabic_AES},
  preview      = {arabic_aes.jpg},
  selected     = {true},
  bibtex_show  = {true}
}
```

Publication preview assets:

- `website_v0/assets/publications/vietjobs.jpg` → `assets/img/publication_preview/vietjobs.jpg`
- `website_v0/assets/publications/arabic_aes.jpg` → `assets/img/publication_preview/arabic_aes.jpg`

Target page: `_pages/publications.md`

```yaml
---
layout: page
permalink: /publications/
title: publications
description: Research publications in natural language processing, multimodal learning, and applied AI.
nav: true
nav_order: 2
---
```

Keep the template's existing bibliography search and `{% bibliography %}` rendering.

## 8. Projects

Keep `_pages/projects.md` as the template's project index and replace sample projects with the following initial entry.

Target file: `_projects/1_finlove.md`

```yaml
---
layout: page
title: FinLove
description: An intelligent portfolio construction and analysis platform combining quantitative finance, forecasting, and retrieval-augmented generation.
img: assets/img/projects/finlove.jpg
importance: 1
category: machine learning systems
github: https://github.com/dinhieufam/FinLove
---
```

Page body:

```markdown
FinLove is a full-stack portfolio management platform for investment planning,
risk analysis, backtesting, and forecasting.

The platform combines portfolio optimization methods—including Markowitz,
Black–Litterman, and CVaR—with risk models such as Ledoit–Wolf, GLASSO, GARCH,
and DCC. Its forecasting pipeline evaluates ARIMA, Prophet, LSTM, and
statistical models, then selects the strongest models to estimate future
portfolio returns with uncertainty.

I also integrated an LLM-powered retrieval-augmented generation system to
provide context-aware explanations of portfolio performance and risk metrics.

**Stack:** FastAPI, Next.js, Python, CVXPY, TensorFlow, and LLM-based RAG.
```

A project preview image is still needed. Until one is supplied, use a clean screenshot from the FinLove repository or omit `img` so the template does not show a broken thumbnail.

## 9. Blog

Target file: `_pages/blog.md`

Keep the template page unchanged except for the `blog_name` and `blog_description` values in `_config.yml`.

Migrate `website_v0/blog-transformer-from-scratch.html` to:

`_posts/2025-01-01-building-transformers-from-scratch.md`

```yaml
---
layout: post
title: "Building Transformers from Scratch: Understanding the Architecture Behind Modern NLP"
date: 2025-01-01
description: A ground-up guide to self-attention, multi-head attention, positional encoding, feed-forward networks, normalization, and residual connections.
tags: transformers nlp deep-learning attention
categories: machine-learning
featured: true
related_posts: false
---
```

The article body should be converted from the existing HTML to Markdown without changing its technical content.

## 10. CV Page

Copy the attached file:

- `/Users/dinhieufam/Downloads/Academic_CV.pdf` → `assets/pdf/Academic_CV.pdf`

Target file: `_pages/cv.md`

```yaml
---
layout: cv
permalink: /cv/
title: CV
nav: true
nav_order: 5
cv_pdf: /assets/pdf/Academic_CV.pdf
cv_format: rendercv
description: Education, research experience, publications, awards, and selected projects.
toc:
  sidebar: left
---
```

Target file: `_data/cv.yml`

The native HTML CV should mirror the attached PDF with these sections:

### Header

- **Name:** Pham Dinh Hieu
- **Label:** Data Science Undergraduate · AI Researcher
- **Email:** 24hieu.pd@vinuni.edu.vn
- **Location:** Hanoi, Vietnam
- **Summary:** Data Science undergraduate at VinUniversity pursuing research in AI for robotics, with a focus on learning-based systems and real-world deployment. Experienced in machine learning, reinforcement learning, and multimodal modeling, with hands-on work in vision–language–action systems, agentic AI, and control applications.

### Education

- **VinUniversity** — Bachelor of Science in Data Science, September 2024–Present
  - Major GPA: 3.86/4.00
  - Co-President, VinTelligence — VinUniversity AI and Data Science Club
  - Dean's List, AY 2024–2025

### Experience

1. **Research Intern, Knovel Engineering** — February 2026–Present
   - Developed datasets and experiments for medical audio intent detection using large language models.
   - Investigated multimodal and vision–language–action modeling in medical and surgical contexts.
   - Applied medical image segmentation methods including MedSAM2 to curate datasets for vision–language–action planning.
2. **Undergraduate Research Assistant, VinUniversity** — November 2025–Present
   - Researching agentic medical meal recommendation under clinical and nutritional constraints.
   - Designed a LangGraph agent pipeline for structured reasoning and decision-making.
   - Developed rule-based evaluation frameworks grounded in healthcare and medical-nutrition knowledge.
3. **Undergraduate Research Assistant, V-IndoorCare** — February 2025–March 2026
   - Reviewed reinforcement-learning and physics-informed reinforcement-learning methods.
   - Evaluated RL algorithms for HVAC control, focusing on stability, control performance, and energy efficiency.
4. **Research Assistant, NLP @ VinUniversity** — March 2025–October 2025
   - Worked on summarization, automatic essay scoring, and text classification.
   - Built datasets through large-scale crawling, preprocessing, and analysis.
   - Used few-shot prompting, supervised fine-tuning, and LoRA.
   - Evaluated model accuracy, factuality, and robustness.

### Publications

Use the same two LREC 2026 records and links defined in `_bibliography/papers.bib`.

### Awards

1. **Consolation Prize, Regional Round of the AI Olympiad for Undergraduate Students** — November 2025
   - Built video motion recognition and NLP word-translation systems under a six-hour constraint.
   - Achieved a top-two national performance in the Word Translation task.
2. **Top 10, DataFlow Competition** — February 2025
   - Built SARIMA, LSTM, Transformer, and Prophet forecasting models for two-year business-performance prediction.
   - Code: `https://github.com/dinhieufam/Forecasting-Business-Performance`
3. **Silver Medal, Vietnam National Round of the International Olympiad in Artificial Intelligence** — July 2024
   - Worked on pill-image classification, PM2.5 forecasting, and biomedical text summarization.

### Projects

- **FinLove: Intelligent Portfolio Construction & Analysis Platform** — October–December 2025
  - Use the project summary and repository link from the Projects section above.

### References

Keep Dr. Mo El-Haj and Dr. Le Duy Dung in the PDF. Omit references and their email addresses from the native website CV unless explicitly requested.

## 11. Navigation Order

| Order | Page         | Template source          |
| ----: | ------------ | ------------------------ |
|     1 | About        | `_pages/about.md`        |
|     2 | Publications | `_pages/publications.md` |
|     3 | Projects     | `_pages/projects.md`     |
|     4 | Blog         | `_pages/blog.md`         |
|     5 | CV           | `_pages/cv.md`           |

Remove or hide all demo navigation pages and delete the sample Einstein content before launch.

## 12. Confirmation Checklist

- [ ] Confirm the public name format. The CV uses **Pham Dinh Hieu**, while the old site uses **Hieu Pham Dinh**.
- [ ] Approve deep red `#B91C1C` as the replacement for the template's purple accent.
- [ ] Approve **Data Science Undergraduate · AI Researcher** as the short website title.
- [ ] Approve the rewritten biography and research-interest structure.
- [ ] Confirm that both papers should be shown as **LREC 2026 publications**, not “Submitted.”
- [ ] Confirm the corrected Arabic AES author list, including **Paul Rayson**.
- [ ] Confirm that FinLove should be included as the initial project.
- [ ] Confirm that the transformer article should be migrated and retain the January 2025 date.
- [ ] Confirm that phone and reference details should remain PDF-only.
- [ ] Provide a FinLove screenshot, or approve launching the project entry without a thumbnail.
