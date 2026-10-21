import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apparel Sourcing Insights | ZIM Sourcing Bangladesh',
  description: 'Articles, guides and updates on garment sourcing, factory compliance and product development from the merchandisers at ZIM Sourcing.',
};

export default function Page() {
  return (
    <>
      <main id="main">
<section className="pagehead">
  <div className="wrap">
    <ol className="crumbs"><li><a href="/">Home</a></li><li><span aria-current="page">Insights</span></li></ol>
    <p className="eyebrow">Insights</p>
    <h1 className="h1 display">Apparel sourcing insights.</h1>
    <p className="lead">Frequently asked questions and practical guidance, prepared by the merchandisers who manage these orders. Published to help buyers make informed sourcing decisions.</p>
  </div>
</section>

<div className="ticker" data-ticker data-src="/assets/data/industry-news.json" aria-label="Bangladesh garment industry updates"><div className="ticker-label"><span className="dot" aria-hidden="true"></span>Industry updates</div><div className="ticker-view"><ul className="ticker-track"><li className="tick-item"><a href="https://www.dhakatribune.com/business/406423/52-of-world-s-top-100-leed-certified-factories-now" target="_blank" rel="noopener"><span className="tick-date">Jul 2026</span><span className="tick-text">Bangladesh now holds 69 of the world&#x27;s 100 highest-rated LEED-certified factories, including 18 of the top 20</span><span className="tick-src">Dhaka Tribune</span></a></li><li className="tick-item"><a href="https://www.bssnews.net/business/411340" target="_blank" rel="noopener"><span className="tick-date">Jul 2026</span><span className="tick-text">RMG exports reached USD 3.89 billion in a single month, up 14.7% on the previous month</span><span className="tick-src">BSS News</span></a></li><li className="tick-item"><a href="https://www.newagebd.net/post/apparel/298663/total-number-of-leed-certified-rmg-factories-now-284" target="_blank" rel="noopener"><span className="tick-date">2026</span><span className="tick-text">284 garment factories in Bangladesh are now LEED certified, of which 121 are Platinum rated and 144 Gold</span><span className="tick-src">New Age</span></a></li><li className="tick-item"><a href="https://www.apparelviews.com/bangladeshs-rmg-exports-rise-11-in-q4-fy26" target="_blank" rel="noopener"><span className="tick-date">Q4 FY26</span><span className="tick-text">Garment exports rose 11% year on year to USD 10.10 billion in the April to June quarter</span><span className="tick-src">Apparel Views</span></a></li><li className="tick-item"><a href="https://bangladeshtextilejournal.com/yearly-review-2025-bangladesh-garment-sector-adds-record-number-of-leed-certified-green-factories-in-2025/" target="_blank" rel="noopener"><span className="tick-date">2025</span><span className="tick-text">A record 38 new LEED-certified green factories were added in a single year, 22 of them Platinum rated</span><span className="tick-src">Bangladesh Textile Journal</span></a></li><li className="tick-item"><a href="https://www.apparelviews.com/bangladeshs-rmg-exports-rise-11-in-q4-fy26" target="_blank" rel="noopener"><span className="tick-date">Q4 FY26</span><span className="tick-text">Net export value rose to 62% of earnings, up from 57% a year earlier, as local backward linkage deepens</span><span className="tick-src">Apparel Views</span></a></li></ul></div></div>

<section className="section">
  <div className="wrap">
    <a className="card reveal mb-4" href="/faq" style={{ background: 'var(--accent-soft)', borderColor: 'transparent' }}>
      <div className="split" style={{ alignItems: 'center', gap: '1.5rem' }}>
        <div>
          <span className="post-meta"><span className="badge badge-accent">Start here</span> 14 questions</span>
          <h2 className="h3 display mt-1">Frequently asked questions</h2>
          <p className="muted mt-1">How a buying house works, what to send with an enquiry, how we select and vet factories, design confidentiality, inspection and shipping documents.</p>
        </div>
        <div className="cluster"><span className="btn">Read the FAQ <svg aria-hidden="true"><use href="#i-arrow"/></svg></span></div>
      </div>
    </a>

    <div className="grid g-3">
      <a className="card card-media reveal" href="tech-pack-guide.html">
        <span className="media media-3x2"><img src="/assets/img/photos/sketching-600.jpg" srcSet="/assets/img/photos/sketching-600.jpg 600w, /assets/img/photos/sketching-900.jpg 900w" sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, 30vw" alt="Designer sketching a garment design at a studio desk" loading="lazy" decoding="async" width="600" height="400" /></span>
        <span className="card-body">
          <span className="post-meta"><span className="badge badge-accent">Guide</span> 12 min read</span>
          <h2 className="h4">What belongs in a garment tech pack (and what slows you down)</h2>
          <span className="muted small">The single document that decides whether your first sample is close or a waste of three weeks. A section-by-section breakdown with the mistakes we see most.</span>
          <span className="link-arrow">Read the guide <svg aria-hidden="true"><use href="#i-arrow"/></svg></span>
        </span>
      </a>

      <a className="card card-media reveal" href="factory-compliance-checklist.html">
        <span className="media media-3x2"><img src="/assets/img/photos/thread-spools-600.jpg" srcSet="/assets/img/photos/thread-spools-600.jpg 600w, /assets/img/photos/thread-spools-900.jpg 900w" sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, 30vw" alt="Spools of sewing thread arranged for production" loading="lazy" decoding="async" width="600" height="400" /></span>
        <span className="card-body">
          <span className="post-meta"><span className="badge badge-accent">Compliance</span> 10 min read</span>
          <h2 className="h4">The factory compliance checklist every buyer should run before placing an order</h2>
          <span className="muted small">Which certificates matter, which are easy to fake, what to ask for in writing, and the questions that reveal more than any audit report.</span>
          <span className="link-arrow">Read the guide <svg aria-hidden="true"><use href="#i-arrow"/></svg></span>
        </span>
      </a>
    </div>

    <div className="card mt-6 reveal" style={{ background: 'var(--accent-soft)', borderColor: 'transparent' }}>
      <div className="split" style={{ alignItems: 'center', gap: '1.5rem' }}>
        <div>
          <h2 className="h3 display">Further guides</h2>
          <p className="muted mt-1">We publish a new guide approximately every month, covering fabric selection, buyer due diligence, Incoterms for apparel buyers and shipping from Chattogram. We welcome suggestions for topics.</p>
        </div>
        <div className="cluster"><a className="btn" href="/quote">Suggest a topic</a></div>
      </div>
    </div>
  </div>
</section>

</main>
    </>
  );
}
