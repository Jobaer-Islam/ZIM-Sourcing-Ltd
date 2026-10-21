import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PacklistChecker from '@/components/ui/PacklistChecker';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, FileCheck2, Send, AlertCircle } from 'lucide-react';
import { WORKFLOW_STEPS, COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Order Garments from Bangladesh | 12-Step Process',
  description:
    'Comprehensive guide to the 12 stages of apparel production with ZIM Sourcing Ltd in Dhaka: development, sampling, PP approval, bulk QC, final AQL inspection, and export shipment.',
};

const SAMPLE_MATRIX = [
  {
    type: 'Proto / Development Sample',
    purpose: 'Confirms technical construction, silhouette, proportions, and design interpretation.',
    fabric: 'Available similar fabric / strike-off',
    turnaround: '7–10 working days',
  },
  {
    type: 'Fit Sample',
    purpose: 'Evaluates drape, movement, base size measurements, and pattern balance.',
    fabric: 'Actual fabric or closest laboratory substitute',
    turnaround: '10–14 working days',
  },
  {
    type: 'Size Set',
    purpose: 'Validates pattern grading across every size (e.g., XS through 3XL).',
    fabric: 'Approved bulk fabric',
    turnaround: '12–15 working days',
  },
  {
    type: 'Salesman Sample (SMS)',
    purpose: 'Used by buyers for showroom presentation, marketing campaigns, and pre-orders.',
    fabric: 'Bulk fabric, dyed trims, and branding',
    turnaround: '15–20 working days',
  },
  {
    type: 'Pre-Production (PP) Sample',
    purpose: 'The definitive gold seal standard that governs all bulk production cutting.',
    fabric: '100% bulk fabric, approved trims, and final polybag/tags',
    turnaround: 'Prior to bulk fabric cutting',
  },
  {
    type: 'Shipment Sample',
    purpose: 'Exact record of what was packed and loaded into the shipping container.',
    fabric: 'Pulled at random from packed export cartons',
    turnaround: 'Dispatched with final FRI report',
  },
];

