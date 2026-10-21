import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Send,
  Building2,
  Sparkles,
  Layers,
  Award,
  Globe,
  FileCheck2,
  ChevronRight,
} from 'lucide-react';
import VideoPlayer from '@/components/ui/VideoPlayer';
import Accordion from '@/components/ui/Accordion';
import { COMPANY, CAPABILITIES, METRICS, COMPLIANCE_STANDARDS, WORKFLOW_STEPS } from '@/lib/constants';

const HOME_FAQS = [
  {
    question: 'What is your typical Minimum Order Quantity (MOQ)?',
    answer:
      'Our standard MOQ is generally 500 to 1,000 pieces per style/colour for knitwear, and 1,000 to 1,500 pieces for woven and denim styles. However, for emerging brands or strategic capsule collections, we frequently negotiate flexible low-MOQ development programmes with our specialist boutique lines.',
  },
  {
    question: 'How do you guarantee quality control during bulk production?',
    answer:
      'We do not rely solely on end-of-line inspections. Our Dhaka-based QA engineers conduct incoming raw fabric tests (4-point system), cutting inspections, inline roving checks during sewing, and final random inspections (FRI) strictly adhering to AQL 1.5 or 2.5 standards before ex-factory sign-off.',
  },
  {
    question: 'What are typical production lead times from Bangladesh?',
    answer:
      'Standard lead times range from 45 to 65 days for knitwear using locally available yarns, and 60 to 90 days for complex woven garments, specialized denim washes, or imported functional fabrics. We provide a firm Time & Action (T&A) calendar upon PO confirmation.',
  },
  {
    question: 'Are all partner factories ethically certified and compliant?',
    answer:
      'Yes, 100% of our partnered manufacturing units in Dhaka, Gazipur, Narayanganj, and Chittagong are audited and certified by recognized international bodies including BSCI (Amfori), WRAP, Sedex SMETA, OEKO-TEX Standard 100, and RSC (RMG Sustainability Council) for structural and electrical safety.',
  },
  {
    question: 'Can you provide physical samples before bulk order confirmation?',
    answer:
      'Yes. We produce proto samples to confirm construction, followed by fit samples, graded size sets, and approved pre-production (PP) samples before any bulk fabric cutting begins.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" style={{ padding: '4.5rem 0 3.5rem 0', position: 'relative' }}>
        <div className="wrap">
          <div className="split" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  background: 'rgba(13, 148, 136, 0.12)',
                  border: '1px solid rgba(13, 148, 136, 0.25)',
                  color: 'var(--teal)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Apparel Buying House &middot; Dhaka, Bangladesh</span>
              </div>

              <h1 className="h1 display" style={{ marginBottom: '1.25rem' }}>
                Apparel sourcing in Bangladesh, handled end to end.
              </h1>

              <p className="lead" style={{ marginBottom: '2rem', color: 'var(--muted)' }}>
                From tech pack to ex-factory shipment. We match your programme with compliant, audited
                factories, supervise production on the sewing floor, and ensure every shipment delivers on time and within budget.
              </p>

              <div className="cluster" style={{ gap: '1rem', marginBottom: '2.5rem' }}>
                <Link className="btn btn-lg" href="/quote" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Request a Quotation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link className="btn btn-outline btn-lg" href="/process">
                  How We Work
                </Link>
                <a
                  className="btn btn-ghost btn-lg"
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Trust Badges */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '1rem',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1.5rem',
                }}
              >
                <div>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--fg)', display: 'block' }}>BGBA Member</strong>
                  <span className="small muted">Certified Buying House</span>
                </div>
                <div>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--fg)', display: 'block' }}>AQL 1.5 / 2.5</strong>
                  <span className="small muted">Rigorous QA Standards</span>
                </div>
                <div>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--fg)', display: 'block' }}>100% Audited</strong>
                  <span className="small muted">Ethical BSCI / WRAP</span>
                </div>
                <div>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--fg)', display: 'block' }}>45-60 Days</strong>
                  <span className="small muted">Reliable Turnaround</span>
                </div>
              </div>
            </div>

            {/* Hero Image Collage */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-lg, 24px)',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: '0 24px 48px rgba(0,0,0,0.3)',
                  position: 'relative',
                }}
              >
                <Image
                  src="/assets/img/photos/factory-floor-900.jpg"
                  alt="ZIM Sourcing Ltd modern partner factory floor in Dhaka"
                  width={900}
                  height={675}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Floating Quality Stamp */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  background: 'var(--panel-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '1rem 1.25rem',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                  }}
                >
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--fg)' }}>
                    Export Grade Quality
                  </strong>
                  <span className="small muted">Zero Tolerance for Critical Flaws</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS TICKER */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--panel-alt-bg)', padding: '2.5rem 0' }}>
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              textAlign: 'center',
            }}
          >
            {METRICS.map((metric, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--teal)', marginBottom: '0.25rem', letterSpacing: '-0.5px' }}>
                  {metric.value}
                </div>
                <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--fg)', marginBottom: '0.2rem' }}>
                  {metric.label}
                </strong>
                <p className="small muted" style={{ margin: 0 }}>{metric.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL VIDEO SHOWCASE */}
      <section className="section" id="commercial-video">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <span className="eyebrow">On the Ground in Dhaka</span>
            <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
              Transparent Manufacturing, Verified on the Floor
            </h2>
            <p className="lead muted">
              Watch our team in action across our knitting mills, automated sewing lines, and quality assurance labs in Dhaka and Gazipur.
            </p>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <VideoPlayer
              src="/media/zim-sourcing-commercial.mp4"
              poster="/assets/img/video-poster.jpg"
              title="ZIM Sourcing Ltd · Facility Tour & Quality Control Process"
            />
          </div>
        </div>
      </section>

      {/* CAPABILITIES / SERVICES */}
      <section className="section section-alt" id="capabilities">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">What We Make</span>
            <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
              Comprehensive Apparel Capabilities
            </h2>
            <p className="lead muted" style={{ maxWidth: '680px' }}>
              We manage diverse production programmes across Circular Knit, Flat Knit, Denim, Woven Tops, and Technical Outerwear with specialized factory lines.
            </p>
          </div>

          <div className="grid g-3" style={{ gap: '1.75rem' }}>
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="card reveal"
                style={{
                  background: 'var(--panel-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="h3 display" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                    {cap.title}
                  </h3>
                  <p className="muted small" style={{ marginBottom: '1.25rem', flex: 1 }}>
                    {cap.desc}
                  </p>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="small" style={{ fontWeight: 600, color: 'var(--teal)' }}>
                      MOQ: {cap.moq}
                    </span>
                    <Link href={`/services#${cap.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.88rem', fontWeight: 600 }}>
                      Details <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link className="btn btn-outline btn-lg" href="/services">
              Explore All Categories &amp; Specifications
            </Link>
          </div>
        </div>
      </section>

      {/* 12-STEP ORDER JOURNEY PREVIEW */}
      <section className="section" id="process">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'flex-start', gap: '3rem', marginBottom: '3.5rem' }}>
            <div>
              <span className="eyebrow">Our Methodology</span>
              <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
                How Your Order Moves from Idea to Shipping Container
              </h2>
              <p className="lead muted">
                No surprises. We track each critical milestone on an agreed Time &amp; Action (T&amp;A) calendar with daily updates from the factory floor.
              </p>
            </div>
            <div style={{ alignSelf: 'flex-end' }}>
              <Link className="btn" href="/process" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                View Complete 12-Stage Process <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {WORKFLOW_STEPS.slice(0, 6).map((step) => (
              <div
                key={step.step}
                className="card"
                style={{
                  background: 'var(--panel-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '1.5rem',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: 'var(--teal)',
                    letterSpacing: '1px',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  PHASE {step.step}
                </span>
                <h3 className="h4" style={{ marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p className="small muted" style={{ margin: 0, lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE & ACCREDITATIONS */}
      <section className="section section-alt" id="compliance">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span className="eyebrow">Zero Compromise</span>
            <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
              Ethical Manufacturing &amp; Global Standards
            </h2>
            <p className="lead muted">
              All factories undergo rigorous pre-qualification for structural integrity, environmental wastewater management, fair labor practices, and worker health.
            </p>
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
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    background: 'rgba(13, 148, 136, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--teal)',
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="h4" style={{ margin: '0 0 0.35rem 0' }}>
                    {std.name}
                  </h3>
                  <p className="small muted" style={{ margin: 0, lineHeight: 1.5 }}>
                    {std.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link className="btn btn-outline" href="/compliance">
              Read Our Code of Conduct &amp; Audit Protocols
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section" id="faq">
        <div className="wrap">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="eyebrow">Buyer Questions</span>
              <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
                Frequently Asked Questions
              </h2>
              <p className="lead muted">
                Essential answers about working with an apparel buying house in Dhaka.
              </p>
            </div>

            <Accordion items={HOME_FAQS} />

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link className="btn btn-ghost" href="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Browse Full Knowledge Base <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="wrap">
          <div
            className="card"
            style={{
              background: 'linear-gradient(135deg, var(--panel-bg), rgba(13, 148, 136, 0.12))',
              border: '1px solid var(--teal)',
              borderRadius: 'var(--radius-lg, 24px)',
              padding: '3.5rem 2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ maxWidth: '700px' }}>
              <span className="eyebrow" style={{ color: 'var(--teal)' }}>Start Your Next Programme</span>
              <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
                Request an indicative quotation and production schedule.
              </h2>
              <p className="lead muted" style={{ marginBottom: '2rem' }}>
                Share your tech pack, sketches, or reference garment. Our Dhaka merchandising team will prepare a transparent cost breakdown and feasibility review within 24 to 48 hours.
              </p>
              <div className="cluster" style={{ gap: '1rem' }}>
                <Link className="btn btn-lg" href="/quote" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Request a Quotation <Send className="w-4 h-4" />
                </Link>
                <a className="btn btn-outline btn-lg" href={`mailto:${COMPANY.email}`}>
                  Email Tech Pack Files
                </a>
              </div>
              <p className="small muted" style={{ marginTop: '1.25rem' }}>
                Confidentiality guaranteed &middot; Non-Disclosure Agreements (NDA) honored &middot; No obligation
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
