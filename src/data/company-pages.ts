import type { DetailPage } from "@/data/detail-pages";

/**
 * Additional About and Contact content from the live site. The pages render
 * their existing marketing sections first and then the entries here that are
 * not already represented.
 */
export const companyPages: DetailPage[] = [
  {
    slug: "home",
    title: "Custom AI Development Company | Zyvarex",
    description:
      "Build custom AI agents, chatbots, and RAG systems. Fixed-price packages from $3,000 with 2-4 week delivery. Backed by 14+ years and 800+ projects.",
    heroChip: "",
    heroTitleTop: "From AI Idea to Production in Weeks",
    heroTitleBottom: "",
    heroDescription: "",
    sections: [
      {
        kind: "prose",
        heading:
          "You Want AI in Your Business. You Just Need the Right Partner.",
        paragraphs: [
          "Your team is stretched thin and AI is not their expertise",
          "You have great engineers, but they are busy shipping features. Learning LLMs, vector databases, and prompt engineering from scratch would take months you do not have.",
          "AI agencies quoted you $200K and 6 months",
          "You got proposals with vague scopes, hourly billing, and timelines that would make your board lose patience. You need fixed pricing and delivery in weeks, not quarters.",
          "Your ChatGPT prototype worked in a demo but broke in production",
          "The API wrapper your team built hallucinated, had no error handling, and could not scale. You need production-grade AI with monitoring, guardrails, and real engineering behind it.",
          "You need to show AI progress to your leadership but do not know where to start",
          "The board wants an AI strategy. Your competitors are shipping AI features. You need a clear roadmap and a quick win to build momentum, not another strategy deck.",
          "We built Zyvarex to solve exactly this.",
          "Productized AI packages with fixed pricing, defined timelines, and a team of 100+ engineers who have shipped 800+ projects. Start as small as $3,000 and scale from there.",
          "Where are you in your AI journey?",
        ],
        ctaLabel: "Book a Free Discovery Call",
        ctaHref: "/contact",
      },
      {
        kind: "cards",
        heading: "Pick Your Starting Point",
        paragraphs: [
          "Not sure which path? Book a free discovery call and we will help you figure it out.",
        ],
        items: [
          {
            title: "Not sure where AI fits?",
            description:
              "Get a clear, prioritized AI roadmap for your business in 1-2 weeks. We identify the highest-impact opportunities and give you a build-vs-buy analysis.",
            chips: [
              "Start Here",
              "$3,000",
              "starting",
              "AI opportunity assessment",
              "Prioritized roadmap with ROI",
              "Executive summary for your board",
              "Most Popular",
            ],
            href: "/services/ai-readiness-audit",
            linkLabel: "Get Your AI Roadmap",
          },
          {
            title: "Ready to build something?",
            description:
              "From AI chatbots and RAG knowledge bases to custom agents and integrations. Pick the package that matches your use case. Delivery in 2-8 weeks.",
            chips: [
              "Build",
              "$8K-$20K",
              "per project",
              "AI chatbots, RAG, agents, integrations",
              "Production-ready deployment",
              "Fixed scope, timeline, and pricing",
            ],
            href: "/services",
            linkLabel: "See Build Packages",
          },
          {
            title: "Need an ongoing AI team?",
            description:
              "A dedicated AI engineering pod (engineers + QA + tech lead) that ships every sprint. Embedded in your workflow, accountable for outcomes.",
            chips: [
              "Scale",
              "$12K",
              "/mo starting",
              "Dedicated AI engineers + QA + lead",
              "2-week sprints with demos",
              "Direct Slack/Teams access",
            ],
            href: "/services/ai-managed-pod",
            linkLabel: "Learn About AI Pods",
          },
        ],
      },
      {
        kind: "cards",
        heading: "How It Works",
        sub: "From first call to production deployment, here is exactly what to expect. No surprises, no mystery.",
        paragraphs: [
          "Step 1 is free. No commitment, no pitch deck.",
          "30-minute call. No commitment. We will tell you honestly if AI is right for your use case.",
        ],
        items: [
          {
            title: "You Tell Us What You Need",
            description:
              "A 30-minute call where we listen. What is your product? Where does AI fit? What has not worked before? You walk away with clarity on whether AI is right for your use case, even if you do not hire us.",
            chips: ["01", "Honest assessment, no sales pitch", "Same week"],
          },
          {
            title: "You Get a Fixed Quote",
            description:
              "We send a proposal with scope, deliverables, timeline, tech stack, and a firm price. You know exactly what you are paying before a single line of code is written. If the scope changes, we discuss it first.",
            chips: ["02", "Fixed price, no hourly billing", "2-3 days"],
          },
          {
            title: "You See Progress Every 2 Weeks",
            description:
              "Our team builds in 2-week sprints. At each demo, you see working software, give feedback, and adjust priorities. You are never in the dark about where your project stands.",
            chips: [
              "03",
              "Working demos, not status reports",
              "2-8 weeks total",
            ],
          },
          {
            title: "You Own Everything",
            description:
              "We deploy to your infrastructure, hand over all code and documentation, and train your team to maintain it. No vendor lock-in, no proprietary platforms. The AI system is yours.",
            chips: ["04", "Code, docs, training included", "Day of completion"],
            href: "/contact",
            linkLabel: "Book Your Free Discovery Call",
          },
        ],
      },
      {
        kind: "quotes",
        heading: "What Our Clients Say",
        sub: "Teams that chose Zyvarex to build, integrate, and scale their AI.",
        items: [
          {
            quote:
              '"We needed an AI chatbot that understood our 500-page product docs. Zyvarex delivered a production-ready RAG system in 3 weeks. Our support team now handles 40% fewer tickets."',
            name: "Sarah Chen",
            role: "VP of Engineering, Series B SaaS Company",
            badge: "40% fewer support tickets",
          },
          {
            quote:
              '"The AI Readiness Audit saved us from building the wrong thing. They identified 3 AI use cases we had not considered, and the ROI analysis convinced our board to greenlight the $20K agent build."',
            name: "Michael Torres",
            role: "CTO, Fintech Startup",
            badge: "Board approval in 2 weeks",
          },
          {
            quote:
              '"We tried building an AI agent with freelancers. It broke in production. Zyvarex rebuilt it in 6 weeks with proper error handling, monitoring, and guardrails. It has been running for 4 months without issues."',
            name: "David Park",
            role: "Head of Product, E-commerce Platform",
            badge: "4 months zero downtime",
          },
        ],
      },
      {
        kind: "cards",
        heading: "What You Get That Others Do Not Offer",
        sub: "Most AI agencies sell hours and hope. Here is how we are different.",
        footnote:
          "AI agencies give you a vague proposal after 3 weeks of back-and-forth.",
        paragraphs: [
          "Freelancers build demos that break in production.",
          "Staff augmentation gives you people to manage.",
          "Consultancies lock you into their platform.",
        ],
        items: [
          {
            title: "You get a fixed-scope quote in days.",
            description:
              "Every package has published pricing. Your proposal includes deliverables, timeline, tech stack, and a firm price. No hourly billing, no scope creep. You approve the number before work begins.",
          },
          {
            title: "You get production-grade AI systems.",
            description:
              "Every deployment includes error handling, monitoring, guardrails, fallback logic, and documentation. We do not hand you a Jupyter notebook and wish you luck. ISO 9001:2015 and ISO 27001:2022 certified engineering processes.",
          },
          {
            title: "You get outcomes to review.",
            description:
              "We are not a body shop. You tell us what you need built. We run the sprints, handle code reviews, manage QA, and deliver working software every 2 weeks. You focus on your product, not managing our team.",
          },
          {
            title: "You own 100% of the code.",
            description:
              "We deploy to YOUR infrastructure (AWS, Azure, GCP, or on-prem). All source code, documentation, and models are yours. No proprietary wrappers, no vendor lock-in. Walk away anytime with everything we built.",
          },
        ],
      },
      {
        kind: "cards",
        heading: "All AI Packages and Pricing",
        items: [
          {
            title: "AI Readiness Audit",
            description:
              "Know exactly where AI can move the needle before you invest a dollar in development.",
            chips: ["1-2 weeks", "Starting at $3,000", "Start Here"],
          },
          {
            title: "AI Proof of Concept Sprint",
            description:
              "Validate your AI idea with a working prototype in weeks, not months.",
            chips: ["2-4 weeks"],
          },
          {
            title: "AI Chatbot Development",
            description:
              "Ship a custom AI chatbot that actually understands your business in weeks.",
            chips: ["2-4 weeks", "Starting at $12,000", "Build"],
          },
          {
            title: "AI Integration Sprint",
            description:
              "Add AI superpowers to your existing product without a rewrite.",
            chips: ["4 weeks", "Starting at $15,000", "Build"],
          },
          {
            title: "RAG Knowledge Base",
            description:
              "Turn your documents into an AI-powered knowledge base your team can actually query.",
            chips: ["3-4 weeks", "Starting at $15,000", "Build"],
          },
          {
            title: "Custom AI Agent Development",
            description:
              "Build an AI agent that actually does the work, not just answers questions.",
            chips: ["4-8 weeks"],
          },
          {
            title: "AI Managed Pod",
            description:
              "A dedicated AI engineering team that ships every sprint without the hiring headache.",
            chips: [
              "Ongoing (3-month minimum)",
              "Starting at $12,000/mo",
              "Scale",
            ],
          },
          {
            title: "AI Workflow Automation",
            description:
              "Automate the repetitive work your team hates with AI that actually gets it right.",
            chips: ["2-4 weeks", "Starting at $8,000"],
          },
        ],
      },
      {
        kind: "tags",
        heading: "Technologies We Work With",
        sub: "We choose the right tools for each project. No vendor lock-in, no one-size-fits-all.",
        paragraphs: [
          "Every project gets the best stack for the job. We evaluate trade-offs (cost, latency, accuracy, privacy) and recommend the optimal combination for your use case.",
        ],
        groups: [
          {
            label: "LLM Providers",
            items: [
              "OpenAI GPT-4o",
              "Anthropic Claude",
              "Google Gemini",
              "Llama",
              "Mistral",
            ],
          },
          {
            label: "AI Frameworks",
            items: [
              "LangChain",
              "LlamaIndex",
              "LangGraph",
              "CrewAI",
              "AutoGen",
            ],
          },
          {
            label: "Vector Databases",
            items: ["Pinecone", "Weaviate", "Qdrant", "pgvector", "ChromaDB"],
          },
          {
            label: "Observability",
            items: ["LangSmith", "Langfuse", "Weights & Biases", "Helicone"],
          },
          {
            label: "Backend",
            items: [
              "Python",
              "FastAPI",
              "Node.js",
              "Next.js",
              "Docker",
              "Kubernetes",
            ],
          },
          {
            label: "Cloud Platforms",
            items: ["AWS", "Microsoft Azure", "Google Cloud Platform"],
          },
        ],
      },
      {
        kind: "cards",
        heading: "AI Solutions by Industry",
        sub: "We have built AI for companies in your industry. Here is what works.",
        paragraphs: [
          "Different industry? Tell us about your use case and we will recommend the right package.",
        ],
        items: [
          {
            title: "SaaS & Technology",
            description:
              "Your users expect AI-powered features but your team is busy shipping the roadmap.",
            chips: [
              "AI copilot embedded in your product",
              "Smart search across user data",
              "Automated content generation",
              "Predictive analytics dashboards",
            ],
            href: "/services/ai-integration",
            linkLabel: "AI Integration Sprint",
          },
          {
            title: "Healthcare & Life Sciences",
            description:
              "Your clinical teams waste hours searching through documentation, and you need HIPAA compliance.",
            chips: [
              "HIPAA-compliant medical knowledge base",
              "Clinical document processing",
              "Patient communication chatbot",
              "Diagnostic support tools",
            ],
            href: "/services/rag-knowledge-base",
            linkLabel: "RAG Knowledge Base",
          },
          {
            title: "Financial Services & Fintech",
            description:
              "Manual compliance reviews, document processing, and risk assessment are slowing your operations.",
            chips: [
              "Automated compliance document analysis",
              "Fraud detection and risk scoring",
              "Intelligent customer onboarding",
              "AI-powered report generation",
            ],
            href: "/services/ai-workflow-automation",
            linkLabel: "AI Workflow Automation",
          },
          {
            title: "E-commerce & Retail",
            description:
              "Generic product discovery and manual customer support are hurting conversion rates and retention.",
            chips: [
              "AI-powered product recommendations",
              "Customer service chatbot trained on your catalog",
              "Automated inventory and demand forecasting",
              "Visual search and personalization",
            ],
            href: "/services/ai-chatbot-development",
            linkLabel: "AI Chatbot Development",
          },
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "What AI development services does Zyvarex offer?",
            answer:
              "We offer 8 productized AI packages across three tiers: Entry (AI Readiness Audit from $3,000, AI PoC Sprint from $8,000), Core (AI Chatbot Development from $12,000, AI Integration Sprint from $15,000, RAG Knowledge Base from $15,000, Custom AI Agent Build from $20,000), and Ongoing (AI Managed Pod from $12,000/month, AI Workflow Automation from $8,000). Each package includes defined deliverables, timelines, and transparent pricing.",
          },
          {
            question:
              "What makes Zyvarex different from other AI development companies?",
            answer:
              "We are a company with 14+ years of software engineering experience, 800+ projects delivered, and 100+ engineers. We bring production-grade engineering discipline to AI projects. Every engagement includes fixed pricing, clear deliverables, sprint-based delivery, and a defined timeline. We do not sell hours; we sell outcomes.",
          },
          {
            question: "How much does AI development cost?",
            answer:
              "Our AI packages start at $3,000 for an AI Readiness Audit. Custom AI chatbot development starts at $12,000. RAG knowledge base development starts at $15,000. Custom AI agent development starts at $20,000. Ongoing AI team support starts at $12,000/month. All pricing is transparent and fixed-scope. You get a firm quote before any work begins.",
          },
          {
            question:
              "How do I know which AI package is right for my business?",
            answer:
              "Start with the AI Readiness Audit ($3,000). In 1-2 weeks, our team maps your processes, identifies high-impact AI opportunities, and delivers a prioritized roadmap with ROI estimates. This ensures you invest in the right AI solution from day one. If you already know what you need, you can go directly to any Build-tier package.",
          },
          {
            question: "What technologies do you use for AI development?",
            answer:
              "We work with leading AI technologies including OpenAI GPT-4o, Anthropic Claude, Google Gemini, and open-source models (Llama, Mistral). Our AI frameworks include LangChain, LlamaIndex, LangGraph, CrewAI, and AutoGen. For vector databases, we use Pinecone, Weaviate, Qdrant, and pgvector. Cloud platforms include AWS, Azure, and GCP. We choose the optimal stack for each project based on your requirements.",
          },
          {
            question: "How long does a typical AI project take?",
            answer:
              "Timelines vary by package: AI Readiness Audit takes 1-2 weeks, AI PoC Sprint takes 2-4 weeks, AI Chatbot Development takes 2-4 weeks, AI Integration Sprint takes 4 weeks, RAG Knowledge Base takes 3-4 weeks, and Custom AI Agent Build takes 4-8 weeks. Our AI Managed Pod is an ongoing monthly engagement. Every package page shows the expected timeline and deliverables.",
          },
          {
            question: "Do you work with companies outside the United States?",
            answer:
              "Our primary clients are US-based startups and mid-market companies ($1M to $500M revenue). Our engineering team is based in Pune, India with offices in Austin, TX. We provide 4-6 hours of daily US timezone overlap, use async communication tools (Slack, Jira, GitHub), and run sprint demos at times convenient for your team.",
          },
          {
            question:
              "Can you add AI features to our existing product without rebuilding it?",
            answer:
              "Yes. Our AI Integration Sprint ($15,000, 4 weeks) is specifically designed to layer AI capabilities into your existing codebase. We work directly in your repository, follow your coding standards, and submit production-ready PRs. Common features include smart search, content generation, document summarization, and recommendation engines.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Your Competitors Are Already Shipping AI",
        paragraphs: [
          "The cost of waiting is higher than the cost of starting. Book a free discovery call, and in 30 minutes we will map out exactly where AI fits your business.",
        ],
        links: [
          { label: "Book a Free Discovery Call", href: "/contact" },
          { label: "See All Packages", href: "/services" },
        ],
      },
      {
        kind: "prose",
        heading: "About This Page",
        paragraphs: [
          "Zyvarex (www.zyvarex.ai) is a software engineering company with 14+ years of experience, 800+ projects delivered, and 100+ engineers. We offer productized AI development packages with transparent pricing: AI Readiness Audits (starting at $3,000), AI PoC Sprints ($8,000), custom AI chatbot development ($12,000), AI integration for existing products ($15,000), RAG knowledge bases ($15,000), custom AI agent development ($20,000), AI workflow automation ($8,000), and dedicated AI managed pods ($12,000/month). Based in Pune, India with offices in Austin, TX, we serve startups and mid-market companies ($1M to $500M revenue) across SaaS, healthcare, fintech, and e-commerce looking to build, integrate, and scale AI. Technologies include OpenAI GPT-4o, Anthropic Claude, LangChain, LlamaIndex, Pinecone, and LangGraph. Rated 4.9 on Clutch. ISO 9001:2015 and ISO 27001:2022 certified.",
        ],
      },
    ],
  },
  {
    slug: "about",
    title: "About Zyvarex | AI Engineering Since 2012",
    description:
      "14+ years experience, 800+ projects, 100+ engineers, Clutch 4.9 rating. AI agents, chatbots, and RAG systems.",
    heroChip: "",
    heroTitleTop: "About Zyvarex",
    heroTitleBottom: "",
    heroDescription: "",
    sections: [
      {
        kind: "prose",
        heading: "About This Page",
        paragraphs: [
          "Zyvarex (www.zyvarex.ai) is a software engineering company founded in 2012 in Pune, India. With 14+ years of experience, 800+ projects delivered across SaaS, healthcare, fintech, and e-commerce, and a 100+ person engineering team, Zyvarex specializes in building custom AI agents, chatbots, RAG knowledge bases, and AI integrations for mid-market companies ($1M to $500M revenue). Offices in Austin, TX and Pune, India provide 4-6 hours of daily US timezone overlap. Productized AI packages with transparent, fixed pricing start at $3,000 for an AI Readiness Audit. Technologies include OpenAI GPT-4o, Anthropic Claude, LangChain, LlamaIndex, Pinecone, and LangGraph. Rated 4.9 on Clutch. ISO 9001:2015 and ISO 27001:2022 certified. Contact: hello@zyvarex.ai or +1-844-766-2754.",
          "Our story",
        ],
        stats: [
          { value: "14+", label: "Years of Experience" },
          { value: "800+", label: "Projects Delivered" },
          { value: "100+", label: "Engineers" },
          { value: "4.9★", label: "Clutch Rating" },
        ],
      },
      {
        kind: "prose",
        heading: "Why Zyvarex Built a Dedicated AI Division",
        paragraphs: [
          "Zyvarex has been building production software since 2012. Over 14+ years, we have shipped 800+ projects across SaaS, fintech, healthcare, e-commerce, and logistics for companies ranging from funded startups to enterprises like Nestlé, Siemens, and Ferrero. Our 100+ person engineering team works with React, Node.js, Python, AWS, Azure, and GCP every day.",
          "In 2024, a clear shift happened: our clients stopped asking for just software. They needed AI. Chatbots trained on their proprietary data. RAG systems that could answer questions from thousands of internal documents. AI agents that could automate multi-step business workflows. And, critically, strategic guidance on where AI actually makes sense for their business and where it does not.",
          "We launched Zyvarex (zyvarex.ai) as a dedicated division to bring the same engineering discipline, accountability, and production-grade quality we are known for to the AI development space. Not another AI agency selling vaporware. Not demos that break in production. Real AI systems, built by real engineers, with clear pricing and fixed timelines.",
          "Today, Zyvarex offers 8 productized AI packages spanning readiness audits, proof-of-concept sprints, chatbot development, RAG knowledge bases, custom AI agent builds, AI integration, workflow automation, and dedicated AI engineering pods. Every package starts with a published price, a defined scope, and a firm timeline.",
          "Quick facts",
        ],
      },
      {
        kind: "table",
        heading: "Zyvarex at a Glance",
        sub: "Why companies choose us",
        headers: ["Detail", "Value"],
        rows: [
          ["Full Name", "Zyvarex"],
          ["Website", "zyvarex.ai"],
          ["Founded", "2012 (AI division launched 2024)"],
          ["Headquarters", "Pune, Maharashtra, India"],
          ["US Office", "Austin, TX, United States"],
          ["Team Size", "100+ engineers"],
          ["Projects Delivered", "800+ across Zyvarex"],
          ["Clutch Rating", "4.9 out of 5.0"],
          ["Client Retention", "95%"],
          ["Certifications", "ISO 9001:2015, ISO 27001:2022"],
          ["Industries", "SaaS, Healthcare, Fintech, E-commerce"],
          [
            "AI Package Pricing",
            "From $3,000 (project) to $12,000/month (retainer)",
          ],
          ["Notable Clients", "Nestlé, Siemens, Ferrero, and 800+ others"],
          ["Website", "www.zyvarex.ai"],
          ["Contact", "hello@zyvarex.ai | +1-844-766-2754"],
        ],
      },
      {
        kind: "cards",
        heading: "What Makes Zyvarex Different",
        sub: "Most AI agencies sell hours and hope. We deliver production-grade AI systems with fixed pricing, defined timelines, and full code ownership.",
        items: [
          {
            title: "Production-Grade AI Engineering",
            description:
              "Every system we build is designed for production: monitored, tested, scalable, and maintainable. We do not hand you a demo that breaks under real load. Our AI systems include error handling, fallback logic, guardrails, and observability from day one.",
          },
          {
            title: "Transparent, Fixed Pricing",
            description:
              "Every package has a published starting price, defined scope, and clear timeline. No hourly billing, no open-ended estimates, no surprise invoices. You approve the number before a single line of code is written.",
          },
          {
            title: "Backed by 14+ Years and 800+ Projects",
            description:
              "We are not a two-person AI startup. Zyvarex has been building production software since 2012, delivering for companies like Nestlé, Siemens, and Ferrero. That engineering discipline now powers every AI project we take on.",
          },
          {
            title: "Full-Stack AI and Application Layer",
            description:
              "AI is only useful when integrated into real systems. We handle both: the AI layer (models, prompts, RAG pipelines, agents) and the application layer (APIs, databases, frontends, deployment). One team, one codebase, no handoff gaps.",
          },
          {
            title: "You Own 100% of the Code",
            description:
              "We deploy to your infrastructure (AWS, Azure, GCP, or on-prem). All source code, documentation, and trained models are yours. No proprietary wrappers, no vendor lock-in. Walk away anytime with everything we built.",
          },
          {
            title: "Sprint-Based Delivery with Real Demos",
            description:
              "We build in 2-week sprints. At each milestone, you see working software, give feedback, and adjust priorities. You are never in the dark about where your project stands. Sprint demos, not status reports.",
          },
        ],
      },
      {
        kind: "table",
        heading: "AI Services and Packages",
        sub: "8 productized AI development packages across three tiers: Start Here (audits and prototypes), Build (custom AI systems), and Scale (ongoing teams and automation).",
        headers: ["Package", "Tier", "From", "Timeline"],
        rows: [
          ["AI Readiness Audit", "Start Here", "$3,000", "1-2 weeks"],
          ["AI Proof of Concept Sprint", "Start Here", "$8,000", "2-4 weeks"],
          ["AI Chatbot / Copilot Build", "Build", "$12,000", "2-4 weeks"],
          ["AI Integration Sprint", "Build", "$15,000", "4 weeks"],
          ["RAG Knowledge Base", "Build", "$15,000", "3-4 weeks"],
          ["Custom AI Agent Build", "Build", "$20,000", "4-8 weeks"],
          ["AI Workflow Automation", "Scale", "$8,000", "2-4 weeks"],
          ["AI Managed Pod", "Scale", "$12,000/mo", "Ongoing"],
        ],
      },
      {
        kind: "cards",
        heading: "Our Engineering Values",
        sub: "The principles that guide every AI project we deliver. These are not aspirational posters on the wall. They are commitments we make to every client.",
        items: [
          {
            title: "Ship to Production, Not to Demo",
            description:
              "We measure success by what runs in production, not by how impressive the demo looks. Every AI system we build is designed for real users, real data, and real scale.",
            chips: ["01"],
          },
          {
            title: "Transparency Over Promises",
            description:
              "We tell you what AI can and cannot do for your use case. Published pricing. Fixed timelines. Honest assessments. If AI is not the right solution, we will tell you.",
            chips: ["02"],
          },
          {
            title: "Own the Outcome, Not Just the Code",
            description:
              "We do not disappear after deployment. Every engagement includes documentation, team training, and a clear handoff. Your team should be able to maintain and extend what we build.",
            chips: ["03"],
          },
          {
            title: "Security and Privacy by Default",
            description:
              "ISO 27001:2022 certified. Data encryption at rest and in transit. Role-based access controls. HIPAA-compliant architectures when needed. Security is not an add-on; it is built into every layer.",
            chips: ["04"],
          },
          {
            title: "Iterate Fast, Test Relentlessly",
            description:
              "AI systems improve with feedback. We ship fast, measure performance (accuracy, latency, cost), and iterate. Automated evaluation pipelines ensure quality does not regress across updates.",
            chips: ["05"],
          },
          {
            title: "No Vendor Lock-In, Ever",
            description:
              "We use open standards, deploy to your infrastructure, and hand over all source code. If you want to switch providers, change LLMs, or bring development in-house, you can.",
            chips: ["06"],
          },
        ],
      },
      {
        kind: "tags",
        heading: "AI Technologies and Tools We Use",
        sub: "We choose the best tools for each project based on your requirements, budget, and constraints. No vendor lock-in. No one-size-fits-all.",
        paragraphs: [
          "Every project gets the optimal stack for the job. We evaluate trade-offs across cost, latency, accuracy, privacy, and scalability before recommending a technology combination.",
        ],
        groups: [
          {
            label: "LLM Providers",
            items: [
              "OpenAI GPT-4o",
              "Anthropic Claude",
              "Google Gemini",
              "Meta Llama",
              "Mistral AI",
            ],
          },
          {
            label: "AI Frameworks",
            items: [
              "LangChain",
              "LlamaIndex",
              "LangGraph",
              "CrewAI",
              "AutoGen",
              "Semantic Kernel",
            ],
          },
          {
            label: "Vector Databases",
            items: ["Pinecone", "Weaviate", "Qdrant", "pgvector", "ChromaDB"],
          },
          {
            label: "AI Observability",
            items: ["LangSmith", "Langfuse", "Weights & Biases", "Helicone"],
          },
          {
            label: "Backend and Infrastructure",
            items: [
              "Python",
              "FastAPI",
              "Node.js",
              "Next.js",
              "Docker",
              "Kubernetes",
            ],
          },
          {
            label: "Cloud Platforms",
            items: [
              "Amazon Web Services (AWS)",
              "Microsoft Azure",
              "Google Cloud Platform (GCP)",
            ],
          },
        ],
      },
      {
        kind: "cards",
        heading: "Industries We Serve with AI Solutions",
        sub: "We build AI solutions for mid-market companies ($1M to $500M revenue) across four primary industries. Each vertical has specific compliance, data, and integration requirements we have delivered against.",
        items: [
          {
            title: "SaaS and Technology",
            description:
              "AI features for existing software products, including smart search, content generation, and recommendation engines.",
          },
          {
            title: "Healthcare",
            description:
              "HIPAA-compliant AI solutions for patient data processing, clinical document Q&A, and medical knowledge bases.",
            chips: ["Learn more"],
          },
          {
            title: "Fintech and Financial Services",
            description:
              "AI-powered fraud detection, document processing, compliance automation, and customer support for financial platforms.",
            chips: ["Learn more"],
          },
          {
            title: "E-commerce and Retail",
            description:
              "AI chatbots for customer support, product recommendation engines, inventory intelligence, and personalized shopping.",
            chips: ["Learn more", "Learn more"],
          },
        ],
      },
      {
        kind: "cards",
        heading: "Offices in India and the United States",
        sub: "Our engineering team is based in Pune, India with a US presence in Austin, TX. We provide 4-6 hours of daily US timezone overlap for all client communications and sprint demos.",
        paragraphs: [
          "Office 905A, Suratwala Mark Plazzo",
          "100+ engineers across AI, full-stack, DevOps, and QA. IST timezone (UTC+5:30).",
          "Client-facing operations, account management, and US timezone coordination. CST (UTC-6).",
        ],
        items: [
          {
            title: "Pune, India (HQ)",
            description: "Engineering Headquarters",
          },
          {
            title: "Austin, TX, USA",
            description: "US Office",
          },
        ],
      },
      {
        kind: "cards",
        heading: "Certifications and Compliance",
        sub: "Enterprise-grade security and quality standards across every AI engagement. Our certifications are verifiable and apply to all work delivered by Zyvarex.",
        paragraphs: [
          "Data security practices: All client data is encrypted at rest (AES-256) and in transit (TLS 1.2+). Role-based access controls restrict data to authorized team members only. We support HIPAA-compliant architectures for healthcare clients and can sign Business Associate Agreements (BAAs). NDA execution is standard for all engagements.",
        ],
        items: [
          {
            title: "ISO 9001:2015",
            description:
              "Quality management systems certification. Ensures consistent delivery processes, documentation standards, and continuous improvement across all engagements.",
          },
          {
            title: "ISO 27001:2022",
            description:
              "Information security management certification. Covers data encryption, access controls, incident response, and audit trails for all client data and AI systems.",
          },
          {
            title: "4.9 on Clutch",
            description:
              "Top-rated on Clutch.co, a leading B2B reviews platform. Client reviews cover delivery quality, communication, project management, and value for cost.",
          },
        ],
      },
      {
        kind: "cards",
        heading: "How We Work with Clients",
        sub: "A simple, predictable process from first call to production deployment. No surprises, no mystery, no open-ended timelines.",
        paragraphs: [
          "Step 1 is free. No commitment, no pitch deck, no obligation.",
        ],
        items: [
          {
            title: "Free Discovery Call",
            description:
              "A 30-minute conversation where we listen to your goals, assess your AI readiness, and recommend the right package. You walk away with clarity on whether AI fits your use case.",
            chips: ["01", "Same week scheduling"],
          },
          {
            title: "Fixed-Scope Proposal",
            description:
              "We send a proposal with defined deliverables, timeline, tech stack, and a firm price. No hourly billing, no scope ambiguity. You approve the number before any work begins.",
            chips: ["02", "2-3 business days"],
          },
          {
            title: "Sprint-Based Build",
            description:
              "Our team builds in 2-week sprints with demos at every milestone. You see working software, give feedback, and adjust priorities. Real progress, not status reports.",
            chips: ["03", "2-8 weeks depending on package"],
          },
          {
            title: "Deploy, Document, and Handoff",
            description:
              "We deploy to your infrastructure, hand over all code and documentation, and train your team. Everything is yours. No vendor lock-in, no proprietary wrappers.",
            chips: ["04", "All code and docs included"],
            href: "/contact",
            linkLabel: "Book Your Free Discovery Call",
          },
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions About Zyvarex",
        items: [
          {
            question: "What is Zyvarex?",
            answer:
              "Zyvarex (www.zyvarex.ai) is a software development company founded in 2012. We specialize in building custom AI agents, chatbots, RAG knowledge bases, and AI integrations for mid-market companies. Our team of 100+ engineers operates from Pune, India and Austin, TX.",
          },
          {
            question: "What is Zyvarex's engineering background?",
            answer:
              "Zyvarex is a software engineering firm founded in 2012 with 14+ years of experience and 800+ projects delivered. We launched the AI division in 2024 to bring the same production-grade engineering discipline to AI development. All of Zyvarex' credentials, certifications (ISO 9001:2015, ISO 27001:2022), and expertise back every AI project we deliver.",
          },
          {
            question: "Where is Zyvarex located?",
            answer:
              "Our engineering headquarters is in Pune, India (Office 905A, Suratwala Mark Plazzo, Hinjewadi Road, Pune 411057). Our US office is in Austin, TX (8911 N Capital of Texas Hwy, Suite 4200). We provide 4-6 hours of daily US timezone overlap for all client communications, sprint demos, and collaborative work sessions.",
          },
          {
            question: "How many engineers does Zyvarex have?",
            answer:
              "Zyvarex has a 100+ person engineering team. Our AI-focused engineers work with Python, LangChain, LlamaIndex, LangGraph, OpenAI GPT-4o, Anthropic Claude, Pinecone, and other leading AI technologies. The broader team includes full-stack developers (React, Node.js, Next.js), DevOps engineers (AWS, Azure, GCP, Docker, Kubernetes), and QA specialists.",
          },
          {
            question: "What AI services does Zyvarex offer?",
            answer:
              "We offer 8 productized AI packages: AI Readiness Audit (from $3,000), AI Proof of Concept Sprint (from $8,000), AI Chatbot Development (from $12,000), AI Integration Sprint (from $15,000), RAG Knowledge Base (from $15,000), Custom AI Agent Build (from $20,000), AI Workflow Automation (from $8,000), and AI Managed Pod (from $12,000/month). Every package includes defined deliverables, fixed pricing, and clear timelines.",
          },
          {
            question: "What industries does Zyvarex serve?",
            answer:
              "We serve mid-market companies across four primary industries: SaaS and technology (AI features for existing products), healthcare (HIPAA-compliant AI solutions), fintech (AI for financial services and compliance), and e-commerce (AI chatbots and recommendation engines). Our clients typically range from $1M to $500M in annual revenue.",
          },
          {
            question: "What certifications does Zyvarex hold?",
            answer:
              "Zyvarex holds ISO 9001:2015 (quality management systems) and ISO 27001:2022 (information security management) certifications. We are rated 4.9 out of 5.0 on Clutch. These certifications ensure enterprise-grade quality and security standards across all AI development engagements.",
          },
          {
            question: "How do I start working with Zyvarex?",
            answer:
              "Start with a free 30-minute discovery call where we assess your AI needs and recommend the right approach. Most clients begin with an AI Readiness Audit ($3,000, 1-2 weeks) to identify high-impact AI opportunities. You can also go directly to any service package if you already know what you need. Contact us at hello@zyvarex.ai or call +1-844-766-2754.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Ready to Explore AI for Your Business?",
        paragraphs: [
          "Start with a free 30-minute discovery call. We will assess your use case, recommend the right approach, and give you an honest assessment of where AI fits.",
        ],
        links: [
          { label: "Book a Free Discovery Call", href: "/contact" },
          { label: "View All AI Packages", href: "/services" },
        ],
      },
    ],
  },
  {
    slug: "contact",
    title: "Get a Free AI Consultation | Contact Zyvarex",
    description:
      "Book a free 30-minute AI discovery call. Get expert advice on chatbots, AI agents, and RAG systems. Response within 1 business day. Packages from $3,000.",
    heroChip: "",
    heroTitleTop: "Let's Build Your AI Solution",
    heroTitleBottom: "",
    heroDescription: "",
    sections: [
      {
        kind: "prose",
        heading: "Send Us a Message",
        paragraphs: [
          "Something went wrong.",
          "Please try again or email us directly at sales@zyvarex.ai.",
          "We never share your information. Response within 1 business day.",
        ],
        chips: [
          "*",
          "Please enter your full name.",
          "*",
          "Please enter a valid work email address.",
          "*",
          "Please describe your project or goals.",
          "Send Message",
        ],
      },
      {
        kind: "cards",
        heading: "Message Sent!",
        sub: "Thank you for reaching out. We will respond within 1 business day with a clear next step.",
        footnote:
          "Want to speed things up? Book a call directly on our calendar.",
        paragraphs: [
          "8911 N Capital of Texas Hwy, Suite 4200 #1084, Austin, TX 78759",
          "Office 905A, Suratwala Mark Plazzo, Hinjewadi Road, Pune 411057",
          "Most inquiries receive a reply within 4-6 hours during US business hours.",
        ],
        items: [
          {
            title: "Prefer to Talk?",
            description:
              "Skip the form. Book a free 30-minute discovery call directly on our calendar.",
            href: "https://calendly.com/zilurrehman-dev/30min",
            linkLabel: "Book a Discovery Call",
          },
          {
            title: "Direct Contact",
            description: "Email",
            href: "mailto:sales@zyvarex.ai",
            linkLabel: "sales@zyvarex.ai",
          },
          {
            title: "Offices",
            description: "Austin, TX (USA)",
            chips: ["1 Business Day Response"],
          },
        ],
      },
      {
        kind: "cards",
        heading: "What Happens After You Reach Out",
        items: [
          {
            title: "We Respond",
            description:
              "Within 1 business day, a team member replies with a clear next step.",
            chips: ["Step 1"],
          },
          {
            title: "Discovery Call",
            description:
              "Free 30-minute call to understand your goals, data, and where AI fits.",
            chips: ["Step 2"],
          },
          {
            title: "Proposal",
            description:
              "You receive a fixed-scope proposal with timeline, deliverables, and firm pricing.",
            chips: ["Step 3"],
          },
          {
            title: "Kickoff",
            description:
              "We start building within days. Sprint demos every 2 weeks. Full transparency.",
            chips: ["Step 4"],
          },
        ],
      },
      {
        kind: "faq",
        heading: "Contact and Getting Started FAQ",
        items: [
          {
            question: "How quickly do you respond to contact form submissions?",
            answer:
              "We respond within 1 business day. Most inquiries receive a reply within 4-6 hours during US business hours (9am to 6pm CT). You will receive a clear next step: either a discovery call invite, a preliminary proposal outline, or a recommendation based on your needs.",
          },
          {
            question: "Do you offer a free consultation or discovery call?",
            answer:
              "Yes. Every engagement starts with a free 30-minute discovery call. There is no obligation and no sales pressure. We use this call to understand your business, identify where AI can create the most impact, and recommend the right package. You can book directly at calendly.com/zilurrehman-dev/30min or submit the form above and we will schedule one.",
          },
          {
            question: "What information should I include in my message?",
            answer:
              "The more context you provide, the faster we can give you a useful response. Helpful details include: what your company does, the AI use case you are exploring (chatbot, agent, data extraction, etc.), your current tech stack, your timeline, and your approximate budget range. If you are not sure about any of these, that is perfectly fine. We will figure it out together on the discovery call.",
          },
          {
            question: "Do you sign NDAs before initial discussions?",
            answer:
              "Yes. We are happy to sign a mutual NDA before any detailed technical discussion. For the initial discovery call, we typically discuss goals at a high level. If you need an NDA signed before the first call, just mention it in your message and we will send one over within 24 hours. Zyvarex holds ISO 27001:2022 certification for information security.",
          },
          {
            question: "What happens after I submit the contact form?",
            answer:
              "Step 1: You receive a confirmation email immediately. Step 2: A team member reviews your inquiry and responds within 1 business day. Step 3: We schedule a free 30-minute discovery call at a time that works for you. Step 4: After the call, you receive a fixed-scope proposal with timeline, deliverables, and pricing. No hourly billing, no surprises.",
          },
          {
            question: "Can you work with teams in different time zones?",
            answer:
              "Absolutely. Our engineering team is based in Pune, India, and we maintain 4-6 hours of daily overlap with US time zones (EST, CST, PST). We use async communication tools including Slack, Jira, and GitHub, and schedule sprint demos and standups at times convenient for your team. Our US office in Austin, TX provides local availability for client meetings.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Not Sure Which AI Package Is Right?",
        paragraphs: [
          "Explore all 8 productized AI packages with transparent pricing, clear deliverables, and defined timelines. Or start with a $3,000 AI Readiness Audit to find out.",
        ],
        links: [
          { label: "View All Packages", href: "/services" },
          { label: "AI Readiness Audit", href: "/services/ai-readiness-audit" },
        ],
      },
      {
        kind: "prose",
        heading: "About This Page",
        paragraphs: [
          "Zyvarex (www.zyvarex.ai) offers AI development services starting at $3,000. Contact us by email at sales@zyvarex.ai, by phone at +1 (844) 766-2754 (US) or +91 75173 15690 (India), or submit the form below. We respond within 1 business day with a clear next step: a call, a proposal, or a recommendation. Offices in Austin, TX (USA) and Pune, India. We serve startups and mid-market companies looking to build AI chatbots, agents, RAG systems, and integrations. Backed by Zyvarex' 14+ years of experience, 800+ projects delivered, and a 100+ person engineering team. Rated 4.9 on Clutch. ISO 9001:2015 and ISO 27001:2022 certified.",
        ],
      },
    ],
  },
  {
    slug: "services",
    title: "AI Development Packages & Pricing | Zyvarex",
    description:
      "Fixed-price AI packages: audits from $3K, chatbots from $12K, AI agents from $20K, managed pods from $12K/mo. Clear scope, fixed timelines, production-ready.",
    heroChip: "",
    heroTitleTop: "AI Development Services",
    heroTitleBottom: "",
    heroDescription: "",
    introParagraphs: [
      "Zyvarex offers eight productized AI development packages designed for businesses ready to implement AI. Unlike traditional consulting firms that bill by the hour with vague scopes, our packages have clear deliverables, fixed pricing, and defined timelines so you know exactly what you are getting before you commit.",
      "Our packages are organized into three tiers that mirror how successful AI adoption works: start with assessment and validation, build production-grade AI systems, then scale with ongoing development. Whether you need a $3,000 readiness audit or a $30,000/month dedicated AI team, every engagement follows the same principle: defined scope, transparent pricing, and measurable outcomes.",
    ],
    sections: [
      {
        kind: "cards",
        heading: "How to Choose the Right AI Package",
        sub: "Not sure where to start? Here is how our three tiers map to your AI maturity level.",
        paragraphs: ["Know what you need? Skip straight to a conversation."],
        items: [
          {
            title: "Exploring AI",
            description:
              "You know AI could help your business but you are not sure where to start or whether it will work for your use case.",
            chips: [
              "AI Readiness Audit from $3,000",
              "AI PoC Sprint from $8,000",
              "Most Popular",
            ],
          },
          {
            title: "Ready to Build",
            description:
              "You have a specific AI project in mind and want a team that can design, build, and deploy it to production.",
            chips: [
              "AI Chatbot Development from $12K",
              "AI Integration Sprint from $15K",
              "RAG Knowledge Base from $15K",
              "Custom AI Agent from $20K",
            ],
          },
          {
            title: "Scaling AI",
            description:
              "You need ongoing AI development capacity or want to automate business processes at scale.",
            chips: [
              "AI Managed Pod from $12K/mo",
              "AI Workflow Automation from $8K",
            ],
            href: "/contact",
            linkLabel: "Book a Free Discovery Call",
          },
        ],
      },
      {
        kind: "cards",
        heading: "All AI Development Packages",
        items: [
          {
            title: "AI Readiness Audit",
            description:
              "Know exactly where AI can move the needle before you invest a dollar in development.",
            chips: ["1-2 weeks", "Starting at $3,000", "Start Here"],
          },
          {
            title: "AI Proof of Concept Sprint",
            description:
              "Validate your AI idea with a working prototype in weeks, not months.",
            chips: ["2-4 weeks"],
          },
          {
            title: "AI Chatbot Development",
            description:
              "Ship a custom AI chatbot that actually understands your business in weeks.",
            chips: ["2-4 weeks", "Starting at $12,000", "Build"],
          },
          {
            title: "AI Integration Sprint",
            description:
              "Add AI superpowers to your existing product without a rewrite.",
            chips: ["4 weeks", "Starting at $15,000", "Build"],
          },
          {
            title: "RAG Knowledge Base",
            description:
              "Turn your documents into an AI-powered knowledge base your team can actually query.",
            chips: ["3-4 weeks", "Starting at $15,000", "Build"],
          },
          {
            title: "Custom AI Agent Development",
            description:
              "Build an AI agent that actually does the work, not just answers questions.",
            chips: ["4-8 weeks"],
          },
          {
            title: "AI Managed Pod",
            description:
              "A dedicated AI engineering team that ships every sprint without the hiring headache.",
            chips: [
              "Ongoing (3-month minimum)",
              "Starting at $12,000/mo",
              "Scale",
            ],
          },
          {
            title: "AI Workflow Automation",
            description:
              "Automate the repetitive work your team hates with AI that actually gets it right.",
            chips: ["2-4 weeks", "Starting at $8,000"],
          },
        ],
      },
      {
        kind: "cards",
        heading: "What Makes Our AI Development Services Different",
        sub: 'We are not a generic dev shop that added "AI" to their website. Here is what sets Zyvarex apart.',
        paragraphs: [
          'We are not a generic dev shop that added "AI" to their website. Here is what sets Zyvarex apart.',
        ],
        items: [
          {
            title: "Fixed Pricing, No Surprises",
            description:
              "Every package has a starting price and defined scope. You get a fixed quote before work begins. No hourly billing or scope creep.",
          },
          {
            title: "Defined Timelines",
            description:
              "From 1-week audits to 8-week agent builds, every package has a timeline. Sprint-based delivery means you see progress every 2 weeks.",
          },
          {
            title: "Production-Grade Quality",
            description:
              "We build systems for production, not demos. Every delivery includes testing, documentation, monitoring, and handoff training for your team.",
          },
          {
            title: "14+ Years, 100+ Engineers",
            description:
              "Zyvarex has 800+ projects delivered, Clutch 4.9 rating, and a 100+ person engineering team.",
          },
        ],
      },
      {
        kind: "cards",
        heading: "Common AI Development Use Cases",
        sub: "These are the AI challenges businesses bring to us most often. Each maps to one or more of our productized packages.",
        items: [
          {
            title: "Customer Support AI",
            description:
              "Reduce support ticket volume by 40-60% with AI chatbots trained on your knowledge base.",
            href: "/services/ai-chatbot-development",
            linkLabel: "AI Chatbot Development",
          },
          {
            title: "Document Q&A and Search",
            description:
              "Turn thousands of documents into a searchable AI that answers questions with cited sources.",
            href: "/services/rag-knowledge-base",
            linkLabel: "RAG Knowledge Base",
          },
          {
            title: "Workflow Automation",
            description:
              "Automate document processing, email triage, report generation, and data entry with AI.",
            href: "/services/ai-workflow-automation",
            linkLabel: "AI Workflow Automation",
          },
          {
            title: "AI Features for SaaS Products",
            description:
              "Add smart search, content generation, recommendations, or analytics to your existing product.",
            href: "/services/ai-integration",
            linkLabel: "AI Integration Sprint",
          },
          {
            title: "Autonomous AI Agents",
            description:
              "Build agents that take actions: process orders, qualify leads, manage infrastructure, orchestrate workflows.",
            href: "/services/ai-agent-development",
            linkLabel: "Custom AI Agent Development",
          },
          {
            title: "Dedicated AI Team",
            description:
              "Get a cross-functional AI engineering team on retainer for continuous development and iteration.",
            href: "/services/ai-managed-pod",
            linkLabel: "AI Managed Pod",
          },
        ],
      },
      {
        kind: "faq",
        heading: "AI Development Services: Frequently Asked Questions",
        items: [
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
        ],
      },
      {
        kind: "cards",
        heading: "How to Get Started",
        sub: "No RFP process. No lengthy procurement. Three steps to your first AI project.",
        items: [
          {
            title: "Book a Free Call",
            description:
              "30-minute discovery call. Tell us what you want AI to do. We help you pick the right package. No sales pitch.",
          },
          {
            title: "Get a Fixed Quote",
            description:
              "We scope your project and give you an exact price and timeline. You approve before any work begins.",
          },
          {
            title: "We Start Building",
            description:
              "Work begins immediately. You see progress with sprint demos. You own every deliverable.",
            chips: [
              "Free, no obligation",
              "Fixed pricing, no surprises",
              "You own everything we build",
            ],
            href: "/contact",
            linkLabel: "Book Your Free Discovery Call",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Not sure where to start?",
        paragraphs: [
          "Book a free 30-minute call. We will help you identify the right AI package for your business. Start with the AI Readiness Audit at just $3,000.",
        ],
        links: [
          { label: "Book a Call", href: "/contact" },
          { label: "View All Services", href: "/services" },
        ],
      },
      {
        kind: "prose",
        heading: "About This Page",
        paragraphs: [
          "Zyvarex (www.zyvarex.ai) offers eight productized AI development packages organized into three tiers: Start Here (AI Readiness Audit from $3,000, AI PoC Sprint from $8,000), Build (AI Chatbot Development from $12,000, AI Integration Sprint from $15,000, RAG Knowledge Base from $15,000, Custom AI Agent Development from $20,000), and Scale (AI Managed Pod from $12,000/mo, AI Workflow Automation from $8,000). Every package includes clear pricing, fixed timelines, and defined deliverables. Backed by Zyvarex with 14+ years, 800+ projects, and 100+ engineers.",
        ],
      },
    ],
  },
];

export const companyPageBySlug = (slug: string) =>
  companyPages.find((p) => p.slug === slug);
