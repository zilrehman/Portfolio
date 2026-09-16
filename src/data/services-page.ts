/* All content on this page is transcribed from the reference /services page. */

/** 3D rotating hero carousel — 12 frames, one full turn per 32s. */
export const servicesHeroCarousel = [
  "/images/services/carousel/Fitness.png",
  "/images/services/carousel/Booking.png",
  "/images/services/carousel/Enterprise1.png",
  "/images/services/carousel/Booking2.png",
  "/images/services/carousel/Enterprise2.png",
  "/images/services/carousel/Fintech.png",
  "/images/services/carousel/Enterprise.png",
  "/images/services/carousel/Education.png",
  "/images/services/carousel/Healthcare.png",
  "/images/services/carousel/Restaurant.png",
  "/images/services/carousel/Finance.png",
  "/images/services/carousel/Trading.png",
];

export const aiCards = [
  { src: "/images/services/ai/ServiceCardImg2.png", width: 368, height: 474 },
  { src: "/images/services/ai/ServiceCardImg3.png", width: 387, height: 366 },
  { src: "/images/services/ai/ServiceCardImg4.png", width: 360, height: 338 },
  { src: "/images/services/ai/ServiceCardImg5.png", width: 360, height: 338 },
];

export const uiProblems = [
  {
    icon: "/images/services/problems/UiProblemImg1.svg",
    title: "Your team is stretched thin and AI is not their expertise",
    description:
      "You have great engineers, but they are busy shipping features. Learning LLMs, vector databases, and prompt engineering from scratch would take months you do not have.",
  },
  {
    icon: "/images/services/problems/UiProblemImg2.svg",
    title: "AI agencies quoted you $200K and 6 months",
    description:
      "You got proposals with vague scopes, hourly billing, and timelines that would make your board lose patience. You need fixed pricing and delivery in weeks, not quarters.",
  },
  {
    icon: "/images/services/problems/UiProblemImg3.svg",
    title: "Your ChatGPT prototype worked in a demo but broke in production",
    description:
      "The API wrapper your team built hallucinated, had no error handling, and could not scale. You need production-grade AI with monitoring, guardrails, and real engineering behind it.",
  },
];

export type ServiceListItem = {
  img: string;
  img1: string;
  title: string;
  tags: string[];
  desc: string;
  /** Detail page for this package; the closing entry points at contact. */
  href: string;
};

export const servicesList: ServiceListItem[] = [
  {
    img: "/images/services/UxStrategyImg1.png",
    img1: "/images/services/UxStrategyImg2.png",
    title: "AI Readiness",
    href: "/services/ai-readiness-audit",
    tags: ["Audit"],
    desc: "Know exactly where AI can move the needle before you invest a dollar in development.",
  },
  {
    img: "/images/services/UxResearchImg1.png",
    img1: "/images/services/UxResearchImg2.png",
    title: "AI Proof of Concept",
    href: "/services/ai-proof-of-concept",
    tags: ["Sprint"],
    desc: "Validate your AI idea with a working prototype in weeks, not months.",
  },
  {
    img: "/images/services/SaaSDesignImg1.png",
    img1: "/images/services/SaaSDesignImg2.png",
    title: "AI Chatbot",
    href: "/services/ai-chatbot-development",
    tags: ["Development"],
    desc: "Ship a custom AI chatbot that actually understands your business in weeks.",
  },
  {
    img: "/images/services/WebDesignImg1.png",
    img1: "/images/services/WebDesignImg2.png",
    title: "AI Integration",
    href: "/services/ai-integration",
    tags: ["Sprint"],
    desc: "Add AI superpowers to your existing product without a rewrite.",
  },
  {
    img: "/images/services/UseabilityImg1.png",
    img1: "/images/services/UseabilityImg2.png",
    title: "RAG Knowledge",
    href: "/services/rag-knowledge-base",
    tags: ["Base"],
    desc: "Turn your documents into an AI-powered knowledge base your team can actually query.",
  },
  {
    img: "/images/services/InteractionDesignImg1.png",
    img1: "/images/services/InteractionDesignImg2.png",
    title: "Custom AI Agent",
    href: "/services/ai-agent-development",
    tags: ["Development"],
    desc: "Build an AI agent that actually does the work, not just answers questions.",
  },
  {
    img: "/images/services/PrototypeImg1.png",
    img1: "/images/services/PrototypeImg2.png",
    title: "AI Managed",
    href: "/services/ai-managed-pod",
    tags: ["Pod"],
    desc: "A dedicated AI engineering team that ships every sprint without the hiring headache.",
  },
  {
    img: "/images/services/DesignSystemImg1.png",
    img1: "/images/services/DesignSystemImg2.png",
    title: "AI Workflow",
    href: "/services/ai-workflow-automation",
    tags: ["Automation"],
    desc: "Automate the repetitive work your team hates with AI that actually gets it right.",
  },
  {
    img: "/images/services/UxAuditImg1.png",
    img1: "/images/services/UxAuditImg2.png",
    title: "Not sure where to",
    href: "/contact",
    tags: ["start?"],
    desc: "Book a free 30-minute call. We will help you identify the right AI package for your business. Start with the AI Readiness Audit at just $3,000.",
  },
];

