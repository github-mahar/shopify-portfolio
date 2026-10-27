import React, { useMemo } from 'react';
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

export const IntegrationsPage: React.FC = () => {
  const navigate = useNavigate();
  const { integrations, flags } = PORTFOLIO_CONTENT;

  const activeIntegrations = useMemo(() => {
    return integrations.filter((i) => flags.showImroziaSerene || !i.isImroziaSerene);
  }, [integrations, flags.showImroziaSerene]);

  return (
    <Page
      fullWidth
      title="Integrations & Automation"
      subtitle="Connecting payment gateways and automating order workflows with Make.com and REST APIs."
      primaryAction={{
        content: 'Discuss an Integration',
        onAction: () => navigate('/contact'),
      }}
    >
      <BlockStack gap="400">
        <Banner
          title="Payment Gateways & Order Automation Focus"
          tone="info"
        >
          <Text as="p" variant="bodyMd">
            Specializing in regional payment gateway setup and Make.com automation scenarios for
            high-volume Cash on Delivery (COD) order verification and dispatch.
          </Text>
        </Banner>

        <Layout>
          {activeIntegrations.map((item) => (
            <Layout.Section key={item.id}>
              <Card>
                <BlockStack gap="300">
                  <InlineStack align="space-between" blockAlign="start">
                    <BlockStack gap="100">
                      <InlineStack gap="200" blockAlign="center">
                        <Text as="h2" variant="headingLg">
                          {item.name}
                        </Text>
                        <Badge tone={item.statusTone}>{item.status}</Badge>
                      </InlineStack>
                      <Text as="p" variant="bodyMd" tone="subdued">
                        {item.tagline}
                      </Text>
                    </BlockStack>
                  </InlineStack>

                  <Text as="p" variant="bodyMd">
                    {item.description}
                  </Text>

                  <Box
                    background="bg-surface-secondary"
                    padding="300"
                    borderRadius="200"
                  >
                    <BlockStack gap="200">
                      <Text as="h3" variant="headingSm">
                        Key Capabilities & Deliverables:
                      </Text>
                      <List type="bullet">
                        {item.features.map((feature, idx) => (
                          <List.Item key={idx}>{feature}</List.Item>
                        ))}
                      </List>
                    </BlockStack>
                  </Box>

                  <Divider />

                  {/* Part 1, Issue 7: Limit tags to 4 max per card with Polaris token spacing */}
                  <BlockStack gap="150">
                    <Text as="h4" variant="headingSm" tone="subdued">
                      Technologies & Protocols (Max 4)
                    </Text>
                    <InlineStack gap="150" wrap>
                      {item.stack.slice(0, 4).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </InlineStack>
                  </BlockStack>

                  <Divider />

                  <InlineStack align="space-between" blockAlign="center" gap="200">
                    <Text as="span" variant="bodySm" tone="subdued">
                      Key result: {item.keyDeliverable}
                    </Text>
                    <Button
                      icon={ChatIcon}
                      onClick={() => navigate('/contact')}
                    >
                      Inquire About Integration
                    </Button>
                  </InlineStack>
                </BlockStack>
              </Card>
            </Layout.Section>
          ))}
        </Layout>
      </BlockStack>
    </Page>
  );
};
