# ZIM Sourcing Ltd

A modern, fast, responsive multi-page web application built with **Next.js 15 (App Router)** for **ZIM Sourcing Ltd**, an international apparel and garments buying house based in Dhaka, Bangladesh.

## Head Office & Contact
- **Location**: House 55, Road 12, Sector 14, Uttara, Dhaka-1230, Bangladesh
- **Phone / WhatsApp**: +880 1819-453297 / 01819453297
- **Emails**: info@zimsourcing.com | contact@zimsourcing.com
- **Association**: Official Member, Bangladesh Garment Buying House Association (BGBA)

## Architecture

- **Framework**: Next.js 15 (App Router) with TypeScript & React 19
- **Styling**: Tailored design tokens and typography in `assets/css/style.css`
- **Pages (`src/app/`)**:
  - `/` — Homepage with hero parallax slider, interactive order tracker, commercial video showcase, operational photo grid, and FAQs
  - `/about` — Company background, capacity by category, BGBA accreditation, and Uttara headquarters
  - `/services` — Detailed sourcing capabilities (Knitwear, Woven, Sweater, Denim, Uniforms, Full-Service)
  - `/process` — Order journey from enquiry to FOB/CIF delivery, tech pack checklist, and sampling protocols
  - `/quote` — Multi-step interactive RFQ quotation builder with file upload
  - `/compliance` — RSC building safety, social compliance, and ETP environmental standards
  - `/contact` — Direct inquiry channels, office location, and live Dhaka vs local time converter
  - `/blog` — Sourcing guides (Tech Pack Guide, Factory Compliance Checklist)
  - `/faq`, `/privacy`, `/terms` — Buyer knowledge base, privacy policy, and terms
- **API Routes**:
  - `src/app/api/send/route.ts` — Resend email integration handling both `multipart/form-data` and JSON inquiries.

## Running Locally

```bash
npm install
npm run dev
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

To create a production build:
```bash
npm run build
npm start
```

## Email & RFQ Submission Setup (Resend)

The quotation form is wired to send inquiries via **Resend**:
- **API Key**: Configured in `.env` as `RESEND_API_KEY`
- **Target Recipient Emails**:
  - `rayhanek202@gmail.com`
  - `contact@zimsourcing.com`
  - `info@zimsourcing.com`
