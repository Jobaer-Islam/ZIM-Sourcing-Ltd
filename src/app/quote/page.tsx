import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request an Apparel Quotation | ZIM Sourcing Bangladesh',
  description: 'Send your garment specification, quantity and destination to ZIM Sourcing for an indicative apparel sourcing quotation from Bangladesh. Review is free of charge.',
};

export default function Page() {
  return (
    <>
      <main id="main">
<section className="pagehead">
  <div className="wrap">
    <ol className="crumbs"><li><a href="/">Home</a></li><li><span aria-current="page">Request a Quote</span></li></ol>
    <p className="eyebrow">Request a quote</p>
    <h1 className="h1 display">Send your style. Get an indicative FOB quotation.</h1>
    <p className="lead">A complete tech pack gives the most accurate costing, but you do not need everything ready to contact us. Send the information you have, including sketches, photographs, fabric details or reference samples, and our merchandising team will review it.</p>
  </div>
</section>

<section className="section-tight">
  <div className="wrap">
    <div className="grid g-3">
      <div className="card">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-doc"/></svg></span>
        <h2 className="h4">Quotation review</h2>
        <p className="muted small">Reviewing your enquiry and preparing an indicative costing is free of charge.</p>
      </div>
      <div className="card">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-lock"/></svg></span>
        <h2 className="h4">NDA available</h2>
        <p className="muted small">A non-disclosure agreement can be signed before you send confidential designs or technical information.</p>
      </div>
      <div className="card">
        <span className="card-icon"><svg aria-hidden="true"><use href="#i-box"/></svg></span>
        <h2 className="h4">Sampling and courier</h2>
        <p className="muted small">Physical samples, courier, laboratory testing and external inspection are quoted and agreed separately before any cost is incurred.</p>
      </div>
    </div>
  </div>
</section>

<section className="section" id="rfq">
  <div className="wrap">
    <div className="split" style={{ alignItems: 'start' }}>
      <div>
        <p className="eyebrow">Before you send</p>
        <h2 className="h2 display">What helps us quote accurately.</h2>
        <p className="lead mt-2">Tick what you already have. Nothing here is mandatory, and the list is only a guide to what makes an initial costing more useful.</p>

        <ul className="pack-list mt-4" data-packlist>
          <li><label className="pack-item"><input type="checkbox" /><span><strong>Product image, sketch or tech pack</strong>Even a photograph of a similar garment is enough to start.</span></label></li>
          <li><label className="pack-item"><input type="checkbox" /><span><strong>Fabric composition and GSM</strong>For example 180 GSM single jersey, 100% combed cotton.</span></label></li>
          <li><label className="pack-item"><input type="checkbox" /><span><strong>Estimated quantity per style</strong>An approximate figure is fine at this stage.</span></label></li>
          <li><label className="pack-item"><input type="checkbox" /><span><strong>Size range and colour count</strong>These change consumption and therefore cost.</span></label></li>
          <li><label className="pack-item"><input type="checkbox" /><span><strong>Destination country and Incoterm</strong>Tells us how far our responsibility runs.</span></label></li>
          <li><label className="pack-item"><input type="checkbox" /><span><strong>Any compliance requirement</strong>For example a specific audit scheme your buyer requires.</span></label></li>
        </ul>
        <p className="pack-score" data-pack-score aria-live="polite">Nothing ticked yet. Send what you have anyway.</p>

        <div className="card mt-4" style={{ background: 'var(--accent-soft)', borderColor: 'transparent' }}>
          <h3 className="h4">What happens after you submit</h3>
          <ol className="flow-steps mt-2">
            <li>We confirm receipt by email.</li>
            <li>We review the specification and come back on anything unclear.</li>
            <li>We identify suitable production options for the product and quantity.</li>
            <li>You receive an indicative costing and a proposed development calendar.</li>
            <li>Sampling is discussed only if you decide to continue.</li>
          </ol>
        </div>

        <div className="card mt-3">
          <h3 className="h4">Prefer email?</h3>
          <p className="muted small">Send your specification to <a className="link-arrow" style={{ display: 'inline' }} href="mailto:info@zimsourcing.com">info@zimsourcing.com</a> or <a className="link-arrow" style={{ display: 'inline' }} href="mailto:contact@zimsourcing.com">contact@zimsourcing.com</a>, or message us on <a className="link-arrow" style={{ display: 'inline' }} href="https://wa.me/8801819453297" target="_blank" rel="noopener">WhatsApp</a>.</p>
        </div>
      </div>

      <div className="card">
        
        <form className="form" data-validate data-steps data-mailto="contact@zimsourcing.com" action="/api/send" method="POST" encType="multipart/form-data" noValidate>
          <input type="hidden" name="_to" value="contact@zimsourcing.com" />
          <input type="hidden" name="_subject" value="New quotation request from zimsourcing.com" />

          <div className="steps-bar" data-step-bar aria-hidden="true">
            <span className="steps-progress"><span data-step-fill></span></span>
            <ol>
              <li data-step-dot="1">About you</li>
              <li data-step-dot="2">Product</li>
              <li data-step-dot="3">Detail</li>
            </ol>
          </div>
          <p className="steps-count" data-step-count aria-live="polite">Step 1 of 3</p>

          
          <fieldset className="form-step" data-step="1">
            <legend className="sr-only">About you</legend>
            <div className="grid-2">
              <div className="field">
                <label htmlFor="q-name">Your name <span className="req" aria-hidden="true">*</span></label>
                <input className="input" id="q-name" name="name" type="text" autoComplete="name" required />
                <span className="err-msg">Please enter your name.</span>
              </div>
              <div className="field">
                <label htmlFor="q-company">Company <span className="req" aria-hidden="true">*</span></label>
                <input className="input" id="q-company" name="company" type="text" autoComplete="organization" required />
                <span className="err-msg">Please enter your company name.</span>
              </div>
            </div>
            <div className="grid-2">
              <div className="field">
                <label htmlFor="q-email">Work email <span className="req" aria-hidden="true">*</span></label>
                <input className="input" id="q-email" name="email" type="email" autoComplete="email" required />
                <span className="err-msg">Please enter a valid email address, for example name@company.com.</span>
              </div>
              <div className="field">
                <label htmlFor="q-phone">Phone or WhatsApp</label>
                <input className="input" id="q-phone" name="phone" type="tel" autoComplete="tel" placeholder="+44 7700 900000" />
                <span className="err-msg">Please check this number.</span>
              </div>
            </div>
            <div className="grid-2">
              <div className="field">
                <label htmlFor="q-country">Destination country <span className="req" aria-hidden="true">*</span></label>
                <input className="input" id="q-country" name="destination" type="text" list="q-countries" placeholder="e.g. United Kingdom" required />
                <datalist id="q-countries">
                  <option value="United Kingdom"></option><option value="United States"></option>
                  <option value="Germany"></option><option value="France"></option>
                  <option value="Spain"></option><option value="Italy"></option>
                  <option value="Netherlands"></option><option value="Denmark"></option>
                  <option value="Sweden"></option><option value="Poland"></option>
                  <option value="Canada"></option><option value="Australia"></option>
                  <option value="New Zealand"></option><option value="Japan"></option>
                  <option value="South Korea"></option><option value="United Arab Emirates"></option>
                  <option value="Saudi Arabia"></option><option value="South Africa"></option>
                </datalist>
                <span className="err-msg">Please tell us where the goods are going.</span>
              </div>
              <div className="field">
                <label htmlFor="q-site">Company website</label>
                <input className="input" id="q-site" name="website" type="text" inputMode="url" placeholder="yourcompany.com" />
                <span className="err-msg">Please check this address.</span>
              </div>
            </div>
          </fieldset>

          
          <fieldset className="form-step" data-step="2" hidden>
            <legend className="sr-only">Product</legend>
            <div className="field">
              <span className="label" id="q-cat-label">Product category <span className="req" aria-hidden="true">*</span></span>
              <div className="checkgroup" role="group" aria-labelledby="q-cat-label" data-require-one>
                <label className="checkbox"><input type="checkbox" name="categories" value="Knitwear" /> Knitwear</label>
                <label className="checkbox"><input type="checkbox" name="categories" value="Woven" /> Woven</label>
                <label className="checkbox"><input type="checkbox" name="categories" value="Sweater" /> Sweater</label>
                <label className="checkbox"><input type="checkbox" name="categories" value="Denim" /> Denim &amp; bottoms</label>
                <label className="checkbox"><input type="checkbox" name="categories" value="Uniforms" /> Uniforms &amp; workwear</label>
                <label className="checkbox"><input type="checkbox" name="categories" value="Kidswear" /> Kidswear</label>
                <label className="checkbox"><input type="checkbox" name="categories" value="Caps" /> Caps &amp; headwear</label>
              </div>
              <span className="err-msg">Please choose at least one category.</span>
            </div>
            <div className="field">
              <label htmlFor="q-msg">Describe the product <span className="req" aria-hidden="true">*</span></label>
              <textarea className="textarea" id="q-msg" name="message" required placeholder="Styles, construction, sizes, colours, print or embroidery, labelling, packing and anything else that matters."></textarea>
              <span className="err-msg">Please describe the product so we know what to cost.</span>
            </div>
            <div className="grid-2">
              <div className="field">
                <label htmlFor="q-qty">Quantity per style <span className="req" aria-hidden="true">*</span></label>
                <input className="input" id="q-qty" name="quantity" type="text" inputMode="numeric" placeholder="e.g. 1500" required />
                <span className="err-msg">Please give an approximate quantity per style.</span>
              </div>
              <div className="field">
                <label htmlFor="q-styles">Number of styles</label>
                <input className="input" id="q-styles" name="styles" type="text" inputMode="numeric" placeholder="e.g. 6" />
                <span className="err-msg">Please check this number.</span>
              </div>
            </div>
            <div className="grid-2">
              <div className="field">
                <label htmlFor="q-fabric">Fabric composition</label>
                <input className="input" id="q-fabric" name="fabric" type="text" placeholder="e.g. 100% combed cotton single jersey" />
                <span className="err-msg">Please check this field.</span>
              </div>
              <div className="field">
                <label htmlFor="q-gsm">Fabric GSM</label>
                <input className="input" id="q-gsm" name="gsm" type="text" inputMode="numeric" placeholder="e.g. 180" />
                <span className="err-msg">Please check this value.</span>
              </div>
            </div>
            <div className="grid-2">
              <div className="field">
                <label htmlFor="q-sizes">Size range</label>
                <input className="input" id="q-sizes" name="size_range" type="text" placeholder="e.g. S to XXL" />
                <span className="err-msg">Please check this field.</span>
              </div>
              <div className="field">
                <label htmlFor="q-colours">Number of colours</label>
                <input className="input" id="q-colours" name="colours" type="text" inputMode="numeric" placeholder="e.g. 3" />
                <span className="err-msg">Please check this number.</span>
              </div>
            </div>
          </fieldset>

          
          <fieldset className="form-step" data-step="3" hidden>
            <legend className="sr-only">Commercial detail and files</legend>
            <div className="grid-2">
              <div className="field">
                <label htmlFor="q-target">Target FOB price per piece</label>
                <input className="input" id="q-target" name="target_price" type="text" placeholder="e.g. USD 4.20" />
                <span className="err-msg">Please check this value.</span>
              </div>
              <div className="field">
                <label htmlFor="q-incoterm">Preferred Incoterm</label>
                <select className="select" id="q-incoterm" name="incoterm">
                  <option value="">Not sure yet</option>
                  <option>FOB</option><option>FCA</option><option>CFR</option>
                  <option>CIF</option><option>DAP</option><option>DDP</option>
                </select>
                <span className="err-msg">Please choose an option.</span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="q-date">Required delivery date</label>
              <input className="input" id="q-date" name="delivery_date" type="date" data-no-past />
              <span className="err-msg">Please choose a date in the future.</span>
            </div>
            <div className="field">
              <span className="label" id="q-comp-label">Compliance requirements</span>
              <div className="checkgroup" role="group" aria-labelledby="q-comp-label">
                <label className="checkbox"><input type="checkbox" name="compliance" value="BSCI" /> BSCI</label>
                <label className="checkbox"><input type="checkbox" name="compliance" value="SMETA" /> SMETA</label>
                <label className="checkbox"><input type="checkbox" name="compliance" value="WRAP" /> WRAP</label>
                <label className="checkbox"><input type="checkbox" name="compliance" value="GOTS" /> GOTS</label>
                <label className="checkbox"><input type="checkbox" name="compliance" value="GRS" /> GRS</label>
                <label className="checkbox"><input type="checkbox" name="compliance" value="OEKO-TEX" /> OEKO-TEX</label>
              </div>
            </div>

            <div className="field">
              <label htmlFor="q-files">Tech pack or reference files</label>
              <div className="drop" data-drop>
                <input className="drop-input" id="q-files" name="attachments" type="file" multiple
                       accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.webp" data-maxmb="20" />
                <span className="drop-face">
                  <svg aria-hidden="true"><use href="#i-upload"/></svg>
                  <span className="drop-main">Choose files or drop them here</span>
                  <span className="drop-sub">PDF, Word, Excel, JPG, PNG or WEBP. Up to 20 MB each.</span>
                </span>
              </div>
              <ul className="drop-list" data-drop-list></ul>
              <span className="err-msg">One of those files is too large. Please send it by email instead.</span>
              <p className="form-hint">No tech pack yet? That is fine. Upload a photograph, or just describe the product above.</p>
            </div>

            <div className="field">
              <span className="label" id="q-extra-label">Anything else?</span>
              <div className="checkgroup" role="group" aria-labelledby="q-extra-label">
                <label className="checkbox"><input type="checkbox" name="extras" value="NDA required" /> Please sign an NDA first</label>
                <label className="checkbox"><input type="checkbox" name="extras" value="Factory compliance documents" /> Send factory compliance documents</label>
                <label className="checkbox"><input type="checkbox" name="extras" value="Factory visit" /> I would like to visit the factory</label>
              </div>
            </div>

            <div className="field">
              <label className="checkbox checkbox-req"><input type="checkbox" name="privacy" value="Agreed" required /> I agree that ZIM Sourcing may contact me about this enquiry, as described in the <a href="/privacy">privacy policy</a>. <span className="req" aria-hidden="true">*</span></label>
              <span className="err-msg">Please confirm this before sending.</span>
            </div>
          </fieldset>

          <div className="hp" aria-hidden="true">
            <label htmlFor="q-hp">Leave this field empty</label>
            <input id="q-hp" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <p className="form-status" role="status" aria-live="polite"></p>

          <div className="form-nav">
            <button className="btn btn-ghost" type="button" data-step-back hidden>Back</button>
            <button className="btn btn-lg" type="button" data-step-next>Continue <svg aria-hidden="true"><use href="#i-arrow"/></svg></button>
            <button className="btn btn-lg" type="submit" data-step-send hidden>Send quotation request <svg aria-hidden="true"><use href="#i-arrow"/></svg></button>
          </div>
          <p className="form-note">We do not sell or share your details, and your designs stay confidential.</p>
        </form>
      </div>
    </div>
  </div>
</section>

</main>
    </>
  );
}
