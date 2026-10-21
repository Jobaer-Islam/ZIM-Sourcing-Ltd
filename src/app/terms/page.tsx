import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Use | ZIM Sourcing Ltd',
  description:
    'Terms of Use and commercial protocols governing quotation requests, sampling agreements, and apparel sourcing with ZIM Sourcing Ltd.',
};

export default function TermsPage() {
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

        <span className="eyebrow">Commercial Terms</span>
        <h1 className="h1 display" style={{ marginBottom: '1.25rem' }}>
          Terms of Use &amp; Commercial Protocols
        </h1>
        <p className="lead muted" style={{ marginBottom: '2.5rem' }}>
          Last updated: October 2026. Standard terms governing website use, indicative quotations, and buyer enquiries with ZIM Sourcing Ltd.
        </p>

        <div style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--fg)' }}>
          <h2 className="h3 display" style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.75rem' }}>
            1. Indicative Quotations &amp; Feasibility
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            All FOB or CIF cost sheets issued through our quotation wizard or by email represent indicative commercial estimates based on current yarn, fabric, trim, and labor rates in Bangladesh. A binding price is confirmed upon physical counter-sample approval, finalized size breakdown ratios, and formal Purchase Order (PO) issuance.
          </p>

          <h2 className="h3 display" style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.75rem' }}>
            2. Intellectual Property &amp; Brand Designs
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            The buyer warrants that all tech packs, trademarks, logos, patterns, and artworks submitted for development and manufacturing are either owned by the buyer or licensed with proper authorization. ZIM Sourcing Ltd disclaims liability for intellectual property infringement arising from buyer-supplied design artwork.
          </p>

          <h2 className="h3 display" style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.75rem' }}>
            3. Quality Inspection Protocols
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            Unless explicitly agreed otherwise in the sales contract, bulk production acceptance is governed by standard ISO 2859-1 (AQL 1.5/2.5) sampling. Third-party inspection fees nominated by the buyer are for the buyer&rsquo;s account unless an agreed final inspection fails, in which case factory re-screening terms apply.
          </p>

          <h2 className="h3 display" style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.75rem' }}>
            4. Jurisdiction &amp; Trade Associations
          </h2>
          <p style={{ color: 'var(--muted)' }}>
            Commercial contracts executed with ZIM Sourcing Ltd are governed by international commercial trading customs and the arbitration rules of the Bangladesh Garment Buying House Association (BGBA) and the International Chamber of Commerce (ICC).
          </p>
        </div>
      </div>
    </div>
  );
}
