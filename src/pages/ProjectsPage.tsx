import React, { useState, useMemo, useCallback } from 'react';
import {
  Page,
  Card,
  IndexTable,
  Text,
  Badge,
  Button,
  Tabs,
  TextField,
  Modal,
  BlockStack,
  InlineStack,
  Box,
  Divider,
} from '@shopify/polaris';
import { ViewIcon, SearchIcon, ExternalIcon } from '@shopify/polaris-icons';
import { PORTFOLIO_CONTENT, type ProjectItem } from '../data/content';

export const ProjectsPage: React.FC = () => {
  const { projects, flags } = PORTFOLIO_CONTENT;

  // Filter projects by employer permission flag
  const activeProjects = useMemo(() => {
    return projects.filter((p) => flags.showImroziaSerene || !p.isImroziaSerene);
  }, [projects, flags.showImroziaSerene]);

  const [selectedTab, setSelectedTab] = useState(0);
  const [queryValue, setQueryValue] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Generate dynamic category tabs based on active projects
  const categories = useMemo(() => {
    const set = new Set<string>();
    activeProjects.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, [activeProjects]);

  const tabs = useMemo(() => {
    return [
      {
        id: 'all-projects',
        content: 'All Projects',
        badge: `${activeProjects.length}`,
      },
      ...categories.map((cat, idx) => ({
        id: `cat-${idx}`,
        content: cat,
        badge: `${activeProjects.filter((p) => p.category === cat).length}`,
      })),
    ];
  }, [activeProjects, categories]);

  const handleTabChange = useCallback((selectedTabIndex: number) => {
    setSelectedTab(selectedTabIndex);
  }, []);

  const handleQueryChange = useCallback((value: string) => {
    setQueryValue(value);
  }, []);

  // Filter projects by active tab and search query
  const filteredProjects = useMemo(() => {
    return activeProjects.filter((project) => {
      let matchesTab = true;
      if (selectedTab > 0 && categories[selectedTab - 1]) {
        matchesTab = project.category === categories[selectedTab - 1];
      }

      const matchesQuery =
        project.name.toLowerCase().includes(queryValue.toLowerCase()) ||
        project.client.toLowerCase().includes(queryValue.toLowerCase()) ||
        project.stack.some((t) => t.toLowerCase().includes(queryValue.toLowerCase())) ||
        project.summary.toLowerCase().includes(queryValue.toLowerCase());

      return matchesTab && matchesQuery;
    });
  }, [activeProjects, selectedTab, categories, queryValue]);

  const resourceName = {
    singular: 'project',
    plural: 'projects',
  };

  const rowMarkup = filteredProjects.map(
    (
      { id, name, client, category, keyResult, stack, status, statusTone },
      index,
    ) => (
      <IndexTable.Row id={id} key={id} position={index}>
        <IndexTable.Cell>
          <BlockStack gap="050">
            <Text variant="bodyMd" fontWeight="semibold" as="span">
              {name}
            </Text>
            <Text variant="bodySm" tone="subdued" as="span">
              {client}
            </Text>
          </BlockStack>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge>{category}</Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodySm" as="span">
            {keyResult}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <InlineStack gap="100">
            {stack.slice(0, 2).map((tech) => (
              <Badge key={tech} size="small">
                {tech}
              </Badge>
            ))}
            {stack.length > 2 && (
              <Badge size="small">{`+${stack.length - 2}`}</Badge>
            )}
          </InlineStack>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <InlineStack gap="200" align="end" blockAlign="center" wrap={false}>
            <span style={{ whiteSpace: 'nowrap' }}>
              <Badge tone={statusTone}>{status}</Badge>
            </span>
            <Button
              size="micro"
              variant="tertiary"
              icon={ViewIcon}
              onClick={() => {
                const fullProject = activeProjects.find((p) => p.id === id);
                if (fullProject) setActiveModalProject(fullProject);
              }}
            >
              Details
            </Button>
          </InlineStack>
        </IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <Page
      fullWidth
      title="Projects & Case Studies"
      subtitle={`Verified Shopify theme builds and technical solutions (${activeProjects.length} active).`}
    >
      <BlockStack gap="400">
        <Card padding="0">
          {tabs.length > 1 && (
            <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} />
          )}

          <Box padding="300" borderBlockStartWidth="025" borderColor="border">
            <TextField
              label="Filter projects"
              labelHidden
              value={queryValue}
              onChange={handleQueryChange}
              placeholder="Search by project name or technology (e.g. Liquid, Tailwind, Make.com)..."
              prefix={<SearchIcon />}
              clearButton
              onClearButtonClick={() => setQueryValue('')}
              autoComplete="off"
            />
          </Box>

          <div className="mobile-table-hint">
            <span>⇄ Swipe horizontally to see all columns & details</span>
          </div>

          <div className="ezzcode-table-scroll-container">
            <IndexTable
              selectable={false}
              resourceName={resourceName}
              itemCount={filteredProjects.length}
              headings={[
                { title: 'Project' },
                { title: 'Type' },
                { title: 'Key Result' },
                { title: 'Stack' },
                { title: 'Status', alignment: 'end' },
              ]}
            >
              {rowMarkup}
            </IndexTable>
          </div>
        </Card>
      </BlockStack>

      {/* Case Study Detailed Modal */}
      {activeModalProject && (
        <Modal
          open={Boolean(activeModalProject)}
          onClose={() => setActiveModalProject(null)}
          title={`${activeModalProject.name} — Project Details`}
          primaryAction={{
            content: 'Close',
            onAction: () => setActiveModalProject(null),
          }}
        >
          <Modal.Section>
            <BlockStack gap="400">
              <InlineStack align="space-between" blockAlign="center">
                <InlineStack gap="200" blockAlign="center">
                  <Badge tone={activeModalProject.statusTone}>
                    {activeModalProject.status}
                  </Badge>
                  <Badge>{activeModalProject.category}</Badge>
                </InlineStack>
                <Text as="span" variant="bodySm" tone="subdued">
                  Client: {activeModalProject.client}
                </Text>
              </InlineStack>

              <Box
                background="bg-surface-secondary"
                padding="300"
                borderRadius="200"
              >
                <BlockStack gap="100">
                  <Text as="h4" variant="headingSm">
                    Key Result
                  </Text>
                  <Text as="p" variant="bodyMd" tone="subdued">
                    <em>{activeModalProject.keyResult}</em>
                  </Text>
                </BlockStack>
              </Box>

              <BlockStack gap="200">
                <Text as="h4" variant="headingSm">
                  Overview
                </Text>
                <Text as="p" variant="bodyMd">
                  {activeModalProject.summary}
                </Text>
              </BlockStack>

              <Divider />

              <BlockStack gap="200">
                <Text as="h4" variant="headingSm">
                  The Problem
                </Text>
                <Text as="p" variant="bodyMd">
                  {activeModalProject.problem}
                </Text>
              </BlockStack>

              <Divider />

              <BlockStack gap="200">
                <Text as="h4" variant="headingSm">
                  What I Built
                </Text>
                <Text as="p" variant="bodyMd">
                  {activeModalProject.whatIBuilt}
                </Text>
              </BlockStack>

              <Divider />

              <BlockStack gap="200">
                <Text as="h4" variant="headingSm">
                  Tech Stack
                </Text>
                <InlineStack gap="150" wrap>
                  {activeModalProject.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </InlineStack>
              </BlockStack>

              <Divider />

              <BlockStack gap="200">
                <Text as="h4" variant="headingSm">
                  Screenshots & Media
                </Text>
                <Text as="p" variant="bodySm" tone="subdued">
                  <em>{activeModalProject.screenshotsPlaceholder}</em>
                </Text>
              </BlockStack>

              <Divider />

              <BlockStack gap="200">
                <Text as="h4" variant="headingSm">
                  Live Link
                </Text>
                {activeModalProject.liveLinkPlaceholder.startsWith('https://') ? (
                  <Button
                    variant="plain"
                    icon={ExternalIcon}
                    url={activeModalProject.liveLinkPlaceholder}
                    external
                  >
                    {activeModalProject.liveLinkPlaceholder}
                  </Button>
                ) : (
                  <Text as="p" variant="bodySm" tone="subdued">
                    <em>{activeModalProject.liveLinkPlaceholder}</em>
                  </Text>
                )}
              </BlockStack>
            </BlockStack>
          </Modal.Section>
        </Modal>
      )}
    </Page>
  );
};
