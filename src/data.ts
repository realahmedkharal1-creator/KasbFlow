import {
  Megaphone,
  Facebook,
  Video,
  Youtube,
  MousePointerClick,
  MonitorPlay,
  PenTool,
  Globe,
  ShoppingBag,
  Search,
  FileText,
  Mail,
  TrendingUp,
  Instagram,
} from "lucide-react";

export const services = [
  { 
    name: "Social Media Marketing", 
    slug: "social-media-marketing", 
    icon: Megaphone, 
    description: "A comprehensive digital growth engine. We integrate social strategies, paid advertising, and creative design to scale your business aggressively.", 
    details: ["Platform Strategy", "Community Management", "Audience Growth", "Performance Reporting"],
    subServices: [
        { name: "Facebook & Instagram Ads", icon: Facebook, description: "Highly targeted ad campaigns designed to maximize ROI and drive direct sales." },
        { name: "TikTok Ads", icon: Video, description: "Capture the attention of a younger, highly engaged demographic with creative short-form video ads." },
        { name: "YouTube Ads", icon: Youtube, description: "Reach audiences with high-intent video campaigns on the world's second-largest search engine." },
        { name: "Google Ads (PPC)", icon: MousePointerClick, description: "Capture high-intent search traffic and convert prospects actively looking for your services." },
        { name: "Graphic Design", icon: PenTool, description: "Stunning visual assets that communicate your brand's message clearly and beautifully." },
        { name: "SEO (Optimization)", icon: Search, description: "Improve your organic visibility and rank higher on search engines to drive free traffic." },
        { name: "Email Marketing", icon: Mail, description: "Nurture leads and retain customers with personalized, automated email sequences." },
    ],
    process: [
      { title: "1. Strategy", desc: "We analyze your audience, audit competitors, and build a custom blueprint for growth." },
      { title: "2. Execution", desc: "Our team deploys creative assets and targeted campaigns across chosen channels." },
      { title: "3. Optimization", desc: "Continuous A/B testing and performance tuning to maximize ROI and scale results." }
    ]
  },
  { 
    name: "Video Creation & Editing", 
    slug: "video-creation", 
    icon: MonitorPlay, 
    description: "High-quality, captivating video content tailored for social media, ads, and web.", 
    details: ["Scriptwriting", "Filming & Editing", "Motion Graphics", "Formatting for Social"],
    subServices: [
      { name: "Scriptwriting & Storyboarding", icon: FileText, description: "We craft compelling narratives and visual blueprints to ensure your message hits the mark." },
      { name: "Professional Filming", icon: Video, description: "High-end production quality using state-of-the-art equipment to capture stunning visuals." },
      { name: "Dynamic Editing", icon: MonitorPlay, description: "Fast-paced, engaging edits optimized for maximum retention on platforms like TikTok and Reels." },
      { name: "Motion Graphics", icon: PenTool, description: "Eye-catching animations and text overlays that elevate your brand's professional look." }
    ],
    process: [
      { title: "1. Pre-Production", desc: "We collaborate on concepts, scripts, and storyboards to align with your brand goals." },
      { title: "2. Production", desc: "Our crew handles the filming, ensuring perfect lighting, audio, and cinematic shots." },
      { title: "3. Post-Production", desc: "We edit, color grade, and add effects to deliver polished, ready-to-publish videos." }
    ]
  },
  { 
    name: "Website Design & Development", 
    slug: "website-design", 
    icon: Globe, 
    description: "Fast, responsive, and conversion-optimized websites built for modern businesses.", 
    details: ["UI/UX Design", "Frontend & Backend Dev", "Performance Optimization", "CMS Integration"],
    subServices: [
      { name: "UI/UX Design", icon: PenTool, description: "Intuitive, beautiful interfaces designed to provide a seamless user journey and boost conversions." },
      { name: "Frontend Development", icon: Globe, description: "Lightning-fast, responsive web experiences built with modern frameworks like React and Next.js." },
      { name: "Backend Architecture", icon: Search, description: "Robust, scalable server-side solutions to handle your data securely and efficiently." },
      { name: "Performance Optimization", icon: TrendingUp, description: "Speed audits and technical tweaks to ensure your site loads instantly and ranks higher." }
    ],
    process: [
      { title: "1. Discovery & Design", desc: "We map out the user journey and design high-fidelity wireframes and mockups." },
      { title: "2. Development", desc: "Our engineers bring the designs to life with clean, scalable, and optimized code." },
      { title: "3. Launch & Scale", desc: "Rigorous QA testing followed by a smooth launch and ongoing technical support." }
    ]
  },
  { 
    name: "Shopify Store Development", 
    slug: "shopify-development", 
    icon: ShoppingBag, 
    description: "Custom e-commerce experiences engineered to turn visitors into repeat buyers.", 
    details: ["Theme Customization", "App Integration", "Conversion Rate Optimization", "Payment Gateway Setup"],
    subServices: [
      { name: "Custom Theme Design", icon: PenTool, description: "Unique, brand-aligned storefronts that stand out from generic templates." },
      { name: "Conversion Optimization", icon: TrendingUp, description: "Strategic layout changes and streamlined checkouts to maximize your sales rate." },
      { name: "App Integrations", icon: Search, description: "Seamless setup of inventory, marketing, and support tools to automate your business." },
      { name: "Migration Services", icon: Globe, description: "Safe and secure transfer of your existing store data from other platforms to Shopify." }
    ],
    process: [
      { title: "1. Store Blueprint", desc: "We plan your store's architecture, product categorization, and user flow." },
      { title: "2. Build & Integrate", desc: "Developing the custom theme and integrating essential e-commerce apps." },
      { title: "3. Testing & Launch", desc: "End-to-end testing of the checkout process before pushing your store live." }
    ]
  },
  { 
    name: "Content Creation", 
    slug: "content-creation", 
    icon: FileText, 
    description: "Compelling copy, blog posts, and multimedia content that resonates with your audience.", 
    details: ["Copywriting", "Blog Management", "Content Strategy", "Email Copy"],
    subServices: [
      { name: "SEO Blog Writing", icon: Search, description: "Well-researched, optimized articles designed to rank on Google and educate your audience." },
      { name: "Conversion Copywriting", icon: Megaphone, description: "Persuasive text for landing pages and ads that drives immediate action." },
      { name: "Social Media Content", icon: Instagram, description: "Engaging posts, carousels, and stories tailored for your brand's voice." },
      { name: "Email Newsletters", icon: Mail, description: "Value-driven email content that builds trust and keeps your audience engaged." }
    ],
    process: [
      { title: "1. Content Strategy", desc: "We identify your target audience's pain points and develop a content calendar." },
      { title: "2. Creation", desc: "Our writers and designers craft high-quality, engaging content." },
      { title: "3. Distribution", desc: "Publishing and promoting the content across the right channels for maximum reach." }
    ]
  },
  { 
    name: "Branding & Business Growth", 
    slug: "branding-growth", 
    icon: TrendingUp, 
    description: "Holistic strategies to define your brand identity and scale your business profitably.", 
    details: ["Brand Positioning", "Market Research", "Growth Strategy", "Competitor Analysis"],
    subServices: [
      { name: "Brand Identity Design", icon: PenTool, description: "Logos, typography, and color palettes that create a memorable, premium brand image." },
      { name: "Market Positioning", icon: Search, description: "Defining your unique value proposition to stand out in a crowded market." },
      { name: "Competitor Analysis", icon: TrendingUp, description: "Deep dives into your competitors' strategies to uncover growth opportunities." },
      { name: "Growth Consulting", icon: Megaphone, description: "Ongoing advisory to optimize your marketing channels and maximize profitability." }
    ],
    process: [
      { title: "1. Brand Audit", desc: "We evaluate your current brand perception and identify areas for improvement." },
      { title: "2. Identity Formulation", desc: "Crafting the visual and strategic elements that will define your new brand." },
      { title: "3. Growth Implementation", desc: "Rolling out the new brand guidelines and executing scalable growth tactics." }
    ]
  },
];

