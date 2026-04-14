import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { portfolio } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

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
              <h2 className="wf-display">Innovations<br />We're Backing</h2>
            </FadeUp>
          </div>
        </div>

        <StaggerParent className="row g-4">
          {portfolio.map((co, i) => (
            <StaggerItem key={co.name} index={i} className="col-md-6 col-lg-4">
              <motion.div
                className="wf-portfolio-card"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className="wf-portfolio-cat-badge">{co.category}</div>
                <h3 className="wf-portfolio-name">{co.name}</h3>
                <p className="wf-card-body">{co.description}</p>
                <div className="wf-portfolio-arrow">
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} strokeWidth={2} />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}

