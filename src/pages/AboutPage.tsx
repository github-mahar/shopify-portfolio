import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Page,
  Layout,
  Card,
  Text,
  Badge,
  Button,
  BlockStack,
  InlineStack,
  InlineGrid,
  Box,
  Divider,
  ProgressBar,
  IndexTable,
  Thumbnail,
} from '@shopify/polaris';
import {
  PersonIcon,
  StoreIcon,
  ChatIcon,
  CodeIcon,
  AutomationIcon,
  ThemeIcon,
  PaymentIcon,
  CheckIcon,
  LocationIcon,
  ClockIcon,
  EmailIcon,
} from '@shopify/polaris-icons';
import { PORTFOLIO_CONTENT } from '../data/content';

/* ─── Stat Tile ─────────────────────────────────────────────── */
interface StatTileProps {
  label: string;
  value: string;
  detail: string;
  tone?: 'success' | 'info' | 'warning' | 'critical';
  badgeText?: string;
}
const StatTile: React.FC<StatTileProps> = ({ label, value, detail, tone, badgeText }) => (
  <Card>
    <BlockStack gap="150">
      <InlineStack align="space-between" blockAlign="center">
        <Text as="span" variant="bodySm" tone="subdued">
          {label}
        </Text>
        {tone && badgeText && (
          <Badge tone={tone} size="small">
            {badgeText}
          </Badge>
        )}
      </InlineStack>
      <Text as="p" variant="headingLg" fontWeight="bold">
        {value}
      </Text>
      <Text as="span" variant="bodySm" tone="subdued">
        {detail}
      </Text>
    </BlockStack>
  </Card>
);

