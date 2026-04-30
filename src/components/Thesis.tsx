import { HugeiconsIcon } from '@hugeicons/react'
import { AiBrain01Icon, Leaf01Icon, ManWomanIcon, WheelchairIcon } from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import { investmentThesisAreas, thesisIntro } from '@/data/content'
import { AnimatedSection, FadeUp, SlideRight, StaggerParent, StaggerItem, motion } from './Motion'
import Framework from './Framework'

const thesisIcons: IconSvgElement[] = [
  AiBrain01Icon,
  Leaf01Icon,
  ManWomanIcon,
  WheelchairIcon,
]

export default function Thesis() {
  const introParagraphs = thesisIntro.body.filter((item) => !item.startsWith('>'))
  const criteriaItems = thesisIntro.body
    .filter((item) => item.startsWith('>'))
    .map((item) => item.replace(/^>\s*/, ''))

  return (
    <AnimatedSection id="thesis" className="wf-section">
      <div className="container">
        {/* Eyebrow + rule */}
        <div className="wf-section-eyebrow-row">
          <span className="wf-eyebrow">{thesisIntro.eyebrow}</span>
          <div className="wf-hr" />
        </div>

        {/* Split: headline left, body right */}
        <div className="row mt-5">
          <div className="col-lg-5">
            <SlideRight>
              <h2 className="wf-display">{thesisIntro.headline}</h2>
            </SlideRight>
          </div>
          <div className="col-lg-6 offset-lg-1 mt-4 mt-lg-0">
            {introParagraphs.map((para, i) => (
              <FadeUp key={i} index={i}>
                <p className="wf-prose">{para}</p>
              </FadeUp>
            ))}
            <FadeUp index={introParagraphs.length}>
              <ul className="wf-prose wf-thesis-list">
                {criteriaItems.map((item, index) => (
                  <li key={index} className="wf-thesis-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>

        {/* Area cards */}
        <StaggerParent className="row g-4 mt-5 pt-lg-3">
          {investmentThesisAreas.map((area, i) => (
            <StaggerItem key={area.title} index={i} className="col-md-6 col-lg-3">
              <motion.div
                className="wf-card-minimal"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <span className="wf-card-icon">
                  <HugeiconsIcon icon={thesisIcons[i]} size={28} strokeWidth={1.5} color="currentColor" />
                </span>
                <h3 className="wf-card-heading">{area.title}</h3>
                <p className="wf-card-body">{area.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerParent>

        <div className="wf-thesis-framework-block">
          <FadeUp>
            <h2 className="wf-display wf-thesis-framework-title">How We Invest</h2>
          </FadeUp>
          <FadeUp index={1}>
            <p className="wf-prose wf-thesis-framework-copy">
              We evaluate all investments through our 3Ts framework a rigorous but founder-friendly approach powered by our 4Cs.
            </p>
          </FadeUp>
          <Framework embedded />
        </div>
      </div>
    </AnimatedSection>
  )
}
