/* =============================================================================
 * SITE CONTENT
 * -----------------------------------------------------------------------------
 * This is the main file to edit. Everything listed here is rendered
 * automatically on the right pages (and in the ctrl-k search).
 *
 *  - Lists are written NEWEST FIRST: add new items at the TOP of each list.
 *  - Text fields may contain HTML, e.g. <a href="...">link</a> or <strong>bold</strong>.
 *  - Dates are written as "YYYY-MM-DD".
 * ============================================================================= */

const SITE = {
  firstName: "Hieu",
  lastName: "Pham Dinh",
  email: "24hieu.pd@vinuni.edu.vn",
  github: "dinhieufam",
  linkedin: "dinhieufam",
  scholar: "IVHIqhkAAAAJ",
  contactNote:
    "The best way to reach me is by <strong>email</strong>. I am always happy to connect, learn, and discuss potential research collaborations.",
};

/* -----------------------------------------------------------------------------
 * NEWS — shown on the home page (latest 6).
 * --------------------------------------------------------------------------- */
const NEWS = [
  {
    date: "2026-08-18",
    text: "2 papers accepted at MICCAI 2026 workshops: <strong>UNSURE Workshop</strong> and <strong>FAIMI/BRIDGE/EPIMI Workshop</strong>!",
  },
  {
    date: "2026-02-01",
    text: 'Started as a Research Intern at <a href="https://knoveleng.com/about-us/">Knovel Engineering</a>, working on multimodal learning and vision–language–action modeling in medical and surgical contexts.',
  },
  {
    date: "2025-12-01",
    text: 'Presented a poster at <a href="https://oic.vinuni.edu.vn/">Open Innovation Conference 2025</a>, Workshop on Digital Twin for Greener and Healthier Indoor Spaces.',
  },
  {
    date: "2025-11-01",
    text: "Received a Consolation Prize in the Regional Round of the AI Olympiad for Undergraduate Students, including a top-two national performance in the Word Translation task.",
  },
  {
    date: "2025-09-01",
    text: "Named to the VinUniversity Dean’s List for Academic Excellence for AY 2024–2025.",
  },
  {
    date: "2025-08-01",
    text: 'Became Co-President of <a href="https://www.facebook.com/vintelligencevinuni">VinTelligence</a>, VinUniversity’s AI and Data Science club.',
  },
  {
    date: "2025-02-01",
    text: 'Placed in the top 10 at the DataFlow competition with a project on <a href="https://github.com/dinhieufam/Forecasting-Business-Performance">forecasting business performance</a>.',
  },
];

/* -----------------------------------------------------------------------------
 * BLOG POSTS — the list on /blog/ and "latest posts" on the home page.
 * Each post is its own HTML file (copy blog/_template.html), then add it here.
 * --------------------------------------------------------------------------- */
// Tags and categories shown as links at the top of the blog page.
const BLOG_TAGS = ["robotics", "world-models", "robot-learning", "sim-to-real"];
const BLOG_CATEGORIES = ["machine-learning"];

const POSTS = [
  {
    title: "AI Looks Easy Until You Put It in a Robot",
    url: "/blog/2026/ai-looks-easy-until-you-put-it-in-a-robot/",
    date: "2026-06-22",
    readTime: 6, // minutes
    description: "Five assumptions about AI that began to fall apart when I started working with robots in the real world.",
    tags: ["robotics", "artificial-intelligence", "sim-to-real", "robot-learning"],
    category: "machine-learning",
  },
  {
    title: "Why Everyone Is Talking About World Models — Thoughts From Someone Without 100,000 GPUs",
    url: "/blog/2026/why-everyone-is-talking-about-world-models/",
    date: "2026-06-22",
    readTime: 7,
    description:
      "A personal take on the rise of world models, why frontier labs are investing in them, and where smaller teams can still build meaningful things.",
    tags: ["world-models", "artificial-intelligence", "robotics", "foundation-models"],
    category: "machine-learning",
  },
];

