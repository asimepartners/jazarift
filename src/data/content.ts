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
  ctaPrimary: { label: "Submit Your Proposal", href: "#apply" },
  ctaSecondary: { label: "View Portfolio", href: "#portfolio" },
};

export const heroStats = [
  { value: "6", label: "Portfolio Companies" },
  { value: "4", label: "Focus Sectors" },
  { value: "2", label: "Offices in Africa" },
  { value: "21", label: "Francophone Markets" },
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
      "Software developed to solve a healthcare challenge. Convergence of health and tech to improve delivery and outcomes. Essentially Digital solutions (not hardware or physical assets).",
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
      "Technology based on biology, involving harnessing cellular and biomolecular processes to develop technologies and products that help improve people's health and lives. It provides breakthrough products and technologies to combat debilitating and rare diseases, reduce our environmental footprint, feed the hungry, use less and cleaner energy, and have safer, cleaner and more efficient industrial manufacturing processes.",
  },
  {
    icon: "♿",
    title: "Assistive Technologies",
    description:
      "Inclusive healthcare innovations for people living with disabilities across the continent.",
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
    category: "Insuretech",
    name: "Tanel",
    description:
      "B2B insuretech platform for companies and their employees with a digital claim management tool for healthcare providers.",
  },
  {
    category: "Diagnostics",
    name: "Revna Biosciences",
    description:
      "B2B cloud-based remote diagnosis, reporting, and lab information system for pathologists across Africa.",
  },
  {
    category: "Cold Chain",
    name: "Figorr",
    description:
      "B2B IoT-powered cold storage, monitoring, and last-mile delivery solution for healthcare and agriculture perishables.",
  },
  {
    category: "Health IT",
    name: "Plural Health",
    description:
      "B2B EHR and medical practice automation platform with clinical decision support and patient connect channels to hospitals.",
  },
  {
    category: "AI / Voice",
    name: "Intron",
    description:
      "Speech-driven EMR system reducing first-level diagnostics effort and improving patient information documentation.",
  },
  {
    category: "Telemedicine",
    name: "Kena",
    description:
      "B2C and B2B2C platform connecting patients to doctors, nurses, and mental health professionals in Southern Africa.",
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
    code: "First T",
    title: "Team",
    description:
      "We back resilient, impactful, market-driven founders. A great part of our investment conviction comes from the team's ability to execute. We look for complementary skills, relevant domain expertise, and coachability.",
  },
  {
    code: "Second T",
    title: "Taste",
    description:
      "We look for innovations that address real, pressing healthcare needs — with a particular focus on digital health, medtech, biotech, and assistive technologies. We prioritize solutions with strong potential for Pan-African scalability.",
  },
  {
    code: "Third T",
    title: "Terms",
    description:
      "With our investment, ESG, legal, and tax partners, we ensure investment terms are reasonable, equitable, transparent, and fair. Our advisory team supports both sides of the transaction to align incentives for long-term success.",
  },
];

/* ── Transaction Advisory ───────────────────────────────────────── */

export const diligenceCards = [
  {
    label: "Due Diligence",
    title: "Comprehensive Diligence",
    description:
      "Risk assessment and mitigation, market analysis, legal and regulatory checks all contextualized for the unique challenges of African markets. Our Investment Committee advises on technology fit, business model, and thesis alignment.",
  },
  {
    label: "Data-Driven",
    title: "AI for Impact Measurement",
    description:
      "Decisions grounded in data science and AI to prioritize innovations addressing real-world challenges. We also provide impact management and measurement services aligned with UN SDGs, GIIN, and IRIS+ standards.",
  },
];

/* ── Innovation Lab ──────────────────────────────────── */

export const francoSection = {
  stat: "300M",
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
    "Cameroon",
    "Benin",
    "Togo",
    "Madagascar",
    "+ 14 More",
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
  body: "If you are building a needed healthcare innovation in Africa digital health, medtech, biotech, or assistive technology, or looking for scale-up debt capital, we want to hear from you.",
  buttonLabel: "Submit Your Proposal",
  buttonHref: "http://tinyurl.com/jazarift",
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
