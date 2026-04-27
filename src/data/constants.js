// ── Navigation links ──────────────────────────────────────────────────────────
export const NAV_LINKS = [
  {
    label: "Products",
    submenu: [
      { icon: "🔍", title: "Keyword Research",  desc: "Find high-value opportunities" },
      { icon: "🛡️", title: "SEO Audit",         desc: "Fix critical issues fast"       },
      { icon: "📈", title: "Rank Tracker",      desc: "Monitor daily positions"         },
      { icon: "🔗", title: "Backlink Analysis", desc: "Build authority at scale"        },
      { icon: "🤖", title: "AI Visibility",     desc: "Track LLM brand mentions"        },
      { icon: "✍️", title: "Content Writer",    desc: "AI-powered SEO content"          },
    ],
  },
  { label: "Pricing" },
  { label: "Enterprise" },
  { label: "Blog" },
];

// ── Hero stats ────────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { num: "50K+", label: "Active users" },
  { num: "13+",  label: "AI tools"     },
  { num: "99.9%",label: "Uptime SLA"   },
];

// ── Platform stats ────────────────────────────────────────────────────────────
export const PLATFORM_STATS = [
  { num: "28B+",  label: "Data points analyzed" },
  { num: "43T",   label: "Keywords in database"  },
  { num: "808M",  label: "Domains tracked"        },
  { num: "213M+", label: "Backlinks indexed"      },
];

// ── Tools grid ────────────────────────────────────────────────────────────────
export const TOOLS = [
  { icon: "🔍", name: "Keyword Research",  desc: "Discover winning keywords with AI scoring"        },
  { icon: "🛡️", name: "SEO Audit",         desc: "200+ checks — critical issues surfaced instantly"  },
  { icon: "📈", name: "Rank Tracker",      desc: "Daily positions across Google, Bing & AI search"   },
  { icon: "🔗", name: "Backlink Analysis", desc: "Full link profile with toxicity scoring"            },
  { icon: "🤖", name: "AI Visibility",     desc: "LLM presence score across ChatGPT, Gemini & more"  },
  { icon: "✍️", name: "Content Writer",    desc: "AI-generated, SEO-optimised content at scale"      },
  { icon: "📊", name: "Traffic & Market",  desc: "Benchmark traffic vs competitors"                   },
  { icon: "🎯", name: "Gap Analysis",      desc: "Find keywords competitors rank for — you don't"     },
  { icon: "🗺️", name: "Site Mapping",      desc: "Visual crawl map with structural insights"          },
  { icon: "⚡", name: "Page Speed",        desc: "Core Web Vitals monitoring & fixes"                 },
  { icon: "📍", name: "Local SEO",         desc: "Dominate local & maps search results"               },
  { icon: "🌐", name: "Social Tracker",    desc: "Social signals that feed your SEO"                  },
];

// ── Product showcase tabs ─────────────────────────────────────────────────────
export const PRODUCT_TABS = [
  {
    id:       "audit",
    label:    "SEO Audit",
    badge:    "Most used",
    headline: "Find and fix every SEO issue in minutes.",
    desc:     "Our AI crawler scans your entire site, surfaces critical issues, and gives a prioritised fix list — with one-click recommendations your whole team can action.",
    features: ["200+ technical checks", "Priority fix queue", "One-click recommendations", "Scheduled crawls", "Team collaboration"],
    color:    "#0057FF",
    stats:    [{ val:"98%", label:"Issue accuracy" }, { val:"<3min", label:"Avg. crawl time" }],
  },
  {
    id:       "rank",
    label:    "Rank Tracker",
    badge:    "Real-time",
    headline: "Track every keyword, every single day.",
    desc:     "Monitor your rankings across Google, Bing, and AI search engines with competitor comparisons, SERP feature tracking, and automated alerts.",
    features: ["Daily rank updates", "SERP feature tracking", "Competitor comparisons", "Mobile vs. desktop split", "Automated alert emails"],
    color:    "#5B21FF",
    stats:    [{ val:"24h", label:"Update frequency" }, { val:"∞", label:"Keywords tracked" }],
  },
  {
    id:       "ai",
    label:    "AI Visibility",
    badge:    "New 🔥",
    headline: "See exactly how AI mentions your brand.",
    desc:     "SocialPulse scores your LLM presence across ChatGPT, Gemini, Perplexity, and Claude — so you can optimise for the next era of search before competitors do.",
    features: ["AI Visibility Index score", "Citation tracking per LLM", "Answer Engine Optimisation", "AEO score per page", "Real-time AI referral data"],
    color:    "#00C48C",
    stats:    [{ val:"5", label:"LLMs monitored" }, { val:"Top 5%", label:"Avg. client score" }],
  },
  {
    id:       "content",
    label:    "Content Writer",
    badge:    "GPT-4o",
    headline: "AI content that actually ranks.",
    desc:     "Brief to published in minutes. SocialPulse Content Writer generates SEO-optimised articles with built-in NLP analysis, internal link suggestions, and readability scoring.",
    features: ["Brief → article in 90s", "NLP term coverage", "Internal link suggestions", "Plagiarism checker", "Direct CMS publish"],
    color:    "#FF6B35",
    stats:    [{ val:"90s", label:"Article generation" }, { val:"97%", label:"Originality score" }],
  },
];

