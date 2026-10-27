import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Page,
  Layout,
  Card,
  Text,
  Badge,
  Button,
  ButtonGroup,
  Banner,
  BlockStack,
  InlineStack,
  InlineGrid,
  Box,
  Divider,
  List,
  Icon,
  Avatar,
} from '@shopify/polaris';
import {
  LocationIcon,
  ExternalIcon,
} from '@shopify/polaris-icons';
import { PORTFOLIO_CONTENT } from '../data/content';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { developer, aboutMe } = PORTFOLIO_CONTENT;

  return (
    <Page
      fullWidth
      title="Developer Profile"
      subtitle="Mahar Ghulam Muhammad (GM) • EzzCode — Shopify Front-End & Automation Developer"
      primaryAction={{
        content: 'Scope a Project',
        onAction: () => navigate('/contact'),
      }}
      secondaryActions={[
        {
          content: 'WhatsApp Chat',
          url: developer.whatsappUrl,
          external: true,
        },
        {
          content: 'GitHub Profile',
          url: developer.github,
          external: true,
        },
      ]}
    >
      <BlockStack gap="400">
        <Banner
          title="Online Store 2.0 & Liquid Engineering Focus"
          tone="info"
        >
          <Text as="p" variant="bodyMd">
            Dedicated 100% to the Shopify ecosystem. Specializing in custom Online Store 2.0 themes, Liquid architecture, regional checkout integrations, and automated order workflows.
          </Text>
        </Banner>

        <Layout>
          {/* Main 2/3 Column */}
          <Layout.Section>
            <BlockStack gap="400">
              {/* Profile Card */}
              <Card>
                <BlockStack gap="400">
                  <InlineStack align="space-between" blockAlign="start">
                    <InlineStack gap="300" blockAlign="center">
                      <Avatar
                        size="xl"
                        name={developer.name}
                        initials="GM"
                      />
                      <BlockStack gap="050">
                        <InlineStack gap="200" blockAlign="center">
                          <Text as="h2" variant="headingLg">
                            {developer.name}
                          </Text>
                          <Badge tone="success">Available for projects</Badge>
                        </InlineStack>
                        <Text as="p" variant="bodyMd" tone="subdued">
                          {developer.role} • Brand: {developer.brandName}
                        </Text>
                        <InlineStack gap="150" blockAlign="center">
                          <div style={{ width: '14px', height: '14px', display: 'flex', alignItems: 'center' }}>
                            <Icon source={LocationIcon} tone="subdued" />
                          </div>
                          <Text as="span" variant="bodySm" tone="subdued">
                            {developer.location}
                          </Text>
                          <Text as="span" variant="bodySm" tone="subdued">
                            • Direct reply &lt; 24h
                          </Text>
                        </InlineStack>
                      </BlockStack>
                    </InlineStack>

                    <ButtonGroup>
                      <Button variant="primary" onClick={() => navigate('/contact')}>
                        Hire GM
                      </Button>
                      <Button
                        url={developer.whatsappUrl}
                        external
                        icon={ExternalIcon}
                      >
                        WhatsApp
                      </Button>
                    </ButtonGroup>
                  </InlineStack>

                  <Divider />

                  <BlockStack gap="150">
                    <Text as="h3" variant="headingSm">
                      Summary & Specialization
                    </Text>
                    <Text as="p" variant="bodyMd">
                      {aboutMe.bioIntro}
                    </Text>
                  </BlockStack>

                  <Box
                    background="bg-surface-secondary"
                    padding="300"
                    borderRadius="200"
                  >
                    <InlineGrid columns={{ xs: 1, sm: 3 }} gap="300">
                      <BlockStack gap="050">
                        <Text as="span" variant="bodySm" tone="subdued">
                          Platform Focus
                        </Text>
                        <Text as="span" variant="headingSm">
                          Shopify Online Store 2.0
                        </Text>
                        <Text as="span" variant="bodyXs" tone="subdued">
                          Clean Liquid, JSON schemas & native cart drawer
                        </Text>
                      </BlockStack>

                      <BlockStack gap="050">
                        <Text as="span" variant="bodySm" tone="subdued">
                          Commercial Theme
                        </Text>
                        <Text as="span" variant="headingSm">
                          MAEVEN 2.0
                        </Text>
                        <Text as="span" variant="bodyXs" tone="subdued">
                          Built from scratch & sold commercially on Gumroad
                        </Text>
                      </BlockStack>

                      <BlockStack gap="050">
                        <Text as="span" variant="bodySm" tone="subdued">
                          Order Automation
                        </Text>
                        <Text as="span" variant="headingSm">
                          Make.com & Webhooks
                        </Text>
                        <Text as="span" variant="bodyXs" tone="subdued">
                          500+ weekly automated COD verifications
                        </Text>
                      </BlockStack>
                    </InlineGrid>
                  </Box>
                </BlockStack>
              </Card>

              {/* Background & Story */}
              <Card>
                <BlockStack gap="300">
                  <Text as="h2" variant="headingMd">
                    Background & Architecture Philosophy
                  </Text>
                  {aboutMe.bioFull.map((p, idx) => (
                    <Text as="p" variant="bodyMd" key={idx}>
                      {p}
                    </Text>
                  ))}
                </BlockStack>
              </Card>

              {/* Core Competencies */}
              <Card>
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Core Technical Competencies
                  </Text>

                  <InlineGrid columns={{ xs: 1, md: 2 }} gap="300">
                    {aboutMe.specialties.map((spec, idx) => (
                      <Box
                        key={idx}
                        background="bg-surface-secondary"
                        padding="300"
                        borderRadius="200"
                      >
                        <BlockStack gap="150">
                          <InlineStack align="space-between" blockAlign="center">
                            <Text as="h3" variant="headingSm">
                              {spec.title}
                            </Text>
                            <Badge tone="info">{spec.badge}</Badge>
                          </InlineStack>
                          <Text as="p" variant="bodySm" tone="subdued">
                            {spec.description}
                          </Text>
                        </BlockStack>
                      </Box>
                    ))}
                  </InlineGrid>
                </BlockStack>
              </Card>

              {/* Technical Stack */}
              <Card>
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Technical Stack & Tooling Matrix
                  </Text>

                  <InlineGrid columns={{ xs: 1, md: 2 }} gap="300">
                    {aboutMe.skillCategories.map((cat, idx) => (
                      <Box
                        key={idx}
                        background="bg-surface-secondary"
                        padding="300"
                        borderRadius="200"
                      >
                        <BlockStack gap="200">
                          <Text as="h3" variant="headingSm">
                            {cat.category}
                          </Text>
                          <InlineStack gap="150" wrap>
                            {cat.skills.map((skill, sIdx) => (
                              <Badge key={sIdx}>
                                {skill}
                              </Badge>
                            ))}
                          </InlineStack>
                        </BlockStack>
                      </Box>
                    ))}
                  </InlineGrid>
                </BlockStack>
              </Card>

              {/* Production Experience */}
              <Card>
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Production Experience & Track Record
                  </Text>

                  <BlockStack gap="300">
                    {aboutMe.experienceTimeline.map((item, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <Divider />}
                        <BlockStack gap="150">
                          <InlineStack align="space-between" blockAlign="center">
                            <InlineStack gap="150" blockAlign="center">
                              <Text as="h3" variant="headingSm">
                                {item.role}
                              </Text>
                              <Text as="span" variant="bodySm" tone="subdued">
                                — {item.company}
                              </Text>
                            </InlineStack>
                            <Badge tone="success">{item.period}</Badge>
                          </InlineStack>

                          <Text as="p" variant="bodySm" tone="subdued">
                            {item.highlight}
                          </Text>

                          <List type="bullet">
                            {item.details.map((detail, dIdx) => (
                              <List.Item key={dIdx}>{detail}</List.Item>
                            ))}
                          </List>
                        </BlockStack>
                      </React.Fragment>
                    ))}
                  </BlockStack>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>

          {/* Right 1/3 Sidebar */}
          <Layout.Section variant="oneThird">
            <BlockStack gap="400">
              {/* Contact Card */}
              <Card>
                <BlockStack gap="300">
                  <Text as="h2" variant="headingMd">
                    Developer Contact
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Direct communication with GM on WhatsApp or email without agency layers.
                  </Text>

                  <Divider />

                  <BlockStack gap="200">
                    <BlockStack gap="050">
                      <Text as="span" variant="bodyXs" tone="subdued">
                        Email Address
                      </Text>
                      <Text as="p" variant="bodySm">
                        {developer.email}
                      </Text>
                    </BlockStack>

                    <BlockStack gap="050">
                      <Text as="span" variant="bodyXs" tone="subdued">
                        WhatsApp / Phone
                      </Text>
                      <Text as="p" variant="bodySm">
                        {developer.phone}
                      </Text>
                    </BlockStack>

                    <BlockStack gap="050">
                      <Text as="span" variant="bodyXs" tone="subdued">
                        Location & Timezone
                      </Text>
                      <Text as="p" variant="bodySm">
                        {developer.location} (PKT)
                      </Text>
                    </BlockStack>

                    <BlockStack gap="050">
                      <Text as="span" variant="bodyXs" tone="subdued">
                        Typical Response Time
                      </Text>
                      <Badge tone="success">&lt; 24 hours</Badge>
                    </BlockStack>
                  </BlockStack>

                  <Divider />

                  <Button variant="primary" fullWidth onClick={() => navigate('/contact')}>
                    Open Scoping Form
                  </Button>
                  <Button
                    fullWidth
                    url={developer.whatsappUrl}
                    external
                    icon={ExternalIcon}
                  >
                    Chat on WhatsApp
                  </Button>
                </BlockStack>
              </Card>

              {/* Working Principles */}
              <Card>
                <BlockStack gap="300">
                  <Text as="h2" variant="headingMd">
                    Working Principles
                  </Text>
                  <List type="bullet">
                    {aboutMe.workingPrinciples.map((principle, idx) => (
                      <List.Item key={idx}>{principle}</List.Item>
                    ))}
                  </List>
                </BlockStack>
              </Card>

              {/* Commercial Theme Card */}
              <Card>
                <BlockStack gap="200">
                  <InlineStack align="space-between" blockAlign="center">
                    <Text as="h3" variant="headingSm">
                      MAEVEN OS 2.0
                    </Text>
                    <Badge tone="success">Built & Sold</Badge>
                  </InlineStack>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Commercial Shopify 2.0 theme built from scratch with clean Liquid schemas and zero app bloat.
                  </Text>
                  <InlineStack gap="150">
                    <Button size="micro" onClick={() => navigate('/themes')}>
                      Theme Specs
                    </Button>
                    <Button
                      size="micro"
                      url="https://mahargm.gumroad.com/l/maeven"
                      external
                      icon={ExternalIcon}
                    >
                      Gumroad
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
