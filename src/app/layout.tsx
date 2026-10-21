import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Garments Buying House in Bangladesh | ZIM Sourcing Ltd',
  description: 'ZIM Sourcing manages apparel development, factory sourcing, quality control and shipment in Bangladesh for international buyers. Request an FOB quotation.',
  icons: {
    icon: '/assets/img/favicon.svg',
    apple: '/assets/img/logo.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-build="90872cee42">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="stylesheet" href="/assets/css/fonts.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var r=document.documentElement;r.className+=' js';try{var t=localStorage.getItem('zim-theme');if(t==='dark'||t==='light')r.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: `.reveal{opacity:1 !important;transform:none !important}` }} />
        </noscript>
      </head>
      <body>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} aria-hidden="true">
  <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></symbol>
  <symbol id="i-check-circle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M8 12.5l2.7 2.7L16 9.6"/></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></symbol>
  <symbol id="i-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V6M5 13l7-7 7 7"/></symbol>
  <symbol id="i-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></symbol>
  <symbol id="i-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></symbol>
  <symbol id="i-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></symbol>
  <symbol id="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"/></symbol>
  <symbol id="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.3A8.6 8.6 0 019.7 3.5a8.6 8.6 0 1010.8 10.8z"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 7l9 6 9-6"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16.5v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 011.1 3.7 2 2 0 013.1 1.5h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L7.2 9.3a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2.1z"/></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10.3c0 6-8 12.2-8 12.2s-8-6.2-8-12.2a8 8 0 1116 0z"/><circle cx="12" cy="10" r="2.8"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M12 6.8V12l3.4 2"/></symbol>
  <symbol id="i-whatsapp" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1s-.8 1-.9 1.2-.4.2-.7 0a8.2 8.2 0 01-2.4-1.5 9 9 0 01-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 00-.8.4 3.4 3.4 0 00-1.1 2.6A6 6 0 007.1 12a13.5 13.5 0 005.2 4.6c.7.3 1.3.5 1.7.6a4.1 4.1 0 001.9.1 3.1 3.1 0 002-1.4 2.5 2.5 0 00.2-1.4c-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2z"/></symbol>
  <symbol id="i-linkedin" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.06a4.2 4.2 0 013.76-2C21.4 8.7 22 11 22 14.1V21h-4v-6.1c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21h-4z"/></symbol>
  <symbol id="i-facebook" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z"/></symbol>
  <symbol id="i-shirt" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3l5 2.6a1 1 0 01.5 1.1l-.9 3.4a1 1 0 01-1.2.7L17 10.5V20a1 1 0 01-1 1H8a1 1 0 01-1-1v-9.5l-1.4.3a1 1 0 01-1.2-.7l-.9-3.4A1 1 0 014 5.6L9 3"/><path d="M9 3a3 3 0 006 0"/></symbol>
  <symbol id="i-scissors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.6"/><circle cx="6" cy="18" r="2.6"/><path d="M20 4L8.6 15.4M14.5 14.5L20 20M8.6 8.6L12 12"/></symbol>
  <symbol id="i-layers" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.6l9.2 4.6L12 11.8 2.8 7.2z"/><path d="M2.8 12.2L12 16.8l9.2-4.6M2.8 16.9l9.2 4.6 9.2-4.6"/></symbol>
  <symbol id="i-ship" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18.5a3.2 3.2 0 003-1.8 3.2 3.2 0 006 0 3.2 3.2 0 006 0 3.2 3.2 0 003 1.8"/><path d="M4.5 14.5l1.2-4.3a1.5 1.5 0 011.4-1.1h9.8a1.5 1.5 0 011.4 1.1l1.2 4.3"/><path d="M12 9V4M9 4h6"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.4l8 3v6c0 5-3.4 9.2-8 10.2C7.4 20.6 4 16.4 4 11.4v-6z"/><path d="M9 12l2.2 2.2L15.5 10"/></symbol>
  <symbol id="i-leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20c0-8 5-14 16-15 0 11-6 15-12 15H4z"/><path d="M4.5 19.5C8 16 11 13.5 15 11.5"/></symbol>
  <symbol id="i-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20v-1.8a3.6 3.6 0 00-3.6-3.6H6.6A3.6 3.6 0 003 18.2V20"/><circle cx="9.5" cy="7.4" r="3.4"/><path d="M21 20v-1.8a3.6 3.6 0 00-2.7-3.5M15.6 4.2a3.6 3.6 0 010 6.9"/></symbol>
  <symbol id="i-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.9-3.9"/></symbol>
  <symbol id="i-doc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2.6H7a2 2 0 00-2 2v14.8a2 2 0 002 2h10a2 2 0 002-2V7.6z"/><path d="M14 2.6V7.6H19M8.6 13h6.8M8.6 16.6h4.8"/></symbol>
  <symbol id="i-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16.5a1.5 1.5 0 001.5 1.5H21"/><path d="M7.5 15l3.5-4 3 2.6L20 7"/></symbol>
  <symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.4"/><path d="M2.6 12h18.8M12 2.6a15 15 0 010 18.8 15 15 0 010-18.8z"/></symbol>
  <symbol id="i-box" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16.1V7.9a2 2 0 00-1-1.7l-7-4a2 2 0 00-2 0l-7 4a2 2 0 00-1 1.7v8.2a2 2 0 001 1.7l7 4a2 2 0 002 0l7-4a2 2 0 001-1.7z"/><path d="M3.3 7.2L12 12.2l8.7-5M12 22.1V12.2"/></symbol>
  <symbol id="i-spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5l2.3 6.2 6.2 2.3-6.2 2.3L12 19.5l-2.3-6.2L3.5 11l6.2-2.3z"/></symbol>
  <symbol id="i-tag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0l-7.2-7.2a2 2 0 01-.6-1.4V4.4a2 2 0 012-2h7.6a2 2 0 011.4.6l7.2 7.2a2 2 0 010 2.8z"/><circle cx="8" cy="8" r="1.4"/></symbol>
  <symbol id="i-bd-flag" viewBox="0 0 20 12"><rect width="20" height="12" rx="1.2" fill="#006A4E"/><circle cx="9" cy="6" r="4" fill="#F42A41"/></symbol>
  <symbol id="i-play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.2v13.6c0 .8.9 1.3 1.6.9l11-6.8c.6-.4.6-1.3 0-1.7l-11-6.8c-.7-.5-1.6 0-1.6.8z"/></symbol>
  <symbol id="i-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="10.5" width="15" height="10.5" rx="2.2"/><path d="M8 10.5V7.4A4 4 0 0 1 16 7.4v3.1"/></symbol>
  <symbol id="i-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11.5" height="11.5" rx="2.2"/><path d="M15 6.2A2.2 2.2 0 0 0 12.8 4H5.7A2.2 2.2 0 0 0 3.5 6.2v7.1A2.2 2.2 0 0 0 5.7 15.5"/></symbol>
  <symbol id="i-upload" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4.8M7.5 9.3L12 4.8l4.5 4.5"/><path d="M4.5 15.5v2.8A2.2 2.2 0 0 0 6.7 20.5h10.6a2.2 2.2 0 0 0 2.2-2.2v-2.8"/></symbol>
