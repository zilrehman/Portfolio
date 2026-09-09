/* Words cycling inside the hero pill — reference list, in order. */
export const heroPillPhrases = [
  "UI/UX",
  "MVPs",
  "Web",
  "Apps",
  "SaaS",
  "Branding",
  "Product",
];

export const heroPlatformIcons = [
  {
    label: "Top Rated",
    href: "https://www.upwork.com/freelancers/~01e4a2a57ebc0df005",
    image: "/assets/upwork.svg",
    alt: "Upwork",
    rounded: false,
  },
  {
    label: "Pro Seller Agency",
    href: "https://www.fiverr.com/",
    image: "/assets/fiverr.svg",
    alt: "Fiverr",
    rounded: false,
  },
  {
    label: "Leading Design Agency",
    href: "https://clutch.co/",
    image: "/assets/clutch.svg",
    alt: "clutch",
    rounded: true,
  },
  {
    label: "Leading Design Agency",
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
    title: "Healthcare",
    bg: "#D1E9FF",
    description:
      "We design HIPAA-conscious, patient-centered digital experiences that simplify complex clinical workflows and improve usability for patients and providers alike.",
    appImage: "/assets/HealthcareApp.png",
    appAlt: "health care app",
    appTags: ["Patient UX", "Accessibility", "Data Clarity"],
    webImage: "/assets/HealthcareWeb.png",
    webAlt: "health care web",
    webTags: ["Compliance UX", "Health Data", "Clinical Workflows"],
  },
  {
    id: "fintech",
    title: "Fintech",
    bg: "#FBE8FF",
    description:
      "From banking apps to investment platforms, we transform dense financial data into intuitive, secure, and trust-driven experiences that help users make confident decisions.",
    appImage: "/assets/FintechApp.png",
    appAlt: "fintech app",
    appTags: ["Secure UX", "Data Visualisation", "Trust Design"],
    webImage: "/assets/FintechWeb.png",
    webAlt: "fintech web",
    webTags: ["Dashboards", "Financial UX", "Risk & Security"],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    bg: "#FDEAD7",
    description:
      "We craft high-converting shopping experiences that streamline product discovery, reduce checkout friction, and turn first-time buyers into loyal customers.",
    appImage: "/assets/EcommerceApp.png",
    appAlt: "e-commerce app",
    appTags: ["Conversion UX", "Checkout Flow", "Product Discovery"],
    webImage: "/assets/EcommerceWeb.png",
    webAlt: "e-commerce web",
    webTags: ["Shopping Flow", "Retention UX", "Conversion Design"],
  },
  {
    id: "saas",
    title: "SaaS",
    bg: "#E5E7EB",
    description:
      "We design product experiences that scale simplifying complex workflows, boosting feature adoption, and supporting sustainable growth from MVP to enterprise.",
    appImage: "/assets/SaaSApp.png",
    appAlt: "saas app",
    appTags: ["Product UX", "Feature Design", "Growth Systems"],
    webImage: "/assets/SaasWeb.png",
    webAlt: "saas web",
    webTags: ["Dashboard UX", "Workflow Design", "Scalable Systems"],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    bg: "#CCFBEF",
    description:
      "We bring clarity to complex enterprise systems with scalable B2B interfaces that streamline operations, surface insights, and accelerate decision-making across teams.",
    appImage: "/assets/EnterpriseApp.png",
    appAlt: "enterprise app",
    appTags: ["B2B UX", "Workflow Design", "Dashboard UX"],
    webImage: "/assets/EnterpriseWeb.png",
    webAlt: "enterprise web",
    webTags: ["System Design", "Operational UX", "Workflow Clarity"],
  },
];

/* Rendered as three two-column rows on the reference, not one six-item grid. */
export const valueProps = [
  ["15+ Years of Experience", "1,200+ Projects Shipped"],
  ["Top-Rated on Upwork & Fiverr", "Data-Informed Design"],
  ["Clean Interfaces", "Continuous Optimization"],
];

