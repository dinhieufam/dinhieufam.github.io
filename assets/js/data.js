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
 * NEWS - shown on the home page (latest 6).
 * --------------------------------------------------------------------------- */
const NEWS = [
  {
  date: "2026-09-07",
  text: 'Started a semester exchange at <a href="https://www.engineering.utoronto.ca/">Faculty of Applied Science and Engineering, University of Toronto</a>',
  },
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
 * BLOG POSTS - the list on /blog/ and "latest posts" on the home page.
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
    title: "Why Everyone Is Talking About World Models - Thoughts From Someone Without 100,000 GPUs",
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
 * PUBLICATIONS - /publications/ (grouped by year) and home page (selected: true).
 * Wrap your own name in <em>...</em> to underline it.
 * Optional fields: preview (image in assets/img/publication_preview/), arxiv, code, pdf, abstract.
 * --------------------------------------------------------------------------- */
const PUBLICATIONS = [
  {
    abbr: "preprint",
    title: "Successful but Unsafe: An Analytical Benchmark for Revealing Collisions in Vision-and-Language Navigation",
    authors: "<em>Hieu D. Pham</em>, Quoc-An Luong, and Dung D. Le",
    venue: "Under Review",
    year: 2026,
    arxiv: "2610.14682",
    code: "https://github.com/dinhieufam/vln-safe",
    preview: "vln_safe.png",
    selected: true,
    abstract:
      "VLN agents can succeed while still colliding with obstacles. We introduce VLN-Safe to benchmark collision safety and a training-free guard that reduces collisions by up to 98% and improves navigation success by up to 29.3 percentage points under blocking, without sacrificing success under sliding.",
  },
  {
    abbr: "MICCAI '26",
    title: "Beyond Uncertainty: Generalizable Failure Monitoring for Surgical Segmentation under Acquisition Degradation",
    authors: "<em>Hieu D. Pham</em>, Dang P. M. Cao, and Thanh Trung Huynh",
    venue: "International Conference on Medical Image Computing and Computer Assisted Intervention, UNSURE Workshop",
    year: 2026,
    arxiv: "2608.16748",
    code: "https://github.com/dinhieufam/tcsr-monitor",
    preview: "unsure.png",
    selected: true,
    abstract:
      "We propose TCSR-Monitor, a post-hoc failure monitoring framework that goes beyond uncertainty estimates by incorporating complementary observable signals such as shape, temporal consistency, and image quality. The framework operates without access to model internals or ground truth during deployment and generalizes to unseen acquisition degradations, helping make AI systems more reliable in real surgical environments.",
  },
  {
    abbr: "MICCAI '26",
    title: "When Oracle Conditioning Misleads Deployment: Conditioning-Availability Bias in Echocardiographic Segmentation",
    authors: "Dang P. M. Cao, <em>Hieu D. Pham</em>, and Hieu Pham",
    venue: "International Conference on Medical Image Computing and Computer Assisted Intervention, FAIMI/BRIDGE/EPIMI Workshop",
    year: 2026,
    arxiv: "2608.03342",
    code: "https://github.com/minhdang050806/Oracle-Conditioning-Bias-in-Echocardiographic-Segmentation",
    preview: "fami.png",
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
 * CV - /cv/. Sections appear in the order written here; items newest first.
 *   dates     left column, e.g. "2025 - 2026"
 *   title     bold heading (organization / award); add url: "..." to link it
 *   subtitle  grey line under it, e.g. "Research Intern · Hanoi, VN"
 *   text      one short sentence (HTML allowed, e.g. Advisor: <a href="...">Name</a>)
 * A section with compact: true shows each item as one line (dates + title only).
 * --------------------------------------------------------------------------- */
const CV = [
  {
    title: "Education",
    items: [
      {
        dates: "2024 - Present",
        title: "VinUniversity",
        url: "https://vinuni.edu.vn/",
        subtitle: "B.Sc. in Data Science · Hanoi, VN",
      },
    ],
  },
  {
    title: "Experience",
    items: [
      {
        dates: "2026 - Present",
        title: "Center for AI Research, VinUniversity",
        url: "https://cair.vinuni.edu.vn/",
        subtitle: "Research Assistant · Hanoi, VN",
        text: "Safety Vision-and-Language Navigation. Advisor: <a href='https://andrew-dungle.github.io/'>Dr. Dung Duy Le</a>",
      },
      {
        dates: "2026",
        title: "Knovel Engineering",
        url: "https://knoveleng.com/about-us/",
        subtitle: "Research Intern · Remote, SG",
        text: "Multimodal and vision-language-action modeling in medical and surgical contexts. Advisor: <a href='https://github.com/leduckhai'>Khai Le-Duc</a> ",
      },
      {
        dates: "2025 - Present",
        title: "Ecomind Lab, VinUniversity",
        subtitle: "Undergraduate Research Assistant · Hanoi, VN",
        text: "Agentic medical meal recommendation under nutritional constraints. Advisor: <a href='https://thanhtrunghuynh93.github.io/'>Dr. Thanh Trung Huynh</a>",
      },
      {
        dates: "2025 - 2026",
        title: "V-IndoorCare Lab, VinUniversity",
        subtitle: "Undergraduate Research Assistant · Hanoi, VN",
        text: "Reinforcement learning for HVAC control. Advisor: <a href='https://andrew-dungle.github.io/'>Dr. Dung Duy Le</a>",
      },
      {
        dates: "2025",
        title: "NLP @ VinUniversity",
        subtitle: "Undergraduate Research Assistant · Hanoi, VN",
        text: "Summarization, automatic essay scoring, and text classification. Advisor: <a href='https://elhaj.uk/'>Dr. Mo El-Haj</a>",
      },
    ],
  },
  {
    title: "Awards & Honors",
    compact: true, // one line per item: just dates + title
    items: [
      { dates: "2026", title: "VinUniversity Dean's List for Academic Excellence (AY 2025-2026)" },
      { dates: "2025", title: "Consolation Prize, Regional Round of the AI Olympiad for Undergraduate Students" },
      { dates: "2025", title: "VinUniversity Dean's List for Academic Excellence (AY 2024-2025)" },
      { dates: "2024", title: "Silver Medal, Vietnam National Round of the International Olympiad in Artificial Intelligence" },
    ],
  },
  {
    title: "Service & Teaching",
    compact: true,
    items: [
      { dates: "2025 - 2026", title: "Co-President - VinTelligence, VinUniversity’s AI and Data Science Club" },
      { dates: "2025", title: "Reviewer - IEEE BigData 2025, LLMs4All Workshop" },
    ],
  },
];
