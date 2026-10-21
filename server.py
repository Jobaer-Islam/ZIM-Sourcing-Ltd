import os
import sys
import json
import urllib.request
import urllib.error
import urllib.parse
import email.parser
from http.server import HTTPServer, SimpleHTTPRequestHandler

def load_env():
    env_file = os.path.join(os.path.dirname(__file__), ".env")
    if os.path.exists(env_file):
        with open(env_file, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    os.environ.setdefault(k.strip(), v.strip().strip("'\""))

load_env()

PORT = 8000
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
TARGET_EMAILS = ["rayhanek202@gmail.com", "contact@zimsourcing.com", "info@zimsourcing.com"]
SANDBOX_FALLBACK_EMAIL = "jobaerislam10@gmail.com"

class ZIMSourcingHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable aggressive caching for dev
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Accept")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == "/api/send" or self.path == "/api/quote":
            self.handle_resend_submission()
        else:
            self.send_error(404, "Endpoint not found")

    def parse_body(self):
        content_type = self.headers.get("Content-Type", "")
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length) if length > 0 else b""
        fields = {}

        if "multipart/form-data" in content_type:
            mime_headers = f"Content-Type: {content_type}\r\nMIME-Version: 1.0\r\n\r\n".encode("utf-8")
            msg = email.parser.BytesParser().parsebytes(mime_headers + body)
            if msg.is_multipart():
                for part in msg.get_payload():
                    name_param = part.get_param("name", header="content-disposition")
                    filename_param = part.get_param("filename", header="content-disposition")
                    if name_param:
                        if filename_param:
                            fields[name_param] = f"[File: {filename_param}]"
                        else:
                            val = part.get_payload(decode=True)
                            if val:
                                try:
                                    val_str = val.decode("utf-8")
                                except UnicodeDecodeError:
                                    val_str = val.decode("latin-1")
                                if name_param in fields:
                                    fields[name_param] += f", {val_str}"
                                else:
                                    fields[name_param] = val_str
        elif "application/json" in content_type:
            fields = json.loads(body.decode("utf-8"))
        else:
            parsed = urllib.parse.parse_qs(body.decode("utf-8", errors="ignore"))
            for k, v in parsed.items():
                fields[k] = ", ".join(v)

        return fields

    def handle_resend_submission(self):
        try:
            fields = self.parse_body()
        except Exception as e:
            print("Error parsing form data:", e)
            self.send_json(400, {"error": f"Failed to parse form: {str(e)}"})
            return

        # Check honeypot
        if fields.get("company_website"):
            print("Honeypot triggered, ignoring submission silently.")
            self.send_json(200, {"success": True, "message": "Enquiry received."})
            return

        ref = fields.get("_reference", f"ZIM-RFQ-{fields.get('company', 'NEW')}")
        name = fields.get("name", "N/A")
        company = fields.get("company", "N/A")
        email = fields.get("email", "N/A")
        phone = fields.get("phone", "N/A")
        country = fields.get("country", "N/A")
        category = fields.get("category", "N/A")
        quantity = fields.get("quantity", "N/A")
        target_price = fields.get("target_price", "N/A")
        incoterm = fields.get("incoterm", "N/A")
        delivery_date = fields.get("delivery_date", "N/A")
        gsm = fields.get("gsm", "N/A")
        size_range = fields.get("size_range", "N/A")
        colours = fields.get("colours", "N/A")
        compliance = fields.get("compliance", "Standard")
        extras = fields.get("extras", "None")

        subject = f"New Quotation Request {ref} — {company} ({name})"

        html_body = f"""
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; margin: 0; padding: 24px; color: #1E2A56; }}
            .card {{ background: #ffffff; max-width: 650px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.06); border: 1px solid #e1e4ea; }}
            .header {{ background: #1E2A56; color: #ffffff; padding: 28px 32px; border-bottom: 4px solid #E5C158; }}
            .header h1 {{ margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }}
            .header p {{ margin: 6px 0 0; color: #E5C158; font-size: 14px; font-weight: 500; }}
            .content {{ padding: 32px; }}
            .section-title {{ font-size: 15px; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; font-weight: 700; margin: 24px 0 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }}
            .section-title:first-child {{ margin-top: 0; }}
            table {{ width: 100%; border-collapse: collapse; margin-bottom: 8px; }}
            th, td {{ padding: 10px 12px; text-align: left; font-size: 14px; }}
            th {{ width: 38%; color: #475569; font-weight: 600; background-color: #f8fafc; border-radius: 4px; }}
            td {{ color: #0f172a; font-weight: 500; }}
            .badge {{ display: inline-block; padding: 4px 10px; background: #e0e7ff; color: #3730a3; border-radius: 6px; font-weight: 600; font-size: 13px; }}
            .footer {{ background: #f8fafc; padding: 20px 32px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }}
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>ZIM Sourcing Ltd &mdash; New Quotation Enquiry</h1>
              <p>Reference: {ref}</p>
            </div>
            <div class="content">
              <div class="section-title">Buyer Contact Information</div>
              <table>
                <tr><th>Client Name</th><td>{name}</td></tr>
                <tr><th>Company</th><td><strong>{company}</strong></td></tr>
                <tr><th>Work Email</th><td><a href="mailto:{email}">{email}</a></td></tr>
                <tr><th>Phone / WhatsApp</th><td>{phone}</td></tr>
                <tr><th>Destination Country</th><td>{country}</td></tr>
              </table>

              <div class="section-title">Product & Sourcing Specifications</div>
              <table>
                <tr><th>Product Category</th><td><span class="badge">{category}</span></td></tr>
                <tr><th>Estimated Quantity</th><td><strong>{quantity} pcs</strong></td></tr>
                <tr><th>Fabric Weight (GSM)</th><td>{gsm}</td></tr>
                <tr><th>Size Range</th><td>{size_range}</td></tr>
                <tr><th>Colorways</th><td>{colours}</td></tr>
                <tr><th>Target FOB Price</th><td>{target_price}</td></tr>
                <tr><th>Preferred Incoterm</th><td>{incoterm}</td></tr>
                <tr><th>Required Delivery</th><td>{delivery_date}</td></tr>
              </table>

              <div class="section-title">Compliance & Special Requirements</div>
              <table>
                <tr><th>Compliance Standards</th><td>{compliance}</td></tr>
                <tr><th>Additional Requests</th><td>{extras}</td></tr>
              </table>
            </div>
            <div class="footer">
              ZIM Sourcing Ltd &bull; Pallabi, Mirpur, Dhaka 1216, Bangladesh<br>
              Direct contact: contact@zimsourcing.com | info@zimsourcing.com
            </div>
          </div>
        </body>
        </html>
        """

        # Attempt to send via Resend API
        resend_result, status_code, note = self.send_resend_email(
            recipients=TARGET_EMAILS,
            subject=subject,
            html=html_body,
            reply_to=email if email and "@" in email else None
        )

        if resend_result:
            self.send_json(200, {
                "success": True,
                "reference": ref,
                "id": resend_result.get("id"),
                "recipients": resend_result.get("to", TARGET_EMAILS),
                "note": note
            })
        else:
            self.send_json(status_code, {
                "success": False,
                "error": note or "Failed to send email via Resend"
            })

    def send_resend_email(self, recipients, subject, html, reply_to=None):
        payload = {
            "from": "ZIM Sourcing <onboarding@resend.dev>",
            "to": recipients,
            "subject": subject,
            "html": html
        }
        if reply_to:
            payload["reply_to"] = reply_to

        headers = {
            "Authorization": f"Bearer {RESEND_API_KEY}",
            "Content-Type": "application/json",
            "User-Agent": "resend-node:2.0.0"
        }

        # Try primary recipients
        req = urllib.request.Request(
            "https://api.resend.com/emails",
            data=json.dumps(payload).encode("utf-8"),
            headers=headers
        )

        try:
            with urllib.request.urlopen(req) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                return data, 200, "Sent directly to requested recipient list."
        except urllib.error.HTTPError as e:
            err_body = e.read().decode("utf-8")
            print(f"Resend HTTP {e.code}: {err_body}")

            # Check for domain verification restriction (Sandbox mode)
            if e.code == 403 and "only send testing emails to your own email address" in err_body:
                print("Sandbox restriction detected. Retrying to verified sandbox recipient:", SANDBOX_FALLBACK_EMAIL)
                payload["to"] = [SANDBOX_FALLBACK_EMAIL]
                req2 = urllib.request.Request(
                    "https://api.resend.com/emails",
                    data=json.dumps(payload).encode("utf-8"),
                    headers=headers
                )
                try:
                    with urllib.request.urlopen(req2) as resp2:
                        data2 = json.loads(resp2.read().decode("utf-8"))
                        note = (
                            f"Delivered to verified Resend account ({SANDBOX_FALLBACK_EMAIL}). "
                            "To send directly to rayhanek202@gmail.com and @zimsourcing.com, "
                            "please add and verify 'zimsourcing.com' at https://resend.com/domains."
                        )
                        return data2, 200, note
                except Exception as e2:
                    return None, 500, f"Resend error: {str(e2)}"

            return None, e.code, f"Resend error: {err_body}"
        except Exception as e:
            return None, 500, f"Network error: {str(e)}"

    def send_json(self, status_code, data):
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode("utf-8"))

def run():
    server_address = ("127.0.0.1", PORT)
    httpd = HTTPServer(server_address, ZIMSourcingHandler)
    print(f"ZIM Sourcing server running on http://127.0.0.1:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        httpd.server_close()

if __name__ == "__main__":
    run()
