import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Garments Sourcing FAQ | ZIM Sourcing Bangladesh',
  description: 'Questions and answers on buying houses in Bangladesh, minimum order quantities, factory allocation, pricing, quality control and shipping.',
};

export default function Page() {
  return (
    <>
      <main id="main">
<section className="pagehead">
  <div className="wrap">
    <ol className="crumbs"><li><a href="/">Home</a></li><li><a href="/blog">Insights</a></li><li><span aria-current="page">FAQ</span></li></ol>
    <p className="eyebrow">Frequently asked questions</p>
    <h1 className="h1 display">Frequently asked questions.</h1>
    <p className="lead">How we work, answered. Anything specific to your programme, such as quantities, pricing or timing, depends on the product, so ask us directly.</p>
    <div className="cluster mt-4">
      <a className="btn" href="/quote">Ask us about your programme</a>
      <a className="btn btn-ghost" href="/blog">Read our guides</a>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap wrap-narrow">

    <div className="faq-filter">
      <label className="sr-only" htmlFor="faq-q">Search the questions</label>
      <span className="faq-filter-icon" aria-hidden="true"><svg><use href="#i-search"/></svg></span>
      <input className="input" id="faq-q" type="search" placeholder="Search: price, MOQ, samples, shipping, NDA…" data-faq-filter autoComplete="off" />
    </div>
    <p className="faq-count" data-faq-count aria-live="polite"></p>

    <h2 className="h3 display mb-3">Before you place an order</h2>
    <div className="acc mb-4">
      <div className="acc-item" data-keys="price pricing cost costing quote quotation fob before sampling"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q15">Can you give me a price before sampling?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q15"><div><p>Yes. We can provide an indicative quotation from the information you already have. Final costing is confirmed once fabric, trims, construction, quantity and the other specifications are agreed, because each of those changes the cost.</p></div></div></div>
      <div className="acc-item" data-keys="quote quotation information tech pack specification what do you need"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q6">What information do you need in order to quote?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q6"><div><p>Ideally a sketch or reference photograph, the fabric composition and weight, your quantity per style and colour, your size range, and the destination market. A complete tech pack allows the fastest and most accurate costing. If you have only a photograph and an outline idea, send that and we will develop the specification with you first.</p></div></div></div>
      <div className="acc-item" data-keys="sample physical counter sample tech pack develop reference garment"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q8">Can you develop from a physical sample instead of a tech pack?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q8"><div><p>Yes. Send us the garment together with a note of what to retain and what to change. We will measure it, prepare the tech pack, identify the closest available fabric and produce a counter sample. This is often faster and more accurate than working from drawings alone.</p></div></div></div>
      <div className="acc-item" data-keys="moq minimum order quantity smallest run"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q16">What is your minimum order quantity (MOQ)?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q16"><div><p>It depends on the product, the fabric, the number of colours and the factory holding the capacity. We confirm the minimum for your specific programme rather than publishing a single figure that would not apply to most styles.</p></div></div></div>
      <div className="acc-item" data-keys="charge fee cost free payment pay quotation factory visit"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q7">Do you charge for quotations or factory visits?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q7"><div><p>No. Costings, factory sourcing, factory visits and compliance document checks are provided without charge. Physical samples and courier are charged separately, and sampling charges are normally credited against your first bulk order.</p></div></div></div>
      <div className="acc-item" data-keys="nda confidential confidentiality non-disclosure designs ip copy"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q9">Will my designs be kept confidential?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q9"><div><p>Yes. We will sign a non-disclosure agreement before you send anything, on request. Your styles, patterns and tech packs are not shown to other customers, and patterns and blocks developed for your styles belong to you.</p></div></div></div>
      <div className="acc-item" data-keys="visit factory audit inspection travel bangladesh see"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q10">Can I visit the factory before placing an order?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q10"><div><p>Yes, and we encourage it. We will arrange the schedule, transport from your hotel and an English-speaking merchandiser for the duration of the visit. You are welcome to bring your own auditor or a third-party inspection body. If you are unable to travel, live video walk-throughs of the sewing floor can be arranged.</p></div></div></div>
      <div className="acc-item" data-keys="certificate certification bsci smeta wrap gots grs oeko-tex compliance audit"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q17">Are the certifications on your website ZIM certifications?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q17"><div><p>No. Audit programmes and certifications such as BSCI, SMETA, WRAP, OEKO-TEX, GOTS and GRS are held by manufacturing units, not by a buying house, and coverage differs from one factory to the next. Before order confirmation we provide the current documents for the factory proposed for your programme.</p></div></div></div>
      <div className="acc-item" data-keys="lead time how long production timing delivery schedule calendar days"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q18">How long does production take?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q18"><div><p>Lead time depends on the fabric, the product, how quickly approvals come back, the quantity and the season. We propose a production calendar once we have reviewed your programme, rather than quoting a standard number of days that may not hold.</p></div></div></div>
    </div>

    <h2 className="h3 display mb-3">How we work</h2>
    <div className="acc mb-4">
      <div className="acc-item"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q1">What exactly does a garments buying house do?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q1"><div><p>We act as your sourcing office in Bangladesh. We find and vet the right factory, develop your samples, prepare and verify costing, follow production daily, inspect the goods, and manage shipment and documentation. You gain local control of your production without opening an office, hiring staff or travelling every month.</p></div></div></div>
      <div className="acc-item"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q2">How is a buying house different from a trading company?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q2"><div><p>A trading company buys from the factory and resells to you at its own price, so the factory cost is not visible to you. A buying house works on a disclosed commission agreed in advance, and the factory price is shown separately. You also know which factory is producing your goods, which matters for compliance and for repeat orders.</p></div></div></div>
      <div className="acc-item"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q3">Are you a member of any trade body?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q3"><div><p>Yes. ZIM Sourcing Ltd is an official member of the Bangladesh Garment Buying House Association (BGBA), the apex trade organisation for buying houses in the Bangladesh readymade garment sector, approved by the Directorate of Trade Organizations under the Ministry of Commerce. We are a registered private limited company in Bangladesh holding a valid trade licence, TIN, BIN and VAT registration, and export documentation.</p></div></div></div>
      <div className="acc-item"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q4">I am a new brand with no sourcing experience. Will you work with me?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q4"><div><p>Yes, and a number of our accounts began that way. If you do not yet have a tech pack, we will build one with you. If you are unsure about fabric weights, size grading or packing, we will explain the options and the cost implications of each. We ask only for realistic expectations on quantities and timing, both of which are set by the mills rather than by us.</p></div></div></div>
      <div className="acc-item"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q5">Which product categories do you handle?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q5"><div><p>Knitwear, woven, sweater, denim and bottoms, uniforms and workwear, and kidswear. Full details of the constructions, fabrics and finishes we run regularly are set out on our <a href="/services">products and services</a> page. If a style spans two categories, send it to us and we will identify the right manufacturing unit.</p></div></div></div>
    </div>

    <h2 className="h3 display mb-3">Factories, quality and shipping</h2>
    <div className="acc mb-4">
      <div className="acc-item"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q11">How do you select the factory for my order?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q11"><div><p>We do not own factories, so allocation is based on which unit genuinely suits the product, the quality level and the volume. Compliance status is checked before allocation, and the factory is confirmed to you by name and address at order confirmation. Our <a href="/compliance">compliance page</a> sets out what we verify.</p></div></div></div>
      <div className="acc-item" data-keys="inspection third party qc nominated sgs bureau veritas intertek"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q12">Can I appoint my own inspection company?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q12"><div><p>Yes. SGS, Intertek, Bureau Veritas, TUV or your own staff are all welcome, either instead of or alongside our team. We coordinate access and booking, and provide our own inspection report in every case.</p></div></div></div>
      <div className="acc-item" data-keys="incoterm fob cfr cif ddp exw shipping terms"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q13">Which Incoterms do you work on?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q13"><div><p>We work on FOB, FCA, CFR, CIF, DAP and DDP. The term that suits you depends on your freight arrangements and destination market, and we are happy to explain the practical differences before you decide.</p></div></div></div>
      <div className="acc-item" data-keys="documents bill of lading invoice packing list certificate of origin shipping"><h3><button className="acc-btn" type="button" aria-expanded="false" aria-controls="q14">What shipping documents do I receive?<span className="plus" aria-hidden="true"></span></button></h3><div className="acc-panel" id="q14"><div><p>Commercial invoice, packing list, bill of lading or air waybill, certificate of origin including GSP Form A where your market allows duty preference, inspection certificate, and any laboratory test reports required for your market.</p></div></div></div>
    </div>

</div>
</section>

</main>
    </>
  );
}
