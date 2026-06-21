---
layout: page
permalink: /publications/
title: publications
description: In reverse chronological order. You can also visit my Google Scholar profile for more details.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<style>
  .post-header .desc a,
  .post-header .post-description a,
  .post-description a {
    color: var(--global-theme-color);
  }

  .post-header .desc a:hover,
  .post-header .post-description a:hover,
  .post-description a:hover {
    color: var(--global-hover-color);
  }
</style>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const description = document.querySelector('.post-header .desc, .post-header .post-description, .post-description');
    if (description) {
      description.innerHTML = description.innerHTML.replace(
        'Google Scholar profile',
        '<a href="https://scholar.google.com/citations?user=IVHIqhkAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar profile</a>'
      );
    }

    document.querySelectorAll('.publications .periodical em').forEach((venue) => {
      venue.textContent = venue.textContent.replace(/^In\s+/, '');
    });
  });
</script>
