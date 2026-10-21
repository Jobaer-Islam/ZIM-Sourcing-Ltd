import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, ShieldCheck, Send, Plane } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact ZIM Sourcing Ltd | Dhaka Buying House Office',
  description:
    'Contact ZIM Sourcing Ltd in Pallabi, Mirpur, Dhaka. Direct phone: +880 1632 697791. Emails: info@zimsourcing.com, contact@zimsourcing.com. Schedule buyer factory visits.',
};

export default function ContactPage() {
  return (
    <div style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="wrap">
        {/* Page Head */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="eyebrow">Direct Communication</span>
          <h1 className="h1 display" style={{ marginBottom: '1.25rem' }}>
            Get in Touch with Our Dhaka Merchandising Office
          </h1>
          <p className="lead muted">
            Whether you have an immediate RFQ, want to discuss yarn availability for an upcoming season, or are planning a buyer visit to Dhaka, our team is ready to assist.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4rem',
          }}
        >
          {/* Email Card */}
          <div
            className="card"
            style={{
              background: 'var(--panel-bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '2rem',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: 'rgba(13, 148, 136, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--teal)',
                marginBottom: '1.25rem',
              }}
            >
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="h4" style={{ marginBottom: '0.5rem' }}>Email Enquiries</h2>
            <p className="small muted" style={{ marginBottom: '1rem' }}>
              For tech packs, costing sheets, and formal commercial requests:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <a
                href={`mailto:${COMPANY.email}`}
                style={{ color: 'var(--teal)', fontWeight: 600, fontSize: '1rem' }}
              >
                {COMPANY.email}
              </a>
              <a
                href={`mailto:${COMPANY.contactEmail}`}
                style={{ color: 'var(--teal)', fontWeight: 600, fontSize: '1rem' }}
              >
                {COMPANY.contactEmail}
              </a>
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div
            className="card"
            style={{
              background: 'var(--panel-bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '2rem',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: 'rgba(13, 148, 136, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--teal)',
                marginBottom: '1.25rem',
              }}
            >
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="h4" style={{ marginBottom: '0.5rem' }}>Phone &amp; WhatsApp</h2>
            <p className="small muted" style={{ marginBottom: '1rem' }}>
              Direct desk telephone and instant mobile chat:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                style={{ color: 'var(--fg)', fontWeight: 700, fontSize: '1.1rem' }}
              >
                {COMPANY.phone}
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--teal)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              >
                <MessageCircle className="w-4 h-4" /> Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Office Address Card */}
          <div
            className="card"
            style={{
              background: 'var(--panel-bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '2rem',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: 'rgba(13, 148, 136, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--teal)',
                marginBottom: '1.25rem',
              }}
            >
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="h4" style={{ marginBottom: '0.5rem' }}>Dhaka Buying House</h2>
            <address style={{ fontStyle: 'normal', color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              {COMPANY.name}
              <br />
              {COMPANY.address.street}
              <br />
              {COMPANY.address.city} {COMPANY.address.postalCode}, Bangladesh
            </address>
            <span className="small muted" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock className="w-3.5 h-3.5" /> Mon–Sat: 10:00 – 18:00 (UTC+6)
            </span>
          </div>
        </div>

        {/* Visiting Dhaka Section */}
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
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  background: 'rgba(13, 148, 136, 0.12)',
                  color: 'var(--teal)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                <Plane className="w-4 h-4" />
                <span>Buyer Concierge Service</span>
              </div>
              <h2 className="h2 display" style={{ marginBottom: '1rem' }}>
                Planning a Sourcing Trip to Bangladesh?
              </h2>
              <p className="muted" style={{ lineHeight: 1.6, marginBottom: '1.25rem' }}>
                We frequently host international buying teams, apparel brand founders, and quality directors visiting Dhaka. We provide full protocol assistance: Hazrat Shahjalal International Airport (DAC) pickup, premium hotel corporate bookings in Gulshan/Banani, curated factory floor visits, and dedicated air-conditioned transport.
              </p>
              <a
                className="btn"
                href={`mailto:${COMPANY.contactEmail}?subject=Buyer%20Trip%20to%20Dhaka`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Coordinate Your Visit Itinerary <Send className="w-4 h-4" />
              </a>
            </div>

            <div
              style={{
                background: 'var(--panel-bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.75rem',
              }}
            >
              <h3 className="h4" style={{ marginBottom: '1rem' }}>Key Travel Details</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <ShieldCheck className="w-4 h-4" style={{ color: 'var(--teal)', marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Airport (DAC):</strong> 30–45 mins drive to our Pallabi office.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <ShieldCheck className="w-4 h-4" style={{ color: 'var(--teal)', marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Recommended Hotels:</strong> The Westin Dhaka, Radisson Blu Water Garden, Renaissance Gulshan.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <ShieldCheck className="w-4 h-4" style={{ color: 'var(--teal)', marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Showroom:</strong> Complete archive of seasonal knit, woven, sweater, and denim hangers ready for review.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Prompt */}
        <div style={{ textAlign: 'center' }}>
          <span className="eyebrow">Have Specific Styles to Price?</span>
          <h2 className="h2 display" style={{ marginBottom: '1.25rem' }}>
            Submit an RFQ through our quotation wizard
          </h2>
          <Link className="btn btn-lg" href="/quote">
            Open Quotation Form
          </Link>
        </div>
      </div>
    </div>
  );
}
