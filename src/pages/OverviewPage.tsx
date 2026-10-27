import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ClockIcon,
  PlusIcon,
  MicrophoneIcon,
  ExternalIcon,
} from '@shopify/polaris-icons';
import { PORTFOLIO_CONTENT } from '../data/content';

export const OverviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { developer, projects } = PORTFOLIO_CONTENT;

  // Sidekick interactive input state
  const [sidekickQuery, setSidekickQuery] = useState('');
  const [sidekickAnswer, setSidekickAnswer] = useState<string | null>(null);

  const handleSidekickSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const q = sidekickQuery.trim().toLowerCase();
    if (!q) return;

    if (q.includes('about') || q.includes('who') || q.includes('intro') || q.includes('gm') || q.includes('mahar') || q.includes('bio')) {
      setSidekickAnswer(
        `I am Mahar Ghulam Muhammad (GM), a specialized Shopify Front-End Developer & founder of EzzCode based in Lahore, Pakistan. I focus 100% on Shopify 2.0 theme architecture, clean Liquid, payment gateways, and Make.com COD automations. Head over to the About Me page to see my full journey, skills, and client work!`,
      );
    } else if (q.includes('maeven') || q.includes('theme')) {
      setSidekickAnswer(
        'MAEVEN is a custom Shopify Online Store 2.0 theme built from scratch with clean Liquid schemas, responsive collection filters, and native cart drawer. Available live on Gumroad.',
      );
    } else if (q.includes('imrozia') || q.includes('serene')) {
      setSidekickAnswer(
        'Imrozia Serene is a high-volume apparel brand where GM engineered front-end Liquid 2.0 architecture, custom collection filtering, payment gateway integration, and COD automation.',
      );
    } else if (q.includes('cod') || q.includes('automation') || q.includes('make')) {
      setSidekickAnswer(
        'COD Order Automation connects Shopify webhooks directly to Make.com, auto-verifying cash on delivery orders and updating fulfillment tags seamlessly without manual staff calls.',
      );
    } else if (q.includes('hire') || q.includes('contact') || q.includes('rate') || q.includes('price')) {
      setSidekickAnswer(
        `GM is available for Shopify theme development, custom Liquid sections, and Make.com automations. Reach out directly on WhatsApp at ${developer.phone} or via the Scoping Form.`,
      );
    } else {
      setSidekickAnswer(
        `Sidekick: GM (EzzCode) is a specialized Shopify front-end developer based in Lahore, Pakistan. Stack includes Liquid, JavaScript, Tailwind CSS, REST APIs, and Make.com workflows.`,
      );
    }
  };

  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Top Metrics Strip (Exact match to screenshot) */}
      <div className="shopify-metrics-bar">
        {/* Left: Timeframe dropdown selector */}
        <div className="metrics-left-selector">
          <span>Last 30 days - All channels</span>
          <span style={{ fontSize: '10px' }}>▾</span>
        </div>

        {/* Center: Real Sales & Performance Metrics */}
        <div className="metrics-group">
          <div className="metric-item">
            <span className="metric-label">Gross sales</span>
            <div className="metric-value-row">
              <span className="metric-number">PKR 16.07M</span>
              <span className="metric-trend up">↗ +122%</span>
            </div>
          </div>

          <div className="metric-item">
            <span className="metric-label">Total sales</span>
            <div className="metric-value-row">
              <span className="metric-number">PKR 15.59M</span>
              <span className="metric-trend up">↗ +911%</span>
            </div>
          </div>

          <div className="metric-item">
            <span className="metric-label">Orders</span>
            <div className="metric-value-row">
              <span className="metric-number">569</span>
              <span className="metric-trend up">↗ +33%</span>
            </div>
          </div>

          <div className="metric-item">
            <span className="metric-label">Conversion rate</span>
            <div className="metric-value-row">
              <span className="metric-number">0.15%</span>
              <span className="metric-trend down">↘ -40%</span>
            </div>
          </div>
        </div>

        {/* Right: Live Visitors Status */}
        <div className="metrics-right-live">
          <span>Live visitors 54</span>
          <span className="live-dot" />

          {/* Dotted map SVG watermark */}
          <svg
            viewBox="0 0 100 50"
            width="70"
            height="35"
            style={{
              position: 'absolute',
              right: '-10px',
              top: '-6px',
              opacity: 0.15,
              pointerEvents: 'none',
            }}
          >
            <circle cx="10" cy="15" r="1.5" fill="#000" />
            <circle cx="20" cy="18" r="1.5" fill="#000" />
            <circle cx="30" cy="12" r="1.5" fill="#000" />
            <circle cx="45" cy="22" r="1.5" fill="#000" />
            <circle cx="60" cy="15" r="1.5" fill="#000" />
            <circle cx="75" cy="25" r="1.5" fill="#000" />
            <circle cx="85" cy="18" r="1.5" fill="#000" />
            <circle cx="50" cy="35" r="1.5" fill="#000" />
            <circle cx="68" cy="38" r="1.5" fill="#000" />
          </svg>
        </div>
      </div>

      {/* Hero Greeting Section */}
      <section className="shopify-hero-section">
        <h1 className="shopify-hero-title">Hey there!</h1>
        <h2 className="shopify-hero-subtitle">Let’s continue growing your business.</h2>
      </section>

      {/* Sidekick Input Box */}
      <div className="shopify-sidekick-container">
        <form className="shopify-sidekick-box" onSubmit={handleSidekickSubmit}>
          <div className="sidekick-left">
            <div className="sidekick-avatar" title="Shopify Sidekick AI">
              <span style={{ fontSize: '13px' }}>🤖</span>
            </div>
            <input
              type="text"
              className="sidekick-input"
              placeholder="Work with Sidekick"
              value={sidekickQuery}
              onChange={(e) => setSidekickQuery(e.target.value)}
              aria-label="Ask Sidekick about GM's portfolio"
            />
          </div>

          <div className="sidekick-actions">
            <div
              className="sidekick-recents"
              onClick={() => {
                setSidekickQuery('Tell me about MAEVEN Theme');
                setSidekickAnswer(
                  'MAEVEN is a custom Shopify Online Store 2.0 theme built from scratch with clean Liquid schemas, responsive collection filters, and native cart drawer. Sold directly to merchants on Gumroad.',
                );
              }}
            >
              <span style={{ width: '13px', height: '13px', display: 'flex' }}><ClockIcon /></span>
              <span>Recents</span>
            </div>
            <div className="sidekick-divider" />
            <button
              type="button"
              className="sidekick-icon-btn"
              title="New Prompt"
              onClick={() => {
                setSidekickQuery('');
                setSidekickAnswer(null);
              }}
            >
              <span style={{ width: '14px', height: '14px', display: 'flex' }}><PlusIcon /></span>
            </button>
            <button
              type="button"
              className="sidekick-icon-btn"
              title="Voice Prompt"
              onClick={() => {
                setSidekickQuery('Shopify 2.0 developer Lahore');
                handleSidekickSubmit();
              }}
            >
              <span style={{ width: '14px', height: '14px', display: 'flex' }}><MicrophoneIcon /></span>
            </button>
          </div>
        </form>

        {/* Quick Prompt Pills (Matching Screenshot) */}
        <div className="sidekick-prompt-pills">
          <button
            type="button"
            className="prompt-pill"
            onClick={() => navigate('/about')}
          >
            <span>About GM</span>
          </button>

          <button
            type="button"
            className="prompt-pill"
            onClick={() => navigate('/projects')}
          >
            <span>Fulfill orders</span>
            <span className="prompt-pill-badge">{projects.length}</span>
          </button>

          <button
            type="button"
            className="prompt-pill"
            onClick={() => navigate('/integrations')}
          >
            <span>Capture payments</span>
            <span className="prompt-pill-badge">50+</span>
          </button>

          <button
            type="button"
            className="prompt-pill"
            onClick={() => {
              setSidekickQuery('Explore MAEVEN 2.0');
              setSidekickAnswer(
                'MAEVEN Theme: Custom Shopify 2.0 theme built with zero apps needed, fast Liquid architecture, and native cart drawer. Check out the live Gumroad listing.',
              );
            }}
          >
            <span>Explore MAEVEN 2.0</span>
          </button>

          <a
            href={developer.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="prompt-pill"
            style={{ textDecoration: 'none' }}
          >
            <span>Hire on WhatsApp</span>
            <span style={{ color: '#008060' }}>↗</span>
          </a>
        </div>
      </div>

      {/* Sidekick Instant Answer Container if active */}
      {sidekickAnswer && (
        <div className="sidekick-answer-box">
          <div className="sidekick-answer-header">
            <span>✨ Sidekick Response</span>
            <span
              style={{ cursor: 'pointer', color: '#888', fontSize: '11px' }}
              onClick={() => setSidekickAnswer(null)}
            >
              Close
            </span>
          </div>
          <p className="sidekick-answer-text">{sidekickAnswer}</p>
        </div>
      )}

      {/* 3 Cards Grid (Recreating screenshot cards with generated 3D assets) */}
      <section className="shopify-cards-grid">
        {/* Card 1: Pakistan Store Optimization */}
        <div className="shopify-card">
          <div className="shopify-card-media">
            <img
              src="/assets/pakistan_store.jpg"
              alt="Optimize your store in Pakistan"
              className="shopify-card-img"
            />
          </div>
          <div className="shopify-card-body">
            <div className="shopify-card-status">
              <span>⚪</span>
              <span>0 tasks completed</span>
            </div>
            <h3 className="shopify-card-title">Optimize your store in Pakistan</h3>
            <p className="shopify-card-desc">
              Get set up with Sidekick's step-by-step guidance, customized for your region.
              Proven storefront engineering on Imrozia Serene, Sahfa.pk, and Tiny Todzz.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="shopify-card-action-btn"
                onClick={() => navigate('/projects')}
              >
                View Storefronts
              </button>
              <a
                href="https://imroziaserene.com"
                target="_blank"
                rel="noreferrer"
                className="shopify-card-action-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Imrozia Serene</span>
                <span style={{ width: '12px', height: '12px', display: 'flex' }}><ExternalIcon /></span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: WhatsApp Marketing & COD Automation */}
        <div className="shopify-card">
          <div className="shopify-card-media">
            <img
              src="/assets/whatsapp_marketing.jpg"
              alt="Add WhatsApp as a marketing channel"
              className="shopify-card-img"
            />
          </div>
          <div className="shopify-card-body">
            <h3 className="shopify-card-title">Add WhatsApp as a marketing channel</h3>
            <p className="shopify-card-desc">
              Send timely offers on WhatsApp using Shopify Messaging to connect with customers and
              grow sales. Includes automated Make.com COD order confirmation flows.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className="shopify-card-action-btn"
                onClick={() => navigate('/integrations')}
              >
                View COD Automation
              </button>
              <a
                href={developer.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="shopify-card-action-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Chat with GM</span>
                <span style={{ width: '12px', height: '12px', display: 'flex' }}><ExternalIcon /></span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Rollouts & MAEVEN Theme Campaigns */}
        <div className="shopify-card">
          <div className="shopify-card-media">
            <img
              src="/assets/holiday_rollouts.jpg"
              alt="Run your holiday campaigns on schedule with Rollouts"
              className="shopify-card-img"
            />
          </div>
          <div className="shopify-card-body">
            <h3 className="shopify-card-title">
              Run your holiday campaigns on schedule with Rollouts
            </h3>
            <p className="shopify-card-desc">
              Schedule theme, catalog, and discount changes together in a single rollout with automatic
              end times. Engineered using modular schemas from the MAEVEN 2.0 theme.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a
                href="https://mahargm.gumroad.com/l/maeven"
                target="_blank"
                rel="noreferrer"
                className="shopify-card-action-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Live Gumroad Demo</span>
                <span style={{ width: '12px', height: '12px', display: 'flex' }}><ExternalIcon /></span>
              </a>
              <button
                type="button"
                className="shopify-card-action-btn"
                onClick={() => navigate('/themes')}
              >
                Theme Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Profile & Key Technical Competencies Strip */}
      <section
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div className="shopify-developer-strip">
          <div className="developer-strip-info">
            <div className="developer-strip-header">
              <span className="developer-strip-name">
                {developer.name}
              </span>
              <span className="developer-strip-brand">
                ({developer.brandName})
              </span>
              <span className="developer-strip-badge">
                Shopify Only
              </span>
            </div>
            <div className="developer-strip-pitch">
              {developer.pitch}
            </div>
          </div>

          <div className="developer-strip-actions">
            <button
              type="button"
              className="developer-strip-btn-secondary"
              onClick={() => navigate('/about')}
            >
              About Me &amp; Story →
            </button>
            <button
              type="button"
              className="developer-strip-btn-primary"
              onClick={() => navigate('/contact')}
            >
              Hire / Scope Project
            </button>
            <a
              href={developer.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="developer-strip-btn-whatsapp"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