</svg>

        <a className="skip-link" href="#main">Skip to main content</a>

<div className="topbar">
  <div className="wrap">
    <div className="topbar-links">
      <a href="mailto:info@zimsourcing.com"><svg aria-hidden="true"><use href="#i-mail"/></svg> info@zimsourcing.com</a>
    </div>
    <div className="topbar-links">
      <span><svg aria-hidden="true"><use href="#i-clock"/></svg> Mon&ndash;Sat 10 am&ndash;6 pm (GMT+6)</span>
      <a href="/quote">Request a quotation &rarr;</a>
    </div>
  </div>
</div>

<header className="header">
  <nav className="wrap nav" aria-label="Primary">
    <a className="brand" href="/" aria-label="ZIM Sourcing Ltd home">
      <img className="brand-mark" src="/assets/img/logo.png" alt="" width="48" height="48" decoding="async" />
      <span className="brand-text">
        <span className="brand-name">ZIM Sourcing Ltd</span>
        <span className="brand-sub">Apparel Buying House</span>
      </span>
    </a>

    <ul className="nav-menu">
      <li className="nav-item"><a className="nav-link" href="/" aria-current="page">Home</a></li>
      <li className="nav-item">
        <a className="nav-link" href="/about" aria-haspopup="true" aria-expanded="false" >Company <svg className="chev" aria-hidden="true"><use href="#i-chev"/></svg></a>
        <ul className="dropdown">
          <li><a href="/about"><strong>About ZIM Sourcing Ltd</strong><span>Who we are and how we work</span></a></li>
          <li><a href="/about#vision"><strong>Vision &amp; Mission</strong><span>What we are building and the standards we hold</span></a></li>
          <li><a href="/about#capacity"><strong>Capacity &amp; Network</strong><span>Partner factories and coverage</span></a></li>
          <li><a href="/about#offices"><strong>Offices &amp; Coverage</strong><span>Dhaka head office and international reach</span></a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/services" aria-haspopup="true" aria-expanded="false" >Products &amp; Services <svg className="chev" aria-hidden="true"><use href="#i-chev"/></svg></a>
        <ul className="dropdown">
          <li><a href="/services#knitwear"><strong>Knitwear</strong><span>T-shirts, polos, fleece, jersey, activewear</span></a></li>
          <li><a href="/services#woven"><strong>Woven</strong><span>Shirts, trousers, dresses, outerwear</span></a></li>
          <li><a href="/services#sweater"><strong>Sweater</strong><span>Flat-knit 3GG to 14GG, jacquard, intarsia</span></a></li>
          <li><a href="/services#denim"><strong>Denim &amp; Bottoms</strong><span>Jeans, jackets, skirts, laundry and wash</span></a></li>
          <li><a href="/services#workwear"><strong>Uniforms &amp; Workwear</strong><span>Corporate, hospitality, medical, industrial</span></a></li>
          <li><a href="/services#full-service"><strong>Full-Service Sourcing</strong><span>Development, QA, merchandising, logistics</span></a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/process" aria-haspopup="true" aria-expanded="false" >How to Order <svg className="chev" aria-hidden="true"><use href="#i-chev"/></svg></a>
        <ul className="dropdown">
          <li><a href="/process"><strong>The Order Journey</strong><span>Enquiry to delivery in nine stages</span></a></li>
          <li><a href="/process#techpack"><strong>Tech Pack Checklist</strong><span>What to send with your enquiry</span></a></li>
          <li><a href="/process#sampling"><strong>Sampling Protocol</strong><span>Proto, fit, PP, SMS and shipment samples</span></a></li>
          <li><a href="/process#quality"><strong>Quality Assurance</strong><span>Inline checks and final random inspection</span></a></li>
          <li><a href="/process#commercial"><strong>Payment &amp; Incoterms</strong><span>L/C, T/T, FOB, CFR, CIF and DDP</span></a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/compliance" aria-haspopup="true" aria-expanded="false" >Compliance <svg className="chev" aria-hidden="true"><use href="#i-chev"/></svg></a>
        <ul className="dropdown">
          <li><a href="/compliance#social"><strong>Social Compliance</strong><span>Labour standards, wages, hours, grievance</span></a></li>
          <li><a href="/compliance#safety"><strong>Structural &amp; Fire Safety</strong><span>RSC-aligned building and fire safety</span></a></li>
          <li><a href="/compliance#environment"><strong>Environment</strong><span>Water, effluent, energy, chemicals</span></a></li>
          <li><a href="/compliance#audits"><strong>Audits &amp; Certifications</strong><span>Third-party audit programmes</span></a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/blog" aria-haspopup="true" aria-expanded="false" >Insights <svg className="chev" aria-hidden="true"><use href="#i-chev"/></svg></a>
        <ul className="dropdown">
          <li><a href="/faq"><strong>Frequently Asked Questions</strong><span>How we work, answered</span></a></li>
          <li><a href="/blog"><strong>All Insights</strong><span>Guides and industry updates</span></a></li>
          <li><a href="/blog/tech-pack-guide"><strong>Tech Pack Guide</strong><span>What belongs in a garment tech pack</span></a></li>
          <li><a href="/blog/factory-compliance-checklist"><strong>Compliance Checklist</strong><span>Due diligence before placing an order</span></a></li>
        </ul>
      </li>
      <li className="nav-item"><a className="nav-link" href="/contact" >Contact</a></li>
    </ul>

    <div className="nav-actions">
      <a className="btn nav-cta" href="/quote" >Request a Quote</a>
      <button className="icon-btn nav-toggle" type="button" aria-label="Open navigation menu" aria-controls="drawer" aria-expanded="false">
        <svg aria-hidden="true"><use href="#i-menu"/></svg>
      </button>
    </div>
  </nav>
