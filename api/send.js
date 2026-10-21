export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
  const TARGET_EMAILS = ['rayhanek202@gmail.com', 'contact@zimsourcing.com', 'info@zimsourcing.com'];
  const SANDBOX_FALLBACK_EMAIL = 'jobaerislam10@gmail.com';

  const body = req.body || {};
  if (body.company_website) {
    // Honeypot caught
    return res.status(200).json({ success: true, message: 'Enquiry received' });
  }

  const ref = body._reference || `ZIM-RFQ-${Date.now()}`;
  const name = body.name || 'N/A';
  const company = body.company || 'N/A';
  const email = body.email || 'N/A';
  const phone = body.phone || 'N/A';
  const country = body.country || 'N/A';
  const category = body.category || 'N/A';
  const quantity = body.quantity || 'N/A';
  const target_price = body.target_price || 'N/A';
  const incoterm = body.incoterm || 'N/A';
  const delivery_date = body.delivery_date || 'N/A';
  const gsm = body.gsm || 'N/A';
  const size_range = body.size_range || 'N/A';
  const colours = body.colours || 'N/A';
  const compliance = body.compliance || 'Standard';
  const extras = body.extras || 'None';

  const subject = `New Quotation Request ${ref} — ${company} (${name})`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e1e4ea; border-radius: 12px; overflow: hidden;">
      <div style="background: #1E2A56; color: #ffffff; padding: 24px 30px; border-bottom: 4px solid #E5C158;">
        <h2 style="margin: 0;">ZIM Sourcing Ltd &mdash; Quotation Request</h2>
        <p style="margin: 6px 0 0; color: #E5C158; font-weight: bold;">Reference: ${ref}</p>
      </div>
      <div style="padding: 28px 30px;">
        <h3 style="color: #64748b; font-size: 14px; text-transform: uppercase;">Buyer Contact</h3>
        <p><strong>Name:</strong> ${name}<br><strong>Company:</strong> ${company}<br><strong>Email:</strong> <a href="mailto:${email}">${email}</a><br><strong>Phone/WhatsApp:</strong> ${phone}<br><strong>Country:</strong> ${country}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <h3 style="color: #64748b; font-size: 14px; text-transform: uppercase;">Product Specifications</h3>
        <p><strong>Category:</strong> ${category}<br><strong>Quantity:</strong> ${quantity} pcs<br><strong>Fabric GSM:</strong> ${gsm}<br><strong>Size Range:</strong> ${size_range}<br><strong>Colours:</strong> ${colours}<br><strong>Target Price:</strong> ${target_price}<br><strong>Incoterm:</strong> ${incoterm}<br><strong>Required Delivery:</strong> ${delivery_date}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <h3 style="color: #64748b; font-size: 14px; text-transform: uppercase;">Compliance & Notes</h3>
        <p><strong>Compliance:</strong> ${compliance}<br><strong>Requests:</strong> ${extras}</p>
      </div>
      <div style="background: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
        ZIM Sourcing Ltd &bull; Dhaka, Bangladesh
      </div>
    </div>
  `;

  async function sendEmail(recipients) {
    return fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'resend-node:2.0.0'
      },
      body: JSON.stringify({
        from: 'ZIM Sourcing <contact@zimsourcing.com>',
        to: recipients,
        subject,
        html,
        reply_to: email && email.includes('@') ? email : undefined
      })
    });
  }

  try {
    let response = await sendEmail(TARGET_EMAILS);
    let data = await response.json();

    if (!response.ok && data?.message?.includes('only send testing emails')) {
      // Fallback for unverified sandbox domain
      response = await sendEmail([SANDBOX_FALLBACK_EMAIL]);
      data = await response.json();
      return res.status(200).json({
        success: true,
        reference: ref,
        id: data.id,
        note: `Delivered to verified account (${SANDBOX_FALLBACK_EMAIL}). Verify zimsourcing.com on resend.com/domains to deliver to all addresses.`
      });
    }

    if (!response.ok) {
      return res.status(response.status).json({ success: false, error: data });
    }

    return res.status(200).json({ success: true, reference: ref, id: data.id });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
