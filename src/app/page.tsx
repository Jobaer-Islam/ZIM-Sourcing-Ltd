import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Garments Buying House in Bangladesh | ZIM Sourcing Ltd',
  description: 'ZIM Sourcing manages apparel development, factory sourcing, quality control and shipment in Bangladesh for international buyers. Request an FOB quotation.',
};

export default function Page() {
  return (
    <>
      <main id="main">
<section className="hero" data-entry>
  <div className="hero-slides" data-parallax>
    <img className="hero-slide is-active" src="/assets/img/photos/hero-1-1280.jpg" srcSet="/assets/img/photos/hero-1-800.jpg 800w, /assets/img/photos/hero-1-1280.jpg 1280w, /assets/img/photos/hero-1-1920.jpg 1920w" sizes="100vw" alt="Workers organising finished textiles on a busy garment factory floor" width="1920" height="1080" fetchPriority="high" decoding="async" />
    <img className="hero-slide" src="/assets/img/photos/hero-2-1280.jpg" srcSet="/assets/img/photos/hero-2-800.jpg 800w, /assets/img/photos/hero-2-1280.jpg 1280w, /assets/img/photos/hero-2-1920.jpg 1920w" sizes="100vw" alt="Machine operators sewing on the production line of an apparel factory" width="1920" height="1080" loading="lazy" decoding="async" />
    <img className="hero-slide" src="/assets/img/photos/hero-3-1280.jpg" srcSet="/assets/img/photos/hero-3-800.jpg 800w, /assets/img/photos/hero-3-1280.jpg 1280w, /assets/img/photos/hero-3-1920.jpg 1920w" sizes="100vw" alt="Rolls of finished fabric on a textile mill floor" width="1920" height="1080" loading="lazy" decoding="async" />
    <img className="hero-slide" src="/assets/img/photos/hero-4-1280.jpg" srcSet="/assets/img/photos/hero-4-800.jpg 800w, /assets/img/photos/hero-4-1280.jpg 1280w, /assets/img/photos/hero-4-1920.jpg 1920w" sizes="100vw" alt="Industrial knitting machine running fabric" width="1920" height="1080" loading="lazy" decoding="async" />
  </div>
  <div className="hero-scrim" aria-hidden="true"></div>
  <div className="wrap">
    <div className="hero-grid">
      <div>
        <p data-rise="1" className="eyebrow">Bangladesh apparel sourcing &middot; Since 2015</p>
        <h1 data-rise="2" className="h1 display">Your garments buying house in Bangladesh, from <em>sample to shipment</em>.</h1>
        <p data-rise="3" className="lead mt-3"><strong>ZIM Sourcing Ltd</strong> helps international buyers develop and source knitwear, woven garments, sweaters, denim, workwear and kidswear through selected manufacturing partners in Bangladesh.</p>

        <div data-rise="4" className="cluster hero-actions">
          <a className="btn btn-lg" href="/quote">Request a Quote <svg aria-hidden="true"><use href="#i-arrow"/></svg></a>
          <a className="btn btn-ghost btn-lg" href="/services">View products &amp; capabilities</a>
        </div>

        <ul data-rise="5" className="hero-chips">
          <li><svg aria-hidden="true"><use href="#i-shield"/></svg>BGBA member</li>
          <li><svg aria-hidden="true"><use href="#i-pin"/></svg>Dhaka-based sourcing team</li>
          <li><svg aria-hidden="true"><use href="#i-users"/></svg>Buyer factory visits welcome</li>
          <li><svg aria-hidden="true"><use href="#i-lock"/></svg>NDA available</li>
        </ul>

        <div data-rise="6" className="hero-proof">
          <div className="hero-proof-item"><strong>2015</strong><span>Established in Dhaka</span></div>
          <div className="hero-proof-item"><strong>6</strong><span>Product categories</span></div>
          <div className="hero-proof-item"><strong><span data-count="20" data-suffix="+">20+</span></strong><span>Partner factories</span></div>
                  </div>
      </div>

      <div className="hero-panel reveal" data-rise="7" data-tracker>
        <div className="hero-panel-head">
          <span>Example &middot; How we track a buyer programme</span>
          <span className="badge badge-live">Illustration</span>
        </div>
        <div className="hero-panel-body">
          <div className="track" role="list">
            <div className="track-row done" role="listitem">
              <button className="track-btn" type="button" aria-expanded="false" aria-controls="tr-1">
                <span className="track-dot"><svg aria-hidden="true"><use href="#i-check"/></svg></span>
                <span className="track-label">Costing approved<small>Indicative FOB agreed per style</small></span>
                <span className="track-meta">Stage 1</span>
              </button>
              <div className="track-detail" id="tr-1" hidden><p>We review your specification, check feasibility with suitable units and come back with an indicative costing. Nothing is chargeable at this point.</p></div>
            </div>
            <div className="track-row done" role="listitem">
              <button className="track-btn" type="button" aria-expanded="false" aria-controls="tr-2">
                <span className="track-dot"><svg aria-hidden="true"><use href="#i-check"/></svg></span>
                <span className="track-label">Fit sample approved<small>Graded to your size set</small></span>
                <span className="track-meta">Stage 2</span>
              </button>
              <div className="track-detail" id="tr-2" hidden><p>Samples are developed against your tech pack or reference. Comments are consolidated in writing so the factory works from one approved version.</p></div>
            </div>
            <div className="track-row done" role="listitem">
              <button className="track-btn" type="button" aria-expanded="false" aria-controls="tr-3">
                <span className="track-dot"><svg aria-hidden="true"><use href="#i-check"/></svg></span>
                <span className="track-label">Fabric &amp; trims booked<small>Lab dips and trim cards approved</small></span>
                <span className="track-meta">Stage 3</span>
              </button>
              <div className="track-detail" id="tr-3" hidden><p>Materials are booked only after approvals are recorded, so bulk cannot start against an unapproved colour or construction.</p></div>
            </div>
            <div className="track-row active" role="listitem">
              <button className="track-btn" type="button" aria-expanded="false" aria-controls="tr-4">
                <span className="track-dot"><svg aria-hidden="true"><use href="#i-spark"/></svg></span>
                <span className="track-label">Bulk production<small>Followed against a time and action plan</small></span>
                <span className="track-meta">Stage 4</span>
              </button>
              <div className="track-detail" id="tr-4" hidden><p>Your merchandiser follows the line against the agreed calendar and reports progress in writing, including anything that puts a date at risk.</p></div>
            </div>
            <div className="track-row" role="listitem">
              <button className="track-btn" type="button" aria-expanded="false" aria-controls="tr-5">
                <span className="track-dot"></span>
                <span className="track-label">Final inspection<small>Recorded before ex-factory</small></span>
                <span className="track-meta">Stage 5</span>
              </button>
              <div className="track-detail" id="tr-5" hidden><p>A final random inspection is carried out against the approved specification. Nominated third-party inspection can be arranged instead, or in addition.</p></div>
            </div>
            <div className="track-row" role="listitem">
              <button className="track-btn" type="button" aria-expanded="false" aria-controls="tr-6">
                <span className="track-dot"></span>
                <span className="track-label">Shipment<small>Documents to your forwarder</small></span>
                <span className="track-meta">Stage 6</span>
              </button>
              <div className="track-detail" id="tr-6" hidden><p>We coordinate packing, booking and the commercial documents your forwarder and bank need, then confirm ex-factory.</p></div>
            </div>
          </div>
          <p className="track-note">Illustration of our working method, not a live order. <a href="/process">See the full nine-stage process</a></p>
        </div>
      </div>
    </div>
    <a className="hero-cue" href="#what-h" aria-label="Scroll to what we do">
      <span className="hero-cue-line" aria-hidden="true"></span>
      <span className="hero-cue-text">Scroll</span>
    </a>
  </div>
</section>

<section className="section-tight" aria-labelledby="film-h">
  <div className="wrap">
    <div className="film reveal" data-film>
      <video className="film-video" data-film-video preload="none" playsInline controls
             poster="/assets/img/video-poster.jpg"
             width="1920" height="1080" aria-labelledby="film-h">
        <source src="/media/zim-sourcing-commercial.mp4" type="video/mp4" />
        <p>Your browser cannot play this film. <a href="media/zim-sourcing-commercial.mp4">Download it instead</a>.</p>
      </video>
      <button className="film-cover" type="button" data-film-play>
        <img className="film-poster" src="/assets/img/video-poster.jpg"
             srcSet="/assets/img/video-poster-800.jpg 800w, /assets/img/video-poster.jpg 1280w"
             sizes="(max-width:900px) 94vw, 1100px"
             alt="ZIM Sourcing company film: garments buying house in Dhaka, Bangladesh, since 2015"
             width="1280" height="719" loading="lazy" decoding="async" />
        <span className="film-play" aria-hidden="true"><svg><use href="#i-play"/></svg></span>
        <span className="film-copy">
          <span className="film-eyebrow" id="film-h">Company film</span>
          <span className="film-meta">45 seconds</span>
        </span>
      </button>
    </div>
  </div>
</section>

<div className="strip">
  <p className="strip-label">Programmes shipped across</p>
  <div className="marquee" aria-hidden="true">
    <div className="marquee-track">
      <span className="marquee-item"><svg><use href="#i-shirt"/></svg> T-Shirts &amp; Polos</span>
      <span className="marquee-item"><svg><use href="#i-layers"/></svg> Fleece &amp; Hoodies</span>
      <span className="marquee-item"><svg><use href="#i-scissors"/></svg> Woven Shirts</span>
      <span className="marquee-item"><svg><use href="#i-tag"/></svg> Denim</span>
      <span className="marquee-item"><svg><use href="#i-box"/></svg> Sweaters</span>
      <span className="marquee-item"><svg><use href="#i-users"/></svg> Uniforms</span>
      <span className="marquee-item"><svg><use href="#i-tag"/></svg> Caps &amp; Headwear</span>
      <span className="marquee-item"><svg><use href="#i-spark"/></svg> Activewear</span>
      <span className="marquee-item"><svg><use href="#i-shirt"/></svg> Kidswear</span>
      <span className="marquee-item"><svg><use href="#i-layers"/></svg> Outerwear</span>
    </div>
  </div>
</div>

<section className="section" aria-labelledby="what-h">
  <div className="wrap">
    <div className="section-head">
      <p className="eyebrow">What we do</p>
      <h2 className="h2 display" id="what-h">Complete apparel sourcing, managed by one team.</h2>
      <p className="lead mt-2">Factory sourcing, sampling, compliance, inspection and shipment, handled by one merchandiser who is responsible for every style in your order.</p>
    </div>

    <div className="grid g-3">
      <a className="card card-media reveal" href="/services#knitwear">
        <span className="media media-3x2"><img src="/assets/img/photos/operator-600.jpg" srcSet="/assets/img/photos/operator-600.jpg 600w, /assets/img/photos/operator-900.jpg 900w" sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, 30vw" alt="Garment factory operator at an industrial sewing station" loading="lazy" decoding="async" width="600" height="400" /></span>
        <span className="card-body">
          <span className="card-icon"><svg aria-hidden="true"><use href="#i-shirt"/></svg></span>
          <h3 className="h4">Knitwear</h3>
          <span className="muted small">T-shirts, polos, hoodies, fleece, jersey dresses and activewear in single jersey, pique, interlock, rib, French terry and loopback.</span>
          <span className="link-arrow mt-1">Knitwear capability <svg aria-hidden="true"><use href="#i-arrow"/></svg></span>
        </span>
      </a>
      <a className="card card-media reveal" href="/services#woven">
        <span className="media media-3x2"><img src="/assets/img/photos/fabric-rolls-600.jpg" srcSet="/assets/img/photos/fabric-rolls-600.jpg 600w, /assets/img/photos/fabric-rolls-900.jpg 900w" sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, 30vw" alt="Rolls of knitted fabric in a range of colours and structures" loading="lazy" decoding="async" width="600" height="400" /></span>
        <span className="card-body">
          <span className="card-icon"><svg aria-hidden="true"><use href="#i-scissors"/></svg></span>
          <h3 className="h4">Woven</h3>
          <span className="muted small">Formal and casual shirting, trousers, chinos, dresses, blouses and outerwear in poplin, twill, oxford, canvas, viscose and blends.</span>
          <span className="link-arrow mt-1">Woven capability <svg aria-hidden="true"><use href="#i-arrow"/></svg></span>
        </span>
      </a>
      <a className="card card-media reveal" href="/services#sweater">
        <span className="media media-3x2"><img src="/assets/img/photos/sweater-600.jpg" srcSet="/assets/img/photos/sweater-600.jpg 600w, /assets/img/photos/sweater-900.jpg 900w" sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, 30vw" alt="Folded knitted sweaters showing rib and waffle structures" loading="lazy" decoding="async" width="600" height="400" /></span>
        <span className="card-body">
          <span className="card-icon"><svg aria-hidden="true"><use href="#i-layers"/></svg></span>
          <h3 className="h4">Sweater</h3>
          <span className="muted small">Flat-knit 3GG to 14GG, jacquard, intarsia, cable and links-links in acrylic, cotton, wool, lambswool and recycled blends.</span>
          <span className="link-arrow mt-1">Sweater capability <svg aria-hidden="true"><use href="#i-arrow"/></svg></span>
        </span>
      </a>
      <a className="card card-media reveal" href="/services#denim">
        <span className="media media-3x2"><img src="/assets/img/photos/denim-600.jpg" srcSet="/assets/img/photos/denim-600.jpg 600w, /assets/img/photos/denim-900.jpg 900w" sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, 30vw" alt="Stack of finished denim jeans after washing" loading="lazy" decoding="async" width="600" height="400" /></span>
        <span className="card-body">
          <span className="card-icon"><svg aria-hidden="true"><use href="#i-tag"/></svg></span>
          <h3 className="h4">Denim &amp; Bottoms</h3>
          <span className="muted small">Jeans, jackets, skirts and shorts with laser, ozone and enzyme wash options through partner laundries with reduced-water programmes.</span>
          <span className="link-arrow mt-1">Denim capability <svg aria-hidden="true"><use href="#i-arrow"/></svg></span>
        </span>
      </a>
      <a className="card card-media reveal" href="/services#workwear">
        <span className="media media-3x2"><img src="/assets/img/photos/clothing-store-600.jpg" srcSet="/assets/img/photos/clothing-store-600.jpg 600w, /assets/img/photos/clothing-store-900.jpg 900w" sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, 30vw" alt="Finished apparel merchandised on rails in a retail store" loading="lazy" decoding="async" width="600" height="400" /></span>
        <span className="card-body">
          <span className="card-icon"><svg aria-hidden="true"><use href="#i-users"/></svg></span>
          <h3 className="h4">Uniforms &amp; Workwear</h3>
          <span className="muted small">Corporate, hospitality, medical scrubs and industrial workwear built for repeat replenishment, size-run consistency and long wash life.</span>
          <span className="link-arrow mt-1">Workwear capability <svg aria-hidden="true"><use href="#i-arrow"/></svg></span>
        </span>
      </a>
      <a className="card card-media reveal" href="/services#full-service">
        <span className="media media-3x2"><img src="/assets/img/photos/machinery-600.jpg" srcSet="/assets/img/photos/machinery-600.jpg 600w, /assets/img/photos/machinery-900.jpg 900w" sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, 30vw" alt="Textile mill machinery running yarn during fabric production" loading="lazy" decoding="async" width="600" height="400" /></span>
        <span className="card-body">
          <span className="card-icon"><svg aria-hidden="true"><use href="#i-spark"/></svg></span>
          <h3 className="h4">Full-Service Sourcing</h3>
          <span className="muted small">Design support, fabric and trim sourcing, costing, merchandising, inline and final QC, and shipment documentation under one roof.</span>
          <span className="link-arrow mt-1">All services <svg aria-hidden="true"><use href="#i-arrow"/></svg></span>
        </span>
      </a>
    </div>
  </div>
</section>

<section className="section section-alt" aria-labelledby="why-h">
  <div className="wrap">
    <div className="split">
      <div>
        <p className="eyebrow">Why work with us</p>
        <h2 className="h2 display" id="why-h">Clear terms, published in advance.</h2>
        <p className="lead mt-2">How we work, what we check before allocating a factory, and the standards we inspect to are all set out here, so you can judge whether we suit you before making contact.</p>
        <div className="cluster mt-4">
          <a className="btn" href="/process">See how ordering works</a>
          <a className="btn btn-ghost" href="/faq">Read the FAQ</a>
        </div>
      </div>
      <ul className="checklist">
        <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Transparent costing.</strong> We work on an agreed commission shown as a separate line, so the factory price remains visible.</span></li>
        <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Audited factories only.</strong> Every allocated unit holds current social and structural safety audits before an order is placed.</span></li>
        <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Single point of contact.</strong> The merchandiser who prepares your costing also manages the order and issues the progress reports.</span></li>
        <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Documented quality control.</strong> Inline checks through the sewing run, plus a final random inspection against internationally recognised sampling standards.</span></li>
        <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Regular progress reporting.</strong> A time-and-action calendar from order confirmation to ex-factory, with written updates through the order.</span></li>
        <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Growing labels welcome.</strong> We work with emerging brands as well as established retailers, and quantities are agreed per programme.</span></li>
      </ul>
    </div>
  </div>
</section>

<section className="band">
  <img src="/assets/img/photos/workers-1600.jpg" srcSet="/assets/img/photos/workers-600.jpg 600w, /assets/img/photos/workers-1600.jpg 1600w" sizes="100vw" alt="Apparel factory team at work on the sewing floor" loading="lazy" decoding="async" width="1600" height="1067" />
  <div className="wrap">
    <p className="eyebrow">Factory network</p>
    <h2 className="h2 display" style={{ maxWidth: '24ch' }}>Over twenty audited partner factories across four manufacturing clusters.</h2>
    <p className="lead mt-3" style={{ maxWidth: '56ch' }}>We do not own factories, so your order goes to the unit best suited to it by category, price point, compliance profile and available capacity.</p>
    <div className="cluster mt-4">
      <a className="btn btn-light" href="/about#capacity">See capacity by category</a>
      <a className="btn btn-outline-light" href="/compliance">How we vet factories</a>
    </div>
    <div className="clusters" data-clusters>
      <div className="cluster-tabs" role="tablist" aria-label="Manufacturing clusters">
        <button className="cluster-tab" type="button" role="tab" id="cl-gazipur" aria-controls="cl-gazipur-p" aria-selected="true">
          <strong>Gazipur</strong><span>Knit &amp; sweater cluster</span>
        </button>
        <button className="cluster-tab" type="button" role="tab" id="cl-narayanganj" aria-controls="cl-narayanganj-p" aria-selected="false">
          <strong>Narayanganj</strong><span>Knit &amp; washed bottoms</span>
        </button>
        <button className="cluster-tab" type="button" role="tab" id="cl-chattogram" aria-controls="cl-chattogram-p" aria-selected="false">
          <strong>Chattogram</strong><span>Denim, woven &amp; port access</span>
        </button>
        <button className="cluster-tab" type="button" role="tab" id="cl-dhaka" aria-controls="cl-dhaka-p" aria-selected="false">
          <strong>Dhaka</strong><span>Woven, uniforms &amp; head office</span>
        </button>
      </div>

      <div className="cluster-panel" id="cl-gazipur-p" role="tabpanel" aria-labelledby="cl-gazipur">
        <p className="cluster-lead">The largest concentration in our network, and where most knit and sweater programmes are placed.</p>
        <ul className="cluster-tags">
          <li>Knitwear</li><li>Sweater</li><li>Woven tops &amp; bottoms</li><li>Uniforms &amp; workwear</li>
        </ul>
        <p className="cluster-note">Neighbouring Ashulia and Savar units extend sweater and knit capacity in the same corridor.</p>
      </div>
      <div className="cluster-panel" id="cl-narayanganj-p" role="tabpanel" aria-labelledby="cl-narayanganj" hidden>
        <p className="cluster-lead">Knit capacity alongside the wash houses used for bottoms and garment-dyed programmes.</p>
        <ul className="cluster-tags"><li>Knitwear</li><li>Denim &amp; washed bottoms</li></ul>
        <p className="cluster-note">Useful when a programme needs knit and wash handled close together.</p>
      </div>
      <div className="cluster-panel" id="cl-chattogram-p" role="tabpanel" aria-labelledby="cl-chattogram" hidden>
        <p className="cluster-lead">Denim, woven and wet processing, with the port on the doorstep.</p>
        <ul className="cluster-tags"><li>Denim &amp; washed bottoms</li><li>Woven tops &amp; bottoms</li></ul>
        <p className="cluster-note">Worth a day of any factory visit if denim or wet processing is in your range.</p>
      </div>
      <div className="cluster-panel" id="cl-dhaka-p" role="tabpanel" aria-labelledby="cl-dhaka" hidden>
        <p className="cluster-lead">Woven and workwear units, and the city our own office works from.</p>
        <ul className="cluster-tags"><li>Woven tops &amp; bottoms</li><li>Uniforms &amp; workwear</li></ul>
        <p className="cluster-note">Our merchandisers are based in Mirpur, so these units are the quickest for us to reach.</p>
      </div>
      <p className="cluster-foot">Capacity is confirmed against each programme, and units are re-audited annually. <a href="/about#capacity">See capacity by category</a></p>
    </div>
  </div>
</section>

<section className="section-tight" aria-label="Company at a glance">
  <div className="wrap">
    <div className="stats reveal">
      <div className="stat"><strong>2015</strong><span>Established in Dhaka</span></div>
      <div className="stat"><strong><span data-count="20" data-suffix="+">20+</span></strong><span>Audited partner factories</span></div>
      <div className="stat"><strong>6</strong><span>Product categories covered</span></div>
      <div className="stat"><strong>BGBA</strong><span>Registered association member</span></div>
    </div>
    <p className="table-note">Capacity, quantities and timing are confirmed per programme, because they depend on the product, the fabric and the season.</p>
  </div>
</section>

<section className="section section-alt" aria-labelledby="verify-h">
  <div className="wrap">
    <div className="section-head center">
      <p className="eyebrow">Buyer verification</p>
      <h2 className="h2 display" id="verify-h">How you can check us before you commit.</h2>
      <p className="lead mt-2">Nothing on this page asks for trust on faith. Each point below is something you can ask us to evidence, and we would rather you did.</p>
    </div>
    <div className="grid g-3">
      <div className="card reveal">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-doc"/></svg></span>
        <h3 className="h4">A registered Bangladeshi company</h3>
        <p className="muted small">Established in Dhaka in 2015 as a private limited company, holding a valid trade licence, TIN, BIN and VAT registration and export documentation.</p>
      </div>
      <div className="card reveal">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-shield"/></svg></span>
        <h3 className="h4">BGBA membership</h3>
        <p className="muted small">Member of the <a href="https://www.bgba.org.bd/" target="_blank" rel="noopener">Bangladesh Garment Buying House Association</a>, the apex trade body for buying houses, approved by the Ministry of Commerce.</p>
      </div>
      <div className="card reveal">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-check-circle"/></svg></span>
        <h3 className="h4">Documents before you order</h3>
        <p className="muted small">Registration documents are shared during account opening, and the audit and certification documents for your allocated factory are provided before order confirmation.</p>
      </div>
      <div className="card reveal">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-users"/></svg></span>
        <h3 className="h4">Come and inspect</h3>
        <p className="muted small">Buyer factory visits are welcome, and you may nominate your own third-party inspection company. <a href="/about#visiting">Planning a visit</a>.</p>
      </div>
      <div className="card reveal">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-lock"/></svg></span>
        <h3 className="h4">NDA before designs</h3>
        <p className="muted small">A non-disclosure agreement can be signed before you send designs or technical information. Your styles are not shown to other customers.</p>
      </div>
      <div className="card reveal">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-chart"/></svg></span>
        <h3 className="h4">Written reporting</h3>
        <p className="muted small">Your merchandiser reports approvals, production status and delivery milestones in writing throughout the programme, so there is a record to check.</p>
      </div>
    </div>
  </div>
</section>

<section className="section" aria-labelledby="proc-h">
  <div className="wrap">
    <div className="section-head center">
      <p className="eyebrow">How ordering works</p>
      <h2 className="h2 display" id="proc-h">Nine defined stages from enquiry to delivery.</h2>
      <p className="lead mt-2">Each stage has a named owner, a deliverable and a date. Nothing advances until the previous stage is approved in writing.</p>
    </div>

    <div className="grid g-4">
      <div className="card reveal"><span className="card-num">STEP 01</span><h3 className="h4">Enquiry &amp; costing</h3><p className="muted small">Send styles, quantities and target price. We come back with an indicative costing.</p></div>
      <div className="card reveal"><span className="card-num">STEP 02</span><h3 className="h4">Development</h3><p className="muted small">Proto sample produced with fabric and trim options against your tech pack.</p></div>
      <div className="card reveal"><span className="card-num">STEP 03</span><h3 className="h4">Fit &amp; approval</h3><p className="muted small">Fit samples, lab dips, strike-offs and size sets approved before bulk booking.</p></div>
      <div className="card reveal"><span className="card-num">STEP 04</span><h3 className="h4">Order confirmation</h3><p className="muted small">PO issued, factory allocated, TNA calendar published and materials booked.</p></div>
      <div className="card reveal"><span className="card-num">STEP 05</span><h3 className="h4">PP meeting</h3><p className="muted small">Pre-production sample approved and the PP meeting held on the sewing floor.</p></div>
      <div className="card reveal"><span className="card-num">STEP 06</span><h3 className="h4">Bulk production</h3><p className="muted small">Inline QC through the sewing run, with regular photo and progress reporting.</p></div>
      <div className="card reveal"><span className="card-num">STEP 07</span><h3 className="h4">Final inspection</h3><p className="muted small">Final random inspection with a written report and photographs before ex-factory.</p></div>
      <div className="card reveal"><span className="card-num">STEP 08</span><h3 className="h4">Shipment</h3><p className="muted small">Booking, stuffing, and full document set to your bank and forwarder.</p></div>
      <div className="card reveal"><span className="card-num">STEP 09</span><h3 className="h4">After delivery</h3><p className="muted small">Delivery review, defect analysis and carry-forward notes for the next season.</p></div>
      <div className="card reveal" style={{ background: 'var(--accent-soft)', borderColor: 'transparent', justifyContent: 'center' }}>
        <h3 className="h4">Want the detail?</h3>
        <p className="muted small">Each stage with owners, deliverables and day counts.</p>
        <a className="link-arrow" href="/process">Full order journey <svg aria-hidden="true"><use href="#i-arrow"/></svg></a>
      </div>
    </div>
  </div>
</section>

<section className="section" aria-labelledby="comp-h">
  <div className="wrap">
    <div className="split">
      <div>
        <p className="eyebrow">Compliance</p>
        <h2 className="h2 display" id="comp-h">Every factory is verified before your order is placed.</h2>
        <p className="lead mt-2">Before allocation we check each factory for a valid social audit, current structural, fire and electrical safety certification, and a documented chemical and effluent policy. Lapsed certification means no order.</p>
        <ul className="checklist mt-4">
          <li><svg aria-hidden="true"><use href="#i-shield"/></svg><span><strong>Social.</strong> No child or forced labour, legal wages, controlled overtime, freedom of association and a working grievance channel.</span></li>
          <li><svg aria-hidden="true"><use href="#i-shield"/></svg><span><strong>Safety.</strong> RSC-aligned structural, fire and electrical remediation with evidence of closed corrective actions.</span></li>
          <li><svg aria-hidden="true"><use href="#i-leaf"/></svg><span><strong>Environment.</strong> ETP operation, chemical inventories to ZDHC principles, and water and energy reduction targets.</span></li>
        </ul>
        <div className="cluster mt-4">
          <a className="btn" href="/compliance">Our compliance framework</a>
        </div>
      </div>
      <div className="grid" style={{ gap: '1rem' }}>
        <div className="card reveal">
          <h3 className="h4">Audit programmes we work to</h3>
          <p className="muted small">Our partner factories are audited under the schemes buyers ask for most. We share the current certificate and audit report for the specific unit before you place an order.</p>
          <div className="cluster mt-2">
            <span className="badge">amfori BSCI</span><span className="badge">Sedex / SMETA</span>
            <span className="badge">WRAP</span><span className="badge">RSC (Accord)</span>
            <span className="badge">OEKO-TEX&reg; Standard 100</span><span className="badge">GOTS</span>
            <span className="badge">GRS</span><span className="badge">ISO 9001</span><span className="badge">SA8000</span>
          </div>
          <p className="small muted mt-2">Scheme coverage varies by unit. Ask your merchandiser for the certificate set of the exact factory allocated to your order.</p>
        </div>
        <div className="card reveal" style={{ background: 'var(--accent-soft)', borderColor: 'transparent' }}>
          <h3 className="h4">Buyer audits are welcome</h3>
          <p className="muted small">You or your nominated third party can audit any allocated factory at any point. We arrange access, translation and corrective-action follow-up at no cost.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section section-alt">
  <div className="wrap">
    <div className="section-head center">
      <p className="eyebrow">Operations</p>
      <h2 className="h2 display">Twelve stages, start to finish.</h2>
    </div>
    <div className="op-grid reveal">
      <figure className="op-tile">
        <span className="op-media"><img src="/assets/img/photos/ops-02-mill-900.jpg" srcSet="/assets/img/photos/ops-02-mill-600.jpg 600w, /assets/img/photos/ops-02-mill-900.jpg 900w" sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw" alt="Yarn cones running on textile mill machinery" loading="lazy" decoding="async" width="900" height="675" /></span>
        <figcaption><span className="op-step">01</span><strong>Yarn and knitting</strong><span className="op-sub">Mill production before cutting</span></figcaption>
      </figure>
      <figure className="op-tile">
        <span className="op-media"><img src="/assets/img/photos/fabric-stack-900.jpg" srcSet="/assets/img/photos/fabric-stack-600.jpg 600w, /assets/img/photos/fabric-stack-900.jpg 900w" sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw" alt="Folded fabric in a range of colours ready for cutting" loading="lazy" decoding="async" width="900" height="675" /></span>
        <figcaption><span className="op-step">02</span><strong>Fabric and shade</strong><span className="op-sub">Lab dips and shade bands approved</span></figcaption>
      </figure>
      <figure className="op-tile">
        <span className="op-media"><img src="/assets/img/photos/sorting-900.jpg" srcSet="/assets/img/photos/sorting-600.jpg 600w, /assets/img/photos/sorting-900.jpg 900w" sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw" alt="Factory workers sorting and bundling cut garment panels" loading="lazy" decoding="async" width="900" height="675" /></span>
        <figcaption><span className="op-step">03</span><strong>Cutting</strong><span className="op-sub">Panels cut, bundled and issued</span></figcaption>
      </figure>
      <figure className="op-tile">
        <span className="op-media"><img src="/assets/img/photos/factory-floor-900.jpg" srcSet="/assets/img/photos/factory-floor-600.jpg 600w, /assets/img/photos/factory-floor-900.jpg 900w" sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw" alt="Garment factory workers operating industrial sewing machines" loading="lazy" decoding="async" width="900" height="675" /></span>
        <figcaption><span className="op-step">04</span><strong>Sewing floor</strong><span className="op-sub">Bulk production across allocated lines</span></figcaption>
      </figure>
      <figure className="op-tile">
        <span className="op-media"><img src="/assets/img/photos/ops-06-assembly-900.jpg" srcSet="/assets/img/photos/ops-06-assembly-600.jpg 600w, /assets/img/photos/ops-06-assembly-900.jpg 900w" sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw" alt="Close-up of a garment being sewn on an industrial machine" loading="lazy" decoding="async" width="900" height="675" /></span>
        <figcaption><span className="op-step">05</span><strong>Assembly</strong><span className="op-sub">Sewn to the approved sample</span></figcaption>
      </figure>
      <figure className="op-tile">
        <span className="op-media"><img src="/assets/img/photos/stitching-900.jpg" srcSet="/assets/img/photos/stitching-600.jpg 600w, /assets/img/photos/stitching-900.jpg 900w" sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw" alt="Industrial embroidery machine running a garment placement" loading="lazy" decoding="async" width="900" height="675" /></span>
        <figcaption><span className="op-step">06</span><strong>Embroidery</strong><span className="op-sub">Placement and sew-out approval</span></figcaption>
      </figure>
      <figure className="op-tile">
        <span className="op-media"><img src="/assets/img/photos/printing-900.jpg" srcSet="/assets/img/photos/printing-600.jpg 600w, /assets/img/photos/printing-900.jpg 900w" sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw" alt="Screen printing being applied to garment panels" loading="lazy" decoding="async" width="900" height="675" /></span>
        <figcaption><span className="op-step">07</span><strong>Printing</strong><span className="op-sub">Strike-off through to bulk</span></figcaption>
      </figure>
      <figure className="op-tile">
        <span className="op-media"><img src="/assets/img/photos/ops-08-trims-900.jpg" srcSet="/assets/img/photos/ops-08-trims-600.jpg 600w, /assets/img/photos/ops-08-trims-900.jpg 900w" sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw" alt="Buttons and garment trims laid out for approval" loading="lazy" decoding="async" width="900" height="675" /></span>
        <figcaption><span className="op-step">08</span><strong>Trims and labels</strong><span className="op-sub">Buttons, labels and accessories</span></figcaption>
      </figure>
      <figure className="op-tile">
        <span className="op-media"><img src="/assets/img/photos/inspection-900.jpg" srcSet="/assets/img/photos/inspection-600.jpg 600w, /assets/img/photos/inspection-900.jpg 900w" sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw" alt="Quality inspectors checking garments against specification" loading="lazy" decoding="async" width="900" height="675" /></span>
        <figcaption><span className="op-step">09</span><strong>Quality control</strong><span className="op-sub">Inline checks and final inspection</span></figcaption>
      </figure>
      <figure className="op-tile">
        <span className="op-media"><img src="/assets/img/photos/warehouse-900.jpg" srcSet="/assets/img/photos/warehouse-600.jpg 600w, /assets/img/photos/warehouse-900.jpg 900w" sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw" alt="Palletised and wrapped cartons on racking in a despatch warehouse" loading="lazy" decoding="async" width="900" height="675" /></span>
        <figcaption><span className="op-step">10</span><strong>Packing</strong><span className="op-sub">Cartons marked, counted and staged</span></figcaption>
      </figure>
      <figure className="op-tile">
        <span className="op-media"><img src="/assets/img/photos/ops-12-dispatch-900.jpg" srcSet="/assets/img/photos/ops-12-dispatch-600.jpg 600w, /assets/img/photos/ops-12-dispatch-900.jpg 900w" sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw" alt="Freight vehicle collecting finished goods from the factory" loading="lazy" decoding="async" width="900" height="675" /></span>
        <figcaption><span className="op-step">11</span><strong>Despatch</strong><span className="op-sub">Ex-factory to the port</span></figcaption>
      </figure>
      <figure className="op-tile">
        <span className="op-media"><img src="/assets/img/photos/port-cranes-900.jpg" srcSet="/assets/img/photos/port-cranes-600.jpg 600w, /assets/img/photos/port-cranes-900.jpg 900w" sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1000px) 33vw, 25vw" alt="Container cranes and stacked containers at an export port" loading="lazy" decoding="async" width="900" height="675" /></span>
        <figcaption><span className="op-step">12</span><strong>Shipment</strong><span className="op-sub">Documents issued on departure</span></figcaption>
      </figure>
    </div>
  </div>
</section>

</main>
    </>
  );
}
