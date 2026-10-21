import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Garment Factory Compliance Checklist | ZIM Sourcing',
  description: 'The factory compliance checklist every buyer should run before placing an order in Bangladesh: certificates, building safety, wages and questions to ask.',
};

export default function Page() {
  return (
    <>
      <main id="main">
<section className="pagehead">
  <div className="wrap wrap-narrow">
    <ol className="crumbs"><li><a href="/">Home</a></li><li><a href="/">Insights</a></li><li><span aria-current="page">Compliance checklist</span></li></ol>
    <p className="post-meta mb-2"><span className="badge badge-accent">Compliance</span> 10 min read &middot; Updated August 2026</p>
    <h1 className="h1 display">The compliance checklist to run before you place an order</h1>
    <p className="lead">A certificate proves a factory passed an audit on one day. It does not prove much about today. Here is how to check properly, and the questions that tell you more than any PDF.</p>
  </div>
</section>

<section className="section">
  <div className="wrap wrap-narrow">
    <figure className="media media-16x9 mb-4">
      <img src="/assets/img/photos/lace-fabric-1600.jpg" srcSet="/assets/img/photos/lace-fabric-600.jpg 600w, /assets/img/photos/lace-fabric-1600.jpg 1600w" sizes="(max-width:900px) 92vw, 56vw" alt="Close-up of an embroidered openwork fabric" loading="lazy" decoding="async" width="1600" height="900" />
    </figure>

    <div className="prose">
      <p>Compliance due diligence has a reputation for being a paperwork exercise, and too often that is exactly what it is: a supplier emails a folder of certificates, someone files them, and everyone moves on. That process catches almost nothing.</p>
      <p>Here is a more useful sequence.</p>

      <h2>1. Ask which factory, by name and address</h2>
      <p>Start here, because everything else depends on it. You are entitled to know the legal name and street address of the unit making your goods. If a supplier will not tell you, that is your answer, and the most common reason is that the order is being subcontracted somewhere they would rather you did not see.</p>
      <p>Unauthorised subcontracting is the single largest compliance risk in the industry. Every serious incident of the last decade has involved production in a building the buyer did not know about.</p>

      <h2>2. Check the certificate is current, and matches</h2>
      <p>Three things to verify on any audit report or certificate:</p>
      <ul>
        <li><strong>Expiry date.</strong> BSCI and SMETA reports have validity windows. An expired report is not evidence of anything.</li>
        <li><strong>The address matches.</strong> A certificate for a group&rsquo;s head office does not cover the unit sewing your order.</li>
        <li><strong>The scope matches.</strong> A certificate covering cutting and sewing does not cover the laundry your denim is going to.</li>
      </ul>

      <h2>3. Read the findings, not the score</h2>
      <p>A compliance report is more useful than a certificate because it lists what was actually wrong. Ask for the full report, then look at the corrective action plan: what was found, what was promised, and whether follow-up verification happened.</p>
      <p>A factory with open findings that it is visibly working through is often a better partner than one with a spotless report and no detail. Perfect reports sometimes mean a thorough audit; sometimes they mean a shallow one.</p>

      <blockquote>The useful question is not &ldquo;did they pass?&rdquo; It is &ldquo;what did they find, and what happened next?&rdquo;</blockquote>

      <h2>4. Confirm building safety separately</h2>
      <p>In Bangladesh, structural, fire and electrical safety sits under the RMG Sustainability Council, which took over the Accord&rsquo;s inspection programme. This is separate from social compliance and must be checked separately. Ask for the inspection status and the remediation progress, not just a membership claim.</p>

      <h2>5. The questions that reveal the most</h2>
      <p>Certificates tell you about a day. These questions tell you about a culture, and none of them are hard to ask:</p>
      <ul>
        <li><strong>How are wages paid?</strong> Digital payment to individual worker accounts creates a record. Cash does not.</li>
        <li><strong>What is peak-season overtime?</strong> A specific, unflattering number is a better sign than a confident &ldquo;always within limits&rdquo;.</li>
        <li><strong>Where does the wash and print get done?</strong> Sub-processes are where undeclared subcontracting hides.</li>
        <li><strong>Can I speak to workers without management present?</strong> The answer matters more than anything they say afterwards.</li>
        <li><strong>What was your last major finding?</strong> A supplier who can answer this straightforwardly is usually telling you the truth about other things too.</li>
      </ul>

      <h2>6. Go, or send someone</h2>
      <p>Nothing replaces a visit. Look at the exits: are they clear and unlocked? Look at the floor: is it congested? Is there a functioning grievance box, and does anyone appear to use it? Is there a cr&egrave;che if the law requires one, and are there children in it or is it a storeroom?</p>
      <p>If you cannot travel, appoint a third party such as SGS, Intertek or Bureau Veritas, or ask your buying house to walk the floor on a live video call. Any partner who resists this is telling you something.</p>

      <h2>7. Write down what happens when something goes wrong</h2>
      <p>Agree the escalation path before you need it. What counts as a critical finding? What happens to production if one is raised? Who pays for remediation? Our own position is that critical findings stop production immediately, major findings carry a 30-day window and minor findings 90 days, all with documented verification.</p>
      <p>And a point worth making: exiting a factory the moment a problem appears usually harms the workers more than it helps them. Where a finding is fixable and the factory is willing, staying and fixing it is the better outcome. Where a factory conceals or repeats, leaving is the only option.</p>

      <p><a className="link-arrow" href="/compliance">See how we vet factories <svg aria-hidden="true"><use href="#i-arrow"/></svg></a></p>
    </div>
  </div>
</section>

</main>
    </>
  );
}
