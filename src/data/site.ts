/* Words cycling inside the hero pill — reference list, in order. */
export const heroPillPhrases = [
  "AI Readiness Audit",
  "AI Proof of Concept",
  "AI Chatbot Development",
  "AI Integration Sprint",
  "RAG Knowledge Base",
  "Custom AI Agent Build",
  "AI Managed Pod",
  "AI Workflow Automation",
];

export const heroPlatformIcons = [
  {
    label: "4.9 on Clutch",
    href: "https://www.upwork.com/freelancers/~01e4a2a57ebc0df005",
    image: "/assets/upwork.svg",
    alt: "Upwork",
    rounded: false,
  },
  {
    label: "ISO 27001 Certified",
    href: "https://www.fiverr.com/",
    image: "/assets/fiverr.svg",
    alt: "Fiverr",
    rounded: false,
  },
  {
    label: "Zyvarex (est. 2012)",
    href: "https://clutch.co/",
    image: "/assets/clutch.svg",
    alt: "clutch",
    rounded: true,
  },
  {
    label: "Austin, TX",
    href: "https://techbehemoths.com",
    image: "/assets/techbehemoths.svg",
    alt: "techbehemoths",
    rounded: true,
  },
];

/* Brand strip runs as two counter-scrolling marquee rows on the reference. */
export const partnerBrandsRowOne = [
  { src: "/images/brands/homesharea.png", width: 170, height: 83 },
  { src: "/images/brands/bajcogroup.png", width: 170, height: 83 },
  { src: "/images/brands/capitalcareinvestment.png", width: 170, height: 83 },
  { src: "/images/brands/mahaana.png", width: 170, height: 83 },
  { src: "/images/brands/bondheshams.png", width: 170, height: 83 },
  { src: "/images/brands/duoworld.png", width: 170, height: 83 },
  { src: "/images/brands/curryking.png", width: 170, height: 83 },
  { src: "/images/brands/frewert-media.png", width: 170, height: 83 },
];

export const partnerBrandsRowTwo = [
  { src: "/images/brands/misa.png", width: 170, height: 83 },
  { src: "/images/brands/darerc.png", width: 170, height: 83 },
  { src: "/images/brands/azm.png", width: 170, height: 83 },
  { src: "/images/brands/citrusbits.png", width: 170, height: 83 },
  { src: "/images/brands/hyversa.png", width: 170, height: 83 },
  { src: "/images/brands/japan-statioan.png", width: 170, height: 83 },
  { src: "/images/brands/pasha.png", width: 170, height: 83 },
  { src: "/images/brands/lmconsulting.png", width: 170, height: 83 },
];

/**
 * Industry cards: app image first, then web image; tags sit as translucent
 * pills overlaid on the bottom of their own image.
 */
