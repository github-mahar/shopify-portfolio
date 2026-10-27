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
}
const StatTile: React.FC<StatTileProps> = ({ label, value, detail, tone }) => (
  <Box
    background="bg-surface-secondary"
    padding="400"
    borderRadius="200"
    borderWidth="025"
    borderColor="border"
  >
    <BlockStack gap="100">
      <Text as="span" variant="bodySm" tone="subdued">
        {label}
      </Text>
      <Text as="p" variant="headingLg" fontWeight="bold">
        {value}
      </Text>
      <Text as="span" variant="bodySm" tone="subdued">
        {detail}
      </Text>
      {tone && (
        <Box paddingBlockStart="100">
          <Badge tone={tone} size="small">
            Live
          </Badge>
        </Box>
      )}
    </BlockStack>
  </Box>
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
        <Text as="span" variant="bodySm" alignment="center">
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
}
const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ icon: IconComp, title, description, badge }) => (
  <Box
    background="bg-surface-secondary"
    padding="300"
    borderRadius="200"
    borderWidth="025"
    borderColor="border"
  >
    <BlockStack gap="150">
      <InlineStack gap="200" blockAlign="center">
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <div style={{ width: '16px', height: '16px', color: '#636466' }}>
            <IconComp />
          </div>
        </div>
        <BlockStack gap="050">
          <Text as="h3" variant="headingSm">
            {title}
          </Text>
          {badge && <Badge size="small">{badge}</Badge>}
        </BlockStack>
      </InlineStack>
      <Text as="p" variant="bodySm" tone="subdued">
        {description}
      </Text>
    </BlockStack>
  </Box>
);

