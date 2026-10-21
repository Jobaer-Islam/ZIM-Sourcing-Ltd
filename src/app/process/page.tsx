import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Order Garments from Bangladesh | ZIM Sourcing',
  description: 'The nine stages of a ZIM Sourcing order: enquiry, development, approvals, materials, production, inspection, shipment and review, explained for buyers.',
};

export default function Page() {
  return (
    <>
      <main id="main">
<section className="pagehead">
  <div className="wrap">
    <ol className="crumbs"><li><a href="/">Home</a></li><li><span aria-current="page">How to Order</span></li></ol>
    <p className="eyebrow">How to order</p>
    <h1 className="h1 display">How to place an order.</h1>
    <p className="lead">The nine stages of an order, what happens at each one, and the commercial terms we work on. Quantities, pricing and timing are confirmed per programme, because they depend on the product, the fabric and the season.</p>
    <div className="cluster mt-4">
      <a className="btn" href="/quote">Start an enquiry</a>
      <a className="btn btn-ghost" href="#techpack">What to send us</a>
    </div>
  </div>
</section>

<section className="section" id="journey">
  <div className="wrap">
    <div className="section-head">
      <p className="eyebrow">The order journey</p>
      <h2 className="h2 display">The nine stages of an order.</h2>
      <p className="lead mt-2">This is the sequence for a first order on a brand-new style. Repeat orders on approved styles omit stages two and three and move considerably faster.</p>
      <p className="mt-2 muted">Worth knowing: much of any apparel calendar is not sewing. A substantial part is fabric being knitted or woven and dyed to your shade, and a further part is fit and colour approval, which moves at your pace. We issue a dated calendar at order confirmation so the schedule is agreed rather than assumed.</p>
    </div>

    <div className="steps">
      <article className="step">
        <div className="step-n">STAGE 01</div>
        <div className="step-body">
          <div>
            <h3 className="h3 display">Enquiry &amp; indicative costing</h3>
            <p className="muted">You send styles, quantities, target price and delivery window. We check feasibility, identify the right factory type and come back with an indicative FOB costing. If your target price is not achievable we say so straight away, and explain what would need to change: fabric, construction, quantity or delivery date.</p>
          </div>
          <dl className="step-deliv">
            <dt>You provide</dt><dd>Tech pack or sketches, quantities, target price, destination, delivery window</dd>
            <dt>You receive</dt><dd>Indicative cost sheet, feasibility notes, proposed development calendar</dd>
            <dt>Owner</dt><dd>Merchandising</dd>
          </dl>
        </div>
      </article>

      <article className="step">
        <div className="step-n">STAGE 02</div>
        <div className="step-body">
          <div>
            <h3 className="h3 display">Development &amp; proto sample</h3>
            <p className="muted">We build or refine the tech pack, source fabric and trim options, cut a first pattern and produce a proto sample in available fabric. The proto proves construction and proportion, it is not a fit or colour approval. You receive photographs before the courier goes out, so obvious corrections start immediately rather than after transit.</p>
          </div>
          <dl className="step-deliv">
            <dt>You receive</dt><dd>Proto sample, fabric hangers, trim card, photographs, revised cost sheet</dd>
            <dt>Typical duration</dt><dd>Varies by category; confirmed in the development calendar</dd>
            <dt>Owner</dt><dd>Product Development</dd>
          </dl>
        </div>
      </article>

      <article className="step">
        <div className="step-n">STAGE 03</div>
        <div className="step-body">
          <div>
            <h3 className="h3 display">Fit, colour &amp; material approval</h3>
            <p className="muted">Fit samples in your base size, graded to a full size set. In parallel: lab dips for every colour, strike-offs for prints, embroidery sew-outs, and a physical trim card. Nothing proceeds to bulk booking until every item on this list carries a written approval from you. The number of submits depends on how complete the specification is at the outset.</p>
          </div>
          <dl className="step-deliv">
            <dt>You approve</dt><dd>Fit sample, size set, lab dips, strike-offs, sew-outs, trim card, care and content labels</dd>
            <dt>Typical duration</dt><dd>Depends on the number of fit submits and your review time</dd>
            <dt>Owner</dt><dd>Product Development &amp; Merchandising</dd>
          </dl>
        </div>
      </article>

      <article className="step">
        <div className="step-n">STAGE 04</div>
        <div className="step-body">
          <div>
            <h3 className="h3 display">Order confirmation &amp; booking</h3>
            <p className="muted">You issue the purchase order; we issue a proforma invoice and confirm the allocated factory by name. Materials are booked, the production slot is locked, and you receive the time-and-action calendar for the whole order. From this point you receive written progress reports through to shipment.</p>
          </div>
          <dl className="step-deliv">
            <dt>You provide</dt><dd>Purchase order, L/C or advance payment per agreed terms</dd>
            <dt>You receive</dt><dd>Proforma invoice, named factory and address, full TNA calendar, compliance certificate set</dd>
            <dt>Owner</dt><dd>Merchandising</dd>
          </dl>
        </div>
      </article>

      <article className="step">
        <div className="step-n">STAGE 05</div>
        <div className="step-body">
          <div>
            <h3 className="h3 display">Materials in-house &amp; PP approval</h3>
            <p className="muted">Fabric arrives and is inspected to the 4-point system before cutting is authorised. We produce the pre-production sample in actual bulk fabric, trims and packaging. Once you approve it, we hold the PP meeting on the factory floor with the production, quality and cutting teams present, using the approved sample as the physical reference.</p>
          </div>
          <dl className="step-deliv">
            <dt>You approve</dt><dd>Pre-production (PP) sample, the single most important approval in the order</dd>
            <dt>Checks performed</dt><dd>4-point fabric inspection, shade band approval, shrinkage and wash tests</dd>
            <dt>Owner</dt><dd>Quality &amp; Production</dd>
          </dl>
        </div>
      </article>

      <article className="step">
        <div className="step-n">STAGE 06</div>
        <div className="step-body">
          <div>
            <h3 className="h3 display">Bulk production &amp; inline QC</h3>
            <p className="muted">Cutting, sewing, washing and finishing. Our QC team attends the sewing floor at several points through the run, checking measurements, construction and shade against the approved PP sample. Findings are corrected on the line while the order is still fixable, not discovered at final inspection when the only options are rework or discount.</p>
          </div>
          <dl className="step-deliv">
            <dt>You receive</dt><dd>Written progress reports with photographs and output figures</dd>
            <dt>Inline checkpoints</dt><dd>Multiple points through the sewing run</dd>
            <dt>Owner</dt><dd>Quality Assurance</dd>
          </dl>
        </div>
      </article>

      <article className="step">
        <div className="step-n">STAGE 07</div>
        <div className="step-body">
          <div>
            <h3 className="h3 display">Final random inspection</h3>
            <p className="muted">Once the order is substantially packed, we run a final random inspection against internationally recognised sampling standards, at the level agreed with you. You receive the full report with photographs and a clear pass or fail. A failed lot is re-checked in full and re-inspected before shipment, at the factory&rsquo;s cost.</p>
          </div>
          <dl className="step-deliv">
            <dt>You receive</dt><dd>Final inspection report, measurement sheet, defect log, carton and packing photographs</dd>
            <dt>Standard</dt><dd>Internationally recognised random sampling standards</dd>
            <dt>Owner</dt><dd>Quality Assurance</dd>
          </dl>
        </div>
      </article>

      <article className="step">
        <div className="step-n">STAGE 08</div>
        <div className="step-body">
          <div>
            <h3 className="h3 display">Ex-factory, shipment &amp; documents</h3>
            <p className="muted">We book space with your nominated forwarder or ours, supervise container stuffing, and issue the complete export document set to your bank once the container leaves. Air freight, LCL and FCL all handled; DDP available to most destinations on request.</p>
          </div>
          <dl className="step-deliv">
            <dt>Documents issued</dt><dd>Commercial invoice, packing list, bill of lading or AWB, certificate of origin (GSP Form A where applicable), inspection certificate, test reports</dd>
            <dt>Terms available</dt><dd>FOB, FCA, CFR, CIF, DAP, DDP</dd>
            <dt>Owner</dt><dd>Shipping &amp; Documentation</dd>
          </dl>
        </div>
      </article>

      <article className="step">
        <div className="step-n">STAGE 09</div>
        <div className="step-body">
          <div>
            <h3 className="h3 display">Delivery review &amp; carry-forward</h3>
            <p className="muted">After delivery we request your receiving report and warehouse feedback. Any issue identified, whether a measurement drift, a trim failure in retail or a packing method that slowed your distribution centre, is recorded against the style and applied to subsequent orders.</p>
          </div>
          <dl className="step-deliv">
            <dt>You receive</dt><dd>Season review, defect analysis, carry-forward action list, reorder costing</dd>
            <dt>Reorder lead time</dt><dd>Materially shorter on approved styles</dd>
            <dt>Owner</dt><dd>Merchandising</dd>
          </dl>
        </div>
      </article>
    </div>
  </div>
</section>

<section className="section-tight">
  <div className="wrap">
    <div className="grid g-3">
      <figure className="media media-4x3 reveal"><img src="/assets/img/photos/designer-600.jpg" srcSet="/assets/img/photos/designer-600.jpg 600w, /assets/img/photos/designer-900.jpg 900w" sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, 30vw" alt="Apparel designer working on technical sketches and patterns" loading="lazy" decoding="async" width="600" height="450" /></figure>
      <figure className="media media-4x3 reveal"><img src="/assets/img/photos/sewing-line-600.jpg" srcSet="/assets/img/photos/sewing-line-600.jpg 600w, /assets/img/photos/sewing-line-900.jpg 900w" sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, 30vw" alt="Machine operator sewing a garment on an industrial machine" loading="lazy" decoding="async" width="600" height="450" /></figure>
      <figure className="media media-4x3 reveal"><img src="/assets/img/photos/port-terminal-600.jpg" srcSet="/assets/img/photos/port-terminal-600.jpg 600w, /assets/img/photos/port-terminal-900.jpg 900w" sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, 30vw" alt="Shipping port with stacked cargo containers awaiting loading" loading="lazy" decoding="async" width="600" height="450" /></figure>
    </div>
  </div>
</section>

<section className="section section-alt" id="techpack">
  <div className="wrap">
    <div className="split">
      <div>
        <p className="eyebrow">Before enquiring</p>
        <h2 className="h2 display">Information required for an accurate quotation.</h2>
        <p className="lead mt-2">The more of this you can provide, the tighter the costing. A reference photograph alone is fine; we will build the specification with you before quoting.</p>
        <div className="cluster mt-4">
          <a className="btn" href="/quote">Open the enquiry form</a>
          <a className="btn btn-ghost" href="mailto:contact@zimsourcing.com?subject=Tech%20pack%20enquiry">Email your tech pack</a>
        </div>
      </div>
      <div className="card reveal">
        <h3 className="h4">Enquiry checklist</h3>
        <ul className="checklist mt-1">
          <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Technical sketch or reference sample:</strong> front, back and any detail views.</span></li>
          <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Fabric specification:</strong> composition, construction, GSM or oz, finish.</span></li>
          <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Measurement chart:</strong> points of measure with tolerances, in your base size.</span></li>
          <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Size range and ratio:</strong> for example S&ndash;XXL at 1:2:3:3:2:1.</span></li>
          <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Colourways:</strong> Pantone TCX or TPG references, plus quantity per colour.</span></li>
          <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Trims and artwork:</strong> labels, tags, buttons, zips, print or embroidery files.</span></li>
          <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Packing instructions:</strong> polybag, hanger, folding, carton and barcode requirements.</span></li>
          <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Target price and Incoterm:</strong> together with the destination port or door.</span></li>
          <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Delivery window:</strong> the date goods must be in your warehouse.</span></li>
          <li><svg aria-hidden="true"><use href="#i-check-circle"/></svg><span><strong>Compliance requirements:</strong> certifications, testing protocol, nominated labs.</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="section section-alt" id="sampling">
  <div className="wrap">
    <div className="section-head">
      <p className="eyebrow">Sampling</p>
      <h2 className="h2 display">Sample types and their purpose.</h2>
      <p className="lead mt-2">Confusing one sample type for another is a common cause of order failure. What each one actually confirms:</p>
    </div>
    <div className="table-wrap reveal">
      <table>
        <caption className="sr-only">Sample types and what each one confirms</caption>
        <thead><tr><th scope="col">Sample</th><th scope="col">What it proves</th><th scope="col">Fabric used</th></tr></thead>
        <tbody>
          <tr><td>Proto / development</td><td>Construction, proportion and overall look</td><td>Any available similar fabric</td></tr>
          <tr><td>Fit sample</td><td>Measurements and fit in your base size</td><td>Actual or close substitute</td></tr>
          <tr><td>Size set</td><td>Grading accuracy across the full size range</td><td>Actual fabric</td></tr>
          <tr><td>Salesman (SMS)</td><td>Showroom and pre-sell presentation</td><td>Actual fabric and trims</td></tr>
          <tr><td>Pre-production (PP)</td><td>The bulk standard, the reference for the whole order</td><td>Bulk fabric, trims and packaging</td></tr>
          <tr><td>Shipment sample</td><td>Record of what actually shipped</td><td>Pulled from packed bulk</td></tr>
        </tbody>
      </table>
    </div>
    <p className="table-note">Sampling charges are quoted per style and are normally credited against your first bulk order. Courier is on the buyer&rsquo;s account or collect number. Never approve bulk against a proto sample: the PP sample is the only approval that governs production.</p>
  </div>
</section>

<section className="band">
  <img src="/assets/img/photos/sewing-floor-2-1600.jpg" srcSet="/assets/img/photos/sewing-floor-2-600.jpg 600w, /assets/img/photos/sewing-floor-2-1600.jpg 1600w" sizes="100vw" alt="Machine operator sewing fabric on a garment factory floor" loading="lazy" decoding="async" width="1600" height="1067" />
  <div className="wrap">
    <p className="eyebrow">Quality</p>
    <h2 className="h2 display" style={{ maxWidth: '24ch' }}>Inspection at every stage of production.</h2>
    <p className="lead mt-3" style={{ maxWidth: '56ch' }}>Defects identified during sewing can be corrected on the line at minimal cost. For this reason our quality team attends the floor at several points through the run, in addition to final random inspection.</p>
  </div>
</section>

<section className="section" id="quality">
  <div className="wrap">
    <div className="split">
      <div>
        <p className="eyebrow">Quality assurance</p>
        <h2 className="h2 display">Our inspection standard.</h2>
        <p className="lead mt-2">We inspect against internationally recognised random sampling standards, at the acceptance level agreed with you for the programme. Critical defects are zero tolerance.</p>
        <p className="mt-3 muted">You may appoint SGS, Intertek, Bureau Veritas, TUV or your own inspector, instead of or alongside our team. We coordinate access and share our own report either way.</p>
        <div className="cluster mt-4"><a className="btn btn-ghost" href="/compliance">See factory compliance</a></div>
      </div>
      <div className="grid" style={{ gap: '1rem' }}>
        <div className="card reveal"><span className="card-num">CHECKPOINT 01</span><h3 className="h4">Incoming materials</h3><p className="muted small">Fabric inspected to the 4-point system before cutting. Shade bands approved. Shrinkage, colourfastness and wash tests recorded. Trims checked against the approved card.</p></div>
        <div className="card reveal"><span className="card-num">CHECKPOINT 02</span><h3 className="h4">Inline, through the run</h3><p className="muted small">Measurements, construction, shade and workmanship checked against the approved PP sample while the line is still running and corrections still cost nothing.</p></div>
        <div className="card reveal"><span className="card-num">CHECKPOINT 03</span><h3 className="h4">Final random inspection</h3><p className="muted small">Once substantially packed. Full measurement audit, defect classification, carton and barcode verification, packing check, and a written pass or fail with photographs.</p></div>
        <div className="card reveal"><span className="card-num">CHECKPOINT 04</span><h3 className="h4">Loading supervision</h3><p className="muted small">Carton counts verified against the packing list, container condition checked, and stuffing photographed and reported before the seal goes on.</p></div>
      </div>
    </div>
  </div>
</section>

<section className="section section-alt" id="commercial">
  <div className="wrap">
    <div className="section-head">
      <p className="eyebrow">Commercial terms</p>
      <h2 className="h2 display">Payment terms, Incoterms and cost structure.</h2>
    </div>

    <div className="grid g-2 mb-4">
      <div className="card reveal">
        <h3 className="h4">Payment terms</h3>
        <div className="table-wrap mt-1" style={{ border: '0' }}>
          <table style={{ minWidth: '0' }}>
            <tbody>
              <tr><td>Irrevocable L/C at sight</td><td>Standard for new accounts. Advised through our bank in Dhaka.</td></tr>
              <tr><td>T/T</td><td>A deposit against proforma invoice, with the balance against shipping documents.</td></tr>
              <tr><td>Usance L/C</td><td>Available to buyers with an established trading history.</td></tr>
              <tr><td>Sampling charges</td><td>Quoted per style; normally credited against your first bulk order.</td></tr>
              <tr><td>Buying commission</td><td>Agreed in writing before the first order.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card reveal">
        <h3 className="h4">Incoterms 2020 we work on</h3>
        <div className="table-wrap mt-1" style={{ border: '0' }}>
          <table style={{ minWidth: '0' }}>
            <tbody>
              <tr><td>FOB</td><td>Our default. Free on board Chattogram or Dhaka air.</td></tr>
              <tr><td>FCA</td><td>Handover to your nominated forwarder at an agreed point.</td></tr>
              <tr><td>CFR / CIF</td><td>We arrange ocean freight, and insurance under CIF.</td></tr>
              <tr><td>DAP / DDP</td><td>Delivered to your door; DDP includes duty and clearance. Available to most US, UK and EU destinations.</td></tr>
              <tr><td>Ex-works</td><td>Available on request, though rarely the cheapest option for the buyer.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="card reveal">
      <h3 className="h4">What is inside an FOB price</h3>
      <p className="muted small mt-1">Every costing we issue is broken down line by line, so you can see where the price comes from and challenge any part of it. Supporting quotations are available on request.</p>
      <div className="grid g-3 mt-2">
        <div><h4 className="h4">Materials</h4><p className="muted small">Fabric consumption and rate, plus trims: labels, tags, buttons, zips, thread, elastic, polybag and carton.</p></div>
        <div><h4 className="h4">Making</h4><p className="muted small">Cutting, sewing, finishing and factory overhead, plus any value addition such as print, embroidery, wash or special finishes.</p></div>
        <div><h4 className="h4">Compliance &amp; logistics</h4><p className="muted small">Third-party testing and inspection, inland freight, port and documentation charges, and our commission shown as a separate line.</p></div>
      </div>
      <p className="table-note">The balance between these lines varies widely by product. A printed heavy fleece and a plain woven shirt have very different cost structures, which is why we quote per style rather than publish a formula.</p>
    </div>
  </div>
</section>

</main>
    </>
  );
}
