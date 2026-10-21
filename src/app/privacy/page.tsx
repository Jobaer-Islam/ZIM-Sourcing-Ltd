import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Mail, ArrowLeft } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | ZIM Sourcing Ltd',
  description:
    'Privacy Policy and Data Protection standards of ZIM Sourcing Ltd. How we handle RFQ information, tech packs, and customer communications.',
};

export default function PrivacyPage() {
  return (
    <div style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="wrap" style={{ maxWidth: '820px', margin: '0 auto' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--teal)',
            fontWeight: 600,
            fontSize: '0.9rem',
            marginBottom: '2rem',
          }}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <span className="eyebrow">Legal &amp; Data Protection</span>
        <h1 className="h1 display" style={{ marginBottom: '1.25rem' }}>
          Privacy Policy
        </h1>
        <p className="lead muted" style={{ marginBottom: '2.5rem' }}>
          Last updated: October 2026. This policy outlines how ZIM Sourcing Ltd collects, uses, and safeguards information submitted through our website and RFQ forms.
        </p>

        <div style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--fg)' }}>
          <h2 className="h3 display" style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.75rem' }}>
            1. Information We Collect
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            When you request an apparel quotation, email us, or contact our team via WhatsApp, we collect the contact details you voluntarily provide: your name, corporate email address, telephone/WhatsApp number, company name, style specifications, target prices, and uploaded tech pack design files.
          </p>

          <h2 className="h3 display" style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.75rem' }}>
            2. Proprietary Tech Pack Confidentiality
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            All technical drawings, proprietary artwork, pattern dimensions, and commercial target prices submitted to ZIM Sourcing Ltd are treated as strictly confidential trade secrets. We never sell, license, or disclose your design assets to competing brands or third-party marketing services. We are pleased to countersign standard mutual Non-Disclosure Agreements (NDAs).
          </p>

          <h2 className="h3 display" style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.75rem' }}>
            3. How We Use Your Information
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            Information collected is utilized exclusively to evaluate manufacturing feasibility, prepare indicative FOB costing sheets, coordinate sample proto development, and provide order execution updates.
          </p>

          <h2 className="h3 display" style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.75rem' }}>
            4. Data Security &amp; Retention
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            We implement industry-standard encryption protocols (TLS/SSL) for all website transmission. Information received via our quotation forms is securely relayed to our internal merchandising systems.
          </p>

          <h2 className="h3 display" style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.75rem' }}>
            5. Contact Information
          </h2>
          <p style={{ color: 'var(--muted)' }}>
            For privacy inquiries or to request removal of your contact information from our databases, please contact our compliance desk at{' '}
            <a href={`mailto:${COMPANY.email}`} style={{ color: 'var(--teal)', fontWeight: 600 }}>
              {COMPANY.email}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
