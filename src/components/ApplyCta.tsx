import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { applyCta } from '@/data/content'
import { AnimatedSection, FadeUp, motion } from './Motion'

export default function ApplyCta() {
  return (
    <AnimatedSection id="apply" className="wf-section-cta">
      <div className="container">
        <div className="wf-cta-card position-relative overflow-hidden">
          {/* Decorative circles */}
          <div className="wf-cta-shape-1" aria-hidden="true" />
          <div className="wf-cta-shape-2" aria-hidden="true" />

          <div className="row position-relative" style={{ zIndex: 1 }}>
            <div className="col-lg-8 col-xl-7">
              <FadeUp>
                <span className="wf-eyebrow wf-eyebrow-yellow">Partner With Us</span>
                <h2 className="wf-display text-white mt-3">{applyCta.headline}</h2>
              </FadeUp>
              <FadeUp index={1}>
                <p className="wf-prose-light mt-4">{applyCta.body}</p>
              </FadeUp>
              <FadeUp index={2}>
                <div className="d-flex align-items-center gap-3 mt-5">
                  <motion.a
                    href={applyCta.buttonHref}
                    target={applyCta.buttonTarget}
                    rel={applyCta.buttonTarget === '_blank' ? 'noreferrer' : undefined}
                    className="wf-btn wf-btn-light"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {applyCta.buttonLabel}
                    <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2.5} className="ms-2" />
                  </motion.a>
                  <div className="d-flex gap-2">
                    <span className="wf-cta-pill">T</span>
                    <span className="wf-cta-pill">T</span>
                    <span className="wf-cta-pill">T</span>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