/* -----------------------------------------------------------------------------
 * PUBLICATIONS — /publications/ (grouped by year) and home page (selected: true).
 * Wrap your own name in <em>...</em> to underline it.
 * Optional fields: preview (image in assets/img/publication_preview/), arxiv, code, pdf, abstract.
 * --------------------------------------------------------------------------- */
const PUBLICATIONS = [
  {
    abbr: "UNSURE '26",
    title: "Beyond Uncertainty: Generalizable Failure Monitoring for Surgical Segmentation under Acquisition Degradation",
    authors: "<em>Hieu D. Pham</em>, Dang P. M. Cao, and Thanh Trung Huynh",
    venue: "UNSURE Workshop, MICCAI",
    year: 2026,
    arxiv: "2608.16748",
    code: "https://github.com/dinhieufam/tcsr-monitor",
    selected: true,
    abstract:
      "We propose TCSR-Monitor, a post-hoc failure monitoring framework that goes beyond uncertainty estimates by incorporating complementary observable signals such as shape, temporal consistency, and image quality. The framework operates without access to model internals or ground truth during deployment and generalizes to unseen acquisition degradations, helping make AI systems more reliable in real surgical environments.",
  },
  {
    abbr: "FAIMI/BRIDGE/EPIMI '26",
    title: "When Oracle Conditioning Misleads Deployment: Conditioning-Availability Bias in Echocardiographic Segmentation",
    authors: "Dang P. M. Cao, <em>Hieu D. Pham</em>, and Hieu Pham",
    venue: "FAIMI/BRIDGE/EPIMI Workshop, MICCAI",
    year: 2026,
    arxiv: "2608.03342",
    code: "https://github.com/minhdang050806/Oracle-Conditioning-Bias-in-Echocardiographic-Segmentation",
    selected: true,
    abstract:
      "This work highlights a deployment issue that often goes unnoticed: models are frequently evaluated using auxiliary information that will not actually be available in practice. We introduce a simple audit framework to expose this conditioning-availability bias, showing how oracle-conditioned evaluation can substantially overestimate real-world performance and fairness.",
  },
  {
    abbr: "LREC '26",
    title: "VietJobs: A Vietnamese Job Advertisement Dataset",
    authors: "<em>Hieu Pham Dinh</em>, Hung Huy Nguyen, and Mo El-Haj",
    venue: "Language Resources and Evaluation Conference",
    year: 2026,
    arxiv: "2603.05262",
    code: "https://github.com/VinNLP/VietJobs",
    preview: "vietjobs.jpg",
    selected: true,
    abstract:
      "VietJobs is a large-scale corpus of 48,092 Vietnamese job advertisements containing more than 15 million words and spanning all 34 provinces and municipalities of Vietnam. It includes structured information such as job titles, categories, salaries, skills, employment conditions, occupational domains, and work types, supporting research in Vietnamese NLP and labour-market analytics.",
  },
  {
    abbr: "LREC '26",
    title: "Structured Prompting for Arabic Essay Proficiency: A Trait-Centric Evaluation Approach",
    authors: "Salim Al Mandhari, <em>Hieu Pham Dinh</em>, Mo El-Haj, and Paul Rayson",
    venue: "Language Resources and Evaluation Conference",
    year: 2026,
    arxiv: "2603.19668",
    code: "https://github.com/dinhieufam/Arabic_AES",
    preview: "arabic_aes.jpg",
    selected: true,
    abstract:
      "This work introduces standard, hybrid, and rubric-guided prompting strategies for trait-specific Arabic automatic essay scoring. Eight language models are evaluated on the QAES dataset across organization, vocabulary, development, and style in zero-shot and few-shot settings.",
  },
];

/* -----------------------------------------------------------------------------
 * CV — /cv/. Sections appear in the order written here.
 * "dates" is the text shown in the red badge.
 * --------------------------------------------------------------------------- */
