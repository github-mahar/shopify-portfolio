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

export interface ContentConfig {
  flags: {
    showImroziaSerene: boolean;
    showTestimonials: boolean;
  };
  developer: DeveloperProfile;
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
