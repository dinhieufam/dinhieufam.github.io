---
layout: about
title: about
permalink: /
subtitle: B.Sc. Data Science @ <a href="https://vinuni.edu.vn/">VinUniversity</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: 

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

<style>
  /* Keep the degree line visually secondary to the About copy. */
  .post-header .desc {
    color: var(--global-text-color-light);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.4;
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
  }

  /* Separate the generated About-page sections (news, posts, papers, etc.). */
  .post h2 {
    border-top: 1px solid #d1d5db;
    margin-top: 2.25rem;
    padding-top: 1.75rem;
  }

  /* Separate publications from the contact links beneath them. */
  .post .social {
    border-top: 1px solid #d1d5db;
    margin-top: 2.25rem;
    padding-top: 1.75rem;
  }

  /* Soften only the contact-link icons/buttons. */
  .social .contact-icons a,
  .social .contact-icons i,
  .social .contact-icons svg {
    color: #6b7280 !important;
    fill: #6b7280 !important;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.publications .periodical em').forEach((venue) => {
      venue.textContent = venue.textContent.replace(/^In\s+/, '');
    });
  });
</script>

Hi! I'm **Hieu**, a Data Science undergraduate at VinUniversity.

My research focuses on bridging the gap between robotics research and real-world deployment. I am interested in developing robotic systems that can understand their environments, reason about complex tasks, and act reliably outside controlled laboratory settings.

To this end, I work on multimodal robot learning, vision-language-action models, agentic AI, and reinforcement learning for decision-making and control. I am particularly interested in building systems that integrate perception, reasoning, and action to enable more capable and adaptable robots.

Previously, I have worked on projects spanning robotics, medical AI, intelligent control, and natural language processing, with experience in dataset development, model training, evaluation, and deployment-oriented research.

<!-- Outside the lab, I serve as Co-President of [VinTelligence](https://www.facebook.com/vintelligencevinuni), VinUniversity's AI and Data Science club. -->

I am always happy to connect for research discussions and collaborations.
