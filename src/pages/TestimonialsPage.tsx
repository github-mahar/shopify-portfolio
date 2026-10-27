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
  Avatar,
  Divider,
} from '@shopify/polaris';
import { PORTFOLIO_CONTENT } from '../data/content';

export const TestimonialsPage: React.FC = () => {
  const navigate = useNavigate();
  const { testimonials, developer } = PORTFOLIO_CONTENT;

  return (
    <Page
      title="Client Reviews & Feedback"
      subtitle="Verified feedback from store owners and merchants."
      primaryAction={{
        content: 'Hire Developer',
        onAction: () => navigate('/contact'),
      }}
    >
      <BlockStack gap="400">
        <Banner
          title="Merchant Reviews"
          tone="info"
        >
          <Text as="p" variant="bodyMd">
            Real merchant reviews will be displayed here as commercial projects and theme builds
            conclude. Contact {developer.name} directly for questions regarding past work.
          </Text>
        </Banner>

        {testimonials.length === 0 ? (
          <Card>
            <BlockStack gap="200">
              <Text as="h3" variant="headingMd">
                No Public Reviews Yet
              </Text>
              <Text as="p" variant="bodyMd" tone="subdued">
                Client reviews will be added here once verified.
              </Text>
            </BlockStack>
          </Card>
        ) : (
          <Layout>
            {testimonials.map((t) => (
              <Layout.Section key={t.id} variant="oneHalf">
                <div style={{ height: '100%' }}>
                  <Card>
                    <BlockStack gap="300">
                      {/* Part 1, Issue 6: wrap={false} prevents badge wrapping */}
                      <InlineStack align="space-between" blockAlign="center" wrap={false}>
                        <InlineStack gap="200" blockAlign="center">
                          <Avatar name={t.clientName} initials={t.avatarInitials} size="md" />
                          <BlockStack gap="050">
                            <Text as="h3" variant="headingSm" fontWeight="semibold">
                              {t.clientName}
                            </Text>
                            <Text as="p" variant="bodySm" tone="subdued">
                              {t.role} • {t.company}
                            </Text>
                          </BlockStack>
                        </InlineStack>
                        <Badge tone="success">Verified</Badge>
                      </InlineStack>

                      {/* Empty gray bar removed */}

                      <Text as="p" variant="bodyMd">
                        &ldquo;{t.quote}&rdquo;
                      </Text>

                      <Divider />

                      <Text as="span" variant="bodySm" tone="subdued">
                        Store: {t.company}
                      </Text>
                    </BlockStack>
                  </Card>
                </div>
              </Layout.Section>
            ))}
          </Layout>
        )}
      </BlockStack>
    </Page>
  );
};
