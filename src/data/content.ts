/* ────────────────────────────────────────────────────────────
   Jaza Rift Ventures — CMS-ready data layer
   Replace exports with headless CMS fetch when ready.
   ──────────────────────────────────────────────────────────── */

export interface ThesisArea {
  icon: string;
  title: string;
  description: string;
}

export interface ConveyorStep {
  num: string;
  title: string;
  description: string;
  tag: string;
}

export interface PortfolioCompany {
  category: string;
  name: string;
  description: string;
}

export interface FrameworkPillar {
  code: string;
  label: string;
}

export interface FrameworkDetail {
  code: string;
  title: string;
  description: string;
}

export interface InsightCard {
  label: string;
  year: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface Office {
  city: string;
  lines: string[];
}

/* ── Hero ────────────────────────────────────────────────── */

export const heroContent = {
  headline: "Healthcare investment platform for Africa",
  subheadline:
    "Pre-Seed to Series\u00A0A, debt and grant funding, transaction advisory, and strategic market entry to build the future of healthcare in Afrca.",
  ctaPrimary: { label: "Submit Your Proposal", href: "http://tinyurl.com/jazarift", target: "_blank" },
  ctaSecondary: { label: "View Portfolio", href: "#portfolio" },
};

export const heroStats = [
  { value: "9", label: "Portfolio Companies" },
  { value: "4", label: "Focus Sectors: Digital health, Medtech, Biotech, Assistive Tech" },
  { value: "2", label: "Offices in Africa" },
  { value: "3", label: "Nexus (Climate, AI, Gender)" },
];

/* ── Investment Thesis ───────────────────────────────────── */

export const thesisIntro = {
  eyebrow: "Investment Thesis",
  headline: "An integrated investment platform for Healthcare in Africa: from Idea to Scale and Impact",
  body: [
    "Africa's youthful population  median age 18 holds immense potential to design new healthcare solutions fit for the market. Yet startups consistently fall through the gap between early incubation and later-stage funding. In parallel, healthcare SMEs face working capital and growth equity shortages to scale and grow their businesses. Jaza Rift fills those gaps.",
    "In partnership with leading thought stakeholders, we've built a seamless pipeline: from research to commercialisation, idea to market, and scale in multiple countries, no other organisation in Africa offers this end-to-end continuity for healthcare investments as a platform to scale across Africa.",
  ],
};

export const thesisAreas: ThesisArea[] = [
  {
    icon: "🤖",
    title: "Digitial Health",
    description:
      "Software developed to solve a healthcare challenge. Convergence of health and tech to improve delivery and outcomes. Essentially Digital solutions (not hardware or physical assets), including insuretech, fintech for health etc.",
  },
  {
    icon: "🌿",
    title: "Medtech",
    description:
      "Medical technologies are products or solutions (ideally with services) used to save and improve people’s lives, by preventing, diagnosing, monitoring, treating and caring for diseases (- at every phase of the patient pathway).",
  },
  {
    icon: "♀",
    title: "Biotech / Techbio",
    description:
      "Biotech uses living organisms and biological systems to create products and services. TechBio integrates cutting-edge technologies, like AI, big data analytics, nanotechnology, and robotics, with biological sciences to develop innovative solutions.",
  },
  {
    icon: "♿",
    title: "Assistive Technologies",
    description:
      "Inclusive healthcare innovations for people living with disabilities across the continent. Services or products ranging from physical products to digital solutions that help people who have difficulty speaking, typing, writing, remembering, pointing, seeing, hearing, learning, walking, and many other things.",
  },
];

/* ── Healthcare Platform ───────────────────────────────────────── */

export const conveyorSteps: ConveyorStep[] = [
  {
    num: "01",
    title: "Idea & Invention",
    description:
      "Hackathons, ideation labs, and human-centered design programs surface new healthcare innovations.",
    tag: "Innovation Lab",
  },
  {
    num: "02",
    title: "Incubation & Acceleration",
    description:
      "Strategic partners across Africa provide deep incubation support, grants, and network to build investment readiness.",
    tag: "Incubation and Acceleration Partners",
  },
  {
    num: "03",
    title: "Pre-Seed → Series B",
    description:
      "Jaza Rift bridges the critical funding gap with equity capital, our 4Cs methodology, and co-investor access.",
    tag: "Jaza Rift Ventures",
  },
  {
    num: "04",
    title: "Value Creation",
    description:
      "SHB, FAN, HCN networks provide ongoing coaching, commercial partnerships, and talent access.",
    tag: "SHB · FAN · HCN",
  },
  {
    num: "05",
    title: "Scale & Impact",
    description:
      "Series B+, SMEs scale up (debt) for Pan-African expansion with dedicated advisory support from Jaza Rift Advisory.",
    tag: "10x Growth",
  },
];

/* ── Portfolio ───────────────────────────────────────────── */

export const portfolio: PortfolioCompany[] = [
  {
    category: "Digital Health",
    name: "Tanel",
    description:
      "B2B insuretech platform for companies and their employees with a digital claim management tool for healthcare providers.",
  },
  {
    category: "Biotech",
    name: "Revna Biosciences",
    description:
      "B2B precision medicine through state-of-the-art biomedical facilities integrating biomedical research insights with clinical and diagnostics services.",
  },
  {
    category: "Medtech",
    name: "Figorr",
    description:
      "B2B IoT-powered cold storage, monitoring, and last-mile delivery solution for healthcare and agriculture perishables.",
  },
  {
    category: "Digital Health",
    name: "Plural Health",
    description:
      "B2B EHR and medical practice automation platform with clinical decision support and patient connect channels to hospitals.",
  },
  {
    category: "Digital Health",
    name: "Intron",
    description:
      "Voice AI speech-driven EMR system reducing first-level diagnostics effort and improving patient information documentation.",
  },
  {
    category: "Digital Health",
    name: "Kena",
    description:
      "B2C and B2B2C Telemedicine platform connecting patients to doctors, nurses, and mental health professionals in Southern Africa.",
  },
    {
    category: "Digital Health",
    name: "Yene Health",
    description:
      "B2C/B2B Femtech startup leveraging technology in establishing a health ecosystem for women; from period & pregnancy tracking to e-pharmacy and telehealth tailored for women’s needs.",
  },
  {
    category: "Digital Health",
    name: "TPN",
    description:
      "B2B cloud-based remote diagnosis, reporting and lab information system for pathologists.",
  },
  {
    category: "Medtech>",
    name: "Neopenda",
    description:
      "B2B affordable hardware and software neonatal and adult vitals monitoring solution.",
  },
];

/* ── 4Cs ─────────────────────────────────────────────────── */

export const fourCs: FrameworkPillar[] = [
  { code: "C", label: "Capital" },
  { code: "C", label: "Community" },
  { code: "C", label: "Coaching" },
  { code: "C", label: "Crazy 10x" },
];

/* ── 3Ts Framework ───────────────────────────────────────── */

export const threeTs: FrameworkDetail[] = [
  {
    code: "Team-Product Fit",
    title: "Team",
    description:
      "We back resilient, impactful, market-driven founders. A great part of our investment conviction comes from the team's ability to execute. We look for complementary skills, relevant domain expertise, and coachability.",
  },
  {
    code: "Team-Market Fit; Product-Market",
    title: "Taste",
    description:
      "We look for innovations that address real, pressing healthcare needs — with a particular focus on digital health, medtech, biotech, and assistive technologies. We prioritize solutions with strong potential for Pan-African scalability.",
  },
  {
    code: "Fund Thesis Fit",
    title: "Terms",
    description:
      "With our investment, ESG, legal, and tax partners, we ensure investment terms are reasonable, equitable, transparent, and fair. Our advisory team supports both sides of the transaction to align incentives for long-term success.",
  },
];

/* ── Transaction Advisory ───────────────────────────────────────── */

export const diligenceCards = [
  {
    label: "Transaction Advisory Solutions",
    title: "Due Diligence",
    description:
      "Risk assessment and mitigation, market analysis, legal and regulatory checks all contextualized for the unique challenges of African markets. Our Investment Committee advises on technology fit, business model, and thesis alignment.",
  },
  {
    label: "Value over Price",
    title: "Financial Modelling & Independent Valuation",
    description:
      "Financial Modelling and Valuation: investment decisions grounded in local data content, expertise and AI.",
  },
  {
    label: "Impact Measurement",
    title: "Depth, Breadth and Scale of Impact",
    description:
      "We also provide impact management and measurement services aligned with UN SDGs, GIIN, and IRIS+ standards.",
  },
  {
    label: "Market Entry",
    title: "Where and How to Scale in Africa",
    description:
      "With our extensive networks across Africa, we advise both local and international healthcare companies on how to navigate regulatory challenges and grow across key healthcare markets in Africa.",
  },
];

/* ── Innovation Lab ──────────────────────────────────── */

export const francoSection = {
  stat: "300M+",
  statLabel: "French Speakers in Africa",
  headline: "Unlocking Francophone Africa",
  body: [
    "Africa is home to the largest French-speaking population globally. With 21 Francophone countries out of 54, there is immense and underserved potential for cross-border healthcare investment. Jaza Rift's investment and operating experience across Francophone Africa is a defining competitive advantage.",
    "We help healthcare startups to scale across Francophone markets bridging the language, regulatory, and relationship gaps that stop most investors.",
  ],
  countries: [
    "Senegal",
    "Côte d'Ivoire",
    "DRC",
    "Madagascar",
    "+ 17 More",
  ],
};

/* ── Insights ────────────────────────────────────────────── */

export const insights: InsightCard[] = [
  {
    label: "Featured Essay",
    year: "2024",
    title:
      "Filling the Gap: The Conveyor Belt of Innovation in African Healthcare",
    description:
      "How a strategic partnership between leading incubators and Jaza Rift Ventures is creating a seamless pipeline from invention to investment addressing the critical funding gap in Africa's deep health tech sector.",
    featured: true,
  },
  {
    label: "Enabling Themes",
    year: "2024",
    title: "AI & ML at the Frontier of African Healthcare",
    description:
      "Engaging global health actors and investors at the intersection of artificial intelligence and healthcare outcomes across the continent.",
  },
  {
    label: "Advisory Network",
    year: "2024",
    title: "Building the Deep Sector Expertise Network",
    description:
      "From oncology to radiology, Jaza Rift is assembling a gender-balanced network of investment and healthcare advisors across the full value chain.",
  },
];

/* ── Apply CTA ───────────────────────────────────────────── */

export const applyCta = {
  headline: "Apply for a Long-Term Strategic Partnership",
  body: "If you are building or growing a healthcare innovation in Africa across digital health, medtech, biotech, or assistive technology; or looking for scale-up debt capital, we want to hear from you.",
  buttonLabel: "Submit Your Proposal",
  buttonHref: "http://tinyurl.com/jazarift",
  buttonTarget: "_blank",
};

/* ── Footer ──────────────────────────────────────────────── */

export const offices: Office[] = [
  {
    city: "Kenya Office",
    lines: [
      "Escada Apartments, Raphta Road",
      "Westlands, Nairobi, Kenya",
    ],
  },
  {
    city: "Ghana Office",
    lines: [
      "Innohub Growth Center",
      "6 Nii Kotey Baale Ave, East Legon, Accra",
    ],
  },
];

export const footerNav = {
  platform: ["Ventures", "Advisory", "Innovation Lab", "Portfolio"],
  network: [
    "Strategic Healthcare Board",
    "Founder Advisory Network",
    "Healthcare Collaborative Network",
  ],
  company: ["About", "Team", "Insights", "Enabling Themes", "Apply", "Contact"],
};
