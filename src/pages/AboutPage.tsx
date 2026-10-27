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
  Divider,
  ProgressBar,
} from '@shopify/polaris';
import {
  ChatIcon,
  LocationIcon,
  EmailIcon,
  PersonIcon,
} from '@shopify/polaris-icons';
import { PORTFOLIO_CONTENT } from '../data/content';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { developer } = PORTFOLIO_CONTENT;

  const pillStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '4px 10px',
    background: '#f6f6f7',
    border: '1px solid #e3e5e7',
    borderRadius: '14px',
    fontSize: '11.5px',
    fontWeight: 500,
    color: '#303030',
  };

  const greenPillStyle: React.CSSProperties = {
    ...pillStyle,
    background: '#eef8f3',
    borderColor: '#b5e4d3',
    color: '#006e52',
  };

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
        <Layout>
          {/* Left 2/3 Column: Visual Artifacts */}
          <Layout.Section>
            <BlockStack gap="400">
              {/* ── Artifact 1: Developer Ecosystem & Architecture Map ── */}
              <Card>
                <BlockStack gap="300">
                  <InlineStack align="space-between" blockAlign="center">
                    <InlineStack gap="200" blockAlign="center">
                      <span className="live-dot" style={{ display: 'inline-block' }} />
                      <Text as="h2" variant="headingMd">
                        Mahar Ghulam Muhammad (EzzCode)
                      </Text>
                    </InlineStack>
                    <Badge tone="success">100% Shopify Focus</Badge>
                  </InlineStack>

                  {/* Studio Visual Artifact: Ecosystem Architecture Diagram */}
                  <div
                    style={{
                      background: 'linear-gradient(180deg, #f8faf9 0%, #f1f5f3 100%)',
                      borderRadius: '12px',
                      padding: '20px',
                      border: '1px solid #e6ece9',
                    }}
                  >
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '12px',
                        alignItems: 'stretch',
                      }}
                    >
                      {/* Pillar 1 */}
                      <div
                        style={{
                          background: '#ffffff',
                          borderRadius: '10px',
                          padding: '14px',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '8px',
                              background: '#eef8f3',
                              color: '#008060',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 700,
                              fontSize: '13px',
                            }}
                          >
                            OS
                          </span>
                          <span style={greenPillStyle}>Commercial</span>
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 650, color: '#111111' }}>
                          Shopify 2.0 Themes
                        </div>
                        <div style={{ fontSize: '11.5px', color: '#616161', lineHeight: 1.4 }}>
                          Author of <strong>MAEVEN</strong> • Modular JSON schemas &amp; native cart drawer
                        </div>
                      </div>

                      {/* Pillar 2 */}
                      <div
                        style={{
                          background: '#ffffff',
                          borderRadius: '10px',
                          padding: '14px',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '8px',
                              background: '#eef3fb',
                              color: '#2c6ecb',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 700,
                              fontSize: '13px',
                            }}
                          >
                            HQ
                          </span>
                          <span style={pillStyle}>In-House</span>
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 650, color: '#111111' }}>
                          Imrozia Serene
                        </div>
                        <div style={{ fontSize: '11.5px', color: '#616161', lineHeight: 1.4 }}>
                          High-volume fashion catalog • Multi-region checkout &amp; zero downtime
                        </div>
                      </div>

                      {/* Pillar 3 */}
                      <div
                        style={{
                          background: '#ffffff',
                          borderRadius: '10px',
                          padding: '14px',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '8px',
                              background: '#f3eefb',
                              color: '#7e57c2',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 700,
                              fontSize: '13px',
                            }}
                          >
                            ⚡
                          </span>
                          <span style={greenPillStyle}>500+ / wk</span>
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 650, color: '#111111' }}>
                          Make.com Webhooks
                        </div>
                        <div style={{ fontSize: '11.5px', color: '#616161', lineHeight: 1.4 }}>
                          Automated COD verification • -80% manual staff calls
                        </div>
                      </div>
                    </div>
                  </div>

                  <InlineStack align="space-between" blockAlign="center" wrap gap="200">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      <span style={pillStyle}>📍 Lahore, Pakistan</span>
                      <span style={pillStyle}>⚡ Clean Liquid (0 App Bloat)</span>
                      <span style={pillStyle}>⏱️ Reply &lt; 24h</span>
                    </div>
                    <InlineStack gap="200">
                      <Button size="micro" onClick={() => navigate('/projects')}>
                        View Storefronts
                      </Button>
                      <Button size="micro" url={developer.whatsappUrl} icon={ChatIcon}>
                        WhatsApp
                      </Button>
                    </InlineStack>
                  </InlineStack>
                </BlockStack>
              </Card>

              {/* ── Artifact 2: Interactive Theme Editor & Lighthouse Benchmark ── */}
              <Card>
                <BlockStack gap="300">
                  <InlineStack align="space-between" blockAlign="center">
                    <Text as="h2" variant="headingMd">
                      MAEVEN OS 2.0 — Architecture &amp; Speed Artifact
                    </Text>
                    <Badge tone="success">96+ Mobile Score</Badge>
                  </InlineStack>

                  <InlineGrid columns={{ xs: 1, md: 2 }} gap="300">
                    {/* Left Visual: Mini Shopify Theme Customizer Mockup */}
                    <div
                      style={{
                        background: '#f8f9fa',
                        borderRadius: '12px',
                        border: '1px solid #e6e8eb',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {/* Browser Top Bar */}
                      <div
                        style={{
                          background: '#ffffff',
                          padding: '8px 12px',
                          borderBottom: '1px solid #eceef0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ display: 'flex', gap: '5px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e5e7eb' }} />
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e5e7eb' }} />
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e5e7eb' }} />
                        </div>
                        <span
                          style={{
                            fontSize: '10.5px',
                            color: '#616161',
                            background: '#f3f4f6',
                            padding: '2px 10px',
                            borderRadius: '10px',
                            fontWeight: 500,
                          }}
                        >
                          maeven-os2.myshopify.com
                        </span>
                        <span style={{ fontSize: '10px', color: '#008060', fontWeight: 600 }}>OS 2.0</span>
                      </div>

                      {/* Customizer Split View */}
                      <div style={{ display: 'flex', flex: 1, padding: '12px', gap: '10px' }}>
                        {/* Section Tree */}
                        <div
                          style={{
                            width: '42%',
                            background: '#ffffff',
                            borderRadius: '8px',
                            padding: '8px',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                            fontSize: '10.5px',
                          }}
                        >
                          <div style={{ fontWeight: 600, color: '#111', marginBottom: '2px' }}>
                            JSON Sections
                          </div>
                          <div style={{ padding: '4px 6px', background: '#eef8f3', color: '#006e52', borderRadius: '5px', fontWeight: 500 }}>
                            ▾ Header &amp; Mega Menu
                          </div>
                          <div style={{ padding: '4px 6px', background: '#f6f6f7', color: '#303030', borderRadius: '5px' }}>
                            ▪ Dynamic Hero Banner
                          </div>
                          <div style={{ padding: '4px 6px', background: '#f6f6f7', color: '#303030', borderRadius: '5px' }}>
                            ▪ Ajax Filter Grid
                          </div>
                          <div style={{ padding: '4px 6px', background: '#eef8f3', color: '#006e52', borderRadius: '5px', fontWeight: 500 }}>
                            ▪ Slide-Out Cart Drawer
                          </div>
                        </div>

                        {/* Storefront Preview Canvas */}
                        <div
                          style={{
                            flex: 1,
                            background: '#ffffff',
                            borderRadius: '8px',
                            padding: '10px',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                          }}
                        >
                          <div
                            style={{
                              height: '38px',
                              borderRadius: '6px',
                              background: 'linear-gradient(135deg, #e3f1df 0%, #d1fae5 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '10.5px',
                              fontWeight: 600,
                              color: '#065f46',
                            }}
                          >
                            Zero Third-Party App Bloat
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', flex: 1 }}>
                            <div style={{ background: '#f3f4f6', borderRadius: '5px', padding: '6px', fontSize: '9.5px', color: '#4b5563' }}>
                              Product Card
                              <div style={{ fontWeight: 600, color: '#111', marginTop: '2px' }}>Quick Add +</div>
                            </div>
                            <div style={{ background: '#f3f4f6', borderRadius: '5px', padding: '6px', fontSize: '9.5px', color: '#4b5563' }}>
                              Ajax Drawer
                              <div style={{ fontWeight: 600, color: '#008060', marginTop: '2px' }}>Instant Sync</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Visual: 4 Circular Lighthouse Gauges */}
                    <div
                      style={{
                        background: 'linear-gradient(180deg, #f8faf9 0%, #f1f5f3 100%)',
                        borderRadius: '12px',
                        border: '1px solid #e6ece9',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '14px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                        {[
                          { label: 'Speed', score: 96 },
                          { label: 'A11y', score: 98 },
                          { label: 'Best', score: 100 },
                          { label: 'SEO', score: 100 },
                        ].map((item) => {
                          const r = 22;
                          const circ = 2 * Math.PI * r;
                          const dash = (item.score / 100) * circ;
                          return (
                            <div
                              key={item.label}
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '5px',
                              }}
                            >
                              <div
                                style={{
                                  background: '#ffffff',
                                  borderRadius: '50%',
                                  padding: '4px',
                                  boxShadow: '0 4px 12px rgba(0, 128, 96, 0.10)',
                                  display: 'flex',
                                }}
                              >
                                <svg width="52" height="52" viewBox="0 0 54 54">
                                  <circle cx="27" cy="27" r={r} fill="none" stroke="#e3f1df" strokeWidth="4.5" />
                                  <circle
                                    cx="27"
                                    cy="27"
                                    r={r}
                                    fill="none"
                                    stroke="#008060"
                                    strokeWidth="4.5"
                                    strokeLinecap="round"
                                    strokeDasharray={`${dash} ${circ}`}
                                    strokeDashoffset={circ / 4}
                                  />
                                  <text
                                    x="27"
                                    y="31"
                                    textAnchor="middle"
                                    fontSize="13"
                                    fontWeight="700"
                                    fill="#008060"
                                  >
                                    {item.score}
                                  </text>
                                </svg>
                              </div>
                              <span style={{ fontSize: '11px', fontWeight: 500, color: '#4a4a4a' }}>
                                {item.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                        <span style={greenPillStyle}>FCP 0.8s</span>
                        <span style={pillStyle}>LCP 1.4s</span>
                        <span style={pillStyle}>CLS 0.00</span>
                        <span style={pillStyle}>Sold on Gumroad</span>
                      </div>
                    </div>
                  </InlineGrid>
                </BlockStack>
              </Card>

              {/* ── Artifact 3: Visual Make.com COD Automation Pipeline ── */}
              <Card>
                <BlockStack gap="300">
                  <InlineStack align="space-between" blockAlign="center">
                    <Text as="h2" variant="headingMd">
                      Automated COD Verification Pipeline (Make.com)
                    </Text>
                    <Badge tone="info">500+ Weekly Orders</Badge>
                  </InlineStack>

                  {/* Visual Node Pipeline */}
                  <div
                    style={{
                      background: 'linear-gradient(180deg, #fafafa 0%, #f3f4f6 100%)',
                      borderRadius: '12px',
                      padding: '18px 16px',
                      border: '1px solid #e6e8eb',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
                      gap: '10px',
                      alignItems: 'center',
                    }}
                  >
                    {[
                      {
                        step: '01',
                        title: 'Shopify Checkout',
                        sub: 'orders/create webhook',
                        color: '#008060',
                        bg: '#eef8f3',
                      },
                      {
                        step: '02',
                        title: 'Make.com Router',
                        sub: 'COD & region filter',
                        color: '#7e57c2',
                        bg: '#f3eefb',
                      },
                      {
                        step: '03',
                        title: 'WhatsApp Prompt',
                        sub: '1-tap buyer confirm',
                        color: '#059669',
                        bg: '#ecfdf5',
                      },
                      {
                        step: '04',
                        title: 'Admin REST API',
                        sub: 'Auto-tag & dispatch',
                        color: '#2c6ecb',
                        bg: '#eef3fb',
                      },
                    ].map((node) => (
                      <div
                        key={node.step}
                        style={{
                          background: '#ffffff',
                          borderRadius: '10px',
                          padding: '12px',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                        }}
                      >
                        <span
                          style={{
                            alignSelf: 'flex-start',
                            fontSize: '10px',
                            fontWeight: 700,
                            padding: '2px 7px',
                            borderRadius: '10px',
                            background: node.bg,
                            color: node.color,
                          }}
                        >
                          STEP {node.step}
                        </span>
                        <div style={{ fontSize: '12.5px', fontWeight: 650, color: '#111111', marginTop: '2px' }}>
                          {node.title}
                        </div>
                        <div style={{ fontSize: '11px', color: '#616161' }}>{node.sub}</div>
                      </div>
                    ))}
                  </div>

                  <InlineStack align="space-between" blockAlign="center" wrap gap="200">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      <span style={greenPillStyle}>-80% Manual Verification Calls</span>
                      <span style={pillStyle}>Real-Time Courier Sync</span>
                      <span style={pillStyle}>Regional Payment Gateways</span>
                    </div>
                    <Button size="micro" onClick={() => navigate('/integrations')}>
                      Integration Details
                    </Button>
                  </InlineStack>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>

          {/* Right 1/3 Sidebar Column */}
          <Layout.Section variant="oneThird">
            <BlockStack gap="400">
              {/* Direct Contact Visual Card */}
              <Card>
                <BlockStack gap="300">
                  <InlineStack align="space-between" blockAlign="center">
                    <Text as="h2" variant="headingMd">
                      Direct Contact
                    </Text>
                    <Badge tone="success">&lt; 24h Reply</Badge>
                  </InlineStack>

                  <div
                    style={{
                      background: '#f8f9fa',
                      borderRadius: '10px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {[
                      { icon: PersonIcon, label: 'Developer', value: 'Mahar Ghulam Muhammad' },
                      { icon: EmailIcon, label: 'Email', value: developer.email },
                      { icon: ChatIcon, label: 'WhatsApp', value: developer.phone },
                      { icon: LocationIcon, label: 'Location', value: 'Lahore, Pakistan (PKT)' },
                    ].map(({ icon: IconComp, label, value }) => (
                      <div
                        key={label}
                        style={{
                          background: '#ffffff',
                          borderRadius: '8px',
                          padding: '8px 10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                        }}
                      >
                        <div style={{ width: '16px', height: '16px', color: '#008060', flexShrink: 0 }}>
                          <IconComp />
                        </div>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ fontSize: '10.5px', color: '#616161' }}>{label}</div>
                          <div
                            style={{
                              fontSize: '12px',
                              fontWeight: 600,
                              color: '#111111',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" fullWidth onClick={() => navigate('/contact')}>
                    Open Project Scoping Form
                  </Button>
                  <Button fullWidth url={developer.whatsappUrl} icon={ChatIcon}>
                    Chat on WhatsApp
                  </Button>
                </BlockStack>
              </Card>

              {/* Technical Stack Visual Bars */}
              <Card>
                <BlockStack gap="300">
                  <Text as="h2" variant="headingMd">
                    Technical Stack Matrix
                  </Text>

                  <BlockStack gap="200">
                    <BlockStack gap="100">
                      <InlineStack align="space-between">
                        <Text as="span" variant="bodySm" fontWeight="medium">
                          Shopify Liquid &amp; OS 2.0
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
                          JavaScript ES6+ &amp; Tailwind
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
                          Make.com &amp; Webhooks
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
                          Gateways &amp; REST APIs
                        </Text>
                        <Text as="span" variant="bodySm" tone="subdued">
                          90%
                        </Text>
                      </InlineStack>
                      <ProgressBar progress={90} size="small" tone="success" />
                    </BlockStack>
                  </BlockStack>

                  <Divider />

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {[
                      'JSON Schemas',
                      'Metafields',
                      'Ajax Cart API',
                      'Shopify CLI',
                      'Git & GitHub',
                      'Figma to Liquid',
                    ].map((tag) => (
                      <span key={tag} style={pillStyle}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
};
