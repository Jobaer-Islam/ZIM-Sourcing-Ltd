# ZIM Sourcing Ltd

A modern, fast, responsive multi-page static website for **ZIM Sourcing Ltd**, an apparel and garments buying house based in Dhaka, Bangladesh.

## Overview

ZIM Sourcing Ltd provides end-to-end apparel sourcing, factory allocation, product development, quality assurance, and export shipment management for international fashion brands and retailers.

## Features

- **Modern Responsive Architecture**: Pure HTML5, Vanilla CSS design system, and lightweight vanilla JavaScript interactions.
- **Pages Included**:
  - `index.html` — Homepage with hero banner, service overview, video showcase, and FAQs.
  - `about.html` — Company background, mission, and core values.
  - `services.html` — Detailed apparel sourcing capabilities across knitwear, woven, sweater, denim, and workwear.
  - `process.html` — 7-step sourcing workflow from tech pack to FOB delivery.
  - `quote.html` — Interactive RFQ quotation builder and specification questionnaire.
  - `compliance.html` — Ethical sourcing, workplace safety, and international certifications (BSCI, SEDEX, OEKO-TEX, GOTS).
  - `contact.html` — Direct inquiry channels, office location, and contact information.
  - `blog/` — Industry guides and sourcing insights (Tech Pack Guide, Factory Compliance Checklist).
  - `faq.html`, `privacy.html`, `terms.html` — Full legal, compliance, and buyer FAQ pages.
- **Zero Build Dependencies**: Runs directly in any static web server or hosting platform (GitHub Pages, Vercel, Netlify, Cloudflare Pages). No Node/npm build steps required.

## Running Locally

Run the local server with built-in Resend email API integration:
```bash
python server.py
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

## Email & RFQ Submission Setup (Resend)

The quotation form is wired to send inquiries via **Resend**:
- **API Key**: Configured in `server.py` and `api/send.js` (can also be overridden using `RESEND_API_KEY` environment variable).
- **Target Recipient Emails**:
  - `rayhanek202@gmail.com`
  - `contact@zimsourcing.com`
  - `info@zimsourcing.com`
- **Domain Verification Note**:
  - On Resend free sandbox, emails are routed to your verified account email (`jobaerislam10@gmail.com`).
  - To enable direct delivery to `rayhanek202@gmail.com`, `contact@zimsourcing.com`, and `info@zimsourcing.com`, verify the `zimsourcing.com` domain in [Resend Domains Dashboard](https://resend.com/domains).
- **Cloud Deployment**: When deploying to Vercel or Netlify, the serverless function in `api/send.js` automatically handles form submissions.

## Customization

- `assets/css/style.css` — Core styling, layout, typography, and dark/light mode themes.
- `assets/js/main.js` — Navigation, interactive components, and RFQ wizard.
- `assets/img/` — Company logos, icons, and product imagery.
- `media/` — Corporate video and media assets.