export const services = [
  {
    title: "UX Strategy & ",
    tags: ["Consulting."],
    description:
      "Get expert direction on what to improve, what to simplify, and how to make your user experience support real business goals.",
    image: "/images/UI_UX.jpg",
  },
  {
    title: "Web & Mobile App Design",
    tags: ["Web Design", "App Design", "Responsive Design", "Landing Pages"],
    description:
      "From pixel perfect websites to seamless mobile experiences, we build designs that work beautifully across every screen and device. Whether it's a landing page, a full web platform, or a mobile app, we deliver a clean and conversion focused design every time.",
    image: "/images/App-design.jpg",
  },
  {
    title: "AI & ML Development",
    tags: [
      "Generative AI",
      "AI Assistants & Chatbots",
      "AI Product Development",
      "Machine Learning Solutions",
      "NLP",
    ],
    description:
      "We implement AI solutions like machine learning, NLP, and automation to drive innovation and optimize business processes.",
    image: "/images/AI-ML.jpeg",
  },
  {
    title: "SaaS & Dashboard Design",
    tags: ["Product Design", "Admin Panels", "Dashboard UI", "B2B SaaS"],
    description:
      "Complex data doesn't have to look complicated. We specialised in designing SaaS platforms, admin dashboards, and fintech interfaces that present data clearly and help users make decisions faster. Built for startups and enterprises across trading, healthcare and finance.",
    image: "/images/SaaS.jpg",
  },
  {
    title: "Branding & E-com Design",
    tags: ["Brand Identity", "Logo Design", "Visual Identity", "Shopify"],
    description:
      "A strong brand is the foundation of every successful business. We craft memorable brand identities from logo and typography to full visual systems. Paired with conversion optimised e-commerce design, we help businesses sell more and stand out in competitive markets.",
    image: "/images/Branding.jpg",
  },
];

export const stats = [
  {
    value: 350,
    suffix: "+",
    label: "Happy Clients",
    icon: "/images/home/HappyClient.png",
  },
  {
    value: 120,
    suffix: "M+",
    label: "Raised by our Clients",
    prefix: "$",
    icon: "/images/home/RaisedByOurClient.png",
  },
  {
    value: 45,
    suffix: "+",
    label: "Countries Served",
    icon: "/images/home/CountriesServed.png",
  },
  {
    value: 500,
    suffix: "+",
    label: "Top Rated Projects",
    icon: "/images/home/TopRated.png",
  },
  {
    value: 98,
    suffix: "%",
    label: "Job Success",
    icon: "/images/home/JobSuccess.png",
  },
];