/* ─── Principle Row ──────────────────────────────────────────── */
interface PrincipleRowProps {
  title: string;
  description: string;
}
const PrincipleRow: React.FC<PrincipleRowProps> = ({ title, description }) => (
  <Box borderBlockEndWidth="025" borderColor="border" paddingBlockEnd="200">
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
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    background: '#1a1a1a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                  }}
                >
                  <Text as="span" variant="headingLg" tone="magic-subdued">
                    <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700 }}>GM</span>
                  </Text>
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
                  WhatsApp
                </Button>
              </InlineStack>
            </InlineStack>

            <Divider />

            <Text as="p" variant="bodyMd">
              {developer.pitch}
            </Text>

            {/* Tech stack badges */}
            <InlineStack gap="150" wrap>
              {['Shopify 2.0', 'Liquid', 'JSON Templates', 'Make.com', 'Cart Drawer', 'Metafields', 'Tailwind CSS', 'REST APIs'].map((tag) => (
                <Badge key={tag} size="small">
                  {tag}
                </Badge>
              ))}
            </InlineStack>
          </BlockStack>
        </Card>

        {/* ── Stats Row ───────────────────────────────────────── */}
        <InlineGrid columns={{ xs: 1, sm: 2, md: 4 }} gap="300">
          <StatTile
            label="Platform Focus"
            value="Shopify Only"
            detail="100% dedicated to Shopify 2.0 & Liquid"
            tone="success"
          />
          <StatTile
            label="Commercial Theme"
            value="MAEVEN OS 2.0"
            detail="Built & sold on Gumroad"
          />
          <StatTile
            label="COD Automation"
            value="500+ Weekly"
            detail="Auto-verified via Make.com scenarios"
          />
          <StatTile
            label="Response Time"
            value="< 24 Hours"
            detail="Direct developer, no agency layers"
          />
        </InlineGrid>

        {/* ── Main 2-col Layout ───────────────────────────────── */}
        <Layout>
          {/* Left column */}
          <Layout.Section>
            <BlockStack gap="400">
              {/* Core Specializations */}
              <Card>
                <BlockStack gap="300">
                  <InlineStack gap="150" blockAlign="center">
                    <div style={{ width: '18px', height: '18px', color: '#8c9196' }}>
                      <StoreIcon />
                    </div>
                    <Text as="h2" variant="headingMd">
                      Core Specializations
                    </Text>
                    <Badge tone="info">Shopify Only</Badge>
                  </InlineStack>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Tailored front-end engineering for merchants who value speed, clean Liquid architecture, and direct developer access.
                  </Text>
                  <InlineGrid columns={{ xs: 1, md: 2 }} gap="300">
                    <SpecialtyCard
                      icon={ThemeIcon}
                      title="Shopify 2.0 Theme Build"
                      description="Lightweight OS 2.0 themes from Figma briefs — native cart drawer, drag-and-drop sections, zero app bloat."
                      badge="Flagship"
                    />
                    <SpecialtyCard
                      icon={CodeIcon}
                      title="Custom Section Development"
                      description="Bespoke product page sections, variant pickers, tabbed content & promo banners fully configurable in the customizer."
                    />
                    <SpecialtyCard
                      icon={PaymentIcon}
                      title="Payment Gateway Integration"
                      description="Regional providers with webhook callback verification, seamless checkout handoffs, and rule-based routing."
                    />
                    <SpecialtyCard
                      icon={AutomationIcon}
                      title="COD Order Automation"
                      description="Eliminating manual calls by wiring Shopify webhooks → Make.com → auto-tag verified orders & sync courier status."
                      badge="Make.com"
                    />
                  </InlineGrid>
                </BlockStack>
              </Card>

              {/* Lighthouse Performance */}
              <Card>
                <BlockStack gap="300">
                  <InlineStack align="space-between" blockAlign="center">
                    <BlockStack gap="050">
                      <Text as="h2" variant="headingMd">
                        MAEVEN Theme — Lighthouse Scores
                      </Text>
                      <Text as="p" variant="bodySm" tone="subdued">
                        Audit-verified on Shopify mobile — no third-party apps
                      </Text>
                    </BlockStack>
                    <Badge tone="success">96+ Mobile</Badge>
                  </InlineStack>
                  <InlineGrid columns={{ xs: 2, sm: 4 }} gap="300">
                    <LighthouseDial label="Performance" score={96} color="#00a47c" />
                    <LighthouseDial label="Accessibility" score={98} color="#2c6ecb" />
                    <LighthouseDial label="Best Practices" score={100} color="#8456cd" />
                    <LighthouseDial label="SEO" score={100} color="#e06b00" />
                  </InlineGrid>
                </BlockStack>
              </Card>

              {/* Background & Philosophy */}
              <Card>
                <BlockStack gap="300">
                  <InlineStack gap="150" blockAlign="center">
                    <div style={{ width: '18px', height: '18px', color: '#8c9196' }}>
                      <PersonIcon />
                    </div>
                    <Text as="h2" variant="headingMd">
                      Background & Philosophy
                    </Text>
                  </InlineStack>

                  <Text as="p" variant="bodyMd">
                    My journey in e-commerce development started with a clear observation: too many Shopify stores suffer from bloated apps, sluggish speeds, and messy theme code that makes simple edits a nightmare. I chose to master Shopify's core architecture — Liquid, JSON templates, section schemas, and native APIs — instead of stacking third-party dependencies.
                  </Text>
                  <Text as="p" variant="bodyMd">
                    I engineered and commercially released <strong>MAEVEN</strong>, an Online Store 2.0 theme built from scratch — modular drag-and-drop sections, native cart drawer, zero app dependencies. I also serve as in-house front-end developer for <strong>Imrozia Serene</strong>, handling production customizations and automating 500+ COD order verifications weekly via Make.com.
                  </Text>

                  <Box background="bg-surface-secondary" padding="300" borderRadius="200">
                    <BlockStack gap="200">
                      <Text as="h3" variant="headingSm">
                        Guiding Principles
                      </Text>
                      <PrincipleRow
                        title="Zero App Bloat"
                        description="Native Liquid & CSS instead of 15 monthly apps that degrade speed and conflict with your theme."
                      />
                      <PrincipleRow
                        title="Real Production Experience"
                        description="Tested on live high-traffic retail stores handling millions in sales — no downtime during updates."
                      />
                      <PrincipleRow
                        title="Merchant Autonomy"
                        description="Modular section schemas so store owners update and reorder content without touching code."
                      />
                      <Box>
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
                              Direct Communication
                            </Text>
                            <Text as="span" variant="bodySm" tone="subdued">
                              WhatsApp or email with the developer — no ticket queues or agency layers.
                            </Text>
                          </BlockStack>
                        </InlineStack>
                      </Box>
                    </BlockStack>
                  </Box>
                </BlockStack>
              </Card>

              {/* Technical Stack */}
              <Card>
                <BlockStack gap="300">
                  <Text as="h2" variant="headingMd">
                    Technical Stack & Tooling
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Technologies used in daily production work.
                  </Text>
                  <InlineGrid columns={{ xs: 1, sm: 2 }} gap="300">
                    <Box background="bg-surface-secondary" padding="300" borderRadius="200">
                      <BlockStack gap="150">
                        <Text as="h3" variant="headingSm">Shopify & Liquid</Text>
                        <InlineStack gap="150" wrap>
                          {['Online Store 2.0', 'Liquid', 'JSON Templates', 'Customizer API', 'Metafields', 'Cart Drawer'].map((t) => (
                            <Badge key={t} size="small">{t}</Badge>
                          ))}
                        </InlineStack>
                      </BlockStack>
                    </Box>
                    <Box background="bg-surface-secondary" padding="300" borderRadius="200">
                      <BlockStack gap="150">
                        <Text as="h3" variant="headingSm">Front-End & UI</Text>
                        <InlineStack gap="150" wrap>
                          {['JavaScript ES6+', 'Tailwind CSS', 'HTML5 Semantic', 'Modern CSS', 'Responsive Design'].map((t) => (
                            <Badge key={t} size="small">{t}</Badge>
                          ))}
                        </InlineStack>
                      </BlockStack>
                    </Box>
                    <Box background="bg-surface-secondary" padding="300" borderRadius="200">
                      <BlockStack gap="150">
                        <Text as="h3" variant="headingSm">Integrations & Automation</Text>
                        <InlineStack gap="150" wrap>
                          {['Make.com', 'Shopify Webhooks', 'Admin REST API', 'Payment Gateways', 'COD Automation'].map((t) => (
                            <Badge key={t} size="small">{t}</Badge>
                          ))}
                        </InlineStack>
                      </BlockStack>
                    </Box>
                    <Box background="bg-surface-secondary" padding="300" borderRadius="200">
                      <BlockStack gap="150">
                        <Text as="h3" variant="headingSm">Developer Tools</Text>
                        <InlineStack gap="150" wrap>
                          {['Shopify CLI', 'Theme Kit', 'Git & GitHub', 'Chrome DevTools', 'Figma to Shopify'].map((t) => (
                            <Badge key={t} size="small">{t}</Badge>
                          ))}
                        </InlineStack>
                      </BlockStack>
                    </Box>
                  </InlineGrid>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>

          {/* Right Sidebar */}
          <Layout.Section variant="oneThird">
            <BlockStack gap="400">
              {/* Direct Contact */}
              <Card>
                <BlockStack gap="300">
                  <Text as="h2" variant="headingMd">
                    Direct Contact
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Reach out to discuss projects, theme builds, or automations.
                  </Text>
                  <Divider />
                  <BlockStack gap="200">
                    <ContactRow icon={PersonIcon} label="Developer" value={developer.name} />
                    <ContactRow icon={EmailIcon} label="Email" value={developer.email} />
                    <ContactRow icon={ChatIcon} label="WhatsApp" value={developer.phone} />
                    <ContactRow icon={LocationIcon} label="Location" value={`${developer.location} (PKT)`} />
                    <Box>
                      <BlockStack gap="100">
                        <Text as="span" variant="bodySm" tone="subdued">Typical Response</Text>
                        <Badge tone="success">&lt; 24 hours</Badge>
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

              {/* MAEVEN Theme Card */}
              <Card>
                <BlockStack gap="200">
                  <InlineStack align="space-between" blockAlign="center">
                    <Text as="h3" variant="headingSm">MAEVEN OS 2.0</Text>
                    <Badge tone="success">Built & Sold</Badge>
                  </InlineStack>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Commercial Shopify 2.0 theme — clean Liquid schemas, modular sections, zero app dependencies.
                  </Text>
                  <Box background="bg-surface-secondary" padding="300" borderRadius="200">
                    <InlineGrid columns={2} gap="200">
                      <BlockStack gap="050">
                        <Text as="span" variant="bodySm" tone="subdued">Performance</Text>
                        <Text as="span" variant="headingSm" fontWeight="bold">96+</Text>
                      </BlockStack>
                      <BlockStack gap="050">
                        <Text as="span" variant="bodySm" tone="subdued">Platform</Text>
                        <Text as="span" variant="headingSm" fontWeight="bold">Gumroad</Text>
                      </BlockStack>
                      <BlockStack gap="050">
                        <Text as="span" variant="bodySm" tone="subdued">App Dependencies</Text>
                        <Text as="span" variant="headingSm" fontWeight="bold">Zero</Text>
                      </BlockStack>
                      <BlockStack gap="050">
                        <Text as="span" variant="bodySm" tone="subdued">Store Version</Text>
                        <Text as="span" variant="headingSm" fontWeight="bold">2.0</Text>
                      </BlockStack>
                    </InlineGrid>
                  </Box>
                  <InlineStack gap="150">
                    <Button size="micro" onClick={() => navigate('/themes')}>
                      Theme Specs
                    </Button>
                    <Button size="micro" url="https://mahargm.gumroad.com/l/maeven" external>
                      Gumroad Demo
                    </Button>
                  </InlineStack>
                </BlockStack>
              </Card>

              {/* Live Storefronts */}
              <Card>
                <BlockStack gap="200">
                  <Text as="h3" variant="headingSm">Live Storefronts</Text>
                  <Text as="p" variant="bodySm" tone="subdued">Production stores actively engineered:</Text>
                  <BlockStack gap="200">
                    {[
                      { name: 'Imrozia Serene', desc: 'High-volume fashion apparel', badge: 'Active' },
                      { name: 'Sahfa.pk', desc: 'MAEVEN-powered new brand', badge: 'Live' },
                      { name: 'Tiny Todzz', desc: "Children's apparel — Shopify 2.0", badge: 'Live' },
                    ].map(({ name, desc, badge }) => (
                      <Box
                        key={name}
                        background="bg-surface-secondary"
                        padding="200"
                        borderRadius="200"
                      >
                        <InlineStack align="space-between" blockAlign="center">
                          <BlockStack gap="050">
                            <Text as="span" variant="bodySm" fontWeight="semibold">{name}</Text>
                            <Text as="span" variant="bodySm" tone="subdued">{desc}</Text>
                          </BlockStack>
                          <Badge tone="success" size="small">{badge}</Badge>
                        </InlineStack>
                      </Box>
                    ))}
                  </BlockStack>
                  <Button size="micro" onClick={() => navigate('/projects')}>
                    View All Storefronts
                  </Button>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
};
