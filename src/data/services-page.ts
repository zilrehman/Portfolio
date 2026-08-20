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
    title: "Disrupts User Journey",
    description:
      "Poor UI/UX design breaks the user journey and kills conversions. We create frictionless experiences that keep users engaged and moving forward.",
  },
  {
    icon: "/images/services/problems/UiProblemImg2.svg",
    title: "Blocks Business Growth",
    description:
      "If your product feels confusing or outdated, users won't return. Our UX/UI design brings clarity and seamless interactions to support your business goals.",
  },
  {
    icon: "/images/services/problems/UiProblemImg3.svg",
    title: "Burns Through CAC",
    description:
      "You've already paid to bring real users in don't let low user engagement ruin your ROI. Investing in the right ux services early ensures your digital products are optimized from the first click to conversion.",
  },
];

export type ServiceListItem = {
  img: string;
  img1: string;
  title: string;
  tags: string[];
  desc: string;
};

export const servicesList: ServiceListItem[] = [
  {
    img: "/images/services/UxStrategyImg1.png",
    img1: "/images/services/UxStrategyImg2.png",
    title: "UX Strategy & ",
    tags: ["Consulting."],
    desc: "Get expert direction on what to improve, what to simplify, and how to make your user experience support real business goals.",
  },
  {
    img: "/images/services/UxResearchImg1.png",
    img1: "/images/services/UxResearchImg2.png",
    title: "UX",
    tags: ["Research."],
    desc: "We uncover user needs, behavior patterns, pain points, and product opportunities so your design decisions are based on insight, not guesswork.",
  },
  {
    img: "/images/services/SaaSDesignImg1.png",
    img1: "/images/services/SaaSDesignImg2.png",
    title: "SaaS UI/UX",
    tags: ["Design."],
    desc: "We design SaaS products that make onboarding, dashboards, subscriptions, user roles, and complex workflows feel simple and easy to use.",
  },
  {
    img: "/images/services/WebDesignImg1.png",
    img1: "/images/services/WebDesignImg2.png",
    title: "Web & Mobile app",
    tags: ["UI/UX Design."],
    desc: "We turn complex web platforms into clean, structured interfaces with better navigation, smarter workflows, and clearer user actions.",
  },
  {
    img: "/images/services/UseabilityImg1.png",
    img1: "/images/services/UseabilityImg2.png",
    title: "Usability",
    tags: ["Testing."],
    desc: "We identify where users struggle, hesitate, or drop off, then use those insights to improve clarity, flow, and product usability.",
  },
  {
    img: "/images/services/InteractionDesignImg1.png",
    img1: "/images/services/InteractionDesignImg2.png",
    title: "Interaction",
    tags: ["Design."],
    desc: "We design the small but important moments users feel while clicking, swiping, opening menus, completing forms, and moving between screens.",
  },
  {
    img: "/images/services/PrototypeImg1.png",
    img1: "/images/services/PrototypeImg2.png",
    title: "Wireframing",
    tags: ["& Prototyping."],
    desc: "We plan your product structure before development with wireframes and clickable prototypes that make flows easier to review and improve.",
  },
  {
    img: "/images/services/DesignSystemImg1.png",
    img1: "/images/services/DesignSystemImg2.png",
    title: "Design Systems ",
    tags: ["& Developer Handoff."],
    desc: "We create reusable components, UI states, and organized Figma files so your product stays consistent and developers can build with confidence.",
  },
  {
    img: "/images/services/UxAuditImg1.png",
    img1: "/images/services/UxAuditImg2.png",
    title: "UX Audit",
    tags: ["& Redesign."],
    desc: "We review your existing product, find usability issues, and redesign weak experiences into cleaner, clearer, and more conversion-focused designs.",
  },
];

/** Capability pill wall between the services list and the process section. */
export const glowTags = [
  { label: "Product Design", variant: "btn-violet" },
  { label: "UX Strategy", variant: "btn-green" },
  { label: "UI/UX Audit", variant: "btn-pink" },
  { label: "Persona Design", variant: "btn-yellow" },
  { label: "Responsive Design", variant: "btn-light-violet" },
  { label: "Mobile UX", variant: "btn-red" },
  { label: "Web UX", variant: "btn-blue" },
  { label: "Dashboard Design", variant: "btn-light-green" },
  { label: "SaaS UI", variant: "btn-orange" },
  { label: "B2B UI/UX", variant: "btn-pink" },
  { label: "Enterprise UX", variant: "btn-turquoise" },
  { label: "Fintech UI", variant: "btn-light-violet" },
  { label: "HealthTech UI", variant: "btn-red" },
  { label: "Doctor Dashboard", variant: "btn-green" },
  { label: "Industrial UX", variant: "btn-cyan" },
  { label: "Interaction Design", variant: "btn-magenta" },
  { label: "Visual Design", variant: "btn-dark-green" },
  { label: "Motion Design", variant: "btn-yellow-orange" },
  { label: "Rapid Prototyping", variant: "btn-dark-violet" },
  { label: "High & Low-Fidelity UI", variant: "btn-flip-1" },
  { label: "Design Tokens", variant: "btn-flip-2" },
  { label: "Developer Handoff", variant: "btn-flip-3" },
  { label: "Design Thinking", variant: "btn-flip-3" },
  { label: "User-Centred Design", variant: "btn-yellow-orange" },
  { label: "Product Research", variant: "btn-blue" },
  { label: "Competitive Analysis", variant: "btn-green" },
  { label: "Experience Design", variant: "btn-flip-2" },
];

