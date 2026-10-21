'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  question: string;
  answer: string | React.ReactNode;
  category?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // Open first item by default

  const toggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div
            key={index}
            className="faq-item"
            style={{
              background: 'var(--panel-bg)',
              border: `1px solid ${isOpen ? 'var(--teal)' : 'var(--border)'}`,
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              transition: 'all 0.25s ease',
            }}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                background: 'none',
                border: 'none',
                color: 'var(--fg)',
                fontWeight: 600,
                fontSize: '1.05rem',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              <span>{item.question}</span>
              <ChevronDown
                className="w-5 h-5"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                  flexShrink: 0,
                  color: isOpen ? 'var(--teal)' : 'var(--muted)',
                }}
              />
            </button>
            {isOpen && (
              <div
                style={{
                  padding: '0 1.5rem 1.25rem 1.5rem',
                  color: 'var(--muted)',
                  fontSize: '0.95rem',
                  lineHeight: '1.65',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1rem',
                }}
              >
                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
