import { HugeiconsIcon } from '@hugeicons/react'
import { AiBrain01Icon, Leaf01Icon, ManWomanIcon, WheelchairIcon } from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import { thesisIntro, thesisAreas } from '@/data/content'
import { AnimatedSection, FadeUp, SlideRight, StaggerParent, StaggerItem, motion } from './Motion'
import ConveyorBelt from './ConveyorBelt'

const innovationIcons: IconSvgElement[] = [
  AiBrain01Icon,
  Leaf01Icon,
  ManWomanIcon,
  WheelchairIcon,
]

export default function InnovationLabs() {
  return (
    <AnimatedSection id="innovation-lab" className="wf-band-dark wf-innovation-labs">
      <div className="container">
        <div className="wf-section-eyebrow-row wf-eyebrow-dark">
          <span className="wf-eyebrow">Global Health Innovations</span>
          <div className="wf-hr wf-hr-dark" />
        </div>

        <div className="row mt-5">
          <div className="col-lg-5">
            <SlideRight>
              <h2 className="wf-display text-white">Global Health Innovations</h2>
            </SlideRight>
          </div>
          <div className="col-lg-6 offset-lg-1 mt-4 mt-lg-0">
            {thesisIntro.body.map((para, index) => (
              <FadeUp key={index} index={index}>
                <p className="wf-prose-light">{para}</p>
              </FadeUp>
            ))}
          </div>
        </div>

        <StaggerParent className="row g-4 mt-5 pt-lg-3">
          {thesisAreas.map((area, index) => (
            <StaggerItem key={`${area.title}-innovation`} index={index} className="col-md-6 col-lg-3">
              <motion.div
                className="wf-card-minimal wf-card-minimal-dark"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <span className="wf-card-icon wf-card-icon-dark">
                  <HugeiconsIcon icon={innovationIcons[index]} size={28} strokeWidth={1.5} color="currentColor" />
                </span>
                <h3 className="wf-card-heading wf-card-heading-dark">{area.title}</h3>
                <p className="wf-card-body wf-card-body-dark">{area.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerParent>

        <ConveyorBelt embedded />
      </div>
    </AnimatedSection>
  )
}
