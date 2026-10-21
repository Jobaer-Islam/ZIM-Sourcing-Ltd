'use client';

import React, { useState } from 'react';
import {
  Send,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  UploadCloud,
  FileText,
  Sparkles,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/lib/constants';

interface FormData {
  category: string;
  styleName: string;
  quantity: string;
  targetPrice: string;
  fabricDetails: string;
  deliveryDate: string;
  destination: string;
  complianceRequired: string[];
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
}

export default function QuoteWizard() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [refNumber, setRefNumber] = useState<string>('');

  const [formData, setFormData] = useState<FormData>({
    category: 'Knitwear (T-shirts, Polos, Hoodies)',
    styleName: '',
    quantity: '',
    targetPrice: '',
    fabricDetails: '',
    deliveryDate: '',
    destination: 'Europe (EU / UK)',
    complianceRequired: ['BSCI / Amfori', 'OEKO-TEX Standard 100'],
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleComplianceToggle = (item: string) => {
    setFormData((prev) => {
      const exists = prev.complianceRequired.includes(item);
      return {
        ...prev,
        complianceRequired: exists
          ? prev.complianceRequired.filter((c) => c !== item)
          : [...prev.complianceRequired, item],
      };
    });
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.category) {
        alert('Please select a product category.');
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep !== 3) {
      nextStep();
      return;
    }

    if (!formData.email || !formData.name) {
      setErrorMsg('Please enter your name and email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enquiry.');
      }

      const generatedRef = 'ZIM-' + Math.floor(100000 + Math.random() * 900000);
      setRefNumber(generatedRef);
      setIsSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An error occurred. Please try again.';
      setErrorMsg(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        className="card"
        style={{
          background: 'var(--panel-bg)',
          border: '1px solid var(--teal)',
          borderRadius: 'var(--radius-lg, 16px)',
          padding: '2.5rem',
          textAlign: 'center',
          maxWidth: '680px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(13, 148, 136, 0.15)',
            color: 'var(--teal)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.25rem',
          }}
        >
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <p className="eyebrow">RFQ Received</p>
        <h2 className="h2 display" style={{ marginBottom: '0.5rem' }}>
          Enquiry Submitted Successfully
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Thank you, <strong>{formData.name}</strong>. Your quotation request has been dispatched to our Dhaka
          merchandising team. A dedicated merchandiser will review your specifications and contact you shortly.
        </p>

        <div
          style={{
            background: 'var(--panel-alt-bg)',
            border: '1px dashed var(--border)',
            borderRadius: 'var(--radius)',
            padding: '1.25rem',
            marginBottom: '1.75rem',
            display: 'inline-block',
          }}
        >
          <span style={{ fontSize: '0.85rem', color: 'var(--muted)', display: 'block' }}>Reference Tracking Number</span>
          <strong style={{ fontSize: '1.4rem', color: 'var(--teal)', letterSpacing: '1px' }}>
            {refNumber}
          </strong>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setIsSuccess(false);
              setCurrentStep(1);
            }}
          >
            Submit Another Style
          </button>
          <a
            className="btn"
            href={`https://wa.me/8801819453297?text=${encodeURIComponent(
              `Hello ZIM Sourcing, I just submitted RFQ ${refNumber} for ${formData.category}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Notify on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="quote-wizard-container"
      style={{
        background: 'var(--panel-bg)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg, 16px)',
        overflow: 'hidden',
        boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
      }}
    >
      {/* Step Progress Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderBottom: '1px solid var(--border)',
          background: 'var(--panel-alt-bg)',
        }}
      >
        {[
          { step: 1, label: 'Style & Quantities' },
          { step: 2, label: 'Timeline & Specs' },
          { step: 3, label: 'Contact & Send' },
        ].map((item) => {
          const isActive = currentStep === item.step;
          const isPassed = currentStep > item.step;
          return (
            <div
              key={item.step}
              onClick={() => {
                if (isPassed) setCurrentStep(item.step);
              }}
              style={{
                padding: '1rem 0.75rem',
                textAlign: 'center',
                cursor: isPassed ? 'pointer' : 'default',
                borderBottom: isActive ? '3px solid var(--teal)' : '3px solid transparent',
                background: isActive ? 'var(--panel-bg)' : 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '24px',
                  height: '24px',
                  lineHeight: '24px',
                  borderRadius: '50%',
                  background: isPassed ? 'var(--teal)' : isActive ? 'var(--fg)' : 'var(--border)',
                  color: isActive ? 'var(--bg)' : '#fff',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginRight: '6px',
                }}
              >
                {isPassed ? '✓' : item.step}
              </span>
              <span
                style={{
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--fg)' : 'var(--muted)',
                }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
        {/* Anti-spam honeypot */}
        <div style={{ display: 'none' }}>
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleInputChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {errorMsg && (
          <div
            style={{
              padding: '0.9rem 1.25rem',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: 'var(--radius)',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '1.5rem',
              fontSize: '0.95rem',
            }}
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* STEP 1: Product & Quantity */}
        {currentStep === 1 && (
          <div>
            <h3 className="h3 display" style={{ marginBottom: '0.25rem' }}>
              Step 1: Product Category &amp; Target
            </h3>
            <p className="muted small" style={{ marginBottom: '1.5rem' }}>
              Select the primary garment type and describe your volume expectations.
            </p>

            <div className="grid g-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label className="label" htmlFor="category">
                  Garment Category *
                </label>
                <select
                  id="category"
                  name="category"
                  className="input"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label" htmlFor="styleName">
                  Style Name / Reference *
                </label>
                <input
                  id="styleName"
                  name="styleName"
                  type="text"
                  className="input"
                  placeholder="e.g. Heavyweight Boxy T-Shirt, 5-Pocket Jeans"
                  value={formData.styleName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid g-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label className="label" htmlFor="quantity">
                  Estimated Quantity (pcs) *
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="text"
                  className="input"
                  placeholder="e.g. 1,000 pcs (500 pcs/colour)"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="label" htmlFor="targetPrice">
                  Target Price (FOB USD, optional)
                </label>
                <input
                  id="targetPrice"
                  name="targetPrice"
                  type="text"
                  className="input"
                  placeholder="e.g. $4.50 / pc"
                  value={formData.targetPrice}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label className="label" htmlFor="fabricDetails">
                Fabric &amp; Finishing Specs (optional)
              </label>
              <textarea
                id="fabricDetails"
                name="fabricDetails"
                className="input"
                rows={3}
                placeholder="e.g. 100% Organic Combed Cotton, 240 GSM, bio-washed, reactive dyed."
                value={formData.fabricDetails}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

        {/* STEP 2: Timeline & Standards */}
        {currentStep === 2 && (
          <div>
            <h3 className="h3 display" style={{ marginBottom: '0.25rem' }}>
              Step 2: Timeline &amp; Destination
            </h3>
            <p className="muted small" style={{ marginBottom: '1.5rem' }}>
              Tell us your target in-warehouse date and shipping destination.
            </p>

            <div className="grid g-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label className="label" htmlFor="deliveryDate">
                  Target Delivery / In-Warehouse Window
                </label>
                <input
                  id="deliveryDate"
                  name="deliveryDate"
                  type="text"
                  className="input"
                  placeholder="e.g. October 2026 or Spring/Summer 2027"
                  value={formData.deliveryDate}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="label" htmlFor="destination">
                  Destination Region / Port
                </label>
                <select
                  id="destination"
                  name="destination"
                  className="input"
                  value={formData.destination}
                  onChange={handleInputChange}
                >
                  <option value="Europe (EU / UK)">Europe (EU / UK)</option>
                  <option value="United States (US East / West Coast)">United States (East / West Coast)</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia & New Zealand">Australia &amp; New Zealand</option>
                  <option value="Middle East / GCC">Middle East / GCC</option>
                  <option value="Japan & Asia Pacific">Japan &amp; Asia Pacific</option>
                  <option value="Other / CIF Destination">Other / CIF Destination</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label className="label" style={{ marginBottom: '0.5rem' }}>
                Required Factory Certifications / Audits
              </label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                  gap: '0.5rem',
                }}
              >
                {[
                  'BSCI / Amfori',
                  'OEKO-TEX Standard 100',
                  'WRAP Certified',
                  'Sedex SMETA',
                  'GOTS (Organic)',
                  'GRS (Recycled)',
                ].map((audit) => {
                  const isChecked = formData.complianceRequired.includes(audit);
                  return (
                    <label
                      key={audit}
                      onClick={() => handleComplianceToggle(audit)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: `1px solid ${isChecked ? 'var(--teal)' : 'var(--border)'}`,
                        background: isChecked ? 'rgba(13, 148, 136, 0.08)' : 'var(--panel-alt-bg)',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: isChecked ? 600 : 400,
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        style={{ display: 'none' }}
                      />
                      <ShieldCheck
                        className="w-4 h-4"
                        style={{ color: isChecked ? 'var(--teal)' : 'var(--muted)' }}
                      />
                      <span>{audit}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div
              style={{
                padding: '1rem',
                background: 'var(--panel-alt-bg)',
                borderRadius: 'var(--radius)',
                border: '1px dashed var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <UploadCloud className="w-6 h-6" style={{ color: 'var(--teal)', flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: '0.9rem', display: 'block', color: 'var(--fg)' }}>
                  Have a Tech Pack or artwork files?
                </strong>
                <span className="small muted">
                  You can email large tech packs and artwork directly to{' '}
                  <a href="mailto:info@zimsourcing.com?subject=Tech%20Pack%20Files" style={{ color: 'var(--teal)' }}>
                    info@zimsourcing.com
                  </a>{' '}
                  referencing this style.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Contact & Submit */}
        {currentStep === 3 && (
          <div>
            <h3 className="h3 display" style={{ marginBottom: '0.25rem' }}>
              Step 3: Contact Details &amp; Submission
            </h3>
            <p className="muted small" style={{ marginBottom: '1.5rem' }}>
              Where should we send the indicative cost breakdown and timeline?
            </p>

            <div className="grid g-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label className="label" htmlFor="name">
                  Your Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="label" htmlFor="company">
                  Company / Brand Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="input"
                  placeholder="e.g. Studio Apparel Ltd"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid g-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label className="label" htmlFor="email">
                  Business Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="label" htmlFor="phone">
                  Phone / WhatsApp (with country code)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="input"
                  placeholder="+44 7123 456789"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label className="label" htmlFor="message">
                Additional Instructions or Tolerances
              </label>
              <textarea
                id="message"
                name="message"
                className="input"
                rows={3}
                placeholder="Mention any custom label specs, barcode packaging, payment terms, or lab test protocols."
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '2rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          {currentStep > 1 ? (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={prevStep}
              disabled={isSubmitting}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              className="btn"
              onClick={nextStep}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              Next Step <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="btn"
              disabled={isSubmitting}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              {isSubmitting ? (
                <>
                  <Clock className="w-4 h-4 animate-spin" /> Submitting Enquiry...
                </>
              ) : (
                <>
                  Send RFQ to Merchandising <Send className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
