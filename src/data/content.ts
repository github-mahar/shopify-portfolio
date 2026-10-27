export interface DeveloperProfile {
  name: string;
  shortName: string;
  brandName: string;
  role: string;
  location: string;
  focus: string;
  pitch: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappUrl: string;
  github: string;
  availability: string;
  availabilityBadge: string;
  stack: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  category: string;
  keyResult: string;
  stack: string[];
  status: string;
  statusTone: 'success' | 'info' | 'attention';
  summary: string;
  problem: string;
  whatIBuilt: string;
  screenshotsPlaceholder: string;
  liveLinkPlaceholder: string;
  isImroziaSerene: boolean;
}

export interface IntegrationItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: string;
  statusTone: 'success' | 'info' | 'magic';
  keyDeliverable: string;
  features: string[];
  isImroziaSerene: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  turnaroundBadge: string;
  stack: string[];
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  quote: string;
  avatarInitials: string;
}

export interface AboutMeSpecialty {
  title: string;
  badge: string;
  description: string;
}

export interface AboutMeSkillCategory {
  category: string;
  skills: string[];
}

export interface AboutMeTimelineItem {
  period: string;
  role: string;
  company: string;
  highlight: string;
  details: string[];
}

export interface AboutMeValueItem {
  title: string;
  description: string;
}

export interface AboutMeData {
  headline: string;
  subheadline: string;
  tagline: string;
  bioIntro: string;
  bioFull: string[];
  quickStats: {
    label: string;
    value: string;
    detail: string;
  }[];
  specialties: AboutMeSpecialty[];
  skillCategories: AboutMeSkillCategory[];
  experienceTimeline: AboutMeTimelineItem[];
  whyWorkWithMe: AboutMeValueItem[];
  workingPrinciples: string[];
}

export interface ContentConfig {
  flags: {
    showImroziaSerene: boolean;
    showTestimonials: boolean;
  };
  developer: DeveloperProfile;
  aboutMe: AboutMeData;
  overviewStats: {
    label: string;
    value: string;
    note: string;
  }[];
  projects: ProjectItem[];
  integrations: IntegrationItem[];
  services: ServiceItem[];
  testimonials: TestimonialItem[];
  themesPage: {
    headline: string;
    subheadline: string;
    maeven: {
      title: string;
      badge: string;
      description: string;
      features: string[];
    };
    customization: {
      title: string;
      badge: string;
      description: string;
      features: string[];
    };
    lighthousePlaceholder: {
      title: string;
      slotText: string;
      description: string;
    };
  };
  scopingForm: {
    projectTypes: { label: string; value: string }[];
    budgetOptions: { label: string; value: string }[];
    timelineOptions: { label: string; value: string }[];
    whatHappensNext: string[];
  };
}

