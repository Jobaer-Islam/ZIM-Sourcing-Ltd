import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, CheckCircle2, Lock, FileText, Award, AlertTriangle, ArrowRight } from 'lucide-react';
import { COMPLIANCE_STANDARDS, COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Factory Compliance, Ethical Audits & Safety Standards',
  description:
    'ZIM Sourcing Ltd factory compliance standards in Bangladesh: BGBA membership, RSC structural safety, BSCI, WRAP, OEKO-TEX 100, GOTS, and zero tolerance policies.',
};

export default function CompliancePage() {
  return (
    <div style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="wrap">
        {/* Page Head */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="eyebrow">Zero Compromise</span>
          <h1 className="h1 display" style={{ marginBottom: '1.25rem' }}>
            Factory Compliance, Ethical Audits &amp; Worker Welfare
          </h1>
          <p className="lead muted">
            Every garment manufactured through ZIM Sourcing Ltd is produced in factories independently verified for structural integrity, fire safety, environmental wastewater standards, and ethical treatment of labor.
          </p>
        </div>

        {/* BGBA & Official Accreditations */}
        <div
          className="card"
          style={{
            background: 'linear-gradient(135deg, var(--panel-bg), rgba(13, 148, 136, 0.08))',
            border: '1px solid var(--teal)',
            borderRadius: 'var(--radius)',
            padding: '2.5rem',
            marginBottom: '4rem',
            display: 'grid',
            gridTemplateColumns: '1fr 280px',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: '100px',
                background: 'rgba(13, 148, 136, 0.15)',
                color: 'var(--teal)',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              <Award className="w-4 h-4" />
              <span>Official Institutional Membership</span>
            </div>
            <h2 className="h2 display" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
              Bangladesh Garment Buying House Association (BGBA)
            </h2>
            <p className="muted" style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
              ZIM Sourcing Ltd is a recognized, licensed member of the BGBA, adhering to the national code of conduct governing international apparel sourcing, trade fair representation, and export arbitration.
            </p>
            <p className="small muted">
              Registered in Dhaka &middot; Government Approved Trading License &middot; BGBA Validated
            </p>
          </div>

          <div
            style={{
              background: 'var(--panel-alt-bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '1.5rem',
              textAlign: 'center',
            }}
          >
            <ShieldCheck className="w-12 h-12" style={{ color: 'var(--teal)', margin: '0 auto 0.75rem auto' }} />
            <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--fg)', marginBottom: '0.25rem' }}>
              100% Pre-Audited
            </strong>
            <span className="small muted">
              No unregistered or uninspected sub-contracting permitted under any circumstance.
            </span>
          </div>
        </div>

        {/* Core Pillars */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">The Four Pillars</span>
            <h2 className="h2 display">Our Non-Negotiable Compliance Framework</h2>
          </div>

          <div className="grid g-2" style={{ gap: '2rem' }}>
            <div
              className="card"
              style={{
                background: 'var(--panel-bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
              }}
            >
              <h3 className="h3 display" style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>
                1. Structural, Fire &amp; Electrical Safety (RSC)
              </h3>
              <p className="muted small" style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
                All partner facilities comply with the RMG Sustainability Council (formerly Bangladesh Accord). Facilities feature certified structural blueprints, automatic sprinkler systems, smoke alarms, unobstructed fire exits, and insulated electrical wiring with regular thermal imaging audits.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--teal)' }} />
                  <span>Approved by national fire service and civil defence</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--teal)' }} />
                  <span>Biannual emergency evacuation drills verified</span>
                </li>
              </ul>
            </div>

            <div
              className="card"
              style={{
                background: 'var(--panel-bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
              }}
            >
              <h3 className="h3 display" style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>
                2. Social Ethics, Fair Wages &amp; Labor Rights
              </h3>
              <p className="muted small" style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
                We strictly audit working hours (maximum 60 hours per week including overtime, with mandatory one rest day in seven). Factory workers receive legally mandated wages via direct bank transfer or verified mobile financial services.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--teal)' }} />
                  <span>Absolute zero tolerance for underage or forced labor</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--teal)' }} />
                  <span>Functional worker participation and grievance committees</span>
                </li>
              </ul>
            </div>

            <div
              className="card"
              style={{
                background: 'var(--panel-bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
              }}
            >
              <h3 className="h3 display" style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>
                3. Chemical Management &amp; Wastewater (ETP)
              </h3>
              <p className="muted small" style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
                Textile wet processing must use biological Effluent Treatment Plants (ETP) operating 24/7. Dyes, pigments, and auxiliaries conform to ZDHC Level 3 MRSL (Manufacturing Restricted Substances List) standards to prevent environmental discharge of harmful chemicals.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--teal)' }} />
                  <span>OEKO-TEX Standard 100 Annex 6 certification</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--teal)' }} />
                  <span>Treated wastewater pH, BOD, and COD regularly tested</span>
                </li>
              </ul>
            </div>

            <div
              className="card"
              style={{
                background: 'var(--panel-bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
              }}
            >
              <h3 className="h3 display" style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>
                4. Third-Party Audits &amp; Open Access
              </h3>
              <p className="muted small" style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
                We believe in unannounced verification. Sourcing buyers are always granted full access to audit reports and may appoint independent third-party inspection agencies at any phase of manufacturing.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--teal)' }} />
                  <span>Seamless coordination with SGS, Intertek, Bureau Veritas &amp; TÜV</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--fg)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--teal)' }} />
                  <span>Full traceability from spinning mill to export packing list</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Standards Grid */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Certifications</span>
            <h2 className="h2 display">International Accreditations in Our Partner Network</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {COMPLIANCE_STANDARDS.map((std, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  background: 'var(--panel-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                  <ShieldCheck className="w-5 h-5" style={{ color: 'var(--teal)' }} />
                  <strong style={{ fontSize: '1.1rem', color: 'var(--fg)' }}>{std.name}</strong>
                </div>
                <p className="small muted" style={{ margin: 0, lineHeight: 1.6 }}>
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Code of Conduct Download / Inquiry */}
        <div id="code" style={{ textAlign: 'center' }}>
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
              Request Compliance Audit Certificates
            </h3>
            <p className="muted" style={{ marginBottom: '1.5rem' }}>
              Need BSCI audit summaries, WRAP certificates, or OEKO-TEX scope certificates for your due diligence file? Contact our compliance department.
            </p>
            <div className="cluster" style={{ justifyContent: 'center', gap: '1rem' }}>
              <a className="btn btn-lg" href={`mailto:${COMPANY.contactEmail}?subject=Compliance%20Certificate%20Request`}>
                Email Compliance Team
              </a>
              <Link className="btn btn-outline btn-lg" href="/quote">
                Submit an RFQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
