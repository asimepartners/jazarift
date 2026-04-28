import { HugeiconsIcon } from '@hugeicons/react'
import { AiBrain01Icon, Briefcase01Icon, ManWomanIcon } from '@hugeicons/core-free-icons'
import { threeTs } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'

const frameworkIcons = {
  Team: ManWomanIcon,
  Taste: AiBrain01Icon,
  Terms: Briefcase01Icon,
} as const

interface FrameworkProps {
  embedded?: boolean
}

export default function Framework({ embedded = false }: FrameworkProps) {
  const content = (
    <div id="framework" className={embedded ? 'wf-framework-embedded' : undefined}>
      {embedded ? null : (
        <div className="wf-section-eyebrow-row">
          <span className="wf-eyebrow">Our Framework</span>
          <div className="wf-hr" />
        </div>
      )}

        <div className={embedded ? 'row' : 'row mt-5'}>
          <div className="col-lg-6">
            <FadeUp>
              <h2 className="wf-display">Health Nexus</h2>
            </FadeUp>
            <FadeUp index={1}>
              <p className="wf-prose mt-3">
                We evaluate all investments through our 3Ts framework, a rigorous but founder-friendly approach built for long-term healthcare value creation.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* 3Ts cards */}
        <StaggerParent className="row g-4 mt-5">
          {threeTs.map((t, i) => (
            <StaggerItem key={t.title} index={i} className="col-lg-4">
              <div className="wf-tt-card">
                <div className="wf-tt-top">
                  <span className="wf-tt-icon">
                    <HugeiconsIcon icon={frameworkIcons[t.title as keyof typeof frameworkIcons]} size={24} strokeWidth={1.8} color="currentColor" />
                  </span>
                  <div className="wf-tt-num">{t.code}</div>
                </div>
                <div className="wf-tt-divider" />
                <h3 className="wf-card-heading">{t.title}</h3>
                <p className="wf-card-body">{t.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerParent>
    </div>
  )

  if (embedded) {
    return content
  }

  return (
    <AnimatedSection id="framework" className="wf-section wf-section-grey">
      <div className="container">{content}</div>
    </AnimatedSection>
  )
}