/* ─── Lighthouse Dial ────────────────────────────────────────── */
interface LighthouseDialProps {
  label: string;
  score: number;
  color: string;
}
const LighthouseDial: React.FC<LighthouseDialProps> = ({ label, score, color }) => {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;

  return (
    <Box
      background="bg-surface-secondary"
      padding="300"
      borderRadius="200"
      borderWidth="025"
      borderColor="border"
    >
      <BlockStack gap="100" inlineAlign="center">
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r={r} fill="none" stroke="#e4e5e7" strokeWidth="6" />
          <circle
            cx="36"
            cy="36"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circ}`}
            strokeDashoffset={circ / 4}
            style={{ transition: 'stroke-dasharray 0.6s ease' }}
          />
          <text x="36" y="41" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1a1a1a">
            {score}
          </text>
        </svg>
        <Text as="span" variant="bodySm" fontWeight="medium" alignment="center">
          {label}
        </Text>
      </BlockStack>
    </Box>
  );
};

/* ─── Specialty Card ─────────────────────────────────────────── */
interface SpecialtyCardProps {
  icon: React.FC;
  title: string;
  description: string;
  badge?: string;
  metricLabel: string;
  metricValue: string;
}
const SpecialtyCard: React.FC<SpecialtyCardProps> = ({
  icon: IconComp,
  title,
  description,
  badge,
  metricLabel,
  metricValue,
}) => (
  <Box
    background="bg-surface-secondary"
    padding="300"
    borderRadius="200"
    borderWidth="025"
    borderColor="border"
  >
    <BlockStack gap="200">
      <InlineStack align="space-between" blockAlign="center">
        <InlineStack gap="200" blockAlign="center">
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: '#ffffff',
              border: '1px solid #e3e3e3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{ width: '16px', height: '16px', color: '#303030' }}>
              <IconComp />
            </div>
          </div>
          <Text as="h3" variant="headingSm">
            {title}
          </Text>
        </InlineStack>
        {badge && <Badge size="small" tone="info">{badge}</Badge>}
      </InlineStack>

      <Text as="p" variant="bodySm" tone="subdued">
        {description}
      </Text>

      <Divider />

      <InlineStack align="space-between" blockAlign="center">
        <Text as="span" variant="bodySm" tone="subdued">
          {metricLabel}
        </Text>
        <Text as="span" variant="bodySm" fontWeight="semibold">
          {metricValue}
        </Text>
      </InlineStack>
    </BlockStack>
  </Box>
);

/* ─── Principle Tile ─────────────────────────────────────────── */
interface PrincipleTileProps {
  title: string;
  description: string;
}
const PrincipleTile: React.FC<PrincipleTileProps> = ({ title, description }) => (
  <Box
    background="bg-surface-secondary"
    padding="300"
    borderRadius="200"
    borderWidth="025"
    borderColor="border"
  >
    <InlineStack gap="200" blockAlign="start" wrap={false}>
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: '#e3f1df',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: '2px',
        }}
      >
        <div style={{ width: '12px', height: '12px', color: '#008060' }}>
          <CheckIcon />
        </div>
      </div>
      <BlockStack gap="050">
        <Text as="span" variant="bodySm" fontWeight="semibold">
          {title}
        </Text>
        <Text as="span" variant="bodySm" tone="subdued">
          {description}
        </Text>
      </BlockStack>
    </InlineStack>
  </Box>
);

/* ─── Contact Row ────────────────────────────────────────────── */
interface ContactRowProps {
  icon: React.FC;
  label: string;
  value: string;
}
const ContactRow: React.FC<ContactRowProps> = ({ icon: IconComp, label, value }) => (
  <InlineStack gap="200" blockAlign="center">
    <div style={{ width: '16px', height: '16px', color: '#8c9196', flexShrink: 0 }}>
      <IconComp />
    </div>
    <BlockStack gap="0">
      <Text as="span" variant="bodySm" tone="subdued">
        {label}
      </Text>
      <Text as="span" variant="bodyMd" fontWeight="semibold">
        {value}
      </Text>
    </BlockStack>
  </InlineStack>
);

/* ─── Main About Page ────────────────────────────────────────── */
export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { developer } = PORTFOLIO_CONTENT;

  const experienceRows = [
    {
      id: 'exp-1',
      role: 'Shopify Front-End Developer',
      brand: 'Imrozia Serene',
      type: 'In-House Production',
      impact: 'Zero-downtime catalog & 500+ weekly COD automations',
      status: 'Active',
      tone: 'success' as const,
      thumb: '/assets/pakistan_store.jpg',
    },
    {
      id: 'exp-2',
      role: 'Theme Creator & Lead Engineer',
      brand: 'MAEVEN OS 2.0 Theme',
      type: 'Commercial Product',
      impact: '96+ Lighthouse mobile score, sold on Gumroad',
      status: 'Released',
      tone: 'info' as const,
      thumb: '/assets/holiday_rollouts.jpg',
    },
    {
      id: 'exp-3',
      role: 'Founder & Automation Specialist',
      brand: 'EzzCode (Sahfa.pk & Tiny Todzz)',
      type: 'Client Storefronts',
      impact: 'Custom OS 2.0 builds, regional gateways & webhooks',
      status: 'Active',
      tone: 'success' as const,
      thumb: '/assets/whatsapp_marketing.jpg',
    },
  ];

  return (
    <Page
      fullWidth
      title="About Me"
      subtitle="Mahar Ghulam Muhammad • EzzCode — Shopify Front-End & Automation Developer"
      primaryAction={{
        content: 'Scope a Project',
        onAction: () => navigate('/contact'),
      }}
      secondaryActions={[
        {
          content: 'WhatsApp Chat',
          url: developer.whatsappUrl,
        },
        {
          content: 'GitHub',
          url: developer.github,
        },
      ]}
    >
      <BlockStack gap="400">
        {/* ── Profile Hero Card ───────────────────────────────── */}
        <Card>
          <BlockStack gap="400">
            <InlineStack align="space-between" blockAlign="start" gap="400" wrap>
              {/* Avatar + Identity */}
              <InlineStack gap="300" blockAlign="center">
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: '#1a1a1a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                  }}
                >
                  <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700 }}>GM</span>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#00a47c',
                      border: '2px solid white',
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-2px',
                    }}
                  />
                </div>
                <BlockStack gap="050">
                  <InlineStack gap="200" blockAlign="center">
                    <Text as="h1" variant="headingLg">
                      GM (Mahar Ghulam Muhammad)
                    </Text>
                    <Badge tone="success">Available for Projects</Badge>
                  </InlineStack>
                  <Text as="p" variant="bodyMd" tone="subdued">
                    Shopify Front-End Developer · Brand: EzzCode · Lahore, Pakistan
                  </Text>
                  <InlineStack gap="300" blockAlign="center">
                    <InlineStack gap="100" blockAlign="center">
                      <div style={{ width: '14px', height: '14px', color: '#8c9196' }}>
                        <ClockIcon />
                      </div>
                      <Text as="span" variant="bodySm" tone="subdued">
                        Direct reply &lt; 24h
                      </Text>
                    </InlineStack>
                    <InlineStack gap="100" blockAlign="center">
                      <div style={{ width: '14px', height: '14px', color: '#8c9196' }}>
                        <ChatIcon />
                      </div>
                      <Text as="span" variant="bodySm" tone="subdued">
                        WhatsApp: +92 349 4607275
                      </Text>
                    </InlineStack>
                  </InlineStack>
                </BlockStack>
              </InlineStack>

              {/* CTA Buttons */}
              <InlineStack gap="200">
                <Button variant="primary" onClick={() => navigate('/contact')}>
                  Hire GM
                </Button>
                <Button url={developer.whatsappUrl} icon={ChatIcon}>
                  WhatsApp Chat
                </Button>
              </InlineStack>
            </InlineStack>

            <Divider />

            <Text as="p" variant="bodyMd">
              {developer.pitch}
            </Text>

            {/* Tech stack badges */}
            <InlineStack gap="150" wrap>
              {[
                'Shopify 2.0',
                'Liquid',
                'JSON Templates',
                'Make.com',
                'Cart Drawer',
                'Metafields',
                'Tailwind CSS',
                'REST APIs',
              ].map((tag) => (
                <Badge key={tag} size="small">
                  {tag}
                </Badge>
              ))}
            </InlineStack>
          </BlockStack>
        </Card>

        {/* ── 4 Visual Stat Cards ─────────────────────────────── */}
        <InlineGrid columns={{ xs: 1, sm: 2, md: 4 }} gap="300">
          <StatTile
            label="Platform Focus"
            value="Shopify Only"
            detail="100% dedicated to OS 2.0 & Liquid"
            tone="success"
            badgeText="Specialized"
          />
          <StatTile
            label="Commercial Theme"
            value="MAEVEN OS 2.0"
            detail="Built from scratch & sold on Gumroad"
            tone="info"
            badgeText="Live"
          />
          <StatTile
            label="COD Automation"
            value="500+ Weekly"
            detail="Auto-verified via Make.com webhooks"
            tone="success"
            badgeText="Automated"
          />
          <StatTile
            label="Response Time"
            value="< 24 Hours"
            detail="Direct developer, no agency layers"
          />
        </InlineGrid>

        {/* ── Main 2-col Layout ───────────────────────────────── */}
        <Layout>
          {/* Left 2/3 column */}
          <Layout.Section>
            <BlockStack gap="400">
              {/* Verified Production Experience Table Artifact */}
              <Card padding="0">
                <Box padding="400" borderBlockEndWidth="025" borderColor="border">
                  <InlineStack align="space-between" blockAlign="center">
                    <BlockStack gap="050">
                      <Text as="h2" variant="headingMd">
                        Production Track Record &amp; Experience
                      </Text>
                      <Text as="p" variant="bodySm" tone="subdued">
                        Active storefronts, commercial themes, and automation workflows engineered by GM.
                      </Text>
                    </BlockStack>
                    <Button size="micro" onClick={() => navigate('/projects')}>
                      All Case Studies
                    </Button>
                  </InlineStack>
                </Box>
                <IndexTable
                  resourceName={{ singular: 'experience', plural: 'experiences' }}
                  itemCount={experienceRows.length}
                  selectable={false}
                  headings={[
                    { title: 'Storefront / Product' },
                    { title: 'Role' },
                    { title: 'Key Deliverable & Impact' },
                    { title: 'Status' },
                  ]}
                >
                  {experienceRows.map((row, index) => (
                    <IndexTable.Row id={row.id} key={row.id} position={index}>
                      <IndexTable.Cell>
                        <InlineStack gap="300" blockAlign="center" wrap={false}>
                          <Thumbnail source={row.thumb} alt={row.brand} size="small" />
                          <BlockStack gap="050">
                            <Text as="span" variant="bodyMd" fontWeight="semibold">
                              {row.brand}
                            </Text>
                            <Text as="span" variant="bodySm" tone="subdued">
                              {row.type}
                            </Text>
                          </BlockStack>
                        </InlineStack>
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        <Text as="span" variant="bodySm">
                          {row.role}
                        </Text>
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        <Text as="span" variant="bodySm">
                          {row.impact}
                        </Text>
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        <Badge tone={row.tone}>{row.status}</Badge>
                      </IndexTable.Cell>
                    </IndexTable.Row>
                  ))}
                </IndexTable>
              </Card>

              {/* Core Specializations Visual Grid */}
              <Card>
                <BlockStack gap="300">
                  <InlineStack align="space-between" blockAlign="center">
                    <InlineStack gap="150" blockAlign="center">
                      <div style={{ width: '18px', height: '18px', color: '#8c9196' }}>
                        <StoreIcon />
                      </div>
                      <Text as="h2" variant="headingMd">
                        Core Engineering Deliverables
                      </Text>
                    </InlineStack>
                    <Badge tone="info">Shopify 2.0 Architecture</Badge>
                  </InlineStack>
                  <InlineGrid columns={{ xs: 1, md: 2 }} gap="300">
                    <SpecialtyCard
                      icon={ThemeIcon}
                      title="Shopify 2.0 Theme Build"
                      description="Lightweight OS 2.0 themes from Figma briefs with native cart drawer and drag-and-drop JSON sections."
                      badge="Flagship"
                      metricLabel="Lighthouse Target"
                      metricValue="95+ Mobile"
                    />
                    <SpecialtyCard
                      icon={CodeIcon}
                      title="Custom Liquid Sections"
                      description="Bespoke product sections, variant pickers, size guides, and promo blocks configurable in customizer."
                      badge="Liquid"
                      metricLabel="App Bloat Added"
                      metricValue="0 Third-Party Apps"
                    />
                    <SpecialtyCard
                      icon={PaymentIcon}
                      title="Regional Payment Gateways"
                      description="Local provider integrations with webhook callback validation and rule-based checkout routing."
                      badge="Checkout"
                      metricLabel="Transaction Reliability"
                      metricValue="Webhook Verified"
                    />
                    <SpecialtyCard
                      icon={AutomationIcon}
                      title="COD Order Automation"
                      description="Connecting Shopify webhooks to Make.com to auto-verify COD orders and sync courier tags."
                      badge="Make.com"
                      metricLabel="Manual Calls Saved"
                      metricValue="80%+ Reduction"
                    />
                  </InlineGrid>
                </BlockStack>
              </Card>

              {/* Lighthouse Performance Artifact */}
              <Card>
                <BlockStack gap="300">
                  <InlineStack align="space-between" blockAlign="center">
                    <BlockStack gap="050">
                      <Text as="h2" variant="headingMd">
                        MAEVEN Theme — Lighthouse Benchmark
                      </Text>
                      <Text as="p" variant="bodySm" tone="subdued">
                        Audit-verified performance of GM's commercial Online Store 2.0 theme with zero app dependencies.
                      </Text>
                    </BlockStack>
                    <Badge tone="success">Audit Verified</Badge>
                  </InlineStack>
                  <InlineGrid columns={{ xs: 2, sm: 4 }} gap="300">
                    <LighthouseDial label="Performance" score={96} color="#008060" />
                    <LighthouseDial label="Accessibility" score={98} color="#008060" />
                    <LighthouseDial label="Best Practices" score={100} color="#008060" />
                    <LighthouseDial label="SEO" score={100} color="#008060" />
                  </InlineGrid>
                </BlockStack>
              </Card>

              {/* Architecture & Guiding Principles Grid */}
              <Card>
                <BlockStack gap="300">
                  <InlineStack gap="150" blockAlign="center">
                    <div style={{ width: '18px', height: '18px', color: '#8c9196' }}>
                      <PersonIcon />
                    </div>
                    <Text as="h2" variant="headingMd">
                      Working Principles &amp; Architecture Standards
                    </Text>
                  </InlineStack>
                  <InlineGrid columns={{ xs: 1, sm: 2 }} gap="300">
                    <PrincipleTile
                      title="Zero App Bloat"
                      description="Native Liquid & CSS instead of stacking 15 monthly apps that degrade speed."
                    />
                    <PrincipleTile
                      title="Production Tested"
                      description="Proven on high-traffic retail catalogs handling thousands of weekly orders."
                    />
                    <PrincipleTile
                      title="Merchant Autonomy"
                      description="Schema-driven sections so teams can launch campaigns without touching code."
                    />
                    <PrincipleTile
                      title="Direct Developer Access"
                      description="Fast communication via WhatsApp or email without agency middlemen."
                    />
                  </InlineGrid>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>

          {/* Right 1/3 Sidebar */}
          <Layout.Section variant="oneThird">
            <BlockStack gap="400">
              {/* Direct Contact */}
              <Card>
                <BlockStack gap="300">
                  <Text as="h2" variant="headingMd">
                    Direct Contact
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Reach out directly to discuss theme builds, custom sections, or automations.
                  </Text>
                  <Divider />
                  <BlockStack gap="200">
                    <ContactRow icon={PersonIcon} label="Developer" value={developer.name} />
                    <ContactRow icon={EmailIcon} label="Email" value={developer.email} />
                    <ContactRow icon={ChatIcon} label="WhatsApp" value={developer.phone} />
                    <ContactRow icon={LocationIcon} label="Location" value={`${developer.location} (PKT)`} />
                    <Box>
                      <BlockStack gap="100">
                        <Text as="span" variant="bodySm" tone="subdued">
                          Typical Response
                        </Text>
                        <InlineStack>
                          <Badge tone="success">&lt; 24 hours</Badge>
                        </InlineStack>
                      </BlockStack>
                    </Box>
                  </BlockStack>
                  <Divider />
                  <Button variant="primary" fullWidth onClick={() => navigate('/contact')}>
                    Open Project Scoping Form
                  </Button>
                  <Button fullWidth url={developer.whatsappUrl} icon={ChatIcon}>
                    Chat on WhatsApp
                  </Button>
                </BlockStack>
              </Card>

              {/* Technical Proficiency Progress Bars Artifact */}
              <Card>
                <BlockStack gap="300">
                  <Text as="h2" variant="headingMd">
                    Core Stack Breakdown
                  </Text>
                  <BlockStack gap="200">
                    <BlockStack gap="100">
                      <InlineStack align="space-between">
                        <Text as="span" variant="bodySm" fontWeight="medium">
                          Shopify Liquid &amp; OS 2.0 Schemas
                        </Text>
                        <Text as="span" variant="bodySm" tone="subdued">
                          100%
                        </Text>
                      </InlineStack>
                      <ProgressBar progress={100} size="small" tone="success" />
                    </BlockStack>

                    <BlockStack gap="100">
                      <InlineStack align="space-between">
                        <Text as="span" variant="bodySm" fontWeight="medium">
                          JavaScript (ES6+) &amp; Tailwind CSS
                        </Text>
                        <Text as="span" variant="bodySm" tone="subdued">
                          95%
                        </Text>
                      </InlineStack>
                      <ProgressBar progress={95} size="small" tone="success" />
                    </BlockStack>

                    <BlockStack gap="100">
                      <InlineStack align="space-between">
                        <Text as="span" variant="bodySm" fontWeight="medium">
                          Make.com &amp; Webhook Automation
                        </Text>
                        <Text as="span" variant="bodySm" tone="subdued">
                          92%
                        </Text>
                      </InlineStack>
                      <ProgressBar progress={92} size="small" tone="success" />
                    </BlockStack>

                    <BlockStack gap="100">
                      <InlineStack align="space-between">
                        <Text as="span" variant="bodySm" fontWeight="medium">
                          Payment Gateways &amp; REST APIs
                        </Text>
                        <Text as="span" variant="bodySm" tone="subdued">
                          90%
                        </Text>
                      </InlineStack>
                      <ProgressBar progress={90} size="small" tone="success" />
                    </BlockStack>
                  </BlockStack>

                  <Divider />

                  <InlineStack gap="150" wrap>
                    {[
                      'Shopify CLI',
                      'Theme Kit',
                      'Git & GitHub',
                      'Figma to Liquid',
                      'Metafields',
                      'Ajax Cart API',
                    ].map((tool) => (
                      <Badge key={tool} size="small">
                        {tool}
                      </Badge>
                    ))}
                  </InlineStack>
                </BlockStack>
              </Card>

              {/* Featured Product Card with Visual Preview */}
              <Card>
                <BlockStack gap="300">
                  <div
                    style={{
                      width: '100%',
                      height: '130px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1px solid #e3e3e3',
                    }}
                  >
                    <img
                      src="/assets/holiday_rollouts.jpg"
                      alt="MAEVEN OS 2.0 Theme"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <InlineStack align="space-between" blockAlign="center">
                    <Text as="h3" variant="headingSm">
                      MAEVEN OS 2.0 Theme
                    </Text>
                    <Badge tone="success">Gumroad</Badge>
                  </InlineStack>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Commercial Shopify 2.0 theme engineered with modular Liquid schemas and native slide-out cart drawer.
                  </Text>
                  <InlineStack gap="200">
                    <Button size="micro" onClick={() => navigate('/themes')}>
                      View Specs
                    </Button>
                    <Button size="micro" url="https://mahargm.gumroad.com/l/maeven">
                      Gumroad Listing
                    </Button>
                  </InlineStack>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
};
