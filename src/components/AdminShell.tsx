import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import {
  HomeIcon,
  OrderIcon,
  ProductIcon,
  PersonIcon,
  ChartHistogramGrowthIcon,
  DiscountIcon,
  ContentIcon,
  GlobeIcon,
  ChartLineIcon,
  ChatIcon,
  PointOfSaleIcon,
  StoreIcon,
  SettingsIcon,
  NotificationIcon,
  SearchIcon,
  MenuIcon,
  ExternalIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  AppsIcon,
  CashDollarIcon,
} from '@shopify/polaris-icons';
import { PORTFOLIO_CONTENT } from '../data/content';

export const AdminShell: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { developer, projects, integrations, services } = PORTFOLIO_CONTENT;

  // Sidebar sections collapse state
  const [isSalesChannelsOpen, setIsSalesChannelsOpen] = useState(true);
  const [isAppsOpen, setIsAppsOpen] = useState(true);

  // Mobile drawer state
  const [mobileOpen, setMobileOpen] = useState(false);

  // Search input state
  const [searchValue, setSearchValue] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Notification state
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);

  // Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape' && searchValue) {
        setSearchValue('');
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchValue]);

  // Search matches
  const isSearching = searchValue.trim().length > 0;
  const query = searchValue.trim().toLowerCase();

  const matchedItems = useMemo(() => {
    if (!isSearching) return [];
    const projMatches = projects.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.client.toLowerCase().includes(query) ||
        p.stack.some((s) => s.toLowerCase().includes(query)),
    );
    const integMatches = integrations.filter(
      (i) =>
        i.name.toLowerCase().includes(query) ||
        i.tagline.toLowerCase().includes(query) ||
        i.stack.some((s) => s.toLowerCase().includes(query)),
    );
    const servMatches = services.filter(
      (s) =>
        s.title.toLowerCase().includes(query) ||
        s.tagline.toLowerCase().includes(query) ||
        s.stack.some((st) => st.toLowerCase().includes(query)),
    );
    return [
      ...projMatches.map((p) => ({ type: 'Project', title: p.name, sub: p.client, url: '/projects' })),
      ...integMatches.map((i) => ({ type: 'Integration', title: i.name, sub: i.tagline, url: '/integrations' })),
      ...servMatches.map((s) => ({ type: 'Service', title: s.title, sub: s.tagline, url: '/services' })),
    ];
  }, [isSearching, query, projects, integrations, services]);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileOpen(false);
    setSearchValue('');
  };

  // Mobile Caution Popup State
  const [copiedLink, setCopiedLink] = useState(false);
  const [showMobileCaution, setShowMobileCaution] = useState(() => {
    if (typeof window === 'undefined') return false;
    const isMobileWidth = window.innerWidth < 768;
    const isDismissed = sessionStorage.getItem('ezzcode_mobile_caution_dismissed') === 'true';
    return isMobileWidth && !isDismissed;
  });

  const dismissMobileCaution = () => {
    setShowMobileCaution(false);
    sessionStorage.setItem('ezzcode_mobile_caution_dismissed', 'true');
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileWidth = window.innerWidth < 768;
      const isDismissed = sessionStorage.getItem('ezzcode_mobile_caution_dismissed') === 'true';
      if (isMobileWidth && !isDismissed) {
        setShowMobileCaution(true);
      } else if (!isMobileWidth) {
        setShowMobileCaution(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="shopify-admin-shell">
      {/* Mobile Caution Modal Popup (Real Caution Design) */}
      {showMobileCaution && (
        <div className="mobile-caution-overlay" onClick={dismissMobileCaution}>
          <div
            className="mobile-caution-dialog"
            onClick={(e) => e.stopPropagation()}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="mobile-caution-title"
          >
            {/* Caution Hazard Stripe Top Banner */}
            <div className="mobile-caution-hazard-bar" />

            <div className="mobile-caution-content">
              {/* Caution Badge Header */}
              <div className="mobile-caution-header">
                <div className="mobile-caution-badge-pill">
                  <div className="mobile-caution-triangle-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                      <path
                        d="M12 2L1 21h22L12 2z"
                        fill="#F59E0B"
                        stroke="#B45309"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8.5v6"
                        stroke="#111827"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                      <circle cx="12" cy="17.5" r="1.3" fill="#111827" />
                    </svg>
                  </div>
                  <span id="mobile-caution-title" className="mobile-caution-badge-text">
                    CAUTION
                  </span>
                </div>
                <button
                  type="button"
                  className="mobile-caution-close-btn"
                  onClick={dismissMobileCaution}
                  aria-label="Close caution popup"
                >
                  ✕
                </button>
              </div>

              {/* Main Heading as requested */}
              <h3 className="mobile-caution-heading">
                Please preview it on desktop or laptop for better UI experience
              </h3>

              {/* Visual Device Recommendation */}
              <div className="mobile-caution-device-box">
                <div className="device-node">
                  <span className="device-node-icon">📱</span>
                  <span className="device-node-title">Phone</span>
                  <span className="device-node-status subdued">Current</span>
                </div>
                <div className="device-connector-arrow">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="device-node target">
                  <span className="device-node-icon">💻</span>
                  <span className="device-node-title">Laptop / Desktop</span>
                  <span className="device-node-status best">Best Experience</span>
                </div>
              </div>

              <p className="mobile-caution-text">
                This portfolio is engineered as a 1:1 replica of the <strong>Shopify Admin 2026 (Horizon & Sidekick Edition)</strong>. The multi-column layout, live visitors map, Sidekick AI capsule, and 3D card grid are designed specifically for computer displays.
              </p>

              {/* Action Buttons */}
              <div className="mobile-caution-footer">
                <button
                  type="button"
                  className={`mobile-caution-copy-btn ${copiedLink ? 'copied' : ''}`}
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setCopiedLink(true);
                    setTimeout(() => setCopiedLink(false), 2500);
                  }}
                >
                  {copiedLink ? '✓ Link Copied to Clipboard!' : '📋 Copy Link for Desktop / Laptop'}
                </button>
                <button
                  type="button"
                  className="mobile-caution-cta-btn"
                  onClick={dismissMobileCaution}
                >
                  Continue on Mobile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Top Header */}
      <div className="shopify-mobile-bar">
        <button
          type="button"
          className="shopify-mobile-toggle-btn"
          onClick={() => setMobileOpen(true)}
          aria-label="Open sidebar"
        >
          <MenuIcon />
        </button>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: '#ffffff',
          }}
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/assets/shopify-logo.png"
            alt="Shopify"
            width="24"
            height="24"
            style={{ borderRadius: '5px', objectFit: 'contain', display: 'block' }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '13.5px', fontWeight: 650 }}>EzzCode</span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                display: 'inline-block',
                boxShadow: '0 0 4px #22c55e',
              }}
            />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => {
            navigate('/contact');
            setMobileOpen(false);
          }}
          style={{
            background: '#008060',
            border: 'none',
            color: '#ffffff',
            padding: '5px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
          }}
        >
          Hire GM ↗
        </button>
      </div>

      {/* Backdrop for Mobile */}
      {mobileOpen && (
        <div
          className="shopify-sidebar-backdrop"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar (Pitch Black #000000) */}
      <aside className={`shopify-admin-sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        {/* Top Header: Shopify Bag Logo + Collapse Button */}
        <div className="sidebar-top-bar">
          <Link to="/" className="sidebar-logo-link" onClick={() => setMobileOpen(false)}>
            <img
              src="/assets/shopify-logo.png"
              alt="Shopify Logo"
              width="30"
              height="30"
              style={{ borderRadius: '6px', objectFit: 'contain', display: 'block' }}
            />
          </Link>
          <button
            type="button"
            className="sidebar-collapse-btn"
            title="Toggle Sidebar"
            onClick={() => setMobileOpen(false)}
          >
            <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 1v10h4V5H5zm6 0v10h4V5h-4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="sidebar-search-box">
          <div className="sidebar-search-input-wrapper">
            <span className="sidebar-search-icon">
              <SearchIcon />
            </span>
            <input
              ref={searchInputRef}
              type="text"
              className="sidebar-search-input"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Search Shopify admin"
            />
            {searchValue ? (
              <button
                type="button"
                className="sidebar-search-clear"
                onClick={() => setSearchValue('')}
              >
                ✕
              </button>
            ) : (
              <span className="sidebar-search-kbd">Ctrl K</span>
            )}
          </div>
        </div>

        {/* Scrollable Navigation Content */}
        <div className="sidebar-scrollable-content">
          {/* Search Results Overlay / Inline */}
          {isSearching ? (
            <div style={{ padding: '6px 4px 16px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  color: '#888',
                  marginBottom: '8px',
                  paddingBottom: '4px',
                  borderBottom: '1px solid #222',
                }}
              >
                <span>MATCHES ({matchedItems.length})</span>
                <span
                  style={{ cursor: 'pointer', color: '#95bf47' }}
                  onClick={() => setSearchValue('')}
                >
                  Clear
                </span>
              </div>
              {matchedItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleNavClick(item.url)}
                  style={{
                    padding: '6px 8px',
                    background: '#1a1a1a',
                    borderRadius: '6px',
                    marginBottom: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                  }}
                >
                  <div style={{ color: '#fff', fontWeight: 500 }}>{item.title}</div>
                  <div style={{ color: '#777', fontSize: '10.5px' }}>
                    {item.type} • {item.sub}
                  </div>
                </div>
              ))}
              {matchedItems.length === 0 && (
                <div style={{ color: '#777', fontSize: '11.5px', textAlign: 'center', padding: '16px 0' }}>
                  No matches found
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Primary Nav List (Exactly like screenshot) */}
              <nav className="sidebar-nav-section">
                <button
                  type="button"
                  className={`sidebar-nav-item ${location.pathname === '/' ? 'active' : ''}`}
                  onClick={() => handleNavClick('/')}
                >
                  <span className="sidebar-nav-item-left">
                    <span className="sidebar-nav-icon"><HomeIcon /></span>
                    <span className="sidebar-nav-label">Home</span>
                  </span>
                </button>

                <button
                  type="button"
                  className={`sidebar-nav-item ${location.pathname === '/projects' ? 'active' : ''}`}
                  onClick={() => handleNavClick('/projects')}
                >
                  <span className="sidebar-nav-item-left">
                    <span className="sidebar-nav-icon"><OrderIcon /></span>
                    <span className="sidebar-nav-label">Orders</span>
                  </span>
                  <span className="sidebar-nav-badge">9,999+</span>
                </button>

                <button
                  type="button"
                  className={`sidebar-nav-item ${location.pathname === '/themes' ? 'active' : ''}`}
                  onClick={() => handleNavClick('/themes')}
                >
                  <span className="sidebar-nav-item-left">
                    <span className="sidebar-nav-icon"><ProductIcon /></span>
                    <span className="sidebar-nav-label">Products</span>
                  </span>
                </button>

                <button
                  type="button"
                  className={`sidebar-nav-item ${location.pathname === '/customers' ? 'active' : ''}`}
                  onClick={() => handleNavClick('/projects')}
                >
                  <span className="sidebar-nav-item-left">
                    <span className="sidebar-nav-icon"><PersonIcon /></span>
                    <span className="sidebar-nav-label">Customers</span>
                  </span>
                </button>

                <button
                  type="button"
                  className={`sidebar-nav-item ${location.pathname === '/services' ? 'active' : ''}`}
                  onClick={() => handleNavClick('/services')}
                >
                  <span className="sidebar-nav-item-left">
                    <span className="sidebar-nav-icon"><ChartHistogramGrowthIcon /></span>
                    <span className="sidebar-nav-label">Growth</span>
                  </span>
                </button>

                <button
                  type="button"
                  className="sidebar-nav-item"
                  onClick={() => handleNavClick('/contact')}
                >
                  <span className="sidebar-nav-item-left">
                    <span className="sidebar-nav-icon"><DiscountIcon /></span>
                    <span className="sidebar-nav-label">Discounts</span>
                  </span>
                </button>

                <button
                  type="button"
                  className="sidebar-nav-item"
                  onClick={() => handleNavClick('/themes')}
                >
                  <span className="sidebar-nav-item-left">
                    <span className="sidebar-nav-icon"><ContentIcon /></span>
                    <span className="sidebar-nav-label">Content</span>
                  </span>
                </button>

                <button
                  type="button"
                  className="sidebar-nav-item"
                  onClick={() => handleNavClick('/projects')}
                >
                  <span className="sidebar-nav-item-left">
                    <span className="sidebar-nav-icon"><GlobeIcon /></span>
                    <span className="sidebar-nav-label">Markets</span>
                  </span>
                </button>

                <button
                  type="button"
                  className={`sidebar-nav-item ${location.pathname === '/integrations' ? 'active' : ''}`}
                  onClick={() => handleNavClick('/integrations')}
                >
                  <span className="sidebar-nav-item-left">
                    <span className="sidebar-nav-icon"><ChartLineIcon /></span>
                    <span className="sidebar-nav-label">Analytics</span>
                  </span>
                </button>
              </nav>

              {/* Sales channels Section */}
              <div style={{ marginBottom: '10px' }}>
                <div
                  className="sidebar-section-header"
                  onClick={() => setIsSalesChannelsOpen(!isSalesChannelsOpen)}
                >
                  <span className="sidebar-section-title">Sales channels</span>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    {isSalesChannelsOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                  </span>
                </div>

                {isSalesChannelsOpen && (
                  <div className="sidebar-nav-section" style={{ marginTop: '2px' }}>
                    <button
                      type="button"
                      className="sidebar-nav-item"
                      onClick={() => handleNavClick('/contact')}
                    >
                      <span className="sidebar-nav-item-left">
                        <span className="sidebar-nav-icon"><ChatIcon /></span>
                        <span className="sidebar-nav-label">Inbox</span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="sidebar-nav-item"
                      onClick={() => handleNavClick('/services')}
                    >
                      <span className="sidebar-nav-item-left">
                        <span className="sidebar-nav-icon"><PointOfSaleIcon /></span>
                        <span className="sidebar-nav-label">Point of Sale</span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="sidebar-nav-item"
                      onClick={() => handleNavClick('/themes')}
                    >
                      <span className="sidebar-nav-item-left">
                        <span className="sidebar-nav-icon"><StoreIcon /></span>
                        <span className="sidebar-nav-label">Online Store</span>
                      </span>
                    </button>

                    {/* Real Storefronts */}
                    <a
                      href="https://imroziaserene.com"
                      target="_blank"
                      rel="noreferrer"
                      className="sidebar-nav-item"
                      title="Live Client Storefront"
                    >
                      <span className="sidebar-nav-item-left">
                        <span className="sidebar-nav-icon" style={{ color: '#008060' }}>🛍️</span>
                        <span className="sidebar-nav-label">Imrozia Serene</span>
                      </span>
                      <span className="sidebar-nav-icon"><ExternalIcon /></span>
                    </a>

                    <a
                      href="https://tinytodzz.com"
                      target="_blank"
                      rel="noreferrer"
                      className="sidebar-nav-item"
                      title="Live Client Storefront"
                    >
                      <span className="sidebar-nav-item-left">
                        <span className="sidebar-nav-icon" style={{ color: '#38bdf8' }}>🧸</span>
                        <span className="sidebar-nav-label">Tiny Todzz</span>
                      </span>
                      <span className="sidebar-nav-icon"><ExternalIcon /></span>
                    </a>

                    <a
                      href="https://sahfa.pk"
                      target="_blank"
                      rel="noreferrer"
                      className="sidebar-nav-item"
                      title="Live Client Storefront"
                    >
                      <span className="sidebar-nav-item-left">
                        <span className="sidebar-nav-icon" style={{ color: '#fb923c' }}>👗</span>
                        <span className="sidebar-nav-label">Sahfa.pk</span>
                      </span>
                      <span className="sidebar-nav-icon"><ExternalIcon /></span>
                    </a>

                    <a
                      href="https://mahargm.gumroad.com/l/maeven"
                      target="_blank"
                      rel="noreferrer"
                      className="sidebar-nav-item"
                      title="MAEVEN Shopify 2.0 Theme"
                    >
                      <span className="sidebar-nav-item-left">
                        <span className="sidebar-nav-icon" style={{ color: '#a855f7' }}>⚡</span>
                        <span className="sidebar-nav-label">MAEVEN Theme</span>
                      </span>
                      <span className="sidebar-nav-badge live">Gumroad</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Apps Section */}
              <div style={{ marginBottom: '10px' }}>
                <div
                  className="sidebar-section-header"
                  onClick={() => setIsAppsOpen(!isAppsOpen)}
                >
                  <span className="sidebar-section-title">Apps</span>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    {isAppsOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                  </span>
                </div>

                {isAppsOpen && (
                  <div className="sidebar-nav-section" style={{ marginTop: '2px' }}>
                    <button
                      type="button"
                      className="sidebar-nav-item"
                      onClick={() => handleNavClick('/integrations')}
                    >
                      <span className="sidebar-nav-item-left">
                        <span className="sidebar-nav-icon"><AppsIcon /></span>
                        <span className="sidebar-nav-label">COD Automation</span>
                      </span>
                      <span className="sidebar-nav-badge">Make</span>
                    </button>

                    <button
                      type="button"
                      className="sidebar-nav-item"
                      onClick={() => handleNavClick('/integrations')}
                    >
                      <span className="sidebar-nav-item-left">
                        <span className="sidebar-nav-icon"><CashDollarIcon /></span>
                        <span className="sidebar-nav-label">Payment Gateway</span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="sidebar-nav-item"
                      onClick={() => handleNavClick('/services')}
                    >
                      <span className="sidebar-nav-item-left">
                        <span className="sidebar-nav-icon"><AppsIcon /></span>
                        <span className="sidebar-nav-label">MP Size Chart</span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="sidebar-nav-item"
                      onClick={() => handleNavClick('/services')}
                    >
                      <span className="sidebar-nav-item-left">
                        <span className="sidebar-nav-icon"><AppsIcon /></span>
                        <span className="sidebar-nav-label">Vizun Videos</span>
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Bottom Sidebar: Settings & Store Profile */}
        <div className="sidebar-bottom-area">
          <button
            type="button"
            className="sidebar-nav-item"
            onClick={() => handleNavClick('/contact')}
          >
            <span className="sidebar-nav-item-left">
              <span className="sidebar-nav-icon"><SettingsIcon /></span>
              <span className="sidebar-nav-label">Settings</span>
            </span>
          </button>

          <div
            className="sidebar-account-row"
            onClick={() => setShowNotificationPopup(!showNotificationPopup)}
            title="Brand: EzzCode • Developer: GM"
          >
            <div className="sidebar-account-info">
              <div className="sidebar-account-avatar">EC</div>
              <div className="sidebar-account-name">EzzCode</div>
            </div>
            <div className="sidebar-account-bell" title="Notifications">
              <NotificationIcon />
            </div>
          </div>

          {/* Quick notification bubble if clicked */}
          {showNotificationPopup && (
            <div
              style={{
                background: '#1f1f1f',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '10px',
                marginTop: '4px',
                fontSize: '11.5px',
                color: '#e5e5e5',
              }}
            >
              <div style={{ fontWeight: 600, color: '#4ade80', marginBottom: '2px' }}>
                🟢 {developer.availabilityBadge}
              </div>
              <div style={{ color: '#aaa', marginBottom: '6px' }}>
                {developer.name} ({developer.brandName}) • Lahore, PK
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <a
                  href={developer.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#fff',
                    background: '#008060',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '10.5px',
                  }}
                >
                  WhatsApp
                </a>
                <a
                  href={`mailto:${developer.email}`}
                  style={{
                    color: '#fff',
                    background: '#333',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '10.5px',
                  }}
                >
                  Email
                </a>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content Area: Inset White Canvas with Rounded Corners */}
      <main className="shopify-admin-canvas">
        <Outlet />
      </main>
    </div>
  );
};
