'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, ArrowRight, Sparkles } from 'lucide-react';

const CHECKLIST_ITEMS = [
  { id: 'sketch', label: 'Technical sketch or reference sample (front, back, details)', weight: 15 },
  { id: 'fabric', label: 'Fabric specification (composition, construction, GSM/oz, finish)', weight: 15 },
  { id: 'measurements', label: 'Measurement chart with graded specs & tolerances', weight: 15 },
  { id: 'sizerange', label: 'Size range and breakdown ratio (e.g., S-XXL 1:2:3:3:2:1)', weight: 10 },
  { id: 'colors', label: 'Colourways with Pantone codes (TCX/TPG) & breakdown', weight: 10 },
  { id: 'trims', label: 'Trims, labels, tags, buttons, zip specs & artwork', weight: 10 },
  { id: 'packing', label: 'Packing instructions (polybag, hanger, carton markings, barcodes)', weight: 10 },
  { id: 'commercials', label: 'Target FOB/CIF price, quantity and delivery window', weight: 15 },
];

export default function PacklistChecker() {
  const [checkedIds, setCheckedIds] = useState<string[]>([
    'sketch',
    'fabric',
    'measurements',
    'commercials',
  ]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const totalScore = CHECKLIST_ITEMS.reduce((acc, item) => {
    return acc + (checkedIds.includes(item.id) ? item.weight : 0);
  }, 0);

  const getReadinessStatus = () => {
    if (totalScore >= 90) return { title: 'Production Ready', desc: 'Full tech pack ready for instant accurate FOB costing & proto development.' };
    if (totalScore >= 60) return { title: 'Feasible for Costing', desc: 'Good baseline. We can quote an indicative price and help refine missing specs.' };
    return { title: 'Concept Stage', desc: 'Send us whatever images or ideas you have; our tech design team will build the full spec.' };
  };

  const status = getReadinessStatus();

  return (
    <div
      className="card"
      style={{
        background: 'var(--panel-bg)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '1.75rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div>
          <span className="eyebrow">Interactive Tool</span>
          <h3 className="h3 display" style={{ margin: '0.25rem 0' }}>Tech Pack Readiness</h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 800, color: totalScore >= 70 ? 'var(--teal)' : '#f59e0b' }}>
            {totalScore}%
          </span>
          <p className="small muted" style={{ margin: 0 }}>Readiness</p>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          height: '6px',
          background: 'var(--border)',
          borderRadius: '3px',
          overflow: 'hidden',
          marginBottom: '1.5rem',
        }}
      >
        <div
          style={{
            width: `${totalScore}%`,
            height: '100%',
            background: totalScore >= 70 ? 'var(--teal)' : '#f59e0b',
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      <div
        style={{
          padding: '0.85rem 1rem',
          background: 'var(--panel-alt-bg)',
          borderRadius: 'var(--radius)',
          borderLeft: `4px solid ${totalScore >= 70 ? 'var(--teal)' : '#f59e0b'}`,
          marginBottom: '1.5rem',
        }}
      >
        <div style={{ fontWeight: 600, color: 'var(--fg)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles className="w-4 h-4" style={{ color: 'var(--teal)' }} />
          {status.title}
        </div>
        <p className="small muted" style={{ margin: '0.25rem 0 0 0' }}>{status.desc}</p>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <li
              key={item.id}
              onClick={() => toggleItem(item.id)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                cursor: 'pointer',
                userSelect: 'none',
                padding: '0.5rem 0.65rem',
                borderRadius: '6px',
                background: isChecked ? 'rgba(13, 148, 136, 0.05)' : 'transparent',
                transition: 'background 0.2s ease',
              }}
            >
              {isChecked ? (
                <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }} />
              ) : (
                <Circle className="w-5 h-5" style={{ color: 'var(--muted)', flexShrink: 0, marginTop: '2px' }} />
              )}
              <span style={{ fontSize: '0.92rem', color: isChecked ? 'var(--fg)' : 'var(--muted)' }}>
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link className="btn btn-sm" href="/quote" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          Send for Costing <ArrowRight className="w-4 h-4" />
        </Link>
        <a className="btn btn-ghost btn-sm" href="mailto:contact@zimsourcing.com?subject=Tech%20Pack%20Enquiry">
          Email Files Directly
        </a>
      </div>
    </div>
  );
}