export const serviceDesignProcessCards = [
  {
    step: "Step 1",
    title: "Discover & Research",
    description:
      "We start by understanding your business goals, target users, competitors, product challenges, and current user journey. Through discovery calls, stakeholder workshops, UX research, and competitor analysis, we uncover the real problems behind the brief before any screen is designed.",
    image: "/images/services/process/DiscoverResearchImg.png",
    imageAlt: "discover",
    tags: [
      "UX Research",
      "Competitor Analysis",
      "Stakeholder Workshops",
      "Product Audit",
      "User Journey Review",
    ],
  },
  {
    step: "Step 2",
    title: "Define the UX Strategy",
    description:
      "Once the insights are clear, we shape them into a focused product direction. We define user flows, information architecture, feature priorities, conversion goals, and screen requirements so your team knows exactly what we are designing and why it matters.",
    image: "/images/services/process/DefineUXStrategyImg.png",
    imageAlt: "define",
    tags: [
      "User Flow Mapping",
      "Information Architecture",
      "Feature Prioritization",
      "Conversion Planning",
      "Screen Structure",
    ],
  },
  {
    step: "Step 3",
    title: "Design & Prototype",
    description:
      "Our designers turn strategy into clean, intuitive, and scalable UI screens. From wireframes to high-fidelity interface design, clickable prototypes, responsive layouts, and design system components, every screen is crafted to feel clear, modern, and easy to use.",
    image: "/images/services/process/DesignPrototypeImg.png",
    imageAlt: "design",
    tags: [
      "Wireframing",
      "UI Design",
      "Interactive Prototyping",
      "Responsive Design",
      "Design System Components",
    ],
  },
  {
    step: "Step 4",
    title: "Test, Refine & Handoff",
    description:
      "Before development, we review the experience for usability, accessibility, responsiveness, consistency, and real-world interaction flow. Then we refine weak areas and prepare organized Figma files, UI states, assets, and developer handoff notes for smooth implementation.",
    image: "/images/services/process/TestRefineHandoff.png",
    imageAlt: "test",
    tags: [
      "Usability Review",
      "Accessibility Check",
      "Responsive Testing",
      "Design QA",
      "Developer Handoff",
    ],
  },
];

export const pricingFaqs = [
  {
    question: "What do your UI/UX design services include?",
    answer:
      "Our UI/UX design services include UX strategy, user research, information architecture, user flow mapping, wireframing, prototyping, usability testing, interface design direction, design systems, UX audits, and developer handoff. We focus on creating digital product experiences that are clear, scalable, conversion-focused, and easy for users to understand.",
  },
  {
    question: "How much does UI/UX design cost for SaaS Product in 2026?",
    answer:
      "Quality UI/UX design for a SaaS product in 2026 typically runs $3,000–$15,000 a month on retainer, or $15,000–$80,000 as a fixed-scope project. Our Startup plan starts at $2,999/month (100 hours) and the Scale-ups plan at $5,499/month (200 hours), so you can predict spend instead of guessing at hourly quotes.",
  },
  {
    question: "How long does a UI/UX design project take?",
    answer:
      "A full UI/UX design project usually takes 4 - 8 weeks end to end a week of discovery, 2 - 4 weeks of wireframes and flows, two to three weeks of high-fidelity UI, then handoff. We ship product work in 2 - 4 weeks for focused scopes because design and development run in parallel from day one.",
  },
  {
    question: "How do you ensure quality across different time zones?",
    answer:
      "Timelines depend on the size and complexity of the product. A small website or UX audit can move quickly, while a SaaS product, web app, mobile app, or dashboard design may need more time for research, wireframes, user flows, prototyping, revisions, and developer handoff.",
  },
  {
    question: "Do you sign NDA before looking at our product?",
    answer:
      "Yes, always. Send us a one-way NDA before the discovery call or use ours either works. For regulated industries (fintech, healthcare, maritime) we can also sign a mutual NDA and add data-handling clauses. Nothing about your product, roadmap, or users leaves our team.",
  },
  {
    question: "Can you redesign our existing website, app, or SaaS product?",
    answer:
      "Yes. We can review your existing product, identify usability issues, improve user flows, modernize the interface, and redesign weak experiences into clearer, more conversion-focused journeys. Our redesign process helps remove friction while keeping your business goals and existing users in mind.",
  },
  {
    question: "How do you make UI/UX design more conversion-focused?",
    answer:
      "We focus on user intent, clear messaging, strong visual hierarchy, simple navigation, reduced friction, trust-building elements, and better CTA placement. The goal is to help users understand your product faster and move toward important actions like signup, booking, purchase, demo request, or onboarding completion.",
  },
  {
    question: "How do you handle developer handoff?",
    answer:
      "We prepare organized Figma files with clear screen flows, reusable components, UI states, spacing, typography, responsive notes, assets, and interaction details. This helps developers understand how the design should behave and reduces confusion during frontend implementation.",
  },
  {
    question: "Do you only design, or can you also support development?",
    answer:
      "UI/UX design is our main focus for this service, but our team also understands frontend and product development. That means our designs are created with real implementation in mind, including responsive behavior, reusable components, design states, and practical handoff for developers.",
  },
];