export const industries = [
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    bg: "#D1E9FF",
    description:
      "Your clinical teams waste hours searching through documentation, and you need HIPAA compliance.",
    appImage: "/assets/HealthcareApp.png",
    appAlt: "health care app",
    appTags: [
      "HIPAA-compliant medical knowledge base",
      "Clinical document processing",
    ],
    webImage: "/assets/HealthcareWeb.png",
    webAlt: "health care web",
    webTags: ["Patient communication chatbot",
      "Diagnostic support tools",
      "RAG Knowledge Base"],
  },
  {
    id: "fintech",
    title: "Financial Services & Fintech",
    bg: "#FBE8FF",
    description:
      "Manual compliance reviews, document processing, and risk assessment are slowing your operations.",
    appImage: "/assets/FintechApp.png",
    appAlt: "fintech app",
    appTags: [
      "Automated compliance document analysis",
      "Fraud detection and risk scoring",
    ],
    webImage: "/assets/FintechWeb.png",
    webAlt: "fintech web",
    webTags: [
      "Intelligent customer onboarding",
      "AI-powered report generation",
      "AI Workflow Automation",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    bg: "#FDEAD7",
    description:
      "Generic product discovery and manual customer support are hurting conversion rates and retention.",
    appImage: "/assets/EcommerceApp.png",
    appAlt: "e-commerce app",
    appTags: [
      "AI-powered product recommendations",
      "Customer service chatbot trained on your catalog",
    ],
    webImage: "/assets/EcommerceWeb.png",
    webAlt: "e-commerce web",
    webTags: [
      "Automated inventory and demand forecasting",
      "Visual search and personalization",
      "AI Chatbot Development",
    ],
  },
  {
    id: "saas",
    title: "SaaS & Technology",
    bg: "#E5E7EB",
    description:
      "Your users expect AI-powered features but your team is busy shipping the roadmap.",
    appImage: "/assets/SaaSApp.png",
    appAlt: "saas app",
    appTags: [
      "AI copilot embedded in your product",
      "Smart search across user data",
    ],
    webImage: "/assets/SaasWeb.png",
    webAlt: "saas web",
    webTags: [
      "Automated content generation",
      "Predictive analytics dashboards",
      "AI Integration Sprint",
    ],
  },
  {
    id: "enterprise",
    title: "Different industry?",
    bg: "#CCFBEF",
    description:
      "Tell us about your use case and we will recommend the right package.",
    appImage: "/assets/EnterpriseApp.png",
    appAlt: "enterprise app",
    appTags: ["AI Integration Sprint", "RAG Knowledge Base"],
    webImage: "/assets/EnterpriseWeb.png",
    webAlt: "enterprise web",
    webTags: ["AI Workflow Automation", "AI Chatbot Development"],
  },
];

/* Rendered as three two-column rows on the reference, not one six-item grid. */
export const valueProps = [
  ["Production-Grade AI Engineering", "Transparent, Fixed Pricing"],
  [
    "Backed by 14+ Years and 800+ Projects",
    "Full-Stack AI and Application Layer",
  ],
  ["You Own 100% of the Code", "Sprint-Based Delivery with Real Demos"],
];

export const services = [
  {
    title: "AI Readiness Audit",
    href: "/services/ai-readiness-audit",
    tags: ["Start Here", "1-2 weeks", "Starting at $3,000"],
    description:
      "Know exactly where AI can move the needle before you invest a dollar in development.",
    image: "/images/UI_UX.jpg",
  },
  {
    title: "AI Proof of Concept Sprint",
    href: "/services/ai-proof-of-concept",
    tags: ["Start Here", "2-4 weeks", "Starting at $8,000"],
    description:
      "Validate your AI idea with a working prototype in weeks, not months.",
    image: "/images/App-design.jpg",
  },
  {
    title: "AI Chatbot Development",
    href: "/services/ai-chatbot-development",
    tags: ["Build", "2-4 weeks", "Starting at $12,000"],
    description:
      "Ship a custom AI chatbot that actually understands your business in weeks.",
    image: "/images/AI-ML.jpeg",
  },
  {
    title: "AI Integration Sprint",
    href: "/services/ai-integration",
    tags: ["Build", "4 weeks", "Starting at $15,000"],
    description:
      "Add AI superpowers to your existing product without a rewrite.",
    image: "/images/SaaS.jpg",
  },
  {
    title: "RAG Knowledge Base",
    href: "/services/rag-knowledge-base",
    tags: ["Build", "3-4 weeks", "Starting at $15,000"],
    description:
      "Turn your documents into an AI-powered knowledge base your team can actually query.",
    image: "/images/Branding.jpg",
  },
];

export const stats = [
  {
    value: 14,
    suffix: "+",
    label: "Years of Experience",
    icon: "/images/home/HappyClient.png",
  },
  {
    value: 800,
    suffix: "+",
    label: "Projects Delivered",
    prefix: "",
    icon: "/images/home/RaisedByOurClient.png",
  },
  {
    value: 100,
    suffix: "+",
    label: "Engineers",
    icon: "/images/home/CountriesServed.png",
  },
  {
    value: 4,
    suffix: ".9★",
    label: "Clutch Rating",
    icon: "/images/home/TopRated.png",
  },
  {
    value: 95,
    suffix: "%",
    label: "Client Retention",
    icon: "/images/home/JobSuccess.png",
  },
];