const CV = {
  pdf: "/assets/pdf/Academic_CV.pdf",
  contact: [
    ["Name", "Pham Dinh Hieu"],
    ["Professional Title", "Undergraduate AI Researcher"],
    ["Email", "24hieu.pd@vinuni.edu.vn"],
  ],
  summary:
    "Data Science undergraduate at VinUniversity pursuing research in AI for robotics, with a focus on learning-based systems and real-world deployment. Experienced in machine learning, reinforcement learning, and multimodal modeling, with hands-on work in vision–language–action systems, agentic AI, and control applications.",
  sections: [
    {
      title: "Experience",
      items: [
        {
          dates: "2026 - Present",
          title: "Research Intern",
          subtitle: "Knovel Engineering",
          bullets: [
            "Developed datasets and experiments for medical audio intent detection using large language models.",
            "Investigated multimodal and vision–language–action modeling in medical and surgical contexts.",
            "Applied medical image segmentation methods, including MedSAM2, to curate datasets for vision–language–action planning.",
          ],
        },
        {
          dates: "2025 - Present",
          title: "Undergraduate Research Assistant",
          subtitle: "VinUniversity",
          bullets: [
            "Research agentic medical meal recommendation under clinical and nutritional constraints.",
            "Designed a LangGraph agent pipeline for structured reasoning and decision-making.",
            "Developed rule-based evaluation frameworks grounded in healthcare and medical-nutrition knowledge.",
          ],
        },
        {
          dates: "2025 - 2026",
          title: "Undergraduate Research Assistant",
          subtitle: "V-IndoorCare, Center of Environmental Intelligence",
          bullets: [
            "Reviewed reinforcement-learning and physics-informed reinforcement-learning methods.",
            "Evaluated reinforcement-learning algorithms for HVAC control, focusing on stability, control performance, and energy efficiency.",
          ],
        },
        {
          dates: "2025 - 2025",
          title: "Research Assistant",
          subtitle: "NLP @ VinUniversity",
          bullets: [
            "Worked on summarization, automatic essay scoring, and text classification.",
            "Built datasets through large-scale crawling, preprocessing, and analysis.",
            "Used few-shot prompting, supervised fine-tuning, and parameter-efficient tuning with LoRA.",
            "Evaluated model accuracy, factuality, and robustness.",
          ],
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          dates: "2024 - Present",
          title: "B.Sc. in Data Science",
          url: "https://vinuni.edu.vn/",
          subtitle: "VinUniversity",
          bullets: [
            "Co-President of VinTelligence, the VinUniversity AI and Data Science Club.",
            "Dean’s List Award for Academic Year 2024–2025.",
          ],
        },
      ],
    },
    {
      title: "Publications",
      items: [
        {
          dates: "LREC '26",
          title: "VietJobs: A Vietnamese Job Advertisement Dataset",
          url: "https://arxiv.org/abs/2603.05262",
          subtitle: "<em>Language Resources and Evaluation Conference (LREC)</em>",
        },
        {
          dates: "LREC '26",
          title: "Structured Prompting for Arabic Essay Proficiency: A Trait-Centric Evaluation Approach",
          url: "https://arxiv.org/abs/2603.19668",
          subtitle: "<em>Language Resources and Evaluation Conference (LREC)</em>",
        },
      ],
    },
    {
      title: "Awards",
      items: [
        {
          dates: "2025",
          title: "Consolation Prize, Regional Round of the AI Olympiad for Undergraduate Students",
          subtitle: "Vietnam Association for Information Processing",
          text: "Built video motion recognition and NLP word-translation systems under a six-hour constraint, achieving a top-two national performance in the Word Translation task.",
        },
        {
          dates: "2025",
          title: "Top 10, DataFlow Competition",
          url: "https://github.com/dinhieufam/Forecasting-Business-Performance",
          subtitle: "Hanoi University of Science",
          text: "Built SARIMA, LSTM, Transformer, and Prophet forecasting models for two-year business-performance prediction.",
        },
        {
          dates: "2024",
          title: "Silver Medal, Vietnam National Round of the International Olympiad in Artificial Intelligence",
          url: "https://ioai-official.org/",
          subtitle: "International Olympiad in Artificial Intelligence",
          text: "Worked on pill-image classification, PM2.5 forecasting, and biomedical text summarization.",
        },
      ],
    },
  ],
};
