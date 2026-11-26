// Centralized, easily editable company configuration & placeholder content.
// Replace placeholder stats, project entries, testimonials, and contact coordinates
// with verified corporate records before production launch.

export const COMPANY_INFO = {
  name: 'ECO & LUX',
  legalName: 'ECO & LUX General Trading & Contracting Company',
  tagline: 'Civil Engineering, Construction & Infrastructure Development',
  heroHeadline: 'Building Tomorrow. Engineering Excellence Today.',
  heroSubheading:
    'Delivering innovative construction solutions and sustainable infrastructure through engineering excellence, precision, and commitment.',
  // Editable placeholder contact details
  contact: {
    addressLine1: '[Luxury Complex, 87,A.R.R Road]',
    addressLine2: '[City, Region / Postal Code — Update Address]',
    phone: '+91-9500215939',
    whatsappNumber: '9500215939', // digits only for wa.me link
    email: 'info@ecolux-contracting.example',
    officeHours: 'Mon – Sat | 08:00 – 18:00',
    mapCoordinatesLabel: 'LAT 00.0000° N  /  LON 00.0000° E (Placeholder)',
    googleMapsUrl: 'https://maps.google.com',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
];

export const ABOUT_CONTENT = {
  eyebrow: '01 // CORPORATE IDENTITY',
  headline: 'Precision Engineering. Enduring Infrastructure.',
  overview:
    'ECO & LUX General Trading & Contracting Company is an integrated civil engineering, construction, and infrastructure development enterprise committed to delivering complex vertical and horizontal assets with disciplined technical rigor.',
  secondaryCopy:
    'Combining multidisciplinary structural design, modern construction methodologies, and reliable supply-chain trading capabilities, we partner with public authorities, industrial operators, and private developers from feasibility through final commissioning.',
  vision:
    'To stand as a benchmark contracting and infrastructure partner recognized for architectural integrity, resilient civil systems, and sustainable urban development.',
  mission:
    'To execute every commission with uncompromising structural safety, transparent governance, resource efficiency, and engineering excellence that creates lasting value for communities and stakeholders.',
  coreValues: [
    {
      title: 'Structural Integrity',
      description: 'Engineering decisions anchored in verified codes, materials testing, and durable design.',
    },
    {
      title: 'Zero-Compromise Safety',
      description: 'Proactive HSE protocols protecting every worker, site visitor, and surrounding community.',
    },
    {
      title: 'Accountable Delivery',
      description: 'Disciplined cost control, milestone transparency, and dependable project governance.',
    },
    {
      title: 'Sustainable Practice',
      description: 'Efficient material sourcing and low-impact execution built for multi-decade resilience.',
    },
  ],
  safetyCommitment:
    'Every ECO & LUX project operates under strict Quality Assurance and Health, Safety & Environment (QA/HSE) management protocols—integrating daily site inspections, certified materials verification, and continuous engineering supervision.',
  image: '/images/about-engineers.jpg',
};

export const SERVICES = [
  {
    id: 'civil-construction',
    code: 'SRV-01',
    title: 'Civil Construction',
    shortDesc:
      'Foundations, earthworks, reinforced concrete structures, and heavy site engineering delivered to exact tolerances.',
    fullDesc:
      'Comprehensive heavy civil construction covering deep foundations, piling, mass concrete works, retaining systems, drainage networks, and complex site grading for institutional and municipal developments.',
    deliverables: [
      'Deep foundations, piling & shoring systems',
      'Reinforced concrete substructures & superstructures',
      'Stormwater, utility corridors & earthworks',
      'Geotechnical stabilization & site preparation',
    ],
    standard: 'ACI / BS EN / ASTM Structural Standards',
    image: '/images/service-civil.jpg',
  },
  {
    id: 'residential-construction',
    code: 'SRV-02',
    title: 'Residential Construction',
    shortDesc:
      'High-specification residential towers, gated communities, and architectural living environments crafted for longevity.',
    fullDesc:
      'Turnkey execution of multi-story residential complexes, luxury villas, and master-planned housing developments integrating thermal efficiency, acoustic comfort, and refined architectural finishes.',
    deliverables: [
      'High-rise & mid-rise residential towers',
      'Master-planned community infrastructure',
      'Architectural facades & interior fit-outs',
      'Integrated MEP & smart building readiness',
    ],
    standard: 'Energy-Efficient Envelope & Acoustic Compliance',
    image: '/images/service-residential.jpg',
  },
  {
    id: 'commercial-construction',
    code: 'SRV-03',
    title: 'Commercial Construction',
    shortDesc:
      'Flagship corporate headquarters, business parks, retail hubs, and hospitality complexes built for modern enterprise.',
    fullDesc:
      'Full-cycle delivery of Grade-A office towers, mixed-use commercial hubs, healthcare campuses, and institutional buildings engineered for operational efficiency and architectural distinction.',
    deliverables: [
      'Grade-A corporate & mixed-use towers',
      'Curtain-wall glazing & structural steel cores',
      'High-capacity MEP, HVAC & life-safety systems',
      'LEED / sustainability-aligned commissioning',
    ],
    standard: 'International Building & Life-Safety Codes',
    image: '/images/service-commercial.jpg',
  },
  {
    id: 'industrial-construction',
    code: 'SRV-04',
    title: 'Industrial Construction',
    shortDesc:
      'Heavy-duty manufacturing plants, logistics hubs, warehousing, and utility facilities engineered for high load demands.',
    fullDesc:
      'Specialized engineering and construction for industrial manufacturing plants, automated logistics centers, cold-storage hubs, and energy support facilities with heavy-load slabs and wide-span steel frames.',
    deliverables: [
      'Pre-engineered & heavy structural steel bays',
      'Super-flat high-load industrial concrete slabs',
      'Process piping supports & substation civil works',
      'Industrial fire protection & hazardous compliance',
    ],
    standard: 'Heavy Industrial Load & Process Safety Compliance',
    image: '/images/service-industrial.jpg',
  },
  {
    id: 'infrastructure-development',
    code: 'SRV-05',
    title: 'Infrastructure Development',
    shortDesc:
      'Highways, bridges, interchanges, water networks, and public corridors connecting cities and economic zones.',
    fullDesc:
      'Large-scale horizontal infrastructure spanning arterial highways, grade-separated interchanges, cable-stayed and prestressed bridges, municipal utilities, and transit corridor civil works.',
    deliverables: [
      'Bridges, viaducts & highway interchanges',
      'Asphalt & rigid pavement road networks',
      'Potable water, sewerage & district utility lines',
      'Public transit & coastal protection civil works',
    ],
    standard: 'AASHTO / Eurocode Bridge & Highway Specifications',
    image: '/images/service-infrastructure.jpg',
  },
  {
    id: 'structural-engineering',
    code: 'SRV-06',
    title: 'Structural Engineering',
    shortDesc:
      'Advanced finite-element modeling, seismic design, steel-concrete hybrid framing, and structural value engineering.',
    fullDesc:
      'In-house structural analysis and engineering optimization utilizing BIM and finite-element modeling to design safe, economical, and resilient load-bearing systems for demanding geometries.',
    deliverables: [
      'Seismic & wind-load structural analysis',
      'Long-span steel truss & post-tensioned design',
      'BIM clash detection & shop drawing detailing',
      'Structural retrofitting & load assessment',
    ],
    standard: 'BIM Level-2+ & Eurocode / IBC Design Frameworks',
    image: '/images/service-structural.jpg',
  },
  {
    id: 'project-management',
    code: 'SRV-07',
    title: 'Project Management',
    shortDesc:
      'End-to-end EPC governance, Primavera scheduling, procurement logistics, cost control, and stakeholder reporting.',
    fullDesc:
      'Structured construction management and general trading coordination covering critical-path scheduling, vendor qualification, material procurement, risk mitigation, and rigorous QA/QC auditing.',
    deliverables: [
      'EPC / Design-Build program governance',
      'Critical-path scheduling & earned-value tracking',
      'Global materials trading & supply-chain QA',
      'HSE compliance auditing & commissioning handover',
    ],
    standard: 'PMI / ISO 9001 & ISO 45001 Aligned Workflows',
    image: '/images/service-management.jpg',
  },
  {
    id: 'renovation-maintenance',
    code: 'SRV-08',
    title: 'Renovation and Maintenance',
    shortDesc:
      'Asset modernization, structural rehabilitation, facade upgrades, and long-term facility lifecycle engineering.',
    fullDesc:
      'Targeted structural rehabilitation, MEP modernization, adaptive reuse of commercial assets, and preventive engineering maintenance programs that extend asset lifespan and performance.',
    deliverables: [
      'Structural strengthening & concrete repair',
      'Curtain-wall, envelope & waterproofing upgrades',
      'Live-building MEP & energy system retrofits',
      'Preventive civil & facility maintenance contracts',
    ],
    standard: 'Minimal-Disruption Live Asset Protocols',
    image: '/images/service-renovation.jpg',
  },
];

export const PROJECT_CATEGORIES = [
  'All Projects',
  'Bridges & Infrastructure',
  'Commercial Complexes',
  'Roads & Highways',
  'Industrial Facilities',
  'Residential Buildings',
  'Large-Scale Civil',
];

// Clearly labeled illustrative/placeholder portfolio items.
export const PROJECTS = [
  {
    id: 'proj-01',
    code: 'DEMO-INF-01',
    title: 'Estuary Cable-Stayed Crossing',
    category: 'Bridges & Infrastructure',
    location: 'Sample Region — Coastal Corridor',
    status: 'Placeholder Showcase',
    summary:
      'Illustrative twin-pylon cable-stayed bridge concept engineered for multi-lane freight and commuter connectivity across a major tidal waterway.',
    scope: 'Foundations, marine piling, prestressed box-girder deck & structural stay cables.',
    specs: ['Span Concept: Multi-lane Dual Carriageway', 'Discipline: Heavy Infrastructure', 'Classification: Demo Entry'],
    image: '/images/service-infrastructure.jpg',
    featured: true,
  },
  {
    id: 'proj-02',
    code: 'DEMO-COM-02',
    title: 'Meridian Financial & Corporate Tower',
    category: 'Commercial Complexes',
    location: 'Sample Region — Central Business District',
    status: 'Placeholder Showcase',
    summary:
      'Illustrative high-rise glass-and-steel commercial headquarters featuring high-efficiency double-glazed curtain walls and reinforced concrete core.',
    scope: 'Turnkey core & shell, curtain-wall facade engineering, MEP integration.',
    specs: ['Typology: Grade-A Commercial High-Rise', 'Discipline: Commercial Construction', 'Classification: Demo Entry'],
    image: '/images/service-commercial.jpg',
    featured: false,
  },
  {
    id: 'proj-03',
    code: 'DEMO-HWY-03',
    title: 'Northern Orbital Highway Interchange',
    category: 'Roads & Highways',
    location: 'Sample Region — Metropolitan Ring Road',
    status: 'Placeholder Showcase',
    summary:
      'Illustrative multi-level grade-separated viaduct interchange designed to eliminate arterial bottlenecks and support heavy commercial logistics.',
    scope: 'Elevated post-tensioned ramps, asphalt carriageway, drainage & smart lighting.',
    specs: ['Typology: Multi-Level Highway Interchange', 'Discipline: Roads & Viaducts', 'Classification: Demo Entry'],
    image: '/images/project-highway.jpg',
    featured: false,
  },
  {
    id: 'proj-04',
    code: 'DEMO-IND-04',
    title: 'Horizon Automated Logistics & Energy Hub',
    category: 'Industrial Facilities',
    location: 'Sample Region — Industrial Free Zone',
    status: 'Placeholder Showcase',
    summary:
      'Illustrative wide-span structural steel industrial complex designed for high-bay automated warehousing and heavy equipment operations.',
    scope: 'Heavy-load post-tensioned slabs, steel portal frames, fire & MEP utilities.',
    specs: ['Typology: Heavy Industrial & Logistics', 'Discipline: Industrial Construction', 'Classification: Demo Entry'],
    image: '/images/service-industrial.jpg',
    featured: false,
  },
  {
    id: 'proj-05',
    code: 'DEMO-RES-05',
    title: 'Solstice Terraced Residences',
    category: 'Residential Buildings',
    location: 'Sample Region — Waterfront District',
    status: 'Placeholder Showcase',
    summary:
      'Illustrative contemporary residential development combining architectural stone facades, shaded terraces, and landscaped podium infrastructure.',
    scope: 'Substructure podium, multi-story concrete frame, luxury architectural finishes.',
    specs: ['Typology: Multi-Family Residential Complex', 'Discipline: Residential Construction', 'Classification: Demo Entry'],
    image: '/images/service-residential.jpg',
    featured: false,
  },
  {
    id: 'proj-06',
    code: 'DEMO-CIV-06',
    title: 'Civic Transit & Hydro-Civil Corridor',
    category: 'Large-Scale Civil',
    location: 'Sample Region — National Infrastructure Zone',
    status: 'Placeholder Showcase',
    summary:
      'Illustrative large-scale civil engineering program integrating reinforced concrete retaining basins, deep utility tunnels, and heavy bridge abutments.',
    scope: 'Mass concrete structures, dewatering, deep excavation & geotechnical reinforcement.',
    specs: ['Typology: Heavy Civil Engineering', 'Discipline: Large-Scale Civil', 'Classification: Demo Entry'],
    image: '/images/project-mega.jpg',
    featured: true,
  },
];

export const WHY_CHOOSE_US = [
  {
    code: '01',
    title: 'Engineering Expertise',
    description:
      'Multidisciplinary civil, structural, and MEP engineers equipped to resolve complex site geometries and heavy load requirements.',
    icon: 'Compass',
  },
  {
    code: '02',
    title: 'Quality Assurance',
    description:
      'Multi-stage inspection gates, certified laboratory materials testing, and rigorous documentation at every structural pour and assembly.',
    icon: 'ShieldCheck',
  },
  {
    code: '03',
    title: 'Safety First',
    description:
      'Zero-tolerance HSE culture governed by daily site risk briefings, certified PPE standards, and continuous operational supervision.',
    icon: 'HardHat',
  },
  {
    code: '04',
    title: 'On-Time Project Delivery',
    description:
      'Critical-path scheduling, integrated material procurement trading, and proactive bottleneck resolution to protect handover milestones.',
    icon: 'Clock',
  },
  {
    code: '05',
    title: 'Innovative Solutions',
    description:
      'Digital BIM coordination, value-engineered structural systems, and modern formwork methods that optimize cost without sacrificing strength.',
    icon: 'Cpu',
  },
  {
    code: '06',
    title: 'Client Satisfaction',
    description:
      'Transparent executive reporting, dedicated single-point project accountability, and long-term post-handover asset support.',
    icon: 'Award',
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Consultation & Planning',
    summary:
      'Feasibility review, site reconnaissance, scope alignment, regulatory mapping, and baseline budget & timeline definition.',
    deliverable: 'Project Charter & Master Schedule',
  },
  {
    step: '02',
    title: 'Design & Engineering',
    summary:
      'Geotechnical assessment, structural calculations, architectural coordination, BIM clash detection, and approved construction drawings.',
    deliverable: 'IFC Engineering Drawings',
  },
  {
    step: '03',
    title: 'Resource & Site Preparation',
    summary:
      'Site mobilization, HSE perimeter setup, heavy machinery deployment, and verified material sourcing through our trading network.',
    deliverable: 'Mobilized Site & Supply Plan',
  },
  {
    step: '04',
    title: 'Construction & Execution',
    summary:
      'Disciplined civil, structural, MEP, and architectural works managed by dedicated site engineers and certified trade teams.',
    deliverable: 'Milestone Structural Progress',
  },
  {
    step: '05',
    title: 'Quality Inspection',
    summary:
      'Non-destructive testing, concrete & steel lab verification, MEP commissioning, and comprehensive snag-free QA/QC sign-off.',
    deliverable: 'QA/QC Compliance Dossier',
  },
  {
    step: '06',
    title: 'Project Handover',
    summary:
      'As-built documentation, operational manuals, authority clearances, client walkthrough, and post-completion maintenance support.',
    deliverable: 'Commissioned Asset & Warranty',
  },
];

// Editable placeholder highlights — replace values with official audited company figures.
export const COMPANY_STATS = [
  {
    id: 'projects',
    value: 120,
    suffix: '+',
    label: 'Projects Completed',
    note: 'Placeholder Metric',
  },
  {
    id: 'experience',
    value: 15,
    suffix: '+',
    label: 'Years of Experience',
    note: 'Placeholder Metric',
  },
  {
    id: 'team',
    value: 350,
    suffix: '+',
    label: 'Professional Team Members',
    note: 'Placeholder Metric',
  },
  {
    id: 'satisfaction',
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    note: 'Placeholder Metric',
  },
];

// Clearly marked sample testimonials until actual client feedback is provided.
export const TESTIMONIALS = [
  {
    id: 'test-01',
    quote:
      'ECO & LUX demonstrated exceptional structural discipline from foundation piling through final commissioning. Their site safety governance and engineering documentation exceeded every benchmark on our commercial development.',
    author: 'Sample Client Representative A',
    role: 'Director of Capital Projects — Commercial Sector (Sample)',
    projectRef: 'Sample Commercial Tower Commission',
  },
  {
    id: 'test-02',
    quote:
      'Managing heavy civil infrastructure alongside tight municipal traffic constraints requires true engineering leadership. Their proactive scheduling and materials coordination kept every critical-path milestone intact.',
    author: 'Sample Client Representative B',
    role: 'Infrastructure Program Lead — Public Works (Sample)',
    projectRef: 'Sample Highway & Bridge Package',
  },
  {
    id: 'test-03',
    quote:
      'From value-engineering the structural steel framing to executing high-tolerance industrial floor slabs, the ECO & LUX team delivered consistent quality, transparent reporting, and zero safety incidents.',
    author: 'Sample Client Representative C',
    role: 'VP of Operations — Industrial & Logistics (Sample)',
    projectRef: 'Sample Industrial Hub Facility',
  },
];

export const CAREERS_OPENINGS = [
  {
    code: 'CAR-01',
    title: 'Senior Civil & Structural Engineer',
    type: 'Full-Time · Engineering Division (Sample)',
    location: 'Head Office / Project Sites',
  },
  {
    code: 'CAR-02',
    title: 'Construction Project Manager (EPC)',
    type: 'Full-Time · Project Controls (Sample)',
    location: 'Infrastructure & Commercial Sites',
  },
  {
    code: 'CAR-03',
    title: 'QA/QC & HSE Site Lead',
    type: 'Full-Time · Safety & Compliance (Sample)',
    location: 'Active Field Operations',
  },
];