export const PORTFOLIO_CONTENT: ContentConfig = {
  flags: {
    // Employer permission confirmed — live URL provided
    showImroziaSerene: true,
    // Kept for later; hidden from sidebar and routes
    showTestimonials: false,
  },

  developer: {
    name: 'GM (Mahar Ghulam Muhammad)',
    shortName: 'GM',
    brandName: 'EzzCode',
    role: 'Junior Front-End Developer',
    location: 'Lahore, Pakistan',
    focus: 'Shopify Only',
    pitch:
      'Junior front-end developer building high-quality custom Shopify 2.0 themes, Liquid architecture, payment gateway setups, and automated COD order flows.',
    email: 'mahargm675@gmail.com',
    phone: '+92 349 4607275',
    whatsappNumber: '+92 349 4607275',
    whatsappUrl: 'https://wa.me/923494607275',
    github: 'https://github.com/github-mahar',
    availability: 'Available for Shopify theme & automation projects',
    availabilityBadge: 'Available',
    stack: ['Liquid', 'JavaScript', 'Tailwind CSS', 'Make.com', 'REST APIs'],
  },

  aboutMe: {
    headline: 'Meet Mahar Ghulam Muhammad (GM)',
    subheadline: 'Shopify Front-End Developer & E-Commerce Specialist based in Lahore, Pakistan',
    tagline:
      'Engineering clean Shopify 2.0 storefronts, modular Liquid sections, and automated workflows under the brand EzzCode.',
    bioIntro:
      "Hi! I'm Mahar Ghulam Muhammad (known as GM). I'm a specialized Shopify Front-End Developer and founder of EzzCode. I focus 100% on the Shopify ecosystem — engineering lightweight Online Store 2.0 themes, writing clean Liquid markup, integrating regional payment gateways, and streamlining back-office operations using Make.com webhooks and automations.",
    bioFull: [
      "My journey in e-commerce web development started with a clear observation: too many Shopify stores suffer from bloated apps, sluggish load speeds, and messy theme code that makes simple edits a nightmare for merchants. I decided to dedicate myself to mastering Shopify's core architecture — Liquid, JSON templates, section schemas, and native APIs.",
      'I engineered and launched MAEVEN, an Online Store 2.0 commercial theme built completely from scratch with zero third-party app dependencies, modular drag-and-drop sections, and a native slide-out cart drawer, which has been sold directly to retail merchants on Gumroad.',
      'In addition to independent theme engineering, I serve as a front-end developer for Imrozia Serene, a major fashion and apparel brand. There, I handle production theme customizations, multi-region payment and shipping logic, and automated 500+ weekly Cash on Delivery (COD) orders using Make.com and webhooks — saving hours of manual staff verification calls every single day.',
      "Whether you're launching a new brand, upgrading to Shopify 2.0, adding bespoke custom sections to your active theme, or automating order fulfillment, I bring clean code, fast turnarounds, and direct, transparent communication.",
    ],
    quickStats: [
      {
        label: 'Platform Focus',
        value: 'Shopify Only',
        detail: '100% dedicated to Shopify 2.0 & Liquid architecture',
      },
      {
        label: 'Commercial Theme',
        value: '1 Built & Sold',
        detail: 'MAEVEN OS 2.0 theme released on Gumroad',
      },
      {
        label: 'COD Automation',
        value: '500+ Weekly',
        detail: 'Automated order verifications via Make.com scenarios',
      },
      {
        label: 'Location & Response',
        value: 'Lahore, PK',
        detail: 'Direct developer support with under 24-hour reply time',
      },
    ],
    specialties: [
      {
        title: 'Shopify 2.0 Theme Architecture',
        badge: 'Core Competency',
        description:
          'Developing modular JSON templates, custom section schemas, and native cart drawers in clean Liquid without bloated external apps.',
      },
      {
        title: 'Custom Section Development',
        badge: 'Front-End Polish',
        description:
          'Crafting bespoke product page sections, variant pickers, size guides, tabbed content, and promotional banners editable from the theme customizer.',
      },
      {
        title: 'Payment Gateway Integration',
        badge: 'Checkout & Gateways',
        description:
          'Configuring regional payment gateways, seamless card transactions, webhook callback validation, and error-free checkout experiences.',
      },
      {
        title: 'COD & E-Commerce Automation',
        badge: 'Workflow Automation',
        description:
          'Eliminating manual order verification by connecting Shopify webhooks to Make.com scenarios, auto-tagging orders, and syncing courier statuses.',
      },
    ],
    skillCategories: [
      {
        category: 'Shopify & Liquid',
        skills: [
          'Shopify Online Store 2.0',
          'Liquid Templating',
          'JSON Templates',
          'Theme Customizer API',
          'Metafields & Metaobjects',
          'Section & Block Schemas',
          'Native Cart Drawer',
        ],
      },
      {
        category: 'Front-End & Styling',
        skills: [
          'JavaScript (ES6+)',
          'Tailwind CSS',
          'Shopify Polaris Design System',
          'HTML5 Semantic Markup',
          'Modern CSS & Responsive Design',
          'Mobile-First Layouts',
          'Web Performance & a11y',
        ],
      },
      {
        category: 'Integrations & Automations',
        skills: [
          'Make.com (Integromat)',
          'Shopify Webhooks',
          'REST Admin APIs',
          'Payment Gateway APIs',
          'WhatsApp Business Messaging',
          'Automated Order Tagging',
        ],
      },
      {
        category: 'Developer Tools & Workflow',
        skills: [
          'Git & GitHub',
          'Shopify CLI',
          'Theme Kit',
          'Chrome DevTools',
          'Figma to Shopify 2.0',
          'Lighthouse Auditing',
        ],
      },
    ],
    experienceTimeline: [
      {
        period: '2024 – Present',
        role: 'Shopify Front-End Developer & Founder',
        company: 'EzzCode (Brand & Independent Practice)',
        highlight: 'Custom Shopify 2.0 themes, bespoke section builds & automation flows',
        details: [
          'Built and released commercial Shopify 2.0 theme MAEVEN on Gumroad, achieving 96+ Lighthouse mobile score.',
          'Developed bespoke storefront sections, product landing pages, and responsive UI for apparel and retail merchants.',
          'Designed Make.com automation blueprints for automated order confirmation and customer messaging.',
        ],
      },
      {
        period: '2024 – Present',
        role: 'In-House Front-End Developer',
        company: 'Imrozia Serene (Fashion & Apparel)',
        highlight: 'High-volume e-commerce storefront engineering & operations',
        details: [
          'Maintained and customized high-volume Liquid storefront serving multi-region retail traffic with zero downtime.',
          'Integrated regional payment gateway for secure card processing and rule-based checkout routing.',
          'Built Make.com COD webhook automation handling 500+ weekly orders, reducing manual verification calls by over 80%.',
        ],
      },
      {
        period: 'Recent Projects',
        role: 'Storefront Setup & Launch',
        company: 'Sahfa.pk & Tiny Todzz',
        highlight: 'Turnkey launches and custom section design',
        details: [
          'Kickstarted Sahfa.pk apparel storefront powered by custom MAEVEN theme architecture.',
          'Delivered turnkey Shopify 2.0 storefront setup for Tiny Todzz children’s apparel with mobile-first navigation.',
        ],
      },
    ],
    whyWorkWithMe: [
      {
        title: 'Zero App Bloat Philosophy',
        description:
          'I write clean native Liquid and CSS instead of stacking 15 monthly apps that degrade speed, conflict with theme code, and rack up expensive subscriptions.',
      },
      {
        title: 'Real Production Experience',
        description:
          'I work on live high-traffic stores with real customer transactions, so I know how to test safely and avoid checkout disruptions.',
      },
      {
        title: 'Direct Developer Collaboration',
        description:
          'You talk directly with me (GM) — no account managers, confusing tickets, or missed requirements. Fast replies on WhatsApp and email.',
      },
      {
        title: 'Transparent Pricing & Scoping',
        description:
          'Clear upfront project milestones, transparent fixed rates or scopes, and step-by-step guidance before any work begins.',
      },
    ],
    workingPrinciples: [
      'Write clean, readable Liquid with schema-driven settings',
      'Optimize for mobile shoppers first — over 75% of sales happen on phones',
      'Prefer native Shopify features over unnecessary monthly recurring apps',
      'Provide clear documentation on how merchants can update their own content',
      'Keep store downtime at absolute zero during updates and launches',
    ],
  },

  overviewStats: [
    {
      label: 'Shopify 2.0 Theme',
      value: '1 Built & Sold',
      note: 'Commercial theme MAEVEN',
    },
    {
      label: 'Platform Focus',
      value: 'Shopify Only',
      note: 'Themes, Liquid & automation',
    },
    {
      label: 'Workflow Automation',
      value: 'Make.com + APIs',
      note: 'COD verification & status sync',
    },
    {
      label: 'Front-End Stack',
      value: 'Liquid & JS',
      note: 'Tailwind CSS & JSON templates',
    },
  ],

  projects: [
    {
      id: 'maeven-theme',
      name: 'MAEVEN',
      client: 'Commercial Theme Release',
      category: 'Theme Build',
      keyResult: '100% clean Liquid / zero app bloat',
      stack: ['Liquid', 'JavaScript', 'Tailwind CSS', 'JSON Templates'],
      status: 'Built & Sold',
      statusTone: 'success',
      summary:
        'Custom Shopify Online Store 2.0 theme built from scratch with clean Liquid schemas and sold to merchants.',
      problem:
        'Merchants needed an uncluttered, fast-loading storefront with flexible drag-and-drop sections that required zero external apps.',
      whatIBuilt:
        'Engineered modular 2.0 section architecture, native cart drawer, responsive collection grids, and clean Tailwind CSS styling.',
      screenshotsPlaceholder: 'Available live on Gumroad preview',
      liveLinkPlaceholder: 'https://mahargm.gumroad.com/l/maeven',
      isImroziaSerene: false,
    },
    {
      id: 'imrozia-serene-storefront',
      name: 'Imrozia Serene Storefront',
      client: 'Imrozia Serene',
      category: 'Front-End Architecture',
      keyResult: 'Zero-downtime high-volume catalog & multi-region checkout',
      stack: ['Liquid', 'JavaScript', 'Theme Customization', 'CSS'],
      status: 'In-House Experience',
      statusTone: 'info',
      summary:
        'Front-end architecture and theme customization for high-volume fashion apparel storefront.',
      problem:
        'Store required custom collection filtering, responsive mobile navigation refinements, and customized variant presentation.',
      whatIBuilt:
        'Engineered responsive Liquid 2.0 sections across high-volume catalog, optimized mobile UX & custom variant filtering, supported high-volume retail traffic with zero downtime, and managed different types of payment and shipping methods for different regions and collections.',
      screenshotsPlaceholder: 'Live storefront at imroziaserene.com',
      liveLinkPlaceholder: 'https://imroziaserene.com',
      isImroziaSerene: true,
    },
    {
      id: 'tinytodzz-storefront',
      name: 'Tiny Todzz Storefront',
      client: 'Tiny Todzz',
      category: 'Theme Customization',
      keyResult: 'Turnkey Shopify 2.0 storefront setup & custom section design',
      stack: ['Liquid', 'JavaScript', 'CSS', 'Shopify 2.0'],
      status: 'Inactive',
      statusTone: 'attention',
      summary:
        'Shopify storefront setup and theme customization for children\'s apparel brand Tiny Todzz.',
      problem:
        'Store required a clean, engaging storefront layout suited to a children\'s product range with mobile-first responsiveness.',
      whatIBuilt:
        'Delivered turnkey Shopify 2.0 storefront setup, mobile-first children\'s catalog with streamlined navigation, and custom product pages with size guides and color swatches.',
      screenshotsPlaceholder: 'Archived storefront setup',
      liveLinkPlaceholder: 'https://tinytodzz.com',
      isImroziaSerene: false,
    },
    {
      id: 'sahfa-storefront',
      name: 'Sahfa Storefront',
      client: 'Sahfa (sahfa.pk)',
      category: 'Theme Customization',
      keyResult: 'Powered by custom MAEVEN theme release',
      stack: ['Liquid', 'JavaScript', 'CSS', 'Shopify 2.0'],
      status: 'Live',
      statusTone: 'success',
      summary:
        'Kickstarted new apparel clothing brand using custom MAEVEN Shopify 2.0 theme architecture.',
      problem:
        'Store required custom section development and layout refinements for a polished, localized shopping experience.',
      whatIBuilt:
        'Applied proprietary MAEVEN Shopify 2.0 theme, configured clean Liquid sections, established localized collection filters, and gave a high-converting kickstart to the new clothing brand.',
      screenshotsPlaceholder: 'Live storefront at sahfa.pk',
      liveLinkPlaceholder: 'https://sahfa.pk',
      isImroziaSerene: false,
    },
    {
      id: 'payment-gateway-integration',
      name: 'Payment Gateway Integration',
      client: 'Imrozia Serene',
      category: 'Checkout & Gateways',
      keyResult: 'Zero-failure regional card checkout & rule-based routing',
      stack: ['REST APIs', 'Payment Gateway', 'JavaScript', 'Liquid'],
      status: 'Integrated',
      statusTone: 'success',
      summary:
        'Integration of local payment gateway for seamless regional checkout processing and card payments.',
      problem:
        'Merchant required dependable regional payment processing with instant callback validation.',
      whatIBuilt:
        'Integrated local payment gateway with instant transaction verification, validated API callbacks with zero failure rate, and applied routing rules based on customer region and product categories.',
      screenshotsPlaceholder: 'Production checkout integration',
      liveLinkPlaceholder: 'https://imroziaserene.com',
      isImroziaSerene: true,
    },
    {
      id: 'cod-order-automation',
      name: 'COD Order Automation',
      client: 'Imrozia Serene',
      category: 'Automation & Workflows',
      keyResult: 'Automated 500+ weekly orders & reduced 80%+ manual calls',
      stack: ['Make.com', 'REST APIs', 'Webhooks', 'JSON'],
      status: 'In Production',
      statusTone: 'success',
      summary:
        'Automated workflow system connecting Shopify webhooks to Make.com for Cash on Delivery (COD) order verification.',
      problem:
        'Manual phone and message verification of COD orders consumed hours of staff time and created shipping bottlenecks.',
      whatIBuilt:
        'Automated 500+ weekly Cash on Delivery order verifications via Make.com webhook scenarios, eliminated 80%+ of manual phone calls with automated customer status sync, and configured instant order tagging and courier dispatch routing.',
      screenshotsPlaceholder: 'Make.com production scenario',
      liveLinkPlaceholder: 'https://imroziaserene.com',
      isImroziaSerene: true,
    },
  ],

  integrations: [
    {
      id: 'integration-gateway',
      name: 'Payment Gateway Integration',
      tagline: 'Reliable regional checkout processing',
      description:
        'Custom payment gateway setup and callback routing to ensure regional orders process smoothly without checkout friction.',
      stack: ['REST APIs', 'Payment Gateway', 'JavaScript', 'Liquid'],
      status: 'Implemented',
      statusTone: 'success',
      keyDeliverable: 'Validated gateway callbacks & clean checkout handoff',
      features: [
        'Secure callback handling and order status confirmation',
        'Clean error state messaging for failed transactions',
        'Mobile-friendly payment method selection',
        'Sandbox testing before live production deployment',
      ],
      isImroziaSerene: false,
    },
    {
      id: 'integration-cod',
      name: 'COD Order Automation',
      tagline: 'Make.com webhook workflow for Cash on Delivery',
      description:
        'Automated scenario connecting Shopify order webhooks to automated customer verification and fulfillment tagging.',
      stack: ['Make.com', 'REST APIs', 'Shopify Webhooks', 'JSON'],
      status: 'Active Flow',
      statusTone: 'info',
      keyDeliverable: 'Automated order tagging & dispatch routing',
      features: [
        'Real-time order webhook triggers in Make.com',
        'Automatic customer order tagging based on verification response',
        'Reduces manual customer verification phone calls',
        'Data payload formatting for courier and fulfillment dispatch',
      ],
      isImroziaSerene: false,
    },
  ],

  services: [
    {
      id: 'service-theme-build',
      title: 'Custom Shopify 2.0 Theme Build',
      tagline: 'Modular, fast-loading themes built with clean Liquid',
      description:
        'Building a custom Shopify theme from Figma or merchant requirements using Online Store 2.0 architecture and JSON templates.',
      turnaroundBadge: '2–3 weeks',
      stack: ['Liquid', 'JavaScript', 'Tailwind CSS', 'JSON Templates'],
      deliverables: [
        'Full Shopify 2.0 modular section system',
        'Lightweight, responsive mobile-first code',
        'Cart drawer & sticky add-to-cart layout',
        'Clean Liquid markup without unnecessary apps',
      ],
    },
    {
      id: 'service-theme-customization',
      title: 'Theme Customization & Section Development',
      tagline: 'Bespoke sections and styling enhancements for existing stores',
      description:
        'Customizing your active Shopify theme with custom sections, product page upgrades, and layout fixes.',
      turnaroundBadge: '2–5 days',
      stack: ['Liquid', 'CSS', 'JavaScript', 'Theme Sections'],
      deliverables: [
        'Custom sections added to theme customizer',
        'Product page swatches, tabs, and size guides',
        'Mobile responsive polish & alignment',
        'Zero breaks to existing theme settings',
      ],
    },
    {
      id: 'service-gateway',
      title: 'Payment Gateway Integration',
      tagline: 'Connect local and custom payment providers',
      description:
        'Connecting payment gateway APIs to your Shopify store so customers can pay via regional debit/credit cards and local methods.',
      turnaroundBadge: '2–4 days',
      stack: ['REST APIs', 'Payment Gateways', 'JavaScript', 'Webhooks'],
      deliverables: [
        'API credential setup & test transactions',
        'Order callback & success status verification',
        'Checkout payment method styling',
        'Production checkout validation',
      ],
    },
    {
      id: 'service-cod-automation',
      title: 'COD Order Automation with Make.com',
      tagline: 'Automate verification, customer alerts, and order tagging',
      description:
        'Creating Make.com webhook automation scenarios for Cash on Delivery orders to eliminate manual processing overhead.',
      turnaroundBadge: '2–5 days',
      stack: ['Make.com', 'REST APIs', 'Webhooks', 'JSON'],
      deliverables: [
        'Make.com automation scenario setup',
        'Shopify webhook trigger configuration',
        'Automated order status tags & routing',
        'Documentation on scenario management',
      ],
    },
  ],

  testimonials: [],

  themesPage: {
    headline: 'Shopify 2.0 Themes & Front-End Engineering',
    subheadline:
      'Hands-on experience building the commercial theme MAEVEN and engineering modular Liquid sections for active retail stores.',
    maeven: {
      title: 'MAEVEN — Custom Shopify 2.0 Theme',
      badge: 'Built & Sold',
      description:
        'A custom, lightweight Shopify Online Store 2.0 theme built from scratch and sold commercially. Structured with modular JSON templates, clean Liquid code, and responsive Tailwind CSS styling.',
      features: [
        'Complete Shopify 2.0 JSON template structure with drag-and-drop sections',
        'Clean Liquid syntax without app dependencies',
        'Fast mobile layout with native cart drawer and variant selector',
        'Accessible, mobile-optimized navigation and collection filtering',
      ],
    },
    customization: {
      title: 'Front-End Architecture & Theme Customization',
      badge: 'Core Competency',
      description:
        'Hands-on expertise developing custom sections, variant pickers, and layout enhancements on active storefronts.',
      features: [
        'Modular section development that merchants can reorder via customizer',
        'Responsive mobile styling using clean CSS and Tailwind CSS',
        'Custom collection grid layouts, badges, and promotional banners',
        'Structured metafields for rich product specifications',
      ],
    },
    lighthousePlaceholder: {
      title: 'Verified Lighthouse Mobile Performance — MAEVEN OS 2.0',
      slotText: 'Performance: 96 | Accessibility: 98 | Best Practices: 100 | SEO: 100',
      description:
        'Audited on mobile Chrome throttling with zero third-party script blocking, native cart drawer, and clean Liquid schemas.',
    },
  },

  scopingForm: {
    projectTypes: [
      { label: 'Custom Theme Build (MAEVEN style)', value: 'theme-build' },
      { label: 'Theme Customization / Custom Section', value: 'theme-customization' },
      { label: 'Payment Gateway Integration', value: 'gateway' },
      { label: 'COD Order Automation (Make.com)', value: 'cod-automation' },
      { label: 'General Shopify Front-End Help', value: 'general' },
    ],
    budgetOptions: [
      { label: 'Under $300 (Small fix or single section)', value: 'under-300' },
      { label: '$300 – $700 (Custom sections or automation)', value: '300-700' },
      { label: '$700 – $1,500 (Theme customization / Gateway)', value: '700-1500' },
      { label: '$1,500+ (Full theme build)', value: '1500-plus' },
      { label: 'Flexible / Let’s discuss', value: 'flexible' },
    ],
    timelineOptions: [
      { label: 'Immediate (1–2 weeks)', value: 'immediate' },
      { label: 'Within 1 month', value: '1-month' },
      { label: 'Flexible', value: 'flexible' },
    ],
    whatHappensNext: [
      'Message Review: I review your store requirements and reply within 24 hours.',
      'Short Discovery Chat: A brief chat on WhatsApp or a short call to confirm scope.',
      'Clear Fixed Quote: A transparent timeline and price quote before any work starts.',
    ],
  },
};
