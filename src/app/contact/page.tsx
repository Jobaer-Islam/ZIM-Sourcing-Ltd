import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ZIM Sourcing Ltd | Dhaka Garments Buying House',
  description: 'Contact ZIM Sourcing in Dhaka, Bangladesh by email, phone, WhatsApp or visit our Mirpur office. Buyer factory visits arranged on request.',
};

export default function Page() {
  return (
    <>
      <main id="main">
<section className="pagehead">
  <div className="wrap">
    <ol className="crumbs"><li><a href="/">Home</a></li><li><span aria-current="page">Contact</span></li></ol>
    <p className="eyebrow">Contact us</p>
    <h1 className="h1 display">Talk to our Dhaka sourcing team.</h1>
    <p className="lead">Email is the best way to reach us: it keeps your specifications, drawings and approvals in one thread we can work from. For product pricing, please use the quotation form so we have what we need to cost your programme.</p>
    <div className="cluster mt-4">
      <a className="btn btn-lg" href="/quote">Request a Quote <svg aria-hidden="true"><use href="#i-arrow"/></svg></a>
      <a className="btn btn-ghost btn-lg" href="mailto:info@zimsourcing.com"><svg aria-hidden="true"><use href="#i-mail"/></svg> Email us</a>
    </div>
  </div>
</section>

<section className="section-tight">
  <div className="wrap">
    <div className="grid g-3">
      <div className="card contact-card">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-mail"/></svg></span>
        <h2 className="h4">General enquiries</h2>
        <p className="contact-value"><a href="mailto:info@zimsourcing.com">info@zimsourcing.com</a></p>
        <button className="copy-btn" type="button" data-copy="info@zimsourcing.com">
          <svg aria-hidden="true"><use href="#i-copy"/></svg><span>Copy</span>
        </button>
      </div>
      <div className="card contact-card">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-mail"/></svg></span>
        <h2 className="h4">New business</h2>
        <p className="contact-value"><a href="mailto:contact@zimsourcing.com">contact@zimsourcing.com</a></p>
        <button className="copy-btn" type="button" data-copy="contact@zimsourcing.com">
          <svg aria-hidden="true"><use href="#i-copy"/></svg><span>Copy</span>
        </button>
      </div>
      <a className="card card-hover contact-card" href="https://wa.me/8801632697791" target="_blank" rel="noopener">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-whatsapp"/></svg></span>
        <h2 className="h4">WhatsApp</h2>
        <p className="contact-value">Open a chat with the Dhaka office</p>
        <span className="small muted">Useful for quick questions. Anything with files or specifications is better by email.</span>
      </a>
      <div className="card contact-card">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-pin"/></svg></span>
        <h2 className="h4">Head office</h2>
        <p className="contact-value">Pallabi, Mirpur<br />Dhaka 1216, Bangladesh</p>
        <span className="small muted">Visits by appointment. <a href="/about#visiting">Planning a trip?</a></span>
      </div>
      <div className="card contact-card">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-shield"/></svg></span>
        <h2 className="h4">BGBA member</h2>
        <p className="contact-value">Bangladesh Garment Buying House Association</p>
        <span className="small muted">The apex trade body for buying houses, approved by the Ministry of Commerce</span>
      </div>
    </div>
  </div>
</section>

<section className="section" aria-labelledby="hours-h">
  <div className="wrap">
    <div className="section-head center">
      <p className="eyebrow">Office hours</p>
      <h2 className="h2 display" id="hours-h">When we are at our desks, in your time.</h2>
      <p className="lead mt-2">We are open Monday to Saturday, 10 am to 6 pm in Dhaka, with Sunday by appointment. The panel below converts that to the clock on your own device, so there is nothing to work out.</p>
    </div>

    <div className="tz reveal" data-tz>
      <div className="tz-face">
        <p className="tz-label">Dhaka office</p>
        <p className="tz-time" data-tz-dhaka>&ndash;&ndash;:&ndash;&ndash;</p>
        <p className="tz-zone">Bangladesh Standard Time, GMT+6</p>
      </div>
      <div className="tz-face">
        <p className="tz-label">Your device <span className="tz-name" data-tz-name></span></p>
        <p className="tz-time" data-tz-local>&ndash;&ndash;:&ndash;&ndash;</p>
        <p className="tz-zone" data-tz-offset></p>
      </div>
      <div className="tz-state">
        <span className="clock-dot" data-tz-dot></span>
        <span data-tz-status>Checking the time in Dhaka</span>
      </div>
      <p className="tz-window" data-tz-window>Our 10 am to 6 pm in Dhaka falls at these hours where you are.</p>
    </div>
    <p className="table-note center">Urgent messages sent by WhatsApp are seen outside office hours. Sunday calls and visits can be arranged on request.</p>
  </div>
</section>

</main>
    </>
  );
}
