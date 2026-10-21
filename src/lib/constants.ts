export const COMPANY = {
  name: 'ZIM Sourcing Ltd',
  shortName: 'ZIM Sourcing',
  legalName: 'ZIM Sourcing Ltd',
  tagline: 'Garments Buying House in Dhaka, Bangladesh',
  url: 'https://www.zimsourcing.com',
  domain: 'zimsourcing.com',
  description:
    'ZIM Sourcing Ltd manages apparel development, compliant factory sourcing, quality assurance, and export shipments in Bangladesh for international fashion brands and retailers.',
  email: 'info@zimsourcing.com',
  contactEmail: 'contact@zimsourcing.com',
  salesEmail: 'contact@zimsourcing.com',
  fallbackEmail: 'rayhanek202@gmail.com',
  phone: '+880 1819-453297',
  whatsapp: '+8801819453297',
  address: {
    street: 'House 55, Road 12, Sector 14, Uttara',
    city: 'Dhaka',
    postalCode: '1230',
    country: 'Bangladesh',
  },
  hours: 'Mon – Sat: 10:00 AM – 6:00 PM (GMT+6)',
  foundingYear: '2015',
  socials: {
    linkedin: 'https://www.linkedin.com/company/zim-sourcing',
    facebook: 'https://www.facebook.com/zimsourcing',
  },
  bgbaMember: 'Bangladesh Garment Buying House Association (BGBA)',
};

export const COMPANY_INFO = {
  ...COMPANY,
  address: 'House 55, Road 12, Sector 14, Uttara, Dhaka-1230, Bangladesh',
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Company' },
  { href: '/services', label: 'Products & Services' },
  { href: '/process', label: 'How to Order' },
  { href: '/compliance', label: 'Compliance' },
  {
    href: '/blog',
    label: 'Insights',
    children: [
      { href: '/blog', label: 'All Insights', desc: 'Guides and industry updates' },
      { href: '/blog/tech-pack-guide', label: 'Tech Pack Guide', desc: 'What belongs in a garment tech pack' },
      { href: '/blog/factory-compliance-checklist', label: 'Compliance Checklist', desc: 'Due diligence before placing an order' },
    ],
  },
  { href: '/contact', label: 'Contact' },
];

export const CAPABILITIES = [
  {
    id: 'knitwear',
    title: 'Knitwear & Jersey',
    desc: 'T-shirts, polos, hoodies, sweatshirts, activewear, and lounge sets in combed cotton, organic cotton, and blended fleece.',
    image: '/assets/img/photos/cotton-texture-900.jpg',
    leadTime: '45–60 Days',
    moq: '500 pcs/colour',
    items: ['Single & Double Jersey, Rib, Interlock', '140 – 380 GSM Heavyweight Fleeces', 'Silicone, enzyme, and bio-polishing washes'],
  },
  {
    id: 'sweaters',
    title: 'Sweaters & Flat-Knit',
    desc: 'Fine-gauge to heavy-gauge sweaters, cardigans, and pullovers from 3GG to 14GG in 100% cotton, wool, acrylic, and blended yarns.',
    image: '/assets/img/photos/sweater-900.jpg',
    leadTime: '60–75 Days',
    moq: '600 pcs/style',
    items: ['3GG, 5GG, 7GG, 12GG, 14GG Flat-knit', 'Jacquard, intarsia, cable, and ottoman knits', 'Hand-linking and continuous steaming'],
  },
  {
    id: 'denim',
    title: 'Denim & Bottoms',
    desc: 'Rigid and stretch jeans, denim jackets, shorts, and skirts with sustainable ozone, laser, and enzyme laundry washes.',
    image: '/assets/img/photos/denim-900.jpg',
    leadTime: '60–80 Days',
    moq: '1,000 pcs/wash',
    items: ['8 oz to 14.5 oz Selvedge & Comfort Stretch', 'Eco-friendly laser whiskers and ozone wash', 'OEKO-TEX certified sustainable chemicals'],
  },
  {
    id: 'woven',
    title: 'Woven Shirts & Trousers',
    desc: 'Casual shirts, formal shirts, chinos, cargo trousers, blouses, and dresses in poplin, twill, linen, and oxford weaves.',
    image: '/assets/img/photos/clothing-store-900.jpg',
    leadTime: '55–70 Days',
    moq: '800 pcs/style',
    items: ['Yarn-dyed checks, stripes, and solids', 'Non-iron, peach-skin, and wrinkle-free finishes', 'Automated collar and cuff assembly'],
  },
  {
    id: 'workwear',
    title: 'Uniforms & Workwear',
    desc: 'Industrial workwear, corporate uniforms, high-visibility clothing, and hospitality apparel meeting international standards.',
    image: '/assets/img/photos/hero-2-1280.jpg',
    leadTime: '50–65 Days',
    moq: '500 pcs/style',
    items: ['High-durability poly-cotton blends', 'Water-repellent, flame-retardant EN ISO options', 'Reinforced bar-tacking and triple stitching'],
  },
  {
    id: 'kidswear',
    title: 'Childrenswear & Babywear',
    desc: 'Sleepsuits, rompers, toddler outfits, and school uniforms made to strict CPSIA, REACH, and EN 14682 safety regulations.',
    image: '/assets/img/photos/fabric-rolls-900.jpg',
    leadTime: '50–65 Days',
    moq: '600 pcs/style',
    items: ['Nickel-free and lead-free metal snaps', 'Anti-choking pull-strength tested buttons', 'GOTS-certified organic cotton available'],
  },
];

