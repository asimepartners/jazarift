import { conveyorSteps } from '@/data/content'
import { AnimatedSection, StaggerParent, StaggerItem, FadeUp } from './Motion'

export default function ConveyorBelt() {
  return (
    <AnimatedSection className="wf-band-dark">
      <div className="container">
        <div className="wf-section-eyebrow-row wf-eyebrow-dark">
          <span className="wf-eyebrow wf-eyebrow-yellow">The Conveyor Belt</span>
          <div className="wf-hr wf-hr-dark" />
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <FadeUp>
              <h2 className="wf-display text-white">From Invention<br />to Investment</h2>
            </FadeUp>
          </div>
          <div className="col-lg-5 offset-lg-1 d-flex align-items-end mt-3 mt-lg-0">
            <FadeUp index={1}>
              <p className="wf-prose-light">
                A seamless pipeline from idea to Pan-African scale — no other platform offers this end-to-end continuity.
              </p>
            </FadeUp>
          </div>
        </div>

        <StaggerParent className="wf-conveyor-row mt-5 pt-2">
          {conveyorSteps.map((step, i) => (
            <StaggerItem key={step.num} index={i} className="wf-conveyor-step">
              <div className="wf-conveyor-num-wrap">
                <span className="wf-conveyor-num">{step.num}</span>
                {i < conveyorSteps.length - 1 && <div className="wf-conveyor-line" />}
              </div>
              <div className="wf-conveyor-content">
                <h3 className="wf-conveyor-title">{step.title}</h3>
                <p className="wf-conveyor-desc">{step.description}</p>
                <span className="wf-conveyor-tag">{step.tag}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