export type PricingPlan = {
  name: string;
  blurb: string;
  price: string;
  period?: string;
  label: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    blurb: "Best for Early-stage startups, MVPs, quick design needs",
    price: "$1,499",
    period: "/month",
    label: "Design Only",
    features: [
      "40 hours of dedicated design support",
      "UI/UX Design",
      "Full-Stack Delivery Team",
      "Landing Page Design",
      "Slack + Loom communication",
      "Same-day response",
      "All design services included",
      "Daily communication Slack + Loom",
      "Unlimited revisions",
    ],
  },
  {
    name: "Growth",
    blurb:
      "For growing startups that need design and development (under one roof)",
    price: "$3,999",
    period: "/month",
    label: "Design + Dev",
    highlighted: true,
    features: [
      "Everything in Starter",
      "80 hours of dedicated support",
      "Web & Mobile Development",
      "SaaS & Dashboard Design",
      "Branding & Visual Identity",
      "Shopify / WooCommerce Design",
      "4 meetings per month",
      "Weekly progress reports",
      "Dedicated project manager",
    ],
  },
  {
    name: "Scale",
    blurb:
      "For product-led companies needing design, development & AI Integration.",
    price: "$6,999",
    period: "/month",
    label: "Design + Full-stack + AI/ML",
    features: [
      "Everything in Growth",
      "160 hours of dedicated support",
      "AI & ML Development",
      "Generative AI & Chatbot Development",
      "NLP & Predictive Analytics",
      "Up to 8 meetings per month",
      "Priority Slack channel",
      "Senior lead designer assigned",
      "Dedicated account director",
    ],
  },
  {
    name: "Enterprise",
    blurb:
      "For large Enterprises with complex, high, and ongoing product needs.",
    price: "Custom",
    label: "Custom hours, team size & SLA",
    features: [
      "Everything in Scale",
      "Custom team composition",
      "White-label delivery option",
      "NDA & custom contracts",
      "Flexible SLA & dedicated hours",
      "On-site collaboration (optional)",
      "C-suite reporting & dashboards",
      "Continuous optimization",
      "Ongoing support & scaling",
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
      "Portfolio is one of the most helpful website/mobile app design companies I worked with. A great team with fresh ideas, fair pricing, amazing designs and innovative thinking. Most of all very responsive, when working with Portfolio it is like having a second team on your side.",
    image: "/images/Darell.png",
    imageAlt: "Darrell Fertakos",
    name: "Darrell Fertakos",
  },
  {
    testimonialText:
      "Consistent, professional and well resourced. The guys are always available and the results are easy to see by the quality of the work.",
    image: "/images/Oliver.png",
    imageAlt: "Oliver scott",
    name: "Oliver scott",
  },
  {
    testimonialText:
      "Portfolio has an exceptional UI and UX team. They worked with us on multiple projects and always delivered high quality designs, and ensures that his ideas of design and user experience fulfills the customer needs. I would highly recommend them.",
    image: "/images/Farukh.png",
    imageAlt: "Farrukh Mian",
    name: "Farrukh Mian",
  },
  {
    testimonialText:
      "Portfolio helped me upgrade a Figma design from an older version of the MUI asset library to the latest version and matched the custom styling from the previous version fairly closely (the rest are minor things we'll be tweaking anyways, so the delivery met my expectations in every way). He was able to...",
    image: "/images/testimonial/larskemmann.webp",
    imageAlt: "larskemmann",
    name: "Lars Kemmann",
  },
  {
    testimonialText:
      "Really great experience working with Portfolio. Had a quick call to discuss our teams expectations, he provided an incredible mock up of our initial ask and then proceeded to quickly deliver the final components of the order. Everyone on my team was happy with the design work and we would (and are) hire/ing again.",
    image: "/images/testimonial/norse_warrior.jpg",
    imageAlt: "norse_warrior",
    name: "Norse Warrior",
  },
  {
    testimonialText:
      "He did an amazing job! He corrected the mobile version of our website design and then created a clean, professional desktop version that matched perfectly. Communication was smooth, he understood our requirements quickly, and delivered everything on time. We are very happy with the results and would definitely work with him again. Highly recommended!",
    image: "/images/testimonial/aramelkonyan199.webp",
    imageAlt: "aramelkonyan199",
    name: "Aram Melkonyan",
  },
  {
    testimonialText:
      "Portfolio truly excelled in delivering a visually appealing and creatively aligned UX design, perfectly capturing the essence of the brief and translating it into a polished, usable product.",
    image: "/images/testimonial/asnagni.webp",
    imageAlt: "asnagni",
    name: "Asnagni",
  },
  {
    testimonialText:
      "Great communication, fast turnaround and a genuine understanding of what we were trying to build. The design work raised the quality bar for the whole product.",
    image: "/images/testimonial/benny4dam.webp",
    imageAlt: "benny4dam",
    name: "Benny",
  },
  {
    testimonialText:
      "Professional, responsive and detail-oriented. The team delivered exactly what was scoped and then went a step further to make sure everything worked in practice.",
    image: "/images/testimonial/boruchsmason.webp",
    imageAlt: "boruchsmason",
    name: "Boruch Mason",
  },
  {
    testimonialText:
      "A pleasure to work with from the first call. Clear process, thoughtful design decisions and consistent delivery throughout the project.",
    image: "/images/testimonial/matilda_talluri.webp",
    imageAlt: "matilda_talluri",
    name: "Matilda Talluri",
  },
  {
    testimonialText:
      "Excellent understanding of our market and users. The final designs were clean, modern and ready to hand to our developers without rework.",
    image: "/images/testimonial/yurisato859.webp",
    imageAlt: "yurisato859",
    name: "Yuri Sato",
  },
];

