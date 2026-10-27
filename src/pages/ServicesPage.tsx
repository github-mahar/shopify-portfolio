import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Page,
  Layout,
  Card,
  Text,
  Badge,
  Button,
  Banner,
  BlockStack,
  InlineStack,
  Box,
  List,
  Divider,
} from '@shopify/polaris';
import { ChatIcon } from '@shopify/polaris-icons';
import { PORTFOLIO_CONTENT } from '../data/content';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const { services } = PORTFOLIO_CONTENT;

  return (
    <Page
      fullWidth
      title="Services & Capabilities"
      subtitle="Shopify theme development, section architecture, payment gateways, and Make.com automation."
      primaryAction={{
        content: 'Scope a Project',
        onAction: () => navigate('/contact'),
      }}
    >
      <BlockStack gap="400">
        <Banner
          title="Direct Front-End & Automation Support"
          tone="info"
        >
          <Text as="p" variant="bodyMd">
            Hands-on Shopify development with direct communication on WhatsApp or email. Focused
            exclusively on clean theme code and reliable order automation.
          </Text>
        </Banner>

        <Layout>
          {services.map((service) => (
            <Layout.Section key={service.id} variant="oneHalf">
              <div style={{ height: '100%' }}>
                <Card>
                  <BlockStack gap="300">
                    <InlineStack align="space-between" blockAlign="start">
                      <BlockStack gap="100">
                        <Text as="h2" variant="headingMd">
                          {service.title}
                        </Text>
                        <Text as="p" variant="bodySm" tone="subdued">
                          {service.tagline}
                        </Text>
                      </BlockStack>
                      <Badge tone="info">
                        {`Turnaround: ${service.turnaroundBadge}`}
                      </Badge>
                    </InlineStack>

                    <Text as="p" variant="bodyMd">
                      {service.description}
                    </Text>

                    <Box
                      background="bg-surface-secondary"
                      padding="300"
                      borderRadius="200"
                    >
                      <BlockStack gap="150">
                        <Text as="h3" variant="headingSm">
                          Deliverables:
                        </Text>
                        <List type="bullet">
                          {service.deliverables.map((item, idx) => (
                            <List.Item key={idx}>{item}</List.Item>
                          ))}
                        </List>
                      </BlockStack>
                    </Box>

                    <Divider />

                    {/* Part 1, Issue 7: Max 4 tags with Polaris token spacing */}
                    <InlineStack align="space-between" blockAlign="center">
                      <InlineStack gap="150" wrap>
                        {service.stack.slice(0, 4).map((tech) => (
                          <Badge key={tech} size="small">
                            {tech}
                          </Badge>
                        ))}
                      </InlineStack>
                      <Button
                        size="micro"
                        icon={ChatIcon}
                        onClick={() => navigate('/contact')}
                      >
                        Inquire
                      </Button>
                    </InlineStack>
                  </BlockStack>
                </Card>
              </div>
            </Layout.Section>
          ))}
        </Layout>
      </BlockStack>
    </Page>
  );
};
