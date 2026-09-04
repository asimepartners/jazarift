import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon, Rocket01Icon } from '@hugeicons/core-free-icons'
import { portfolio } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

const portfolioLogos: Record<string, string> = {
  'Tanel - acquired by Alan': '/logos/afiyah-by-alan.png',
  'Revna Biosciences': '/logos/revnabiosciences_logo.jpeg',
  Figorr: '/logos/Figorr.jpeg',
  'Plural Health': '/logos/plural_health_logo.jpeg',
  Intron: '/logos/intron_inc_logo.jpeg',
  Kena: '/logos/Kena Health.jpeg',
  'Yene Health': '/logos/yenehealth_logo.jpeg',
  TPN: '/logos/TPN.png',
  Neopenda: '/logos/neopenda_logo.jpeg',
}

const portfolioLinks: Partial<Record<string, string>> = {
  Intron: 'https://www.intron.io/',
  'Revna Biosciences': 'https://www.revnabio.com/',
  Figorr: 'https://enterprise.figorr.com/',
  Neopenda: 'https://www.neopenda.com/',
  'Yene Health': 'https://yenehealth.com/',
  'Tanel - acquired by Alan': 'https://www.tanelhealth.com/en/',
  'Plural Health': 'https://plural.health/',
  TPN: 'https://pathologynetwork.com/',
}

const exitedCompanies = new Set(['Tanel - acquired by Alan'])

function PortfolioCardContent({
  name,
  category,
  description,
}: {
  name: string
  category: string
  description: string
}) {
  const logoClass =
    name === 'Revna Biosciences'
      ? 'wf-portfolio-logo wf-portfolio-logo--revna'
      : name === 'Tanel - acquired by Alan'
        ? 'wf-portfolio-logo wf-portfolio-logo--afiyah'
        : 'wf-portfolio-logo'

  return (
    <>
      {portfolioLogos[name] ? (
        <div className="wf-portfolio-logo-wrap">
          <img
            src={portfolioLogos[name]}
            alt={`${name} logo`}
            className={logoClass}
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="wf-portfolio-badges">
        <div className="wf-portfolio-cat-badge">{category}</div>
        {exitedCompanies.has(name) ? (
          <span className="wf-portfolio-exited-badge">
            <HugeiconsIcon icon={Rocket01Icon} size={13} strokeWidth={2.2} />
            Exited
          </span>
        ) : null}
      </div>

      <h3 className="wf-portfolio-name">{name}</h3>
      <p className="wf-card-body">{description}</p>
      <div className="wf-portfolio-arrow">
        <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} strokeWidth={2} />
      </div>
    </>
  )
}

export default function Portfolio() {
  return (
    <AnimatedSection id="portfolio" className="wf-section">
      <div className="container">
        <div className="wf-section-eyebrow-row">
          <span className="wf-eyebrow">Portfolio</span>
          <div className="wf-hr" />
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-lg-7">
            <FadeUp>
              <h2 className="wf-display">Disruptive Innovations We're Backing</h2>
            </FadeUp>
          </div>
        </div>

        <StaggerParent className="row g-4">
          {portfolio.map((co, i) => (
            <StaggerItem key={co.name} index={i} className="col-md-6 col-lg-4">
              {portfolioLinks[co.name] ? (
                <motion.a
                  className="wf-portfolio-card-link"
                  href={portfolioLinks[co.name]}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <div className="wf-portfolio-card wf-portfolio-card-clickable">
                    <PortfolioCardContent
                      name={co.name}
                      category={co.category}
                      description={co.description}
                    />
                  </div>
                </motion.a>
              ) : (
                <motion.div
                  className="wf-portfolio-card"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <PortfolioCardContent
                    name={co.name}
                    category={co.category}
                    description={co.description}
                  />
                </motion.div>
              )}
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
