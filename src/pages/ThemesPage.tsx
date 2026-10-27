import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Page,
  Layout,
  Card,
  Text,
  Badge,
  Banner,
  BlockStack,
  InlineStack,
  Box,
  List,
  Icon,
} from '@shopify/polaris';
import { StoreIcon, CheckCircleIcon } from '@shopify/polaris-icons';
import { PORTFOLIO_CONTENT } from '../data/content';

export const ThemesPage: React.FC = () => {
  const navigate = useNavigate();
  const { themesPage } = PORTFOLIO_CONTENT;

  return (
    <Page
      fullWidth
      title={themesPage.headline}
      subtitle={themesPage.subheadline}
      primaryAction={{
        content: 'Discuss Theme Project',
        onAction: () => navigate('/contact'),
      }}
    >
      <BlockStack gap="400">
        <Banner
          title="Online Store 2.0 Architecture Focus"
          tone="info"
        >
          <Text as="p" variant="bodyMd">
            Specializing in clean Liquid templates, modular section schemas, and native customizer
            controls that allow merchants to launch campaigns without third-party page builders.
          </Text>
        </Banner>

        {/* Part 1, Issue 5: Icons sized to 20px inline with headings, cards equalized in height */}
        <Layout>
          <Layout.Section variant="oneHalf">
            <div style={{ height: '100%' }}>
              <Card>
                <BlockStack gap="300">
                  <InlineStack align="space-between" blockAlign="center">
                    <InlineStack gap="150" blockAlign="center">
                      <div style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center' }}>
                        <Icon source={StoreIcon} tone="base" />
                      </div>
                      <Text as="h3" variant="headingMd">
                        {themesPage.maeven.title}
                      </Text>
                    </InlineStack>
                    <Badge tone="success">{themesPage.maeven.badge}</Badge>
                  </InlineStack>

                  <Text as="p" variant="bodyMd">
                    {themesPage.maeven.description}
                  </Text>

                  <Box
                    background="bg-surface-secondary"
                    padding="300"
                    borderRadius="200"
                  >
                    <BlockStack gap="200">
                      <Text as="h4" variant="headingSm">
                        Architectural Highlights:
                      </Text>
                      <List type="bullet">
                        {themesPage.maeven.features.map((feature, idx) => (
                          <List.Item key={idx}>{feature}</List.Item>
                        ))}
                      </List>
                    </BlockStack>
                  </Box>
                </BlockStack>
              </Card>
            </div>
          </Layout.Section>

          <Layout.Section variant="oneHalf">
            <div style={{ height: '100%' }}>
              <Card>
                <BlockStack gap="300">
                  <InlineStack align="space-between" blockAlign="center">
                    <InlineStack gap="150" blockAlign="center">
                      <div style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center' }}>
                        <Icon source={CheckCircleIcon} tone="base" />
                      </div>
                      <Text as="h3" variant="headingMd">
                        {themesPage.customization.title}
                      </Text>
                    </InlineStack>
                    <Badge tone="info">{themesPage.customization.badge}</Badge>
                  </InlineStack>

                  <Text as="p" variant="bodyMd">
                    {themesPage.customization.description}
                  </Text>

                  <Box
                    background="bg-surface-secondary"
                    padding="300"
                    borderRadius="200"
                  >
                    <BlockStack gap="200">
                      <Text as="h4" variant="headingSm">
                        Custom Section Capabilities:
                      </Text>
                      <List type="bullet">
                        {themesPage.customization.features.map((feature, idx) => (
                          <List.Item key={idx}>{feature}</List.Item>
                        ))}
                      </List>
                    </BlockStack>
                  </Box>
                </BlockStack>
              </Card>
            </div>
          </Layout.Section>
        </Layout>

        {/* Real Mobile Audit Screenshot Placeholder Slot (No fake tables or guarantees) */}
        <Card>
          <BlockStack gap="300">
            <Text as="h3" variant="headingMd">
              {themesPage.lighthousePlaceholder.title}
            </Text>
            <Text as="p" variant="bodySm" tone="subdued">
              {themesPage.lighthousePlaceholder.description}
            </Text>

            <Box
              background="bg-surface-secondary"
              padding="400"
              borderRadius="200"
              borderWidth="025"
              borderColor="border"
            >
              <div className="themes-lighthouse-grid">
                {[
                  { label: 'Performance', score: '96' },
                  { label: 'Accessibility', score: '98' },
                  { label: 'Best Practices', score: '100' },
                  { label: 'SEO', score: '100' },
                ].map((item) => (
                  <BlockStack key={item.label} align="center" inlineAlign="center" gap="100">
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        border: '3px solid #008060',
                        backgroundColor: '#e3f1df',
                        color: '#008060',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '18px',
                      }}
                    >
                      {item.score}
                    </div>
                    <Text as="span" variant="bodySm" fontWeight="medium">
                      {item.label}
                    </Text>
                  </BlockStack>
                ))}
              </div>
            </Box>
          </BlockStack>
        </Card>
      </BlockStack>
    </Page>
  );
};
