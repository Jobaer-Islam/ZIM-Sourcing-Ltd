import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Belongs in a Garment Tech Pack | ZIM Sourcing',
  description: 'The sections every garment tech pack needs: technical sketch, measurement chart, bill of materials, construction notes and packing specifications.',
};

export default function Page() {
  return (
    <>
      <main id="main">
<section className="pagehead">
  <div className="wrap wrap-narrow">
    <ol className="crumbs"><li><a href="/">Home</a></li><li><a href="/">Insights</a></li><li><span aria-current="page">Tech pack guide</span></li></ol>
    <p className="post-meta mb-2"><span className="badge badge-accent">Guide</span> 12 min read &middot; Updated June 2026</p>
    <h1 className="h1 display">What belongs in a garment tech pack (and what slows you down)</h1>
    <p className="lead">A tech pack is not paperwork. It is the contract between what you imagined and what a cutting room in Gazipur will actually produce. Here is what goes in one, in the order it matters.</p>
  </div>
</section>

<section className="section">
  <div className="wrap wrap-narrow">
    <figure className="media media-16x9 mb-4">
      <img src="/assets/img/photos/swatches-1600.jpg" srcSet="/assets/img/photos/swatches-600.jpg 600w, /assets/img/photos/swatches-1600.jpg 1600w" sizes="(max-width:900px) 92vw, 56vw" alt="Technical sketches laid out with fabric swatches" loading="lazy" decoding="async" width="1600" height="900" />
    </figure>

    <div className="prose">
      <p>Almost every sampling disaster we have seen traces back to the same root cause: the factory made a reasonable assumption about something the tech pack did not specify. Not sabotage, not incompetence, a gap. Where your document is silent, someone in the sample room decides for you, and they will decide in favour of whatever is easiest to sew.</p>
      <p>So the goal is not a beautiful tech pack. The goal is a tech pack with no silences.</p>

      <h2>1. The technical sketch</h2>
      <p>Flat, proportional, black-and-white line drawings: front, back, and a detail view for anything unusual. Not a fashion illustration, and not a mood photograph. The sketch answers &ldquo;what shape is this and where do the seams go?&rdquo;</p>
      <p>Call out every seam, every topstitch line, every closure. If a topstitch is 6&nbsp;mm double-needle in a contrast thread, that belongs on the drawing with a leader line, not buried in a comments column three tabs away.</p>

      <h2>2. The measurement chart</h2>
      <p>This is the section that decides whether your sample fits. It needs three things:</p>
      <ul>
        <li><strong>Points of measure</strong> named unambiguously. &ldquo;Chest 2.5&nbsp;cm below armhole, laid flat&rdquo; beats &ldquo;chest&rdquo;.</li>
        <li><strong>Your base size</strong> clearly marked, with the full graded range.</li>
        <li><strong>Tolerances</strong> per point. Without them, the factory applies its own, and yours are probably tighter.</li>
      </ul>
      <p>Two mistakes cost the most time. The first is a chart that contradicts itself, a body width and a total garment width that cannot both be true. The second is grading that jumps inconsistently between sizes, which produces a size set where the middle sizes fit and the ends do not.</p>

      <blockquote>If we can only have one page of your tech pack, we want the measurement chart. Everything else can be rebuilt from a conversation.</blockquote>

      <h2>3. Bill of materials</h2>
      <p>Every component, with a specification precise enough to buy against:</p>
      <ul>
        <li><strong>Fabric:</strong> composition, construction, weight in GSM or oz, finish, and the width if it matters to your cost.</li>
        <li><strong>Thread:</strong> type and ticket, plus whether it must match or contrast.</li>
        <li><strong>Trims:</strong> buttons (size in ligne, material), zips (brand, length, type), elastic (width, type), drawcords, rivets.</li>
        <li><strong>Labels:</strong> main, care, size, and any origin or compliance labelling your market requires.</li>
        <li><strong>Colour:</strong> Pantone TCX or TPG references, not screen colours and not colour names.</li>
      </ul>
      <p>&ldquo;Nice quality cotton&rdquo; is not a specification. &ldquo;180&nbsp;GSM single jersey, 100% combed cotton, 30/1, bio-washed&rdquo; is.</p>

      <h2>4. Construction notes</h2>
      <p>How the garment is assembled: seam types, stitch density, whether seams are overlocked, flatlocked, coverstitched or bound. Hem depths. Interlining where it applies. Whether the neck tape is self-fabric or purchased.</p>
      <p>This is also where you record what you do <em>not</em> want. If a previous supplier gave you twisted side seams, say so and specify the fix.</p>

      <h2>5. Artwork and placement</h2>
      <p>Print and embroidery files in vector format wherever possible, with placement measured from a fixed reference point, usually the high point of the shoulder or the centre front neck. &ldquo;Chest print, centred&rdquo; will come back centred on a different part of the chest than you pictured.</p>
      <p>Specify the print method too. A design that works as a water-based print may look wrong in plastisol, and the hand-feel difference is significant on a soft jersey.</p>

      <h2>6. Packing and labelling</h2>
      <p>The section buyers forget until the goods are on the water. Polybag or not, and what material. Folded or hanging. Size stickers and where they go. Barcodes and which symbology. Cartons: dimensions, how many pieces, solid or ratio packed, and how the carton is marked.</p>
      <p>Getting this wrong does not ruin a garment, but it can add days at your distribution centre and occasionally triggers a chargeback from a retail customer.</p>

      <h2>What actually slows you down</h2>
      <ul>
        <li><strong>Silence.</strong> Any field left blank becomes someone else&rsquo;s decision.</li>
        <li><strong>Contradiction.</strong> A measurement chart that disagrees with the sketch forces the factory to guess which one you meant.</li>
        <li><strong>Screen colours.</strong> Without a Pantone reference, lab dips take extra rounds and everyone gets frustrated.</li>
        <li><strong>Late changes.</strong> Changing fabric after lab dips are approved resets the colour process completely.</li>
        <li><strong>Approving verbally.</strong> If it is not written, it did not happen. Approve in email, every time.</li>
      </ul>

      <h2>If you do not have a tech pack</h2>
      <p>Send a reference garment instead. A physical sample plus a clear list of what to keep and what to change is often faster and more accurate than a half-finished document. We measure the garment, build the tech pack, and send it back to you for approval before anything is cut.</p>

      <p><a className="link-arrow" href="/../process#techpack">See the full enquiry checklist <svg aria-hidden="true"><use href="#i-arrow"/></svg></a></p>
    </div>
  </div>
</section>

</main>
    </>
  );
}