</header>

<div className="drawer" id="drawer">
  <div className="drawer-scrim"></div>
  <div className="drawer-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
    <div className="drawer-head">
      <span className="brand-name" style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}>ZIM Sourcing Ltd</span>
      <button className="icon-btn" type="button" data-drawer-close aria-label="Close navigation menu">
        <svg aria-hidden="true"><use href="#i-close"/></svg>
      </button>
    </div>
    <div className="drawer-body">
      <a className="m-primary" href="/quote"><strong>Request a Quote</strong><svg aria-hidden="true"><use href="#i-arrow"/></svg></a>
      <a href="/services">Products &amp; Services</a>
      <a href="/process">How to Order</a>
      <a href="/compliance">Compliance</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <p className="m-divider">More</p>
      <div className="m-more">
        <a href="/faq">FAQ</a>
        <a href="/blog">Insights</a>
        <a href="/blog/tech-pack-guide">Tech Pack Guide</a>
        <a href="/blog/factory-compliance-checklist">Compliance Checklist</a>
      </div>
      <div className="drawer-foot">
        <a className="btn btn-block" href="/quote">Request a Quote</a>
        <a className="btn btn-ghost btn-block" href="mailto:info@zimsourcing.com">Email us</a>
        <button className="theme-link theme-toggle" type="button" aria-label="Switch colour theme">
          <svg className="sun" aria-hidden="true"><use href="#i-moon"/></svg>
          <svg className="moon" aria-hidden="true"><use href="#i-sun"/></svg>
        </button>
      </div>
    </div>
  </div>