export default function ProcessPage() {
  return (
    <div style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="wrap">
        {/* Page Head */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="eyebrow">Production Lifecycle</span>
          <h1 className="h1 display" style={{ marginBottom: '1.25rem' }}>
            How to Order Apparel from Bangladesh
          </h1>
          <p className="lead muted">
            Clear, milestone-driven production from Dhaka. Every stage of your order follows an agreed Time &amp; Action (T&amp;A) calendar with accountable owners and transparent inspection sign-offs.
          </p>
          <div className="cluster mt-4" style={{ gap: '1rem' }}>
            <Link className="btn btn-lg" href="/quote">
              Start an Enquiry
            </Link>
            <a className="btn btn-ghost btn-lg" href="#techpack">
              Interactive Tech Pack Checker
            </a>
          </div>
        </div>

        {/* 12-Step Detailed Sequence */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">The 12 Stages</span>
            <h2 className="h2 display">From First Sketch to Ex-Factory Container</h2>
            <p className="muted" style={{ maxWidth: '650px', marginTop: '0.5rem' }}>
              Repeat orders on approved styles skip steps 2 and 3, reducing standard lead time significantly.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="card"
                style={{
                  background: 'var(--panel-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '1.75rem 2rem',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr 240px',
                  gap: '2rem',
                  alignItems: 'center',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: 'var(--teal)',
                      display: 'block',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    {step.step < 10 ? `0${step.step}` : step.step}
                  </span>
                  <span className="small muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    Stage
                  </span>
                </div>

                <div>
                  <h3 className="h3 display" style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>
                    {step.title}
                  </h3>
                  <p className="small muted" style={{ margin: 0, lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>

                <div
                  style={{
                    background: 'var(--panel-alt-bg)',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm, 8px)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '2px' }}>
                    Critical Deliverable
                  </span>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--fg)' }}>
                    Written Approval &amp; T&amp;A Log
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Factory Interlude */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '5rem',
          }}
        >
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <Image
              src="/assets/img/photos/sewing-line-600.jpg"
              alt="Industrial sewing production line in Dhaka"
              width={600}
              height={450}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <Image
              src="/assets/img/photos/designer-600.jpg"
              alt="Apparel designer drafting pattern and tech pack"
              width={600}
              height={450}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <Image
              src="/assets/img/photos/port-cranes-600.jpg"
              alt="Chittagong port container loading"
              width={600}
              height={450}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Interactive Tech Pack Section */}
        <div id="techpack" style={{ marginBottom: '5rem', paddingTop: '2rem' }}>
          <div className="split" style={{ alignItems: 'flex-start', gap: '3rem' }}>
            <div>
              <span className="eyebrow">Enquiry Preparation</span>
              <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
                What Belongs in a Production Tech Pack?
              </h2>
              <p className="lead muted" style={{ marginBottom: '1.5rem' }}>
                The more complete your technical package, the faster and more precise our costing will be.
                Even if you only possess reference photographs, our Dhaka technical design department can construct the full specification sheet with you.
              </p>
              <div
                style={{
                  background: 'var(--panel-alt-bg)',
                  borderLeft: '4px solid var(--teal)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius)',
                  marginBottom: '2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.35rem' }}>
                  <AlertCircle className="w-4 h-4" style={{ color: 'var(--teal)' }} />
                  <strong style={{ fontSize: '0.95rem' }}>Pro Tip for Sourcing Teams:</strong>
                </div>
                <p className="small muted" style={{ margin: 0, lineHeight: 1.6 }}>
                  Always define points of measure (POM) alongside acceptable commercial tolerances (+/- 0.5cm or 1cm) in your base size before grading.
                </p>
              </div>
              <Link className="btn btn-lg" href="/quote">
                Submit Your Files for Costing
              </Link>
            </div>

            <div>
              <PacklistChecker />
            </div>
          </div>
        </div>

        {/* Sample Matrix Comparison Table */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">Development Protocol</span>
            <h2 className="h2 display">Apparel Sample Types &amp; Purpose</h2>
            <p className="lead muted">
              Confusing one sample type for another is one of the most common causes of miscommunication in offshore production.
            </p>
          </div>

          <div
            style={{
              overflowX: 'auto',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              background: 'var(--panel-bg)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--panel-alt-bg)' }}>
                  <th style={{ padding: '1rem 1.25rem', fontWeight: 600 }}>Sample Stage</th>
                  <th style={{ padding: '1rem 1.25rem', fontWeight: 600 }}>What It Proves</th>
                  <th style={{ padding: '1rem 1.25rem', fontWeight: 600 }}>Fabric &amp; Trims Used</th>
                  <th style={{ padding: '1rem 1.25rem', fontWeight: 600 }}>Turnaround</th>
                </tr>
              </thead>
              <tbody>
                {SAMPLE_MATRIX.map((s, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: idx < SAMPLE_MATRIX.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <td style={{ padding: '1.25rem', fontWeight: 600, color: 'var(--teal)' }}>
                      {s.type}
                    </td>
                    <td style={{ padding: '1.25rem', color: 'var(--fg)', lineHeight: 1.5 }}>
                      {s.purpose}
                    </td>
                    <td style={{ padding: '1.25rem', color: 'var(--muted)' }}>
                      {s.fabric}
                    </td>
                    <td style={{ padding: '1.25rem', fontWeight: 500 }}>
                      {s.turnaround}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to action */}
        <div style={{ textAlign: 'center' }}>
          <div
            className="card"
            style={{
              background: 'var(--panel-alt-bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '2.5rem',
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            <h3 className="h3 display" style={{ marginBottom: '0.75rem' }}>
              Ready to begin Stage 01?
            </h3>
            <p className="muted" style={{ marginBottom: '1.5rem' }}>
              Share your target styles and target price. We will return with an indicative FOB cost sheet and proposed calendar.
            </p>
            <Link className="btn btn-lg" href="/quote" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Request an Indicative Quotation <Send className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
