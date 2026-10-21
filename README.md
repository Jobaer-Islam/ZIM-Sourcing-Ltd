<div align="center">

# ZIM Sourcing Web Application

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![Resend](https://img.shields.io/badge/Resend-Email_API-black?style=for-the-badge&logo=resend)](https://resend.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](#license)

High-performance, enterprise-grade multi-page web platform engineered with **Next.js 15 App Router**, Server Components (RSC), TypeScript, and zero-runtime CSS design tokens. Features serverless edge API routes, multi-step RFQ workflows, and automated transactional email dispatch.

[Live Production](https://www.zimsourcing.com) • [Vercel Deployment](https://zim-sourcing-ltd.vercel.app) • [API Documentation](#-api-reference)

</div>

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Server Components & Dynamic Edge Routes) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict mode enabled) |
| **Styling** | Vanilla CSS with HSL design tokens, glassmorphism, responsive clamp typography, and dark/light mode engine |
| **Icons** | [Lucide React](https://lucide.dev/) & optimized accessible inline SVG symbol sprite |
| **Email Infrastructure** | [Resend](https://resend.com/) (DKIM & SPF authenticated serverless delivery) |
| **Hosting & CI/CD** | [Vercel](https://vercel.com/) (Global Edge CDN, auto-building on `git push`) |

---

## 📁 Repository Structure

```text
├── assets/                     # Legacy static resources & core stylesheets
│   ├── css/style.css           # Global design system tokens & utility classes
│   └── js/main.js              # Client-side progressive enhancement scripts
├── public/                     # Static public assets (CDN-served)
│   ├── assets/                 # Optimized images, posters & photos
│   ├── media/                  # Video assets (commercial MP4s)
│   ├── favicon.ico             # Multi-resolution ICO
│   └── site.webmanifest        # Progressive Web App manifest
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── layout.tsx          # Root layout, metadataBase & global HTML wrapper
│   │   ├── page.tsx            # Landing page (hero slider, video showcase, workflow)
│   │   ├── about/page.tsx      # Corporate background & factory network
│   │   ├── services/page.tsx   # Detailed category catalog & tech specs
│   │   ├── process/page.tsx    # 9-stage production & inspection pipeline
│   │   ├── quote/page.tsx      # Multi-step RFQ builder
│   │   ├── compliance/page.tsx # Social, structural (RSC) & eco compliance
│   │   ├── contact/page.tsx    # Inquiries & live timezone converter
│   │   ├── blog/               # Sourcing insights & technical guides
│   │   └── api/
│   │       └── send/route.ts   # Serverless email dispatch handler
│   ├── components/             # Reusable React components
│   │   ├── layout/             # Header, Footer, Navigation Drawer
│   │   └── ui/                 # QuoteWizard, VideoPlayer, Interactive UI
│   ├── lib/
│   │   ├── constants.ts        # Typed application constants & navigation schema
│   │   └── resend.ts           # Resend client SDK & email template generator
│   └── styles/
│       └── globals.css         # Framework styling imports
├── .env.example                # Template for environment variables
├── next.config.mjs             # Next.js build & routing configuration
├── tsconfig.json               # TypeScript compiler options
└── package.json                # Project dependencies & scripts
```

---

## ⚡ Quick Start

### Prerequisites
- **Node.js**: `v18.18.0` or later (`v20+` recommended)
- **NPM**: `v9.0.0` or later

### 1. Clone the repository
```bash
git clone https://github.com/Jobaer-Islam/ZIM-Sourcing-Ltd.git
cd ZIM-Sourcing-Ltd
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the project root:
```bash
cp .env.example .env.local
```
Add your configuration keys:
```env
RESEND_API_KEY=re_your_api_key_here
```

### 4. Run development server
```bash
npm run dev
```
Navigate to [http://localhost:8000](http://localhost:8000) to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Next.js development server on port `8000` with hot-module reload |
| `npm run build` | Generates an optimized production build (`.next/standalone`) |
| `npm run start` | Runs the compiled production server locally |
| `npm run lint` | Runs Next.js ESLint and TypeScript type checking |

---

## 📡 API Reference

### `POST /api/send`
Handles quotation requests and buyer inquiries via JSON or `multipart/form-data`. Dispatches an authenticated transactional email via Resend to the procurement inboxes.

#### Request Headers
```http
Content-Type: application/json
Accept: application/json
```

#### Request Payload
```json
{
  "name": "Jane Doe",
  "company": "Nordic Apparel Co",
  "email": "jane@nordicapparel.se",
  "phone": "+46 70 123 4567",
  "country": "Sweden",
  "category": "Knitwear - Organic Cotton Hoodies",
  "quantity": "3000",
  "gsm": "320 GSM French Terry",
  "size_range": "XS to 3XL",
  "colours": "3 Colors",
  "target_price": "$7.50 FOB",
  "delivery_date": "2026-12-15",
  "compliance": "BSCI, OEKO-TEX Standard 100",
  "extras": "Need proto sample within 10 days."
}
```

#### Response (`200 OK`)
```json
{
  "success": true,
  "reference": "ZIM-RFQ-1792610675344",
  "id": "01a15fec-2207-7729-8349-8541e69497b2",
  "note": "Quotation request successfully dispatched."
}
```

---

## 🚀 Deployment & CI/CD

The platform is integrated with **Vercel** for automated continuous deployment.

1. **Production Branch**: Pushes to `main` trigger an automated build and zero-downtime deployment.
2. **Preview Environments**: Pull Requests generate ephemeral preview URLs with isolated preview builds.
3. **Edge Optimization**: Static pages are pre-rendered at build time (`SSG`), and dynamic API routes run on serverless edge functions.

```bash
# Production deployment via Vercel CLI (optional)
vercel --prod
```

---

## 📄 License

Proprietary Software. All rights reserved. &copy; 2015–2026 **ZIM Sourcing Ltd**.
