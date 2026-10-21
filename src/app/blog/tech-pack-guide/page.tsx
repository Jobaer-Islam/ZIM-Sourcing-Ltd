import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar, CheckCircle2, AlertTriangle, ArrowRight, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What Belongs in a Garment Tech Pack | ZIM Sourcing Ltd Guide',
  description:
    'A practical, step-by-step breakdown of what belongs in an apparel tech pack: technical sketches, measurement charts, BOM, and construction notes.',
};

export default function TechPackGuidePage() {
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
              Technical Design Guide
            </span>
            <span className="small muted" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock className="w-4 h-4" /> 12 min read
            </span>
          </div>

          <h1 className="h1 display" style={{ marginBottom: '1.25rem' }}>
            What Belongs in a Garment Tech Pack (And What Slows You Down)
          </h1>
          <p className="lead muted">
            A tech pack is not mere paperwork. It is the binding engineering contract between what you imagined in design and what a cutting room in Gazipur will physically produce.
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
            src="/assets/img/photos/swatches-1600.jpg"
            alt="Technical sketches and fabric swatches on a cutting table"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Article Body */}
        <div style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--fg)' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Almost every sampling disaster we have seen traces back to the same root cause: the factory made a reasonable assumption about something the tech pack did not specify. Not sabotage, not incompetence—a gap. Where your document is silent, someone in the sample room decides for you, and they will invariably decide in favor of whatever is easiest to sew.
          </p>

          <p style={{ marginBottom: '2rem' }}>
            The goal of technical design is not to produce an artistic mood board. <strong>The goal is a specification sheet with no silences.</strong>
          </p>

          <h2 className="h2 display" style={{ fontSize: '1.6rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            1. The Technical Flat Sketch
          </h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--muted)' }}>
            Flat, proportional, black-and-white line drawings: front, back, and detail callouts for closures, collar construction, or pockets. Avoid artistic shadows or stylized fashion figures.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--muted)' }}>
            <li>Call out topstitch gauge (e.g., 6mm double-needle vs 1mm single-needle edgestitch).</li>
            <li>Specify thread color explicitly (tonal match vs contrast shade).</li>
            <li>Indicate seam types: 4-thread overlock, flatlock, binding, or taped seams.</li>
          </ul>

          <h2 className="h2 display" style={{ fontSize: '1.6rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            2. The Measurement Spec Sheet &amp; Tolerances
          </h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--muted)' }}>
            This single table dictates whether your sample fits or fails. It requires three critical parameters:
          </p>
          <div
            style={{
              background: 'var(--panel-alt-bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Explicit Points of Measure (POM):</strong> &ldquo;Chest 2.5cm below armhole, laid flat&rdquo; instead of vague &ldquo;chest width&rdquo;.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Clearly Defined Base Size:</strong> State the base size (e.g., Men&rsquo;s Medium) from which all grading rules scale.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Acceptable Tolerances (+/-):</strong> Without published tolerances (+/- 0.5cm), factories apply standard commercial limits that may exceed your brand expectation.</span>
              </li>
            </ul>
          </div>

          <h2 className="h2 display" style={{ fontSize: '1.6rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            3. Bill of Materials (BOM)
          </h2>
          <p style={{ marginBottom: '1rem', color: 'var(--muted)' }}>
            Every raw material component must have a technical specification concrete enough for a mill to purchase against:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--muted)' }}>
            <li><strong>Shell Fabric:</strong> 100% Combed Organic Cotton, 240 GSM, 24/1 single jersey, reactive dyed, bio-polished.</li>
            <li><strong>Collar Rib:</strong> 1x1 rib with 5% spandex, 320 GSM, 4.5cm finished width.</li>
            <li><strong>Trims &amp; Hardware:</strong> YKK #5 antique brass zipper, polyester core-spun thread (Ticket 50), recycled woven satin care labels.</li>
            <li><strong>Colour Coding:</strong> Always provide Pantone TCX or TPG codes (e.g., 19-4005 TCX Black).</li>
          </ul>

          <div
            style={{
              padding: '1.5rem',
              background: 'rgba(245, 158, 11, 0.08)',
              borderLeft: '4px solid #f59e0b',
              borderRadius: 'var(--radius)',
              marginBottom: '2.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontWeight: 700, marginBottom: '0.5rem' }}>
              <AlertTriangle className="w-5 h-5" /> What Slows Down Costing Most
            </div>
            <p className="small" style={{ margin: 0, color: 'var(--fg)', lineHeight: 1.6 }}>
              Missing trim specifications or ambiguous artwork dimensions. When our merchandisers have to guess whether a graphic is 22cm screen-printed or 10cm embroidered, the indicative costing sheet is delayed.
            </p>
          </div>
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
            Ready to quote your tech pack?
          </h3>
          <p className="muted" style={{ marginBottom: '1.5rem' }}>
            Our Dhaka merchandising team reviews tech packs free of charge to confirm production feasibility and FOB costing.
          </p>
          <Link className="btn btn-lg" href="/quote" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Submit Your Tech Pack <Send className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
