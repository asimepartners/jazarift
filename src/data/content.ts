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

export interface FaqItem {
  question: string;
  answer: string[];
}

/* ── Hero ────────────────────────────────────────────────── */

export const heroContent = {
  headline: "Healthcare investment platform for Africa",
  subheadline:
    "Pre-Seed to Series\u00A0A tech investments | Working Capital | Convertible Debt | Grant Funding | Tansaction Advisory | Strategic Market Entry | Buy & Sell Side | Global Health Partnerships",
  ctaPrimary: { label: "Submit Your Proposal", href: "http://tinyurl.com/jazarift", target: "_blank" },
  ctaSecondary: { label: "Portfolio", href: "#portfolio" },
};

export const heroStats = [
  { value: "9", label: "Portfolio Companies" },
  { value: "4", label: "Sectors" },
  { value: "2", label: "Offices" },
  { value: "3", label: "Health Nexus" },
];

/* ── Investment Thesis ───────────────────────────────────── */

export const thesisIntro = {
  eyebrow: "Investment Thesis",
  headline: "An integrated investment platform for Healthcare in Africa: from Idea to Scale and Impact",
  body: [
    "Africa's youthful population  median age 18 holds immense potential to design new healthcare solutions fit for the market. Yet startups consistently fall through the gap between early incubation and later-stage funding. In parallel, healthcare SMEs face working capital and growth equity shortages to scale and grow their businesses.",
    "Jaza Rift fills those gaps. We invest in the most promising, resilient and innovative start-ups that address pressing unmet clinical needs and aim to transform patients’ lives in Africa. Our Investment Criteria:",
    "Sector: digital health, medtech, biotech, techbio, assistive technologies, femtech.",
    "Stage: pre-seed, seed, Series A, and exceptionally Series B.",
    "Tickets: $200,000 to $2M initial investment.",
    "Countries: pan-African (Kenya, Nigeria, Egypt, South Africa) as primary. And Senegal, DRC, Côte d’Ivoire, Tunisia, Ethiopia and Tanzania as secondary markets."
  ],
};

export const thesisAreas: ThesisArea[] = [
  {
    icon: "🤖",
    title: "AI & Health",
    description:
      "We actively engage Global Health actors and investors at the intersection of Artificial Intelligence (AI), Machine Learning (ML), and healthcare in Africa. This intersection presents a compelling opportunity to significantly improve healthcare outcomes by enabling cost-effective, accessible and quality early disease detection, optimizing treatment plans, and enhancing healthcare delivery systems. With a growing and youthful population, massively growing digitization, Africa stands to benefit immensely from innovative AI-driven solutions. More at Ethos Verity AI.",
  },
  {
    icon: "🌿",
    title: "Climate & Health",
    description:
      "With Africa being disproportionately affected by climate change, investing in climate-resilient healthcare infrastructure and solutions can catalyze transformative change and create lasting benefits for communities across the continent. This presents a compelling opportunity to address pressing challenges while generating positive social and financial returns: improving healthcare access, resilience, and outcomes in the face of climate change impacts (access to renewable energy, low consumption healthcare technology, decentralized disease surveillance, access to affordable data, and community resilience offer avenues for impactful investments).",
  },
  {
    icon: "♀",
    title: "Gender & Health",
    description:
      "Unique opportunity to address women and girl's challenges in Africa through improving healthcare access, reducing maternal mortality, combating gender-based violence, and promoting reproductive health, global health actors and investors can contribute to building healthier and more equitable societies.",
  },
  {
    icon: "♿",
    title: "Mental & Behavioral Health",
    description:
      "Mental health and behavioral health innovations are growing on the continent, with locally rooted models that help remove stigma, provide safe access and support youth and founders’ mental health. We’re the first and only investment company signatory of the Founder Mental Health pledge.",
  },
];

