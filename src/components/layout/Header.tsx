"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, ArrowRight, ChevronDown, Mail, Phone } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";

export const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Read theme preference (default to dark)
    const saved = localStorage.getItem("zim-theme") as "light" | "dark" | null;
    const initial = saved === "light" ? "light" : "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("zim-theme", next);
    } catch (e) {}
  };

  useEffect(() => {
    // Close drawer on route change
    setDrawerOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`header ${isScrolled ? "is-scrolled" : ""}`}>
        <nav className="wrap nav" aria-label="Primary">
          <Link href="/" className="brand" aria-label="ZIM Sourcing Ltd home">
            <Image
              className="brand-mark"
              src="/assets/img/logo.png"
              alt="ZIM Sourcing Ltd"
              width={48}
              height={48}
              priority
            />
            <span className="brand-text">
              <span className="brand-name">ZIM Sourcing Ltd</span>
              <span className="brand-sub">Dhaka &bull; Bangladesh</span>
            </span>
          </Link>

          <ul className="nav-menu">
            {NAV_LINKS.map((item) => {
              if (item.children) {
                return (
                  <li
                    key={item.href}
                    className="nav-item"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`nav-link nav-btn ${pathname.startsWith(item.href) ? "is-active" : ""}`}
                      type="button"
                      aria-expanded={dropdownOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className={`dropdown-icon ${dropdownOpen ? "is-rot" : ""}`} />
                    </button>
                    {dropdownOpen && (
                      <ul className="nav-drop" role="menu">
                        {item.children.map((sub) => (
                          <li key={sub.href}>
                            <Link href={sub.href} className="nav-drop-link">
                              <strong>{sub.label}</strong>
                              <span>{sub.desc}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href} className="nav-item">
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive ? "is-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="icon-btn theme-toggle"
              type="button"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <Link href="/quote" className="btn nav-cta">
              <span>Request a Quote</span>
              <ArrowRight size={14} className="icon-ml" />
            </Link>

            <button
              onClick={() => setDrawerOpen(true)}
              className="icon-btn nav-toggle"
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`drawer ${drawerOpen ? "is-open" : ""}`} id="drawer">
        <div className="drawer-scrim" onClick={() => setDrawerOpen(false)} />
        <div className="drawer-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className="drawer-head">
            <span className="brand-name font-display text-lg">ZIM Sourcing Ltd</span>
            <button
              onClick={() => setDrawerOpen(false)}
              className="icon-btn"
              type="button"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <div className="drawer-body">
            <Link href="/quote" className="m-primary">
              <strong>Request a Quote</strong>
              <ArrowRight size={16} />
            </Link>

            <Link href="/" className="drawer-link">Home</Link>
            <Link href="/about" className="drawer-link">Company Background</Link>
            <Link href="/services" className="drawer-link">Products &amp; Services</Link>
            <Link href="/process" className="drawer-link">How to Order</Link>
            <Link href="/compliance" className="drawer-link">Compliance &amp; Audits</Link>
            <Link href="/contact" className="drawer-link">Contact Head Office</Link>

            <p className="m-divider">Insights &amp; Guides</p>
            <div className="m-more">
              <Link href="/blog">All Insights Hub</Link>
              <Link href="/blog/tech-pack-guide">Tech Pack Guide</Link>
              <Link href="/blog/factory-compliance-checklist">Compliance Checklist</Link>
              <Link href="/faq">Buyer FAQ</Link>
            </div>

            <div className="drawer-foot">
              <Link href="/quote" className="btn btn-block">Request a Quote</Link>
              <a href={`mailto:${COMPANY_INFO.email}`} className="btn btn-ghost btn-block">
                <Mail size={15} className="icon-mr" />
                <span>Email Us</span>
              </a>
              <button onClick={toggleTheme} className="theme-link theme-toggle" type="button">
                <span>Theme: {theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