export type PricingPlan = {
  name: string;
  ctaLabel: string;
  ctaHref: string;
  blurb: string;
  price: string;
  period?: string;
  label: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Not sure where AI fits?",
    blurb:
      "Get a clear, prioritized AI roadmap for your business in 1-2 weeks. We identify the highest-impact opportunities and give you a build-vs-buy analysis.",
    price: "$3,000",
    period: "starting",
    ctaLabel: "Get Your AI Roadmap",
    ctaHref: "/services/ai-readiness-audit",
    label: "Start Here",
    features: [
      "AI opportunity assessment",
      "Prioritized roadmap with ROI",
      "Executive summary for your board",
    ],
  },
  {
    name: "Ready to build something?",
    blurb:
      "From AI chatbots and RAG knowledge bases to custom agents and integrations. Pick the package that matches your use case. Delivery in 2-8 weeks.",
    price: "$8K-$20K",
    period: "per project",
    ctaLabel: "See Build Packages",
    ctaHref: "/services",
    label: "Build",
    highlighted: true,
    features: [
      "AI chatbots, RAG, agents, integrations",
      "Production-ready deployment",
      "Fixed scope, timeline, and pricing",
    ],
  },
  {
    name: "Need an ongoing AI team?",
    blurb:
      "A dedicated AI engineering pod (engineers + QA + tech lead) that ships every sprint. Embedded in your workflow, accountable for outcomes.",
    price: "$12K",
    period: "/mo starting",
    ctaLabel: "Learn About AI Pods",
    ctaHref: "/services/ai-managed-pod",
    label: "Scale",
    features: [
      "Dedicated AI engineers + QA + lead",
      "2-week sprints with demos",
      "Direct Slack/Teams access",
    ],
  },
  {
    name: "Custom AI Agent Development",
    blurb:
      "Build an AI agent that actually does the work, not just answers questions.",
    price: "$20,000",
    period: "per project",
    ctaLabel: "Learn more",
    ctaHref: "/services/ai-agent-development",
    label: "Build",
    features: [
      "We deploy to YOUR infrastructure (AWS, Azure, GCP, or on-prem).",
      "All source code, documentation, and models are yours.",
      "No proprietary wrappers, no vendor lock-in.",
    ],
  },
];

export type Testimonial = {
  testimonialText: string;
  image: string;
  imageAlt: string;
  name: string;
};

export const upperTestimonials: Testimonial[] = [
  {
    testimonialText:
      "We needed an AI chatbot that understood our 500-page product docs. Zyvarex delivered a production-ready RAG system in 3 weeks. Our support team now handles 40% fewer tickets.",
    image: "/images/Darell.png",
    imageAlt: "Sarah Chen",
    name: "Sarah Chen",
  },
  {
    testimonialText:
      "The AI Readiness Audit saved us from building the wrong thing. They identified 3 AI use cases we had not considered, and the ROI analysis convinced our board to greenlight the $20K agent build.",
    image: "/images/Oliver.png",
    imageAlt: "Michael Torres",
    name: "Michael Torres",
  },
  {
    testimonialText:
      "We tried building an AI agent with freelancers. It broke in production. Zyvarex rebuilt it in 6 weeks with proper error handling, monitoring, and guardrails. It has been running for 4 months without issues.",
    image: "/images/Farukh.png",
    imageAlt: "David Park",
    name: "David Park",
  },
];

export const lowerTestimonials: Testimonial[] = [
  {
    testimonialText:
      "We tried building an AI agent with freelancers. It broke in production. Zyvarex rebuilt it in 6 weeks with proper error handling, monitoring, and guardrails. It has been running for 4 months without issues.",
    image: "/images/James.png",
    imageAlt: "David Park",
    name: "David Park",
  },
  {
    testimonialText:
      "We needed an AI chatbot that understood our 500-page product docs. Zyvarex delivered a production-ready RAG system in 3 weeks. Our support team now handles 40% fewer tickets.",
    image: "/images/Muhun.png",
    imageAlt: "Sarah Chen",
    name: "Sarah Chen",
  },
  {
    testimonialText:
      "The AI Readiness Audit saved us from building the wrong thing. They identified 3 AI use cases we had not considered, and the ROI analysis convinced our board to greenlight the $20K agent build.",
    image: "/images/Ai_Esa.png",
    imageAlt: "Michael Torres",
    name: "Michael Torres",
  },
];