export const PRODUCT_CATEGORIES = [
  { id: 'knitwear', name: 'Knitwear (T-shirts, Polos, Hoodies, Sweatshirts)' },
  { id: 'woven', name: 'Woven (Casual & Formal Shirts, Chinos, Trousers)' },
  { id: 'sweaters', name: 'Sweater & Flat-Knit (Cardigans, Pullovers, Vests)' },
  { id: 'denim', name: 'Denim & Bottoms (Jeans, Jackets, Shorts, Cargoes)' },
  { id: 'workwear', name: 'Workwear & Uniforms (High-Vis, Industrial, Medical)' },
  { id: 'outerwear', name: 'Outerwear & Jackets (Windbreakers, Padded Jackets)' },
  { id: 'kidswear', name: 'Childrenswear & Babywear (Rompers, Sets)' },
  { id: 'other', name: 'Other Custom Garment Programme' },
];

export const METRICS = [
  { value: '98.4%', label: 'On-Time Shipment Rate', sub: 'Audited ex-factory schedule compliance' },
  { value: '100%', label: 'Pre-Audited Factories', sub: 'BSCI, WRAP & RSC fire/electrical safety' },
  { value: 'AQL 1.5/2.5', label: 'Rigorous Inspection', sub: 'Zero tolerance for critical sewing flaws' },
  { value: '10+ Years', label: 'Industry Expertise', sub: 'Direct relationships with Bangladesh mills' },
];

export const WORKFLOW_STEPS = [
  { step: 1, title: 'Enquiry & Indicative Costing', desc: 'You send style specs, quantities and target price. We check feasibility and return with an indicative FOB cost breakdown within 24-48 hours.' },
  { step: 2, title: 'Development & Proto Sample', desc: 'Fabric and trims sourced, first pattern cut, and a proto sample produced in available fabric to confirm silhouette and proportions.' },
  { step: 3, title: 'Fit, Color & Lab Dip Approval', desc: 'Fit samples, graded size sets, lab dips (Pantone TCX/TPG), and strike-offs are approved in writing prior to bulk ordering.' },
  { step: 4, title: 'Order Confirmation & T&A Calendar', desc: 'Purchase Order issued, compliant factory allocated by name, and a time-and-action (T&A) calendar committed.' },
  { step: 5, title: 'Raw Fabric & 4-Point Inspection', desc: 'Greige and dyed fabrics inspected to the 4-point system before cutting. Shade bands, shrinkage, and fastness tests verified.' },
  { step: 6, title: 'Pre-Production (PP) Gold Seal', desc: 'Complete PP sample made with bulk fabric and trims. PP meeting conducted on the factory floor with all department heads.' },
  { step: 7, title: 'Precision Cutting & Bundling', desc: 'Automated spreading and computer-guided cutting with sequential bundle tickets to prevent shade variation across panels.' },
  { step: 8, title: 'Bulk Sewing & In-Line QC', desc: 'In-line roving inspectors check stitch balance, tension, needle holes, and critical measurement tolerances every day.' },
  { step: 9, title: 'Garment Finishing & Metal Detection', desc: 'Washing, pressing, folding, barcode hangtag attachment, and mandatory 9-point calibrated needle detection screening.' },
  { step: 10, title: 'Final Random Inspection (AQL 1.5/2.5)', desc: 'Pre-shipment audit against ISO 2859-1 standards. A comprehensive photographic report is signed off before release.' },
  { step: 11, title: 'Ex-Factory & Port Despatch', desc: 'Carton stuffing into ocean containers supervised, sealed with tamper-evident bolt seals, and dispatched to Chittagong Port.' },
  { step: 12, title: 'Shipment & Export Documents', desc: 'Full commercial documentation issued upon vessel departure: Bill of Lading, Packing List, Certificate of Origin, and GSP Form A.' },
];

export const COMPLIANCE_STANDARDS = [
  { name: 'BSCI (Amfori)', desc: 'Business Social Compliance Initiative evaluating fair remuneration, ethical treatment, and workplace safety.' },
  { name: 'RSC / Accord Safety', desc: 'RMG Sustainability Council certified structural integrity, fire separation, and electrical wiring safety.' },
  { name: 'OEKO-TEX Standard 100', desc: 'Chemical management testing ensuring all textiles, threads, and trims are free from harmful substances.' },
  { name: 'WRAP Certified', desc: 'Worldwide Responsible Accredited Production certification for ethical, lawful, and humane apparel manufacturing.' },
  { name: 'Sedex SMETA', desc: 'Four-pillar ethical audits covering labor standards, health & safety, environmental management, and business ethics.' },
  { name: 'GOTS & GRS', desc: 'Global Organic Textile Standard and Global Recycled Standard with certified chain-of-custody Transaction Certificates.' },
];
