import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, ShieldCheck, CheckCircle2, AlertOctagon, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Factory Compliance Checklist for Garment Buyers | ZIM Sourcing Ltd',
  description:
    'Essential due diligence checklist before placing apparel orders in Bangladesh: unauthorized subcontracting, audit verification, RSC structural safety, and wage records.',
};

export default function FactoryComplianceChecklistPage() {
  return (
    <div style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="wrap" style={{ maxWidth: '820px', margin: '0 auto' }}>
        {/* Back Link */}
        <Link
          href="/blog"
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
          <ArrowLeft className="w-4 h-4" /> Back to Insights
        </Link>

        {/* Article Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <span
              style={{
                padding: '4px 12px',
                borderRadius: '100px',
                background: 'rgba(13, 148, 136, 0.12)',
                color: 'var(--teal)',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              Compliance Checklist
            </span>
            <span className="small muted" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock className="w-4 h-4" /> 10 min read
            </span>
          </div>

          <h1 className="h1 display" style={{ marginBottom: '1.25rem' }}>
            The Compliance Checklist to Run Before Placing an Apparel Order
          </h1>
          <p className="lead muted">
            A certificate proves a factory passed an audit on one single afternoon. It does not prove what happens on the sewing floor today. Here is how to conduct proper due diligence.
          </p>
        </div>

        {/* Hero Image */}
        <div
          style={{
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            marginBottom: '3rem',
            aspectRatio: '16 / 9',
            position: 'relative',
          }}
        >
          <Image
            src="/assets/img/photos/lace-fabric-1600.jpg"
            alt="Garment fabric and inspection preparation"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Article Content */}
        <div style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--fg)' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Compliance due diligence has a reputation for being a bureaucratic paperwork exercise: a supplier emails a ZIP file of PDF certificates, a sourcing manager archives them in a shared drive, and everyone moves forward. That superficial process catches virtually zero real-world operational risk.
          </p>

          <p style={{ marginBottom: '2rem' }}>
            Here is the five-step due diligence sequence our Dhaka merchandising team uses to audit new partner lines:
          </p>

          <h2 className="h2 display" style={{ fontSize: '1.6rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            1. Insist on the Specific Factory Name &amp; GPS Location
          </h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--muted)' }}>
            Start here, because everything else depends on physical reality. You are legally and ethically entitled to know the exact manufacturing facility producing your garments. If an agent hesitates or refuses to disclose the unit, that is your answer: the order is almost certainly being brokered out to an uninspected shadow factory.
          </p>
          <div
            style={{
              padding: '1.25rem 1.5rem',
              background: 'rgba(239, 68, 68, 0.08)',
              borderLeft: '4px solid #ef4444',
              borderRadius: 'var(--radius)',
              marginBottom: '2rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontWeight: 700, marginBottom: '0.25rem' }}>
              <AlertOctagon className="w-5 h-5" /> Unauthorized Subcontracting
            </div>
            <p className="small" style={{ margin: 0, color: 'var(--fg)' }}>
              Unauthorized subcontracting is the single largest compliance vulnerability in global apparel sourcing. All reputable buying houses enforce explicit no-subcontracting guarantees.
            </p>
          </div>

          <h2 className="h2 display" style={{ fontSize: '1.6rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            2. Match Audit Scope, Validity Windows &amp; Addresses
          </h2>
          <p style={{ marginBottom: '1rem', color: 'var(--muted)' }}>
            When reviewing BSCI, WRAP, or Sedex audit documents:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--muted)' }}>
            <li><strong>Expiry Dates:</strong> Audits have strict 12 or 24-month validity cycles. An expired audit is legally null.</li>
            <li><strong>Address Matching:</strong> Ensure the facility address on the certificate matches the physical cutting room, not just a holding group&rsquo;s administrative office in downtown Dhaka.</li>
            <li><strong>Process Scope:</strong> If your order requires dry process denim washing or reactive dyeing, verify the wet processing mill holds its own environmental wastewater ETP permit.</li>
          </ul>

          <h2 className="h2 display" style={{ fontSize: '1.6rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            3. Verify Structural, Fire &amp; Electrical Safety (RSC)
          </h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--muted)' }}>
            In Bangladesh, structural engineering, fire separation, and electrical wiring safety sit under the RMG Sustainability Council (RSC), which transitioned from the landmark Bangladesh Accord. Social audits (BSCI) do not evaluate beam load capacities or electrical transformer insulation. Always request the factory&rsquo;s RSC Remediation Verification Report.
          </p>

          <h2 className="h2 display" style={{ fontSize: '1.6rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            4. Digital Wage Records &amp; Working Hours
          </h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--muted)' }}>
            Ethical factories disburse monthly compensation digitally directly to workers&rsquo; mobile financial accounts (such as bKash, Nagad, or bank accounts). Digital payroll creates an immutable audit trail showing exact base salaries, overtime hours, and attendance punch records, eliminating ghost worker fraud.
          </p>
        </div>

        {/* Footer CTA */}
        <div
          className="card"
          style={{
            background: 'var(--panel-alt-bg)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '2.5rem',
            textAlign: 'center',
            marginTop: '3.5rem',
          }}
        >
          <h3 className="h3 display" style={{ marginBottom: '0.75rem' }}>
            Need full compliance documentation?
          </h3>
          <p className="muted" style={{ marginBottom: '1.5rem' }}>
            We provide verified audit reports and factory facility profiles for all our production allocations.
          </p>
          <Link className="btn btn-lg" href="/quote" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Enquire About Compliant Production <Send className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