/** Inner-page carousel testimonials — the three with a role line. */
export const carouselTestimonials = [
  {
    quote:
      "We needed an AI chatbot that understood our 500-page product docs. Zyvarex delivered a production-ready RAG system in 3 weeks. Our support team now handles 40% fewer tickets.",
    name: "Sarah Chen",
    role: "VP of Engineering, Series B SaaS Company",
    image: "/images/Darell.png",
  },
  {
    quote:
      "The AI Readiness Audit saved us from building the wrong thing. They identified 3 AI use cases we had not considered, and the ROI analysis convinced our board to greenlight the $20K agent build.",
    name: "Michael Torres",
    role: "CTO, Fintech Startup",
    image: "/images/Oliver.png",
  },
  {
    quote:
      "We tried building an AI agent with freelancers. It broke in production. Zyvarex rebuilt it in 6 weeks with proper error handling, monitoring, and guardrails. It has been running for 4 months without issues.",
    name: "David Park",
    role: "Head of Product, E-commerce Platform",
    image: "/images/Farukh.png",
  },
];

export const formServices = [
  "UI/UX Design",
  "Web Design",
  "Web Development",
  "Branding",
];

export const formBudgets = ["$1k - $5k", "$5k - $10k", "$10k - $25k", "$25k+"];

export const CONTACT_VIDEO_URL =
  "https://res.cloudinary.com/dgbdcdqd1/video/upload/q_auto/f_auto/v1776247016/BG_21_ec7n75.mp4";

export const VIDEO_URL =
  "https://res.cloudinary.com/dgbdcdqd1/video/upload/q_auto/f_auto/v1776674123/Endpoint_Video_Compressed_jfvvui.mp4";

export const footerQuickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
  { label: "Zyvarex", href: "https://www.zyvarex.ai" },
];

export const footerServiceLinks = [
  {
    label: "AI Chatbot Build",
    href: "/services/ai-chatbot-development",
  },
  { label: "AI Integration Sprint", href: "/services/ai-integration" },
  { label: "RAG Knowledge Base", href: "/services/rag-knowledge-base" },
  { label: "Custom AI Agent", href: "/services/ai-agent-development" },
];

export const footerReviewLinks = [
  { label: "Blog", href: "/blog" },
  { label: "AI Glossary", href: "/glossary" },
  {
    label: "AI Cost Benchmark",
    href: "/datasets/ai-development-cost-benchmark-2026",
  },
  { label: "LLM Comparison", href: "/datasets/llm-model-comparison-2026" },
  {
    label: "Vector DB Benchmark",
    href: "/datasets/vector-database-performance-benchmark-2026",
  },
  { label: "All Datasets", href: "/datasets" },
];

/** Bottom-bar legal links, matching the original footer. */
export const footerLegalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const footerOffices = [
  {
    country: "Pakistan",
    flag: "pk",
    address:
      "Innovista Rawal, Defense Avenue, A, Sector A DHA Phase 1, Islamabad, 45730, Pakistan",
    phone: "+92 328 5513666",
    href: "https://wa.me/923285513666",
    whatsapp: true,
  },
  {
    country: "Bahrain",
    flag: "bh",
    address:
      "Flat No. 11, Building 1694, Road 968, Block 909, East Riffa, Southern Governorate, Bahrain",
    phone: "+973 3557 9427",
    href: "tel:+97335579427",
    whatsapp: false,
  },
  {
    country: "United Kingdom",
    flag: "uk",
    address: "150 S Stratford Rd, Winston-Salem, NC 27104, United States",
    phone: "+44 7598 88887",
    href: "https://wa.me/44759888887",
    whatsapp: true,
  },
];

export const footerSocialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  { label: "X", href: "https://x.com/", icon: "x" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
];

export const desktopNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