/** Capability pill wall between the services list and the process section. */
export const glowTags = [
  { label: "OpenAI GPT-4o", variant: "btn-violet" },
  { label: "Anthropic Claude", variant: "btn-green" },
  { label: "Google Gemini", variant: "btn-pink" },
  { label: "Llama", variant: "btn-yellow" },
  { label: "Mistral", variant: "btn-light-violet" },
  { label: "LangChain", variant: "btn-red" },
  { label: "LlamaIndex", variant: "btn-blue" },
  { label: "LangGraph", variant: "btn-light-green" },
  { label: "CrewAI", variant: "btn-orange" },
  { label: "AutoGen", variant: "btn-pink" },
  { label: "Pinecone", variant: "btn-turquoise" },
  { label: "Weaviate", variant: "btn-light-violet" },
  { label: "Qdrant", variant: "btn-red" },
  { label: "pgvector", variant: "btn-green" },
  { label: "ChromaDB", variant: "btn-cyan" },
  { label: "LangSmith", variant: "btn-magenta" },
  { label: "Langfuse", variant: "btn-dark-green" },
  { label: "Weights & Biases", variant: "btn-yellow-orange" },
  { label: "Python", variant: "btn-dark-violet" },
  { label: "FastAPI", variant: "btn-flip-1" },
  { label: "Node.js", variant: "btn-flip-2" },
  { label: "Next.js", variant: "btn-flip-3" },
  { label: "Docker", variant: "btn-flip-3" },
  { label: "Kubernetes", variant: "btn-yellow-orange" },
  { label: "AWS", variant: "btn-blue" },
  { label: "Microsoft Azure", variant: "btn-green" },
  { label: "Google Cloud Platform", variant: "btn-flip-2" },
];

export const serviceDesignProcessCards = [
  {
    step: "01",
    title: "You Tell Us What You Need",
    description:
      "A 30-minute call where we listen. What is your product? Where does AI fit? What has not worked before? You walk away with clarity on whether AI is right for your use case, even if you do not hire us.",
    image: "/images/services/process/DiscoverResearchImg.png",
    imageAlt: "discover",
    tags: ["Honest assessment, no sales pitch", "Same week"],
  },
  {
    step: "02",
    title: "You Get a Fixed Quote",
    description:
      "We send a proposal with scope, deliverables, timeline, tech stack, and a firm price. You know exactly what you are paying before a single line of code is written. If the scope changes, we discuss it first.",
    image: "/images/services/process/DefineUXStrategyImg.png",
    imageAlt: "define",
    tags: ["Fixed price, no hourly billing", "2-3 days"],
  },
  {
    step: "03",
    title: "You See Progress Every 2 Weeks",
    description:
      "Our team builds in 2-week sprints. At each demo, you see working software, give feedback, and adjust priorities. You are never in the dark about where your project stands.",
    image: "/images/services/process/DesignPrototypeImg.png",
    imageAlt: "design",
    tags: ["Working demos, not status reports", "2-8 weeks total"],
  },
  {
    step: "04",
    title: "You Own Everything",
    description:
      "We deploy to your infrastructure, hand over all code and documentation, and train your team to maintain it. No vendor lock-in, no proprietary platforms. The AI system is yours.",
    image: "/images/services/process/TestRefineHandoff.png",
    imageAlt: "test",
    tags: ["Code, docs, training included", "Day of completion"],
  },
];

export const pricingFaqs = [
  {
    question: "Which AI development package should I start with?",
    answer:
      "If you are new to AI, start with the AI Readiness Audit ($3,000). In 1-2 weeks, you get a clear roadmap showing exactly where AI can help your business. If you already know what you want to build, jump straight to the relevant Build-tier package (Chatbot, Integration, RAG, or Agent).",
  },
  {
    question: "Can I customize a package or combine multiple services?",
    answer:
      "Yes. Every package has a defined scope and starting price, but we tailor deliverables to your specific business context. Clients who bundle packages (for example, Audit + Chatbot Build, or RAG + Managed Pod) typically receive preferred pricing. Contact us to discuss a bundled engagement.",
  },
  {
    question: "How long does a typical AI development project take?",
    answer:
      "It depends on the package. Entry-tier projects take 1-4 weeks. Core build packages take 2-8 weeks depending on complexity. Our AI Managed Pod is an ongoing engagement with 2-week sprint cycles. Every package has a defined timeline before work begins.",
  },
  {
    question: "What industries do you serve with AI development?",
    answer:
      "We serve SaaS and technology companies, healthcare organizations, financial services and fintech, e-commerce and retail, and professional services firms. Our productized packages work across industries because they solve universal AI challenges (chatbots, document Q&A, workflow automation, etc.).",
  },
  {
    question: "Do you work with our existing tech stack?",
    answer:
      "Yes. We work with all major stacks: React, Next.js, Vue, Angular (frontend); Node.js, Python, Ruby, Go, Java (backend); AWS, Azure, GCP (cloud). Our AI Integration Sprint is specifically designed to add AI to existing codebases without requiring a rewrite.",
  },
  {
    question: "What is the typical ROI for your AI projects?",
    answer:
      "ROI varies by project type. AI chatbots typically reduce support ticket volume by 40-60%. Workflow automation saves 10-30 hours of manual work per week. RAG knowledge bases reduce document search time from hours to seconds. We can model expected ROI for your specific use case during the AI Readiness Audit.",
  },
  {
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes. After any project delivery, you can add our AI Managed Pod for continuous improvements, new features, and maintenance. Alternatively, every project includes documentation so your team can maintain it independently. We also offer monitoring retainers for workflow automation.",
  },
  {
    question: "Where is your AI engineering team based?",
    answer:
      "Our AI engineering team is based in Pune, India, and is backed by 14+ years of experience and 100+ engineers. We ensure 4-6 hours of overlap with US timezones for real-time communication.",
  },
  {
    question:
      "Can you add AI features to our existing product without rebuilding it?",
    answer:
      "Yes. Our AI Integration Sprint ($15,000, 4 weeks) is specifically designed to layer AI capabilities into your existing codebase. We work directly in your repository, follow your coding standards, and submit production-ready PRs. Common features include smart search, content generation, document summarization, and recommendation engines.",
  },
];