// ── Pricing plans ─────────────────────────────────────────────────────────────
export const PLANS = [
  {
    name:     "Starter",
    price:    49,
    period:   "mo",
    tagline:  "Perfect for freelancers",
    domains:  1,
    features: ["5 core tools", "500 keywords/mo", "Basic SEO audit", "Email support", "1 user seat"],
  },
  {
    name:     "Professional",
    price:    149,
    period:   "mo",
    tagline:  "For growing teams",
    domains:  5,
    popular:  true,
    features: ["All 13+ tools", "5,000 keywords/mo", "Full audit suite", "Priority support", "AI Content (20 posts)", "5 user seats"],
  },
  {
    name:     "Agency",
    price:    399,
    period:   "mo",
    tagline:  "For SEO agencies",
    domains:  20,
    features: ["Unlimited tools", "Unlimited keywords", "White-label reports", "API access", "Dedicated CSM", "15 user seats"],
  },
  {
    name:     "Enterprise",
    price:    null,
    period:   null,
    tagline:  "Tailored for large orgs",
    domains:  null,
    features: ["Custom integrations", "On-prem deployment", "SLA guarantee", "Enterprise security", "Custom onboarding", "Unlimited seats"],
  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    text:    "SocialPulse's AI Visibility tool is genuinely unlike anything else out there. We doubled our AI citation rate in 6 weeks.",
    name:    "Sarah Chen",
    role:    "Head of SEO, TechFlow",
    avatar:  "SC",
    rating:  5,
  },
  {
    text:    "The audit tool found 340 critical issues our previous tool completely missed. Fixing them moved us from page 3 to page 1 for our core terms.",
    name:    "Marcus Williams",
    role:    "Digital Director, BrandScale",
    avatar:  "MW",
    rating:  5,
  },
  {
    text:    "We manage 40 client sites. SocialPulse's agency features — especially white-label reports — save us 15+ hours a week.",
    name:    "Priya Nair",
    role:    "Founder, Orbit Agency",
    avatar:  "PN",
    rating:  5,
  },
];

// ── Ticker items ──────────────────────────────────────────────────────────────
export const TICKER_ITEMS = [
  "🔍 Keyword Research",
  "📈 Rank Tracking",
  "🛡️ SEO Audit",
  "🤖 AI Visibility",
  "🔗 Backlink Analysis",
  "✍️ AI Content Writer",
  "📊 Market Intelligence",
  "🎯 Competitor Gap",
  "⚡ Page Speed",
  "🌐 Social Signals",
  "📍 Local SEO",
  "🗺️ Site Mapping",
];

// ── AI LLM scores ─────────────────────────────────────────────────────────────
export const AI_SCORES = [
  { name: "ChatGPT",    score: 78, color: "#10b981" },
  { name: "Gemini",     score: 62, color: "#0057FF" },
  { name: "Perplexity", score: 54, color: "#5B21FF" },
  { name: "Copilot",    score: 41, color: "#FFB800" },
  { name: "Claude",     score: 35, color: "#FF6B35" },
];