export const lowerTestimonials: Testimonial[] = [
  {
    testimonialText:
      "Portfolio is one of the most helpful website/mobile app design companies I worked with. A great team with fresh ideas, fair pricing, amazing designs and innovative thinking. Most of all very responsive, when working with Portfolio it is like having a second team on your side.",
    image: "/images/James.png",
    imageAlt: "James JR",
    name: "James JR",
  },
  {
    testimonialText:
      "It has been outstanding working with the team at Portfolio. The exception eye to detail and greater understanding has made our products exceptionally great.",
    image: "/images/Muhun.png",
    imageAlt: "Muhunthan",
    name: "Muhunthan",
  },
  {
    testimonialText:
      "We are satisfied with their professional qualitative work. Especially he understand well about Japanese unique designs. He is the best Pakistani designer who can work for Japanese companies.",
    image: "/images/Ai_Esa.png",
    imageAlt: "Ai Esashika",
    name: "Ai Esashika",
  },
  {
    testimonialText:
      "Delivered a strong, cohesive visual direction and kept the whole project moving. Communication was clear and the results speak for themselves.",
    image: "/images/testimonial/crma_creates.jpeg",
    imageAlt: "crma_creates",
    name: "CRMA Creates",
  },
  {
    testimonialText:
      "Fast, reliable and creative. The designs were exactly what we needed and the revisions were handled without any friction.",
    image: "/images/testimonial/edobsc.webp",
    imageAlt: "edobsc",
    name: "Edobsc",
  },
  {
    testimonialText:
      "Understood the brief immediately and produced work that was both beautiful and practical. Would happily work together again.",
    image: "/images/testimonial/forrestwilkins.webp",
    imageAlt: "forrestwilkins",
    name: "Forrest Wilkins",
  },
  {
    testimonialText:
      "Very responsive throughout and delivered ahead of schedule. The attention to detail on the smaller interactions really stood out.",
    image: "/images/testimonial/pcullum.webp",
    imageAlt: "pcullum",
    name: "P.Cullum",
  },
  {
    testimonialText:
      "Great collaboration from start to finish. The team took our rough ideas and turned them into a clear, well-structured product experience.",
    image: "/images/testimonial/marcogama.webp",
    imageAlt: "marcogama",
    name: "Marco Gama",
  },
  {
    testimonialText:
      "Clean, modern design work with a strong grasp of usability. Everything was delivered organised and ready for development.",
    image: "/images/testimonial/dujota.webp",
    imageAlt: "dujota",
    name: "Dujota",
  },
  {
    testimonialText:
      "Exceptional service and quality. They were patient with feedback and consistently improved the design at every round.",
    image: "/images/testimonial/victorhosea.webp",
    imageAlt: "victorhosea",
    name: "Victor Hosea",
  },
];

/** Inner-page carousel testimonials — the six with a role line. */
export const carouselTestimonials = [
  {
    quote:
      "Portfolio is one of the most helpful website/mobile app design companies I worked with. A great team with fresh ideas, fair pricing, amazing designs and innovative thinking. Most of all very responsive, when working with Portfolio it is like having a second team on your side.",
    name: "Darrell Fertakos",
    role: "Award Winning Inventor BoundlessInnovations",
    image: "/images/Darell.png",
  },
  {
    quote:
      "Consistent, professional and well resourced. The guys are always available and the results are easy to see by the quality of the work.",
    name: "Oliver scott",
    role: "Director at Capital care investments",
    image: "/images/Oliver.png",
  },
  {
    quote:
      "Portfolio has an exceptional UI and UX team. They worked with us on multiple projects and always delivered high quality designs, and ensures that his ideas of design and user experience fulfills the customer needs. I would highly recommend them.",
    name: "Farrukh Mian",
    role: "Partner - Techandover Ltd",
    image: "/images/Farukh.png",
  },
  {
    quote:
      "Portfolio is one of the most helpful website/mobile app design companies I worked with. A great team with fresh ideas, fair pricing, amazing designs and innovative thinking. Most of all very responsive, when working with Portfolio it is like having a second team on your side.",
    name: "James JR",
    role: "Confidential - New York",
    image: "/images/James.png",
  },
  {
    quote:
      "It has been outstanding working with the team at Portfolio. The exception eye to detail and greater understanding has made our products exceptionally great.",
    name: "Muhunthan",
    role: "Founder / Architect - Duo World Inc.",
    image: "/images/Muhun.png",
  },
  {
    quote:
      "We are satisfied with their professional qualitative work. Especially he understand well about Japanese unique designs. He is the best Pakistani designer who can work for Japanese companies.",
    name: "Ai Esashika",
    role: "Ai Esashika",
    image: "/images/Ai_Esa.png",
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
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
];

export const footerServiceLinks = [
  { label: "UI/UX Design", href: "/services" },
  { label: "Web & Mobile App", href: "/services" },
  { label: "Dashboard", href: "/services" },
  { label: "Ai & ML Development", href: "/services" },
  { label: "Branding", href: "/services" },
];

export const footerReviewLinks = [
  { label: "Clutch", href: "https://clutch.co/" },
  { label: "Techbehmoths", href: "https://techbehemoths.com/" },
  { label: "Techreviewer", href: "https://techreviewer.co/" },
  { label: "Designrush", href: "https://www.designrush.com/" },
  { label: "Goodfirms", href: "https://www.goodfirms.co/" },
  { label: "Trustpilot", href: "https://www.trustpilot.com/" },
];

export const footerOffices = [
  {
    country: "Pakistan",
    flag: "pk",
    address:
      "Innovista Rawal, Defense Avenue, A, Sector A DHA Phase 1, Islamabad, 45730, Pakistan",
    phone: "+92 316 1543205",
    href: "https://wa.me/923161543205",
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
