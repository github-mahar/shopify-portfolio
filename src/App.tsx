import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link as ReactRouterLink } from 'react-router-dom';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import type { LinkLikeComponentProps } from '@shopify/polaris/build/ts/src/utilities/link/types';

import { AdminShell } from './components/AdminShell';
import { OverviewPage } from './pages/OverviewPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { ThemesPage } from './pages/ThemesPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { PORTFOLIO_CONTENT } from './data/content';

// Polaris custom link component integrated with React Router
const PolarisRouterLink: React.FC<LinkLikeComponentProps> = ({
  url,
  children,
  external,
  ...rest
}) => {
  if (external || url.startsWith('http') || url.startsWith('mailto:')) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <ReactRouterLink to={url} {...rest}>
      {children}
    </ReactRouterLink>
  );
};

export default function App() {
  const { flags } = PORTFOLIO_CONTENT;

  return (
    <AppProvider i18n={enTranslations} linkComponent={PolarisRouterLink}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminShell />}>
            <Route index element={<OverviewPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="integrations" element={<IntegrationsPage />} />
            <Route path="apps" element={<Navigate to="/integrations" replace />} />
            <Route path="themes" element={<ThemesPage />} />
            <Route path="services" element={<ServicesPage />} />
            {flags.showTestimonials && (
              <Route path="testimonials" element={<TestimonialsPage />} />
            )}
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