export const investmentThesisAreas: ThesisArea[] = [
  {
    icon: "🤖",
    title: "Digital Health",
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

export const globalHealthInnovationAreas: ThesisArea[] = [
  {
    icon: "🤖",
    title: "Venture Studio & Venture Builder",
    description:
      "Jaza Rift Innovation Lab is a venture studio, startup studio or venture builder that creates from scratch startups by leveraging proven platform business models, tech innovation, and strategic partnerships. Compared to traditional investment and startup creation approaches, venture studios give 44% better results when it comes to the success rate of startups built - 84% of startups coming out of studios make it to the seed round while 72% reach Series A funding. Are you interested in funding any of the above services or benefiting from those for your own companies? Reach out to us via the form: tinyurl.com/jazabuild.",
  },
  {
    icon: "🌿",
    title: "Launchpad into Africa",
    description:
      "We support startups (digital health, medtech, biotech, assistive tech etc.) and global corporations (life sciences, bio & pharma) considering launching, testing and expanding innovations or inventions that would suit Africa’s need for affordable, quality and accessible healthcare solutions that are adapted to our resource constrained (energy, data) environment. If you’re from Kenya and want to launch in Ghana, we can provide you with a landing office, incorporation and regulatory support, access to network and financial management services to fast track your scaling. We welcome partnerships to expand the scope of solutions both locally and globally developed. We would provide a soft landing, working space and a network of potential partners across Africa.",
  },
  {
    icon: "♀",
    title: "Corporate VC as a Service",
    description:
      "As a Corporate VC as Service, Jaza Rift provides its expertise in digital health, medtech and biotech investments to any African or international entity that needs to find new innovations and develop new technologies targeting Africa. We will do all the heavy lifting on deal sourcing and analysis while you will take all of the investment decisions according to our agreed mandate. We know that either you do not want to set up your own corporate venture capital (CVC) unit in house (which can be very challenging) or you are ready to hand over your current CVC activities to an external VC, for one or more of the following reasons: 1) you don’t want to build a big team (a small team is, however, still required); 2) you want to keep all your focus on collaborating and building business, rather than getting distracted by financial management and fiduciary duties in start-ups.; 3) you know that building up expertise takes time and is costly. Doing it with us is faster and cheaper; and 4) maintaining a dedicated team is difficult and therefore working with us also means tapping into our built-up networks across Africa. Reach out to us for information.",
  },
  {
    icon: "♿",
    title: "Strategic Innovation",
    description:
      "We partner with all parties, including start-ups, academic institutions, business partners and local governments, while nurturing your employees’ innovative mindsets and capabilities for win-win results. We can execute hackathons, ideation labs, human-centered design and lean innovation to bring internal ideas to market facing innovations. We can support initiatives to encourage employees to submit and further develop their ideas for new products or business opportunities that will ultimately benefit you. We leverage both your internal network of experts and our own to explore unique solutions for specific problems and allow innovators to expand their network and raise capital.",
  },
];

export const innovationLabsIntro = {
  body: [
    "The innovation lab offers services ranging from:",
    "Ideation as a Service: human centered design frameworks to test and validate new healthcare or accessibility business ideas with rapid prototyping innovation workshops.",
    "Design as a Service: an internal or outsourced design team whenever you need it for all your UX/UI, brand identity and pitch deck designs.",
    "Capital raising as a Service: Fundraising strategy, process, and workshop to help you secure early-stage investments and grant funding for your startup.",
    "AI & Engineering as a Service: a product development team to build and launch MVP for non-technical founders. And an AI / ML & Data Science team to facilitate and enable AI & ML into your startup.",
    "Marketing & Branding as a Service: tailored solution that supports your marketing and branding functions on-demand, from strategy development to execution.",
    "Legal & Tax as a Service: company creation, company secretary, structure, operating agreements, tax and compliance advisory on-demand.",
    "CFO as a Service: get fractional CFO (not accounting) support with management and board reporting (budget vs. actual variance analysis and insights, business KPI analysis & reporting and profitability analysis), budgeting and reporting, funding strategy and support and even custom CFO Engagement.",
    "Scale-up as a Service: in partnership with a leading tech platform, playbooks (including the Growth Academy) enables scale readiness assessment, scale methodology and coaching/mentoring to help scale 10x innovations and inventions.",
  ],
};

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
    label: "Agentic World",
    title: "AI Systems & Workflow Automation",
    description:
      "We provide AI systems and workflow automation for SMEs and startups. We deploy intelligent AI agents that connect departments, automate complex tasks, and work continuously to drive unprecedented efficiency and innovation. Our AI systems include: AI Chatbots, AI Marketing Automation, AI No-Code Workflows, AI Data Governance, and AI Cloud Credits. We work with SMEs and Startups to identify the specific needs of the organization and develop a customized plan to meet those needs.",
  },
  {
    label: "Information Asymmetry",
    title: "Due Diligence and Investment Analysis",
    description:
      "Our team of experts conducts comprehensive due diligence to assess potential investments. This involves risk assessment and mitigation, market analysis, as well as legal and regulatory checks. Our advisors provide essential information to enable informed investment decisions, minimizing risks and ensuring alignment with the unique needs and challenges of the African market.",
  },
  {
    label: "Financial Engineering",
    title: "Investment Structuring & Financial Modelling",
    description:
      "Focused on providing healthcare-specific advice, we help private equity and venture capital firms efficiently structure their investments, optimizing debt and equity components, evaluating mixed capital structures, and ensuring informed decisions through in-depth financial modeling & analysis. We also provide independent financial modeling and advice to startups and SMEs.",
  },
  {
    label: "Market Entry",
    title: "Independent Valuation",
    description:
      "We offer independent valuation services using various methods to determine the fair market value of venture capital, private equity and strategic investments, only in healthcare. With our team of legal and tax partners, we also provide opinions to ensure investment terms are reasonable, equitable, transparent and fair.",
  },
  {
    label: "Negotiation Fairness",
    title: "Buy/Sell Side Support",
    description:
      "We assist clients in identifying potential targets or buyers, negotiate terms, manage due diligence, and facilitate the structuring and execution of transactions. This ensures that the transactions are well-aligned with the goals of private equity and later stage venture capital firms while navigating the complexities of the African business landscape.",
  },
  {
    label: "Theory of Change",
    title: "Impact Management and Measurement",
    description:
      "Upon specific request, we provide impact management and measurement services in alignment with the UN SDGs and international standards such as GIIN, IRIS etc. for investment companies and healthcare organizations. We ensure full consideration of clients theory of change, impact framework and alignment to best practices (including theory of change, log frames etc.)",
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

/* ── Questions ───────────────────────────────────────────── */

export const faqItems: FaqItem[] = [
  {
    question: "What is your investment thesis?",
    answer: [
      "We back founders and teams using technology to solve large and meaningful problems across Africa.",
      "We back African technology companies that are organising the offline online, digitizing key industries, and redefining the way Africans live, earn, work, and do business.",
      "Our core thesis is driven by identifying verticals in Africa where the problems are large and meaningful, which can be solved commercially, and where technology is core.",
      "We know the market is both misunderstood and overlooked, and with tailwinds of population growth, increasing internet penetration and falling data costs, rapidly developing infrastructure, strengthening governance and transparency, and a quickly emerging tech and venture ecosystem, we see significant opportunity in backing the teams leveraging technology to build the rails that will help drive Africa's exponential growth over the coming decades.",
    ],
  },
  {
    question: "At what stage do you invest?",
    answer: [
      "We are a multi-stage venture capital firm, meaning that we partner with you and invest from pre-seed through to Series B on our first check. For pre-seed investments, we typically invest in repeat founders with complete founding teams, and our intention is to continue investing over the lifecycles of company growth.",
      "In addition to our core funds (Fund I & Fund II), we also run Enza Growth Capital, an evergreen investment vehicle that can invest up to $20m per company over longer holding periods than traditional venture funds.",
    ],
  },
  {
    question: "What are your key investment sectors?",
    answer: [
      "We are finding, backing, and helping to build African technology companies that are organising the offline online, digitizing key industries, and changing the way that Africans live, earn, work, and do business. Enza Capital leads and co-leads investments into category defining technology companies in the fintech, logistics, health, human capital, and climate smart sectors across Africa.",
    ],
  },
  {
    question: "What is your ticket size?",
    answer: [
      "Our first check ranges from $250k to $5m USD, with our typical sweet spot sitting between $500k - $2m USD. We have significant capacity to follow on from our core funds and through our Growth Capital vehicle, which can invest up to $20m USD per company.",
    ],
  },
  {
    question: "Do you follow on after your initial investment?",
    answer: [
      "We have a clear reserve policy and follow-on strategy where we reserve significant capital to follow on into portfolio companies we've already backed. Not every company will receive a follow-on investment.",
      "From our Fund I we made at least one follow-on investment into 12 of the 23 companies that we backed. We also have a dedicated Growth Fund that can invest up to $20m per company in follow-on investments, this vehicle is reserved for existing Enza Capital portfolio companies that are on high growth trajectories and have a qualified demand for significant capital to scale.",
    ],
  },
  {
    question: "Do you lead investments?",
    answer: [
      "We prefer to lead investments and co-lead investments where it also fits the needs of the company. We will also participate in investment rounds with co-investors where we are not the lead investor in a smaller capacity.",
      "We typically will lead an investment where we have strong conviction in the management team and the market opportunity, and where we can add value to this stage of your business. We do take Board and Observer seats in cases where we lead or co-lead the investment, however, at the earliest stage of company formation we know this is not always necessary.",
    ],
  },
  {
    question: "Do you co-invest?",
    answer: [
      "We are highly collaborative and actively seek co-investment opportunities given the range of high quality investors backing early-stage tech companies across Africa. The majority of the investments we make will be alongside funds and other backers who are aligned with the vision, values, and plan.",
    ],
  },
  {
    question: "How long is your investment process?",
    answer: [
      "Our investment process varies in length depending on a range of variables specific to the business and the investment. On average our process from first call to cash in the bank for a lead equity investment is approximately 2.5 months, however this timeline depends on the structure and nuances of the transaction, the responsiveness to requests, the quality of information provided, and the quality of lawyers supporting all parties.",
      "Our fastest investment from start to finish has been in 2-weeks, however this is more of an exception rather than a rule. This is one of the reasons we advise companies to start building relationships and sharing information consistently before you need to fundraise, as it will typically shorten the length of the investment process.",
    ],
  },
  {
    question: "What criteria do you look for when making an investment decision?",
    answer: [
      "We look at a range of criteria when forming an investment decision, and this will change depending on the stage of the business. We focus heavily on the team, particularly at the earlier stages of a company lifecycle - this is the founding team, relevance to the market and problem being solved, proximity to market, and completeness. In addition to team we focus heavily on the problem being solved, the size of the market and opportunity, the validation, the technology, and the transaction. One of the key areas we spend time with our Founders is on working together to not only understand your fit for us, but our fit for you, which focuses on how we can help you and your company achieve the ambitious vision you've set out to achieve.",
    ],
  },
];

/* ── Apply CTA ───────────────────────────────────────────── */

export const applyCta = {
  headline: "Transaction Advisory Services",
  body: "African Healthcare SMEs and Scale Ups looking for $5M+ capital in debt, equity or quasi-equity, CFO services or AI Systems and workflow automation solutions.",
  buttonLabel: "Submit Your Proposal",
  buttonHref: "http://tinyurl.com/jazape",
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
