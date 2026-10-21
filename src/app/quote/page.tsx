import React from 'react';
import type { Metadata } from 'next';
import QuoteWizard from '@/components/ui/QuoteWizard';
import { ShieldCheck, Clock, FileCheck2, Mail, Phone, MessageCircle } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Request a Quotation | Apparel Sourcing & Costing',
  description:
    'Submit your garment style specifications, quantities, and target price for an indicative FOB quotation, development calendar, and factory feasibility review from Dhaka.',
};

export default function QuotePage() {
  return (
    <div style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="wrap">
        {/* Page Head */}
        <div style={{ maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <span className="eyebrow">Request for Quotation</span>
          <h1 className="h1 display" style={{ marginBottom: '1rem' }}>
            Request an Indicative FOB Quotation
          </h1>
          <p className="lead muted">
            Share your style details, target quantities, and desired delivery schedule. Our Dhaka merchandising team will analyze factory capacity and return with a transparent cost breakdown within 24–48 hours.
          </p>
        </div>

        {/* 3-Step Interactive Quote Wizard */}
        <div style={{ maxWidth: '860px', margin: '0 auto 4rem auto' }}>
          <QuoteWizard />
        </div>

        {/* Supporting Guarantees Grid */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <div
            className="card"
            style={{
              background: 'var(--panel-bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '1.5rem',
            }}
          >
            <ShieldCheck className="w-6 h-6" style={{ color: 'var(--teal)', marginBottom: '0.75rem' }} />
            <h3 className="h4" style={{ marginBottom: '0.35rem' }}>Confidentiality &amp; NDA</h3>
            <p className="small muted" style={{ margin: 0 }}>
              All tech packs, proprietary artworks, and design files remain strictly confidential and will never be shared with third parties.
            </p>
          </div>

          <div
            className="card"
            style={{
              background: 'var(--panel-bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '1.5rem',
            }}
          >
            <Clock className="w-6 h-6" style={{ color: 'var(--teal)', marginBottom: '0.75rem' }} />
            <h3 className="h4" style={{ marginBottom: '0.35rem' }}>Fast 24-48h Costing</h3>
            <p className="small muted" style={{ margin: 0 }}>
              Our direct relationships with Bangladesh knitting mills and dye-houses allow us to turn around accurate yarn cost sheets promptly.
            </p>
          </div>

          <div
            className="card"
            style={{
              background: 'var(--panel-bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '1.5rem',
            }}
          >
            <FileCheck2 className="w-6 h-6" style={{ color: 'var(--teal)', marginBottom: '0.75rem' }} />
            <h3 className="h4" style={{ marginBottom: '0.35rem' }}>No Obligation</h3>
            <p className="small muted" style={{ margin: 0 }}>
              Quotes and feasibility reviews are provided completely free of charge to prospective buyers and sourcing managers worldwide.
            </p>
          </div>
        </div>

        {/* Direct Email Backup */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', color: 'var(--muted)' }}>
          <p className="small">
            Prefer emailing your full tech pack portfolio directly? Send files to{' '}
            <a href={`mailto:${COMPANY.email}`} style={{ color: 'var(--teal)', fontWeight: 600 }}>
              {COMPANY.email}
            </a>{' '}
            or chat with our merchandising lead on{' '}
            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--teal)', fontWeight: 600 }}
            >
              WhatsApp ({COMPANY.phone})
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