export const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, Luxe Boutique",
    text: "Kasbflow transformed our online presence. Our Shopify sales doubled in just three months thanks to their targeted ad campaigns and store redesign.",
  },
  {
    name: "David Chen",
    role: "Founder, TechNova Solutions",
    text: "The website redesign was flawless. They understood our minimalist vision and executed it perfectly while improving our SEO significantly.",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director, Vitality Health",
    text: "Their video creation team is top-notch. The social media ads they produced went viral and brought in a completely new demographic of customers.",
  },
];

export const portfolio = [
  {
    title: "E-commerce Optimization",
    category: "Shopify & Performance Ads",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "SaaS Brand Identity",
    category: "Branding & Web Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Organic Growth Campaign",
    category: "SEO & Content Creation",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Social Media Overhaul",
    category: "Social Media & Video",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
  },
];

export const team = [
  {
    name: "Ikhtyar Ali",
    role: "Founder & Digital Marketing Expert",
    bio: "With extensive experience in digital marketing, Ikhtyar leads the agency's strategic vision and client growth.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Samantha Reed",
    role: "Head of Performance Marketing",
    bio: "Samantha specializes in data-driven paid advertising, scaling e-commerce brands efficiently.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Marcus Chen",
    role: "Creative Director",
    bio: "Marcus ensures every brand we touch has a compelling visual identity and engaging content.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  }
];

export const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We work across various industries including E-commerce, SaaS, Healthcare, and Real Estate. Our strategies are adaptable and data-driven to suit your specific market."
  },
  {
    question: "How long does it take to see results?",
    answer: "While some paid advertising campaigns can yield immediate traffic, SEO and organic growth strategies typically take 3 to 6 months to show significant momentum."
  },
  {
    question: "Do you offer custom packages?",
    answer: "Absolutely. We understand that every business is unique. We tailor our services and pricing to align with your specific goals and budget."
  },
  {
    question: "Will I have a dedicated account manager?",
    answer: "Yes, you will be assigned a dedicated account manager who will be your main point of contact, ensuring smooth communication and regular progress updates."
  }
];
