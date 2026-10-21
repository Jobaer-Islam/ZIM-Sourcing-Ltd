import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Award, MapPin, Users, CheckCircle2, ArrowRight, Building, Globe } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About ZIM Sourcing Ltd | Garment Buying House in Dhaka',
  description:
    'Learn about ZIM Sourcing Ltd, an official BGBA-member apparel buying house headquartered in Dhaka, Bangladesh, delivering ethical apparel sourcing, sample development, and QA to global brands.',
};

export default function AboutPage() {
  return (
    <div style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="wrap">
        {/* Page Head */}
        <div style={{ maxWidth: '840px', marginBottom: '3.5rem' }}>
          <span className="eyebrow">Our Story &amp; Purpose</span>
          <h1 className="h1 display" style={{ marginBottom: '1.25rem' }}>
            Your Dedicated Sourcing Office on the Ground in Dhaka
          </h1>
          <p className="lead muted">
            ZIM Sourcing Ltd was established with a singular objective: to eliminate the uncertainty, communication delays, and quality discrepancies often encountered in international apparel sourcing from Bangladesh.
          </p>
        </div>

        {/* Narrative & Image Split */}
        <div className="split" style={{ alignItems: 'center', gap: '3.5rem', marginBottom: '5rem' }}>
          <div>
            <span className="eyebrow">Bridge Between Design &amp; Manufacturing</span>
            <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
              We Work Exclusively on the Buyer&rsquo;s Behalf
            </h2>
            <p className="muted" style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
              Unlike agents affiliated with a single mill, ZIM Sourcing Ltd functions as your independent Dhaka buying house. Because we match your technical specifications with specialized production lines across Bangladesh, your styles are never forced into an unsuitable factory setup.
            </p>
            <p className="muted" style={{ lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Our in-house merchandisers and roving technical inspectors remain physically present on the sewing floor every day, validating yarn count, seam strength, pattern measurements, and needle detector logs before any container is loaded.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--teal)' }} />
                <strong>BGBA Registered</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--teal)' }} />
                <strong>AQL 1.5/2.5 Standard</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--teal)' }} />
                <strong>End-to-End Export Docs</strong>
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg, 24px)',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 44px rgba(0,0,0,0.2)',
            }}
          >
            <Image
              src="/assets/img/photos/showroom-900.jpg"
              alt="ZIM Sourcing Ltd garments showroom and sample review in Dhaka"
              width={900}
              height={675}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Core Values */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <span className="eyebrow">Guiding Principles</span>
            <h2 className="h2 display">The Values That Govern Every Production Run</h2>
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
              <ShieldCheck className="w-8 h-8" style={{ color: 'var(--teal)', marginBottom: '1rem' }} />
              <h3 className="h3 display" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Radical Transparency
              </h3>
              <p className="muted small" style={{ lineHeight: 1.6 }}>
                Open-book cost sheets, real-time photographic updates from the line, and immediate disclosure if raw material delivery encounters delays. You are never left guessing.
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
              <Award className="w-8 h-8" style={{ color: 'var(--teal)', marginBottom: '1rem' }} />
              <h3 className="h3 display" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Zero Compromise on Quality
              </h3>
              <p className="muted small" style={{ lineHeight: 1.6 }}>
                Critical defects have zero tolerance. Every single production batch is inspected against internationally recognized random sampling protocols before leaving the factory.
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
              <Globe className="w-8 h-8" style={{ color: 'var(--teal)', marginBottom: '1rem' }} />
              <h3 className="h3 display" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Ethical Stewardship
              </h3>
              <p className="muted small" style={{ lineHeight: 1.6 }}>
                We believe that sustainable commercial success is inseparable from worker safety, fair compensation, and zero toxic chemical discharge into local waterways.
              </p>
            </div>
          </div>
        </div>

        {/* Dhaka Headquarters & Team Info */}
        <div
          className="card"
          style={{
            background: 'var(--panel-alt-bg)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg, 24px)',
            padding: '3rem',
            marginBottom: '4rem',
          }}
        >
          <div className="split" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="eyebrow">Dhaka Operations</span>
              <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
                Headquartered in Pallabi, Mirpur
              </h2>
              <p className="muted" style={{ lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Our corporate buying house is situated in Pallabi, Mirpur—the historical textile and garment manufacturing hub of Dhaka. This strategic location gives our QA teams rapid, 30-to-60 minute road access to major industrial clusters in Gazipur, Ashulia, Savar, and Narayanganj.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--fg)', fontSize: '0.95rem' }}>
                  <MapPin className="w-4 h-4" style={{ color: 'var(--teal)' }} />
                  <span>{COMPANY.address.street}, {COMPANY.address.city} {COMPANY.address.postalCode}, Bangladesh</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--fg)', fontSize: '0.95rem' }}>
                  <Users className="w-4 h-4" style={{ color: 'var(--teal)' }} />
                  <span>Merchandising, Pattern Engineering, QA Inspectors &amp; Logistics Leads</span>
                </div>
              </div>
              <Link className="btn" href="/contact">
                Schedule a Video Meeting or Factory Visit
              </Link>
            </div>

            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <Image
                src="/assets/img/photos/factory-floor-600.jpg"
                alt="ZIM Sourcing Ltd facility inspection in Dhaka"
                width={600}
                height={450}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* Next step */}
        <div style={{ textAlign: 'center' }}>
          <span className="eyebrow">Let&rsquo;s Collaborate</span>
          <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
            Ready to streamline your Bangladesh apparel production?
          </h2>
          <div className="cluster" style={{ justifyContent: 'center', gap: '1rem' }}>
            <Link className="btn btn-lg" href="/quote">
              Request a Quotation
            </Link>
            <Link className="btn btn-outline btn-lg" href="/services">
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
