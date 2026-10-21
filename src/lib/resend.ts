import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
export const resend = new Resend(RESEND_API_KEY);

export const TARGET_RECIPIENTS = [
  "rayhanek202@gmail.com",
  "contact@zimsourcing.com",
  "info@zimsourcing.com"
];

export const SANDBOX_FALLBACK = "jobaerislam10@gmail.com";

export function generateQuoteEmailHtml(data: {
  reference: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  country: string;
  category: string;
  quantity: string;
  gsm?: string;
  size_range?: string;
  colours?: string;
  target_price?: string;
  incoterm?: string;
  delivery_date?: string;
  compliance?: string;
  extras?: string;
}) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; margin: 0; padding: 24px; color: #1E2A56; }
      .card { background: #ffffff; max-width: 650px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.06); border: 1px solid #e1e4ea; }
      .header { background: #1E2A56; color: #ffffff; padding: 28px 32px; border-bottom: 4px solid #E5C158; }
      .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
      .header p { margin: 6px 0 0; color: #E5C158; font-size: 14px; font-weight: 500; }
      .content { padding: 32px; }
      .section-title { font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; font-weight: 700; margin: 24px 0 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }
      .section-title:first-child { margin-top: 0; }
      table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
      th, td { padding: 10px 12px; text-align: left; font-size: 14px; }
      th { width: 38%; color: #475569; font-weight: 600; background-color: #f8fafc; border-radius: 4px; }
      td { color: #0f172a; font-weight: 500; }
      .badge { display: inline-block; padding: 4px 10px; background: #e0e7ff; color: #3730a3; border-radius: 6px; font-weight: 600; font-size: 13px; }
      .footer { background: #f8fafc; padding: 20px 32px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="header">
        <h1>ZIM Sourcing Ltd &mdash; New Quotation Request</h1>
        <p>Reference: ${data.reference}</p>
      </div>
      <div class="content">
        <div class="section-title">Buyer Contact Information</div>
        <table>
          <tr><th>Client Name</th><td>${data.name}</td></tr>
          <tr><th>Company</th><td><strong>${data.company}</strong></td></tr>
          <tr><th>Work Email</th><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><th>Phone / WhatsApp</th><td>${data.phone || "Not specified"}</td></tr>
          <tr><th>Destination Country</th><td>${data.country}</td></tr>
        </table>

        <div class="section-title">Product & Sourcing Specifications</div>
        <table>
          <tr><th>Product Category</th><td><span class="badge">${data.category}</span></td></tr>
          <tr><th>Estimated Quantity</th><td><strong>${data.quantity} pcs</strong></td></tr>
          <tr><th>Fabric Weight (GSM)</th><td>${data.gsm || "To be advised"}</td></tr>
          <tr><th>Size Range</th><td>${data.size_range || "Standard"}</td></tr>
          <tr><th>Colorways</th><td>${data.colours || "1"}</td></tr>
          <tr><th>Target FOB Price</th><td>${data.target_price || "Open to quotation"}</td></tr>
          <tr><th>Preferred Incoterm</th><td>${data.incoterm || "FOB"}</td></tr>
          <tr><th>Required Delivery</th><td>${data.delivery_date || "Flexible"}</td></tr>
        </table>

        <div class="section-title">Compliance & Special Requirements</div>
        <table>
          <tr><th>Compliance Standards</th><td>${data.compliance || "Standard Ethical Factory"}</td></tr>
          <tr><th>Additional Requests</th><td>${data.extras || "None"}</td></tr>
        </table>
      </div>
      <div class="footer">
        ZIM Sourcing Ltd &bull; House 55, Road 12, Sector 14, Uttara, Dhaka-1230, Bangladesh<br>
        Phone / WhatsApp: +880 1819-453297 &bull; contact@zimsourcing.com | info@zimsourcing.com
      </div>
    </div>
  </body>
  </html>
  `;
}