</div>

        {children}

        <section className="section" aria-labelledby="cta-h">
  <div className="wrap">
    <div className="cta reveal">
      <div className="cta-inner">
        <div>
          <p className="eyebrow">Next step</p>
          <h2 className="h2 display" id="cta-h">Request a quotation for your next programme.</h2>
          <p className="mt-2">Send your styles, quantities and target price. We will come back with an indicative quotation and a proposed development calendar.</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-light btn-lg" href="/quote">Request a Quotation <svg aria-hidden="true"><use href="#i-arrow"/></svg></a>
          <a className="btn btn-outline-light btn-lg" href="mailto:info@zimsourcing.com"><svg aria-hidden="true"><use href="#i-mail"/></svg> Email us</a>
          <p className="small">No obligation &middot; All designs treated as confidential</p>
        </div>
      </div>
    </div>
  </div>
</section>

<footer className="footer">
  <div className="wrap">

    <div className="footer-brand">
      <a className="brand brand-lg" href="/" aria-label="ZIM Sourcing Ltd, home">
        <img className="brand-mark" src="/assets/img/logo.png" alt="" width="64" height="64" decoding="async" />
        <span className="brand-text">
          <span className="brand-name">ZIM Sourcing Ltd</span>
          <span className="brand-sub">Apparel Buying House &middot; Dhaka, Bangladesh</span>
        </span>
      </a>
      <div className="member-badge">
        <svg aria-hidden="true"><use href="#i-shield"/></svg>
        <span><strong>Official BGBA member</strong>Bangladesh Garment Buying House Association</span>
      </div>
    </div>

    <div className="footer-grid">
      <div>
        <p className="footer-about"><strong>ZIM Sourcing Ltd</strong> is a Dhaka-based garments buying house managing apparel programmes end to end: development, compliant factory allocation, quality assurance and on-time shipment for brands and retailers worldwide.</p>
        <address className="footer-contact">
          <div><svg aria-hidden="true"><use href="#i-pin"/></svg><span>Pallabi, Mirpur, Dhaka 1216<br />Bangladesh<br /><a className="addr-tel" href="tel:+8801632697791">+880 1632 697791</a></span></div>
          <div><svg aria-hidden="true"><use href="#i-mail"/></svg><span><a href="mailto:info@zimsourcing.com">info@zimsourcing.com</a><br /><a href="mailto:contact@zimsourcing.com">contact@zimsourcing.com</a></span></div>
        </address>
        <div className="socials">
          <a href="https://wa.me/8801632697791" target="_blank" rel="noopener" aria-label="WhatsApp"><svg aria-hidden="true"><use href="#i-whatsapp"/></svg></a>
          <a href="https://www.linkedin.com/company/zim-sourcing" target="_blank" rel="noopener" aria-label="LinkedIn"><svg aria-hidden="true"><use href="#i-linkedin"/></svg></a>
          <a href="https://www.facebook.com/zimsourcing" target="_blank" rel="noopener" aria-label="Facebook"><svg aria-hidden="true"><use href="#i-facebook"/></svg></a>
        </div>
      </div>

      <div>
        <h2 className="footer-h">Capabilities</h2>
        <ul>
          <li><a href="/services">Products &amp; Services</a></li>
          <li><a href="/services#knitwear">Knitwear</a></li>
          <li><a href="/services#woven">Woven</a></li>
          <li><a href="/services#sweater">Sweater</a></li>
          <li><a href="/services#denim">Denim &amp; Bottoms</a></li>
          <li><a href="/services#workwear">Uniforms &amp; Workwear</a></li>
        </ul>
      </div>

      <div>
        <h2 className="footer-h">Buyer resources</h2>
        <ul>
          <li><a href="/quote">Request a Quote</a></li>
          <li><a href="/process">How to Order</a></li>
          <li><a href="/process#techpack">Tech Pack Checklist</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/compliance">Compliance</a></li>
          <li><a href="/blog">Insights</a></li>
        </ul>
      </div>

      <div>
        <h2 className="footer-h">Contact</h2>
        <ul>
          <li><a href="mailto:info@zimsourcing.com">info@zimsourcing.com</a></li>
          <li><a href="mailto:contact@zimsourcing.com">contact@zimsourcing.com</a></li>
          <li><a href="https://www.linkedin.com/company/zim-sourcing" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="/about">About ZIM Sourcing</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bar">
      <p className="made-in">
        <svg className="flag" role="img" aria-label="Flag of Bangladesh"><use href="#i-bd-flag"/></svg>
        <span>&copy; <span data-year>2026</span> ZIM Sourcing Ltd. All rights reserved. &middot; Member, BGBA &middot; Sourced and shipped from Bangladesh.</span>
      </p>
      <ul>
        <li>
          <button className="theme-link theme-toggle" type="button" aria-label="Switch colour theme">
            <svg className="sun" aria-hidden="true"><use href="#i-moon"/></svg>
            <svg className="moon" aria-hidden="true"><use href="#i-sun"/></svg>
          </button>
        </li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Use</a></li>
        <li><a href="/compliance#code">Code of Conduct</a></li>
      </ul>
      <p className="footer-clock" id="dhaka-time" data-clock>
        <span className="clock-dot" data-clock-dot></span>
        <span className="clock-city">Dhaka</span>
        <span className="clock-time" data-clock-time>--:--</span>
        <span className="clock-sep" aria-hidden="true">&middot;</span>
        <span data-clock-status>Checking local time</span>
      </p>
    </div>
  </div>
</footer>

<div className="drift" aria-hidden="true"></div>
<div className="ambient" aria-hidden="true"></div>
<div className="progress" aria-hidden="true"></div>
<div className="quotebar" data-quotebar aria-hidden="true">
  <a className="quotebar-cta" href="/quote">Request a Quote <svg aria-hidden="true"><use href="#i-arrow"/></svg></a>
  <a className="quotebar-wa" href="https://wa.me/8801632697791" target="_blank" rel="noopener" aria-label="Message ZIM Sourcing on WhatsApp">
    <svg aria-hidden="true"><use href="#i-whatsapp"/></svg>
  </a>
</div>

<div className="floats">
  <button className="totop" type="button" aria-label="Back to top"><svg aria-hidden="true"><use href="#i-arrow-up"/></svg></button>
  <a className="wa" href="https://wa.me/8801632697791" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp"><svg aria-hidden="true"><use href="#i-whatsapp"/></svg></a>
</div>

        <Script src="/assets/js/main.js?v=90872cee42" strategy="afterInteractive" />
      </body>
    </html>
  );
}
