import React, { useState, useCallback } from 'react';
import {
  Page,
  Layout,
  Card,
  Text,
  Badge,
  Button,
  Banner,
  FormLayout,
  TextField,
  Select,
  BlockStack,
  InlineStack,
  List,
  Divider,
} from '@shopify/polaris';
import { EmailFollowUpIcon, ExternalIcon } from '@shopify/polaris-icons';
import { PORTFOLIO_CONTENT } from '../data/content';

export const ContactPage: React.FC = () => {
  const { developer, scopingForm } = PORTFOLIO_CONTENT;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [projectType, setProjectType] = useState('theme-build');
  const [budgetRange, setBudgetRange] = useState('300-700');
  const [timeline, setTimeline] = useState('immediate');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [actionUrl, setActionUrl] = useState('');

  // Part 1, Issue 8: Submit button opens WhatsApp link with prefilled message and provides mailto fallback
  const handleSubmit = useCallback(() => {
    if (!name.trim()) return;

    const selectedTypeObj = scopingForm.projectTypes.find((t) => t.value === projectType);
    const selectedBudgetObj = scopingForm.budgetOptions.find((b) => b.value === budgetRange);
    const selectedTimelineObj = scopingForm.timelineOptions.find((t) => t.value === timeline);

    const messageLines = [
      `Hello GM (EzzCode), I'd like to discuss a Shopify project:`,
      `• Name: ${name}`,
      `• Email: ${email || 'Not provided'}`,
      `• Store URL: ${storeUrl || 'New build / unlaunched'}`,
      `• Service: ${selectedTypeObj ? selectedTypeObj.label : projectType}`,
      `• Budget: ${selectedBudgetObj ? selectedBudgetObj.label : budgetRange}`,
      `• Target Timeline: ${selectedTimelineObj ? selectedTimelineObj.label : timeline}`,
      details ? `• Details: ${details}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const encodedText = encodeURIComponent(messageLines);
    const waUrl = `https://wa.me/923494607275?text=${encodedText}`;

    setActionUrl(waUrl);
    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }, [name, email, storeUrl, projectType, budgetRange, timeline, details, scopingForm]);

  return (
    <Page
      fullWidth
      title="Project Scoping & Consultation"
      subtitle="Send your store requirements to discuss custom themes, section development, or COD automation."
    >
      <BlockStack gap="400">
        {isSubmitted && (
          <Banner
            title="Scoping Message Prepared"
            tone="success"
            onDismiss={() => setIsSubmitted(false)}
            action={{
              content: 'Send via WhatsApp Now',
              url: actionUrl,
              external: true,
            }}
            secondaryAction={{
              content: 'Send via Email Instead',
              url: `mailto:${developer.email}?subject=${encodeURIComponent(
                `Shopify Project Inquiry from ${name}`,
              )}&body=${encodeURIComponent(
                `Hello GM,\n\nName: ${name}\nEmail: ${email}\nStore: ${storeUrl}\nDetails: ${details}`,
              )}`,
              external: true,
            }}
          >
            <Text as="p" variant="bodyMd">
              Thank you, <strong>{name}</strong>! Your inquiry details have been formatted. Click
              above to launch WhatsApp directly, or email directly to{' '}
              <strong>{developer.email}</strong>.
            </Text>
          </Banner>
        )}

        <Layout>
          {/* Main Form */}
          <Layout.Section>
            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingMd">
                  Project Scoping Form
                </Text>
                <Text as="p" variant="bodySm" tone="subdued">
                  Fill in your project requirements below to receive a quick turnaround estimate.
                </Text>

                <Divider />

                <FormLayout>
                  <FormLayout.Group>
                    <TextField
                      label="Your Name"
                      value={name}
                      onChange={setName}
                      autoComplete="name"
                      placeholder="e.g. Sarah / Store Manager"
                      requiredIndicator
                    />
                    <TextField
                      label="Email or WhatsApp"
                      value={email}
                      onChange={setEmail}
                      autoComplete="email"
                      placeholder="name@store.com or phone number"
                    />
                  </FormLayout.Group>

                  <TextField
                    label="Current Store URL (optional)"
                    value={storeUrl}
                    onChange={setStoreUrl}
                    autoComplete="url"
                    placeholder="https://yourstore.com"
                    helpText="Helps me review your current theme and section architecture."
                  />

                  {/* Part 1, Issue 8: Short concise option labels that fit without truncation */}
                  <FormLayout.Group>
                    <Select
                      label="Service Needed"
                      options={scopingForm.projectTypes}
                      onChange={setProjectType}
                      value={projectType}
                    />
                    <Select
                      label="Estimated Budget"
                      options={scopingForm.budgetOptions}
                      onChange={setBudgetRange}
                      value={budgetRange}
                    />
                  </FormLayout.Group>

                  <Select
                    label="Target Launch Window"
                    options={scopingForm.timelineOptions}
                    onChange={setTimeline}
                    value={timeline}
                  />

                  <TextField
                    label="Project Details & Notes"
                    value={details}
                    onChange={setDetails}
                    multiline={4}
                    autoComplete="off"
                    placeholder="Describe specific features (e.g., custom cart drawer, variant swatches, Make.com scenario, or payment gateway)..."
                  />

                  <InlineStack align="end" gap="200">
                    <Button
                      variant="primary"
                      size="large"
                      icon={EmailFollowUpIcon}
                      onClick={handleSubmit}
                    >
                      Send Inquiry on WhatsApp
                    </Button>
                  </InlineStack>
                </FormLayout>
              </BlockStack>
            </Card>
          </Layout.Section>

          {/* Right Column: Direct Info & What Happens Next */}
          <Layout.Section variant="oneThird">
            <BlockStack gap="400">
              <Card>
                <BlockStack gap="300">
                  <Text as="h3" variant="headingMd">
                    Direct Contact Details
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Feel free to message directly:
                  </Text>
                  <Divider />
                  <BlockStack gap="150">
                    <Text as="span" variant="bodySm" fontWeight="semibold">
                      Developer:
                    </Text>
                    <Text as="span" variant="bodyMd">
                      {developer.name}
                    </Text>
                    <Text as="span" variant="bodySm" tone="subdued">
                      Brand: {developer.brandName}
                    </Text>
                  </BlockStack>
                  <BlockStack gap="150">
                    <Text as="span" variant="bodySm" fontWeight="semibold">
                      Email:
                    </Text>
                    <Text as="span" variant="bodyMd">
                      {developer.email}
                    </Text>
                  </BlockStack>
                  <BlockStack gap="150">
                    <Text as="span" variant="bodySm" fontWeight="semibold">
                      WhatsApp / Phone:
                    </Text>
                    <Text as="span" variant="bodyMd">
                      {developer.phone}
                    </Text>
                  </BlockStack>
                  <BlockStack gap="150">
                    <Text as="span" variant="bodySm" fontWeight="semibold">
                      Location:
                    </Text>
                    <Text as="span" variant="bodyMd">
                      {developer.location}
                    </Text>
                  </BlockStack>
                  <BlockStack gap="150">
                    <Text as="span" variant="bodySm" fontWeight="semibold">
                      Availability:
                    </Text>
                    <InlineStack gap="100">
                      <Badge tone="success">{developer.availabilityBadge}</Badge>
                    </InlineStack>
                  </BlockStack>

                  <Button
                    fullWidth
                    variant="primary"
                    icon={ExternalIcon}
                    url={developer.whatsappUrl}
                    external
                  >
                    Direct WhatsApp Chat
                  </Button>
                </BlockStack>
              </Card>

              {/* Part 3: What happens next describing real steps GM can do */}
              <Card>
                <BlockStack gap="300">
                  <Text as="h3" variant="headingMd">
                    What Happens Next?
                  </Text>
                  <List type="number">
                    {scopingForm.whatHappensNext.map((step, idx) => (
                      <List.Item key={idx}>{step}</List.Item>
                    ))}
                  </List>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
};
