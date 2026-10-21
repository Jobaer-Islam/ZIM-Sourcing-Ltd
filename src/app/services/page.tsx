import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers, Sliders, Send } from 'lucide-react';
import { CAPABILITIES, COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Garment Manufacturing Capabilities & Sourcing Services',
  description:
    'Explore ZIM Sourcing Ltd capabilities in Dhaka: Knitwear, Woven Shirts & Trousers, Flat Knit Sweaters, Denim & Bottoms, Workwear, Fabric R&D and Quality Control.',
};

export default function ServicesPage() {
  return (
    <div style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="wrap">
        {/* Page Head */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="eyebrow">Production Capabilities</span>
          <h1 className="h1 display" style={{ marginBottom: '1.25rem' }}>
            Garment Manufacturing &amp; Apparel Sourcing Capabilities
          </h1>
          <p className="lead muted">
            From circular knits and structured wovens to heavy gauge knitwear and technical uniforms,
            we allocate each order to specialised factories engineered specifically for that category.
          </p>
        </div>

        {/* Detailed Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
          {CAPABILITIES.map((cap, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={cap.id}
                id={cap.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isEven ? '1.1fr 1fr' : '1fr 1.1fr',
                  gap: '3rem',
                  alignItems: 'center',
                  paddingTop: '1.5rem',
                  borderTop: idx > 0 ? '1px solid var(--border)' : 'none',
                }}
              >
                {/* Media Image */}
                <div
                  style={{
                    order: isEven ? 2 : 1,
                    position: 'relative',
                    borderRadius: 'var(--radius-lg, 20px)',
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                    boxShadow: '0 16px 36px rgba(0,0,0,0.15)',
                    aspectRatio: '4 / 3',
                  }}
                >
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Content */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <span className="eyebrow">{cap.leadTime} Lead Time</span>
                  <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
                    {cap.title}
                  </h2>
                  <p className="lead muted" style={{ marginBottom: '1.5rem' }}>
                    {cap.desc}
                  </p>

                  <div
                    style={{
                      background: 'var(--panel-alt-bg)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      padding: '1.25rem',
                      marginBottom: '1.75rem',
                    }}
                  >
                    <strong style={{ fontSize: '0.9rem', color: 'var(--fg)', display: 'block', marginBottom: '0.75rem' }}>
                      Key Styles &amp; Fabrications:
                    </strong>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '0.5rem',
                      }}
                    >
                      {cap.items.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                          <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--teal)', flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                      <span className="muted">Standard MOQ: </span>
                      <span style={{ color: 'var(--teal)' }}>{cap.moq}</span>
                    </div>
                    <Link className="btn btn-sm" href={`/quote?cat=${encodeURIComponent(cap.title)}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      Quote this category <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Added Services */}
        <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span className="eyebrow">End-to-End Value</span>
            <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
              Full-Spectrum Sourcing &amp; Technical Services
            </h2>
            <p className="lead muted">
              Beyond production management, we act as your ground team in Bangladesh for material innovation, testing, and compliance verification.
            </p>
          </div>

          <div className="grid g-3" style={{ gap: '1.75rem' }}>
            <div
              className="card"
              style={{
                background: 'var(--panel-bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
              }}
            >
              <Sliders className="w-8 h-8" style={{ color: 'var(--teal)', marginBottom: '1rem' }} />
              <h3 className="h3 display" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Fabric &amp; Yarn R&amp;D
              </h3>
              <p className="muted small" style={{ lineHeight: 1.6 }}>
                Direct access to spinning mills and dye-houses in Bangladesh. We develop custom knits, specialized yarn blends (modal, bamboo, linen, BCI cotton), and functional finishes (anti-microbial, moisture-wicking).
              </p>
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
              <Sparkles className="w-8 h-8" style={{ color: 'var(--teal)', marginBottom: '1rem' }} />
              <h3 className="h3 display" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Lab Dips &amp; Wash Approvals
              </h3>
              <p className="muted small" style={{ lineHeight: 1.6 }}>
                Fast 5-to-7 day lab dip submissions matched against Pantone TCX/TPG under standard D65 lightbox conditions. In denim, we execute dry process and wet wash development.
              </p>
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
              <Layers className="w-8 h-8" style={{ color: 'var(--teal)', marginBottom: '1rem' }} />
              <h3 className="h3 display" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Trims, Packaging &amp; Barcodes
              </h3>
              <p className="muted small" style={{ lineHeight: 1.6 }}>
                Nominated trim sourcing for woven labels, FSC recycled paper swing tags, sustainable polybags, branded metal buttons, and retail-ready carton barcode labeling.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <div
            className="card"
            style={{
              background: 'var(--panel-alt-bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '2.5rem',
              maxWidth: '760px',
              margin: '0 auto',
            }}
          >
            <h3 className="h3 display" style={{ marginBottom: '0.75rem' }}>
              Have a style outside standard categories?
            </h3>
            <p className="muted" style={{ marginBottom: '1.5rem' }}>
              We collaborate with specialized manufacturing units across Bangladesh. Reach out with your reference sample or technical sketches.
            </p>
            <Link className="btn btn-lg" href="/quote" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Request a Custom Feasibility Quote <Send className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
