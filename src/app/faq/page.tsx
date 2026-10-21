'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import { ArrowRight, Search, HelpCircle, Send } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

const ALL_FAQS: { category: string; items: AccordionItem[] }[] = [
  {
    category: 'Commercial & Ordering',
    items: [
      {
        question: 'What is your standard Minimum Order Quantity (MOQ)?',
        answer:
          'Standard MOQs are 500 to 1,000 pieces per style/colour for circular knitwear (t-shirts, polos, hoodies), and 1,000 to 1,500 pieces for woven shirts, trousers, and denim. For boutique collections, we have dedicated sample and small-batch production lines capable of supporting lower volumes for strategic brand launches.',
      },
      {
        question: 'What payment terms do you work on?',
        answer:
          'For first-time orders, we typically operate on Irrevocable Letter of Credit (L/C at sight) opened through a prime international bank, or a 30% advance T/T deposit with the remaining 70% payable against clean shipping documents and an approved final inspection report. For established repeat clients, deferred payment terms (L/C 30/60/90 days) can be established upon credit review.',
      },
      {
        question: 'What Incoterms do you quote under?',
        answer:
          'Our baseline pricing is quoted FOB Chittagong Port (sea freight) or FOB Dhaka Airport (air freight). Upon request, we also provide CIF or DDP quotes in partnership with your nominated freight forwarder or our global logistics partners.',
      },
    ],
  },
  {
    category: 'Sampling & Development',
    items: [
      {
        question: 'How are sample development costs handled?',
        answer:
          'Proto and development samples are billed at nominal development rates to cover fabric yardage and technician labor. Importantly, 100% of these sampling costs are credited back to your account against the final bulk production invoice upon purchase order confirmation.',
      },
      {
        question: 'How long does proto and fit sampling take?',
        answer:
          'Proto samples made from available stock fabric take approximately 7–10 working days. Fit samples and size sets using custom knitted/dyed fabric take 12–18 working days. Express courier transit (DHL/FedEx) to North America or Europe takes an additional 3–4 days.',
      },
      {
        question: 'How do you handle Pantone color matching and lab dips?',
        answer:
          'Provide us with Pantone TCX or TPG color numbers. Our partner dye houses produce 4-option lab dips (A, B, C, D) within 5–7 days, evaluated under standard D65 daylight, TL84 store lighting, and incandescent illuminants to prevent metamerism.',
      },
    ],
  },
  {
    category: 'Quality Control & Inspection',
    items: [
      {
        question: 'What quality inspection standard is applied to our bulk order?',
        answer:
          'We inspect bulk production strictly adhering to ISO 2859-1 (ANSI/ASQ Z1.4) Acceptable Quality Limit (AQL) protocols. Standard retail orders are evaluated at AQL 2.5 for major defects and 4.0 for minor defects. Premium and high-end fashion orders are evaluated at the stricter AQL 1.5 standard. Critical defects (sharp needle points, stains, unapproved labeling) have absolute zero tolerance.',
      },
      {
        question: 'Can we appoint our own independent third-party inspection agency?',
        answer:
          'Absolutely. We welcome and actively collaborate with independent inspection companies including SGS, Intertek, Bureau Veritas, and TÜV. Our team coordinates factory access, provides sample pull tables, and shares our internal inline QA reports.',
      },
      {
        question: 'What happens if defects are discovered during production?',
        answer:
          'Because our quality controllers are present inline during sewing, defects are caught on the line and rectified immediately. If an inline checkpoint or final random inspection fails, the production lot is halted, 100% screened by the factory at their expense, and re-inspected until full compliance is achieved.',
      },
    ],
  },
  {
    category: 'Factory Compliance & Sustainability',
    items: [
      {
        question: 'Are your manufacturing facilities audited for worker safety?',
        answer:
          'Yes. Every factory in our manufacturing network complies fully with the RMG Sustainability Council (RSC) standards covering structural integrity, electrical fire safety, and emergency egress. All factories hold current social compliance audits including BSCI (Amfori), WRAP, or Sedex SMETA.',
      },
      {
        question: 'What environmental certifications are available for fabrics?',
        answer:
          'We supply fabrics certified by OEKO-TEX Standard 100, Global Organic Textile Standard (GOTS), Organic Content Standard (OCS), Global Recycled Standard (GRS), and Better Cotton Initiative (BCI). We issue valid transaction certificates (TC) for every organic or recycled lot.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = ALL_FAQS.map((cat) => {
    const matchesCategory = activeCategory === 'All' || activeCategory === cat.category;
    const matchesSearch = cat.items.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (typeof item.answer === 'string' &&
          item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return {
      category: cat.category,
      items: matchesCategory ? matchesSearch : [],
    };
  }).filter((cat) => cat.items.length > 0);

  return (
    <div style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="wrap">
        {/* Page Head */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="eyebrow">Buyer Knowledge Base</span>
          <h1 className="h1 display" style={{ marginBottom: '1.25rem' }}>
            Frequently Asked Questions
          </h1>
          <p className="lead muted">
            Everything you need to know about working with ZIM Sourcing Ltd: minimum order quantities, commercial payment terms, sample development timelines, quality standards, and ethical compliance.
          </p>

          {/* Search bar */}
          <div
            style={{
              position: 'relative',
              maxWidth: '540px',
              marginTop: '2rem',
            }}
          >
            <Search
              className="w-5 h-5"
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--muted)',
              }}
            />
            <input
              type="text"
              className="input"
              placeholder="Search by topic (e.g., MOQ, payment, AQL, lead time)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '42px', fontSize: '1rem' }}
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '1.5rem',
          }}
        >
          {['All', 'Commercial & Ordering', 'Sampling & Development', 'Quality Control & Inspection', 'Factory Compliance & Sustainability'].map(
            (cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '100px',
                  border: `1px solid ${activeCategory === cat ? 'var(--teal)' : 'var(--border)'}`,
                  background: activeCategory === cat ? 'rgba(13, 148, 136, 0.15)' : 'var(--panel-bg)',
                  color: activeCategory === cat ? 'var(--teal)' : 'var(--muted)',
                  fontWeight: activeCategory === cat ? 600 : 500,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* FAQs by Category */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '5rem' }}>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((catGroup) => (
              <div key={catGroup.category}>
                <h2 className="h3 display" style={{ marginBottom: '1.25rem', color: 'var(--fg)' }}>
                  {catGroup.category}
                </h2>
                <Accordion items={catGroup.items} allowMultiple />
              </div>
            ))
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '3rem',
                background: 'var(--panel-bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
              }}
            >
              <HelpCircle className="w-10 h-10" style={{ color: 'var(--muted)', margin: '0 auto 1rem auto' }} />
              <h3 className="h4">No matching questions found</h3>
              <p className="muted small">Try adjusting your search terms or contact our merchandising team directly.</p>
            </div>
          )}
        </div>

        {/* Unanswered Question Box */}
        <div
          className="card"
          style={{
            background: 'var(--panel-alt-bg)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '2.5rem',
            textAlign: 'center',
            maxWidth: '750px',
            margin: '0 auto',
          }}
        >
          <h3 className="h3 display" style={{ marginBottom: '0.75rem' }}>
            Have a question not addressed here?
          </h3>
          <p className="muted" style={{ marginBottom: '1.5rem' }}>
            Our Dhaka merchandising team is available Monday through Saturday to answer technical, pricing, and factory capacity inquiries.
          </p>
          <div className="cluster" style={{ justifyContent: 'center', gap: '1rem' }}>
            <Link className="btn btn-lg" href="/quote" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Request a Quotation <Send className="w-4 h-4" />
            </Link>
            <a className="btn btn-outline btn-lg" href={`mailto:${COMPANY.email}`}>
              Email Merchandising
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
