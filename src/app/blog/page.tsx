import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Clock, FileCheck2, Sparkles, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Apparel Sourcing Insights & Technical Guides | ZIM Sourcing Ltd',
  description:
    'Practical sourcing guides, garment tech pack tutorials, and factory compliance checklists prepared by ZIM Sourcing merchandisers in Dhaka.',
};

const ARTICLES = [
  {
    slug: 'tech-pack-guide',
    tag: 'Technical Guide',
    readTime: '12 min read',
    title: 'What Belongs in a Garment Tech Pack (And What Slows You Down)',
    desc: 'The single document that decides whether your first sample is accurate or a waste of three weeks. A section-by-section breakdown with the common mistakes we see most.',
    image: '/assets/img/photos/sketching-600.jpg',
  },
  {
    slug: 'factory-compliance-checklist',
    tag: 'Factory Audits',
    readTime: '10 min read',
    title: 'The Factory Compliance Checklist Every Apparel Buyer Should Run',
    desc: 'Which certificates genuinely protect your brand, how to verify audit validity, what to ask for in writing, and the red flags that reveal more than an audit sheet.',
    image: '/assets/img/photos/thread-spools-600.jpg',
  },
];

export default function BlogIndexPage() {
  return (
    <div style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="wrap">
        {/* Page Head */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="eyebrow">Practical Knowledge</span>
          <h1 className="h1 display" style={{ marginBottom: '1.25rem' }}>
            Apparel Sourcing Insights &amp; Technical Guides
          </h1>
          <p className="lead muted">
            Real-world advice written by merchandisers, quality engineers, and compliance leads who run garment programmes on the ground in Dhaka every day.
          </p>
        </div>

        {/* Featured FAQ Banner */}
        <div
          className="card"
          style={{
            background: 'linear-gradient(135deg, var(--panel-bg), rgba(13, 148, 136, 0.08))',
            border: '1px solid var(--teal)',
            borderRadius: 'var(--radius)',
            padding: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          <div className="split" style={{ alignItems: 'center', gap: '2rem' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '100px',
                  background: 'rgba(13, 148, 136, 0.15)',
                  color: 'var(--teal)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                <Sparkles className="w-3.5 h-3.5" /> Start Here
              </div>
              <h2 className="h3 display" style={{ marginBottom: '0.75rem' }}>
                New to Sourcing Apparel from Bangladesh?
              </h2>
              <p className="muted" style={{ lineHeight: 1.6, maxWidth: '640px' }}>
                Read our comprehensive FAQ covering how buying houses operate, Minimum Order Quantities (MOQs), payment methods (L/C &amp; TT), and export document processing.
              </p>
            </div>
            <div>
              <Link className="btn btn-lg" href="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Browse Knowledge Base <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid g-2" style={{ gap: '2.5rem', marginBottom: '5rem' }}>
          {ARTICLES.map((art) => (
            <Link
              key={art.slug}
              href={`/blog/${art.slug}`}
              className="card"
              style={{
                background: 'var(--panel-bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
                textDecoration: 'none',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '260px' }}>
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: '100px',
                      background: 'rgba(13, 148, 136, 0.12)',
                      color: 'var(--teal)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                  >
                    {art.tag}
                  </span>
                  <span className="small muted" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock className="w-3.5 h-3.5" /> {art.readTime}
                  </span>
                </div>

                <h2 className="h3 display" style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>
                  {art.title}
                </h2>

                <p className="small muted" style={{ lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {art.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--teal)', fontWeight: 600, fontSize: '0.95rem' }}>
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <div
            className="card"
            style={{
              background: 'var(--panel-alt-bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '2.5rem',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            <h3 className="h3 display" style={{ marginBottom: '0.75rem' }}>
              Have questions about your specific styles?
            </h3>
            <p className="muted" style={{ marginBottom: '1.5rem' }}>
              We review tech packs and sketches free of charge to confirm factory feasibility and indicative costing.
            </p>
            <Link className="btn btn-lg" href="/quote">
              Send Tech Pack for Review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
