# ZIM Sourcing Ltd

A modern, fast, responsive multi-page web application built with **Next.js 15 (App Router)** for **ZIM Sourcing Ltd**, a premier international apparel and garments buying house based in Dhaka, Bangladesh.

---

## 🌐 Live URLs & Links

- **Official Live Website (Custom Domain)**: [https://www.zimsourcing.com](https://www.zimsourcing.com) / [https://zimsourcing.com](https://zimsourcing.com)
- **Vercel Cloud Deployment**: [https://zim-sourcing-ltd.vercel.app](https://zim-sourcing-ltd.vercel.app)
- **GitHub Repository**: [https://github.com/Jobaer-Islam/ZIM-Sourcing-Ltd](https://github.com/Jobaer-Islam/ZIM-Sourcing-Ltd)

---

## 🏢 Head Office & Contact Information

- **Location**: House 55, Road 12, Sector 14, Uttara, Dhaka-1230, Bangladesh
- **Phone / Direct Call**: +880 1819-453297 / 01819453297
- **WhatsApp Chat**: [https://wa.me/8801819453297](https://wa.me/8801819453297)
- **Official Inquiries**: [info@zimsourcing.com](mailto:info@zimsourcing.com) | [contact@zimsourcing.com](mailto:contact@zimsourcing.com)
- **Trade Body Accreditation**: Official Member, Bangladesh Garment Buying House Association (BGBA), Ministry of Commerce Approved

---

## ⚙️ Architecture & Tech Stack

- **Framework**: Next.js 15 (App Router) with TypeScript & React 19
- **Styling**: Vanilla CSS Design Tokens with Dark/Light Theme Switcher & Glassmorphism
- **Icons**: Lucide React & Handcrafted Accessible SVG Sprite System
- **Email Infrastructure**: Resend API Integration with DKIM/SPF domain verification (`contact@zimsourcing.com`)
- **Commercial Media**: Custom broadcast-quality commercial video featuring high-gauge motion graphics, animated HUD overlays, and neural voiceover (`media/zim-sourcing-commercial.mp4`)

---

## 📄 Site Structure & Pages (`src/app/`)

- `/` — Homepage with hero parallax slider, interactive order tracker, commercial video showcase, operational photo grid, and FAQs
- `/about` — Company background, capacity by category, BGBA accreditation, and Uttara headquarters
- `/services` — Detailed sourcing capabilities (Knitwear, Woven, Sweater, Denim, Uniforms, Full-Service)
- `/process` — Order journey from enquiry to FOB/CIF delivery, tech pack checklist, and sampling protocols
- `/quote` — Multi-step interactive RFQ quotation builder with file upload
- `/compliance` — RSC building safety, social compliance, and ETP environmental standards
- `/contact` — Direct inquiry channels, office location, and live Dhaka vs local time converter
- `/blog` — Sourcing guides (Tech Pack Guide, Factory Compliance Checklist)
- `/faq`, `/privacy`, `/terms` — Buyer knowledge base, privacy policy, and terms
- `/api/send` — Serverless API Route handling RFQ submissions and automated Resend email delivery

---

## 🚀 Running Locally

```bash
# Clone the repository
git clone https://github.com/Jobaer-Islam/ZIM-Sourcing-Ltd.git
cd ZIM-Sourcing-Ltd

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

To create a production build:
```bash
npm run build
npm start
```

---

## 📧 Email & RFQ Submission Setup (Resend)

The quotation form is wired to send inquiries via **Resend**:
- **Sender**: `ZIM Sourcing <contact@zimsourcing.com>` (DKIM & SPF Verified)
- **API Key**: Configured in `.env` and Vercel as `RESEND_API_KEY`
- **Target Recipient Inboxes**:
  - `rayhanek202@gmail.com`
  - `contact@zimsourcing.com`
  - `info@zimsourcing.com`

---

## 🔒 License & Copyright

&copy; 2015–2026 **ZIM Sourcing Ltd**. All rights reserved. Registered Private Limited Company in Bangladesh.
