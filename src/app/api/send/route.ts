import { NextResponse } from "next/server";
import { resend, TARGET_RECIPIENTS, SANDBOX_FALLBACK, generateQuoteEmailHtml } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let data: Record<string, string> = {};

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      formData.forEach((value, key) => {
        if (typeof value === "string") {
          data[key] = data[key] ? `${data[key]}, ${value}` : value;
        } else if (value instanceof File) {
          data[key] = `[Attachment: ${value.name} (${Math.round(value.size / 1024)} KB)]`;
        }
      });
    } else {
      data = await req.json();
    }

    // Check honeypot
    if (data.company_website) {
      return NextResponse.json({ success: true, message: "Enquiry received" });
    }

    const ref = data._reference || `ZIM-RFQ-${Date.now()}`;
    const name = data.name || "N/A";
    const company = data.company || "N/A";
    const email = data.email || "N/A";

    const subject = `New Quotation Request ${ref} — ${company} (${name})`;
    const html = generateQuoteEmailHtml({
      reference: ref,
      name,
      company,
      email,
      phone: data.phone,
      country: data.country || "Not specified",
      category: data.category || "General Apparel",
      quantity: data.quantity || "1000",
      gsm: data.gsm,
      size_range: data.size_range,
      colours: data.colours,
      target_price: data.target_price,
      incoterm: data.incoterm,
      delivery_date: data.delivery_date,
      compliance: data.compliance,
      extras: data.extras
    });

    // Attempt sending to primary recipients from verified company domain
    let sendResult = await resend.emails.send({
      from: "ZIM Sourcing <contact@zimsourcing.com>",
      to: TARGET_RECIPIENTS,
      subject,
      html,
      replyTo: email && email.includes("@") ? email : undefined
    });

    // If sandbox restriction on unverified domain, fallback to account email
    if (sendResult.error) {
      const errMsg = sendResult.error.message || "";
      if (errMsg.includes("only send testing emails") || sendResult.error.name === "validation_error") {
        const fallbackResult = await resend.emails.send({
          from: "ZIM Sourcing <onboarding@resend.dev>",
          to: [SANDBOX_FALLBACK],
          subject,
          html,
          replyTo: email && email.includes("@") ? email : undefined
        });

        if (fallbackResult.error) {
          return NextResponse.json({ success: false, error: fallbackResult.error.message }, { status: 400 });
        }

        return NextResponse.json({
          success: true,
          reference: ref,
          id: fallbackResult.data?.id,
          note: `Delivered to verified account (${SANDBOX_FALLBACK}). To send directly to rayhanek202@gmail.com and @zimsourcing.com, please verify 'zimsourcing.com' on resend.com/domains.`
        });
      }

      return NextResponse.json({ success: false, error: errMsg }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      reference: ref,
      id: sendResult.data?.id,
      note: "Quotation request successfully dispatched."
    });
  } catch (error: any) {
    console.error("API /api/send error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to process quotation request" },
      { status: 500 }
    );
  }
}
