'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
  MessageCircle,
  ExternalLink,
  Sun,
  Moon,
  Clock,
  Send,
  FileCheck2,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY, CAPABILITIES } from '@/lib/constants';

export default function Footer() {
  const [dhakaTime, setDhakaTime] = useState<string>('--:--');
  const [isOpenOffice, setIsOpenOffice] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Clock update
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        };
        const timeStr = new Intl.DateTimeFormat('en-GB', options).format(now);
        setDhakaTime(timeStr);

        const hour = parseInt(timeStr.split(':')[0], 10);
        // Standard Dhaka office hours 9am - 7pm
        setIsOpenOffice(hour >= 9 && hour < 19);
      } catch {
        setDhakaTime('Dhaka, BD');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);

    // Scroll listener
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Theme initialization
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme as 'light' | 'dark');

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-brand">
            <Link className="brand brand-lg" href="/" aria-label="ZIM Sourcing Ltd, home">
              <Image
                className="brand-mark"
                src="/assets/img/logo.png"
                alt="ZIM Sourcing Ltd Logo"
                width={64}
                height={64}
                style={{ borderRadius: '8px' }}
              />
              <span className="brand-text">
                <span className="brand-name">{COMPANY.name}</span>
                <span className="brand-sub">Apparel Buying House &middot; Dhaka, Bangladesh</span>
              </span>
            </Link>

            <div className="member-badge">
              <ShieldCheck className="w-5 h-5" style={{ color: 'var(--amber-gold)' }} />
              <span>
                <strong>Official BGBA member</strong>
                Bangladesh Garment Buying House Association
              </span>
            </div>
          </div>

          <div className="footer-grid">
            <div>
              <p className="footer-about">
                <strong>{COMPANY.name}</strong> is a premier Dhaka-based garments buying house managing
                apparel programmes end-to-end: rapid sampling, ethical compliant factory allocation, strict quality
                assurance (AQL 1.5/2.5), and on-time worldwide shipment.
              </p>
              <address className="footer-contact">
                <div>
                  <MapPin className="w-4 h-4" style={{ marginTop: '3px', flexShrink: 0, color: 'var(--teal)' }} />
                  <span>
                    {COMPANY.address.street}
                    <br />
                    {COMPANY.address.city}, {COMPANY.address.country}
                    <br />
                    <a className="addr-tel" href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}>
                      {COMPANY.phone}
                    </a>
                  </span>
                </div>
                <div>
                  <Mail className="w-4 h-4" style={{ marginTop: '3px', flexShrink: 0, color: 'var(--teal)' }} />
                  <span>
                    <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                    <br />
                    <a href={`mailto:${COMPANY.contactEmail}`}>{COMPANY.contactEmail}</a>
                  </span>
                </div>
              </address>

              <div className="socials">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <CheckCircle2 className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="footer-h">Capabilities</h2>
              <ul>
                <li><Link href="/services">All Products &amp; Services</Link></li>
                {CAPABILITIES.map((cap) => (
                  <li key={cap.id}>
                    <Link href={`/services#${cap.id}`}>{cap.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="footer-h">Buyer Resources</h2>
              <ul>
                <li><Link href="/quote">Request a Quotation</Link></li>
                <li><Link href="/process">How We Work (12 Steps)</Link></li>
                <li><Link href="/process#techpack">Tech Pack Checklist</Link></li>
                <li><Link href="/compliance">Compliance &amp; Audits</Link></li>
                <li><Link href="/faq">Frequently Asked Questions</Link></li>
                <li><Link href="/blog">Industry Insights &amp; Guides</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="footer-h">Direct Connect</h2>
              <ul>
                <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
                <li><a href={`mailto:${COMPANY.contactEmail}`}>{COMPANY.contactEmail}</a></li>
                <li><a href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}>{COMPANY.phone}</a></li>
                <li><Link href="/about">About ZIM Sourcing Ltd</Link></li>
                <li><Link href="/contact">Dhaka Office &amp; Inquiries</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bar">
            <p className="made-in">
              <span
                style={{
                  display: 'inline-block',
                  width: '18px',
                  height: '12px',
                  background: '#006a4e',
                  position: 'relative',
                  borderRadius: '2px',
                  verticalAlign: 'middle',
                  marginRight: '8px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    width: '7px',
                    height: '7px',
                    background: '#f42a41',
                    borderRadius: '50%',
                    top: '2.5px',
                    left: '4.5px',
                  }}
                />
              </span>
              <span>
                &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. &middot; Official BGBA Member &middot; Sourced and shipped from Bangladesh.
              </span>
            </p>

            <ul>
              <li>
                <button
                  className="theme-link theme-toggle"
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Switch colour theme"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-4 h-4" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" /> Dark Mode
                    </>
                  )}
                </button>
              </li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/compliance#code">Code of Conduct</Link></li>
            </ul>

            <p className="footer-clock" id="dhaka-time">
              <span
                className="clock-dot"
                style={{
                  background: isOpenOffice ? 'var(--teal)' : '#f59e0b',
                  boxShadow: isOpenOffice ? '0 0 8px var(--teal)' : '0 0 8px #f59e0b',
                }}
              />
              <span className="clock-city">Dhaka</span>
              <span className="clock-time">{dhakaTime}</span>
              <span className="clock-sep" aria-hidden="true">&middot;</span>
              <span>{isOpenOffice ? 'Office Open' : 'After Hours (Messages queued)'}</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="floats">
        {showScrollTop && (
          <button
            className="totop"
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
        <a
          className="wa"
          href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="quotebar">
        <Link className="quotebar-cta" href="/quote">
          Request a Quote <Send className="w-4 h-4" style={{ marginLeft: '6px' }} />
        </Link>
        <a
          className="quotebar-wa"
          href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message ZIM Sourcing on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}
