// Official SDX Software Development Constants & Brand Configuration
// Owner: SASIDHAR | Tirupati, Andhra Pradesh, India

export const COMPANY_INFO = {
  name: "SDX Software Development",
  shortName: "SDX",
  tagline: "Empowering Modern Businesses with Scalable Digital Solutions",
  owner: "SASIDHAR",
  phone: "+91 7207820204",
  phoneRaw: "917207820204",
  email: "sdxsoftwaredevelopment@gmail.com",
  address: "Bhavani Nagar, Tirupati, Andhra Pradesh, India",
  city: "Tirupati",
  state: "Andhra Pradesh",
  country: "India",
  pincode: "517501",
  coordinates: {
    lat: 13.6288,
    lng: 79.4192,
  },
  workingHours: "Monday - Saturday: 9:00 AM - 8:00 PM IST (24/7 Priority Support)",
  foundingYear: 2023,
  websiteUrl: process.env.NEXT_PUBLIC_APP_URL || "https://sdxsoftware.com",
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1HtSmbpGKX/",
  instagram: "https://www.instagram.com/sdxsoftwaredevelopment?igsh=eTZiZWpvNHVtYXRm",
  telegram: "https://t.me/SDXSoftwareDevelopment",
  twitter: "https://x.com/SDXSoftwaram5s",
  linkedin: "https://www.linkedin.com/in/sasidhar-s-093855402",
  whatsapp: "https://wa.me/917207820204",
  call: "tel:+917207820204",
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const CORE_SERVICES = [
  {
    id: "landing-pages",
    title: "Landing Pages",
    slug: "landing-pages",
    shortDesc: "High-converting, ultra-fast landing pages engineered to turn traffic into qualified leads.",
    fullDesc: "Our high-impact landing pages are crafted with lightning-fast load times, responsive glassmorphism aesthetics, conversion-driven copy layouts, and seamless CRM integrations.",
    price: 999,
    priceDisplay: "₹999",
    features: [
      "Custom High-Converting Modern Design",
      "Mobile First & 100% Responsive",
      "Speed Optimized (95+ Lighthouse Score)",
      "Lead Capture Form & WhatsApp Integration",
      "SEO Meta Tags & Social Share Cards",
      "SSL Certificate & Fast Cloud Hosting Setup"
    ],
    icon: "Layout",
    isPopular: false,
  },
  {
    id: "business-websites",
    title: "Business Websites",
    slug: "business-websites",
    shortDesc: "Professional corporate websites that establish unbeatable brand credibility and market authority.",
    fullDesc: "Complete multi-page corporate website solutions tailored for enterprises, startups, agencies, and local businesses in Tirupati and worldwide.",
    price: 2999,
    priceDisplay: "₹2,999",
    features: [
      "Up to 5 Custom Branded Pages",
      "Interactive Glassmorphic UI & Dark/Light Mode",
      "Interactive Contact Forms & Google Maps",
      "Dynamic Blog / News Capability",
      "Comprehensive On-Page SEO & Schema",
      "1 Year Technical Support & Updates"
    ],
    icon: "Building2",
    isPopular: true,
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    slug: "portfolio-websites",
    shortDesc: "Stunning personal portfolios for creators, developers, designers, doctors, and professionals.",
    fullDesc: "Stand out with an awe-inspiring portfolio featuring interactive project galleries, case studies, resume downloads, and live client testimonials.",
    price: 2499,
    priceDisplay: "₹2,499",
    features: [
      "Modern Animated Visual Experience",
      "Interactive Filterable Project Gallery",
      "Case Study Popups & Live Demo Links",
      "Resume & Certificate Viewer",
      "Social Media & Booking Integrations",
      "Easy Content Updates"
    ],
    icon: "Briefcase",
    isPopular: false,
  },
  {
    id: "ecommerce-websites",
    title: "E-Commerce Websites",
    slug: "ecommerce-websites",
    shortDesc: "Full-scale online stores with seamless payment gateways, product catalogs, and automated invoicing.",
    fullDesc: "Launch your digital store with blazing speed, instant Razorpay checkout, automated invoice generation, inventory tracking, and client order portals.",
    price: 9999,
    priceDisplay: "₹9,999",
    features: [
      "Complete Product Catalog & Search",
      "Razorpay / UPI Payment Gateway Integration",
      "Automated PDF Invoices & Email Receipts",
      "Customer Order Tracking Portal",
      "Coupon Codes & Discount Engine",
      "Admin Product & Order Management Dashboard"
    ],
    icon: "ShoppingBag",
    isPopular: true,
  },
  {
    id: "web-applications",
    title: "Web Applications",
    slug: "web-applications",
    shortDesc: "Custom full-stack web applications, SaaS platforms, internal tools, and ERP portals.",
    fullDesc: "Custom web applications built on Next.js, Node.js, and PostgreSQL with role-based access control, real-time analytics, and high-security architectures.",
    price: 14999,
    priceDisplay: "From ₹14,999",
    features: [
      "Full-Stack Architecture (Next.js & Node)",
      "Role-Based Access Control (Admin/Client/Staff)",
      "Real-Time Dashboards & Analytics Charts",
      "REST & GraphQL API Development",
      "Secure Database Design (PostgreSQL / Prisma)",
      "End-to-End Encryption & Security Audits"
    ],
    icon: "Code2",
    isPopular: false,
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    slug: "website-redesign",
    shortDesc: "Transform outdated websites into modern, sleek, high-performing digital experiences.",
    fullDesc: "Give your existing website a modern facelift with modern glassmorphism UI, improved mobile responsiveness, 3x faster loading speeds, and better conversions.",
    price: 1999,
    priceDisplay: "From ₹1,999",
    features: [
      "Complete UI/UX Refresh & Modernization",
      "Core Web Vitals Speed Optimization",
      "Mobile Responsiveness Overhaul",
      "Brand Color Palette & Typography Upgrade",
      "Preservation of Existing SEO Rankings",
      "Clean Modern Code Migration"
    ],
    icon: "RefreshCw",
    isPopular: false,
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    slug: "website-maintenance",
    shortDesc: "Continuous security updates, daily backups, performance monitoring, and rapid bug fixes.",
    fullDesc: "Keep your web infrastructure pristine with proactive maintenance, security patches, uptime monitoring, bug resolutions, and regular content adjustments.",
    price: 1499,
    priceDisplay: "₹1,499 / mo",
    features: [
      "24/7 Uptime & Performance Monitoring",
      "Weekly Automated Cloud Backups",
      "Security Patches & Vulnerability Scans",
      "Speed Optimization & Database Tuning",
      "Priority WhatsApp & Call Support",
      "Monthly Traffic & Health Reports"
    ],
    icon: "Wrench",
    isPopular: false,
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    slug: "seo-optimization",
    shortDesc: "Dominant organic search rankings on Google for software, web design, and regional keywords.",
    fullDesc: "Rank #1 for local searches in Tirupati and global software keywords with on-page optimization, rich JSON-LD schema, technical SEO audits, and speed tuning.",
    price: 2999,
    priceDisplay: "From ₹2,999",
    features: [
      "Complete Technical SEO & Speed Audit",
      "Keyword Research & Competitor Analysis",
      "Google Search Console & Analytics Setup",
      "Rich Snippets & LocalBusiness JSON-LD Schema",
      "Sitemap, Canonical & Robots.txt Optimization",
      "Local Map Pack Ranking Strategy (Tirupati/AP)"
    ],
    icon: "TrendingUp",
    isPopular: false,
  },
];

export const PRICING_PLANS = [
  {
    id: "landing-plan",
    name: "Landing Page",
    slug: "landing-page",
    price: 999,
    priceDisplay: "₹999",
    billingPeriod: "One-Time",
    isPopular: false,
    description: "Ideal for product launches, marketing campaigns, events, and single-service lead generation.",
    features: [
      "1 High-Converting Responsive Page",
      "Modern Glassmorphism UI",
      "Fast Loading (< 1s Load Speed)",
      "Contact & WhatsApp Lead Integration",
      "On-Page SEO Meta Tags",
      "Free SSL & Deployment Assistance",
      "3 Days Delivery Guarantee",
    ],
    category: "Landing",
    ctaText: "Order Landing Page",
  },
  {
    id: "business-plan",
    name: "Business Website",
    slug: "business-website",
    price: 2999,
    priceDisplay: "₹2,999",
    billingPeriod: "One-Time",
    isPopular: true,
    description: "Our most popular package for startups, agencies, consultancies, and established businesses.",
    features: [
      "Up to 5 Premium Branded Pages",
      "Dark Mode & Light Mode Support",
      "Interactive Animations & Process Timeline",
      "Google Maps & Multi-Field Contact Form",
      "Complete Local SEO & Rich Schema",
      "Client Dashboard Access",
      "Free 3 Months Maintenance",
      "5 Days Delivery Guarantee",
    ],
    category: "Business",
    ctaText: "Choose Business Website",
  },
  {
    id: "portfolio-plan",
    name: "Portfolio Website",
    slug: "portfolio-website",
    price: 2499,
    priceDisplay: "₹2,499",
    billingPeriod: "One-Time",
    isPopular: false,
    description: "Designed for developers, freelancers, photographers, designers, and executives.",
    features: [
      "Multi-Section Personal Branding Site",
      "Interactive Project Gallery & Case Studies",
      "Resume / CV Download & View Option",
      "Client Reviews & Recommendation Section",
      "Social Media & Booking Integration",
      "Fast Cloud Hosting Setup",
      "4 Days Delivery Guarantee",
    ],
    category: "Portfolio",
    ctaText: "Build My Portfolio",
  },
  {
    id: "ecommerce-plan",
    name: "E-Commerce Website",
    slug: "ecommerce-website",
    price: 9999,
    priceDisplay: "₹9,999",
    billingPeriod: "One-Time",
    isPopular: true,
    description: "Complete full-stack digital store ready to sell products and collect payments online.",
    features: [
      "Unlimited Products & Categories",
      "Razorpay / UPI Payment Gateway Setup",
      "Automated Invoicing & Email Receipts",
      "Admin Inventory & Sales Dashboard",
      "Customer Account & Order Tracking",
      "Cart, Wishlist & Search Filters",
      "6 Months Comprehensive Support",
      "7 Days Delivery Guarantee",
    ],
    category: "E-Commerce",
    ctaText: "Launch E-Commerce Store",
  },
];

export const DEVELOPMENT_PROCESS = [
  {
    step: "01",
    title: "Idea & Discovery",
    desc: "We analyze your business goals, target audience, technical requirements, and formulate a winning roadmap.",
    icon: "Lightbulb",
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "We create interactive glassmorphic prototypes, wireframes, and responsive design systems tailored to your brand.",
    icon: "Palette",
  },
  {
    step: "03",
    title: "Development",
    desc: "We write clean, modular, high-performance TypeScript code using Next.js, Node.js, and PostgreSQL.",
    icon: "Code",
  },
  {
    step: "04",
    title: "Testing & QA",
    desc: "Rigorous cross-device testing, Core Web Vitals optimization, accessibility verification, and security audits.",
    icon: "CheckCircle2",
  },
  {
    step: "05",
    title: "Launch & Support",
    desc: "Seamless zero-downtime deployment to Vercel/Cloudflare with continuous monitoring and 24/7 technical assistance.",
    icon: "Rocket",
  },
];

export const STATS = [
  { label: "Projects Completed", value: "120+", numeric: 120 },
  { label: "Client Satisfaction", value: "99.8%", numeric: 99.8 },
  { label: "Hours of Support", value: "24/7", numeric: 24 },
  { label: "Lighthouse Performance", value: "98+", numeric: 98 },
];

export const TECH_STACK = [
  { name: "Next.js", category: "Frontend & Fullstack", icon: "Boxes" },
  { name: "React", category: "UI Library", icon: "Atom" },
  { name: "TypeScript", category: "Type Safety", icon: "FileCode2" },
  { name: "Tailwind CSS", category: "Styling & Glassmorphism", icon: "Wind" },
  { name: "Node.js", category: "Backend Runtime", icon: "Server" },
  { name: "PostgreSQL", category: "Relational Database", icon: "Database" },
  { name: "Prisma ORM", category: "Data Access Layer", icon: "Layers" },
  { name: "Razorpay", category: "Payment Gateway", icon: "CreditCard" },
  { name: "Framer Motion", category: "Animations", icon: "Sparkles" },
  { name: "Cloudflare & Vercel", category: "Cloud Infrastructure", icon: "Cloud" },
];

export const FAQS = [
  {
    q: "How fast can SDX Software Development deliver my website?",
    a: "Landing pages are typically delivered within 3 business days, standard business and portfolio websites take 4-5 days, and full-featured e-commerce platforms take 7 days. We provide continuous milestone updates throughout the cycle.",
  },
  {
    q: "Can I accept online payments with Razorpay on my website?",
    a: "Yes, absolutely! We integrate Razorpay payment gateways with support for UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and automated PDF invoice generation with instant email receipts.",
  },
  {
    q: "Will my website be mobile-friendly and fast on 4G/5G connections?",
    a: "Every project built by SDX Software Development adheres to a mobile-first responsive architecture and is optimized for 95+ Google Lighthouse scores, ensuring lightning-fast load times even on mobile connections.",
  },
  {
    q: "Are the social media and WhatsApp buttons fully integrated?",
    a: "Yes! Your website includes floating WhatsApp and call buttons, custom contact forms with instant email notifications to sdxsoftwaredevelopment@gmail.com, and official social media integrations across Facebook, Instagram, Telegram, Twitter/X, and LinkedIn.",
  },
  {
    q: "Do you provide post-launch maintenance and technical support?",
    a: "Yes, all our plans include dedicated post-launch support and warranty. We also offer monthly maintenance plans for continuous security updates, cloud backups, and feature upgrades.",
  },
  {
    q: "Where is SDX Software Development located?",
    a: "We are proudly based in Bhavani Nagar, Tirupati, Andhra Pradesh, India, serving clients across India and globally.",
  },
];
